const express = require('express');
const bodyParser = require('body-parser')

// services
const messageService = require('./message.service');

const app = express();

// body parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// socket.io
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', () =>{
  console.log('a user is connected')
})

// public
app.use(express.static(__dirname));

/**
 * Get List
 */
app.get('/messages', async(req, res) => {
  const result = await messageService.getMessagesList()
  res.json(result)
})

/**
 * Save
 */
app.post('/messages', async(req, res) => {
  const {body: dto} = req;
  await messageService.saveMessage(dto)
  
  io.emit('message', dto);
  res.status(200)
})

http.listen(3000, () => {
  console.log('server is running on port', http.address().port);
 });