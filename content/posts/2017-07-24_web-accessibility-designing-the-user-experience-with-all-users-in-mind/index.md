---
title: "Web Accessibility: Designing The User Experience With All Users In Mind"
author: "Xinjiang Shao"
date: 2017-07-24T02:56:30.638Z
lastmod: 2020-02-10T21:15:59-06:00

description: ""

subtitle: "I joined Peapod about six months ago. One of the major reasons I took the job is that the development team gave me the impression of social…"
tags:
 - Accessibility
 - Grocery Shopping
 - Front End Development
 - Frontend

image: "/posts/2017-07-24_web-accessibility-designing-the-user-experience-with-all-users-in-mind/images/4.gif" 
images:
 - "/posts/2017-07-24_web-accessibility-designing-the-user-experience-with-all-users-in-mind/images/1.jpeg"
 - "/posts/2017-07-24_web-accessibility-designing-the-user-experience-with-all-users-in-mind/images/2.png"
 - "/posts/2017-07-24_web-accessibility-designing-the-user-experience-with-all-users-in-mind/images/3.png"
 - "/posts/2017-07-24_web-accessibility-designing-the-user-experience-with-all-users-in-mind/images/4.gif"


aliases:
    - "/web-accessibility-design-the-user-experience-having-all-users-in-mind-5c5ed5a3ba78"

---

![image](/posts/2017-07-24_web-accessibility-designing-the-user-experience-with-all-users-in-mind/images/1.jpeg#layoutTextWidth)

A11Y wiki [https://en.wikipedia.org/wiki/Computer_accessibility](https://en.wikipedia.org/wiki/Computer_accessibility)



I joined Peapod about six months ago. One of the major reasons I took the job is that the development team gave me the impression of social responsibility the first time I met them. I’ve never seen any other company like Peapod has a strong requirement for making the application accessible for everyone. In the last major release, Peapod even hired a third party to audit the website to make sure that we’re WCAG Level AA compliant, and the QA team is keeping the same promise by going through the hassles to test for all of the following releases. Why do we care about web accessibility, and how do we do it?

### **Why do we need web accessibility?**
> Blind and visually impaired make up 285,000,000 people according to the [World Health Organization](http://www.who.int/mediacentre/factsheets/fs282/en/) (June 2012) with 39,000,000 categorized as legally blind and the remaining 246,000,000 visually impaired. Deaf and hearing impaired make up 275,000,000 (2004) in the moderate-to-profound hearing impairment category.> To put these in perspective, the population of the [United States of America](http://www.worldometers.info/world-population/us-population/) is 315,000,000 (January 2013).> Source: [http://a11yproject.com/about.html](http://a11yproject.com/about.html)

Let’s say you are not one of people who suffered permanent disabilities, what if you fall from a bike one day and lose your mobility temporarily? The question you want to ask yourself as an engineer is that “would you disappoint your users when they probably need you most?” The need of making your app accessible by everyone is very real in our life.

Admittedly the standard for making it accessible for everyone is not perfect. Many engineers complains about how bad WCAG 2.0 is, and it ruined the regular user experience. If you satisfied all the requirements by WCAG, it is basically made the whole user experience terrible for regular users. Another issue related is that there is no existing perfect tools for auditing web accessibility feature. The QA process could be tedious and take a long time to make sure the features that software engineers developed is meeting the requirements. Fortunately, Peapod’s QA’s team is taking most those responsibilities, and willing to apply common sense when there is no good standard to make it accessible, and at the same time not ruining the experience for regular users. Our team also invested a ton of resources to test the feature manually in different devices including kindle, iOS devices with voice over feature enabled etc. No prefect standard does not mean we should do nothing about it.

### How do we make Peapod more accessible for users?

#### Color: High Contrast Mode




![image](/posts/2017-07-24_web-accessibility-designing-the-user-experience-with-all-users-in-mind/images/2.png#layoutOutsetLeft)

High Contrast Mode Enabled



The high-contrast mode switch is available across the whole site, the users can turn on and off at any time. The preference is saved per user account, so even you are using a different device, you will still be able to see your preferred way to checking out the products.




![image](/posts/2017-07-24_web-accessibility-designing-the-user-experience-with-all-users-in-mind/images/3.png#layoutOutsetLeft)

High Contrast Mode Disabled



In our front end development cycle, we have two sets of CSS rules for normal and high-contrast mode. A grunt task would run each time we change any rules and calculate the delta , spliting into two sets . Whenever high-contrast is enabled or disabled, Peapod will unload and load the matching css file accordingly.

#### Navigation: Keyboard Navigation



![image](/posts/2017-07-24_web-accessibility-designing-the-user-experience-with-all-users-in-mind/images/4.gif#layoutOutsetCenter)

TAB key navigation

Frankly speaking, this is one of my favorite features. This is the feature empowers the users to use only keyboard to interact with Peapod website. Pressing the “TAB” key from keyboard would highlight the current focus with a green box while “ENTER” key would take your to link of the content. If your mouse or trackpad is broken for some reason, and you are in great need of ordering groceries, we’ll always be able to have your back. Our engineer is also very creative about how the users would be able to interact with our website. An undergoing fun project internally related to this feature is that we’re working on interacting with our website purely via command line. If you are nerdy enough, you could order groceries in terminal in the near future.

#### Voice Over

Voice Over Demo on Mac OS Safari

Being able to support voice over is curial to anyone who relies on screen readers. Once the user enabled voice over, they would be able to follow the links by natural order. You won’t see your focus jumped from one place to another unexpectedly. The sections of content are named semantically making sense, and all images appears in the screen would have an alternative text attached to the element including the advertisements. The focus would jump to the first focusable element whenever a modal popup. The extra mile we ran is far beyond what Amazon does for their retailer site.### The Final Thoughts

Making your app accessible for everyone is not something technically extremely difficult issue. After all, everything you do is to apply aria attributes to your html templates and the Operating System would pick up your notes. It takes time and patients to go through the process and fix the issue you didn’t notice before with all different variations of devices. You would think iOS Safari and macOS Safari would follow the rules of WCAG, but the result would surprise you some time. But once I start thinking about web accessibility when building all the time, it really makes me think the work I am doing it truly meaningful and useful to a wider audience.

If you’re interested working with a group of creative software engineers and loving food, feel free to contact me at Xinjiang.Shao@ahold.com or check out our [Career page](https://recruiting.ultipro.com/pea1003/JobBoard/1f0cc1a1-1676-ceaa-e29e-08d0a9e72c1d/?t=location&amp;t=location&amp;t=department&amp;v=4c55632e-9b43-4401-bd14-71b81a8155db&amp;v=cd58538a-adb3-4984-be85-3b7a3619d714&amp;v=b6cdb9e4-872a-4f74-ab09-010e42a0efd2&amp;q=&amp;o=postedDateDesc).

### References

[A11Y Style Guide](http://a11y-style-guide.com/style-guide/)

[The A11Y Project](http://a11yproject.com/)

[Web Accessibility | Udacity](https://www.udacity.com/course/web-accessibility--ud891)
