Feature: Login

  I want to login to the POP Dashboard

  Background:
    Given I go to '/login'
    And the field 'username' is empty
    And the field 'password' is empty

  Scenario: Error on empty fields
    When I click on 'enter'
    Then field 'username' should raise error
    And field 'password' should raise error

  Scenario: Incorrect password
    When I type 'abcABC' in 'username'
    And I type '123456' in 'password'
    And I click on 'enter'
    Then I should see 'username or password is incorrect'

  Scenario: Login successfully
    Given I have users:
      | username           |  password           |
      | John_Lennon        |  beatles            | 
    When I type 'John_Lennon' in 'username'
    And I type 'beatles' in 'password'
    And I click on 'enter'
    Then I should 'Login successfully'