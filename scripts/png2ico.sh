#!bin/bash

convert -resize x16 -gravity center -crop 32x32+0+0 ../favicon.png -flatten -colors 256 ../favicon.ico 
