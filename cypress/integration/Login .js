///reference types = “cypress”/>
var storageItmes = {};
describe("Post Resource", function() {
  beforeEach(function() {
    for (let key in storageItmes) {
      // skip loop if the property is from prototype
      cy.window().then(Window =>
        window.localStorage.setItem(key, storageItmes[key])
      );
    }
    cy.visit("https://stgclient.vetty.co/client/login");
    cy.wait(2000);
    cy.get("#email").type("vijay@tweeny.in");
    cy.get("#ssn").type("123456");
    cy.get(".login-button-container")
      .contains("Log In")
      .click();
    cy.wait(7000);
    cy.window().then(Window => {
      let length = window.localStorage.length;
      for (let i = 0; i < length; i++) {
        let key = window.localStorage.key(i);
        storageItmes[key] = window.localStorage.getItem(key);
      }
    });
  });
  it("To check New candidate functionality with valid data", function() {
    cy.get(".client-nav-item-btn").click({ force: true });
    cy.wait(2000);
    cy.get("#firstname").type("Kajal");
    cy.wait(2000);
    cy.get("#lastname").type("Gupta");
    cy.wait(2000);
    cy.get("#email").type("test@gmail.com");
    cy.wait(2000);
    cy.get("select").select("Test");
    cy.wait(2000);
    cy.contains("Place Order").click();
  });
  it("To check New candidate functionality with Invalid data", function() {
    cy.get(".client-nav-item-btn").click({ force: true });
    cy.wait(2000);
    cy.get("#firstname").type("dd");
    cy.wait(2000);
    cy.get("#lastname").type("Gus23pta");
    cy.wait(2000);
    cy.get("#email").type("f$%^.fhf");
    cy.wait(2000);
    cy.get("select").select("Test");
    cy.wait(2000);
    cy.log("Please enter valid email address.");
  });
  it("To check New candidate functionality with Special character", function() {
    cy.get(".client-nav-item-btn").click({ force: true });
    cy.wait(2000);
    cy.get("#firstname").type("@#$%");
    cy.wait(2000);
    cy.get("#lastname").type("(*&^%%)");
    cy.wait(2000);
    cy.get("#email").type("@#$%.&^^");
    cy.wait(2000);
    cy.get("select").select("Test");
    cy.wait(2000);
    cy.log("Please enter valid email address.");
  });
  it("To check New candidate functionality with Partially filledd", function() {
    cy.get(".client-nav-item-btn").click({ force: true });
    cy.wait(2000);
    cy.get("#firstname").type("Kajal");
    cy.wait(2000);
    cy.get("#email").type("kajal.gupta01081997@gmail.com");
    cy.wait(2000);
  });
});
