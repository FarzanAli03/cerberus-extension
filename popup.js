// --- 1. LOCAL DATABASES ---
const whitelist = [
    // Search Engines
    "google.com", "bing.com", "yahoo.com", "duckduckgo.com", "brave.com",
    "ecosia.org", "startpage.com", "yandex.com", "baidu.com",

    // Microsoft
    "microsoft.com", "live.com", "outlook.com", "office.com", "office365.com",
    "azure.com", "microsoftonline.com", "sharepoint.com", "teams.microsoft.com",
    "onedrive.com", "xbox.com", "bing.com",

    // Google
    "google.com", "gmail.com", "youtube.com", "youtu.be", "googleusercontent.com",
    "googleapis.com", "googlevideo.com", "gstatic.com", "google.co.in",
    "google.co.uk", "drive.google.com", "docs.google.com", "meet.google.com",
    "play.google.com", "chrome.google.com",

    // Apple
    "apple.com", "icloud.com", "me.com", "itunes.com",

    // Social Media
    "facebook.com", "instagram.com", "twitter.com", "x.com", "threads.net",
    "linkedin.com", "reddit.com", "pinterest.com", "tumblr.com", "tiktok.com",
    "snapchat.com", "telegram.org", "signal.org", "whatsapp.com", "discord.com",
    "mastodon.social", "quora.com",

    // Video / Streaming
    "netflix.com", "twitch.tv", "vimeo.com", "dailymotion.com", "primevideo.com",
    "hotstar.com", "disneyplus.com", "hulu.com", "peacocktv.com", "hbomax.com",
    "max.com", "sonyliv.com", "zee5.com", "jiocinema.com", "mxplayer.in",

    // Music
    "spotify.com", "soundcloud.com", "deezer.com", "tidal.com",
    "music.apple.com", "music.youtube.com", "gaana.com", "jiosaavn.com",
    "wynk.in", "hungama.com",

    // Shopping — Global
    "amazon.com", "amazon.in", "amazon.co.uk", "amazon.de", "amazon.fr",
    "amazon.ca", "amazon.com.au", "ebay.com", "ebay.in", "etsy.com",
    "aliexpress.com", "alibaba.com", "walmart.com", "target.com", "bestbuy.com",
    "shopify.com",

    // Shopping — India
    "flipkart.com", "myntra.com", "meesho.com", "ajio.com", "nykaa.com",
    "snapdeal.com", "tatacliq.com", "reliancedigital.in", "croma.com",
    "jiomart.com", "bigbasket.com", "blinkit.com", "zepto.com",

    // Food Delivery
    "zomato.com", "swiggy.com", "doordash.com", "ubereats.com",
    "grubhub.com", "dunzo.com", "magicpin.in",

    // Travel
    "booking.com", "airbnb.com", "expedia.com", "tripadvisor.com",
    "makemytrip.com", "goibibo.com", "cleartrip.com", "ixigo.com",
    "irctc.co.in", "skyscanner.com", "kayak.com", "hotels.com",
    "agoda.com", "yatra.com",

    // Finance & Banking — Global
    "paypal.com", "stripe.com", "wise.com", "revolut.com", "cash.app",
    "venmo.com", "squareup.com", "intuit.com", "mint.com",

    // Finance & Banking — India
    "paytm.com", "phonepe.com", "gpay.com", "mobikwik.com",
    "razorpay.com", "billdesk.com", "hdfcbank.com", "icicibank.com",
    "sbi.co.in", "axisbank.com", "kotak.com", "yesbank.in",
    "bajajfinserv.in", "groww.in", "zerodha.com", "upstox.com",
    "angelone.in", "icicidirect.com", "nsdl.co.in", "cdsl.com",

    // Developer / Tech
    "github.com", "gitlab.com", "bitbucket.org", "stackoverflow.com",
    "npmjs.com", "pypi.org", "docker.com", "kubernetes.io",
    "developer.mozilla.org", "w3schools.com", "geeksforgeeks.org",
    "leetcode.com", "hackerrank.com", "codepen.io", "replit.com",
    "vercel.com", "netlify.com", "heroku.com", "digitalocean.com",
    "aws.amazon.com", "cloud.google.com", "portal.azure.com",
    "cloudflare.com", "nginx.com", "apache.org", "linux.org",

    // Productivity / Tools
    "notion.so", "trello.com", "asana.com", "slack.com", "zoom.us",
    "figma.com", "canva.com", "miro.com", "airtable.com",
    "dropbox.com", "box.com", "evernote.com", "todoist.com",
    "monday.com", "clickup.com", "basecamp.com", "jira.atlassian.com",
    "confluence.atlassian.com", "atlassian.com",

    // AI Tools
    "openai.com", "chatgpt.com", "anthropic.com", "claude.ai",
    "gemini.google.com", "copilot.microsoft.com", "huggingface.co",
    "midjourney.com", "perplexity.ai", "character.ai",

    // News — Global
    "bbc.com", "bbc.co.uk", "cnn.com", "reuters.com", "apnews.com",
    "theguardian.com", "nytimes.com", "washingtonpost.com",
    "forbes.com", "bloomberg.com", "techcrunch.com", "theverge.com",
    "wired.com", "arstechnica.com", "engadget.com", "zdnet.com",

    // News — India
    "ndtv.com", "timesofindia.com", "hindustantimes.com", "thehindu.com",
    "indianexpress.com", "livemint.com", "economictimes.com",
    "news18.com", "indiatoday.in", "scroll.in", "thewire.in",
    "moneycontrol.com", "businessstandard.com",

    // Education
    "wikipedia.org", "khanacademy.org", "coursera.org", "udemy.com",
    "edx.org", "skillshare.com", "linkedin.com/learning", "udacity.com",
    "brilliant.org", "duolingo.com", "byjus.com", "unacademy.com",
    "vedantu.com", "toppr.com",

    // Government — India
    "gov.in", "nic.in", "india.gov.in", "mca.gov.in", "incometax.gov.in",
    "gst.gov.in", "epfindia.gov.in", "uidai.gov.in", "digilocker.gov.in",
    "passport.gov.in", "irctc.co.in", "npci.org.in",

    // Government — US
    "usa.gov", "irs.gov", "ssa.gov", "medicare.gov",

    // Health
    "webmd.com", "mayoclinic.org", "healthline.com", "medlineplus.gov",
    "1mg.com", "practo.com", "netmeds.com", "pharmeasy.in",

    // Miscellaneous
    "archive.org", "medium.com", "substack.com", "wordpress.com",
    "blogger.com", "reddit.com", "imgur.com", "giphy.com",
    "pastebin.com", "typeform.com", "surveymonkey.com",
    "haveibeenpwned.com", "virustotal.com"
];

