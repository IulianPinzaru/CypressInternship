var search = 'CURLS TO STRAIGHT SHAMPOO';
var orderid, email;
describe('Register and Login functionality', () => {
    beforeEach(() => {
      
      cy.visit('https://automationteststore.com/')
    })

    it('Search an Item', ()=>{
        //Search
        cy.get('#filter_keyword').type(search).type('{enter}')
        //Add item
        cy.get('#product > fieldset > div:nth-child(4) > ul > li > a').contains("Add to Cart").click()
        //verify if it is the correct item.
        cy.get('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(2) > td:nth-child(2) > a')
            .contains('Curls to straight Shampoo')
        //Finalizing the purchase
        cy.get('#cart_checkout1').contains('Checkout').click()
        cy.get('#accountFrm_accountguest').click()
        cy.get('#accountFrm > fieldset > button').contains('Continue').click()
        Adddata('Iulian', 'Pinzaru', 'iulian.pinzaru@yahoo.com', '0769662763', '-', 'SC Test2 SRL', 'Tipograf 1', 'Radauti', '725400')
        cy.get('#guestFrm > div.form-group > div > button').contains('Continue').click()
        //confirm order
        cy.get('#checkout_btn').contains('Confirm Order').click()
        
        //check order status
        cy.get('#maincontainer > div > div > div > div > section > p:nth-child(4) > a').contains('invoice page').click()

        cy.get('#maincontainer > div > div > div > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1) > br:nth-child(2)')
        .should(($el) => {
            const orderid = $el.text()
            expect(orderid).to.not.include('#')
        })
        cy.log(orderid) // Object{5}
        //email = cy.get('#maincontainer > div > div > div > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1) > br:nth-child(10)').text()
        cy.log(email)
    })

})

function Adddata(name, lastname, email, teleph, fax, company, address, city, zip)
{
    cy.get('#guestFrm_firstname').type(name)
    cy.get('#guestFrm_lastname').type(lastname)
    cy.get('#guestFrm_email').type(email)
    cy.get('#guestFrm_telephone').type(teleph)
    cy.get('#guestFrm_fax').type(fax)
    cy.get('#guestFrm_company').type(company)
    cy.get('#guestFrm_address_1').type(address)
    cy.get('#guestFrm_city').type(city)
    cy.get('#guestFrm_country_id').select('Romania').should('have.value','175')
    cy.get('#guestFrm_zone_id').select('Suceava').should('have.value', '2714')
    cy.get('#guestFrm_postcode').type(zip)
}