---
title: "SEO: The Secret Sauce for Making Online Grocery Shopping Popular"
date: 2021-11-08T22:45:17-06:00
tags:
 - Search Engine Optimization
 - SEO
 - Think Inside of the Box
 - Food Delivery
---


## The Problem

Search Engine Optimization(SEO) has been one of the problems because of the increasing adoption of Single Page Application (SPA) for front-end development. SPAs are heavily dependent on client-side rendering, while Search Engine bots are making slow progress on JavaScript execution on their side. Google, the leading search engine service, has been making a lot of promises in the past that their bots could render the SPA client-side rendering results with [dynamic rendering](https://developers.google.com/search/docs/guides/dynamic-rendering). However, the previous experience has shown that it can take 14 days or more to get new content to be indexed in those situations. For other search engines, roadmaps to know when they are going to support client-side rendering (via their crawlers) are not known. 

The problem has become more and more **substantial** over the last two years because the cost of the paid search channel has risen in the grocery industry, and more new grocery shoppers use search engines such as Google and Bing to look for groceries online. Additionally, there are some unique challenges that exist in the grocery industry that could make things even more difficult for search engines to pick up useful information for providing meaningful content to users. For instance, geolocation plays a very important role in product assortment for grocery businesses. The product Stock Keeping Units (SKUs) could vary for two brick-and-mortar stores that are geographically close to each other. Moreover, the prices for those stores could also be different for the same product.


## Analysis of Possible Approaches

So then, you might ask, what can be done to better support SEO? 


### Server Side Rendered Dynamic Content

When the World Wide Web was initially invented back in 1989 by English scientist[ Sir Timothy Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee), society never imagined that we would be relying on it that much today. For many years, the web had been for static content only but moved towards the era we know now: everyone on the web can participate in content creation. 

Because web content was static, server-side rendered dynamic content worked very well for a long period of time. Eventually, however, users didn't need to fetch entire web pages every time they interacted with the websites.

For grocery shopping websites, the most common operation from users is doing product searches. If a user goes to the next page for search term results, does the whole page really need to refresh just to get the incremental changes? However, server-side rendered dynamic content has a strong advantage on platform support because the teams that worked on the projects could be much smaller.  On the other hand, if you look at any tools that do web scraping, many tools nowadays still do not support client-side rendering.

Being able to support some level of server-side rendering is a pretty essential ingredient for marketing a digital product. It is better to have a clear boundary between the front end and back end, and it is more preferable to interact with the back end via ReSTful APIs rather than the dynamic rendered HTML templates. 


### &lt;[NoScript](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript)> Tag

For anyone who is familiar with digital marketing analysis, the NoScript tag is a popular way of injecting some tracking pixels to help analyze conversions for various events if a user has a device with JavaScript disabled or JavaScript Unsupported Client. The tag has great support for almost all browsers. Therefore, it is not a surprise that search engines could consume the same information from this tag on their side as well. 


Adding the NoScript version of browse aisles and product detail pages for users with JavaScript disabled in browsers allows the search engine to start crawling more content from a  website.

On the flip side, this tag also adds more weight for serving regular users with JavaScript enabled. The majority of users nowadays always have JavaScript enabled regardless of whether they are using a mobile device, tablet device, or desktop, so delivering the NoScript tag on web pages to those users would be useless most of the time. This is significant for companies who want to be considerate about users’ data usage and deliver meaningful content.

Search engines are also trying to better support client-rich applications on the web and remove support for indexing content from the NoScript tag. While it still works as a doable approach for SEO today, it is also a ticking bomb that could go off anytime. Avoiding the use of the NoScript tag to include SEO content is better, and helps move the web forward. 


### Pre-render Just For Bots

Pre-render just for bots was initially recommended for website owners in[ 2009](https://developers.google.com/search/blog/2009/10/proposal-for-making-ajax-crawlable) and deprecated in[ 2015](https://developers.google.com/search/blog/2015/10/deprecating-our-ajax-crawling-scheme.html). The original idea suggested serving different content among the bots and the users. Since bots’ User-Agent is different from regular browsers, the server could serve entirely different content based on whether the consumer is a bot or not. Prerender.io, a business service, was created just for doing that kind of task for the various vendors. Similarly, the[ AMP](https://amp.dev/support/faq/overview/) project, which has the goal of improving the mobile experience by serving unique content to mobile clients, is attempting to have a better result for the search engines to index content. 

The approach to serving different content for bots and humans is not ideal because the bots’ job is to act on behalf of users to recognize the content which is needed to index. If the content is different for bots and humans, how could a company guarantee that the bots are indexing meaningful content? The approach remains a valid option to explore. 


## Methods of Improvements


### SPA Improvement

Another consideration is to add better keywords, titles, and h1 headlines on the current SPA so that the bots (GoogleBot, Twitter Bot, Facebook Bot, etc.) can pick up more meaningful content when they crawl.

Also, providing canonical URLs for SPAs allows the search engine to identify unique content to better index the pages.


### Static Sites for Product Pages and Category Pages

Creating a site generator that provides static product pages and category pages under a separate path from your main SPA could be very helpful. The pages can be re-generated periodically and provide performant, purely server-side rendered content to users and bots. Static content for product and category would increase the chance of getting assortment exposed to the public regardless of their availability from users' exact geolocation. As a result, more users would be attracted to those websites.


### Sitemaps and Robots.txt

With the new approach for generating static pages for products and categories, companies can also use it to generate fresh sitemaps for different types of content. Not only are all static pages exposed to sitemaps, but also pages such as popular search terms and cms contents are created as new sitemaps. In this way, companies can clearly tell how many pages are getting indexed by the search engine and improve based on that.


## The Result

The journey for SEO has been long, but the changes a company can make can translate to real results. Companies can expect to see an increase in the number of pages crawled and indexed, as well as improved trend impressions. But, only time will tell what the best solution is. And, if the past has taught us anything, that solution will likely continue to change as digital experiences change and evolve. 


## Disclaimer

The views, opinions, and content expressed in this blog are mine only and do not necessarily reflect the views, opinions, official policy, or position of my employer. 
