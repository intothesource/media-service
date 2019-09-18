# ---
# Base
# ---
FROM node:12-alpine as base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn

# ---
# Development
# ---
FROM base as dev
CMD [ "yarn", "start:dev" ]

# ---
# Production
# ---
FROM base as release
# TODO: Specify exactly which files to copy, rather than relying only on .gitignore
COPY . .
RUN yarn --production && \
    yarn build
EXPOSE 3000
CMD [ "yarn", "start:prod" ]
