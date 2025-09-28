Feature: Shopping Cart Management
    As a logged-in user
    I want to manage my shopping cart
    So that I can review my selections before purchase

Scenario: Updating the quantity of an item in the cart
    Given I am a logged-in user with ID "user123"
    And my cart contains 1 unit of product "prod456" in size "M"
    When I update the quantity of product "prod456" in size "M" to 3
    Then my cart should contain 3 units of product "prod456" in size "M"
    And I should receive a confirmation message