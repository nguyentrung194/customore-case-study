#!/bin/bash
cd server
rm -rf node_modules package-lock.json yarn.lock
npm i
npm run dev