module.exports.mapProduct = (item, request) => {
  return {
    type: "bubble",
    hero: {
      type: "image",
      size: "full",
      aspectRatio: "1:1",
      aspectMode: "cover",
      url: `https://${request.headers.host}/${item.image}`
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
            data: `action=addCart&itemid=${item._id}`
          }
        },
        {
          type: "button",
          action: {
            type: "postback",
            label: "Detail",
            data: `action=detail&itemid=${item._id}`
          }
        }
      ]
    }
  };
};
