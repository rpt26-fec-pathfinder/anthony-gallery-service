FROM node:12.18-alpine
ENV NODE_ENV=production \
    COUCH_USER=admin \
    COUCH_PASSWORD=cakescookies180 \
    NEW_RELIC_KEY=426b02551c9f1decc01c5988536645f46aa8NRAL
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 4012
CMD ["npm", "run", "start-docker"]
