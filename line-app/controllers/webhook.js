const line = require("@line/bot-sdk");
const _ = require("lodash");

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET
};

const client = new line.Client(config);


const handleLineEvent = async event => {
    console.log(event);

    return client.replyMessage(event.replyToken, echoMessage)
};


module.exports.middleware = () => line.middleware(config);
module.exports.handleLineEvent = handleLineEvent;