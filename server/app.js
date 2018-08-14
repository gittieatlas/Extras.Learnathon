const express = require('express');
const volleyball = require('volleyball');
require('dotenv').config();
const app = express();
module.exports = app;

app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api'));

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);

const sendMessage = async () => {
  try {
    const message = await client.messages.create({
      body: 'This is a test message using async / await',
      from: phoneNumber,
      to: '+18482993534'
    });

    console.log('Message status: ', message.status);
  } catch (error) {
    console.log(error);
  }
};
sendMessage();
