---
title: "Why Scala Can Help You to Build a More Reliable Service"
author: "Xinjiang Shao"
date: 2016-02-03T03:43:47.605Z
lastmod: 2020-02-10T21:15:54-06:00

description: ""

subtitle: "I’ve been hunting for a language to build applications which should be easy to be deployed, managed and tested for quite a while. Well…"
tags:
 - Functional Programming
 - Scala
 - Rest Api

image: "/posts/2016-02-03_why-scala-can-help-you-to-build-a-more-reliable-service/images/1.png" 
images:
 - "/posts/2016-02-03_why-scala-can-help-you-to-build-a-more-reliable-service/images/1.png"


aliases:
    - "/why-scala-can-help-you-to-build-a-more-reliable-service-e37bcd8ac685"

---

![image](/posts/2016-02-03_why-scala-can-help-you-to-build-a-more-reliable-service/images/1.png#layoutTextWidth)

Simple Cloud Identity Management Scala Implementation ( [https://github.com/soleo/scim-rest](https://github.com/soleo/scim-rest) )



I’ve been hunting for a language to build applications which should be easy to be deployed, managed and tested for quite a while. Well, coming from a C/C++ background, transferring to Java in grad school, then working mainly with PHP, JavaScript and Objective-C in various applications for my current position, it almost made me think that there is no big difference among all programming languages. No matter what kind of language you’re using, the quality of your work would always have to rely on how experienced you are. I’ve never came across the idea that using a modern language would be more beneficial to a developer to build new applications faster and more reliable.

It turned out I am quite wrong after I look into Scala which is created about 13 years ago. It is a functional language inspired by Java, Lisp, Haskell etc. This is not my first time to hear about a functional language, but I do have some really bad misunderstandings for functional languages. As I mentioned earlier, C is my first language. Programming in C means that you’re using functions to construct everything, and you’d be thinking about procedures all the time. And you are dealing with memory by yourself which is not related to your business logics at all. So you end up with debugging and testing memory leaks and segment faults. This part of the job is pretty nasty. My first impression on functional languages is something looks like C language.

Scala is totally what I’m not expecting. I mean, functions are the first class citizens in Scala which loud and clear when I first see it. After all, it is a functional language. However at the same time, all the variables by default are immutable. The design actually solved a lot of issues. I wasn’t expecting this at all. Because of immutable variables, you’re free from thinking about who owns variables, and were the variables changed by others, do I need the lock it when I used it in multiple threads. Fun fact here, when you first learnt to do math, and try to calculate a formula, nobody would ask you the ownership of the variables. Why would programming be any different?

After a few weekends’ reading and experimenting, it fully convinced me that a functional language is very helpful to make developers focus more on the real business logics rather than figuring out how machines work. The thing it really matters is that business logic part. Life is too short to debug server issues. The side effects coming from the server’s memory management or locking/unlocking stuff shouldn’t be there in the first place. I hate to say that, but relying on a developer’s past experience to make the right call to manage memory are not reliable. How many times you forget to lock your key in your apartment when you go to work in your daily life? Shit happens when a person is dealing with a lot of repeated small details.

[soleo/scim-rest](https://github.com/soleo/scim-rest)


SCIM-REST was born as an example of how to use Scala to build a RESTful service. With Scala, it made things easier when you need to concurrent applications. There are Promises in Scala as well. So if you come from JavaScript background, there will be no surprises. SCIM-REST is built with Play Framework. If you used hapi with NodeJS, they are surprisingly similar in my opinion.

There is one thing really bothers me. Not many really good quality projects written in Scala are available on GitHub ([https://github.com/trending?l=scala&amp;since=monthly](https://github.com/trending?l=scala&amp;since=monthly)), so it’s harder for new developers to learn from each other. Checking out a real project or making a real world project is a really good way to learn a new language. I hope there will be more people contributing to this young language. You won’t regret it when you start to use Scala. It’s an amazing and attractive language to know.
