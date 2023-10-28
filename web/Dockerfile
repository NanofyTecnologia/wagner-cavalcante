FROM node:18-alpine

WORKDIR /web

COPY package*.json ./
COPY tsconfig.json ./

COPY . ./web

RUN npm install

RUN npm install -g next@latest react@latest react-dom@latest

EXPOSE 3000

CMD ["npm", "run", "dev"]

