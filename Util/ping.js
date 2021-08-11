module.exports = {
  name: "ping",
  
  async run (client, message, args) {
    message.channel.send('Pong 🏓').then(msg => {
      setTimeout((a) => {
      msg.edit(`Lâtencia: \`${client.ws.ping}\`ms`)
      }, 5000)
    })
  }
}
