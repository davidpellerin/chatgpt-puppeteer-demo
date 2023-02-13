import { ChatGPTAPIBrowser } from "chatgpt";
import * as dotenv from "dotenv";

dotenv.config();

const api = new ChatGPTAPIBrowser({
  email: process.env.OPENAI_EMAIL,
  password: process.env.OPENAI_PASSWORD,
  isProAccount: true,
});

await api.initSession();

const result = await api.sendMessage("Hello World!");

console.log(result.response);
