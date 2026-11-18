#!/usr/bin/env node
/**
 * B2B Lead Generation, Competitor Churn & Substack Intelligence MCP Server (b2b-lead-churn-substack-mcp)
 * Dual-Transport Model Context Protocol (MCP) Server:
 *   1. Local stdio transport (default: `npx -y github:willowswt/b2b-lead-churn-substack-mcp`)
 *   2. Streamable HTTP transport (`--http` or remote hosted endpoint `https://church-of-loujess--b2b-lead-churn-substack-mcp.apify.actor/mcp`)
 *
 * Schema discovery (`initialize`, `tools/list`, `ping`, `resources/list`, `prompts/list`)
 * runs locally with zero latency and requires no API key.
 * Live tool execution (`tools/call`) routes through the cloud Standby cluster at:
 *   https://church-of-loujess--b2b-lead-churn-substack-mcp.apify.actor/mcp
 * Get your free Apify API token ($5.00/mo free credit included) at:
 *   https://console.apify.com/settings/integrations
 * Apify Store listing & documentation:
 *   https://apify.com/church_of_loujess/b2b-lead-churn-substack-mcp
 */

import http from 'node:http';
import readline from 'node:readline';
import crypto from 'node:crypto';

const SERVER_NAME = "b2b-lead-churn-substack-mcp";
const SERVER_VERSION = '1.0.0';
const REMOTE_MCP_ENDPOINT = "https://church-of-loujess--b2b-lead-churn-substack-mcp.apify.actor/mcp";
const STORE_URL = "https://apify.com/church_of_loujess/b2b-lead-churn-substack-mcp";
const SUPPORTED_PROTOCOLS = new Set(['2025-06-18', '2025-03-26', '2024-11-05']);

const SERVER_INSTRUCTIONS = "Streamable-HTTP & stdio MCP server for B2B lead enrichment, Substack creator discovery, Shopify competitor 1-3 star churn reviews, Linktree/Beacons emails, and HN/ProductHunt launches. Remote Streamable-HTTP endpoint: https://church-of-loujess--b2b-lead-churn-substack-mcp.apify.actor/mcp | Store: https://apify.com/church_of_loujess/b2b-lead-churn-substack-mcp";

const TOOLS = [
  {
    "name": "search_substack_newsletters_and_authors",
    "description": "Search Substack publications by niche keyword or subdomain/URL and enrich each newsletter with author name, handle, verified contact/sponsor emails, subscriber scale, bestseller tier, custom domain, sponsorship/media-kit URL, social profiles, and latest 3 published posts.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "query": {
          "type": "string",
          "description": "Niche keyword or Substack subdomain (e.g. 'fintech', 'ai agents', 'cybersecurity')."
        },
        "maxResults": {
          "type": "integer",
          "description": "Max newsletters to enrich (1-15, default 6).",
          "default": 6
        }
      },
      "required": [
        "query"
      ]
    },
    "annotations": {
      "title": "Search Substack Newsletters And Authors",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  },
  {
    "name": "mine_shopify_competitor_churn_reviews",
    "description": "Mine angry 1-star and 2-star merchant reviews on any Shopify App Store competitor (`appSlug` like 'klaviyo-email-marketing', 'yotpo-social-reviews', 'gorgias-helpdesk'). Scores switching/churn intent (0-100), extracts pain signals, merchant name, country, app tenure, and probes merchant domain/emails.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "appSlug": {
          "type": "string",
          "description": "Shopify App Store slug or URL (e.g. 'klaviyo-email-marketing')."
        },
        "maxReviews": {
          "type": "integer",
          "description": "Maximum low-star reviews to return (1-25, default 10).",
          "default": 10
        },
        "resolveMerchantDomains": {
          "type": "boolean",
          "description": "Probe live Shopify storefront domain & contact email (default true).",
          "default": true
        }
      },
      "required": [
        "appSlug"
      ]
    },
    "annotations": {
      "title": "Mine Shopify Competitor Churn Reviews",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  },
  {
    "name": "extract_bio_link_emails",
    "description": "Crawl a Linktree, Beacons, Stan Store, Carrd, or creator bio URL (`url`) and extract verified email addresses, Calendly/Cal.com booking links, social accounts, and linked external company/storefront domains.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string",
          "description": "Creator bio hub URL (e.g. 'https://linktr.ee/...')."
        }
      },
      "required": [
        "url"
      ]
    },
    "annotations": {
      "title": "Extract Bio Link Emails",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  },
  {
    "name": "find_company_website_contacts",
    "description": "Crawl a B2B company website or domain (`url`, plus `/contact` and `/about` pages) to extract clean contact emails, phone numbers, LinkedIn/X/GitHub profiles, and company metadata.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string",
          "description": "Company website URL or domain (e.g. 'stripe.com' or 'https://linear.app')."
        }
      },
      "required": [
        "url"
      ]
    },
    "annotations": {
      "title": "Find Company Website Contacts",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  },
  {
    "name": "search_hn_producthunt_launches",
    "description": "Search recent Show HN, Ask HN, and Product Hunt startup launches by keyword (`query`), returning product title, founder handle, startup URL, engagement points/comments, and discussion thread.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "query": {
          "type": "string",
          "description": "Keyword filter (e.g. 'mcp', 'ai agent', 'devtools', 'crm')."
        },
        "maxResults": {
          "type": "integer",
          "description": "Maximum launches to return (1-25, default 10).",
          "default": 10
        }
      }
    },
    "annotations": {
      "title": "Search Hn Producthunt Launches",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  }
];

