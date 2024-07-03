describe("Smoke Tests", () => {
  beforeEach(() => {
    cy.visit("/login")
    cy.get('input[type="email"]').type(Cypress.env('username'));
    cy.get('input[type="password"]').type(Cypress.env('password'));
    cy.get('button[type="button"]').click();
  })

  it("Successful Login", () => {
    cy.get('header').find('button').contains('Test User').should('be.visible');
  })

  it("Filters and Table are visible", () => {
    cy.get('nav div[group="/fleets"]').as('fleets').click()
    cy.get('@fleets').find('[role="group"] > a').contains('Trucks').click()
    cy.get('div.trucks-page').should('be.visible').find('.table-filter').should('be.visible')
    cy.get('div.trucks-page').should('be.visible').find('.omni-table.trucks-table').should('be.visible')
  })

  it("Information about Trucks successfully loaded", () => {
    cy.intercept('GET', '/api/v1/trucks?*').as('getTrucks');

    cy.visit('/fleets/trucks');

    cy.wait('@getTrucks').then((res) => {
      expect(res.response.statusCode).to.equal(200)
      expect(res.response.body).to.not.be.empty
    })
  })
})

describe('Check Dims & Payload response and UI', () => {
  beforeEach(() => {
    cy.visit("/login")
    cy.get('input[type="email"]').type(Cypress.env('username'));
    cy.get('input[type="password"]').type(Cypress.env('password'));
    cy.get('button[type="button"]').click();
  })

  it('test run', () => {
    cy.get('header').find('button').contains('Test User').should('be.visible');
    cy.get('[group="/fleets"]').contains('Fleet').click();
    cy.intercept('/api/v1/trucks?*').as('trucks');

    cy.contains('Trucks').click();
    cy.url().should('include', '/fleets/trucks');

    cy.wait('@trucks').then(({ response }) => {
      cy.log(response.body.items)
      const lengthArr = response?.body?.items?.map(item => item?.trailer?.length);
      const widthArr = response?.body?.items?.map(item => item?.trailer?.width);
      const heightArr = response?.body?.items?.map(item => item?.trailer?.height);
      const payloadArr = response?.body?.items?.map(item => item?.trailer?.payload);

      cy.get('.v-data-table__tr > .v-data-table-column--align-right')
        .should('have.length.greaterThan', 0)
        .each(($cel, index) => {
          const expectedText = payloadArr[index]
            ? `Dims & payload${lengthArr[index]}″ х ${widthArr[index]}″ x ${heightArr[index]}″ ${payloadArr[index]} lbs`
            : 'Dims & payload —';

          expect($cel.text().replace(/\s+/g, ' ')).to.contain(expectedText);
        });
    });
  });
})

describe("Filter Test", () => {
  beforeEach(() => {
    cy.visit("/login")
    cy.get('input[type="email"]').type(Cypress.env('username'));
    cy.get('input[type="password"]').type(Cypress.env('password'));
    cy.get('button[type="button"]').click();
  })

  it('Check if Test_Drive1 exist', () => {
    cy.get('[group="/users"]').should('be.visible').click()
    cy.contains("Drivers").click()
    cy.get('#search--name-field').type("Test_Driver1")
    cy.get('#search--apply-btn').click()

    cy.get('[data-qa="search-results"]').should('be.visible').should('contain.text', '1 results found ')
  })
})