---
title: "B2B Vendor Marketplace"
date: 2025-08-10
summary: "Built a scalable marketplace connecting 500+ vendors with enterprise buyers, featuring smart matching and automated negotiations."
category: "Platform Design"
year: "2025"
tags: ["Marketplace", "B2B", "Platform"]
role: "Product Architect"
duration: "8 months"
team: "12-person cross-functional team"
impact: "500+ vendors onboarded, 3x GMV growth"
readingTime: 6
draft: false
---

## The Challenge

Enterprise procurement was stuck in email chains and spreadsheets. Buyers couldn't efficiently discover and compare vendors, and vendors had no scalable way to reach enterprise customers.

{{< mermaid >}}
sequenceDiagram
    participant Buyer
    participant Email as Email/Phone
    participant Vendor1 as Vendor A
    participant Vendor2 as Vendor B
    participant Vendor3 as Vendor C
    
    Buyer->>Email: Send RFQ
    Email->>Vendor1: Forward request
    Email->>Vendor2: Forward request
    Email->>Vendor3: Forward request
    Vendor1-->>Email: Quote (3 days)
    Vendor2-->>Email: Quote (5 days)
    Vendor3-->>Email: No response
    Email-->>Buyer: Collate manually
    Note over Buyer: 2-3 weeks for comparison
    Buyer->>Email: Negotiate price
    Note over Buyer,Vendor2: Back and forth for days
{{< /mermaid >}}
{{< diagram-caption >}}Before: Weeks of email ping-pong for a single procurement cycle{{< /diagram-caption >}}

## My Approach

I designed a two-sided marketplace with intelligent matching — pairing buyer requirements with vendor capabilities using a weighted scoring algorithm.

### Platform Architecture

{{< mermaid >}}
graph TB
    subgraph Buyers["Buyer Experience"]
        B1["🔍 Smart Search"]
        B2["📋 RFQ Builder"]
        B3["📊 Compare & Score"]
    end
    
    subgraph Platform["Marketplace Core"]
        M1[Matching Engine]
        M2[Scoring Algorithm]
        M3[Negotiation Framework]
        M4[Trust & Verification]
    end
    
    subgraph Vendors["Vendor Experience"]
        V1["📦 Product Catalog"]
        V2["💰 Pricing Engine"]
        V3["📈 Analytics Dashboard"]
    end
    
    B1 --> M1
    B2 --> M1
    M1 --> M2
    M2 --> B3
    B3 --> M3
    M3 --> V2
    V1 --> M1
    V2 --> M3
    M4 --> M2
    M3 --> V3
    
    style B1 fill:#12121f,stroke:#00e5c8
    style B2 fill:#12121f,stroke:#00e5c8
    style B3 fill:#12121f,stroke:#00e5c8
    style M1 fill:#12121f,stroke:#7c6bf0
    style M2 fill:#12121f,stroke:#7c6bf0
    style M3 fill:#12121f,stroke:#7c6bf0
    style M4 fill:#12121f,stroke:#7c6bf0
    style V1 fill:#12121f,stroke:#f472b6
    style V2 fill:#12121f,stroke:#f472b6
    style V3 fill:#12121f,stroke:#f472b6
{{< /mermaid >}}
{{< diagram-caption >}}Two-sided marketplace with intelligent matching at its core{{< /diagram-caption >}}

### Key Design Decisions

1. **Smart Matching Engine** — Automated vendor shortlisting based on capability, geography, pricing, and reliability scores
2. **Negotiation Framework** — Structured negotiation flows that reduced deal closure time from weeks to days
3. **Trust Architecture** — Built-in ratings, verified reviews, and transaction history to reduce buyer anxiety

### How the Scoring Algorithm Works

{{< mermaid >}}
flowchart TD
    A[Buyer Requirements] --> B[Parse Requirements]
    B --> C{Match Against Vendor Pool}
    
    C --> D["Capability Score (30%)"]
    C --> E["Geography Score (20%)"]
    C --> F["Price Score (25%)"]
    C --> G["Reliability Score (25%)"]
    
    D --> H[Weighted Composite Score]
    E --> H
    F --> H
    G --> H
    
    H --> I{Score Threshold}
    I -->|"> 80%"| J["⭐ Top Match"]
    I -->|"60-80%"| K["Good Match"]
    I -->|"< 60%"| L["Not Shown"]
    
    J --> M[Ranked Shortlist to Buyer]
    K --> M
    
    style A fill:#12121f,stroke:#00e5c8
    style H fill:#12121f,stroke:#7c6bf0
    style J fill:#12121f,stroke:#00e5c8
    style K fill:#12121f,stroke:#7c6bf0
    style L fill:#12121f,stroke:#f472b6
{{< /mermaid >}}
{{< diagram-caption >}}Vendor scoring: weighted multi-factor ranking for intelligent shortlisting{{< /diagram-caption >}}

## The Outcome

- **500+ vendors** onboarded in the first 6 months
- **3x growth** in gross merchandise value
- **70% faster** procurement cycles compared to traditional methods
