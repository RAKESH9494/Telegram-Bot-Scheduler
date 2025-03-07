# Telegram Bot Scheduler

This project is a simple Node.js application that uses `node-cron` to send scheduled messages to a Telegram chat using the Telegram Bot API.

## Features
- Sends automated messages to a specified Telegram chat at scheduled intervals.
- Uses `node-cron` for scheduling.
- Uses `axios` for making HTTP requests.
- Loads environment variables from a `.env` file.

## Prerequisites
Before running this project, ensure you have:
- Node.js installed
- A Telegram bot token (get one by creating a bot via [BotFather](https://t.me/botfather))
- Your chat ID (use `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates` to find it)

## Installation

1. Clone this repository:
   ```sh
   git clone <repository_url>
   cd <project_directory>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   BOT_TOKEN=your_telegram_bot_token
   CHAT_ID=your_telegram_chat_id
   ```

## Usage

Run the application using:
```sh
node server.js
```

The bot will send a message every minute as per the cron schedule defined in `index.js`.

## Configuration
You can modify the cron schedule by changing the `time` variable in `index.js`:
```js
const time  = "* * * * *" // Runs every minute
```