const blacklist = [
    // Fake login / credential phishing
    "free-robux-login.net", "verify-bank-secure.xyz", "urgent-update-account.com",
    "secure-paypal-login.com", "paypal-secure-login.net", "paypal-update-info.com",
    "google-account-verify.com", "gmail-login-secure.net", "accounts-google-verify.com",
    "apple-id-locked.com", "appleid-support-login.net", "apple-verify-account.com",
    "amazon-account-suspended.com", "amazon-verify-login.net",
    "microsoft-account-alert.com", "outlook-verify-login.net",
    "facebook-security-alert.net", "instagram-verify-login.com",
    "netflix-billing-update.com", "netflix-payment-failed.net",

    // Fake prize / scam
    "you-have-won-iphone.com", "claim-your-prize-now.net", "free-gift-card-winner.com",
    "congratulations-winner.xyz", "survey-reward-claim.com",

    // Crypto scams
    "bitcoin-doubler.net", "crypto-giveaway-elon.com", "eth-free-airdrop.xyz",
    "binance-bonus-claim.net", "coinbase-verify-wallet.com",

    // Fake tech support
    "windows-virus-detected.com", "your-pc-is-infected.net", "microsoft-support-alert.com",
    "call-apple-support-now.com", "google-security-warning.net",

    // Fake banking
    "sbi-kyc-update.com", "hdfc-account-verify.net", "icici-bank-login-secure.com",
    "paytm-kyc-expired.net", "upi-verify-account.com",

    // Malware / exploit domains (commonly reported)
    "Track.liveadexchanger.com", "ads.ad-center.com", "click2.email-a.com",
    "bestadvertising.net", "cdn.rawgit-user.com", "download-free-software.net",
    "cracked-software-free.com", "nulled-scripts.xyz",

    // Piracy (optional — remove if you don't want to block these)
    "filmyzilla.com", "filmywap.com", "moviesda.net", "tamilrockers.ws",
    "khatrimaza.org", "9xmovies.in", "bolly4u.org", "hdmovies4u.com",
    "1337x.to", "thepiratebay.org", "rarbg.to", "yts.mx",

    // Known phishing/scam TLD abuse
    "login-secure.xyz", "verify-account.tk", "update-info.ml",
    "free-download.ga", "prize-claim.cf", "account-suspended.pw"
];

