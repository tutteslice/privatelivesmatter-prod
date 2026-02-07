import type { Tool, RecommendedTool } from '../types';

// ============================================================
// HOW TO ADD NEW TOOLS:
// Simply add a new object to the arrays below following the same structure.
// 
// For "Tools I Created":
//   Add to the `myTools` array with fields:
//   - id: unique string identifier
//   - name: display name
//   - description: short one-liner
//   - longDescription: detailed paragraph (optional)
//   - category: one of the categories (e.g., 'Privacy', 'Security', 'Network', 'Encryption')
//   - url: link to the tool (optional)
//   - github: GitHub repo URL (optional)
//   - tags: array of tag strings
//   - status: 'active' | 'beta' | 'coming-soon'
//
// For "Tools I Recommend":
//   Add to the `recommendedTools` array with fields:
//   - id: unique string
//   - name: display name
//   - description: what it does
//   - category: tool category
//   - url: official website
//   - rating: 1-5 rating
//   - free: boolean
//   - openSource: boolean
//   - tags: array of tag strings
// ============================================================

export const myTools: Tool[] = [
  {
    id: 'capgen-ai',
    name: 'CapGen AI',
    description: 'Smart & Private Caption Generator.',
    longDescription: 'AI-powered image analysis, Privacy-focused processing, Creative social media captions.',
    category: 'AI Tools',
    url: 'https://privatelivesmatter.com/capgenai',
    tags: ['AI', 'Captions', 'Privacy'],
    status: 'active',
  }
];

export const recommendedTools: RecommendedTool[] = [
  {
    id: 'nordvpn',
    name: 'NordVPN',
    description: 'Hide Your IP & Encrypt Your Traffic. Strict no-logs policy, Ultra-fast speeds, Bypass geo-restrictions.',
    longDescription: "NordVPN is a leading virtual private network provider that prioritizes your online privacy and security. By encrypting your internet traffic and masking your IP address, it protects your personal data from prying eyes, whether you're browsing on public Wi-Fi or at home. With advanced features like Threat Protection and a strict no-logs policy, NordVPN ensures your digital footprint remains yours alone.",
    features: [
      "Threat Protection against malware and trackers",
      "Strict No-Logs Policy",
      "Double VPN for extra encryption",
      "Automatic Kill Switch",
      "5500+ servers in 60 countries"
    ],
    pricing: "Starts at roughly $3/month",
    category: 'VPN',
    url: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=139806',
    rating: 5,
    free: false,
    openSource: false,
    tags: ['VPN', 'Privacy', 'Security'],
  },
  {
    id: 'proton-mail',
    name: 'Proton Mail',
    description: 'Private Email Alternative to Gmail. End-to-end encryption, Anonymous sign-up, Based in Switzerland.',
    longDescription: "Proton Mail is the world's largest secure email service, developed by CERN scientists in Switzerland. It offers end-to-end encryption to ensure that no one, not even Proton itself, can access your emails. It's an essential tool for anyone looking to reclaim their communication privacy from big tech data harvesting.",
    features: [
      "End-to-end encryption",
      "Zero-access encryption",
      "Open source and independently audited",
      "Self-destructing messages",
      "Based in Switzerland (strict privacy laws)"
    ],
    pricing: "Free plan available. Premium starts at €3.99/month",
    category: 'Email',
    url: 'https://go.getproton.me/aff_c?offer_id=7&aff_id=15997',
    rating: 5,
    free: true,
    openSource: true,
    tags: ['Email', 'Encryption', 'Switzerland'],
  },
  {
    id: 'proton-pass',
    name: 'Proton Pass',
    description: 'Secure Password Manager by Proton. End-to-end encrypted, Open Source, Integrated email aliases.',
    longDescription: "Proton Pass is an open-source password manager from the team behind Proton Mail. It goes beyond just storing passwords by integrating identity protection with hide-my-email aliases. Your data is protected by Swiss privacy laws and the same battle-tested end-to-end encryption used by millions of Proton users worldwide.",
    features: [
      "End-to-end encryption for all metadata",
      "Integrated 'Hide-my-email' aliases",
      "Open source and independently audited",
      "Built-in 2FA authenticator",
      "Swiss privacy protection"
    ],
    pricing: "Generous Free plan. Plus starts at €1.99/month",
    category: 'Passwords',
    url: 'https://go.getproton.me/aff_c?offer_id=38&aff_id=15997',
    rating: 5,
    free: true,
    openSource: true,
    tags: ['Passwords', 'Security', 'Manager', 'Open Source'],
  },
  {
    id: 'deleteme',
    name: 'DeleteMe',
    description: 'Remove your personal information from data broker websites that profit from your data.',
    longDescription: "DeleteMe is a hands-off information removal service that scrubs your personal data from data broker websites. These brokers collect and sell your info (name, address, age, relatives, etc.) online. DeleteMe experts find and remove this data for you, conducting regular scans to ensure it stays off.",
    features: [
      "Removes data from 750+ data brokers",
      "Quarterly privacy reports",
      "Dedicated privacy advisor",
      " continuous monitoring",
      "Custom removal requests"
    ],
    pricing: "Plans start around $10/month billed annually",
    category: 'Privacy',
    url: 'https://www.de33watrk.com/JBMJCC/KMKS9/',
    rating: 5,
    free: false,
    openSource: false,
    tags: ['Data Removal', 'Privacy', 'Brokers'],
  },
  {
    id: 'firefox',
    name: 'Firefox',
    description: 'Open source web browser with extensive privacy customization options.',
    longDescription: "Firefox is a free and open-source web browser developed by the Mozilla Foundation. It is known for its flexibility, performance, and strong commitment to user privacy. Unlike many other browsers, Firefox is not built by a company whose business model relies on selling user data.",
    features: [
      "Enhanced Tracking Protection",
      "Total Cookie Protection",
      "Facebook Container extension support",
      "Open source and auditable",
      "Highly customizable"
    ],
    pricing: "Free",
    category: 'Browsers',
    url: 'https://www.mozilla.org/en-US/firefox/new/',
    rating: 5,
    free: true,
    openSource: true,
    tags: ['Browser', 'Privacy', 'Open Source'],
  },
  {
    id: 'brave',
    name: 'Brave',
    description: 'Privacy-first browser that blocks trackers and ads by default.',
    longDescription: "Brave is a free and open-source web browser based on the Chromium web browser. It distinguishes itself by blocking ads and website trackers out of the box. It also offers a way for users to send cryptocurrency contributions in the form of Basic Attention Tokens to websites and content creators.",
    features: [
      "Blocks ads and trackers by default",
      "Built-in Tor integration",
      "Brave Search independent search engine",
      "Fast page loads",
      "Chromium-based compatibility"
    ],
    pricing: "Free",
    category: 'Browsers',
    url: 'https://brave.com/',
    rating: 4,
    free: true,
    openSource: true,
    tags: ['Browser', 'Privacy', 'Ad Blocker'],
  },
  {
    id: 'duckduckgo',
    name: 'DuckDuckGo',
    description: 'The search engine that doesn\'t track you.',
    longDescription: "DuckDuckGo is an internet search engine that emphasizes protecting searchers' privacy and avoiding the filter bubble of personalized search results. It does not collect or share personal information. That means your search history is safe.",
    features: [
      "Private search (no tracking)",
      "Tracker blocking app/extension",
      "Smarter encryption",
      "Email protection service",
      "Android/iOS App"
    ],
    pricing: "Free",
    category: 'Browsers',
    url: 'https://duckduckgo.com/',
    rating: 5,
    free: true,
    openSource: false,
    tags: ['Search', 'Privacy', 'Anti-tracking'],
  },
  {
    id: 'ublock-origin',
    name: 'uBlock Origin',
    description: 'Wide-spectrum content blocker. Efficient on memory and CPU.',
    longDescription: "uBlock Origin is a free and open-source browser extension for content filtering, including ad-blocking. The extension is known for being lightweight and memory-efficient compared to other extensions. It enforces thousands of content filters to block ads, trackers, and malware sites.",
    features: [
      "Lightweight and efficient",
      "Blocks ads, trackers, and malware domains",
      "Easy Element Zapper mode",
      "Open source",
      "Community-maintained filter lists"
    ],
    pricing: "Free",
    category: 'Blockers',
    url: 'https://ublockorigin.com/',
    rating: 5,
    free: true,
    openSource: true,
    tags: ['Ad Blocker', 'Privacy', 'Extension'],
  },
  {
    id: 'privacy-badger',
    name: 'Privacy Badger',
    description: 'Automatically learns to block invisible trackers.',
    longDescription: "Privacy Badger is a free browser extension created by the Electronic Frontier Foundation (EFF). It automatically learns to block invisible trackers based on their behavior. Instead of using lists of what to block, it watches for domains that appear to be tracking you across multiple websites and blocks them.",
    features: [
      "Heuristic-based blocking (learns as you browse)",
      "Created by the EFF (non-profit)",
      "Sends Global Privacy Control signal",
      "Replaces tracking widgets with click-to-activate placeholders",
      "Open source"
    ],
    pricing: "Free",
    category: 'Blockers',
    url: 'https://privacybadger.org/',
    rating: 4,
    free: true,
    openSource: true,
    tags: ['Tracker Blocker', 'EFF', 'Privacy'],
  },
  {
    id: 'signal',
    name: 'Signal',
    description: 'State-of-the-art end-to-end encrypted messaging.',
    longDescription: "Signal is a cross-platform encrypted messaging service developed by the Signal Technology Foundation and Signal Messenger LLC. It uses the internet to send one-to-one and group messages, which can include files, voice notes, images and videos. All communications are end-to-end encrypted.",
    features: [
      "End-to-end encryption (Signal Protocol)",
      "Open source client and server",
      "Disappearing messages",
      "No ads, no trackers",
      "Non-profit organization"
    ],
    pricing: "Free",
    category: 'Communication',
    url: 'https://signal.org/',
    rating: 5,
    free: true,
    openSource: true,
    tags: ['Messaging', 'Encryption', 'Security'],
  },
  {
    id: 'lyricflow-studio',
    name: 'LyricFlow Studio',
    description: 'A focused, distraction-free environment for songwriting and lyric composition.',
    longDescription: "LyricFlow Studio is a specialized creative tool designed for songwriters and poets. It provides a clean, focused interface for crafting lyrics, organizing song structures, and keeping your creative flow uninterrupted. Perfect for artists who want to focus purely on their words.",
    features: [
      "Distraction-free writing interface",
      "Song structure organization",
      "Clean, modern UI",
      "Browser-based (No installation)",
      "Instant auto-save"
    ],
    pricing: "Free",
    category: 'Recreational',
    url: 'https://lyricflow-studio.pages.dev/',
    rating: 5,
    free: true,
    openSource: false,
    tags: ['Music', 'Writing', 'Lyrics', 'Creativity'],
  }
];

export const toolCategories = ['All', 'AI Tools'];
export const recommendedCategories = ['All', 'VPN', 'Email', 'Passwords', 'Privacy', 'Browsers', 'Blockers', 'Communication', 'Recreational'];
