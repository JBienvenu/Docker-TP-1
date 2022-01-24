FROM node:16.13.2-alpine

WORKDIR /code

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 8000

CMD ["npm", "run", "start"]
