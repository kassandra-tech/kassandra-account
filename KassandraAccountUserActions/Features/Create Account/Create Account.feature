@create_account
Feature: Create account
Use cases for the Create Account screen.

@navigation
Scenario: Navigate to create account from header

	Given the user navigates to the "Home" screen
	When the "Create Account" link is clicked
	Then the "Create Account" screen is displayed

@navigation
Scenario: Navigate to create account from log in

	Given the user navigates to the "Log In" screen
	When the "Create Account" link is clicked
	Then the "Create Account" screen is displayed

Scenario: Create account with valid input
Nominal create account with valid input.

	Given the user navigates to the "Create Account" screen
	When a unique "Test Member" is entered in the "Username" field
	And a unique "Test Member" is entered in the "Email" field
	And "P@$$w0rD" is entered in the "Password" field
	And "P@$$w0rD" is entered in the "Confirm Password" field
	And the "Terms & Conditions" checkbox is checked
	When the "Create Account" button is clicked
	Then the "Home" screen is displayed

Scenario: Username exists during account creation

	Given the user navigates to the "Create Account" screen
	And "Test Member" is entered in the "Username" field
	And "P@$$w0rD" is entered in the "Password" field
	And "P@$$w0rD" is entered in the "Confirm Password" field
	And the "Terms & Conditions" checkbox is checked
	When the "Create Account" button is clicked
	Then the "Username Message" label is "This username has already been registered"

Scenario: Email exists during account creation

	Given the user navigates to the "Create Account" screen
	And a unique "Test Member" is entered in the "Username" field
	And "testmember@test.net" is entered in the "Email" field
	And "P@$$w0rD" is entered in the "Password" field
	And "P@$$w0rD" is entered in the "Confirm Password" field
	And the "Terms & Conditions" checkbox is checked
	When the "Create Account" button is clicked
	Then the "Email Message" label is "Account already exists for this email address"


Scenario Outline: Create account with invalid input
Attempt to create an account when expected information is not provided to create an account.

	Given the user navigates to the "Create Account" screen
	And <username> is entered in the "Username" field
	And <email> is entered in the "Email" field
	And <password> is entered in the "Password" field
	When the "Create Account" button is clicked
	Then the "Username" message displays <usernameMessage>
	Then the "Email" message displays <emailMessage>
	Then the "Password" message displays <passwordMessage>
	Then the "Confirm Password" message displays <confirmPasswordMessage>
	Then the "Terms & Conditions" message displays <termsAndConditionsMessage>

	Examples:
	| username      | email                 | password   | confirmPassword | usernameMessage                             | emailMessage                                    | passwordMessage                             | confirmPasswordMessage                              | termsAndConditionsMessage                                     |
	| ""            | ""                    | ""         | ""              | "Username is required to use Kassandra"     | "Email address is required"                     | "Password must be longer than 7 characters" | ""                                                  | "You must accept the Terms & Conditions to create an account" |
	| "test"        | "123"                 | "P@$$w0rD" | ""              | "Username must be longer than 4 characters" | "Email address format is invalid"               | ""                                          | "Password and Confirm Password fields do not match" | ""                                                            |
