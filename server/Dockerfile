FROM node
WORKDIR /usr/src/app
COPY ./package*.json ./
COPY . .
RUN npm install -g nodemon
RUN npm i -g typescript
RUN npm i -g bcryptjs
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]
