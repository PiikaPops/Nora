const Canvas = require('canvas')
const Discord = require('discord.js')
const { MessageAttachment } = require('discord.js')

module.exports = client => {
    
    client.on('guildMemberAdd', async member => {
        const guild = await client.guilds.cache.get("906194992714899456");
        console.log("test")
        const canvas = Canvas.createCanvas(700, 300);
        const ctx = canvas.getContext(`2d`);

        const background = await Canvas.loadImage(`./image/banner.jpg`);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.font = `30px segoe ui black`;
        ctx.fillStyle = `#d5d7da`;
    
        text = `${member.user.tag}`

        ctx.fillText(text, (canvas.width /2 - ctx.measureText(text).width /2), (canvas.height / 2)+75);

        ctx.font = `30px segoe ui black`;
        ctx.fillStyle = `#d5d7da`;
    
        text = `Bienvenue sur Stilhed !`

        ctx.fillText(text, (canvas.width /2 - ctx.measureText(text).width /2), (canvas.height / 2)+105);

        ctx.save()
        ctx.beginPath();
        ctx.arc(canvas.width / 2, 100, 125/2, 0, Math.PI * 2, true);
        ctx.clip();
        ctx.stroke()
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' })) //aaaaa
        ctx.drawImage(avatar, (canvas.width / 2)-62.5, 37, 125, 125);
        ctx.restore()

        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        const border = await Canvas.loadImage(`./image/border.png`);
        ctx.drawImage(border,(canvas.width / 2)-95, 10, 125*1.5, 125*1.5);
        ctx.restore()

        ctx.font = `15px segoe ui black`;
        ctx.fillStyle = `#d5d7da`;
    
        text = `${guild.memberCount}` 

        ctx.fillText(text, (canvas.width /2 - ctx.measureText(text).width /2), (canvas.height / 2)+17);
    
        let attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome.png')
    
        const wEmbed = new Discord.MessageEmbed()
            .setTitle(`Bienvenue **${member.user.tag}** !`) 
            .setColor("#9697F1")
            .setThumbnail(guild.iconURL()) 
            .setImage('attachment://welcome.png')
            .setDescription(`\n\n● ━━━━━━━・⋅ʚ♡ɞ⋅・━━━━━━━ ●\nN'oublie pas de choisir tes rôles dans <#906199422139003010>`)
        client.channels.cache.get('906247057549967381').send({ embeds: [wEmbed],files: [attachment] });

        let role = member.guild.roles.cache.find(r => r.name === "Stilhedien");
        member.roles.add(role).catch(console.error);
    })  
}