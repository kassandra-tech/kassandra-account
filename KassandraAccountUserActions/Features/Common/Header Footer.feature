@header
Feature: Header & Footer

@layout
Scenario: Header layout (not signed in)

	Given the user navigates to the "Home" screen
	Then the "Kassandra" icon is displayed
	And the "Learn" link is displayed
	And the "Markets" link is displayed
	And the "Trade" link is displayed
	And the "Portfolio" link is displayed
	And the "Why Kassandra?" link is displayed
	# And the "Search" button is displayed
	And the "Log In" link is displayed
	And the "Create Account" link is displayed

@layout
Scenario: Header layout (signed in)

	Given the user navigates to the "Home" screen
	And "Test Member" logs in
	Then the "Kassandra" icon is displayed
	And the "Learn" link is displayed
	And the "Markets" link is displayed
	And the "Trade" link is displayed
	And the "Portfolio" link is displayed
	And the "Why Kassandra?" link is displayed
	And the "Favorites" button is displayed
	And the "Bookmark" button is displayed
	# And the "Search" button is displayed
	And the "Member" icon is displayed
	And the "Sign Out" button is displayed

@layout
Scenario: Footer layout

	Given the user navigates to the "Home" screen
	Then the "@ Kassandra 2022" label is displayed
	And the "USA Flag" icon is displayed
	And the "UA Flag" icon is displayed
