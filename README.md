# Mutation testing with Stryker-Mutator

[![Node.js CI](https://github.com/JoranManoel/mutation-test/actions/workflows/node.js.yml/badge.svg)](https://github.com/JoranManoel/mutation-test/actions/workflows/node.js.yml)
[![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FJoranManoel%2Fmutation-test%2Fmain)](https://dashboard.stryker-mutator.io/reports/github.com/JoranManoel/mutation-test/main)


### Description
This project verifies users older enough to get driver's licence and through unit test runs a mutation test from it. Testing the test !

### Requirements
NodeJs and Git is required to run. 
Install Node and git before continue.
We're using jest test runner.

### Install
Clone the project from GitHub:
~~~
git clone https://github.com/JoranManoel/mutation-test.git
~~~

Install with npm:
~~~
npm install
~~~

Install Sryker:
~~~
npm i -g stryker-cli
~~~

~~~
stryker init
~~~

Choose the following options in the questionnaire:

```
? Do you want to install Stryker locally?: 
npm
? Are you using one of these frameworks? Then select a preset configuration. 
None/other
? Which test runner do you want to use? 
jest
? Which package manager do you want to use?
npm
? Which reporter(s) do you want to use? 
html, clear-text, progress
Note: Use spacebar for multiple selection or choose html and press enter
? What kind of code do you want to mutate?
javascript
? [optional] What kind transformations should be applied to your code?
(Press to select, to toggle all, to invert selection)
```

### Config

Add the source file to generate your mutants, in this case './cnh.js'. 
Adding to ***stryker.conf.js*** file ==> mutate: ["./cnh.js"]

```
module.exports = function(config) {
  config.set({
    mutate: ["./cnh.js"],
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off"
  });
};
```
### Let's kill some mutants

Try run unit test. You will notice the test has run and passed.
~~~
npm run coverage
~~~
Now see if our unit test could be better
~~~
stryker run
~~~

This will generate mutants for against your mutate file (./cnh.js), and will run your tests in test.js and see if the mutants are killed. It will also provide a report using clear text reporter showing percentage of code covered. It also provides suggestions on which mutants need more code coverage.
Open unit test file (./test.js) make new tests and run angain and see if the mutants are killed.

### Video 

This is a link for a better understanding
[click here to watch the video](https://drive.google.com/file/d/1tvEk7weoDptfU95FFWEWlzeMtjtAXbCC/view?usp=sharing)
