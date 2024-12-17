FROM node
WORKDIR /src
COPY . .
RUN npm install express
EXPOSE 5000
CMD ["node", "server.js"]
