[![Glama MCP Server](https://glama.ai/mcp/servers/willowswt/b2b-lead-churn-substack-mcp/badges/score.svg)](https://glama.ai/mcp/servers/willowswt/b2b-lead-churn-substack-mcp) [![Apify Store Actor](https://img.shields.io/badge/Apify_Store-b2b_lead_churn_substack_mcp-00C853?logo=apify&logoColor=white)](https://apify.com/church_of_loujess/b2b-lead-churn-substack-mcp) [![MCP Protocol](https://img.shields.io/badge/MCP-2025--06--18_Streamable_HTTP_%26_stdio-blue)](https://modelcontextprotocol.io) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **⚡ Instant Remote Streamable-HTTP Endpoint (Zero Local Install):** `https://church-of-loujess--b2b-lead-churn-substack-mcp.apify.actor/mcp`  
> **🔑 Get Your Free API Token (`$5.00/mo` Free Credit Included):** [Apify Console -> Settings -> Integrations](https://console.apify.com/settings/integrations)  
> **🌐 Hosted Apify Store Page & Interactive Runner:** [https://apify.com/church_of_loujess/b2b-lead-churn-substack-mcp](https://apify.com/church_of_loujess/b2b-lead-churn-substack-mcp)

## What can Substack, B2B Churn & Lead MCP Server do?

**Substack, B2B Churn & Lead MCP Server** is a live, **zero-API-key Streamable-HTTP Model Context Protocol (`MCP`) server** running in **256 MB Standby Mode** (`https://church-of-loujess--b2b-lead-churn-substack-mcp.apify.actor/mcp`). Give **Claude Desktop, Cursor, ChatGPT, Windsurf, Codex, or autonomous SDR agents** instant access to **5 high-intent B2B lead & sponsorship tools** — covering **Substack newsletter & sponsor discovery, 1–2 star Shopify competitor churn mining, Linktree/bio email extraction, company website contact crawling, and Show HN / Product Hunt startup launches**:

<table>
<tr>
<th>📦 What you can extract</th>
<th>⚙️ Features & integrations</th>
</tr>
<tr>
<td valign="top">

📰 **Substack authors & sponsor kits** (`search_substack_newsletters_and_authors` — emails, Passionfroot links & recent posts) <br>
😡 **Shopify 1–2 star churn leads** (`mine_shopify_competitor_churn_reviews` — churn score 0–100 + resolved store emails) <br>
🌲 **Linktree & bio-hub emails** (`extract_bio_link_emails` — verified emails, Calendly links & socials) <br>
🌐 **Company website contacts** (`find_company_website_contacts` — `/contact` & `/about` emails, phones & socials) <br>
🚀 **Show HN & Product Hunt launches** (`search_hn_producthunt_launches` — newly launched startups & founder handles) <br>
💸 **`$0.00` free MCP discovery** `initialize`, `tools/list`, and `ping` are `$0.00` free; pay only per `tools/call`

</td>
<td valign="top">

⚡ **Native Streamable HTTP (`/mcp`)** compatible with MCP `2025-06-18`, `2025-03-26` & `2024-11-05` <br>
🔓 **Zero external SaaS subscriptions** replaces Apollo/BuiltWith/Passionfroot seats inside your AI IDE or chat <br>
🧹 **Built-in email de-obfuscation** strips `noreply@`, platform junk & decodes `[at]` / `mailto:` links <br>
🔀 **Dual-Mode execution** works as a live `/mcp` server AND as a Console/API Batch Actor <br>
⬇️ **Structured JSON + Dataset** clean lead payloads ready for Clay, HubSpot, Instantly, or Notion <br>
🤖 **Autonomous GTM agent ready** chain discovery -> domain crawl -> draft email in one prompt

</td>
</tr>
</table>

Instead of exporting CSVs across four separate tools, an AI agent connected to this single `/mcp` URL can **discover a newly launched startup on Show HN or an angry 1-star Klaviyo merchant, crawl their company domain for a verified email and LinkedIn URL, and draft a personalized outreach email** inside one conversation.

## What data can I extract with Substack, B2B Churn & Lead MCP Server?

All 5 tools run live on demand over direct zero-proxy HTTP with automatic junk-domain and noreply email filtering:

- **Newsletter & creator sponsorship leads:** _Substack + Linktree/Beacons in one server_. `search_substack_newsletters_and_authors` and `extract_bio_link_emails` uncover verified personal/agency emails, `sponsorshipUrl` (`passionfroot.me`, `paved.com`, `/sponsor`), `calendly` booking links, social profiles, and recent content.

- **Competitor churn & switching-intent leads:** _Shopify App Store 1–2 star review interception_. `mine_shopify_competitor_churn_reviews` scores every review `0–100` across 12 switching/billing/reliability signals (`CHURN_SIGNALS`) and probes the merchant's live Shopify domain + `/pages/contact` for emails.

- **Startup launch & universal domain enrichment:** _chain `search_hn_producthunt_launches` -> `find_company_website_contacts`_. Find freshly launched developer/AI/SaaS startups and immediately enrich their `startupUrl` into verified founder/team emails, phones, and LinkedIn company pages.

### 🛠️ Live MCP Tools Included on This Server

| MCP Tool Name | Arguments (`params.arguments`) | What It Returns |
| :--- | :--- | :--- |
| `search_substack_newsletters_and_authors` | `query` (required), `maxResults` (`1`–`15`, default `6`) | Search Substack by niche/subdomain and return author names, verified emails, subscriber estimates, bestseller badges, Passionfroot/sponsor URLs, socials & latest 3 posts. |
| `mine_shopify_competitor_churn_reviews` | `appSlug` (required, e.g. `"klaviyo-email-marketing"`), `maxReviews` (`1`–`25`), `resolveMerchantDomains` (`true`) | Extract 1–2 star competitor reviews on `apps.shopify.com`, score churn intent (`0–100`), and probe merchant storefront domains & contact emails. |
| `extract_bio_link_emails` | `url` (required, e.g. `"https://linktr.ee/..."`) | Crawl Linktree, Beacons, Stan Store, Carrd, or creator bio pages for verified emails, Calendly/Cal.com links, socials & external domains. |
| `find_company_website_contacts` | `url` (required, e.g. `"linear.app"`) | Crawl a company homepage plus `/contact` & `/about` subpages to extract clean business emails, phone numbers, and LinkedIn/X/GitHub links. |
| `search_hn_producthunt_launches` | `query` (optional keyword filter), `maxResults` (`1`–`25`, default `10`) | Search recent Show HN, Ask HN, and Product Hunt launches with startup URLs, founder handles, points, comment counts & threads. |

> Need more specialized workflows? Combine this Actor with these dedicated tools from our suite:
>
> - 📰 [Substack Newsletter & Sponsor Leads Scraper](https://apify.com/church_of_loujess/substack-newsletter-leads-scraper): need 500+ Substack leads in a scheduled bulk CSV? Use our dedicated Batch Scraper
> - 🛍️ [Shopify App Reviews & Churn Leads Scraper](https://apify.com/church_of_loujess/shopify-app-reviews-leads-scraper): bulk-scrape multi-app Shopify reviews with full rating filters
> - 🌐 [Website Email, Phone & Tech Stack Finder](https://apify.com/church_of_loujess/website-email-phone-finder): enrich bulk domain lists with live DNS/MX mail provider & 50+ tech stack signals
> - 🎵 [TikTok Intelligence MCP Server](https://apify.com/church_of_loujess/tiktok-intelligence-mcp): add 6 live TikTok creator, hook, sponsor & comment-lead MCP tools alongside this server

## How much will Substack, B2B Churn & Lead MCP Server cost?

Substack, B2B Churn & Lead MCP Server uses transparent **Pay-Per-Event (PPE)** pricing where one event (`mcp-tool-call`) equals one successful **MCP Tool Call**. Connecting your AI client (`initialize`), inspecting tool schemas (`tools/list`), and health/keepalive checks (`ping`) are **`$0.00` FREE** — there is **$0.00 Actor start fee** on MCP calls.

Paid Apify plans automatically unlock volume discounts up to **55% off** ($0.028 on Starter/Bronze, $0.022 on Scale/Silver, and **$0.018** on Business/Gold, Platinum & Diamond) with zero residential proxy surcharges:

| Apify Plan / Tier | Price per MCP `tools/call` execution | Price per 1,000 MCP tool calls | Batch Depth & Unmasking | Approx. Monthly Capacity |
| :--- | :--- | :--- | :--- | :--- |
| **Free (`FREE` Trial Preview)** | `$0.04` | `$40.00` | **3 records/call trial** (first 2 unmasked, 3rd preview-masked) | **~125** trial calls |
| **Starter (`BRONZE` — `$29/mo`)** | `$0.028` | `$28.00` | **Unlimited depth & 100% unmasked** | **~1,035** MCP tool calls |
| **Scale (`SILVER` — `$199/mo`)** | `$0.022` | `$22.00` | **Unlimited depth & 100% unmasked** | **~9,045** MCP tool calls |
| **Business (`GOLD` — `$999/mo`)** | `$0.018` | `$18.00` | **Unlimited depth & 100% unmasked** | **~55,500** MCP tool calls |
| **Enterprise (`PLATINUM` / `DIAMOND`)** | `$0.018` / `$0.018` | `$18.00` | **Unlimited depth & 100% unmasked** | Custom high-volume SLA |

> **Free Trial vs. Paid Plan Unlock:** On the Apify Free tier, each `mcp-tool-call` returns up to **3 trial records** (first `2` records `100%` unmasked, `3rd` record preview-masked). Upgrading to **[Apify Starter (`$29/mo`)](https://console.apify.com/billing/subscription)** or higher unlocks full multi-record batch depth, `100%` unmasked records, and up to **55% lower per-call rates**. Check the [pricing tab](https://apify.com/church_of_loujess/b2b-lead-churn-substack-mcp/pricing) for full details.

## How do I use Substack, B2B Churn & Lead MCP Server?

Substack, B2B Churn & Lead MCP Server is engineered for **zero-friction setup** whether you are connecting an AI coding/chat client over **Streamable HTTP (`/mcp`)** or running batch extractions in **Apify Console**:

### Option A: Connect to Claude Desktop, Cursor, Windsurf, or ChatGPT in 60 seconds
1. [Create](https://console.apify.com/sign-up) a free Apify account and copy your **Personal API Token** from [Console -> Settings -> Integrations](https://console.apify.com/settings/integrations).
2. Add the live Streamable-HTTP endpoint **`https://church-of-loujess--b2b-lead-churn-substack-mcp.apify.actor/mcp`** to your AI client's `mcpServers` config:

```json
{
  "mcpServers": {
    "b2b-lead-churn-substack-mcp": {
      "url": "https://church-of-loujess--b2b-lead-churn-substack-mcp.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_APIFY_API_TOKEN>"
      }
    }
  }
}
```

3. Restart or reload your MCP client — it will automatically run `initialize` and `tools/list` (`$0.00` free) and expose all live tools to your AI assistant.
4. Ask your question in plain English; your AI agent will select the right tool, pass structured arguments, and cite live primary sources.

### Option B: Run directly in Apify Console (No-Code Batch Mode)
1. Open **[Substack, B2B Churn & Lead MCP Server](https://console.apify.com/actors/x9Bz7VivAR4c6g3RE)** in Apify Console.
2. Choose which tool to execute under **MCP Tool to Execute (Batch Mode)** (`tool`).
3. Fill in the matching input parameters (`query`, `appSlug`, `url`) in the Console input form.
4. Click **Save & Start** and wait a few seconds for live extraction to finish.
5. Preview your results in the **Storage -> Dataset** tab and export in **JSON, CSV, Excel, or XML**, or fetch via the Apify REST API.

## ⬇️ Input

Connect any MCP client to **`https://church-of-loujess--b2b-lead-churn-substack-mcp.apify.actor/mcp`**, or run any of the 5 tools in **Console Batch Mode**.

### Mode 1: Live Streamable-HTTP MCP Agent Tool Calls (`/mcp`)

Let Claude, Cursor, Windsurf, or ChatGPT chain multiple B2B lead tools autonomously in a single turn.

| Input / Configuration | What it returns |
| :--- | :--- |
| `search_substack_newsletters_and_authors` (`{"query": "fintech"}`) | Enriched Substack writers + verified emails + latest 3 posts |
| `mine_shopify_competitor_churn_reviews` (`{"appSlug": "yotpo-social-reviews"}`) | Angry 1–2 star Shopify merchants + churn scores + store domains/emails |
| `find_company_website_contacts` (`{"url": "apify.com"}`) | Clean business emails, phones & LinkedIn/X/GitHub links |

**Input JSON example:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
        "name": "mine_shopify_competitor_churn_reviews",
        "arguments": {
            "appSlug": "klaviyo-email-marketing",
            "maxReviews": 8,
            "resolveMerchantDomains": true
        }
    }
}
```

### Mode 2: Apify Console & REST API Batch Execution

Select `tool` in the Console UI and export results to CSV, Excel, or JSON.

| Input / Configuration | What it returns |
| :--- | :--- |
| `tool: "search_substack_newsletters_and_authors"` + `query: "ai agents"` | Saves enriched Substack leads to your Apify Dataset |
| `tool: "find_company_website_contacts"` + `url: "https://crawlee.dev"` | Extracts domain contacts to Dataset Storage |

**Input JSON example:**

```json
{
    "tool": "search_substack_newsletters_and_authors",
    "query": "fintech",
    "maxResults": 8
}
```

### Complete Input Parameter Reference

| Parameter | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `tool` | `string` (`search_substack_newsletters_and_authors`, `mine_shopify_competitor_churn_reviews`, `extract_bio_link_emails`, `find_company_website_contacts`, `search_hn_producthunt_launches`) | `"search_substack_newsletters_and_authors"` | No | Select which B2B lead generation tool to execute in Batch Mode. |
| `query` | `string` | `"fintech"` | No | Niche keyword for Substack newsletters or Hacker News / Product Hunt launches (e.g. 'fintech', 'ai agents', 'b2b saas'). |
| `appSlug` | `string` | `—` | No | Shopify App Store slug or URL (e.g. 'klaviyo-email-marketing', 'yotpo-social-reviews'). |
| `url` | `string` | `—` | No | Linktree/Beacons URL or company domain for contact email & social extraction. |
| `maxResults` | `integer` | `6` | No | Maximum leads to return (1-25). |

## ⬆️ Output and setup

All extracted records stream incrementally into your run's **Dataset** under the **Storage** tab in Apify Console. Preview results as a clean interactive table, download in **JSON, JSONL, CSV, Excel (`.xlsx`), XML, or RSS**, or consume items directly via the Apify REST API, Python/Node.js SDKs, or MCP.

### 📦 Verified dataset output sample #1

```json
{
    "tool": "search_substack_newsletters_and_authors",
    "recordType": "substack_newsletter",
    "identifier": "promesse",
    "title": "promesse",
    "organization": "Promesse D. Ishimwe",
    "statusOrPhase": "promesse@substack.com",
    "date": "2026-08-07T08:01:48.725Z",
    "url": "https://promesse.substack.com",
    "details": {
        "publicationName": "promesse",
        "subdomain": "promesse",
        "publicationUrl": "https://promesse.substack.com",
        "customDomain": null,
        "authorName": "Promesse D. Ishimwe",
        "authorHandle": "promesse",
        "primaryEmail": null,
        "emails": [],
        "substackDispatchAddress": "promesse@substack.com",
        "subscriberCountEstimate": null,
        "bestsellerTier": null,
        "paidSubscriptionsEnabled": false,
        "sponsorshipUrl": null,
        "socials": {},
        "description": "",
        "recentPosts": [
            {
                "title": "When eKash Inherited the Friction: Lessons from the Push–Pull Cutover ",
                "url": "https://promesse.substack.com/p/when-ekash-inherited-the-friction",
                "postDate": "2026-08-07T08:01:48.725Z",
                "reactionCount": 4
            },
            {
                "title": "Payment Return: One of the Biggest Tests of Trust in Digital Payments",
                "url": "https://promesse.substack.com/p/payment-return-one-of-the-biggest",
                "postDate": "2026-04-13T08:01:50.371Z",
                "reactionCount": 1
            }
        ]
    }
}
```

### 📦 Verified dataset output sample #2

```json
{
    "tool": "search_substack_newsletters_and_authors",
    "recordType": "substack_newsletter",
    "identifier": "fintechunpacked",
    "title": "fintechunpacked",
    "organization": "Cole Gottlieb",
    "statusOrPhase": "cgottliebfintech@gmail.com",
    "date": "2026-10-27T11:04:04.541Z",
    "url": "https://fintechunpacked.substack.com",
    "details": {
        "publicationName": "fintechunpacked",
        "subdomain": "fintechunpacked",
        "publicationUrl": "https://fintechunpacked.substack.com",
        "customDomain": null,
        "authorName": "Cole Gottlieb",
        "authorHandle": "fintechunpacked",
        "primaryEmail": "cgottliebfintech@gmail.com",
        "emails": [
            "cgottliebfintech@gmail.com"
        ],
        "substackDispatchAddress": "fintechunpacked@substack.com",
        "subscriberCountEstimate": null,
        "bestsellerTier": null,
        "paidSubscriptionsEnabled": false,
        "sponsorshipUrl": null,
        "socials": {
            "linkedin": "https://www.linkedin.com/in/cole-gottlieb",
            "twitter": "https://x.com/Cole_Gottlieb"
        },
        "description": "",
        "recentPosts": [
            {
                "title": "The Fintech Charter Tracker; Capital One Reports Earnings (Fintech Unpacked #20)",
                "url": "https://fintechunpacked.substack.com/p/the-fintech-charter-tracker-capital",
                "postDate": "2026-10-27T11:04:04.541Z",
                "reactionCount": 5
            },
            {
                "title": "Will the Consumer Crack or Weather the Storm? An Update on the State of Consumer Credit (Fintech Unpacked #19)",
                "url": "https://fintechunpacked.substack.com/p/will-the-consumer-crack-or-weather",
                "postDate": "2026-10-20T11:02:45.119Z",
                "reactionCount": 3
            }
        ]
    }
}
```

### Output Field Dictionary

| Output Field | Type | Description |
| :--- | :--- | :--- |
| `tool / recordType` | `string` | Executed MCP tool name and lead entity category. |
| `identifier / title / organization` | `string` | Subdomain/review/domain ID, lead title, and author/merchant/founder name. |
| `statusOrPhase / date` | `string` | Quick-glance primary email or churn score + ISO publish/review date. |
| `url` | `string` | Canonical Substack, Shopify review, bio link, company, or launch URL. |
| `details` | `object` | Full structured lead record (`emails`, `socials`, `churnIntentScore`, `recentPosts`, `sponsorshipUrl`, etc.). |

## Notes, tips, and exceptions

- **`$0.00` free schema & session handshake:** Connecting Claude/Cursor (`initialize`, `tools/list`, `ping`) costs `$0.00`; billing (`$0.04` Free down to `$0.018` Gold–Diamond) triggers strictly once per `tools/call`.
- **Multi-tool chaining tip:** Ask your AI assistant to run `search_hn_producthunt_launches` first, then automatically call `find_company_website_contacts` on the top 5 `startupUrl` domains!
- **Clean email hygiene:** Built-in `JUNK_DOMAINS` and prefix filters strip `noreply@`, `sentry.io`, `wixpress.com`, `myshopify.com`, and `@substack.com` dispatch aliases from `emails[]`.

## What can you do with data from Substack, B2B Churn & Lead MCP Server?

Substack, B2B Churn & Lead MCP Server powers high-ROI automation, lead generation, and AI agent pipelines. Here are four proven step-by-step recipes:

### 🤖 Conversational AI SDR inside Claude Desktop or Cursor

Turn Claude into a live B2B researcher that finds leads, verifies emails, and writes personalized emails on the spot.

**Recipe:**

1. **Connect `/mcp` in Claude Desktop.** Paste the `mcpServers` config with your Apify API token.

2. **Prompt end-to-end prospecting.** Ask: *'Find 8 fintech Substack newsletters, pull their verified emails and latest post titles, and draft a concise sponsorship inquiry referencing each author's newest article.'*

Total cost for the entire research + personalization turn: `$0.04` (1 tool call!).

### 😡 Live Shopify competitor-churn battlecard & outreach

Ask your AI agent what merchants hated about your rival *this week* and grab their storefront contacts.

**Recipe:**

1. **Invoke `mine_shopify_competitor_churn_reviews`.** Pass any rival `appSlug` (`gorgias`, `klaviyo-email-marketing`, `recharge-subscriptions`).

2. **Enrich deeper if needed.** Have the agent call `find_company_website_contacts` on any discovered `merchantWebsite`.

Export directly into Gmail drafts, HubSpot, or Clay.

### 🚀 Morning `Show HN` & `Product Hunt` founder scout

Discover dev-tools and AI startups launched in the past 48 hours and enrich their founders.

**Recipe:**

1. **Call `search_hn_producthunt_launches` (`query: "mcp"` or `"ai agent"`).** Review top-upvoted launches.

2. **Call `find_company_website_contacts` on top picks.** Retrieve verified founder emails & LinkedIn/X profiles.

Ideal for VC analysts, DevRel teams, and B2B SaaS founders.

### 🌲 Instant creator bio-link enrichment

Drop a `linktr.ee` or `beacons.ai` link into chat and get every hidden email, Calendly URL, and social link immediately.

**Recipe:**

1. **Call `extract_bio_link_emails`.** Extracts emails + booking links + linked brand domains in ~2 seconds.

Pair with **[TikTok Intelligence MCP](https://apify.com/church_of_loujess/tiktok-intelligence-mcp)** for full creator discovery.

## Want to get other B2B, Social, Financial, or MCP Agent data?

Chain this tool with our other **128 MB / 256 MB zero-proxy Apify Scrapers and Live Streamable-HTTP MCP Servers**:

<table>
<tr>
<td>🎵 <a href="https://apify.com/church_of_loujess/tiktok-intelligence-mcp">TikTok Intelligence MCP Server (Hooks, Emails, Sponsors)</a></td>
<td>⚖️ <a href="https://apify.com/church_of_loujess/sec-edgar-companies-house-mcp">SEC EDGAR, UK Companies House & LEI MCP Server</a></td>
</tr>
<tr>
<td>📡 <a href="https://apify.com/church_of_loujess/market-news-sentiment-mcp">Yahoo Finance, Trends, News & Reddit MCP Server</a></td>
<td>🧬 <a href="https://apify.com/church_of_loujess/pharma-fda-clinical-trials-mcp">Pharma, FDA & Clinical Trials MCP Server</a></td>
</tr>
<tr>
<td>📰 <a href="https://apify.com/church_of_loujess/substack-newsletter-leads-scraper">Substack Newsletter Leads Scraper (Bulk Batch)</a></td>
<td>🛍️ <a href="https://apify.com/church_of_loujess/shopify-app-reviews-leads-scraper">Shopify App Reviews & Churn Scraper (Bulk Batch)</a></td>
</tr>
<tr>
<td>🌐 <a href="https://apify.com/church_of_loujess/website-email-phone-finder">Website Email, Phone & Tech Stack Finder (Bulk)</a></td>
<td>🚀 <a href="https://apify.com/church_of_loujess/hackernews-producthunt-leads-scraper">Hacker News & Product Hunt Leads Scraper (Bulk)</a></td>
</tr>
</table>

## 🔌 Using Substack, B2B Churn & Lead MCP Server with the Apify API, SDKs & MCP

Automate **Substack, B2B Churn & Lead MCP Server** programmatically from Python, Node.js/TypeScript, cURL, workflow builders (**n8n, Make, Zapier, Clay, Pipedream**), or **Model Context Protocol (`MCP`)** AI clients.

### Python (`apify-client`)

```python
from apify_client import ApifyClient

client = ApifyClient("<YOUR_APIFY_API_TOKEN>")
run = client.actor("church_of_loujess/b2b-lead-churn-substack-mcp").call(
    run_input={
    "tool": "search_substack_newsletters_and_authors",
    "query": "fintech",
    "maxResults": 8
}
)

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

### Node.js / TypeScript (`apify-client`)

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: '<YOUR_APIFY_API_TOKEN>' });
const run = await client.actor('church_of_loujess/b2b-lead-churn-substack-mcp').call({
    "tool": "search_substack_newsletters_and_authors",
    "query": "fintech",
    "maxResults": 8
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(`Extracted ${items.length} items:`, items);
```

### One-Line Synchronous REST API (`cURL` — ideal for n8n, Make & Clay HTTP Columns)

```bash
curl -X POST "https://api.apify.com/v2/acts/church_of_loujess~b2b-lead-churn-substack-mcp/run-sync-get-dataset-items?token=<YOUR_APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tool": "search_substack_newsletters_and_authors", "query": "fintech", "maxResults": 8}'
```

### Claude Desktop, Cursor, Windsurf & OpenAI MCP Configuration

```json
{
  "mcpServers": {
    "b2b-lead-churn-substack-mcp": {
      "url": "https://church-of-loujess--b2b-lead-churn-substack-mcp.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_APIFY_API_TOKEN>"
      }
    }
  }
}
```

#### Claude Code CLI one-liner:
```bash
claude mcp add --transport http b2b-lead-churn-substack-mcp "https://church-of-loujess--b2b-lead-churn-substack-mcp.apify.actor/mcp" --header "Authorization: Bearer <YOUR_APIFY_API_TOKEN>"
```

## ❓ Frequently Asked Questions

### What is the difference between this MCP Server and the standalone Batch Scrapers?

This Actor runs in **hot Standby Mode (`/mcp`)** exposing **all 5 B2B lead tools over Streamable HTTP** so Claude, Cursor, ChatGPT, or LangGraph agents can call them interactively in 1–4 seconds at `$0.04`–`$0.018` per tool call. When you want to process 500–5,000 rows asynchronously into a CSV, use our companion Batch Scrapers (`substack-newsletter-leads-scraper`, `shopify-app-reviews-leads-scraper`, `website-email-phone-finder`).

### Are `initialize` and `tools/list` free?

Yes — **`$0.00` FREE**. Only actual `tools/call` executions trigger the `mcp-tool-call` event.

### Do I need Substack, Shopify, or Product Hunt API keys?

No. Zero external API keys or proxies are required.

### Which MCP protocol versions are supported?

`2025-06-18`, `2025-03-26`, and `2024-11-05` over Streamable HTTP (`POST /mcp`), plus `GET /health`.

### Can I test it from the Apify Console 'Run' button without an MCP client?

Yes — our dual-mode runtime automatically detects Console/API runs, executes your chosen `tool`, and pushes structured items to the default Dataset.

### How many leads are returned per MCP tool call?

Up to `15`–`25` enriched leads per single `tools/call` (`maxResults` / `maxReviews`), meaning **1 single `$0.04` tool call can return 10–20 leads at once**!

### Is it legal to extract public data with Substack, B2B Churn & Lead MCP Server?

Substack, B2B Churn & Lead MCP Server only accesses **publicly available web pages, feeds, and registries** that require no private account login or authentication bypass. Keep in mind that extracted contact fields (such as public business emails, names, or usernames) can still qualify as personal data under frameworks like the [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) or CCPA depending on jurisdiction. Always ensure you have a lawful basis (such as legitimate B2B interest) and consult Apify's guide on [the legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).

### Can I integrate Substack, B2B Churn & Lead MCP Server with Clay, n8n, Make, Zapier, or Google Sheets?

Yes. Every run outputs clean, flat-friendly fields alongside nested detail objects and integrates natively with **Clay, n8n, Make, Zapier, Slack, HubSpot, Airtable, Google Sheets, Airbyte, LangChain, and CrewAI** via [Apify Integrations](https://apify.com/integrations). You can also attach [webhooks](https://docs.apify.com/integrations/webhooks) to trigger downstream workflows automatically the instant a run succeeds.

### Can I call Substack, B2B Churn & Lead MCP Server programmatically via the Apify API?

Yes. Use the official `apify-client` [Python package](https://apify.com/church_of_loujess/b2b-lead-churn-substack-mcp/api/python) or [Node.js NPM package](https://apify.com/church_of_loujess/b2b-lead-churn-substack-mcp/api/javascript), or call the synchronous `/run-sync-get-dataset-items` REST endpoint directly. Full specifications are in the [Apify API v2 reference](https://docs.apify.com/api/v2).

### Substack, B2B Churn & Lead MCP Server not working or need a custom feature?

We actively maintain and monitor all 26 Actors and MCP Servers in our portfolio. If you encounter an edge case, unexpected output, or want to request a new field, please open a ticket on the Actor's [Issues tab](https://apify.com/church_of_loujess/b2b-lead-churn-substack-mcp/issues/open) with your Run ID so we can resolve it rapidly.
