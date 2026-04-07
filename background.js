const VT_API_KEY = '<your API key to VirusTotal>';


browser.runtime.onMessage.addListener((message, sender) => {
    if (message.action === "scanUrl") {
        return scanWithVirusTotal(message.url); // Return promise directly — required for Firefox
    }
});

async function scanWithVirusTotal(url) {
    try {
        // STEP 1: Try cached result first (instant if VT already knows this URL)
        const urlId = btoa(url).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        const cachedRes = await fetch(`https://www.virustotal.com/api/v3/urls/${urlId}`, {
            headers: { "x-apikey": VT_API_KEY }
        });

        if (cachedRes.ok) {
            const cachedData = await cachedRes.json();
            const stats = cachedData.data?.attributes?.last_analysis_stats;
            if (stats) return buildResult(stats);
        }

        // STEP 2: Submit URL for fresh analysis
        const body = new URLSearchParams();
        body.append("url", url);

        const postRes = await fetch("https://www.virustotal.com/api/v3/urls", {
            method: "POST",
            headers: {
                "x-apikey": VT_API_KEY,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: body.toString()
        });

        if (postRes.status === 401) return { error: "Invalid VT API Key" };
        if (postRes.status === 429) return { error: "Rate limit hit. Wait 1 min." };
        if (!postRes.ok)            return { error: `VT Submit Error: ${postRes.status}` };

        const postData  = await postRes.json();
        const analysisId = postData.data?.id;
        if (!analysisId) return { error: "No analysis ID from VT" };

        // STEP 3: Poll until complete (max 6 × 3s = 18s)
        for (let i = 0; i < 6; i++) {
            await sleep(3000);

            const pollRes = await fetch(`https://www.virustotal.com/api/v3/analyses/${analysisId}`, {
                headers: { "x-apikey": VT_API_KEY }
            });

            if (!pollRes.ok) return { error: `VT Poll Error: ${pollRes.status}` };

            const pollData = await pollRes.json();
            const status   = pollData.data?.attributes?.status;
            const stats    = pollData.data?.attributes?.stats;

            if (status === "queued" || status === "in-progress") continue;
            if (!stats) return { error: "No stats in VT response" };
            return buildResult(stats);
        }

        return { error: "VT timed out. Try again." };

    } catch (err) {
        return { error: "VT Failed: " + err.message };
    }
}

function buildResult(stats) {
    return {
        maliciousCount:  stats.malicious  || 0,
        suspiciousCount: stats.suspicious || 0,
        harmlessCount:   stats.harmless   || 0,
        isDangerous:    (stats.malicious  || 0) > 0,
        isSuspicious:   (stats.suspicious || 0) >= 2
    };
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }