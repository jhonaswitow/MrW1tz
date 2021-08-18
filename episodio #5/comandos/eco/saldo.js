const db = require("quick.db")

module.exports = {
  name: "saldo",
  
  async run (client, message, args) {
    let valor = db.get(`user.${message.guild.id}.${message.author.id}`)
    let t = valor === null
? 0
: valor

  message.channel.send(`${message.author.username} tem ${t} de coins!`)
  }
}
