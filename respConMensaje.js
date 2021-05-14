/***** Respondiendo con mensajes *****/
const app = require('express')();
const telegramBot = require('node-telegram-bot-api')
app.listen(3000);
app.get("/", (req,res)=>{
    res.send("Hello world")
})

const bot = new telegramBot('1768624602:AAESaxu0OrC02VJKc7av8X1zti07x62OwIs',{polling:true})

bot.on('text',(msg)=>{

     //Condicional
    let text = msg.text.toLocaleLowerCase();
    if(text === 'hola'){
        bot.sendMessage(msg.from.id,"Hola humano");
    } else {
        bot.sendMessage(msg.from.id,"No soy humano soy un bot");
    } 

/*   Te devuelve el mensaje escrito   */
    //bot.sendMessage(msg.from.id,`Echoing: ${msg.text}`)
/*   Te regresa mensaje como una respuesta    */
    //bot.sendMessage(msg.from.id,`Echoing: ${msg.text}`,{reply_to_message_id:msg.message_id})


})