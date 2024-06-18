describe("Default functionality testing", () => {
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com")
    })

    it("Testing Add/Remove Elements", () => {
        cy.get('a[href="/add_remove_elements/"]').click();
        cy.get('button')
            .should("have.text", "Add Element")
            .click();
        cy.get('.added-manually')
            .first()
            .click();
    })

    it("Testing Checkboxes", () => {
        cy.get('a[href="/checkboxes"]').click();
        cy.get('input[type="checkbox"]')
            .first()
            .check();
        cy.get('input[type="checkbox"]').uncheck();
    })

    it("Testing Dropdown", () => {
        cy.get('a[href="/dropdown"]').click();
        const menu = cy.get("#dropdown");
        menu.select("1");
        menu.select("2");
    })

    it("Testing Form Authentication", () => {
        // const username = Cypress.env('username');
        // const password = Cypress.env('password');

        cy.get('a[href="/login"]').click();
        cy.get('#username').type(Cypress.env('username'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('button[type="submit"]').click();
        cy.get('a.button').click();

        cy.get('#username').type(Cypress.env('username'));
        cy.get('#password').type("12345");
        cy.get('button[type="submit"]').click();
        cy.get('#flash-messages .error').should("be.visible");
    })

    it("Testing Horizontal Slider", () => {
        cy.get('a[href="/horizontal_slider"]').click();
        cy.get('input[type=range]').as('range').invoke('val', 2).trigger('change');
        cy.get('@range').siblings('span').should('have.text', '2');
    })

    it("Testing Hovers", () => {
        cy.get('a[href="/hovers"]').click();
        cy.get("div.figure").each(($fig) => {
            cy.wrap($fig).realHover().find(".figcaption").should("be.visible")
        });
    })

    it("Testing Inputs", () => {
        cy.get('a[href="/inputs"]').click();

        cy.get("[type='number']").as("inputNumber");

        cy.get("@inputNumber")
            .type("10")
            .should("have.value", "10");
        cy.get("@inputNumber").clear();

        cy.get("@inputNumber")
            .type("abc")
            .should("have.value", "");
        cy.get("@inputNumber").clear();

        cy.get("@inputNumber")
            .invoke("val", 1)
            .trigger("change")
            .should("have.value", "1");
        cy.get("@inputNumber")
            .invoke("val", 2)
            .trigger("change")
            .should("have.value", "2");
        cy.get("@inputNumber")
            .invoke("val", 1)
            .trigger("change")
            .should("have.value", "1");
    })
})