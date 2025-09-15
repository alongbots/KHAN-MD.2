const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VVXZOiOBT9L3nVGgRFwKquWkRFQFpFxI+teYgQMHybBBGn/O9T2N3T87A728tTSG7dnHvuOTc/QF5giizUgNEPUBJ8hQy1S9aUCIzAuApDREAXBJBBMAK2fnByehMZWVbcTEvC5fKShfRYI925SFznql3owl8Js2z9Ah5dUFanFPt/SDgsvYnHvzr69rg+GDOXu/fYcK94Yn8xKxtreSUWocPteb32X8CjzQgxwXk0Lc8oQwSmFmpWEJOvwRcsoi/142EilPPk1cKLgZ5WyrbpDd27S1zFly4nwZbNcrf9GnzJ6FSeaW/5+U6KB3x6mM/jeELdjnxD3EY4pilxZJGNDWH7Bp/iKEeBEaCcYdZ8mXfNjI+HA8f8M9aLcr4PjRUWZkpQiy6nF0qyt+xD2smWGW98Dfged2x+l4oZyvBqP7TX0onK88wp01neGVydO9re60SPBdX/HfiKfGgl+T+8Z9bGlwOuWsnZvJaTuS2e49uuEGeSz1ZIy5Kr4ucbdheF6Gvwl3nPMX1PVF3REYmtpav9ArtL4YI7pNC4zi5sGmxe+7vI+IQPWUX+hHKPjjkKlovjkdyFoXBfyOf7LguPuotmXmF6s8pcKLFHAo/nz4o19ofyq3F2LrUS+dcbaS7jYsB8zaS9jqmbrhcJGyuKXp4VJagxAjDiH11AUIQpI5DhIn/uDXpdAIPrBvkEsSe9ID2NdXepX0SFV/aZIEp3ZWFrV1+qw7URhJ43yaa7JkScY7yALihJ4SNKUTDHlBWksRGlMEIUjP7+3gU5urG3xrXX9fkuCDGhbJtXZVrA4KOrH4fQ94sqZ5sm97V2gQgY9T63EWM4j2jLY5VD4p/xFWlnyCgYhTCl6FeFiKAAjBip0C/XakXQEj/bqJpmSlPQBdmzITgAI6DwstTnZb7X5/mRJP1Fv9VtWliW33LEQBekzzBeFgeiICtDoa/Iw2dke/D4hbBNGCAGcUpb57zm06So9am1S3J60HXVjlQtUsFnRR/SeKM+EMLleoIOF8dfG17H6YdiuGX3htOrPMW7G18rO0zJIsb1yz8kASMwYdvNvPd64BawznbSyhyYolA5ENZjpRS482QTjXntdlrDfMw7/kneHTzWhGa02jfsdBZs5zi9x1l88aOz2RsscXUUtVZHXRCgK/bR75d5fWnL+ZPbVbW38akfhyk3nVwWXHxynfWYSkfjolhazbn1cm5ckrk5DaB6wvGRXcxku14I0lU9NLEjwNc+P7bVYRO55/WbaJ+mSd+HFX7Kqe1V+xti9PR+DtsO/nfv3oC3Eus9ur/leJ8m/+LI8T7I74naz6xkP9VmYRL0O3t+4cvXGynFQ0oDf+UVxGoGAwoej+9dUKaQhQXJwAjAPCAFDkAXkKJqNWvkYfGnGasaxvTdrimkTP30gYszRBnMSjDiJVFSeoo4GL5FrUhRziE9t6+LPbNW61bUjVqWGwbZh62A2n7j1AKPn3GNo4FyBwAA",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY KHAN-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/7zfdcq.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KHAN-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "AKUM",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "918731810311",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "AKUM",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© AKUM*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/149k8x.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *KHAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "918731810311",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
