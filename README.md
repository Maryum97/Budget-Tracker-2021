<h1 style="align: center;">Workout Tracker 👋</h1>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br />
This application is covered by the MIT License.

## 🔍 Description
This repository contains the homework assignment conducted through the teaching facilities of the Univesity of Birmingham, in the third phase of the Coding Bootcamp; a web application by the name "Budget Tracker". This web application is very useful to people who wish to keep track of their spendings and earnings, so that they may handle their finances more wisely.

Users are also able to utilise this app on their device anywhere they may be, because of how accessible this app has been made as the sole purpose of this assignment - this app is a PWA (Progressive Web Application). In other words, this app enables users to enjoy its features offline, just as well as it does online.

The app allows a user to enter the name and amount of a transaction into the account on the main page. On pressing the "+ Add Funds" and "- Subtract Funds" buttons, the amount of money is added and subtracted from the user's total amount respectively. The total amount is then displayed on the top of the page, and the added/subtracted transactions are listed on the page, and represented in the form of an area graph (money earned/spent vs current date) on the same page.

This app is deployed on <b>Heroku</b> and is linked below:

The application is connected with <b>Atlas</b>, where all the entries are stored, and may be added, edited or deleted from.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Instructions](#instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [Questions](#questions)

## 💾 Installation
In order to install the app, you can simply gain access to this repository and clone it after having installed the following applications on your local device:

1. VS Code
2. Git Bash/Terminal
3. Robo3T
4. Node.js

## ⚙️ Instructions
After installing the above, run the following commands in the local terminal in VS Code:

> // to connect to MongoDB
<br></br>
> mongod

<br>

> // to install the node modules
<br></br>
> npm install

<br>

> // to run the server in the browser 
<br></br>
> node server.js

<br>

Now open the app in the browser, by searching for 'localhost:3001'. Feel free to use the app locally and enjoy!

Ypu can also open Robo3T and connect to view all entries in the 'budget' database, if you are directly using the app from Heroku.

## 💻 Usage
The app is as simple to use as explained in the description above: simply add/subtract your transactions and watch your financial activity over the course of the given time. The entries are added into the database very conveniently, when online. When offline, the page still loads and entries can still be made, but the entries from online activity are not accessible anymore. However, on coming back online, the transaction entries from online and offline activity are both accessible and visivle on the graph.

The following image shows the appearance of the page in the browser:
![Budget-Tracker-App](https://user-images.githubusercontent.com/73832871/116823017-ebc6d100-ab79-11eb-908f-c262e8346170.png)
<br>

The image below shows the audit results for this application:
![Audit](https://user-images.githubusercontent.com/73832871/116823019-ecf7fe00-ab79-11eb-9cbf-6c2bab95326a.png)
<br>

## 👪 Contributing
If you wish to contribute to my app, contact me using the details below and gain access to my Github repository with your Github account today! Create your own branch and make amendments to my code, to make improvements or for marketing purposes.

## ✏️ Tests
There were no particular test that this app has been made to pass, except for the app to flow error-free in the local terminal and in the browser, with all the correct packages and libraries installed, the Heroku app connected to the Atlas account (if running publically), and the server running at all times of use.

## 💐 Credits
I used quite a bit of help from the following sources:

1. <a href="https://web.dev/add-manifest/">How To Add A Web App - Manifest</a>
2. <a href="https://developers.google.com/web/fundamentals/primers/service-workers">Service Workers: An Introduction</a>
3. <a href="https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine">MDN Web Docs - Navigators OnLine</a>
4. Github.com
5. AskBCS Learning Assistants

## ✋ Questions
If you have any questions, feel free to contact me using the details provided below:<br />
<br />
:octocat: Find me on GitHub: [Maryum97](https://github.com/Maryum97)<br />
<br />
✉️ Email me with any questions: maryumbokhari97@gmail.com<br /><br />

_This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_
  


# Sources
1. https://web.dev/add-manifest/
2. https://developers.google.com/web/fundamentals/primers/service-workers
3. https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine