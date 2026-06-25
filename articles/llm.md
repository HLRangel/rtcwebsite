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

## Policies of the RTC regarding Language Model training and deployment

### 1. Training data must be under the Public Domain or permissive licenses in a cohesive manner

While disputes over whether AI models constitute a derivative work of their training data are ongoing in the legal realm, the RTC sees LLMs in particular as being a kind of lossy collection, of which some parts are transformative and some are not. Near-complete excerpts of very common training data can be extracted from larger models, along with passages and code that are not transformative and, in our view, do not fit under any exceptions in very strict copyright regimes.

Of course, while we are against copyright, there is the matter of consent: LLMs are a polarizing technology for very good reasons, and most writers *do not* want their content to be used in training data. Permissive licensing is, above all, an ideological dedication to the commons, and those who have not adopted it have made no such dedication. As stewards of the good word of piracy, we must be exemplary in respecting the wishes of the un-aligned. The "AI boom" has been socially destructive, and those who would otherwise be sympathetic to us have all the reason to believe that our technical endeavors in creating collections are tantamount to an alignment with capitalists.

### 2. Explicit refusals shall be respected, to some degree

Authors who explicitly state on the same portal where their work is published that they do not want it to be used for "AI training" or something similar should have their wishes respected to some degree in cases where usage is legally allowed. Data annotators shall use their wit to determine if a refusal is relevant to our specific data use-case: the more the training of a model seems destructive and the better the end result is expected to be, the more serious the weight of the refusal.

### 3. Models should not be fine-tuned to undermine the pretense of a human conversation

This is pretty straightforward: **it is socially harmful to produce finetunes of a model for the purposes of having it pretend to be a human being** or for it to seem more human. Training a model to produce inflammatory tweets, for example, is an obvious harmful use-case.

Other subtler fine-tunes meant to make a model shed its syntactic customs (e.g having it ditch "it's not just X, it's Y"), or deliberately affecting perplexity scores to throw off "AI detection" (independently of the harm many "AI detectors" also cause) is also unacceptable. Experimental fine-tuning methods developed specifically for these purposes should also not be used.

### 4. Models should not be applied to undermine people's well-being

We cannot control how models are used, but we can abstain from optimizing them for use-cases that are harmful to others, thus making them an unattractive option for those who seek to do harm, employing them to run scams and other fraudulent activities. This policy, when observed along with the abstention from most forms of "alignment", can be summarized as avoiding self-censorship via the absence of functionality.

### 5. Models should not be trained with synthetic data of dubious legality

The copyright status of works created by generative AI models is unknown. Since only that which is produced by humans is eligible for copyright, some legal specialists have argued that everything GenAI produces is in the Public Domain; however, even in this case, a model may paraphrase or even recreate a copyrighted work, which would then turn the output into a mere reproduction (transformative or not) of an existing work created via overly elaborate means.

Of course, there are also ethical issues with utilizing synthetic data; first and foremost of which is the fact all widely used generative tools have awful data provenance and train aggressively on works they do not have a license to. **This is solely an ethical issue** because it does not legally affect us: the output of a computer program cannot inherit the license of the program itself, although the user may be compelled to provide it under license to the developer as a prerequisite to using the program.

Another ethical issue which is not mentioned as often is the fact that models trained on other models' outputs inherit their biases, for good or ill, including some forms of secret watermarking enforced by their creators. A model which is excessively trained on Grok-generated text may be more inclined to bring about a "MechaHitler outlook" to certain questions, though this applies to all other harmful biases as a result of "alignment" by groups with various contradictory interests.

Therefore, the RTC does not knowingly train on synthetic data generated by models that don't have open datasets under permissive licenses.

### 6. Exceptions for sequence-to-sequence models and masked language modelling

We consider seq2seq applications like translation and MLM applications like data reconstruction, along with intent classification and other partially/non-generative uses of language modelling to allow for a more lax outlook towards the usage of media not under an open license, as in our opinion these uses are transformative. A model trained to fill in missing parts of images, for example, does not serve the primary use-case of creating wholly new content sufficiently well to be considered a replacement of the work it was trained on.


## Notes

### On "collections" in the Creative Commons

Some individuals, such as Arianna Cheveldale, who is active in the open culture community and was a CC educator in 2022 whose Creative Commons Certificate textbook was made available by the B.C. and Yukon Faculty, alledge that all Creative Commons licenses permit usage CC works to be included "in a collection" with each other, even when those works' licenses would otherwise be incompatible for the purposes of creating a derivative work.

However, **explicit collection rights under CC have not existed for over a decade**, as the 4.0 version of the CC license suite scrapped the definition of a "collection" entirely, and therefore relegated the matter to the shaky ground around database rights and the like. With a handful of cursory web searches, we could not find an opinion by a qualified legal professional to support the idea that collection rights still exist in any way. The last licenses to support such a device are those of the 3.0 series.



