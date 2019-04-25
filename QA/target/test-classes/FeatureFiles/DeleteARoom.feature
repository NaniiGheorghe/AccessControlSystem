Feature: The ability of the administrator to delete a room.

  Scenario: Delete an existing room.

    Given the web interface is started
    And user is logged in as an administrator
    When Open 'Room' overview
    And check a room checkbox
    And click 'Delete' button
    Then a room is deleted
