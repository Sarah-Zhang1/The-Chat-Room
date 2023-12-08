const moment = require ('moment'); 
function formatMsg (name, txt) {  
    if (txt.length>75){ 
        txt = txt.substring (0,75) + "\n" + txt.substring(75); 
    }
    return { 
        name, 
        txt, 
        time: moment().format('h:mm a')
    }
} 


module.exports = formatMsg;