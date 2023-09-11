const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Replace with your Telegram Bot API token (already added to Railway environment variables)
const apiToken = process.env.TELEGRAM_API_TOKEN;

// Create a new instance of the Telegram Bot
const bot = new TelegramBot(apiToken, { polling: true });

// Handle new messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text ? msg.text.toLowerCase() : '';

  // Regular Expressions to identify user intents and include type, text, and URL
  const intents = [
    {
      regex: /^(?=.*\b(regular bus schedule)\b)|\/regular_bus/i,
      type: 'image',
      text: 'Regular Bus Schedule\nLast Updated: 8/10/23',
      url: 'https://rakibpro.com/iiucbot/Resources/Bus/Regular_Bus.jpg',
    },
    {
      regex: /^(?=.*\b(friday bus schedule)\b)|\/friday_bus/i,
      type: 'image',
      text: 'Friday Bus Schedule\nLast Updated: 8/10/23',
      url: 'https://rakibpro.com/iiucbot/Resources/Bus/Friday_Bus.jpg',
    },
    {
      regex: /bus|transport|vehicle|bus_time/,
      type: 'text',
      text: 'Here are the Transport Schedule commands:\n/regular_bus Regular Bus Schedule\n/friday_bus Friday Bus Schedule',
      groupmention: true,
    },
  ];

  // Check user intent and provide appropriate response
  let recognizedIntent = false;

  for (const intent of intents) {
    if (intent.regex.test(messageText)) {
      recognizedIntent = true;

      if (intent.type === 'text') {
        bot.sendMessage(chatId, intent.text, { parse_mode: 'HTML' });
      } else if (intent.type === 'image') {
        bot.sendPhoto(chatId, intent.url, { caption: intent.text });
      }

      break;
    }
  }

  // If no intent is recognized, the bot remains silent
  if (!recognizedIntent) {
    // Handle unrecognized intents here if needed
  }
});

// No need to set up the webhook here if the API token is added to Railway environment variables
