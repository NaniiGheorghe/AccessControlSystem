Feature: The ability of the administrator to create a user.

  This feature is about checking if the creating new user functionality is working

  Scenario: Submit create form with valid data.

  Given the web interface is started
  And user is logged in as an administrator
  When Open 'User' overview
  And click 'Create' button
  And fill in all fields
  And click 'Ok' button on CreateUser from
  Then a new user is created