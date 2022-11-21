Feature: Userroles
    I want to display the userrole after login

    Background:
    Given I go to '/login'
    And enter a valid 'username' 
    And enter a valid 'password' 

    Scenario: Display teacher Userrole
    When I login with valid 'teacher1@gmail.com' in username
    And I type valid 'teacher1password' in password
    And the select the 'teacher' in '/dashboard'
    Then the dashboard should show the userrole on top right

    Scenario: Display Admin Userrole
    When I login with valid 'admin1@gmail.com' in username
    And I type valid 'admin1password' in password
    And the select the 'admin' in '/dashboard'
    Then the dashboard should show the userrole on top right

