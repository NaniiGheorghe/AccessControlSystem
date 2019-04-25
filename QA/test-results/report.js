$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/CreateANewRoom.feature");
formatter.feature({
  "line": 1,
  "name": "The ability of the administrator to create a new room.",
  "description": "\r\nThis feature is about checking if the creating a new room functionality is working",
  "id": "the-ability-of-the-administrator-to-create-a-new-room.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4190728917,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Create a room.",
  "description": "",
  "id": "the-ability-of-the-administrator-to-create-a-new-room.;create-a-room.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the web interface is started",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is logged in as an administrator",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Open \u0027Room\u0027 overview",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "click \u0027Create\u0027 button in Room overview",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "fill in all fields in CreateRoom from",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click \u0027Ok\u0027 button from",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "a new room is created",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.theWebInterfaceIsStarted()"
});
formatter.result({
  "duration": 2736876290,
  "status": "passed"
});
formatter.match({
  "location": "GivenSteps.userIsLoggedInAsAnAdministrator()"
});
formatter.result({
  "duration": 1231684001,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.openRoomOverview()"
});
formatter.result({
  "duration": 85955395,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.clickCreateButtonInRoomOverview()"
});
formatter.result({
  "duration": 113032170,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.fillInAllFieldsInCreateRoomFrom()"
});
formatter.result({
  "duration": 2289984329,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.clickOkButtonOnCreateRoomFrom()"
});
formatter.result({
  "duration": 109355077,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.aNewRoomIsCreated()"
});
formatter.result({
  "duration": 1028514043,
  "status": "passed"
});
formatter.after({
  "duration": 648353137,
  "status": "passed"
});
formatter.uri("FeatureFiles/CreateANewUser.feature");
formatter.feature({
  "line": 1,
  "name": "The ability of the administrator to create a user.",
  "description": "\r\nThis feature is about checking if the creating new user functionality is working",
  "id": "the-ability-of-the-administrator-to-create-a-user.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3252069511,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Submit create form with valid data.",
  "description": "",
  "id": "the-ability-of-the-administrator-to-create-a-user.;submit-create-form-with-valid-data.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the web interface is started",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is logged in as an administrator",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Open \u0027User\u0027 overview",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "click \u0027Create\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "fill in all fields",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click \u0027Ok\u0027 button on CreateUser from",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "a new user is created",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.theWebInterfaceIsStarted()"
});
formatter.result({
  "duration": 2538571039,
  "status": "passed"
});
formatter.match({
  "location": "GivenSteps.userIsLoggedInAsAnAdministrator()"
});
formatter.result({
  "duration": 1201389242,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.iClickCreateButtonInUserOverview()"
});
formatter.result({
  "duration": 2111644974,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.clickCreate()"
});
formatter.result({
  "duration": 2134567917,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.fillInAllFieldsAndClickOkButton()"
});
formatter.result({
  "duration": 7955815999,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.clickOkButton()"
});
formatter.result({
  "duration": 3098392206,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.aNewUserIsCreated()"
});
formatter.result({
  "duration": 1039801674,
  "status": "passed"
});
formatter.after({
  "duration": 639800757,
  "status": "passed"
});
formatter.uri("FeatureFiles/DeleteARoom.feature");
formatter.feature({
  "line": 1,
  "name": "The ability of the administrator to delete a room.",
  "description": "",
  "id": "the-ability-of-the-administrator-to-delete-a-room.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3253801214,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Delete an existing room.",
  "description": "",
  "id": "the-ability-of-the-administrator-to-delete-a-room.;delete-an-existing-room.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the web interface is started",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is logged in as an administrator",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Open \u0027Room\u0027 overview",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "check a room checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click \u0027Delete\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a room is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.theWebInterfaceIsStarted()"
});
formatter.result({
  "duration": 2656516579,
  "status": "passed"
});
formatter.match({
  "location": "GivenSteps.userIsLoggedInAsAnAdministrator()"
});
formatter.result({
  "duration": 1260683245,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.openRoomOverview()"
});
formatter.result({
  "duration": 133238903,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.checkARoomCheckbox()"
});
formatter.result({
  "duration": 2103292176,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.clickDeleteButton()"
});
formatter.result({
  "duration": 72556997,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.aRoomIsDeleted()"
});
formatter.result({
  "duration": 1021103791,
  "status": "passed"
});
formatter.after({
  "duration": 650969556,
  "status": "passed"
});
formatter.uri("FeatureFiles/DeleteAUser.feature");
formatter.feature({
  "line": 1,
  "name": "The ability of the administrator to delete a user.",
  "description": "\r\nThis feature is about checking if the creating new user functionality is working",
  "id": "the-ability-of-the-administrator-to-delete-a-user.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3247200571,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Delete an existing user.",
  "description": "",
  "id": "the-ability-of-the-administrator-to-delete-a-user.;delete-an-existing-user.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the web interface is started",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is logged in as an administrator",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Open \u0027User\u0027 overview",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "check an user checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click \u0027Delete\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a user is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.theWebInterfaceIsStarted()"
});
formatter.result({
  "duration": 2550060720,
  "status": "passed"
});
formatter.match({
  "location": "GivenSteps.userIsLoggedInAsAnAdministrator()"
});
formatter.result({
  "duration": 1205101596,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.iClickCreateButtonInUserOverview()"
});
formatter.result({
  "duration": 2130741667,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.checkAnUserCheckbox()"
});
formatter.result({
  "duration": 2110081469,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.clickDeleteButton()"
});
formatter.result({
  "duration": 78358961,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.aUserIsDeleted()"
});
formatter.result({
  "duration": 1040111272,
  "status": "passed"
});
formatter.after({
  "duration": 659275809,
  "status": "passed"
});
formatter.uri("FeatureFiles/GiveAccessToARoom.feature");
formatter.feature({
  "line": 1,
  "name": "The ability of the administrator give access to a room for a user",
  "description": "",
  "id": "the-ability-of-the-administrator-give-access-to-a-room-for-a-user",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3224529749,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Give access to a room.",
  "description": "",
  "id": "the-ability-of-the-administrator-give-access-to-a-room-for-a-user;give-access-to-a-room.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the web interface is started",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is logged in as an administrator",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Open \u0027Access Manegement\u0027 overview",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click \u0027Create\u0027 button in \u0027Access Manegement\u0027 overview",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "fill in all fields in \u0027Give access\u0027 from",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click \u0027Ok\u0027 button from",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a new access is created",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.theWebInterfaceIsStarted()"
});
formatter.result({
  "duration": 2609960168,
  "status": "passed"
});
formatter.match({
  "location": "GivenSteps.userIsLoggedInAsAnAdministrator()"
});
formatter.result({
  "duration": 1214803860,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.openAccessManegementOverview()"
});
formatter.result({
  "duration": 1105599703,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.clickCreateButtonInAccessManegementOverview()"
});
formatter.result({
  "duration": 1082678523,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.fillInAllFieldsInGiveAccessFrom()"
});
formatter.result({
  "duration": 6553387312,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.clickOkButtonOnCreateRoomFrom()"
});
formatter.result({
  "duration": 76151577,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.aNewAccessIsCreated()"
});
formatter.result({
  "duration": 1039527691,
  "status": "passed"
});
formatter.after({
  "duration": 661316405,
  "status": "passed"
});
});