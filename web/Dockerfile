FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY . ./app

RUN npm install

CMD ["npm", "run", "dev"]