// --- 2. HEURISTIC ANALYSIS ---

function isWhitelisted(hostname) {
    return whitelist.some(domain =>
        hostname === domain || hostname.endsWith("." + domain)
    );
}

async function runHeuristicAnalysis(url) {
    let hostname, fullUrl;
    try {
        const parsed = new URL(url);
        hostname = parsed.hostname.replace(/^www\./, '');
        fullUrl  = url.toLowerCase();
    } catch (e) {
        return { risk: 0, status: "SAFE", reason: "Could not parse URL" };
    }

    if (isWhitelisted(hostname)) return { risk: 0, status: "VERIFIED" };
    if (blacklist.includes(hostname)) return { risk: 100, status: "DANGER", reason: "Local Blacklist" };

    let riskScore = 0;
    let detections = [];

    // Brand mimicry — only flag if NOT a whitelisted real domain
    ["paypal","google","amazon","microsoft","apple","facebook","netflix","instagram","youtube"].forEach(brand => {
        if (hostname.includes(brand) && !isWhitelisted(hostname)) {
            riskScore += 50;
            detections.push("Brand Mimicry");
        }
    });

    // Suspicious TLDs
    ['.xyz','.zip','.top','.tk','.ml','.ga','.cf','.pw','.click','.icu'].forEach(tld => {
        if (hostname.endsWith(tld)) { riskScore += 35; detections.push("Suspicious TLD"); }
    });

    // Piracy / redirect keywords
    ["movies","stream","watch-online","free-download","torrent","pirate","cracked",
     "filmyz","bolly4u","moviesda","hdmovie","redirect","go.php","click.php","out.php","redir"
    ].forEach(kw => {
        if (fullUrl.includes(kw)) { riskScore += 25; detections.push(`Keyword: ${kw}`); }
    });

    // Redirect parameters in query string
    if (/[?&](url|redirect|goto|link|target|dest|next|return)=/i.test(fullUrl)) {
        riskScore += 30; detections.push("Redirect Parameter");
    }

    // Excessive hyphens
    if ((hostname.match(/-/g) || []).length >= 3) { riskScore += 20; detections.push("Excessive Hyphens"); }

    // Very long domain
    if (hostname.length > 40) { riskScore += 20; detections.push("Long Domain"); }

    // Raw IP address
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(hostname)) { riskScore += 40; detections.push("Raw IP"); }

    // Deep subdomains
    if (hostname.split('.').length > 4) { riskScore += 20; detections.push("Deep Subdomain"); }

    // No HTTPS
    if (!url.startsWith("https://")) { riskScore += 20; detections.push("No HTTPS"); }

    riskScore = Math.min(riskScore, 100);

    return {
        risk: riskScore,
        status: riskScore >= 90 ? "DANGER" : (riskScore >= 70 ? "SUSPICIOUS" : "SAFE"), 
        reason: [...new Set(detections)].slice(0, 3).join(", ") || "None"
    };
}

