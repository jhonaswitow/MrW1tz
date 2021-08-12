module.exports = {
  name: "say",
  
  async run (client, message, args) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Você não tem Permissão de gerenciar mensagens`) // ! = false
if(!args[0]) return message.channel.send(`Você precisa falar algo 😤`)
     
     message.delete()
     message.channel.send(`${args.join(" ")}\n\n🐤 Mensagem enviada por: ${message.author}`)
  }
}
