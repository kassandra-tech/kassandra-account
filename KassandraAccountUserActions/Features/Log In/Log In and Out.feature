@log_in
Feature: Log In & Out
Business cases related to Log In and Log Out can be found here.

@navigation
Scenario: Navigate to log In from header

	Given the user navigates to the "Home" screen
	When the "Log In" link is clicked
	Then the "Log In" screen is displayed

@navigation
Scenario: Navigate to log in from create account

	Given the user navigates to the "Create Account" screen
	When the "Log In" link is clicked
	Then the "Log In" screen is displayed

Scenario: Log in with valid information
Nominal login in with an existing user and valid information.

	Given the user navigates to the "Log In" screen
	When "Test Member" is entered in the "Username" field
	And "P@$$w0rD" is entered in the "Password" field
	When the "Submit" button is clicked
	Then the "Home" screen is displayed
	And the "Member" icon is displayed
	And the "Log Off" button is displayed

Scenario: Show and hide password on log in
Check the visual security for the password is working as expected on the Log In screen.

	Given the user navigates to the "Log In" screen
	Then the "Show Password State" button text is "SHOW"
	When "123" is entered in the "Password" field
	And the "Password" field text is ""
	When the "Show Password State" button is clicked
	Then the "Show Password State" button text is "HIDE"
	And the "Password" field text is "123"

Scenario Outline: Attempt Login without valid credentials
Attempt to login with invalid information (username or password).

	Given the user navigates to the "Log In" screen
	When "Test Member" is entered in the "Username" field
	And "P@$$w0rD" is entered in the "Password" field
	And the "Submit" button is clicked
	Then the "Home" screen is displayed

	Examples:
	| username      | password   | usernameMessage                             | passwordMessage                             |
	| ""            | ""         | "Username is required to use Kassandra"     | "Password must be longer than 7 characters" |
	| "Test Member" | "password" | "Invalid username or password"              | ""                                          |
	| "memb"        | "password" | "Username must be longer than 4 characters" | ""                                          |


Scenario: Log out

	Given the user Logs In:
	| Username   | password   |
	| 'Test Member' | 'P@$$w0rD' |
	When the "Log Out" button is clicked
	Then the "Profile" button is not displayed
	And the "Log Off" button is not displayed
