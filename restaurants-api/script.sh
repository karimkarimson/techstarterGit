#!/bin/bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y nginx nodejs npm
cd ~
git clone 'https:/github.com/karimkarimson/techstarterGit.git'
cd techstarterGit/ue81/restaurants-api
npm install
npm start