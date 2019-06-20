/// <reference types="Cypress" />

context("scanning-target", () => {
  beforeEach(() => {
    cy.visit("http://localhost:81/login.aspx");
  });

  it("listing scanning targets should show 10", () => {
    cy.get('[name="defaultuser"]').click();
    cy.get("#scanningMenuItem").trigger("mouseover");

    cy.get(
      '#scanningMenuItem .stippel [href="/Scanning/ScanningMethods/"]'
    ).should("be.visible");
    cy.get(
      '#scanningMenuItem .stippel [href="/Scanning/ScanningMethods/"]'
    ).click();

    // length checking
    cy.get("#actaddscanningtarget")
      .find("tr")
      .should("have.length", 8);
    // screenshot diffing
    cy.get("#actaddscanningtarget").toMatchImageSnapshot({
      fileName: "scanning-target-list",
      createDiffImage: true, // Should a "diff image" be created, can be disabled for performance
      threshold: 0.01, // Amount in pixels or percentage before snapshot image is invalid
      thresholdType: "percent" // Can be either "pixels" or "percent"
    });
  });
});
