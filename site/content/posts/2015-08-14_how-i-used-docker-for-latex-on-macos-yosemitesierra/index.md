---
title: "How I used Docker for LaTeX On macOS Yosemite/Sierra"
author: "Xinjiang Shao"
date: 2015-08-14T04:13:01.813Z
lastmod: 2020-02-10T21:15:47-06:00

description: ""

subtitle: "Update on December 11, 2016:
I’m no longer using the image based on ``blang/latex``, instead it is now based on ``ubuntu:xenial``."
tags:
 - Docker
 - Golang
 - Latex

image: "/posts/2015-08-14_how-i-used-docker-for-latex-on-macos-yosemitesierra/images/1.png" 
images:
 - "/posts/2015-08-14_how-i-used-docker-for-latex-on-macos-yosemitesierra/images/1.png"


aliases:
    - "/how-i-used-docker-for-latex-on-mac-os-yosemite-cd29c0713cad"

---

![image](/posts/2015-08-14_how-i-used-docker-for-latex-on-macos-yosemitesierra/images/1.png#layoutInsetLeft)

LaTeX on Dokcer



**Update on December 11, 2016:**  
I’m no longer using the image based on ``blang/latex``, instead it is now based on ``ubuntu:xenial``.

A shortcut bash function I used to for compiling .tex now which is way more easier than before.
`docker-latex() { docker run -v $PWD:/mnt/src --rm  soleo/latex:latest $@; return $?; }`Recently I just got a my MacBook Pro because my old one died accidentally. That was a story involved with ice coffee and soda. But that’s not important. So after I used my dotfiles repository([https://github.com/soleo/dotfiles](https://github.com/soleo/dotfiles)) to set up everything I need and want to start compiling some old .tex files to PDF, PdfLaTeX was missing.

I was really frustrated at that time because I don’t like the mac version of LaTeX at all. You have to download a big package from [https://www.tug.org/mactex/](https://www.tug.org/mactex/) which is huge, and I really like to work in my favorite text editor namely sublime text instead of the ugly GUI provided in the Mac Suite. This time I’m going to try something new.

Docker is a great tool for getting dev environment ready for me, and I’ve been using it for building GoLang command line tools since a few month ago. After some DuckDuckGo searching( Who uses Google nowadays), I found one person actually did some profound work for me. However, I don’t like the way he uses the command. To make the world a better place, I wrote two scripts and added those to the Dockerfile. And here is how I did it.

1.  First of all, you need to install virtualbox, docker and docker-machine

I personally love homebrew, and use it to get almost all the tools I need. If you need to know more about how i did it, please check [https://github.com/soleo/dotfiles](https://github.com/soleo/dotfiles)
> brew install docker docker-machine> brew cask install virtualbox

1.  Use the Dockerfile to build the image or pull from docker hub> FROM blang/latex> MAINTAINER Xinjiang Shao &lt;shaoxinjiang at gmail dot com&gt;  
> ADD build /usr/bin/build  
> RUN chmod +x /usr/bin/build  
> ADD clean /usr/bin/clean  
> RUN chmod +x /usr/bin/clean  
> VOLUME /latex  
> WORKDIR /latex
[soleo/latex](https://github.com/soleo/latex)


You can find the Dockerfile in my soleo/latex repo, and run “docker build -t soleo/latex .” to get a local build or run “docker pull soleo/latex” to fetch from Docker Hub

1.  Run build to generate PDFs

After everything is done on docker side, run “docker run — rm -v `pwd`:/latex soleo/latex build example.tex” to compile your tex files. The build script is simply to run pdflatex twice to get your final pdf generated.

1.  Clean up if you need (Optional but I like it)

Finally, if you don’t like the mess you created, run “docker run — rm -v `pwd`:/latex soleo/latex clean” in order to get rid of all log files.

#### Things I Love about this approach

Docker is a very interesting project, I know this project since it was version 0.3, and now it grows so powerful. I saw great potentials to use it for dev environment setup, but this tool could be used for DevOps as well. Unfortunately, I still have to install VirtualBox and create a virtual machine in order to use docker, but at least I only need one virtual machine. In this approach, I could use whatever editor I like and compile it with one single command. The advantage of using docker for me in this case is that if I don’t want to use the tools anymore, I could simply remove the images from my Macbook. It’s just that simple.