// --- 3. VIRUSTOTAL — routed through background.js to bypass CORS ---
function checkVirusTotal(url) {
    return new Promise((resolve) => {
        browser.runtime.sendMessage({ action: "scanUrl", url }, (response) => {
            if (browser.runtime.lastError) {
                resolve({ error: "BG error: " + browser.runtime.lastError.message });
            } else {
                resolve(response || { error: "No response from background" });
            }
        });
    });
}

// --- 4. UI ELEMENTS ---
const scanBtn        = document.getElementById('scan-btn');
const statusBadge    = document.getElementById('status-badge');
const urlDisplay     = document.getElementById('current-url');
const feedback       = document.getElementById('pass-feedback');
const radarContainer = document.getElementById('radar-container');

// --- 5. DISPLAY CURRENT TAB URL ON LOAD ---
browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    try {
        urlDisplay.innerText = new URL(tabs[0].url).hostname;
    } catch (e) {
        urlDisplay.innerText = "Internal Page";
    }
});

// --- 6. SCAN BUTTON ---
scanBtn.addEventListener('click', async () => {
    document.body.style.border = "none";

    // Scanning UI
    scanBtn.innerHTML = `<span class="material-symbols-outlined">hourglass_top</span> AI ANALYZING...`;
    scanBtn.disabled  = true;
    statusBadge.textContent = "SCANNING";
    statusBadge.className   = "badge-scanning";
    setFeedback("Running local heuristics...", "#94a3b8");
    radarContainer.classList.add("is-scanning");

    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    const tab  = tabs[0];

    // Block internal pages
    if (!tab?.url || !tab.url.startsWith("http")) {
        setFeedback("Cannot scan internal browser pages.", "#94a3b8");
        radarContainer.classList.remove("is-scanning");
        resetBtn();
        return;
    }

    // Run local check first
    setFeedback("Running local heuristics...", "#94a3b8");
    const local = await runHeuristicAnalysis(tab.url);

    // Skip VT entirely for whitelisted domains
    let vt = {};
    if (local.status === "VERIFIED") {
        vt = { harmlessCount: "Whitelisted", skipped: true };
    } else {
        setFeedback("Checking locally + querying VirusTotal...", "#94a3b8");
        vt = await checkVirusTotal(tab.url);
    }

    radarContainer.classList.remove("is-scanning");

    // Determine result
    const isDanger  = local.status === "DANGER"     || vt?.isDangerous;
    const isSuspect = local.status === "SUSPICIOUS" || vt?.isSuspicious;

    if (isDanger) {
        setBadge("DANGER", "badge-danger");
        document.body.style.border = "2px solid #ef4444";
        const msg = vt?.isDangerous
            ? `⚠ Flagged by ${vt.maliciousCount} VT engine${vt.maliciousCount !== 1 ? 's' : ''}`
            : `⚠ Local: ${local.reason}`;
        setFeedback(msg, "#f87171");

    } else if (isSuspect) {
        setBadge("SUSPICIOUS", "badge-suspicious");
        document.body.style.border = "2px solid #fbbf24";
        setFeedback(`⚠ ${local.reason}`, "#fbbf24");

    } else {
        setBadge("SECURE", "badge-safe");
        if (vt?.skipped) {
            setFeedback(`✓ Trusted domain — VT scan skipped`, "#34d399");
        } else if (vt?.error) {
            setFeedback(`Local: Clean ✓  |  VT: ${vt.error}`, "#94a3b8");
        } else {
            setFeedback(`✓ Clean — ${vt.harmlessCount} VT engines agree`, "#34d399");
        }
    }

    resetBtn();
});

function setBadge(text, className) {
    statusBadge.textContent = text;
    statusBadge.className   = className;
}

function setFeedback(text, color) {
    feedback.innerText   = text;
    feedback.style.color = color;
}

function resetBtn() {
    scanBtn.innerHTML = `<span class="material-symbols-outlined">bolt</span> RE-SCAN`;
    scanBtn.disabled  = false;
}