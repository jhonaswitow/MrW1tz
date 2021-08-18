module.exports = {
  name: "kick",
  
  async run (client, message, args) {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`você não tem Permissão`) //detectando se o usuário possui tal permissions
if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(`nao tenho permissão de kickar 😞`)
if(!message.mentions.users.first()) return message.channel.send(`mencione alguém`)
if(message.mentions.users.first().id === message.author.id) return message.channel.send(`Voce não pode se kickar!`)

message.channel.send(`User kickado`)
message.mentions.members.first().kick()
  }
}
