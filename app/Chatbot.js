
"use client"
import Script from 'next/script';
import React, { useEffect } from 'react'
const Chatbot = () => {
    const initBotPress = () => {
        window.botpressWebChat.init({


      // "composerPlaceholder": "Send a message...",
      // "botConversationDescription": "This chatbot was built for Students",
      // "botId": "0282605c-da69-4c02-9c92-105422ea8630",
      // "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
      // "messagingUrl": "https://messaging.botpress.cloud",
      // "clientId": "0282605c-da69-4c02-9c92-105422ea8630",
      // "webhookId": "a2a29bf1-f73f-448c-a23d-e61ce7f4346c",
      // "lazySocket": true,
      // "themeName": "prism",
      // "frontendVersion": "v1",
      // "showPoweredBy": true,
      // "theme": "prism",
      // "themeColor": "#2563eb",
"composerPlaceholder": "Ask Me  A Question...",
      "botConversationDescription": "UTM AI Chatbot Student Motivation and Study Support",
      "botId": "225c6f58-6118-4be7-b38e-5cdd4ac4f75f",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "225c6f58-6118-4be7-b38e-5cdd4ac4f75f",
      "webhookId": "983f31f7-ef02-401d-b68f-f3c7fc879c71",
      "lazySocket": true,
      "themeName": "prism",
      "frontendVersion": "v1",
      "showPoweredBy": true,
      "theme": "prism",
      "themeColor": "#2563eb",
      "allowedOrigins": []



          })
        };
        


   return(
<Script
     src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'

     onLoad={()=>{
        initBotPress();
     }}
/>
   )
}
export default Chatbot







// "use client"
// import Script from 'next/script';
// import React, { useEffect } from 'react'
// const Chatbot = () => {
//     const initBotPress = () => {

//   window.botpressWebChat.init({
//       "composerPlaceholder": "Student Bud",
//       "botConversationDescription": "This chatbot was built for Students Seeking Emotional Support",
//       "botId": "0282605c-da69-4c02-9c92-105422ea8630",
//       "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
//       "messagingUrl": "https://messaging.botpress.cloud",
//       "clientId": "0282605c-da69-4c02-9c92-105422ea8630",
//       "webhookId": "a2a29bf1-f73f-448c-a23d-e61ce7f4346c",
//       "lazySocket": true,
//       "themeName": "prism",
//       "frontendVersion": "v1",
//       "showPoweredBy": true,
//       "theme": "prism",
//       "themeColor": "#2563eb",
//       "allowedOrigins": []
//   });
    
//    return(
// <head>
// <Script
//      src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'

//      onLoad={()=>{
//         initBotPress();
//      }}
// />
// </head>
//    )
// }}
// export default Chatbot
