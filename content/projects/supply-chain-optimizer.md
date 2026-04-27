---
title: "Supply Chain Optimizer"
date: 2026-03-15
summary: "Redesigned the end-to-end supply chain planning system to reduce delivery times by 30% and cut operational costs."
category: "Product Architecture"
year: "2026"
tags: ["Supply Chain", "System Design", "Optimization"]
role: "Product Architect"
duration: "6 months"
team: "Cross-functional (8 members)"
impact: "30% faster deliveries, 15% cost reduction"
readingTime: 5
draft: false
---

## The Challenge

The existing supply chain planning system was built incrementally over years, resulting in fragmented workflows and data silos that made it nearly impossible to optimize end-to-end delivery performance.

{{< mermaid >}}
graph LR
    A[Order System] -->|Manual Export| B[Planning DB]
    C[Warehouse DB] -->|Batch Sync| B
    D[Transport System] -->|CSV Upload| B
    E[Vendor Portal] -->|Email| B
    B -->|Reports| F[Decision Maker]
    style A fill:#1a1a2e,stroke:#f472b6
    style B fill:#1a1a2e,stroke:#f472b6
    style C fill:#1a1a2e,stroke:#f472b6
    style D fill:#1a1a2e,stroke:#f472b6
    style E fill:#1a1a2e,stroke:#f472b6
    style F fill:#1a1a2e,stroke:#f472b6
{{< /mermaid >}}
{{< diagram-caption >}}Before: Fragmented systems connected by manual processes and batch jobs{{< /diagram-caption >}}

## My Approach

I started by mapping the entire value stream — from order placement to last-mile delivery — identifying bottlenecks and decision points where the system was leaving value on the table.

### System Architecture — The Redesign

{{< mermaid >}}
graph TB
    subgraph Ingestion["Data Ingestion Layer"]
        A1[Order Events] 
        A2[Warehouse Sensors]
        A3[Transport GPS]
        A4[Vendor API]
    end
    
    subgraph Core["Event-Driven Core"]
        B1[Event Bus]
        B2[Unified Data Model]
        B3[ML Forecasting Engine]
    end
    
    subgraph Intelligence["Decision Layer"]
        C1[Route Optimizer]
        C2[Demand Predictor]
        C3[Cost Analyzer]
    end
    
    subgraph Output["Real-Time Output"]
        D1[Live Dashboard]
        D2[Auto-Dispatch]
        D3[Alert System]
    end
    
    A1 --> B1
    A2 --> B1
    A3 --> B1
    A4 --> B1
    B1 --> B2
    B2 --> B3
    B3 --> C1
    B3 --> C2
    B3 --> C3
    C1 --> D1
    C1 --> D2
    C2 --> D1
    C3 --> D3
    
    style A1 fill:#12121f,stroke:#7c6bf0
    style A2 fill:#12121f,stroke:#7c6bf0
    style A3 fill:#12121f,stroke:#7c6bf0
    style A4 fill:#12121f,stroke:#7c6bf0
    style B1 fill:#12121f,stroke:#00e5c8
    style B2 fill:#12121f,stroke:#00e5c8
    style B3 fill:#12121f,stroke:#00e5c8
    style C1 fill:#12121f,stroke:#7c6bf0
    style C2 fill:#12121f,stroke:#7c6bf0
    style C3 fill:#12121f,stroke:#7c6bf0
    style D1 fill:#12121f,stroke:#00e5c8
    style D2 fill:#12121f,stroke:#00e5c8
    style D3 fill:#12121f,stroke:#00e5c8
{{< /mermaid >}}
{{< diagram-caption >}}After: Event-driven architecture with real-time intelligence{{< /diagram-caption >}}

### Key Design Decisions

1. **Unified Data Model** — Consolidated five separate databases into a single event-driven architecture
2. **Predictive Routing** — Integrated ML-based demand forecasting into the routing engine
3. **Real-time Visibility** — Built a live dashboard giving every stakeholder a single source of truth

### How the Routing Decision Works

{{< mermaid >}}
flowchart TD
    A[New Order Received] --> B{Demand Forecast}
    B -->|High Demand Zone| C[Priority Route]
    B -->|Normal| D[Standard Route]
    C --> E{Vehicle Capacity?}
    D --> E
    E -->|Available| F[Assign & Dispatch]
    E -->|Full| G[Queue + Optimize Batch]
    G --> H[Consolidate Orders]
    H --> F
    F --> I[Real-time Tracking]
    I --> J[Delivery Complete]
    J --> K[Feed Back to ML Model]
    K --> B
    
    style A fill:#12121f,stroke:#00e5c8
    style B fill:#12121f,stroke:#7c6bf0
    style F fill:#12121f,stroke:#00e5c8
    style J fill:#12121f,stroke:#00e5c8
    style K fill:#12121f,stroke:#f472b6
{{< /mermaid >}}
{{< diagram-caption >}}Routing decision flow with ML feedback loop{{< /diagram-caption >}}

## The Outcome

The redesigned system delivered measurable results within the first quarter:

- **30% reduction** in average delivery time
- **15% decrease** in operational costs
- **95% accuracy** in demand forecasting (up from 72%)

> "This is the most impactful system redesign we've done in the last five years." — VP of Operations
