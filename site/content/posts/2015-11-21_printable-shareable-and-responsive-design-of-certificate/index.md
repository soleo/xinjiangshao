---
title: "Printable, Shareable and Responsive Design of Certificate"
author: "Xinjiang Shao"
date: 2015-11-21T23:10:22.395Z
lastmod: 2020-02-10T21:15:51-06:00

description: ""

subtitle: "Bootstrap doesn’t solve all your problems!"
tags:
 - Responsive Design
 - Education
 - Printable

image: "/posts/2015-11-21_printable-shareable-and-responsive-design-of-certificate/images/1.png" 
images:
 - "/posts/2015-11-21_printable-shareable-and-responsive-design-of-certificate/images/1.png"
 - "/posts/2015-11-21_printable-shareable-and-responsive-design-of-certificate/images/2.gif"
 - "/posts/2015-11-21_printable-shareable-and-responsive-design-of-certificate/images/3.gif"


aliases:
    - "/printable-shareable-and-responsive-design-of-certificate-17bb63206d5a"

---

#### Bootstrap doesn’t solve all your problems!




![image](/posts/2015-11-21_printable-shareable-and-responsive-design-of-certificate/images/1.png#layoutOutsetLeft)

Sample Certificate for Online “GoMental” Program





![image](/posts/2015-11-21_printable-shareable-and-responsive-design-of-certificate/images/2.gif#layoutOutsetLeft)

Sample Certificate on iPhone 6





![image](/posts/2015-11-21_printable-shareable-and-responsive-design-of-certificate/images/3.gif#layoutOutsetLeft)

Sample Certificate for Printing



When you start talking about responsive design on websites, [Bootstrap](http://getbootstrap.com/) would be considered as an excellent framework for that purpose. As a developer, I love Bootstrap because I don’t need to reinvent the wheel whenever I build new websites. I still remember one of the slogans created for Bootstrap is “Invented for Nerds”. Frankly, “Nerds” is a magical catch phrase for me.

Several weeks ago, our team hired a designer to deliver a certificate design for our [online mental training program](https://exactsports.com/coach-tools). Our goal is to make this viral. And let users brag about their accomplishments on the mental aspect of their athletic career. So the design should be easily showed in mobile devices and desktops. More important, they should be able to get a print version of the certificate.

Making it responsive is not hard with the help of Bootstrap, but the making it printable is not something that easy. In current Bootstrap codebase, it would make the background of all elements to be transparent. For a long time, I thought it’s just impossible to get a printable background from web pages. Considering we’re using PHP, I tried to render the certificate with [DOMPDF](https://code.google.com/p/dompdf/) and [TCPDF](http://www.tcpdf.org/). Both of them are not good options because they only support CSS 2.1 at most, and custom fonts are not working well with them. Another option would be using JavaScript libraries such as [JsPDF](https://parall.ax/products/jspdf). But generating PDF from the client side isn’t that reliable, and what’s worse is that the feature I need (HTML to PDF) is not production ready.

Luckily I am not blinded by the magical power of Bootstrap. I start to think the possibilities to generate a PDF or make the printing working from Operating System itself. With trials and errors, I managed to rewrite the print media queries in CSS and made a consistent enough version of certificate for most browsers and printers.I’m not saying we should never use frameworks for developers, but it’s very important for us developers to know the fundamentals of the frameworks we use. Sometimes, we’re just blinded by the frameworks, and stop looking for a better solution for a particular issue.

Don’t take everything in granted, at least read other peers work before using. I’m not just referring to Documentations, more importantly the CODE.
