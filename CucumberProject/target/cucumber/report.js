$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("stackoverflow.feature");
formatter.feature({
  "line": 2,
  "name": "Stack Overflow site",
  "description": "This feature covers all tests for logging into the Stack Overflow site",
  "id": "stack-overflow-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@stack"
    }
  ]
});
formatter.before({
  "duration": 7113945800,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Log in to the site with the correct credentials",
  "description": "",
  "id": "stack-overflow-site;log-in-to-the-site-with-the-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@mrm"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user navigates to the \"https://stackoverflow.com/\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user presses the login button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user enters a valid username",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user enters a valid password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user presses the login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the user should be taken to the successful log in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://stackoverflow.com/",
      "offset": 23
    }
  ],
  "location": "GeneralSteps.user_navigates_to_the_stackoverflow_website(String)"
});
formatter.result({
  "duration": 1782081200,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027DESKTOP\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\Matt\\AppData\\Local\\Temp\\rust_mozprofileLF2LR5, rotatable\u003dfalse, moz:geckodriverVersion\u003d0.26.0, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dWINDOWS, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d78.0.2, moz:shutdownTimeout\u003d60000, platformVersion\u003d10.0, moz:processID\u003d17864, browserName\u003dfirefox, moz:buildID\u003d20200708170202, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: cdb37574-4cb7-4ac7-ab68-b4cf1480bdfd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:310)\r\n\tat stepDefinitions.GeneralSteps.user_navigates_to_the_stackoverflow_website(GeneralSteps.java:11)\r\n\tat ✽.Given user navigates to the \"https://stackoverflow.com/\" website(stackoverflow.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StackOverflowSteps.the_user_presses_the_login_button_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StackOverflowSteps.the_user_enters_a_valid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StackOverflowSteps.the_user_enters_a_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StackOverflowSteps.the_user_presses_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StackOverflowSteps.the_user_should_be_taken_to_the_successful_log_in_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7257600,
  "status": "passed"
});
});