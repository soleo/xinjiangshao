---
title: "When The Night Is Falling, We Need The Dark Theme"
author: "Xinjiang Shao"
date: 2017-10-16T04:11:24.700Z
lastmod: 2020-02-10T21:16:14-06:00

description: ""

subtitle: "Update: A chrome extension made using the same technique is available on Google web store now."
tags:
 - CSS
 - Electron
 - Dark
 - Frontend

image: "/posts/2017-10-16_when-the-night-is-falling-we-need-the-dark-theme/images/1.png" 
images:
 - "/posts/2017-10-16_when-the-night-is-falling-we-need-the-dark-theme/images/1.png"
 - "/posts/2017-10-16_when-the-night-is-falling-we-need-the-dark-theme/images/2.png"
 - "/posts/2017-10-16_when-the-night-is-falling-we-need-the-dark-theme/images/3.png"
 - "/posts/2017-10-16_when-the-night-is-falling-we-need-the-dark-theme/images/4.png"
 - "/posts/2017-10-16_when-the-night-is-falling-we-need-the-dark-theme/images/5.gif"


aliases:
    - "/when-the-night-is-falling-we-need-the-dark-theme-10aefed8738c"

---

![image](/posts/2017-10-16_when-the-night-is-falling-we-need-the-dark-theme/images/1.png#layoutFillWidth)

**Update**: A chrome extension made using the same technique is available on [Google web store](https://chrome.google.com/webstore/detail/refined-peapod/ldecagemlljkdfmjbebocobandonleok) now.

Like a lot of people working in this industry, I prefer dark themes. If you were to ever look at my iTerm or Sublime Text windows, you would understand how pretty dark theme can be.




![image](/posts/2017-10-16_when-the-night-is-falling-we-need-the-dark-theme/images/2.png#layoutTextWidth)

My iTerm 2 Screenshot



A few weeks ago, I came across an blog written by Heydon Pickering ([https://inclusive-components.club/a-theme-switcher/](https://inclusive-components.club/a-theme-switcher/)), which describes a simple tweak to overwrite the current styles to get a dark theme and provides instructions for a React component to switch it on or off. The idea is neat and requires little time to implement and maintain. As a side note, I am also reading one of Heydon’s books entitled _Inclusive Design Patterns,_ which is worthy of any front-end developer’s time.

Instead of building a ReactJS component, my plan was to inject CSS into the page when the app is loaded. I have a pet project [https://github.com/soleo/electron-peapod](https://github.com/soleo/electron-peapod), which I created to make a desktop version of Peapod and experiment with some crazy ideas related to Peapod or extend it to behave more like a native app. It took about a day’s worth of trial and error to apply the dark theme to the site. The final look is certainly not a thing for a regular customer to have, but to me, it looks pretty cool.




![image](/posts/2017-10-16_when-the-night-is-falling-we-need-the-dark-theme/images/3.png#layoutOutsetLeft)

Night Mode on Upper Home Page for Electron Peapod



### Challenges &amp; Solutions




![image](/posts/2017-10-16_when-the-night-is-falling-we-need-the-dark-theme/images/4.png#layoutOutsetLeft)

Night Mode on Bottom Home Page for Electron Peapod



*   The colors of some elements look pretty ugly once they are inverted. I created rules to overwrite them one by one to make it look better, but it was a long and tedious process. Eventually, I just picked the essential sections instead of all of them.
*   Most of our product images don’t have transparent backgrounds, so I added border radius to make the overall look more pleasant.
*   In some pages, padding and margin is inconsistent, which resulted in the changed background covering some elements. The solution was to overwrite the styles of some elements to use margin instead of padding.

### **Caveats**

Though it will probably never be used by the Peapod customer base, implementing the dark theme did lead to a number of discoveries about the current Peapod.com client application and ways to improve its structure to allow for easier retheming.

If you’re interested, a demo of the night mode is added. If you are interested in more cool features, check out [https://github.com/soleo/electron-peapod](https://github.com/soleo/electron-peapod) and watch for any future development.



![image](/posts/2017-10-16_when-the-night-is-falling-we-need-the-dark-theme/images/5.gif#layoutFillWidth)
