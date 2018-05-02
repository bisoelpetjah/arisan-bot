#!/bin/sh

docker rm -f arisan-bot
docker rmi -f arisan-bot
npm i
npm run build
docker build -t arisan-bot .
docker run -d -p 4000:4000 --name arisan-bot -e PORT=4000 -e FB_ACCESS_TOKEN=EAAF8DLbQqqoBAA1vp3RktgU8lM3pWHhF0EyJ7qFmt4lkjMV46HqbMSuIrAo5inVZBVZCmePowybL9kzMCs2TbJrxMMSt1iDBTZA5GD5DwCXQQVaP32p2HxKnvZAmAYrhq4YqGFQ7DQK3aBN6uxCQH82NfZC9IJxnOtJqdzNZCd1gZDZD -e FB_VERIFY_TOKEN=rahasiah -e FB_APP_SECRET=88631e4c5ebf4848e9661765d3cc05d5 --restart unless-stopped arisan-bot
npm run cleanup
