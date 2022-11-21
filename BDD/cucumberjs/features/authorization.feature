Feature: Authorization
    I want to authorize the login type

    Background:
    Given I go to '/login'
    And the field 'username' is empty
    And the field 'password' is empty

    Scenario: Authorization of Teahcer
    When I type 'teacher1@gmail.com' in username
    And I type 'teacher1password' in password
    Then the login should show as 'Logged in succesfully as Teacher'

    Scenario: Authorization of Admin
    When I type 'admin1@gmail.com' in username
    And I type 'admin1password' in password
    Then the login should show as 'Logged in Succesfully as Admin'

    Scenario: Invalid Login for Teacher
    When I type 'admin1@gmail.com' in username
    And I type 'admin1password' in password
    Then I should see 'Username or Password is incorrect'

    Scenario: Invalid Login for Admin
    When I type 'teacher1@gmail.com' in username
    And I type 'teacher1password' in password
    Then I should see 'Username or Password is incorrect'

