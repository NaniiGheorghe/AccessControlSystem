Feature: The ability of the administrator to create a new room.

  This feature is about checking if the creating a new room functionality is working

  Scenario: Create a room.

    Given the web interface is started
    And user is logged in as an administrator
    When Open 'Room' overview
    And click 'Create' button in Room overview
    And fill in all fields in CreateRoom from
    And click 'Ok' button from
    Then a new room is created