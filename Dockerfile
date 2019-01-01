FROM node:8-alpine
RUN mkdir -p /usr/src/ChattingApp
WORKDIR /usr/src/ChattingApp
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "app.js" ]