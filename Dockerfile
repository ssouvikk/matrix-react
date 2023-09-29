# setting development environment only
FROM node:18.7.0-alpine3.16


# we will use host file for development
WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .


EXPOSE 3000


CMD ["npm", "start"]