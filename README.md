# Cypress.io - End to End Testing Framework Demo Project
---
![Cypress Demo Project](demo/Execution_Demo.gif)

Exploring the key features of <a href="https://www.cypress.io/">Cypress.io</a>, a different test automation tool with few use cases.

![Cypress Logo](/demo/cypress-logo.png)
## Why cypress is *different*?
1. It’s a **JavaScript-only** tool. This is very natural for frontend developers, as frontend developers write only in JavaScript.
2. **Fast** - The test code itself runs in the browser, just like the app code itself. Once the test code runs in the browser, it can do automation things — like clicking, finding elements etc— much faster than if they run out of the process of the browser.
3. **All in One Tool** - No need to install different tools and libraries.
4. This tool is **Chrome-only**.

## Steps to use this project:
1. **Installation Prerequisite**: Supports from Node.js 8. For more details, please refer <a href="https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements"> here!</a>
2. Download/Clone this repo
3. **npm install**: Install dependencies by running this command in terminal (from inside your app directory where package.json is located)
>  It might take a little while for this installation to complete, because besides the Cypress code, it’s also downloading a special version of Chrome that it will use to run the app and the tests.
4. **npm run cypress**: Similarly, to execute the tests with Cypress Test Runner UI
> Cypress Test Runner- An interactive runner that allows you to see commands as they execute while also viewing the application under test
5. **npm run test_local**: To execute the tests in CLI which execute the test cases in headless mode 
> Note: Execution results will be saved in video format under project's video folder
6. **npm run test_cloud**: To view the test results in cloud using <a href="https://dashboard.cypress.io/">Cypress Dashboard</a>
> Note: Before executing this final command, refer this given <a href="https://docs.cypress.io/faq/questions/dashboard-faq.html#How-do-I-record-my-tests"> steps </a> to get your project id and record key which need to be updated in cypress.json & package.json accordingly.

## About this Demo Project:
1. Designed a test suite with **Page object Design Pattern(POM)**
2. Configured to execute the test suite in both interactive/non-interactively.

## Usecases: 
![Piggy Logo](/demo/piggy_logo.gif)

Website under exploration: <a href="https://www.joinpiggy.com/">Piggy! Save Money with Automatic Free Coupon Apps</a>
1. Verify the key elements(Logo, Header, Title, Navigation Menu Items, Add to Chrome Buttons ) are visible in the Home Page 
2. Verify the certain buttons opens the pages in a new tab
3. Verify User Registration Process from UI
4. Verify Login functionality with service request(POST)

## Test Execution Report:
Here is the <a href="https://dashboard.cypress.io/projects/6i1fuw/runs/1/test-results">**Detailed Test Execution Report of these use cases from Cypress Dashboard Service**</a>

Note: The execution is really fast, takes only a few seconds for its execution. The generated report will be stored in cloud using their <a href="https://docs.cypress.io/faq/questions/dashboard-faq.html#article">robust test management service-Dashboard</a>.
![Execution Report](/demo/Execution_Result.png)