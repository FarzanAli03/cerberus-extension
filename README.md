# 🛡️ AI CyberShield

> AI-powered phishing and malware detection browser extension for Firefox.  
> Real-time URL scanning using a 3-layer detection system.

---

## ⚡ How It Works

### Layer 1 — Local Whitelist / Blacklist
Instantly checks against 100+ trusted domains and known phishing sites — no API call needed.  
Whitelisted sites (YouTube, HDFC, Google etc.) are marked **VERIFIED** immediately.

### Layer 2 — Heuristic Analysis
Scores the URL from 0–100 based on:

| Signal | Risk |
|---|---|
| Brand mimicry (fake-paypal.xyz) | +50 |
| Raw IP address | +40 |
| Suspicious TLD (.xyz .tk .ml) | +35 |
| Redirect parameters (?url= ?goto=) | +30 |
| Piracy / malware keywords | +25 |
| Excessive hyphens (3+) | +20 |
| Domain too long (40+ chars) | +20 |
| Deep subdomains | +20 |
| No HTTPS | +20 |

### Layer 3 — VirusTotal API
Checks against 70+ antivirus engines. Tries cached results first, then submits for fresh scan. Skipped entirely for whitelisted domains.

---

## 🚦 Risk Levels

| Badge | Condition |
|---|---|
| ✅ VERIFIED | Domain in local whitelist |
| ✅ SECURE | Heuristic clean + VT engines agree |
| ⚠️ SUSPICIOUS | Score 70–89 OR 2+ VT engines flag it |
| 🚨 DANGER | Score 90+ OR any VT malicious detection |

---

## 🗂️ File Structure

```
ai-cybershield/
├── manifest.json       Extension manifest (MV3)
├── popup.html          Popup UI
├── popup.js            Whitelist, heuristics, scan logic
├── background.js       VirusTotal API calls (bypasses CORS)
├── popup.css           Styles
└── icons/
    └── icon.png        Toolbar icon
```

---

## 🚀 Installation

1. Clone this repo
2. Open `background.js` and replace `VT_API_KEY` with your [VirusTotal API key](https://virustotal.com)
3. Open Firefox → `about:debugging` → **This Firefox** → **Load Temporary Add-on**
4. Select `manifest.json`
5. The shield icon appears in your toolbar

---

## 🛠️ Tech Stack

| | |
|---|---|
| Extension | Firefox WebExtensions API (MV3) |
| Threat Intel | VirusTotal API v3 |
| URL Analysis | Custom heuristic engine (Vanilla JS) |
| UI | HTML + CSS + Material Symbols |

---

## ⚠️ Limitations

- VirusTotal free tier: 4 requests/minute
- Blacklist is static (no auto-update)
- VT scan can take up to 18 seconds for uncached URLs

---

## 🔮 Future Scope

- Live blacklist feed from PhishTank / URLhaus
- HaveIBeenPwned password breach checker
- ML-based URL classifier
- Chrome support
- Auto-warn on form submissions to suspicious domains