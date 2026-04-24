# My project Node version
FROM node:24-alpine
# Create a folder under the docker container
WORKDIR /backend

# Atfirst copy package.json for (Docker lawyer catching)
COPY package*.json ./
# install depegency
RUN npm install

# Copy all code by from my local machine
COPY . .

# everytime its build (Cause I am using ts)
RUN npm run build

# running port
EXPOSE 5000

# project running command for production (Its only dist file running)
CMD ["npm", "start"]