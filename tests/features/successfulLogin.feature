Feature: successful-Login

    Scenario: User logs in with valid credentials
        Given the credentials are correct
        When the user attempts to successfully log in
        Then a success message is displayed
