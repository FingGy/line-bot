function createStyledLcFlex(mcNumber) {
  const [left, right] = mcNumber.split('/');

  return {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "🚨 Request L/C Support",
          weight: "bold",
          size: "lg",
          color: "#FF0000"
        },
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "text",
              text: "MC no.",
              size: "xl",
              flex: 0
            },
            {
              type: "text",
              text: left,
              size: "xl",
              flex: 0,
              margin: "sm",
              color: "#000078",
              weight: "bold"
            },
            {
              type: "text",
              text: "/",
              size: "xl",
              flex: 0,
              margin: "sm",
              weight: "bold"
            },
            {
              type: "text",
              text: right,
              size: "xl",
              flex: 0,
              margin: "sm",
              color: "#0096E6",
              weight: "bold"
            }
          ],
          margin: "md"
        }
      ]
    },
    footer: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "1 Minutes",
            "size": "xl",
            "color": "#FFFFFF",
            "style": "normal",
            "align": "center",
            "gravity": "center",
          }
        ],
        "backgroundColor": "#5f78be",
        "borderWidth": "normal",
        "cornerRadius": "md",
        "action": {
          "type": "message",
          "label": "1 Minutes",
          "text": `MC no. ${mcNumber} \n1 minutes to destination`
        },
        "paddingAll": "lg"
      },
        {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "5 Minutes",
            "size": "xl",
            "color": "#FFFFFF",
            "style": "normal",
            "align": "center",
            "gravity": "center",
          }
        ],
        "backgroundColor": "#5f78be",
        "borderWidth": "normal",
        "cornerRadius": "md",
        "action": {
          "type": "message",
          "label": "5 Minutes",
          "text": `MC no. ${mcNumber} \n5 minutes to destination`
        },
        "paddingAll": "lg"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "10 Minutes",
            "size": "xl",
            "color": "#FFFFFF",
            "style": "normal",
            "align": "center",
            "gravity": "center",
          }
        ],
        "backgroundColor": "#5f78be",
        "borderWidth": "normal",
        "cornerRadius": "md",
        "action": {
          "type": "message",
          "label": "10 Minutes",
          "text": `MC no. ${mcNumber} \n10 minutes to destination`
        },
        "paddingAll": "lg"
      }
      ]
    }
  };
}

module.exports = {
  createStyledLcFlex
};