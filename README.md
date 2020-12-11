# Unit 18 PWA Homework: Online/Offline Budget Trackers

https://aqueous-shelf-87294.herokuapp.com/

  ## Description

  This online/offline web application allows users to easily track their spending whether or not they're connected to the internet. Use of a service worker allows this application to run offline, and the functionality was generated using JavaScript, api routing, HTML, CSS, and a webmanifest. MONGODB and Mongoose maintain the online/offline database, and this application can be run in the command line using Node.js and Express.js

  # Table of Contents
  *  Installation 
  *  Contributing 
  *  Tests 
  *  Usage 
  *  Questions 

  ## Installation:
  git clone -> npm install -> node server.js in local directory
  MongoDB must be installed on local machine

  or visit deployed application
  https://aqueous-shelf-87294.herokuapp.com/

  ## License:
  MIT
  ![badge](https://img.shields.io/badge/license-MIT-green) 
  

  ## Usage: 
  ONLINE USAGE: user can track deposits and transactions which are cached to a database through Mongoose & MongoDB

  OFFLINE USAGE: user can track deposits and transactions cached to IndexedDB 
  
  Spending is shown in a dynamic graph. If a user goes offline, then reutrns online, IndexedDB empties and populates a database through MongoDB. 

  ## Questions: 
  If you have any questions, you can contact the creator of this repo here: [juliettegondon@github.com](mailto:juliettegondon@github.com)
  GitHub: https://github.com/juliettegondon

  - - - 
  GIVEN a user is on Budget App without an internet connection
  WHEN the user inputs a withdrawal or deposit
  THEN that will be shown on the page, and added to their transaction history when their connection is back online.

  - - -
