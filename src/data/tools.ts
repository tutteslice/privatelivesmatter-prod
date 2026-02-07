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
  }
];

export const toolCategories = ['All', 'AI Tools'];
export const recommendedCategories = ['All', 'VPN', 'Email', 'Passwords', 'Privacy'];
