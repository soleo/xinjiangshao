---
title: "TD, Or Not TD, That Is The Question"
author: "Xinjiang Shao"
date: 2017-08-07T01:16:44.105Z
lastmod: 2020-02-10T21:16:09-06:00

description: ""

subtitle: "The Battle with HTML Email Templates"
tags:
 - Email
 - Html Email
 - Web Development
 - Frontend
 - Marketing Strategies

image: "/posts/2017-08-07_td-or-not-td-that-is-the-question/images/1.png" 
images:
 - "/posts/2017-08-07_td-or-not-td-that-is-the-question/images/1.png"
 - "/posts/2017-08-07_td-or-not-td-that-is-the-question/images/2.png"


aliases:
    - "/td-or-not-td-that-is-the-question-2ad88f70ce5"

---

The Battle with HTML Email Templates



![image](/posts/2017-08-07_td-or-not-td-that-is-the-question/images/1.png#layoutOutsetCenter)

### **HTML Emails**

Nearly all online users receive tons of newsletters, advertisements, and account notification emails from various sites and online services. Marketers consider email communication one of the most important channels for converting new customers. Not so long ago, making HTML emails was considered to be bad practice.
> **When you send an HTML email, you have _no guarantee_ that your message will be A) readable at all or B) visually legible to the recipient. With plain text email, you always have that guarantee, no matter what mail client the recipient is using.  
> - source:** [http://archive.birdhouse.org/etc/evilmail.html](http://archive.birdhouse.org/etc/evilmail.html)

Today, HTML emails are the norm, but most email clients do not consistently support HTML and CSS. Despite this difficulty, businesses are motivated to provide their customers with a more attractive, helpful, and hopefully more memorable email, so web development teams are tasked with the tedious job of developing and testing emails that work on as many email clients as possible.

### The Challenges

*   Spam filters

Traditionally, HTML emails are the tool of the spammer — containing misleading text and links all wrapped in bad HTML. Spam detectors check for a broken HTML document, so valid email senders need to ensure that their HTML email is correctly coded with no missing or mismatching tags.

*   No standards

There are no standards for HTML email coding and styling, which **means developers must test their emails on every email client** they want to support. While there are tools, like Litmus, that show the email as it will be rendered by various email clients, a developer still has to occasionally struggle with those clients that just won’t display the email properly.

Recently, I was tasked with figuring out why our Order Confirmation Email was not displaying on the **Android Gmail IMAP App** like it was on nearly every other email client we were testing. After working on this problem on and off for a few days, a coworker, suggested changing `TH `elements in the header row of the Order Detail section to `TD `elements.To this day, we still aren’t entirely sure why this worked because a `TH` element is semantically correct. We concluded that the Android Gmail IMAP email client just doesn’t handle `TH` elements. I would like to say this was an isolated incident, but it hasn’t been.



![image](/posts/2017-08-07_td-or-not-td-that-is-the-question/images/2.png#layoutOutsetCenter)

Gmail App IMAP and Gmail App on Android Comparison

### What can be done better? (Not much)

The battle with HTML emails will not end until there is good standard for email clients, and it appears that no organization is drafting one. So, the best developers can do is pretty much what they are already doing: coding HTML emails and testing them thoroughly with a lot of different email clients.

### Reference

*   [1] [http://archive.birdhouse.org/etc/evilmail.html](http://archive.birdhouse.org/etc/evilmail.html)
