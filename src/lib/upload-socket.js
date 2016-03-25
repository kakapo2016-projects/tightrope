import 'blueimp-file-upload'
import socket from 'socket.io-client'

let fileSize;
let socketId;

// Socket will be used to transmit the percent uploaded from server
socket.connect()
  // when the socket gives us a unique ID we will save it so that we
  // can identify the client
  .on('id', function (data) {
    socketId = data;
  })

  .on('uploadProgress', function (data){
    // you can show a progress bar with this percentage
    var pct = data.loaded / fileSize;
  });

document.getElementsByClassName('file')
    .change(function (){
        // save the file size so that we can calculate perfectage
        fileSize = this.files[0].size;
    })
    .fileupload({
        dataType: 'json',
    })
    .fileupload('option', {
        url: '/upload?socketId=' + socketId
    });
