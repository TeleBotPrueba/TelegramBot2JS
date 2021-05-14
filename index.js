/***** Respondiendo con imagenes *****/
const app = require('express')();
const telegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const download = require('download-file');
const { brotliCompressSync } = require('zlib');
app.listen(3000);
app.get("/", (req,res)=>{
    res.send("Hello world")
}) 
const key ='1768624602:AAESaxu0OrC02VJKc7av8X1zti07x62OwIs';
const bot = new telegramBot(key,{polling:true})

bot.on('text',(msg)=>{
    
   let text = msg.text.toLocaleLowerCase();
   const existe = fs.existsSync(`./img/${text}.jpg`);
   if(text === 'hola'){
       bot.sendMessage(msg.from.id,"Hola humano");
   } if(existe){
       bot.sendPhoto(msg.from.id,`./img/${text}.jpg`,{caption: `Aqui tienes tu foto de una ${text}`});
    } 

})


/* El usuario envia imagen y la guarda */
bot.on('photo',(msg)=>{
    downloadImg(bot,msg);
})

async function downloadImg(bot,msg){
    const id = msg.photo[msg.photo.length -1].file_id;
    const file =await bot.getFile(id);
    const path = file.file_path;

    const url = `https://api.telegram.org/file/bot${key}/${path}`;
    const options = {
        directory: './img/',
        filename: 'nueva.jpg'
    }

    await download(url,options);
}