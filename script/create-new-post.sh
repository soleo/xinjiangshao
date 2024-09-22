#!/bin/sh
# Create a new post
echo "Do you want to create a post? (y/n)"
read createpost
if [ "$createpost" = "y" ]; then
    echo "Enter post title (.md will be automatically added)"
    echo "Post title: "
    read posttitle

    hugo new content posts/$posttitle/index.md
    mkdir content/posts/$posttitle/images

    echo "Post created at content/posts/$posttitle/index.md"
fi

# Create talks if needed e.g 2024-09-22-the-superpowers-and-kryptonite-brought-by-nextjs
echo "Do you want to create a talk for this post? (y/n)"
read createtalk
if [ "$createtalk" = "y" ]; then
    echo "Enter talk title (.md will be automatically added)"
    echo "Talk title: "
    read talktitle

    hugo new content talks/$talktitle/index.md
    mkdir content/talks/$talktitle/images
    mkdir content/talks/$talktitle/slides
    mkdir content/talks/$talktitle/video

    echo "Talk created at content/talks/$talktitle/index.md"
fi