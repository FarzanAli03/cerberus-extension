# Cerberus CyberShield 🛡️

## Problem Statement
Every day, millions of users fall victim to phishing websites, fake login pages, and malicious URLs that look legitimate. Most people cannot tell the difference between a real banking site and a convincing fake. Existing browser security tools are either too slow, require paid subscriptions, or miss region-specific threats targeting Indian users (fake UPI pages, SBI/HDFC phishing, fake government portals).

## Project Description
AI CyberShield is a Firefox browser extension that scans any website in real time using a 3-layer detection system:

**Layer 1 — Local Whitelist / Blacklist**  
Instantly recognizes 100+ trusted domains (Google, YouTube, HDFC, SBI, IRCTC, Zomato etc.) and known phishing sites. Whitelisted sites are marked **VERIFIED** instantly with zero API calls.

**Layer 2 — Heuristic Analysis Engine**  
A custom scoring engine analyses the URL structure and assigns a risk score from 0–100 based on signals like brand mimicry, suspicious TLDs (.xyz, .tk), raw IP addresses, redirect parameters, piracy keywords, excessive hyphens, and missing HTTPS.

**Layer 3 — VirusTotal API**  
For unknown domains, the URL is checked against 70+ antivirus engines via the VirusTotal API. Cached results are fetched instantly; uncached URLs are submitted for a fresh scan.

| Badge | Meaning |
|---|---|
| ✅ VERIFIED | Domain is in local whitelist |
| ✅ SECURE | Heuristic clean + VT engines agree |
| ⚠️ SUSPICIOUS | Score 70–89 OR 2+ VT engines flag it |
| 🚨 DANGER | Score 90+ OR any VT malicious detection |

---

## Google AI Usage

### Tools / Models Used
- VirusTotal API v3 (AI-powered threat intelligence across 70+ engines)

### How Google AI Was Used
VirusTotal's threat intelligence engine is used as the third layer of detection. When a URL passes the local whitelist and heuristic checks, it is submitted to VirusTotal which runs it through 70+ antivirus and AI-based threat detection engines simultaneously. The extension first checks for a cached result (instant), and if unavailable, submits the URL for a live scan and polls every 3 seconds until the analysis is complete. The result (malicious count, suspicious count, harmless count) is used to determine the final SECURE, SUSPICIOUS, or DANGER verdict shown to the user.

---

## Proof of Google AI Usage

https://drive.google.com/file/d/1QLPKlyXGrwY5bxtHgvzKqQv-Fce1MPNT/view?usp=drive_link
https://drive.google.com/file/d/1MOKK6BBcVprmmbh94Wr8siraJAekFMmN/view?usp=drive_link

---

## Screenshots

https://drive.google.com/file/d/149L37RpoF_RXLhXPBLnKp13rssSeb5LC/view?usp=drive_link
https://drive.google.com/file/d/1iNoJ-szAj2oz_H2f4tj0TPxfGMwn6r9A/view?usp=drive_link

---

## Demo Video

https://drive.google.com/file/d/1dKa0M_sa2DhGdry_vPfWZeDQwwIMvrSy/view?usp=drive_link

---

## Installation Steps

```bash
# Clone the repository
git clone <your-repo-link>

# Go to project folder
cd ai-cybershield
```

**Add your VirusTotal API key:**  
Open `background.js` and find this line at the top:
```js
const VT_API_KEY = "your-api-key-here"; // ← paste your VirusTotal API key here
```
Replace `"your-api-key-here"` with your free API key from [virustotal.com](https://virustotal.com).

**Load the extension in Firefox:**
1. Open Firefox and go to `about:debugging`
2. Click **This Firefox** → **Load Temporary Add-on**
3. Select the `manifest.json` file from the project folder
4. A shield icon will appear in your Firefox toolbar

> **Note:** No `npm install` needed — this extension runs entirely in vanilla JS with no dependencies.
