Feature: Upload a Video
    I want to upload a video 

    Background:
    Given I go to '/login/teacher/upload'
    And the field 'upload' is empty
    
    Scenario: Upload Options
    When I click on 'Upload' button
    Then it should show the Upload Options

    Scenario: Upload from Drive
    When I click on 'Upload' button
    And Then I click on the 'Upload from Drive' Option
    Then it should show as 'Video Uploaded Succesfully'

    Scenario: Upload from My Device
    When I click on 'Upload' button
    And Then I click on the 'Upload from My Device' Option
    Then it should show as 'Video Uploaded Succesfully'