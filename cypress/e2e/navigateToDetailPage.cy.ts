describe("Given a Products Page ", () => {
  describe("When the user Test logs in and navigates to the Products page, clicks in the first product", () => {
    const email: string = "test@test.com";
    const password: string = "12345";

    it("Then it will render a detail page", () => {
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

      cy.wait(500);

      cy.get(".detail__paragraph--special").should("contains.text");
    });
  });
});
