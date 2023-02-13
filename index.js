import { ChatGPTAPIBrowser } from "chatgpt";
import * as dotenv from "dotenv";

dotenv.config();
const args = process.argv;

const opts = {
  email: process.env.OPENAI_EMAIL,
  password: process.env.OPENAI_PASSWORD,
  isProAccount: process.env.OPENAI_PRO,
};

const api = new ChatGPTAPIBrowser(opts);

if (process.env.PROXY_HOST) {
  api.proxyServer = `${process.env.PROXY_USERNAME}:${process.env.PROXY_PASSWORD}@${process.env.PROXY_HOST}:${process.env.PROXY_PORT}}`;
}
if (args.length <= 2) {
  console.log("Error: No prompt passed in.");
  console.log("");
  console.log("Usage: node index.js <prompt>");
  console.log("");
  process.exit(1);
}

await api.initSession();

const result = await api.sendMessage(args[2]);

if (result) {
  console.log(result.response);
  process.exit(0);
}
