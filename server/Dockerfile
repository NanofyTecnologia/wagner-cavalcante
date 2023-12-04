FROM node:18-alpine

WORKDIR ./server

COPY ./certificados/ ./certificados/
COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5000

RUN npx prisma generate

CMD ["npm", "run", "dev:migrate"]
