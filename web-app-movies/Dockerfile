FROM node:20-alpine

# ng/node dependencias
WORKDIR /usr/src/app
COPY . .
RUN npm install -g @angular/cli
RUN npm install
RUN ng analytics off

EXPOSE 4200 49153

CMD ["npm", "run", "start"]
