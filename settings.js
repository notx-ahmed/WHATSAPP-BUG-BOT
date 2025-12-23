const fs = require('fs')
//~~~~~~~~~SETTING BOT~~~~~~~~~~//
global.owner = "923307970199"
global.nama = "GupongShop Available"
global.ch = 'https://whatsapp.com/channel/0029Vb5faX5ADTOILyh8B83A'
global.status = true
global.namaowner = 'GupongShop Available'
//====== [ THEME URL & URL ] ========//
global.thumb = "https://files.catbox.moe/j73igy.jpg"
global.thumbnail = 'https://files.catbox.moe/j73igy.jpg'
global.Url = '-'
global.mess = {
    owner: "no, this is for owners only",
    group: "this is for groups only",
    private: "this is specifically for private chat", 
    premium: "ᴏɴʟʏ ᴘʀᴇᴍɪᴜᴍ!!!!", 
    responbug: "succes send bug kepada target mohon jeda agar tidak kenon", 
    special: "ᴏɴʟʏ ᴍᴜʀʙᴜɢs sᴘᴇᴄɪᴀʟ!!"
}

global.packname = 'DEWA INVICTUS'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
