const db = require("quick.db")
const ms = require("pretty-ms")
const Discord = require("discord.js")

module.exports = {
  name: "daily",
  
  async run (client, message, args) {
    let cooldown = 4.32e+7
    let puxe = db.get(`user.cooldown.${message.guild.id}.${message.author.id}`) || 0
    
    if(puxe.daily !== null && cooldown - (Date.now() - puxe.daily) > 0) {
      return message.channel.send(`Espere ${ms(cooldown - (Date.now() - puxe.daily))}`)
    }
    
    let saldo = db.get(`user.${message.guild.id}.${message.author.id}`)
    let t = saldo === null
? 0
: saldo //ternario

 let valor = Math.floor(Math.random() * 4000) //aqui ele ira pegar de 1-4000!
 
 db.add(`user.${message.guild.id}.${message.author.id}`, valor) //Caso queira economia global, tire o message.guild.id!
 db.set(`user.cooldown.${message.guild.id}.${message.author.id}`, { daily: Date.now()})
   
    const embed = new Discord.MessageEmbed()
    .setTitle(`Diario!`)
    .setColor("RED") //código href, ou cor em inglês... red === vermelho
    .setDescription(`Parabens ${message.author}! Você pegou seu daily de ${valor} coins!`)
    
    message.channel.send(embed)

  }
}
