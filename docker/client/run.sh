#!/bin/sh

npm install

if [ $CLIENT_ENV = "dev" ]; then
    npm run dev
else
    npm run build
fi
