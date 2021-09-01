# fauzifaruqnabbani_betest
User data application for backend tests implement Node Js, Express, Mongo DB, JWT, Redis,  Docker, and Jest

# Features of the App
- When Login, it will generate tokens
- Protect the APIs using the authorization header 
- Implement cache strategy using Redis for user data.
- Can create new user data
- Update User Data
- Delete User Data
- Get All data, and get all user data , get byd id, account number and identity number

# Installation
Clone the repo
   ```sh
   git clone https://github.com/FauziN825/fauzifaruqnabbani_betest
   ```
## Run the app locally without Docker-compose
- Change HOST Mongodb locally with localhost, ex : mongodb://localhost/mydatabase
   ```sh
   ex : mongodb://localhost/mydatabase
   ```
- Install NPM packages
   ```sh
   npm install
   ```
- Start the App
   ```sh
   npm start
## Run the app locally with Docker-compose
- Change HOST Mongodb locally with localhost, ex : mongodb://mongo/mydatabase, it depends on the service name in docker-compose, in this code using mongo. make sure you have installed docker
   ```sh
   ex : mongodb://mongo/mydatabase
   ```
- Build Docker Compose as image in the root directory
   ```sh
   docker-compose build
   ```
- Running Container
   ```sh
   docker-compose up
 ## Using Apps that are in the cloud (Release)
 Currently the app has been released and deployed on heroku. Please refer to this link for live demo https://fauzi-faruq-nabbani-betest.herokuapp.com. for data already available and connected with mongodb atlas and caching using redislab
 ![image](https://user-images.githubusercontent.com/85719272/131643068-73e2a782-4dc1-4092-9ef7-5022404a3bc0.png)
 ![image](https://user-images.githubusercontent.com/85719272/131643193-69681da4-3b25-4951-bece-9490fac818cd.png)

# Result of unit test
unit test uses jest, handles success and failure returns, with a coverage score of 88.31%


![Unit Test Result](https://user-images.githubusercontent.com/85719272/131644073-b3608699-be85-4a16-b06c-db70c3f902fe.PNG)
