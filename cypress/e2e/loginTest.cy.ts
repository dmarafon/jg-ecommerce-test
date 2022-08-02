describe("Give a Login Page ", () => {
  describe("When the user Test logs in", () => {
    const email = "test@test.com";
    const password = "12345";
    it("Then it will be automatically directed to the home page and it will show on the top right 'Welcome' and the user name", () => {
      cy.visit("/");

      cy.get("#email")
        .should("have.attr", "type", "text")
        .type(`${email}{enter}`);

      cy.get("#password")
        .should("have.attr", "type", "password")
        .type(`${password}{enter}`);
      cy.wait(500);
      cy.get(".menu__text--firstname").should("contains.text", "Welcome test!");
      // cy.get("p").should("contain.text", "Test");
    });
  });
});
