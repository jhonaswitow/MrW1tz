module.exports = {
  name: "avatar",
  aliases: ["av"],
  
  async run (client, message, args) {
    let user = message.mentions.users.first() || message.author; //puxando usuário (caso não mencione ninguem, ele ira pegar o author da mensagem)
 let avatar = user.displayAvatarURL({ dynamic: true, size: 1024 }) //pegando o avatar do usuário

 const embed = new client.discord.MessageEmbed()
 .setTitle(`Avatar bunito de ${user.username}`)
 .setColor("GREEN") //Cor em inglês ou em código href
.setDescription(`Clique [aqui](${avatar}) para fazer o download da imagem!`)
.setImage(avatar)

 message.channel.send(embed)
 
  }
}
