# MERN Uber Clone – Learning Notes

1. I created the setup first creating 3 major folders (client , server , notes ), then did the set up for backend (Server). files ==  app and index.js // folder == config which contains db.js.

2. Required the express in app.js , then made an app and called express().
   created a route (call back fnc)

   app.get('/',(req, res) => {
      res.send("Hello World")

   });

   to check if its working or not .
   
3. In the server file we required the http
  then we required the ./app

  then const server = http.createServer(app);

  server ko listen karaya 
  server.listen(port);

  example:- 
  server.listen(3000);

  required cors in index.js 

  CORS = cross - Origin resource sharing ;

  used to connect backend to frontend .

  created a message to notify if the server woriking properly

4.  its working on browser localhost:4000 . 

5. Now ill make Models for Captain , user and ride . 

6. before heading onto the Models , i fist create a db.js file in which i required mongoose and made a function connectToDb()

and exported it , Required and called it in app.js

checked th server : Server is running on port 4000
                  MongoDB connected

# Now creating Models
 starting with user.model.js 

 require mongoose 

 # then create schema : 

 full name ( object)- type string (firstt and last ) , min lenght 3 , requ-true .

 email - min lenght 5 , requ-true , type string .

 socket id - type string  (A socketId is a temporary unique ID given to a user when they connect to your server using WebSockets (Socket.IO). )

 password  -     min lenght 4 , requ - true , type string .

 # Authentication packages
 after this for authentication we need two packages bcrypt nd jsonwebtoken .


# Methods 

1. token authentication 
2. compare pass word 
3. Hash password 

# Controllers

created controller for writting the logic for userModel .

#  Routes 

creating APIs for user in routes folder 
also gonna use the express validator
npm install express validator    


# Frontend Routing 

npm i react-router-dom // to enable routing ( moving from one page to another)