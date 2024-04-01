var xmpp = require('simple-xmpp')

var prompt = require('prompt-sync')({signit: true})

var username =  prompt('Username: ')
var password =  prompt('Password: ')

var online = false;


// handle connect 
xmpp.on("online", (data) => {
  online = true
  console.log('User Online')
  console.log(`Connected User: ${username} with id ${data.jid.user}`);
  sendMsg()
})

// handle messge recivie 
xmpp.on('chat', (from, message) => {
  console.log(`➡️  ${from}: ${message}`)
})

xmpp.on('error', (err) => {
  console.error('⚠️  Error', err);
})


xmpp.on('subscribe', (from) => {
  xmpp.acceptSubscription(from)
})

xmpp.connect({
  'jid': username,
  'password': password,
  'host': 'localhost',
  'port': 5222
})


console.log('Connecting ' + username + ' to xmpp server')
// xmpp.subscribe('admin@localhost')
// xmpp.getRoster();

// exit = false
// while (!exit){
//
//   if(online) {
function sendMsg() {
   var to = prompt('To : ')
   var message = prompt('Write Message : ')

   xmpp.send(to, message)

  setTimeout(sendMsg, 1000);
  
}
//   }
//
// }




