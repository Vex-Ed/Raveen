function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const Discord = require('discord.js');
const espriler = [
  "Espri eklenmedi göndermek için wwesprigönder <espri> komutunu kullanabilirsiniz"
]
exports.run = function(client, message,args) {
  const espris = espriler[Math.floor(Math.random() * espriler.length)];
  let embed = new Discord.RichEmbed()
  .setTitle(`**Espri**`)
  .setDescription('Espriyi gönderen','')
  .setColor('#BDFF00')
  .addField(espris)
  
  message.channel.send(espris)
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'espri', //adını belirledik (kullanmak için gereken komut)
  description: 'Belirtilen kişinin minecraft özellikleri.', //açıklaması
  usage: 'espri' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz