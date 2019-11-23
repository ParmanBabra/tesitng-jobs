module.exports.mapProductDetail = (item, request) => {
  return {
    type: "flex",
    altText: item.name,
    contents: {
      type: "bubble",
      hero: {
        type: "image",
        url: `https://${request.headers.host}/${item.image}`,
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover"
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: item.name,
            size: "xl",
            weight: "bold",
            wrap: true
          },
          {
            type: "box",
            layout: "baseline",
            margin: "md",
            contents: [
              {
                type: "text",
                text: item.price.toLocaleString(undefined, {
                  minimumFractionDigits: 2
                }),
                flex: 0,
                margin: "md",
                size: "sm",
                color: "#999999"
              }
            ]
          },
          {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            margin: "lg",
            contents: item.description.map(desc => {
              return {
                type: "box",
                layout: "baseline",
                spacing: "sm",
                contents: [
                  {
                    type: "icon",
                    url: `https://${request.headers.host}/images/bullet.png`
                  },
                  {
                    type: "text",
                    text: desc,
                    size: "sm",
                    align: "start",
                    color: "#000000",
                    wrap: true
                  }
                ]
              };
            })
          }
        ]
      },
      footer: {
        type: "box",
        layout: "vertical",
        flex: 0,
        spacing: "sm",
        contents: [
          {
            type: "button",
            action: {
              type: "postback",
              label: "Add to Cart",
              data: `action=addCart&itemid=${item._id}`
            },
            height: "sm",
            style: "link"
          },
          {
            type: "spacer",
            size: "sm"
          }
        ]
      }
    }
  };
};
