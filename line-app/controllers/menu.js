var fs = require("fs");

module.exports.menu = async client => {
  const richmenu = {
    size: {
      width: 2500,
      height: 1686
    },
    selected: true,
    name: "Menu",
    chatBarText: "ตัวเลือก",
    areas: [
      {
        bounds: {
          x: 0,
          y: 0,
          width: 1249,
          height: 842
        },
        action: {
          type: "message",
          text: "ขอเบอร์โทร"
        }
      },
      {
        bounds: {
          x: 4,
          y: 843,
          width: 1246,
          height: 843
        },
        action: {
          type: "message",
          text: "ขอตำแหน่งที่อยู่"
        }
      },
      {
        bounds: {
          x: 1246,
          y: 839,
          width: 1254,
          height: 847
        },
        action: {
          type: "message",
          text: "ขออีเมล"
        }
      },
      {
        bounds: {
          x: 1250,
          y: 0,
          width: 1250,
          height: 843
        },
        action: {
          type: "message",
          text: "ต้องการดูรายการสินค้า"
        }
      }
    ]
  };

  let menus = await client.getRichMenuList();
  for (const menu of menus) {
    console.log(`delete : ${menu.richMenuId}`);
    await client.deleteRichMenu(menu.richMenuId);
  }

  console.log("create rich menu....");
  let richMenuId = await client.createRichMenu(richmenu);

  console.log("create rich menu image....");
  await client.setRichMenuImage(
    richMenuId,
    fs.createReadStream("./public/images/line-menu.png")
  );

  console.log(`set rich menuID: ${richMenuId}`);
  await client.setDefaultRichMenu(richMenuId);

  return richMenuId;
};
