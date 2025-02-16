# Week 6 Task

1. According to your understanding; explain what's the difference between `fs.readFile` and `fs.readFileSync` methods?
	- `fs.readFile` is an asynchronous method unlike `fs.readFileSync`, an asynchronous operation is executed after all synchronous operations and there will not be other asynchronous operation will be executed until the current (asynchronous) is finished but the synchronous will the execution of other operation unless it is executed.
	- `fs.readFileSync` returns the content of the file directly.
	- `fs.readFile` takes a callback function as an argument which it will be executed directly after the reading operation is completed.
	- for error handling:
		- `fs.readFile`, error is passed as an argument to the callback function and you can check if it exists.
		- `fs.readFileSync`, error is thrown as exception, and it can be caught with try-catch.
2. Explain with examples the difference between installing a package as a normal dependency vs. as a development dependency with `npm`.
	- When a package is installed as a dependency, it means that the project "depends" on it and the package must be built in the production, otherwise the project will be broken.
	- When a package is installed as dev-dependency, it means that the project does not depend on it directly but the development process does.
	- An example of a dependency package: a library for interacting with a SQL or NoSQL database like Mongoose.
	- An example of a dev-dependency package: a library for testing, or debugging.
3. What is the purpose of the `node_modules` folder, and why should it typically be excluded from version control systems like Git?
	- It includes all the dependencies and dev-dependencies the project requires.
	- There may be multiple reasons why it should be excluded:
		1. Different OS requires different files for the packages (i.e. you can't use the same folder for MAC and Windows for example).
		2. The modules can be installed instantly with the command `npm install`.
4. Break through this `package.json` file and explain its contents.
```javascript
 {
	// The name of the package
    "name": "url-shortener-app",
    // The version of the package
    "version": "0.0.0", 
    // When set to true, npm will block the publication of the package
    "private": true, 
    // shortcuts to run in the cli with: node `script`
    "scripts": { 
        "start": "node ./bin/www",
        "start:dev": "nodemon ./bin/www"
    },
    // The package dependencies
    "dependencies": {
        "cookie-parser": "~1.4.4",
        "debug": "~2.6.9",
        "dotenv": "^16.4.4",
        "ejs": "^3.1.9",
        "express": "^4.18.2",
        "http-errors": "~1.6.3",
        "mongodb": "^6.3.0",
        "mongoose": "^8.1.3",
        "morgan": "~1.9.1",
        "shortid": "^2.2.16",
        "valid-url": "^1.0.9"
    },
    // The package devDependecies
    "devDependencies": {
        "nodemon": "^3.0.1"
    }
}
```
5. Create a Node.js CLI application that uses GitHub API to get the repositories of a single user:
	- [Link](https://github.com/ahmedxgouda/IEEE-2025-Season-Tasks---Node.js/tree/main/Beginner/Week%206/GitHub%20API)
6. Implement a cloud calculator using the HTTP module:
	- [Link](https://github.com/ahmedxgouda/IEEE-2025-Season-Tasks---Node.js/tree/main/Beginner/Week%206/Cloud%20Calculator)
7. Create a CLI file search application using Node.js. The application takes the file name and a query string as parameters, and prints the line which contains this string. If the string can't be found, the application should print `"THAT'S NOT FUNNY"`:
	- I meant not to add the test file to the `.gitignore` file :).
	- [Link]()