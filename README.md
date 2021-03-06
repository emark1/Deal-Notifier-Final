# Deal-Notifier


<img src="https://i.imgur.com/sCKcGiD.png"> 


<h2>Live link:</h2> https://elated-sammet-4cad17.netlify.com/

<h4>**NOTE: Due to the limitations of Twilio trial accounts, texts can only be sent to new phone numbers if they have been verified by the account holder. Therefore, testing this software with your phone number is not possible unless you add your own Twilio account to the code. If you want to test it with your own Twilio account, you need to change the "FROM" phone number in the server code, as well as the accountSID and authToken numbers (also in the server code).</h3>

This web application accepts a phone number from the user along with a series of preferences for items the user is interested in purchasing. The phone number, along with the item preferences, are stored in a Postgres database. The server will ping the subreddit Build a PC Sales periodically. If a new thread is posted that matches the user's preferences, a text message will be sent to the user with information and a link to the deal. 

<img src="https://i.imgur.com/2VopPwz.png">

After entering your phone number and preferences, you can check for deals immediately by pressing the "Test" button. You can also delete your information from the database by entering your phone number and pressing the delete button. 

The project is built using ReactJS, Sequelize, Express, and Javascript. 

To-Do/Bugs: 
1. Prevent duplicate phone numbers from being added to the system.
2. If the browser is left open with a phone number in the system with preferences after submitting once, the page is somehow occasionally re-submitting two entries into the database, one with the original preferences and one with all "false" preferences