async function forwardToolCallToRemote(name, args) {
    const token = (
        process.env.APIFY_API_TOKEN ||
        process.env.APIFY_TOKEN ||
        process.env.MCP_API_TOKEN ||
        ''
    ).trim();

    if (!token) {
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(
                        {
                            status: 'configuration_required',
                            server: SERVER_NAME,
                            tool: name,
                            message:
                                'APIFY_API_TOKEN is required to execute live data extraction tools. ' +
                                'Create a free Apify account ($5.00 monthly credit included) and copy your token from ' +
                                'https://console.apify.com/settings/integrations, or connect directly to the remote ' +
                                `Streamable-HTTP endpoint: ${REMOTE_MCP_ENDPOINT}`,
                            remoteStreamableHttpEndpoint: REMOTE_MCP_ENDPOINT,
                            apifyStoreUrl: STORE_URL,
                        },
                        null,
                        2
                    ),
                },
            ],
            isError: true,
        };
    }

    const rpcPayload = {
        jsonrpc: '2.0',
        id: crypto.randomUUID(),
        method: 'tools/call',
        params: { name, arguments: args || {} },
    };

    const resp = await fetch(REMOTE_MCP_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(rpcPayload),
    });

    if (!resp.ok) {
        const errBody = await resp.text();
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify({
                        error: `Remote Standby HTTP ${resp.status}: ${errBody.slice(0, 400)}`,
                        endpoint: REMOTE_MCP_ENDPOINT,
                        storeUrl: STORE_URL,
                    }),
                },
            ],
            isError: true,
        };
    }

    const data = await resp.json();
    if (data && data.result) {
        return data.result;
    }
    if (data && data.error) {
        return {
            content: [{ type: 'text', text: JSON.stringify(data.error) }],
            isError: true,
        };
    }
    return {
        content: [{ type: 'text', text: JSON.stringify(data) }],
        isError: false,
    };
}

