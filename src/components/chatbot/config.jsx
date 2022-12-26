import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";

const config = {
  botName: "Bienvenido",
  initialMessages: [
    createChatBotMessage(`Hola, ¿en que te puedo ayudar?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetNmame: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
