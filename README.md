# RecursionHell
Software Engineering Project Fall 2022

To run frontend <br />
cd frontend <br />
npm install <br />
npm start <br />

to run backend <br />
cd server <br />
node server.js <br />


Heroku deployment:
Since we have both front-end and back-end running in the same repo, we need to maintain multiple package.json and node modules. The top level package.json is utilized by heroku during deployment and hence needs a npm start command. This command can be used during dev to start both front-end and server simultaneously. Since there is more than one command to run, we can parallely execute these commands using run-p. To start the angular from the root directory, a prefix can be given. All the sources are mentioned below for reference:
https://stackoverflow.com/questions/47124869/deploying-a-full-stack-node-app-npm-package-json-architecture
https://itnext.io/4-solutions-to-run-multiple-node-js-or-npm-commands-simultaneously-9edaa6215a93
https://stackoverflow.com/questions/36172442/how-can-i-get-npm-start-at-a-different-directory
