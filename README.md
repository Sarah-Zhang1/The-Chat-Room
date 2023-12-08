# THE CHAT ROOM - C4C 

## Overview: 
Creates a realtime chat room, where people can connect to a server. They can message with other people who are also on the server.  

## Components and their Interactions: 
* The CSS and HTML files work together to create the user interface of the Chat Room and the Input User Name Page 
    * CSS file: defines the qualities of the containers in the interface 
    * HTML file: creates the layout of the pages 
* Utilizes Socket.IO to communicate with the back-end components (Express) 
    * server.js: Back-End; The server; When recieve a connection from the client, displays the messages and information. It can also send a request without waiting for the client.  
    (ie. when recieves a connection, outputs message for when user joins, leaves, sends message, etc.)
    * main.js: Front-end; The client; Sends information to the server (ie. send to server to notify when a user joins, leaves, sends a message, etc.)  

## Features: 
* users can write a message and submit it
* users may not submit an empty message 
* users' messages can not be more than 128 characters
* users can see messages from most to least recent
* users on different computers can post on the same board and see each other's messages 

#### Additional: 
* Users can input a username  
* The message shows the user and the time stamp 
* List of users on the side bar 
* Users can enter and leave the chat room 



## How to run: 
* Download/Set Up Node.js: https://nodejs.org/en 

* Clone the project into you're desired code editor (ex. VS Code) 

* In code editor, open the project. Then, open the terminal (make sure in the terminal, the path to where the project is) 

* Run in terminal: 

    `npm install` 

    `npm run dev`

* To run it so that you can message with people on different computers:
   * Run: http://ip:2000 on your browser
      * ip you should put the ip address of your wifi (ex. http://10.110.197.89:2000)
     
* To run locally without getting messages from people on different computers: 
   * Run http://localhost:2000 on your browser

