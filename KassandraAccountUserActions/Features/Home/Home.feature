@home
Feature: Home

@navigation
Scenario: Navigate to Home

    Given the user navigates to the "Home" screen
    Then the "Home" screen is displayed

@navigation
Scenario: Navigate to Home from Kassandra icon in Header

    Given the user navigates to the "Create Account" screen
    When the "Kassandra" icon is clicked
    Then the "Home" screen is displayed

@layout
Scenario: Kassandra Home common layout
    Given the user navigates to the "Home" screen
    And the "Twitter" button is displayed
    And the "Twitter" button is enabled
    And the "LinkedIn" button is displayed
    And the "LinkedIn" button is enabled
    And the "Medium" button is displayed
    And the "Medium" button is enabled
    And the "Contact Us" button is displayed
    And the "Contact Us" button is enabled

@navigation
Scenario: Navigate to Kassandra Twitter page

    Given the user navigates to the "Home" screen
    When the "Twitter" button is clicked
    Then the "Kassandra Twitter" screen is displayed

@navigation
Scenario: Navigate to Kassandra LinkedIn page

    Given the user navigates to the "Home" screen
    When the "LinkedIn" button is clicked
    Then the "Kassandra LinkedIn" screen is displayed

@navigation
Scenario: Navigate to Kassandra Medium page

    Given the user navigates to the "Home" screen
    When the "Medium" button is clicked
    Then the "Kassandra Medium" screen is displayed

# Add use case for contacting Kassandra.
Scenario: Contact Us

@layout
Scenario: Home links layout
    Given the user navigates to the "Home" screen
    Then the "Kassandra social media kit" is displayed
    And the "Contact Us" button is displayed
    And the Home Pagination is displayed

@layout
Scenario: Home layout

    Given the user navigates to the "Home" screen
    Then the "Kassandra" icon is displayed
    And the "Kassandra Earth" background is displayed
    And the Welcome to Kassandra Welcome message is displayed
    And the "Get started now" button is enabled
    And the Home links are displayed
    And the "Home" pagination is selected

@navigation
Scenario: Navigate to Product Roadmap screen

    Given the user navigates to the "Home" screen
    When the "Product Roadmap" button is clicked
    Then the "Product Roadmap" screen is displayed

@layout
Scenario: Kassandra Product Roadmap layout
    Given the user navigates to the "Product Roadmap" screen
    Then the "Q1" icon is displayed
    And the "Pie Chart" icon is displayed
    And the "Q1" content is dispayed
    And the "Q2" icon is displayed
    And the "Bar Graph" icon is displayed
    And the "Q2" content is displayed
    And the "Q3" icon is displayed
    And the "Connections" icon is displayed
    And the "Q3" content is displayed
    And the "Q4" icon is displayed
    And the "Circle Cell" icon is displayed
    And the "Q4" content is displayed
    And the Home links are displayed
    And the "Product Roadmap" pagination is selected

@navigation
Scenario: Navigate to Tokenomics screen

    Given the user navigates to the "Home" screen
    When the "Tokenomics" button is clicked
    Then the "Tokenomics" screen is displayed

@layout
Scenario: Kassandra Tokenomics layout
    Given the user navigates to the "Tokenomics" screen
    Then the "Sphere Graph" icon is displayed
    And the "What is KSNDR?" content is displayed
    And the "Line Graph" icon is displayed
    And the "What is CRBRL?" content is displayed
    And the "Supply Node" icon is displayed
    And the "Supply" content is displayed
    And the "Bubble" icon is displayed
    And the "Token Creation" content is displayed
    And the "Distribution" icon is displayed
    And the "Token Distruction" content is displayed
    And the "Cell" icon is displayed
    And the "Calculations" content is displayed
    And the Home links are displayed
    And the "Tokenomics" pagination is selected

@navigation
Scenario: Navigate to Kassandra Whitepaper Summary screen

    Given the user navigates to the "Home" screen
    When the "Whitepaper" button is clicked
    Then the "Whitepaper Summary" screen is displayed

@navigation
Scenario: Navigate to Kassandra Whitepaper screen

    Given the user navigates to the "Whitepaper Summary" screen
    When the "Read All" link is clicked
    Then the "Whitepaper" screen is displayed   

@layout
Scenario: Kassandra Whitepaper Summary layout

    Given the user navigates to the "Whitepaper Summary" screen
    Then the "Whitepaper Summary" content is displayed
    And the "Read All" link is displayed
    And the Home links are displayed
    And the "Whitepaper" pagination is selected

@layout
Scenario: Kassandra Whitepaper layout

    Given the user navigates to the "Whitepaper" screen
    Then the "Whitepaper" content is displayed
    And the Home links are displayed
    And the "Whitepaper" pagination is selected


@navigation
Scenario: Navigate to Kassandra Team page

    Given the user navigates to the "Home" screen
    When the "Team" button is clicked
    Then the "Team" screen is displayed

@layout
Scenario: Kassandra Team layout

    Given the user navigates to the "Kassandra Team" screen
    Then the "Kassandra" icon is displayed
    And the "Chief Executive Officer" image is displayed
    And the "Chief Operating Officer" image is displayed
    And the "Chief Financial Officer" image is displayed
    And the "Product Manager" image is displayed
    And the Home links are displayed
    And the "Team" pagination is selected
