 var socket = io();
            
socket.on('connect', function() {
    console.log('connected to server');
    
    socket.emit('createMessage',{
        from: 'prateek',
        text:'yup,that works for me'
    });
});
            
socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newEmail',function(){
    console.log('new email');
});

socket.on('newMessage',function(message){
    console.log('newMessage',message);
});