---
title: "Simplicity Is the Hardest Design Problem"
date: 2026-03-28
summary: "Anyone can add complexity. The real skill is knowing what to remove — and having the conviction to do it."
tags: ["Design", "Product Thinking", "Simplicity"]
readingTime: 4
draft: false
---

There's a misconception that simplicity means doing less. It doesn't. Simplicity means doing the *right* things so well that everything else becomes unnecessary.

## The Complexity Trap

Every feature request sounds reasonable in isolation. "Can we add a filter here?" "What about an export option?" "Users want a dashboard."

Say yes to all of them and you get a product that does everything and nothing well. The interface becomes a graveyard of good intentions.

{{< mermaid >}}
graph TD
    A["Good Intention:\nAdd filter"] --> D["Product\nComplexity"]
    B["Good Intention:\nAdd export"] --> D
    C["Good Intention:\nAdd dashboard"] --> D
    D --> E["User sees:\nOverwhelming interface"]
    D --> F["Team sees:\nMaintenance burden"]
    D --> G["Business sees:\nLow adoption"]
    
    style A fill:#12121f,stroke:#7c6bf0
    style B fill:#12121f,stroke:#7c6bf0
    style C fill:#12121f,stroke:#7c6bf0
    style D fill:#12121f,stroke:#f472b6
    style E fill:#1a1a2e,stroke:#f472b6
    style F fill:#1a1a2e,stroke:#f472b6
    style G fill:#1a1a2e,stroke:#f472b6
{{< /mermaid >}}
{{< diagram-caption >}}The complexity trap: good individual decisions → bad system outcome{{< /diagram-caption >}}

## The Art of Removal

The best product decisions I've made weren't about what to add — they were about what to remove. Removing a feature that 15% of users relied on because it was confusing the other 85%. Removing an entire workflow because the same outcome could be achieved in two clicks instead of ten.

## A Framework for Simplicity

When evaluating any addition to a product, I ask three questions:

{{< mermaid >}}
flowchart TD
    A["Proposed Feature"] --> Q1{"1. Does it serve\nthe core job?"}
    Q1 -->|"Yes"| Q2{"2. Can existing UI\nhandle this?"}
    Q1 -->|"No"| R1["✗ Don't build it"]
    Q2 -->|"No, needs new UI"| Q3{"3. What becomes\nharder if we ship?"}
    Q2 -->|"Yes"| R2["✓ Improve existing flow"]
    Q3 -->|"Acceptable cost"| R3["✓ Build it"]
    Q3 -->|"High cost"| R1
    
    style A fill:#12121f,stroke:#00e5c8
    style Q1 fill:#12121f,stroke:#7c6bf0
    style Q2 fill:#12121f,stroke:#7c6bf0
    style Q3 fill:#12121f,stroke:#7c6bf0
    style R1 fill:#1a1a2e,stroke:#f472b6
    style R2 fill:#12121f,stroke:#00e5c8
    style R3 fill:#12121f,stroke:#00e5c8
{{< /mermaid >}}
{{< diagram-caption >}}My 3-question framework for evaluating any feature addition{{< /diagram-caption >}}

1. **Does this serve the core job-to-be-done?** If it's adjacent, it's probably a distraction.
2. **Can the existing system handle this without new UI?** Often the answer is yes — through better defaults, smarter automation, or improved existing flows.
3. **If we ship this, what becomes harder?** Every addition has a maintenance cost, a cognitive cost, and an opportunity cost.

Simplicity isn't a starting point. It's a destination you reach by relentlessly removing everything that doesn't earn its place.
