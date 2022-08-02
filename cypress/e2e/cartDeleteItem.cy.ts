describe("Given a Cart Page ", () => {
  describe("When the user adds 2 itens to the cart and navigates to the Cart page and click on the 'drop item' button", () => {
    const email: string = "test@test.com";
    const password: string = "12345";

    it("Then it will remove 1 item of the cart", () => {
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

      cy.get(".menu__logged > a").click();

      cy.get(".cart__text--title")
        .eq(1)
        .should("contain.text", " TOTAL ITEMS  = 2");

      cy.get("button")
        .contains(/drop item/i)
        .click();

      cy.get(".cart__text--title")
        .eq(1)
        .should("contain.text", " TOTAL ITEMS  = 1");
    });
  });
});
