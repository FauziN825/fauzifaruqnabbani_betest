FROM node:alpine

# Create app directory
WORKDIR "/app"
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 3004
EXPOSE $PORT
CMD ["npm", "run", "start"]