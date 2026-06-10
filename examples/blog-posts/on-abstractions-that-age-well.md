---
title: "On Abstractions That Age Well"
date: 2025-04-28
---

The best abstractions I have worked with do not feel impressive at first. They feel boring in a helpful way. They name the thing everyone already understands, put a boundary around it, and leave enough room for the code to grow without becoming theatrical.

An abstraction ages well when it protects a decision instead of hiding reality. It should let a reader understand why the system is shaped a certain way, what changes are expected, and where the escape hatch lives when the model stops fitting.

## Clear Over Clever

Clever abstractions are fun on the day they land. Clear abstractions are useful six months later, when somebody is fixing a bug under pressure and does not have the full story in their head.

The most reliable test is whether the next change becomes easier to explain. If the answer needs a diagram, a meeting, and a half-remembered Slack thread, the abstraction may be doing too much. Good boundaries reduce the amount of memory the team has to carry.

## Names Carry Weight

Names are architecture in miniature. A name can make a behavior feel temporary, permanent, generic, or specific. When a name is honest, the code around it gets calmer. When a name is vague, every caller has to guess.

I like names that reveal ownership and intent: a "billing account" instead of a "customer object", a "sync attempt" instead of a "job result", a "review state" instead of a "status". The small precision compounds.

## Leave A Door Open

The future rarely arrives in the shape we expect. The goal is not to design for every possible future. The goal is to leave enough room for the obvious next move without making the current code harder to use.

That might mean accepting a plain object instead of inventing a framework. It might mean making the database constraint explicit. It might mean choosing one boring interface and letting the rest of the system stay direct.
