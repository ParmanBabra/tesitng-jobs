const line = require("@line/bot-sdk");
const Product = require("./../models/product");
const User = require("./../models/user");
const _ = require("lodash");

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET
};

const client = new line.Client(config);

const handleLineEvent = async event => {
  console.log(event);

  let echoMessage = null;

  switch (event.type) {
    case "message":
      let message = event.message;
      switch (message.type) {
        case "text":
          echoMessage = menu();
          break;
      }
      break;
    case "postback":
      let params = getPostbackData(event.postback.data);
      let userId = "U49de5592bb61704f93ebcf3cdf38b0da"; //event.source.userId;
      console.log(params);
      switch (params.action) {
        case "AddCart":
          let user = await User.findOne({ userId });
          let items = user.itemCart;
          let item = _.find(params.itemid);

          if (!item) {
            items.push(params.itemid);
            await user.update({ itemCart: items });
          }
          echoMessage = { type: "text", text: "เพิ่มเรียบร้อยแล้วค่ะ" };
          break;
        case "Detail":
          let product = await Product.findById(params.itemid);
          echoMessage = {
            type: "flex",
            altText: "products detail",
            contents: mapProductDetail(product)
          };
          break;
        case "Listing":
          let results = await Product.find({});
          let contents = results.map(mapProduct);
          echoMessage = {
            type: "flex",
            altText: "list of products",
            contents: {
              type: "carousel",
              contents: contents
            }
          };
          break;
      }

      break;
  }

  if (!echoMessage) return Promise.resolve(null);

  console.info("replay message: ");
  console.info(echoMessage);

  // use reply API
  return client.replyMessage(event.replyToken, echoMessage);
};

const getPostbackData = postback => {
  //action=AddCart&itemid=5dca621f1c9d4400007590a7
  let props = postback.split("&");
  let result = {};
  props.forEach(prop => {
    let [name, value] = prop.split("=");
    result[name] = value;
  });

  return result;
};

const mapProduct = item => {
  return {
    type: "bubble",
    hero: {
      type: "image",
      size: "full",
      aspectRatio: "1:1",
      aspectMode: "cover",
      url: item.image
    },
    body: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "text",
          text: item.name,
          wrap: true,
          weight: "bold",
          size: "xl"
        },
        {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: item.price.toLocaleString(undefined, {
                minimumFractionDigits: 2
              }),
              wrap: true,
              weight: "bold",
              size: "xl",
              flex: 0
            }
          ]
        }
      ]
    },
    footer: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "button",
          style: "primary",
          action: {
            type: "postback",
            label: "Add to Cart",
            data: `action=AddCart&itemid=${item._id}`
          }
        },
        {
          type: "button",
          action: {
            type: "postback",
            label: "Detail",
            data: `action=Detail&itemid=${item._id}`
          }
        }
      ]
    }
  };
};

const mapProductDetail = item => {
  return {
    type: "bubble",
    styles: {
      footer: {
        separator: true
      }
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "รายละเอีดสินค้า",
          weight: "bold",
          color: "#1DB446",
          size: "sm"
        },
        {
          type: "text",
          text: item.name,
          weight: "bold",
          size: "xxl",
          margin: "md"
        },
        {
          type: "text",
          text: item.price.toLocaleString(undefined, {
            minimumFractionDigits: 2
          }),
          size: "xs",
          color: "#aaaaaa",
          wrap: true
        },
        {
          type: "separator",
          margin: "xxl"
        },
        {
          type: "box",
          layout: "vertical",
          margin: "xxl",
          spacing: "sm",
          contents: item.description.map(desc => {
            return {
              type: "text",
              text: desc,
              size: "sm",
              color: "#555555",
              flex: 0
            };
          })
        }
      ]
    }
  };
};

const menu = () => {
  return {
    type: "text",
    text: "กรุณาเลือกทำการ",
    quickReply: {
      items: [
        {
          type: "action",
          action: {
            type: "postback",
            label: "Check-out",
            text: "Check-out",
            data: "action=Checkout"
          }
        },
        {
          type: "action",
          action: {
            type: "postback",
            label: "เรียกดูรายการสินค้า",
            text: "เรียกดูรายการสินค้า",
            data: "action=Listing"
          }
        }
      ]
    }
  };
};

module.exports.middleware = () => line.middleware(config);
module.exports.handleLineEvent = handleLineEvent;
