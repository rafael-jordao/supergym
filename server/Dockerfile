FROM node
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install -g nodemon
RUN npm i -g typescript
RUN npm i -g bcryptjs
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
