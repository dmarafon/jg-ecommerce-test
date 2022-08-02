describe("Give a Home Page ", () => {
  describe("When the user Test logs in and them logs out", () => {
    const email: string = "test@test.com";
    const password: string = "12345";

    it("Then the user will be redirected automatically to the Home Page", () => {
      cy.visit("/");

      cy.get("#email")
        .should("have.attr", "type", "text")
        .type(`${email}{enter}`);

      cy.get("#password")
        .should("have.attr", "type", "password")
        .type(`${password}{enter}`);

      cy.wait(500);

      cy.get(".menu__text--firstname").should("contains.text", "Welcome test!");

      cy.get(".logout__submission").click();

      cy.wait(500);
      cy.get(".welcome__paragraph--welcome_text").should(
        "contains.text",
        "The Best Marketplace for all your necessities in the Globe!"
      );
    });
  });
});
