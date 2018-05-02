#!/bin/sh

docker rm -f arisan-bot
docker rmi -f arisan-bot
npm i
npm run build
docker build -t arisan-bot .
docker run -d -p 4000:4000 --name arisan-bot -e PORT=4000 -e FB_ACCESS_TOKEN=EAAF8DLbQqqoBAGjSZA2sV5tcrAWukhfwAJHdPbXtsjEoGd4nFkAPVSevY3HRabSdgI16pfcjbZCJKkTwuxiXewnYxPegZAN1sghh32ZA4s8zPv1akVeZBhqrrO2eELHur9mrmqI9hCgZA2EXpFuYZAfa4qkgCQddGn26GKL0xSk2QZDZD -e FB_VERIFY_TOKEN=rahasiah -e FB_APP_SECRET=88631e4c5ebf4848e9661765d3cc05d5 --restart unless-stopped arisan-bot
npm run cleanup
