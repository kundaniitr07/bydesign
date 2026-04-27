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

### What I Found

- 6 of 12 steps could be eliminated or auto-filled from existing data
- Users were abandoning primarily at steps 4, 7, and 9 — all requiring information they didn't have readily available
- The "save and continue later" feature was used by 40% of users, indicating the flow was too long for a single session

## Design Process

### Principle: Progressive Disclosure

Instead of asking for everything upfront, I restructured the flow around three progressive stages:

1. **What** — Select products (smart defaults from order history)
2. **Where & When** — Delivery details (pre-filled from account settings)
3. **Confirm** — Review and approve (with inline editing)

### Handling Complexity

The original 12 steps existed for a reason — compliance, approval chains, custom pricing. I didn't remove this complexity; I restructured *when* it appears:

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
