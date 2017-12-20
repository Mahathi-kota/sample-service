$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Accounts.feature");
formatter.feature({
  "line": 2,
  "name": "Accounts",
  "description": "So that I can check how much money I have\r\nAs an API consumer\r\nI want the Accounts API to provide me with my account balances",
  "id": "accounts",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@accounts"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Get Accounts Details",
  "description": "",
  "id": "accounts;get-accounts-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "The user has the following accounts",
  "rows": [
    {
      "cells": [
        "BSB",
        "AccountNo",
        "Balance"
      ],
      "line": 9
    },
    {
      "cells": [
        "123456",
        "123456",
        "433.21"
      ],
      "line": 10
    },
    {
      "cells": [
        "123456",
        "123457",
        "1433.21"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I request the Account API",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I\u0027ll get the following account details",
  "rows": [
    {
      "cells": [
        "BSB",
        "AccountNo",
        "Balance"
      ],
      "line": 14
    },
    {
      "cells": [
        "123456",
        "123456",
        "433.21"
      ],
      "line": 15
    },
    {
      "cells": [
        "123456",
        "123457",
        "1433.21"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.theUserHasTheFollowingAccounts(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 169166084,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iRequestTheAccountAPI()"
});
formatter.result({
  "duration": 6001349,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iLlGetTheFollowingAccountDetails(DataTable)"
});
formatter.result({
  "duration": 987085,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat io.swagger.samples.inflector.springboot.StepDefs.iLlGetTheFollowingAccountDetails(StepDefs.java:85)\n\tat ✽.Then I\u0027ll get the following account details(Accounts.feature:13)\n",
  "status": "pending"
});
formatter.uri("RootAPI.feature");
formatter.feature({
  "line": 2,
  "name": "Root API",
  "description": "So that I can disover new API features and not have to hard-code URLs\r\nAs an API consumer\r\nI want the Root API to provide me with links to other parts of the API",
  "id": "root-api",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@root"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Get Root",
  "description": "",
  "id": "root-api;get-root",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I request the root API",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I\u0027ll get links to the following endpoints",
  "rows": [
    {
      "cells": [
        "User Details"
      ],
      "line": 10
    },
    {
      "cells": [
        "Accounts"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.i_request_the_root_API()"
});
formatter.result({
  "duration": 518774,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.illGetLinksToTheFollowingEndpoints(String\u003e)"
});
formatter.result({
  "duration": 17610423,
  "status": "passed"
});
formatter.uri("UserDetails.feature");
formatter.feature({
  "line": 2,
  "name": "User Details",
  "description": "So that I can check if my name and other details correct on the site\r\nAs an API consumer\r\nI want the User Details API to provide me with my details",
  "id": "user-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@userDetails"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "# NOTE: The system is designed for only a single user"
    }
  ],
  "line": 8,
  "name": "Get User Details",
  "description": "",
  "id": "user-details;get-user-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "The User table has the following entry",
  "rows": [
    {
      "cells": [
        "Name",
        "Doe, John"
      ],
      "line": 10
    },
    {
      "cells": [
        "DoB",
        "01/Jan/1768"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I request the User Details API",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I\u0027ll get the following user details",
  "rows": [
    {
      "cells": [
        "Surname",
        "GivenName",
        "DoB"
      ],
      "line": 14
    },
    {
      "cells": [
        "Doe",
        "John",
        "1768-01-01"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.theUserTableHasTheFollowingEntry(String,String\u003e)"
});
formatter.result({
  "duration": 293327589,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iRequestTheUserDetailsAPI()"
});
formatter.result({
  "duration": 485168,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iLlGetTheFollowingUserDetails(DataTable)"
});
formatter.result({
  "duration": 195920,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat io.swagger.samples.inflector.springboot.StepDefs.iLlGetTheFollowingUserDetails(StepDefs.java:94)\n\tat ✽.Then I\u0027ll get the following user details(UserDetails.feature:13)\n",
  "status": "pending"
});
formatter.scenario({
  "line": 17,
  "name": "Set Preferred Name",
  "description": "",
  "id": "user-details;set-preferred-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "The User table has the following entry",
  "rows": [
    {
      "cells": [
        "Name",
        "DoB"
      ],
      "line": 19
    },
    {
      "cells": [
        "Doe, John",
        "01/Jan/1768"
      ],
      "line": 20
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "set the preferred name to \"John Doe, first of his name, fictitious in nature, king of the unknown, bane of detectives, master of mysteries.\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I request the User Details API",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I\u0027ll get the following user details",
  "rows": [
    {
      "cells": [
        "surname",
        "givenName",
        "dob",
        "preferredName"
      ],
      "line": 24
    },
    {
      "cells": [
        "Doe",
        "John",
        "1768-01-01",
        "John Doe, first of his name, fictitious in nature, king of the unknown, bane of detectives, master of mysteries."
      ],
      "line": 25
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.theUserTableHasTheFollowingEntry(String,String\u003e)"
});
formatter.result({
  "duration": 2259803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Doe, first of his name, fictitious in nature, king of the unknown, bane of detectives, master of mysteries.",
      "offset": 27
    }
  ],
  "location": "StepDefs.setThePreferredNameTo(String)"
});
formatter.result({
  "duration": 1030849,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat io.swagger.samples.inflector.springboot.StepDefs.setThePreferredNameTo(StepDefs.java:100)\n\tat ✽.When set the preferred name to \"John Doe, first of his name, fictitious in nature, king of the unknown, bane of detectives, master of mysteries.\"(UserDetails.feature:21)\n",
  "status": "pending"
});
formatter.match({
  "location": "StepDefs.iRequestTheUserDetailsAPI()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs.iLlGetTheFollowingUserDetails(DataTable)"
});
formatter.result({
  "status": "skipped"
});
});