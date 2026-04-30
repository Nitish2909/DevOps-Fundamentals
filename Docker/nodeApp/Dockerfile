
FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

copy . .

EXPOSE 8000

CMD ["node", "server.js"]