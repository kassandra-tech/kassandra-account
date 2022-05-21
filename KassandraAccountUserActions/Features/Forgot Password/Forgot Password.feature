@account
Feature: Forgot Password
Use cases for Forgot Password screen.

@navigation
Scenario: Navigate to forgot password

	Given the user navigates to the "Log In" screen
	When the "Forgot Password?" link is clicked
	Then the "Forgot Password" screen is displayed

@layout
Scenario: Forgot password layout

	Given the user navigates to the "Forgot Password" screen
	Then the "Please enter your Username and Email Address to recover your account credentials" label is displayed
	And the "Username" label is displayed
	And the "Username" field is displayed
	And the "Email" label is displayed
	And the "Email" field is displayed
	And the "Submit" button is displayed
	And the "Not a Kassandra member?" label is displayed
	And the "Create Account" link is displayed

# Add scenarios after research with Moralis
