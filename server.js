const express = require('express'); 

const path = require('path');  
const http = require('http'); 
const socketio = require ('socket.io')
const formatMsg = require('./utils/msg');
const {uJoin, getCurrentUser, leave, getAllCurrentUsers}= require('./utils/users');

const app = express(); 
const server = http.createServer(app); 
const io = socketio(server); 

// Set a static folder 
app.use(express.static(path.join (__dirname, 'Chatroom'))); 

// Run when user connects 
io.on ('connection', socket => {  
    socket.on('joinRoom', ({username}) => { 
        const user = uJoin(socket.id, username)
        socket.join(); 

        // welcomes the user when they join 
        socket.emit ('message', formatMsg('Bot', 'Welcome to the Chat Room'));

        //shows when a user connects 
        socket.broadcast.emit('message',  formatMsg('Bot',`${user.name} has joined the chat`)); 
 
        //send users  
        io.emit('allUsers', {users: getAllCurrentUsers()});
        
    });

    //list for chatMessage 
    socket.on ('chatMessage', msg => { 
        const user = getCurrentUser(socket.id) 
        
        if (msg.length <129){ 
            io.emit ('message',  formatMsg(user.name, msg));
        }else{ 
            io.to(socket.id).emit ('message', formatMsg ('Bot', "Error: You're message exceed 128 characters"));
        }
        
            
    });

    //when user disconnects 
    socket.on('disconnect', () => { 
        const user = leave(socket.id); 

        if (user) { 
            io.emit(
                'message',  
                formatMsg('Bot', `${user.name} has left the chat`));
                    
            //send users  
            io.emit('allUsers', {users: getAllCurrentUsers()});
        }
 
    }); 
});

const PORT = 2000 || process.env.PORT; 

server.listen (PORT, () => console.log('Server running on port ${PORT}'));
 

