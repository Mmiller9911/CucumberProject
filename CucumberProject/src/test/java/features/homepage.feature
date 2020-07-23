@home @all
Feature:  Home page
	This feature covers all tests for logging into the site
	another line
	
@tcid6
Scenario:  Log in to the university site with correct password
	Given I access webdriveruniversity login portal
	And I enter "webdriver" as my username
	And I enter "webdriver123" as my password
	And I press the confirm button
	Then I should get a "validationsucceeded" alert
	
@tcid7
Scenario:  Attempt to log in to the university site with an incorrect password
	Given I access webdriveruniversity login portal
	And I enter "webdriver" as my username
	And I enter "webdriver999" as my password
	And I press the confirm button
	Then I should get a "validationfailed" alert
	
@tcid8
@dothisbefore @dothisafter
Scenario Outline:  Attempt to log in to the university site with an incorrect password
	Given I access webdriveruniversity login portal
	Given user navigates to the "http://www.webdriveruniversity.com/Login-Portal/index.html" website	
	And I enter "<username>" as my login page username 
	And I enter "<password>" as my login page password
	And I press the confirm button
	Then I should get a "<alert>" alert
	
	Examples:
	 | username  | password     | alert                 |
	 | rom       | pass         | validation failed     |
	 | webdriver | webdriver123 | validation succeeded  |


