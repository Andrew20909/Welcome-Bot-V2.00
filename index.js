const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.find(
        ch => ch.name === "welcome"
    );
    if (!channel) return;

    const joinDate = `<t:${Math.floor(member.user.createdTimestamp / 1000)}:D>`;
    const memberCount = member.guild.memberCount;

    const embed = new EmbedBuilder()
        .setColor("#3498db")
        .setTitle("🎉 New Member Joined!")
        .setDescription(`Welcome to **${member.guild.name}**, <@${member.id}>!`)
        .addFields(
            { name: "📅 Account Created", value: joinDate, inline: true },
            { name: "👥 Member Count", value: `${memberCount}`, inline: true }
        )
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setFooter({ text: "Welcome To The Den" })
        .setTimestamp();

    // Send & auto-delete after 2 minutes
    channel.send({ embeds: [embed] }).then(msg => {
        setTimeout(() => {
            msg.delete().catch(() => {});
        }, 120000);
    });
});

client.login(process.env.TOKEN);
