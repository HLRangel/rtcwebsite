---
title# Guidelines for LLM training with few relevant externalities

description# Insert description

date# June 12th, 2026
datestamp# 20260612

new_filenames# yes

page_image# assets/images/invasion.avif
---

All technology use comes with harmful externalities; however, modern machine learning models are absolutely infested with them, so much so that it is possible for companies to "ethics-wash" their efforts and build entire ideologies of post-hoc justification around mere omission.

We aim to address the worst and most flagrant violations of ethics via these guidelines in order to prevent any models with create with our puny amount of resources from having a significant negative effect on the world. Of course, while the capability for real destruction is not within our reach, that will change as soon as we have a thousand dollars of compute credits available.

Furthermore, these guidelines are nearly exclusively focused around training and the deployment of models in user-facing environments. We are not concerned with the particulars of what the models themselves "should" or "should not" do, and we view efforts at "AI alignment" as potemkin villages built to avoid demolishing shanties of user incentives that are otherwise benefitial. Let us, then, address what matters.

## Policies of the RTC regarding LLM training and deployment

### Training data must be under the Public Domain or permissive licenses in a cohesive manner

While disputes over whether AI models constitute a derivative work of their training data are ongoing in the legal realm, the RTC sees LLMs in particular as being a kind of lossy collection, of which some parts are transformative and some are not. Near-complete excerpts of very common training data can be extracted from larger models, along with passages and code that are not transformative and, in our view, do not fit under any exceptions in very strict copyright regimes.

Of course, while we are against copyright, there is the matter of consent: LLMs are a polarizing technology for very good reasons, and most writers *do not* want their content to be used in training data. Permissive licensing is, above all, an ideological dedication to the commons, and those who have not adopted it have made no such dedication. As stewards of the good word of piracy, we must be exemplary in respecting the wishes of the un-aligned. The "AI boom" has been socially destructive, and those who would otherwise be sympathetic to us have all the reason to believe that our technical endeavors in creating collections are tantamount to an alignment with capitalists.

### Explicit refusals shall be respected, to some degree

Authors who explicitly state on the same portal where their work is published that they do not want it to be used for "AI training" or something similar should have their wishes respected to some degree in cases where usage is legally allowed. Data annotators shall use their wit to determine if a refusal is relevant to our specific data use-case: the more the training of a model seems destructive and the better the end result is expected to be, the more serious the weight of the refusal.

### Models should not be fine-tuned to undermine the pretense of a human conversation

This is pretty straightforward: **it is socially harmful to produce finetunes of a model for the purposes of having it pretend to be a human being** or for it to seem more human. Training a model to produce inflammatory tweets, for example, is an obvious harmful use-case.

Other subtler fine-tunes meant to make a model shed its syntactic customs (e.g having it ditch "it's not just X, it's Y"), or deliberately affecting perplexity scores to throw off "AI detection" (independently of the harm many "AI detectors" also cause) is also unacceptable. Experimental fine-tuning methods developed specifically for these purposes should also not be used.

### Models should not be applied to undermine people's well-being

We cannot control how models are used, but we can abstain from optimizing them for use-cases that are harmful to others, thus making them an unattractive option for those who seek to do harm, employing them to run scams and other fraudulent activities. This policy, when observed along with the abstention from most forms of "alignment", can be summarized by the motto: "Avoiding self-censorship via the absence of functionality."


