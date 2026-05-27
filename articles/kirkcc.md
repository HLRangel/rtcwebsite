---
title# About Kirk Tung

description# Outline of the Kirk base model which is coming out soon.

date# 26th of May, 2026
datestamp# 20260526

new_file_names# yes

page_image# assets/images/kirkad2.avif
---

We will soon be releasing the first Kirk model, Kirk Tung. Kirk is an endeavor to make a very small language model that can accomplish basic tasks while relying only on data under a Libre license of the Public Domain, thus serving as a reply to the most common legal concern in language modelling.

Kirk Tung will be the first step in our journey; it will not be "useful" in any sense of the term, and may ironically only be useful for the purpose of generating incoherent text to trick LLM scrapers. It is, however, an important step as we seek to familiarize ourselves with the basic difficulties we will face.

Given that generating factual text or anything coherent at all is far outside our domain, both in terms of money and time, we have aimed to be a little quirky, and Kirk will be pre-trained with the most interesting and out-of-line content that fits within its legal guidelines in order to generate entertaining output: the works of political excentrics, Fandom wikis, 19th-20th century occultist texts, and staple religious works.

## Architectural details

Kirk Tung will be based on the Llama architecture and will, by default, be configured to have an effective context length of 2048 tokens via RoPE, although it will only be trained on batches of 1024 tokens.

Due to cost and compute limitations, we have stuck to a Chinchilla-optimal scale of 20 tokens per parameter, although we have no idea if that actually holds for models at a very low parameter scale.

The development test version of Tung has a vocabulary of 16306 and sits at ~41m parameters, though we plan to double those figures on our last training run for a vocab of ~32000 at ~80m parameters. Currently, the main limitation is finding enough training data at the appropriate level of weirdness.

## Medium-term goals and additional details

We mainly seek to trail or overcome GPT-2's performance on benchmarks such as ARC-Easy via fine-tuning it on text that is more grounded in reality; after that, we seek to make it useful on a narrow domain of generative summarization tasks. 

Overall, we would consider it a great victory to overcome the best scores presented in the [Tiny ML Leaderboard](https://huggingface.co/spaces/CompactAI-O/Tiny-ML-Leaderboard) at twice the size of its largest model, due to the limitations in our data.

The dataset will be released to the public, as such a step is obviously necessary to verify our data provenance claims.

## Why is it called Kirk Tung?

That will be left open to your imagination.