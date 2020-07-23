$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contactuspage.feature");
formatter.feature({
  "line": 2,
  "name": "Contact us page",
  "description": "",
  "id": "contact-us-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@contact"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 6116208300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Submit valid data via contact us form",
  "description": "",
  "id": "contact-us-page;submit-valid-data-via-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@tcid1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I access webdriveruniversity contact us form",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter a valid firstname",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter a valid last name",
  "rows": [
    {
      "cells": [
        "woods",
        "jackson",
        "jones"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter a valid email address",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter comments",
  "rows": [
    {
      "cells": [
        "example comment one",
        "example comment two"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the information should successfully be submitted via the contact us form",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity_contact_us_form()"
});
formatter.result({
  "duration": 501338100,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_firstname()"
});
formatter.result({
  "duration": 193864699,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_last_name(DataTable)"
});
formatter.result({
  "duration": 137788601,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 171251400,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_comments1(DataTable)"
});
formatter.result({
  "duration": 159680600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_submit_button1()"
});
formatter.result({
  "duration": 15880968899,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "duration": 84642699,
  "status": "passed"
});
formatter.after({
  "duration": 1741093800,
  "status": "passed"
});
formatter.before({
  "duration": 4271941900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Submit information using the contact us form and then reset the form",
  "description": "",
  "id": "contact-us-page;submit-information-using-the-contact-us-form-and-then-reset-the-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@tcid2"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I access webdriveruniversity",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on the contact us button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter firstname",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter surname",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter email address",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter comments",
  "rows": [
    {
      "cells": [
        "example comment one",
        "example comment two"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on the reset button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the information should be removed",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity()"
});
formatter.result({
  "duration": 904252900,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_contact_us_button()"
});
formatter.result({
  "duration": 328640901,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_firstname()"
});
formatter.result({
  "duration": 107442400,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_surname()"
});
formatter.result({
  "duration": 124228100,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_email_address()"
});
formatter.result({
  "duration": 77021100,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_comments1(DataTable)"
});
formatter.result({
  "duration": 195005600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_reset_button()"
});
formatter.result({
  "duration": 246556699,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.the_information_should_be_removed()"
});
formatter.result({
  "duration": 90283801,
  "status": "passed"
});
formatter.after({
  "duration": 1761970400,
  "status": "passed"
});
formatter.before({
  "duration": 4274320799,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Submit information using the contact us form",
  "description": "",
  "id": "contact-us-page;submit-information-using-the-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@tcid3"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I access webdriveruniversity",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I click on the contact us button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter firstname",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter surname",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter email address",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter comments",
  "rows": [
    {
      "cells": [
        "example comment one",
        "example comment two"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the information should be successfully be submitted via the contact us form",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity()"
});
formatter.result({
  "duration": 809058600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_contact_us_button()"
});
formatter.result({
  "duration": 282293700,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_firstname()"
});
formatter.result({
  "duration": 91988101,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_surname()"
});
formatter.result({
  "duration": 151414899,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_email_address()"
});
formatter.result({
  "duration": 63497500,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_comments1(DataTable)"
});
formatter.result({
  "duration": 131347500,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_submit_button1()"
});
formatter.result({
  "duration": 15730117000,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.the_information_should_be_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "duration": 42012900,
  "status": "passed"
});
formatter.after({
  "duration": 1752577200,
  "status": "passed"
});
formatter.before({
  "duration": 4281417401,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Submit an invalid email address using the contact us form",
  "description": "",
  "id": "contact-us-page;submit-an-invalid-email-address-using-the-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@tcid4"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "I access webdriveruniversity",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I click on the contact us button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I enter firstname",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I enter surname",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter an invalid email address",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter comments",
  "rows": [
    {
      "cells": [
        "example comment one",
        "example comment two"
      ],
      "line": 51
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "an error message should be seen",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity()"
});
formatter.result({
  "duration": 1029608001,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_contact_us_button()"
});
formatter.result({
  "duration": 286846600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_firstname()"
});
formatter.result({
  "duration": 67860800,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_surname()"
});
formatter.result({
  "duration": 104019901,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_an_invalid_email_address()"
});
formatter.result({
  "duration": 37109300,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_comments1(DataTable)"
});
formatter.result({
  "duration": 136871500,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_submit_button1()"
});
formatter.result({
  "duration": 15402473600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.an_error_message_should_be_seen()"
});
formatter.result({
  "duration": 10487500,
  "status": "passed"
});
formatter.after({
  "duration": 1568197100,
  "status": "passed"
});
formatter.before({
  "duration": 4271589900,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Submit multiple comments",
  "description": "",
  "id": "contact-us-page;submit-multiple-comments",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@tcid5"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "I access webdriveruniversity",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I click on the contact us button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I enter firstname",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I enter surname",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I enter email address",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I enter comments",
  "rows": [
    {
      "cells": [
        "Example comment one",
        "Example comment two"
      ],
      "line": 63
    },
    {
      "cells": [
        "Example comment three",
        "Example comment four"
      ],
      "line": 64
    },
    {
      "cells": [
        "Example comment five",
        "Example comment six"
      ],
      "line": 65
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "the information should be successfully be submitted via the contact us form",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity()"
});
formatter.result({
  "duration": 863255500,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_contact_us_button()"
});
formatter.result({
  "duration": 459200600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_firstname()"
});
formatter.result({
  "duration": 84494200,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_surname()"
});
formatter.result({
  "duration": 127767900,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_email_address()"
});
formatter.result({
  "duration": 91363299,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_comments1(DataTable)"
});
formatter.result({
  "duration": 161003800,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_submit_button1()"
});
formatter.result({
  "duration": 15705487600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.the_information_should_be_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "duration": 39438901,
  "status": "passed"
});
formatter.after({
  "duration": 1721121199,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Home page",
  "description": "This feature covers all tests for logging into the site\r\nanother line",
  "id": "home-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@home"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 4268024801,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Log in to the university site with correct password",
  "description": "",
  "id": "home-page;log-in-to-the-university-site-with-correct-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@tcid6"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I access webdriveruniversity login portal",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"webdriver\" as my username",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"webdriver123\" as my password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I press the confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should get a \"validationsucceeded\" alert",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity_loginportal()"
});
formatter.result({
  "duration": 401093800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 9
    }
  ],
  "location": "ContactUsSteps.i_enter_my_username(String)"
});
formatter.result({
  "duration": 62587901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 9
    }
  ],
  "location": "ContactUsSteps.i_enter_a_password(String)"
});
formatter.result({
  "duration": 64506801,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_press_confirm()"
});
formatter.result({
  "duration": 96945000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validationsucceeded",
      "offset": 16
    }
  ],
  "location": "ContactUsSteps.i_should_get_a_alert(String)"
});
formatter.result({
  "duration": 63939799,
  "status": "passed"
});
formatter.after({
  "duration": 1696434000,
  "status": "passed"
});
formatter.before({
  "duration": 4283993401,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Attempt to log in to the university site with an incorrect password",
  "description": "",
  "id": "home-page;attempt-to-log-in-to-the-university-site-with-an-incorrect-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@tcid7"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I access webdriveruniversity login portal",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter \"webdriver\" as my username",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"webdriver999\" as my password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I press the confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should get a \"validationfailed\" alert",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity_loginportal()"
});
formatter.result({
  "duration": 391024600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 9
    }
  ],
  "location": "ContactUsSteps.i_enter_my_username(String)"
});
formatter.result({
  "duration": 50577699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver999",
      "offset": 9
    }
  ],
  "location": "ContactUsSteps.i_enter_a_password(String)"
});
formatter.result({
  "duration": 47706699,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_press_confirm()"
});
formatter.result({
  "duration": 49750000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validationfailed",
      "offset": 16
    }
  ],
  "location": "ContactUsSteps.i_should_get_a_alert(String)"
});
formatter.result({
  "duration": 69315099,
  "status": "passed"
});
formatter.after({
  "duration": 1786895201,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Attempt to log in to the university site with an incorrect password",
  "description": "",
  "id": "home-page;attempt-to-log-in-to-the-university-site-with-an-incorrect-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@tcid8"
    },
    {
      "line": 23,
      "name": "@dothisbefore"
    },
    {
      "line": 23,
      "name": "@dothisafter"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I access webdriveruniversity login portal",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user navigates to the \"http://www.webdriveruniversity.com/Login-Portal/index.html\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I enter \"\u003cusername\u003e\" as my login page username",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter \"\u003cpassword\u003e\" as my login page password",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I press the confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should get a \"\u003calert\u003e\" alert",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "home-page;attempt-to-log-in-to-the-university-site-with-an-incorrect-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "alert"
      ],
      "line": 33,
      "id": "home-page;attempt-to-log-in-to-the-university-site-with-an-incorrect-password;;1"
    },
    {
      "cells": [
        "rom",
        "pass",
        "validation failed"
      ],
      "line": 34,
      "id": "home-page;attempt-to-log-in-to-the-university-site-with-an-incorrect-password;;2"
    },
    {
      "cells": [
        "webdriver",
        "webdriver123",
        "validation succeeded"
      ],
      "line": 35,
      "id": "home-page;attempt-to-log-in-to-the-university-site-with-an-incorrect-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4291198400,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Attempt to log in to the university site with an incorrect password",
  "description": "",
  "id": "home-page;attempt-to-log-in-to-the-university-site-with-an-incorrect-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@dothisafter"
    },
    {
      "line": 1,
      "name": "@home"
    },
    {
      "line": 22,
      "name": "@tcid8"
    },
    {
      "line": 23,
      "name": "@dothisbefore"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I access webdriveruniversity login portal",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user navigates to the \"http://www.webdriveruniversity.com/Login-Portal/index.html\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I enter \"rom\" as my login page username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter \"pass\" as my login page password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I press the confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should get a \"validation failed\" alert",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity_loginportal()"
});
formatter.result({
  "duration": 386648000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com/Login-Portal/index.html",
      "offset": 23
    }
  ],
  "location": "GeneralSteps.user_navigates_to_the_stackoverflow_website(String)"
});
formatter.result({
  "duration": 150708900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rom",
      "offset": 9
    }
  ],
  "location": "ContactUsSteps.i_enter_username(String)"
});
formatter.result({
  "duration": 2057322200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass",
      "offset": 9
    }
  ],
  "location": "ContactUsSteps.i_enter_password(String)"
});
formatter.result({
  "duration": 2029032800,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_press_confirm()"
});
formatter.result({
  "duration": 90999099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed",
      "offset": 16
    }
  ],
  "location": "ContactUsSteps.i_should_get_a_alert(String)"
});
formatter.result({
  "duration": 57356700,
  "status": "passed"
});
formatter.after({
  "duration": 1822755301,
  "status": "passed"
});
formatter.before({
  "duration": 4271641200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Attempt to log in to the university site with an incorrect password",
  "description": "",
  "id": "home-page;attempt-to-log-in-to-the-university-site-with-an-incorrect-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@dothisafter"
    },
    {
      "line": 1,
      "name": "@home"
    },
    {
      "line": 22,
      "name": "@tcid8"
    },
    {
      "line": 23,
      "name": "@dothisbefore"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I access webdriveruniversity login portal",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user navigates to the \"http://www.webdriveruniversity.com/Login-Portal/index.html\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I enter \"webdriver\" as my login page username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter \"webdriver123\" as my login page password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I press the confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should get a \"validation succeeded\" alert",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity_loginportal()"
});
formatter.result({
  "duration": 375698301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com/Login-Portal/index.html",
      "offset": 23
    }
  ],
  "location": "GeneralSteps.user_navigates_to_the_stackoverflow_website(String)"
});
formatter.result({
  "duration": 130188700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 9
    }
  ],
  "location": "ContactUsSteps.i_enter_username(String)"
});
formatter.result({
  "duration": 2064892800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 9
    }
  ],
  "location": "ContactUsSteps.i_enter_password(String)"
});
formatter.result({
  "duration": 2037915499,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_press_confirm()"
});
formatter.result({
  "duration": 81469201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation succeeded",
      "offset": 16
    }
  ],
  "location": "ContactUsSteps.i_should_get_a_alert(String)"
});
formatter.result({
  "duration": 49974600,
  "status": "passed"
});
formatter.after({
  "duration": 1814849100,
  "status": "passed"
});
formatter.uri("productspage.feature");
formatter.feature({
  "line": 2,
  "name": "Products page",
  "description": "",
  "id": "products-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@products"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "validate promo code alert is visible when clicking on the special offers link",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tcid9"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user navigates to \"\u003curl\u003e\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"\u003cbutton\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;",
  "rows": [
    {
      "cells": [
        "url",
        "button"
      ],
      "line": 11,
      "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
        "#container-special-offers"
      ],
      "line": 12,
      "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4274815900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "validate promo code alert is visible when clicking on the special offers link",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@products"
    },
    {
      "line": 4,
      "name": "@tcid9"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user navigates to \"http://www.webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"#container-special-offers\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 19
    }
  ],
  "location": "ProductSteps.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 617083699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#container-special-offers",
      "offset": 16
    }
  ],
  "location": "ProductSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 226652200,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 925611800,
  "status": "passed"
});
formatter.after({
  "duration": 1837085800,
  "status": "passed"
});
formatter.uri("stackoverflow.feature");
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
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 4257653400,
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
      "name": "@tcid10"
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
  "duration": 1172690099,
  "status": "passed"
});
formatter.match({
  "location": "StackOverflowSteps.the_user_presses_the_login_button_on_the_home_page()"
});
formatter.result({
  "duration": 530594300,
  "status": "passed"
});
formatter.match({
  "location": "StackOverflowSteps.the_user_enters_a_valid_username()"
});
formatter.result({
  "duration": 91342300,
  "status": "passed"
});
formatter.match({
  "location": "StackOverflowSteps.the_user_enters_a_valid_password()"
});
formatter.result({
  "duration": 51892300,
  "status": "passed"
});
formatter.match({
  "location": "StackOverflowSteps.the_user_presses_the_login_button()"
});
formatter.result({
  "duration": 1885694900,
  "status": "passed"
});
formatter.match({
  "location": "StackOverflowSteps.the_user_should_be_taken_to_the_successful_log_in_page()"
});
formatter.result({
  "duration": 64370901,
  "status": "passed"
});
formatter.after({
  "duration": 1720458500,
  "status": "passed"
});
});