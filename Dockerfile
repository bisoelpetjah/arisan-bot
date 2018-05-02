FROM mhart/alpine-node:base-8.9.0
WORKDIR /source

# Provide executable
ADD index.js index.js

# Provide server side transpiled code
ADD build src

# Provide modules
ADD node_modules node_modules

CMD ["node", "."]
