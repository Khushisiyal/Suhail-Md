const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_08_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5LFxuICAgICAgICA0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDM4LFxuICAgICAgICA1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgNixcbiAgICAgICAgNjgsXG4gICAgICAgIDI3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk3LFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY0LFxuICAgICAgICA2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDksXG4gICAgICAgIDg3LFxuICAgICAgICAyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDcsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDUxLFxuICAgICAgICA4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMSxcbiAgICAgICAgODksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgODksXG4gICAgICAgIDMwLFxuICAgICAgICAxOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc4LFxuICAgICAgICA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDY5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVxSHlNdVdpZUtOcG0rcGhGTTJnNkp5cktxMFF5TU84UXcyaDJkVzJHZUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpOaWUwR0k4UWhLSnFrMFJZYXYxRUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjZiNWVhMGYtMDE0Ni00MmE1LTk2NzItMjQzODhiYzRiY2Y0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMTA5LFxuICAgICAgMTI4LFxuICAgICAgMTY0LFxuICAgICAgMjQsXG4gICAgICA0OCxcbiAgICAgIDI1MCxcbiAgICAgIDc1LFxuICAgICAgMTI4LFxuICAgICAgMTY1LFxuICAgICAgNDQsXG4gICAgICAxNTQsXG4gICAgICA3OCxcbiAgICAgIDI0NSxcbiAgICAgIDE0OSxcbiAgICAgIDEzOSxcbiAgICAgIDE2MSxcbiAgICAgIDI0NCxcbiAgICAgIDIyOSxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICAyMjcsXG4gICAgICA0NSxcbiAgICAgIDE3MixcbiAgICAgIDE0NCxcbiAgICAgIDIwNixcbiAgICAgIDg0LFxuICAgICAgMTY4LFxuICAgICAgMjM3LFxuICAgICAgMTY0LFxuICAgICAgNixcbiAgICAgIDI0NCxcbiAgICAgIDE2LFxuICAgICAgNzUsXG4gICAgICA3OSxcbiAgICAgIDcsXG4gICAgICA0MyxcbiAgICAgIDE0NyxcbiAgICAgIDYyLFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkQyUkwyNE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA5MDAwMzI5NzoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE3MzU1OTEzMzE0NDU1OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09XUzgvc0JFTnI3NUxRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib3JlMTlsaTh0L0hEaHEzL3J3eVNJMmx6UzBrQmZhTzdmV0R6R0RhU3Nncz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvSUN4ekRlN1dyY01NdGdTZXlVL1dMUUhCOXhqcXVROU4yWlF0Zm52Zk9WMGpLWjk4ZFNwcVRnMkhPZlJISDB6NTV1anoyRjdSejFqZGd4cWlVTFBBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNc2VrTE4xVmszUGZ6YkxJbkRMMzA5azM3RFRjdTBtbUU0Q3lsM1kzVVJzZjV2a0t1NjlJVnVTNG1hU1N0eXFOVURkKzBwRTFaQktIVENTeDZBbm5oUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwOTAwMDMyOTc6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzE4ODc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkZmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFORmYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrWTAvNWdRbElIU1BianFyT3dXNnBjbmlwc0dEWnFUczFLUFdLVWxncDJFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyODI3MTcxNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
