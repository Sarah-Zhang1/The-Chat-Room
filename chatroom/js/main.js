const chatForm = document.getElementById('chat-form'); 
const socket = io(); 
const chatMessages = document.querySelector ('.chat-messages');
const userList = document.getElementById ('users');


//Get username and room from URL 
const {username} = Qs.parse(location.search, { 
    ignoreQueryPrefix:true
}); 
 
// Join chatroom 
socket.emit ('joinRoom', {username})

//Get users 
socket.on('allUsers', ({users}) => {
    outputUsers(users); 
});

//Message from server
socket.on ('message', message => {
    console.log(message);
    outputMsg(message);

    //scroll  
    chatMessages.scrollTop = chatMessages.scrollHeight;

});


// message submission 
chatForm.addEventListener ('submit', e => { 
    e.preventDefault(); 

    // Gets the message from the text box
    const msg = e.target.elements.msg.value; 
    
    
    // Sends message to server 
    socket.emit('chatMessage', msg);

    
     
    //clears input after message is sent 
    e.target.elements.msg.value = ''; 
    e.target.elements.msg.focus(); 
});

//Outputs message to interface 
function outputMsg (message){ 
    const div = document.createElement('div'); 
    div.classList.add('message'); 
    div.innerHTML = `<p class="meta">${message.name} <span>${message.time}</span></p>
    <p class="text">
        ${message.txt}
    </p>`; 
    document.querySelector('.chat-messages').appendChild(div); 
}

// outputs list of users 
function outputUsers (u){ 
    userList.innerHTML = `${u.map (user => `<li>${user.name}</li>`).join('')}`;
}