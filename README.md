# e2e-web-test-automation

# 20.11.2025

1. Create local folder with git init and push branch to git

2. Read the final project requirements pdf to identify:

   - 2.1. goal
   - 2.2. deliverables
   - 2.3. expected behaviors

3. Explore page, prioritise scenarios, and take notes on what needs to be tested:

   - Core use cases:

     - 3.1. Scenario: Add an item to the cart from the catalog
     - 3.2. Scenario: Display cart items and totals
     - 3.3. Scenario: Proceed to the Payment step
     - 3.4. Scenario: Validate payment summary
     - 3.5. Scenario: Complete a purchase
     - 3.6. Scenario: Display order details
     - 3.7. Scenario: Add a new product to inventory
     - 3.8. Scenario: Increase and decrease stock quantity

   - Secondary use cases:

   - 3.9. Scenario: Block payment without method
   - 3.10. Scenario: Prevent adding out-of-stock items
   - 3.11. Scenario: Display past orders

4. Install and config playwright plus project structure

- 4.1. Decision 1: Use .env default code coming with playwright installation or use simpler one used during course
  Despite the default .env code provides a better strucutre, I went with the simpler code given the project's structure is straightforward and the project is not intended to run tests in different environments.

5. Create base page with naviagte, click, fill and expect methods

# 21.11.2025

1. Create inventory page locators for scenario Add a new product to inventory

challenge1: After adding the product make the locator to uniquely identify the product added. To move on to other tests just added a quantity which was not on the list.

2. Create catalog page locators for scenario Add an item to the cart from the catalog
   challenge1: extract the number of units from each article
   learned innertext() returns visible text and that's why it should be used instead of textContent().
   how to use parseInt()

3. Learned how to call a function inside a if statement
   this (await this.calculateQuantity() > 0) {}
   instead of (this.calculateQuantity > 0) {}
