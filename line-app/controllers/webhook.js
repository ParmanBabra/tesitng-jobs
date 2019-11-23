const line = require("@line/bot-sdk");
const dialogflow = require("dialogflow");
const uuid = require("uuid");
const _ = require("lodash");
const menu = require("./menu").menu;
const Product = require("./../models/product");
const mapProduct = require("./map-product-item").mapProduct;
const mapProductDetail = require("./map-product-detail").mapProductDetail;

const config = {
  channelAccessToken:
    process.env.CHANNEL_ACCESS_TOKEN ||
    "C8gCQKrTL/YU/XG40+n14Qg1MKDOz0zVMtkdcGNznx5TVF604OUlaT2fpXYTLmNEWKbwiQX/5xlzE4Z7KDzJ81+ioAdM/TxhpuN00lhF8O1sbChG83VmU/NAHPfCg22AyH+SbGBPKLD7XIt0+DgaSwdB04t89/1O/w1cDnyilFU=",
  channelSecret:
    process.env.CHANNEL_SECRET || "e50a82220e2f7f86539af6d2356ecaaa"
};
const projectId = process.env.GOOGLE_PROJECT_ID || "testing-docker-244616";

const client = new line.Client(config);
menu(client);

let datas = {};

const sendDialogflow = async (event, req) => {
  const { userId } = event.source;
  const {
    message: { text }
  } = event;

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.sessionPath(projectId, userId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: text,
        languageCode: "th-TH"
      }
    }
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  let messages = result.fulfillmentMessages;
  let lineMessage = _.find(messages, message => message.platform == "LINE");

  switch (result.action) {
    case "AskListing.AskListing":
      let notebookType = result.parameters.fields["Notebook-Type"];
      datas[userId] = {
        ...datas[userId],
        ...{ notebookType: notebookType.stringValue }
      };
      break;
    case "AskListing.AskListing.Select-Type":
      let price = result.parameters.fields["number"];
      let priceRange = result.parameters.fields["Price-Range"];
      datas[userId] = {
        ...datas[userId],
        ...{
          price: price.numberValue,
          priceRange: priceRange.stringValue
        }
      };

      return handleListProduct(datas[userId], req);
  }

  if (result.intent) {
    if (lineMessage) {
      return JSON.parse(lineMessage.text.text[0])["line"];
    } else {
      return {
        type: "text",
        text: result.fulfillmentText
      };
    }
  } else {
    console.log(`  No intent matched.`);
  }
};

const handleListProduct = async (args, req) => {
  let query = { type: { $all: [args.notebookType] } };
  query.price = {};
  if (args.priceRange == "มากกว่า") {
    query.price.$gte = args.price;
  } else {
    query.price.$lte = args.price;
  }

  let results = await Product.find(query);

  if (results.length == 0) {
    return {
      type: "text",
      text: "ไม่พบรายการค่ะ"
    };
  }

  let contents = results.map(item => mapProduct(item, req));
  return {
    type: "flex",
    altText: "list of products",
    contents: {
      type: "carousel",
      contents: contents
    }
  };
};

const parsePostbackData = data => {
  let props = data.split("&");
  let result = {};
  props.forEach(prop => {
    let [name, value] = prop.split("=");
    result[name] = value;
  });
  return result;
};

const handleLineEvent = async (event, req) => {
  console.log(event);

  switch (event.type) {
    case "message":
      let message = await sendDialogflow(event, req);
      return client.replyMessage(event.replyToken, message);
    case "postback":
      let data = parsePostbackData(event.postback.data);
      switch (data.action) {
        case "detail":
          let product = await Product.findById(data.itemid);
          return client.replyMessage(
            event.replyToken,
            mapProductDetail(product, req)
          );
          break;
        case "addCart":
          return client.replyMessage(event.replyToken, {
            type: "text",
            text: "เพิ่มรายการเรียบร้อยแล้วค่ะ"
          });
          break;
      }
    default:
      break;
  }
};

module.exports.middleware = () => line.middleware(config);
module.exports.handleLineEvent = handleLineEvent;
