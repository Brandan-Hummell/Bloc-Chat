# README
# Quick Chat

Quick Chat is a AngularJS based chat room application. I am responsible for the coding, layout, and design of Quick Chat.

Users create an account and log in with their user name. Displayed messages will include the username to which they belong. Each user has the opportunity to create a new chat room, or use any of the existing ones.

Quick Chat uses Google Firebase as a database to store user log ins, chat rooms, and the associated messages. While I am not sure how well Firebase would scale, it worked beautifully for an application of this size, and relating the data (messages belonging to users and rooms for example) was a fairly simple process.

## Getting Started

These instructions will help you set up Quick Chat on your local machine for development and testing purposes. 

### Prerequisites & Installation

#### Pull Down the Code

Start by pulling the repository:

```
$ git add remote origin https://github.com/Brandan-Hummell/quick-chat.git
$ git pull 
$ git pull origin master
```

#### Configuration

The project uses Node to run a JS server in development.

Install the project dependencies by running:

```
$ npm install
```

#### Run the Application

Run the application server:

```
$ npm start
```

The server will start up. To stop the server, press `cntrl + c`.

## Built With

* [AngularJS](https://angularjs.org/) - JavaScript Framework
* [Node.js](https://nodejs.org/en/)   - JavaScript Runtime
* [Firebase](https://firebase.google.com/) - Data Storage & Organization

## Authors

* **Brandan Hummell** Front-End Developer & Application Designer - [GitHub](https://github.com/Brandan-Hummell)

See also the list of [contributors](https://github.com/Brandan-Hummell/bloc-chat/graphs/contributors) who participated in this project.

## Acknowledgments

* [Bloc](https://github.com/Bloc/) - Helped developer user stories and application goals
