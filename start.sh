#!/bin/sh
sudo node bot.js 3 &
sleep 1
sudo node api.js 5
