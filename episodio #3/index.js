const Discord = require("discord.js")
const client = new Discord.Client()
const { readdirSync } = require("fs")
const db = require("quick.db")
const ms = require("pretty-ms") //próximo vídeo...


//coleções
client.commands = new Discord.Collection()
client.discord = Discord


const pastinha = readdirSync("./comandos")

for (const pasta of pastinha) {
  const lerpasta = readdirSync(`./comandos/${pasta}`).filter(a => a.endsWith('.js'))
  
  for (const arquivos of lerpasta) {
    const comando = require(`./comandos/${pasta}/${arquivos}`)
    
    client.commands.set(comando.name, comando)
  }
} 

//eventos 🐤
client.on("ready", () => {
  console.log(`Bot ligado em ${client.user.username} 🐤`)
})

client.on("message", message => {
 if(message.author.bot) return; // Caso author da mensagem seja um bot, ele ignora o bot!
 if(message.channel.type === 'dm') return; //Caso a mensagem tenha sido via dm, ele ignora a mensagem via dm!
 
 const args = message.content.slice("b!".length).trim().split(/ +/); //Agora quando você usar "args", ele ira coletar a mensagem, menos o comando! (ex: args.join(" "), mensagem: oi, output: oi)
 

  
  const comandonome = args.shift().toLowerCase()
  const comando2 = client.commands.get(comandonome) || client.commands.find(c => c.aliases && c.aliases.includes(comandonome))
  
  if(!comando2) return; //aqui é pra caso ele não encontrar o comando
comando2.run(client, message, args)
})

client.login("Seu token") //vai dar erro no começo, pq o djs esta na versão v13! entao iremos mudar para a v12.5.3