async function handleRpcMessage(msg) {
    if (!msg || typeof msg !== 'object' || msg.jsonrpc !== '2.0') {
        return { jsonrpc: '2.0', id: msg?.id ?? null, error: { code: -32600, message: 'Invalid JSON-RPC 2.0 request' } };
    }
    const method = String(msg.method || '');
    const hasId = msg.id !== undefined && msg.id !== null;
    if (!hasId || method.startsWith('notifications/')) {
        return null;
    }
    const id = msg.id;
    const params = msg.params && typeof msg.params === 'object' ? msg.params : {};

    if (method === 'initialize') {
        const clientPv = String(params.protocolVersion || '2025-06-18');
        const protocolVersion = SUPPORTED_PROTOCOLS.has(clientPv) ? clientPv : '2025-06-18';
        return {
            jsonrpc: '2.0',
            id,
            result: {
                protocolVersion,
                capabilities: {
                    tools: { listChanged: false },
                    resources: { subscribe: false, listChanged: false },
                    prompts: { listChanged: false },
                },
                serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
                instructions: SERVER_INSTRUCTIONS,
            },
        };
    }

    if (method === 'ping') {
        return { jsonrpc: '2.0', id, result: {} };
    }

    if (method === 'tools/list') {
        return { jsonrpc: '2.0', id, result: { tools: TOOLS } };
    }

    if (method === 'resources/list') {
        return { jsonrpc: '2.0', id, result: { resources: [] } };
    }

    if (method === 'resources/templates/list') {
        return { jsonrpc: '2.0', id, result: { resourceTemplates: [] } };
    }

    if (method === 'prompts/list') {
        return { jsonrpc: '2.0', id, result: { prompts: [] } };
    }

    if (method === 'tools/call') {
        const toolName = String(params.name || '').trim();
        const toolArgs = params.arguments && typeof params.arguments === 'object' ? params.arguments : {};
        const toolDef = TOOLS.find((t) => t.name === toolName);
        if (!toolDef) {
            return {
                jsonrpc: '2.0',
                id,
                error: { code: -32602, message: `Unknown tool: ${toolName}` },
            };
        }
        for (const reqField of toolDef.inputSchema?.required || []) {
            if (toolArgs[reqField] === undefined || toolArgs[reqField] === null || String(toolArgs[reqField]).trim() === '') {
                return {
                    jsonrpc: '2.0',
                    id,
                    error: { code: -32602, message: `Missing required parameter: ${reqField}` },
                };
            }
        }
        try {
            const toolResult = await forwardToolCallToRemote(toolName, toolArgs);
            return { jsonrpc: '2.0', id, result: toolResult };
        } catch (err) {
            return {
                jsonrpc: '2.0',
                id,
                result: {
                    content: [{ type: 'text', text: JSON.stringify({ error: String(err?.message || err) }) }],
                    isError: true,
                },
            };
        }
    }

    return {
        jsonrpc: '2.0',
        id,
        error: { code: -32601, message: `Method not found: ${method}` },
    };
}

const isHttpMode = process.argv.includes('--http') || process.argv.includes('--standby') || process.env.MCP_TRANSPORT === 'http';

if (isHttpMode) {
    const port = Number(process.env.PORT || process.env.ACTOR_WEB_SERVER_PORT || 4321);
    const server = http.createServer(async (req, res) => {
        const urlPath = (req.url || '/').split('?')[0];
        if (req.method === 'GET' && (urlPath === '/' || urlPath === '/health')) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(
                JSON.stringify({
                    status: 'ok',
                    server: SERVER_NAME,
                    version: SERVER_VERSION,
                    remoteEndpoint: REMOTE_MCP_ENDPOINT,
                    storeUrl: STORE_URL,
                    tools: TOOLS.map((t) => t.name),
                })
            );
            return;
        }
        if (urlPath === '/mcp' && req.method === 'POST') {
            const chunks = [];
            for await (const ch of req) chunks.push(ch);
            let body;
            try {
                body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
            } catch {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }));
                return;
            }
            const out = await handleRpcMessage(body);
            if (!out) {
                res.writeHead(202);
                res.end();
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(out));
            return;
        }
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    });
    server.listen(port, '0.0.0.0', () => {
        console.error(`[${SERVER_NAME}] HTTP MCP server listening on 0.0.0.0:${port}/mcp`);
    });
} else {
    const rl = readline.createInterface({
        input: process.stdin,
        terminal: false,
    });
    rl.on('line', async (line) => {
        const trimmed = line.trim();
        if (!trimmed) return;
        let parsed;
        try {
            parsed = JSON.parse(trimmed);
        } catch {
            process.stdout.write(
                JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }) + '\n'
            );
            return;
        }
        if (Array.isArray(parsed)) {
            const responses = [];
            for (const item of parsed) {
                const r = await handleRpcMessage(item);
                if (r) responses.push(r);
            }
            if (responses.length > 0) {
                process.stdout.write(JSON.stringify(responses) + '\n');
            }
            return;
        }
        const resp = await handleRpcMessage(parsed);
        if (resp) {
            process.stdout.write(JSON.stringify(resp) + '\n');
        }
    });
}
