---
title: "Redesigning the Order Flow: From 12 Steps to 3"
date: 2026-01-20
summary: "How I simplified a complex B2B ordering process, increasing completion rates by 65% while maintaining compliance requirements."
category: "UX Architecture"
tags: ["UX", "B2B", "Process Design", "Simplification"]
role: "Product Designer"
duration: "3 months"
impact: "65% increase in order completion"
readingTime: 8
draft: false
---

## Context

Our B2B ordering flow had grown to 12 steps over three years of incremental feature additions. Each step made sense when it was added, but the cumulative effect was brutal: only 23% of users who started an order actually completed it.

## Discovery

I spent two weeks in deep discovery — shadowing users, analyzing funnel data, and mapping every decision point in the flow.

### The Original 12-Step Flow

{{< mermaid >}}
flowchart LR
    S1["1. Login"] --> S2["2. Select\nCategory"]
    S2 --> S3["3. Browse\nProducts"]
    S3 --> S4["4. Enter\nQuantities"]
    S4 --> S5["5. Upload\nDocs"]
    S5 --> S6["6. Select\nWarehouse"]
    S6 --> S7["7. Choose\nShipping"]
    S7 --> S8["8. Enter\nBilling"]
    S8 --> S9["9. Compliance\nCheck"]
    S9 --> S10["10. Manager\nApproval"]
    S10 --> S11["11. Review\nOrder"]
    S11 --> S12["12. Confirm"]
    
    S4 -.->|"⚠ 35% drop"| X1["Abandon"]
    S7 -.->|"⚠ 28% drop"| X2["Abandon"]
    S9 -.->|"⚠ 22% drop"| X3["Abandon"]
    
    style S4 fill:#1a1a2e,stroke:#f472b6
    style S7 fill:#1a1a2e,stroke:#f472b6
    style S9 fill:#1a1a2e,stroke:#f472b6
    style X1 fill:#1a1a2e,stroke:#f472b6
    style X2 fill:#1a1a2e,stroke:#f472b6
    style X3 fill:#1a1a2e,stroke:#f472b6
    style S1 fill:#12121f,stroke:#7c6bf0
    style S2 fill:#12121f,stroke:#7c6bf0
    style S3 fill:#12121f,stroke:#7c6bf0
    style S5 fill:#12121f,stroke:#7c6bf0
    style S6 fill:#12121f,stroke:#7c6bf0
    style S8 fill:#12121f,stroke:#7c6bf0
    style S10 fill:#12121f,stroke:#7c6bf0
    style S11 fill:#12121f,stroke:#7c6bf0
    style S12 fill:#12121f,stroke:#7c6bf0
{{< /mermaid >}}
{{< diagram-caption >}}The original 12-step flow with major drop-off points highlighted{{< /diagram-caption >}}

### What I Found

- 6 of 12 steps could be eliminated or auto-filled from existing data
- Users were abandoning primarily at steps 4, 7, and 9 — all requiring information they didn't have readily available
- The "save and continue later" feature was used by 40% of users, indicating the flow was too long for a single session

## Design Process

### Principle: Progressive Disclosure

Instead of asking for everything upfront, I restructured the flow around three progressive stages:

{{< mermaid >}}
flowchart TD
    subgraph Step1["Step 1: WHAT"]
        A1["Select Products"]
        A2["Smart defaults from\norder history"]
        A3["AI-suggested\nquantities"]
    end
    
    subgraph Step2["Step 2: WHERE & WHEN"]
        B1["Delivery Address"]
        B2["Pre-filled from\naccount settings"]
        B3["Smart date\nsuggestion"]
    end
    
    subgraph Step3["Step 3: CONFIRM"]
        C1["Review Summary"]
        C2["Inline editing"]
        C3["One-click confirm"]
    end
    
    Step1 --> Step2 --> Step3
    
    subgraph Background["Handled Automatically"]
        D1["Compliance ✓"]
        D2["Approval Chain ✓"]
        D3["Warehouse Selection ✓"]
        D4["Billing ✓"]
    end
    
    Step3 -.-> Background
    
    style A1 fill:#12121f,stroke:#00e5c8
    style A2 fill:#12121f,stroke:#7c6bf0
    style A3 fill:#12121f,stroke:#7c6bf0
    style B1 fill:#12121f,stroke:#00e5c8
    style B2 fill:#12121f,stroke:#7c6bf0
    style B3 fill:#12121f,stroke:#7c6bf0
    style C1 fill:#12121f,stroke:#00e5c8
    style C2 fill:#12121f,stroke:#7c6bf0
    style C3 fill:#12121f,stroke:#00e5c8
    style D1 fill:#12121f,stroke:#00e5c8
    style D2 fill:#12121f,stroke:#00e5c8
    style D3 fill:#12121f,stroke:#00e5c8
    style D4 fill:#12121f,stroke:#00e5c8
{{< /mermaid >}}
{{< diagram-caption >}}The redesigned 3-step flow with background automation{{< /diagram-caption >}}

### Handling Complexity

The original 12 steps existed for a reason — compliance, approval chains, custom pricing. I didn't remove this complexity; I restructured *when* it appears:

{{< mermaid >}}
sequenceDiagram
    participant User
    participant System
    participant Compliance
    participant Manager
    
    User->>System: Places order (3 steps)
    System->>User: ✓ Order confirmed
    
    par Background Processing
        System->>Compliance: Async compliance check
        Compliance-->>System: ✓ Approved
    and
        System->>System: Auto-select warehouse
    and
        System->>System: Apply pre-negotiated pricing
    end
    
    alt Order > $10k
        System->>Manager: Auto-trigger approval
        Manager-->>System: ✓ Approved
        System->>User: Notification: Approved
    else Order ≤ $10k
        System->>User: Auto-approved & dispatched
    end
{{< /mermaid >}}
{{< diagram-caption >}}Complexity moved behind the scenes — user sees simplicity, system handles rules{{< /diagram-caption >}}

- Compliance checks happen **asynchronously** after order placement
- Approval chains are triggered **automatically** based on order value
- Custom pricing is **pre-negotiated** and applied at the account level

## Results

After a phased rollout over 6 weeks:

- **Order completion rate**: 23% → 88% (+65 percentage points)
- **Time to complete**: 25 minutes → 4 minutes
- **Support tickets related to ordering**: down 80%
- **No compliance violations** in the first 90 days

## What I Learned

Simplification isn't about removing features — it's about restructuring *when* complexity appears. The system still handles the same business rules; users just don't have to think about them at the wrong time.
