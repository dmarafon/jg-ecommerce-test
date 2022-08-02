describe("Given a Cart Page ", () => {
  describe("When the user adds an item to the cart and navigates to the Cart page and click on the 'buy' item", () => {
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

      cy.get(".menu__logged > a").click();

      cy.get("button").contains(/buy/i).click();

      cy.get(".modal-text__paragraph").should(
        "contain.text",
        "Thank you for buying! We're going to get in touch in 24 hours on regards of delivery details"
      );
    });
  });
});
