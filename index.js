const { Bot, GrammyError, HttpError } = require("grammy");
const { autoQuote } = require("@roziscoding/grammy-autoquote");
const fs = require("fs");
const path = require("path");
const { NlpManager } = require("node-nlp");

if (fs.existsSync(".env")) {
  require("dotenv").config();
}

const botToken = process.env.BOT_TOKEN;
if (!botToken) {
  throw new Error("BOT_TOKEN is not set in environment variables! Exiting...");
}

// Create an instance of NlpManager
const nlpManager = new NlpManager({ languages: ["en"] });

// Define intents and their training phrases
nlpManager.addDocument("en", "What is your name?", "bot.name");
nlpManager.addDocument("en", "Who created you?", "bot.creator");
nlpManager.addDocument("en", "What is the weather like today?", "weather.today");
nlpManager.addDocument("en", "Tell me a joke", "bot.joke");

// Train the NLP manager
async function trainNlpManager() {
  await nlpManager.train();
}

trainNlpManager().then(() => {
  startBot();
});

function startBot() {
  const bot = new Bot(botToken);
  bot.use(autoQuote);

  const commandFilesDir = path.resolve(__dirname, "commands");
  const commandFiles = fs
    .readdirSync(commandFilesDir)
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const command = require(path.join(commandFilesDir, file));
    bot.command(command.name, async (ctx) => {
      await command.handler(ctx);
    });

    if (command.alias) {
      for (const alias of command.alias) {
        bot.command(alias, async (ctx) => {
          await command.handler(ctx);
        });
      }
    }
  }

  bot.command("start", (ctx) =>
    ctx.reply("Hello!\n\n" + "Run the /help command to see what I can do!")
  );

  // Handle incoming messages
  bot.on("text", async (ctx) => {
    const { text } = ctx.message;
    
    // Use the NLP manager to recognize intents
    const response = await nlpManager.process("en", text);

    // Check the recognized intent and respond accordingly
    switch (response.intent) {
      case "bot.name":
        ctx.reply("My name is Telegram Bot!");
        break;
      case "bot.creator":
        ctx.reply("I was created by a developer.");
        break;
      case "weather.today":
        // Implement weather fetching logic here
        ctx.reply("I don't know the weather right now.");
        break;
      case "bot.joke":
        // Implement joke retrieval logic here
        ctx.reply("Why did the chicken cross the road? To get to the other side!");
        break;
      default:
        // Handle unrecognized intent
        ctx.reply("I'm not sure how to respond to that.");
    }
  });

  bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
    if (e instanceof GrammyError) {
      console.error("Error in request:", e.description);
    } else if (e instanceof HttpError) {
      console.error("Could not contact Telegram:", e);
    } else {
      console.error("Unknown error:", e);
    }
  });

  process.on("uncaughtException", (err) => {
    console.error(err);
  });

  process.on("unhandledRejection", (err) => {
    console.error(err);
  });

  process.on("SIGINT", () => {
    console.log("Stopping...");
    bot.stop();
    process.exit(0);
  });

  console.log("Starting the bot...");
  bot.start();
}
