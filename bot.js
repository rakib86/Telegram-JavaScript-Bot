const TelegramBot = require('node-telegram-bot-api');
const natural = require('natural');

// Initialize the Telegram bot with your bot token
const token = '6678036571:AAGwBYC6nvpclxNqewVJJh2kTZvfqfwJSE8';
const bot = new TelegramBot(token, { polling: true });

// Initialize the NLP classifier
const classifier = new natural.BayesClassifier();

// Train the classifier with sample data
classifier.addDocument('Hello', 'greeting');
classifier.addDocument('How are you?', 'greeting');
classifier.train();

// Event handler for incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Use the NLP classifier to determine the intent of the user's message
  const intent = classifier.classify(text);

  // Respond based on the intent
  if (intent === 'greeting') {
    bot.sendMessage(chatId, 'Hello! How can I help you?');
  } else {
    bot.sendMessage(chatId, "I'm sorry, I don't understand.");
  }
});
