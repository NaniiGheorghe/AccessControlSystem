Feature: The ability of the administrator to create a new office room.

  This feature is about checking if the creating new user functionality is working

  Scenario: Submit create form with valid data.

  Given the web interface is started
  When I click create button in 'User' overview
  And fill in all fields
  And click 'Ok' button
  Then a new user is created