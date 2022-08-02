describe("Given a Products Page ", () => {
  describe("When the user Test logs in and navigates to the Products page, clicks in the first product", () => {
    const email: string = "test@test.com";
    const password: string = "12345";

    it("Then it will render a detail page with all the items details text", () => {
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

      cy.get(".detail__list")
        .eq(0)
        .should("contains.text", "Customers Rating: 4.69");

      cy.get(".detail__list")
        .eq(1)
        .should("contains.text", " How Many Items in Stock? 94");

      cy.get(".detail__list").eq(2).should("contains.text", "Brand: Apple");

      cy.get(".detail__list").eq(3).should("contains.text", "Price: € 549");

      cy.get(".detail__list")
        .eq(4)
        .should("contains.text", "What You Save? 12.96%");
    });
  });
});
