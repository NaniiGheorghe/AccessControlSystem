Feature: The ability of the administrator to delete a user.

  This feature is about checking if the creating new user functionality is working

  Scenario: Delete an existing user.

    Given the web interface is started
    And user is logged in as an administrator
    When Open 'User' overview
    And check an user checkbox
    And click 'Delete' button
    Then a user is deleted
