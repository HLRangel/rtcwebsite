# Matters of the First and Second Sessions

This meeting was centered around the overall slowing down of the hosting initiative this year, where only three new hostees were brought on:

- Faust, a communist reading group;
- The Burning Comet Association;
- An individual hostee.

While this follows the slow trend of adoption for our initiative, and is justified by the volunteer nature of our group and our close involvement in a lot of the things we take on, the numbers could be improved.

Development on the Faust website has led to the piece-meal development of Ploogly, a static site generator meant to be useable as one binary without the need for the user to install external toolchains. Currently, it is developed as a closed project by one person, but tasks could be delegated if people are up for it. To do this, we'd need to set up a new git remote.

*See DISCUSSION TOPIC 1*

## Paths for Disagreement Resolution on the Matter of the Strike Platform/Voting Platform

Some time ago, one of our members was approached by someone seeking help with developing a platform to coordinate an anti-Trump general strike in the US. The platform would integrate a pseudonymous ID number system with the user's ZIP code, expanding the possibility for local organizing. See **Annex 1** for a partially modified copy of the original e-mail.

**Lopes** had initially proposed abandoning the idea in favor of an application to support candidates in Brazil's 2026 electoral cycle, stating it would be easier and most effort would be dedicated towards securing relationships with interested parties, increasing the standing of our group.

**Lopes (Paraphrased):** While I was initially eager to work on the [strike] project, I've realized it's kind of complicated, and it would require someone else teaming up with me and matching the level of work I put into it. We should abandon the project.

**Ceg: (Paraphrased, message):** On its own, I think it's a perfectly fine idea, but it seemed to me that you were thinking about doing it instead of the general strike thing. [...] I think it would be better for the RTC to work on that strike, because I think it has the most potential to accomplish something in terms of "class consciousness" because it could potentially be beneficial for forming more important things in the future.

## Snow's Suggestions

### Suggestion 1 (Paraphrased)

People are generally un-engaged because they don't know what's going on, we should have a spreadsheet of ongoing projects to get people organized.

**Lopes (Post-Session inline addition):** **WILL BE DONE**, this is an essential thing we've (unreasonably) skipped over. Even if we have to go through a few more sessions of the Yearly Meeting, it will be worth the trouble. 

### Suggestion 2 (Post-Session, paraphrased)

I think we should try and find people who have seen successes (or failures) in starting a union and create a repository of knowledge on union organizing. If we controlled the de-facto resource on the matter, we could influence the structure of new worker organizations in a beneficial way. We will also be more likely to be aware of what (if any) software needs to be created to help them.

This also combines very nicely with the Strike Platform, it's also a lot easier because it just requires us to ask questions of people.

**Lopes (Post-Session inline addition):** This is an under-estimation of the level of sophistication involved in creating unions, especially larger unions, where some degree of interaction with experienced people who can prove their experience is common practice. Fine-grained editorial control over practical written resources setting the fundamental direction of political events is mostly an intellectual myth.

## The RTC Certificate Authority

We were working on getting a Certificate Authority going. We don't have all the member keys yet, unfortunately, but the members have been selected.

**Lopes (Paraphrased, corrected):** The custom Hardware Security Module idea is too impractical, and while I've implemented SHA-256 (passes all test vectors) and LEA (does not pass all test vectors), rolling our own cryptography is not only ill-advised, but isn't really that fun at all. We have to look into better ways to do this, real HSMs are expensive and we can't get them into members' hands. **This is a low-priority matter**.

## Mailing List (Post-Session)

Over the past year, there has been interest in setting up a mailing list for contributors. While we'd still do communication through Discord and Signal, the list would be a way to inform everyone of what's going on. A similar idea has been suggested by an RTC contributor to the Faust group and was met with positive interest.

The market of E-mail is currently an oligopoly held by a few companies, as most ISPs block Port 25, and most mail services such as GMail/Outlook/Yahoo work on a whitelist basis, sending content from every provider they do not approve of right into the trash bin. Because of this, the pricing on every newsletter service is absolutely bizzarre, with the cost going as high as $0.09/user (Buttondown, 100 users) or $0.95/1000 e-mails (Mailersend Starter). While the price looks small, just imagine the cost of sending a couple dozen messages a month to a thousand users over a single year.

Both due to cost and in order to introduce our work to a larger number of people, we could shop the idea of creating a single list for the two groups.

## Need for System Administrators

We are in need for volunteer system administrators who will manage the RTC's shared hosting VM and be able to set up new accounts and sites if the current administrator is absent. Of course, this is a role that only trusted individuals can take up, so we could ask around. 

## Topics of Discussion for the Third Session

**DISCUSSION TOPIC 1**: Setup of new RTC git remote
Description: Our former attempt to use Gitea as a homebrew git platform was unsuccessful. It was too demanding, both in terms of compute load and "mind-share" of the users. We should try again with a simpler approach, using SSH to push changes.

Recommended reading: https://maurycyz.com/misc/easy_git/

**DISCUSSION TOPIC 2**: Project priority spreadsheet
Description: Discuss ongoing projects, set priority levels.

**DISCUSSION TOPIC 3**: RTC(/Faust ?) Mailing List
Description: Figure out what we're gonna do about the need for a mailing list.

**DISCUSSION TOPIC 4**: Find system administrators
Description: Find system administrators for the shared hosting VM.