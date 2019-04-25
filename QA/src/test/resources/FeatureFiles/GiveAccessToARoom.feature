Feature: The ability of the administrator give access to a room for a user

  Scenario: Give access to a room.

    Given the web interface is started
    And user is logged in as an administrator
    When Open 'Access Manegement' overview
    And click 'Create' button in 'Access Manegement' overview
    And fill in all fields in 'Give access' from
    And click 'Ok' button from
    Then a new access is created