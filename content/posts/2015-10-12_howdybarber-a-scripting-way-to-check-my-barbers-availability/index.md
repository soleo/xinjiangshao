---
title: "HowdyBarber: A scripting way to check my barber’s availability"
author: "Xinjiang Shao"
date: 2015-10-12T22:38:19.398Z
lastmod: 2020-02-10T21:15:50-06:00

description: ""

subtitle: "I don’t go to a really fancy barbershop to get my hair cut, but my current barber’s schedule filled up so quickly that I have to check…"
tags:
 - Scripting
 - Rest Api
 - Json

image: "/posts/2015-10-12_howdybarber-a-scripting-way-to-check-my-barbers-availability/images/1.png" 
images:
 - "/posts/2015-10-12_howdybarber-a-scripting-way-to-check-my-barbers-availability/images/1.png"


aliases:
    - "/howdybarber-a-scripting-way-to-check-my-barber-s-availability-a75a22bcba0d"

---

I don’t go to a really fancy barbershop to get my hair cut, but my current barber’s schedule filled up so quickly that I have to check regularly to make appointments. I really don’t want to waste my time on opening tabs in chrome and login to check their schedule one by one.

I came up with a few options to do the checking.

1.  Use a headless library like PhantomJS to acting as myself to do the clicking and parsing. (Worst Case)
2.  Use their public documented API to query for availability (Best Case)
3.  Somehow find out a way to get their availability feed from a third party (Doable but rely on the third party)

My barber uses [https://resurva.com/](https://resurva.com/) as their booking system. The service is for barbers to manage their bookings. Browsing through the website, there is no documentations about any public API I could use. Option 2 is out.

Obviously, the 1st option requires a lot of work. I have to write a bunch of code to parse the DOM in each step. But the method is quite general. It could be used for any websites with any structures. The shortcoming, which is something I really hate, is that it would highly rely on their DOM structure. If any of key points is changed by their side because of their theme update or something else, the whole script will be broken.

Well, looks like I have to find another source of getting the data. Out of curiosity, I checked out their client side source code to see if I could use something. Before I want to investigate on how to find doable third party source for option 3, their ajax calls history caught my eyes. Browsing through the history, I find out there are a few API endpoints they used for their service.




Yay! I could use **vailablityUri** to check my barber’s availability. But I still have another concern. Do I need to be authenticated in order to use the API? Tried with Curl, it is not an issue. Will be blocked if query their server too fast and too often? Not an issue so far. But still I don’t want to abuse the system, I added some sleep time in my script.

After a few tries, Everything looks good. I formatted the text message I want and pushed to [https://github.com/soleo/HowdyBarber](https://github.com/soleo/HowdyBarber) .




![image](/posts/2015-10-12_howdybarber-a-scripting-way-to-check-my-barbers-availability/images/1.png#layoutTextWidth)

Howdy, Barber!

#### Finally thoughts for all the mess I made

I’m not surprised that _R_[_esurva_](https://resurva.com/) doesn’t have public API documentation. But I’m extremely surprised by their lack of authentication for their API Service. Maybe they don’t want to sacrifice the performance by adding an extra step. There are a few other issues. The UI doesn’t let me query for any date further than 4 weeks, but I could easily get the availability information for the API. This is probably unintentional. Their mistake is my luck. I’m pretty sure there are other bad practice in their system, but I’ve seen enough for my personal use.

Have fun hacking Resurva!
