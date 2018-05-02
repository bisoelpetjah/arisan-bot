#!/bin/sh

docker rm -f arisan-bot
docker rmi -f arisan-bot
npm i
npm run build
docker build -t arisan-bot .
docker run -d -p 4000:4000 --name arisan-bot -e PORT=4000 -e FB_ACCESS_TOKEN=a -e FB_VERIFY_TOKEN=a -e FB_APP_SECRET=a --restart unless-stopped arisan-bot
npm run cleanup
