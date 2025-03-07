const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config(); 

const BOT_TOKEN = process.env.BOT_TOKEN; //Your bot token
const CHAT_ID = process.env.CHAT_ID; //Your chat id

const sendTelegramMessage = async (message) => {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    try {
        const response = await axios.post(url, {
            chat_id: CHAT_ID,
            text: message,
        });
        console.log('Message sent:', response.data);
    } catch (error) {
        console.error('Error sending message:', error);
    }
};

const time  = "* * * * *" //Every minute
cron.schedule(time, () => sendTelegramMessage("Hello this is Your name"));
