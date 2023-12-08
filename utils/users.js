const users = []; 

// Joins user 
function uJoin(id, name){ 
    const user = {id, name}; 

    users.push(user); 

    return user;
}


//Gets current user 
function getCurrentUser(id){ 
    return users.find(user => user.id === id);
}

// users leave 
function leave(id) { 
    const ind = users.findIndex(user => user.id ===id); 

    if (ind !== -1) { 
        return users.splice(ind,1)[0]; 
    }
}

// get present users 
function getAllCurrentUsers(){ 
    return users
}

module.exports = { 
    uJoin,
    getCurrentUser, 
    leave, 
    getAllCurrentUsers
}