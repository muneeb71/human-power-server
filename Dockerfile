FROM node:alpine3.19
ENV NODE_VERSION 20.13.1
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 443
CMD ["npm", "run", "start"]