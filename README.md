# OOPandTDD

## Description
This application allows the user to generate a html page using the terminal/console. The generated page is a list of employees that the user generates by answering a set of questions in the terminal/console.

## Installation
To use this application you will need to first type `npm init` into the terminal/console to get a package.json file. Then `npm install` to get all of the npm files used in this application (jest and inquirer).

## Usage
You can make a personal html file with your employees with roles of manager, engineer, or intern. To make there are some simple steps:

1. [Enter "node app.js" in the console](#node)
2. [Follow and fill out the prompts](#prompts)
3. [Select no more employees and print](#print)
4. [In the output folder a new html will be created](#html)

## Node
Open your terminal/console and type `node app.js` to start the application.

![node-img](/images/node.PNG)

## Prompts
Follow the prompts and type the information for that specific employee.

![prompt-img](/images/terminal.PNG)

## Print
When you are finished making all of your employees you can choose the option to not make anymore. After that you will be prompted if you want to print the employees made of just quit out.

![print-img](/images/print.PNG)

## HTML
Once you ask to print your employees, if you were to check your file named `output` you will see a new `team.html` file. If you were to open that file on your browser you will see a new html with all of your employees on it.

![html-img](/images/html.PNG)

---

## Creator
* [Paul Lee](https://github.com/vb27)

## NPM Packages used
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [Jest](https://www.npmjs.com/package/jest)