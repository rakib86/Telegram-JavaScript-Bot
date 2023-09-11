const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config(); // Load environment variables

// Get your bot token from the environment variable
const botToken = process.env.BOT_TOKEN;

if (!botToken) {
  throw new Error("BOT_TOKEN is not set in environment variables! Exiting...");
}

const bot = new TelegramBot(botToken, { polling: true });

// Define intent words and their corresponding responses
const intents = {
  'hello': 'Hello! How can I assist you today?',
  'howareyou': "I'm just a bot, but thanks for asking!",
  'goodbye': 'Goodbye! Have a great day!',
};

// Listen for incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase(); // Convert the message to lowercase for case-insensitivity

  // Check for intent words and respond accordingly
  for (const intent in intents) {
    if (text.includes(intent)) {
      bot.sendMessage(chatId, intents[intent]);
      return; // Exit the loop once a response is sent
    }
  }

  // If no intent word is found, provide a default response
  bot.sendMessage(chatId, 'I did not understand your request. Try a different word or phrase.');
});

// Handle errors
bot.on('polling_error', (error) => {
  console.error(error);
});
