describe("Give a Products Page ", () => {
  describe("When the user Test user logs in and navigates to the Products page, clicks in a products, then clicks on 'Add to Cart' three times, eacht time will increase the number of added items in the cart menu in the Header component", () => {
    const email: string = "test@test.com";
    const password: string = "12345";

    it("Then it will open a modal confirming the purchase", () => {
      cy.visit("/");

      cy.get("#email")
        .should("have.attr", "type", "text")
        .type(`${email}{enter}`);

      cy.get("#password")
        .should("have.attr", "type", "password")
        .type(`${password}{enter}`);

      cy.wait(1000);

      cy.visit("market/no/12/1");

      cy.get(".product__container").first().click();

      cy.wait(2000);

      cy.get("button")
        .contains(/add to cart/i)
        .click();

      cy.wait(500);

      cy.get(".menu__link--cart > p").should("contains.text", "1");

      cy.get("button")
        .contains(/add to cart/i)
        .click();

      cy.wait(500);

      cy.get(".menu__link--cart > p").should("contains.text", "2");

      cy.get("button")
        .contains(/add to cart/i)
        .click();

      cy.wait(500);

      cy.get(".menu__link--cart > p").should("contains.text", "3");
    });
  });
});
