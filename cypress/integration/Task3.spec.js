var search = 'CURLS TO STRAIGHT SHAMPOO';
var orderid = [], email, i, str = [];
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

        cy.get('.contentpanel > :nth-child(1) > .table > tbody > tr > :nth-child(1)').invoke('text')
        .then((text) => {
            orderid = text.substring(text.indexOf('#')+ '#'.length, text.indexOf('Status'))
            orderid = orderid.trim() 
            email = text.substring(text.indexOf('E-Mail')+'E-Mail'.length, text.indexOf('Telephone'))
            email = email.trim()
            cy.log(orderid)
            cy.log(email)
        })

    })

    it('Brand selection and sorting', ()=>{
        cy.get('#brandcarousal > li:nth-child(1) > div.image > a > img').click()
        cy.get('#sort').select('p.price-ASC')
        cy.get(':nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').contains('BeneFit Girl Meets Pearl')
        cy.get(':nth-child(2) > .fixed_wrapper > .fixed > .prdocutname').contains('Benefit Bella Bamba')
        cy.get(':nth-child(3) > .fixed_wrapper > .fixed > .prdocutname').contains('Product with stock locations')
        
        //getting the price and comparing.
        cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > div > div.pricenew')
        .invoke('text')
        .then((text)=>{
            str.push(text.substring(text.indexOf('$')+'$'.length, text.length))
            parseFloat(str)
        })

        cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(2) > div.thumbnail > div.pricetag.jumbotron > div > div')
        .invoke('text')
        .then((text)=>{
            str.push(text.substring(text.indexOf('$')+'$'.length, text.length))
            parseFloat(str)
            
        })

        cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(3) > div.thumbnail > div.pricetag.jumbotron > div > div')
        .invoke('text')
        .then((text)=>{
            str.push(text.substring(text.indexOf('$')+'$'.length, text.length))
            parseFloat(str)
        })

        cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(4) > div.thumbnail > div.pricetag.jumbotron > div > div')
        .invoke('text')
        .then((text)=>{
            str.push(text.substring(text.indexOf('$')+'$'.length, text.length))
            parseFloat(str)
        })

        cy.wrap(str).then((rez)=>{
            cy.log(verifysort(rez))
        })


    })

    it('Checking Out of stock items', () =>{
        cy.get('#categorymenu > nav > ul > li:nth-child(4) > div > ul:nth-child(1) > li:nth-child(5) > a').click({force:true})
        cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div > div.fixed_wrapper > div > a')
        .click()

        cy.get('#product > fieldset > div:nth-child(4) > ul > li > span').should('have.class', 'nostock')
        .contains('Out of Stock')
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

function verifysort(str)
{
    for(let i=0;i<str.length;i++)
    {
        str[i] = parseFloat(str[i])
    }
    for(let i = 0; i< str.length;i++)
        {
            let ok = 0
            if(str[i] < str[i+1] && i != str.length-1)
            {
                ok=1
            }
            else
            {
                cy.log('Elements are not sorted in the right way.')
                break;
            }
            if(i == str.length-1 && ok == 1)
            {
                cy.log('Elements are sorted in the right way.')
            }
        }
}