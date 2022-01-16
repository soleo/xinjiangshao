---
title: "Order Status, The Long Awaited Feature"
author: "Xinjiang Shao"
date: 2018-01-24T16:19:16.244Z
lastmod: 2020-02-10T21:16:19-06:00

description: ""

subtitle: "It has been quite a journey since we released Order Status, a feature that will allow our customers to check their order details on…"
tags:
 - Push Notification
 - Backend
 - Frontend
 - Food Delivery
 - Analysis

image: "/posts/2018-01-24_order-status-the-long-awaited-feature/images/1.png" 
images:
 - "/posts/2018-01-24_order-status-the-long-awaited-feature/images/1.png"
 - "/posts/2018-01-24_order-status-the-long-awaited-feature/images/2.png"
 - "/posts/2018-01-24_order-status-the-long-awaited-feature/images/3.png"
 - "/posts/2018-01-24_order-status-the-long-awaited-feature/images/4.png"
 - "/posts/2018-01-24_order-status-the-long-awaited-feature/images/5.png"
 - "/posts/2018-01-24_order-status-the-long-awaited-feature/images/6.png"
 - "/posts/2018-01-24_order-status-the-long-awaited-feature/images/7.png"
 - "/posts/2018-01-24_order-status-the-long-awaited-feature/images/8.png"


aliases:
    - "/order-status-the-long-awaited-feature-a2ff6054d227"

---

![image](/posts/2018-01-24_order-status-the-long-awaited-feature/images/1.png#layoutFillWidth)

iOS Push Notification for Order Status


It
 has been quite a journey since we released Order Status, a feature that will allow our customers to check their order details on delivery day, get updates about their order via push notifications in both Android and iOS app, and receive an email with invoice pdf attachment when the order is packed.

### Push Notifications for Order Status

In the past, some customers, including me, would notice that we didn’t get an SMS message when the was soon to arrive. Sometimes, due to mobile services throttling SMS, messages would not arrive until hours after the delivery was completed. While looking for a better way to deliver SMS messages, we decided to also try sending Push Notifications and open another channel of communication to our customers. We decided that we would use Push Notifications to send messages when a driver is delivering your order and another when the driver has arrived.

### **Invoice Email Delivery**




![image](/posts/2018-01-24_order-status-the-long-awaited-feature/images/2.png#layoutTextWidth)

an example of order update email with invoice PDF



### On Customer’s Delivery Day at Peapod.com



![image](/posts/2018-01-24_order-status-the-long-awaited-feature/images/3.png#layoutOutsetRow2)





![image](/posts/2018-01-24_order-status-the-long-awaited-feature/images/4.png#layoutOutsetRowContinue2)

Step 1, Step 2: Order Received, Packed &amp; Ready





![image](/posts/2018-01-24_order-status-the-long-awaited-feature/images/5.png#layoutOutsetCenter)

Step 3: 30 minutes ETA when order is on the way





![image](/posts/2018-01-24_order-status-the-long-awaited-feature/images/6.png#layoutOutsetCenter)

Step 4: Delivered

Before this order status feature, a user would only be aware of out of stock information when the order arrived and may have only received a **2-hour** time window. Now, a user may see a **30 minute** ETA on their order and any out-of-stocks and replacements. This is our effort to make sure that our users are well informed.

### When is the users’ favorite time to check their order status?



![image](/posts/2018-01-24_order-status-the-long-awaited-feature/images/7.png#layoutOutsetCenter)

Order Status Steps By Hour Of Day

Not surprisingly, our users love to check the order status **early in the morning** or **late afternoon**. One curious discovery is that the users check their orders after they have been **delivered**. One possible explanation is that these users are comparing their order with the status email to check if there are any missing items.

### What can still be improved?




![image](/posts/2018-01-24_order-status-the-long-awaited-feature/images/8.png#layoutTextWidth)

Chowbus and Instacart Order Tracking



This is our initial release and there are numerous ways we can improve it.

In-app chat or calling with an anonymous phone number could provide a way for drivers and users to quickly communicate when something goes wrong. **Providing the driver’s name** to the users can make the service more personal. We’ve heard a lot of positive feedback about how **friendly** our drivers are, and I agree that the drivers are the highlights of the Peapod delivery service.

**Thirty minute ETA** windows are much better than **two hour** windows, but other delivery services provide **live tracking** of the driver. I don’t think it is necessary to know the full path of the driver, but it would be helpful to build up the user’s anticipation when there is an option to watch your order getting closer.

It recently occurred to me that many services immediately ask for **comments** when an order is completed. Peapod provides a channel to collect feedback from users, but we have never actively sought their opinion on a recent order. I’ve heard that we’ve recently started collecting customer feedback about drivers, but it would be nice to ask for these opinions immediately following a delivery.

Speaking of feedback, we’d love to hear from all of you about how Peapod can make the order status feature and our service in general even more useful!
