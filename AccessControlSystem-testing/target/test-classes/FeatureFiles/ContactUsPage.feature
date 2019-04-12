Feature: Contact Us Page

  This feature is about verifying all the functionality of
  the contact us form.

  Scenario: Submit Contact Us form with valid details

    Given I am on the Contact Us page
    When I complete all the fields of the Contact Us form
    And I click the submit button
    Then the form is successfully submitted


