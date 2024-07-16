FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install yarn

#EXPOSE 5173

COPY . .

RUN npm run build

CMD ["npm", "run", "preview"]