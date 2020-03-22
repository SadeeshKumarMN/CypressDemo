# Cypress.io - End to End Testing Framework Demo Project
---

## Demo:
![Cypress Demo Project](demo/Execution_Demo.gif)

![Cypress Logo](/demo/cypress-logo.png) Exploring the key features of <a href="https://www.cypress.io/">Cypress.io</a>, a different test automation tool with few use cases.

## Why cypress is *different*?
1. It’s a **JavaScript-only** tool.This is very natural for frontend developers, as frontend developers write only in JavaScript.
2. **Fast**- The test code itself run in the browser, just like the app code itself.Once the test code runs in the browser, it can do automation things — like clicking, etc— much faster than if they run out of process of the browser.
3. **All in One **Tool&& & no need to install different tools and libraries.
4. This tool is **Chrome-only**.

## Steps to use this project:
1. Download/Clone this repo
2. Install dependencies by running the following command in terminal (from inside your app directory i.e. where package.json is located): 
npm install
3. To run the tests with Cypress Test Runner UI(an interactive mode where the test evidences can be seen in test runner itself)
npm run cypress
3. To run the tests in CLI which execute the test cases in headless mode(note:execution results will be saved in video format ):
npm run test_local
4. To view the test results in <a href="https://dashboard.cypress.io/"> Cypress Dashboard</a>
npm run test_cloud
Note: Before execute this command, refer the given <a href="https://docs.cypress.io/faq/questions/dashboard-faq.html#How-do-I-record-my-tests"> steps </a> here to get your own project id and record key which need to be updated in cypress.json & package.json accordingly.

## About this Demo Project:
1. Designed a test suite with **Page object Design Pattern(POM)**
2. Capable to execute the test suite in both interactive/non-interactive

## Usecases:
Website under exploration: <a href="https://www.joinpiggy.com/">Piggy! Save Money with Automatic Free Coupon Apps </a> ![Piggy Logo](/demo/piggy-logo.png) 
1. Verify the key elements(Logo,Header, Title, Navigation Menu Items, Add to Chrome Buttons ) in the Home Page are visible
2. Verify the certain buttons opens the pages in a new tab
3. Verify User Registration Process from UI
4. Verify Login functionality with service request(POST)

## Test Execution Report:
Here is the <a href="https://dashboard.cypress.io/projects/6i1fuw/runs/1/test-results">**Detailed Test Execution Report from Cypress Dashboard Service**</a>
Note: The execution is really fast, took only few seconds to be completed. The generated report will be stored in cloud using <a href="https://docs.cypress.io/faq/questions/dashboard-faq.html#article">Dashboard service, a robust test management</a>.
![Execution Report](/demo/Execution_Result.png)


