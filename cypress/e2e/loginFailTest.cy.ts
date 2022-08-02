describe("Given a Home Page ", () => {
  describe("When the user Test logs in with an incorrect password", () => {
    const email: string = "test@test.com";
    const password: string = "123456";

    it("Then it will open a modal warning that the email or password are wrong", () => {
      cy.visit("/");

      cy.get("#email")
        .should("have.attr", "type", "text")
        .type(`${email}{enter}`);

      cy.get("#password")
        .should("have.attr", "type", "password")
        .type(`${password}{enter}`);

      cy.wait(500);

      cy.get(".modal-text__paragraph").should(
        "contain.text",
        "Invalid Email or Password"
      );
    });
  });
});
