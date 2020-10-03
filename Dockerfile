FROM node:12
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app
COPY package.json /app/package.json

RUN yarn install

COPY . /app

# Install nodemon
RUN yarn global add nodemon

EXPOSE 8080
#EXPOSE 27017
#EXPOSE 6379

CMD ["yarn", "dev"]
