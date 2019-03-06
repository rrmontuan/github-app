FROM node:10.15.1

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm", "start"]