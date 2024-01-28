describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:8002/");
    cy.get(".sc-jrcSHq > div").should("exist");
    cy.get(".sc-jrcSHq > div").click();
    cy.get("form > :nth-child(1)").should("exist");
  });
});
