module.exports = {
   name: "ban",
   aliases: ["banir"],
   
   async run (client, message, args) {
     if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`você não tem Permissão`) //detectando se o usuário possui tal permissions
if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`nao tenho permissão de banir 😞`)
     
     let mention = message.mentions.users.first()
     if(!mention) return message.channel.send(`🐤 Você precisa mencionar um usuário`)
     if(mention.id === message.author.id) return message.channel.send(`Você não pode mencionar a si mesmo!`) //caso o mencionado seja o author, ele irá retornar a mensagem de erro

    message.channel.send(`User banido! `) 
    message.mentions.members.first().ban()//coloque uma mensagem melhor '-'

   }
}
