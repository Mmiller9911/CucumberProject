@stack
Feature:  Stack Overflow site
	This feature covers all tests for logging into the Stack Overflow site

	
@mrm
Scenario:  Log in to the site with the correct credentials
	Given user navigates to the "https://stackoverflow.com/" website
	And the user presses the login button on the home page
	And the user enters a valid username
	And the user enters a valid password
	When the user presses the login button
	Then the user should be taken to the successful log in page