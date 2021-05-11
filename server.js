const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: "ODQxMzUyMDA4ODI5MzcwMzY4.YJlgHg.Ka1HjQ5ge68-mWBGYQEXi4vrwjI", 
prefix: "!"
})


bot.command({
name: "ping", 
code: `$ping Pong!` 
})




bot.status({
 
text: "$allMembersCount members",
 
type: "WATCHING",
 
time: 12
 
})
 
bot.command({
name: "setprefix",
aliases: ['changeprefix', 'prefix'],
code: `$author[Success;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif]
$description[**Done, my new prefix is** \`$message\`]
$color[RANDOM]
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=;**You have to put a prefix, example** \`$getServerVar[prefix]setprefix /\`]
$onlyPerms[admin;$customEmoji[Rufy] **You dont have** \`ADMIN\` **perms**]`
})
 
bot.variables({
    prefix: "!",
  suggestchannel: "", 
  suggest_system: "no"
    
})

bot.command({
  name: "embed",
  code:  `$channelSendMessage[$mentionedChannels[1;yes];{description:$messageSlice[1]}{image:$messageAttachment}]`
})

bot.command({
 name: "enable-suggest",
 code: ` 
$setServerVar[suggest_system;true]
Enabled! 
$onlyPerms[manageserver;You need manage server permissions]`
 })

bot.command({
 name: "disable-suggest",
  code:  `$channelSendMessage[$mentionedChannels[1;yes];{description:$messageSlice[1]}{image:$messageAttachment}]`
})

bot.command({
 name: "enable-suggest",
 code: ` 
$setServerVar[suggest_system;true]
Enabled! 
$onlyPerms[manageserver;You need manage server permissions]`
 })

bot.command({
 name: "disable-suggest",
 code: `
$setServerVar[suggest_system;no]
Disabled!
$onlyPerms[manageserver;You need manage server permissions]`
 })

bot.command({
 name: "set-suggest-channel",
 code: `
$setServerVar[suggestchannel;$mentionedChannels[1]] 
Set suggest channel to <#$mentionedChannels[1]> 
$argsCheck[>1;Please mention a channel] 
$onlyPerms[manageserver;You need manage server permission]
$onlyIf[$getServerVar[suggest_system]==true;Suggest system is not enabled!]
`
 })

bot.command({
 name: "suggest",
 code: `$useChannel[$getServerVar[suggestchannel]]
 $title[**Suggestion!**]
 $description[
 **SUGGESTED BY
 **$username
 **Suggestion:**
 $message ]
 $color[YELLOW]
 $footer[✅ I love it / ❌ I don't like it]
 $addCmdReactions[✅]
 $addReactions[✅;❌] 
$onlyIf[$getServerVar[suggestchannel]!=;This server has no suggest channel run **<setsuggestchannel** to set one!]
$onlyIf[$getServerVar[suggest_system]==true;Suggest system is not enabled!]
 `
 });

