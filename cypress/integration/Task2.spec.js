export var nume;
describe('Write cypress tests for registered customers',()=>{
        
  beforeEach(() =>{
    cy.visit('https://automationteststore.com/')
    cy.get("#customer_menu_top")
  .click()

  cy.get('#loginFrm_loginname').should('have.class', 'form-control').type('IulianPinzaru')
  cy.get('#loginFrm_password').should('have.class', 'form-control').type('12345678')
  cy.get('#loginFrm > fieldset > button').contains('Login').click()

  if(cy.get('#customer_menu_top > li > a > div').contains('Iulian'))
      {
        cy.log('Login Succesful')
      }
  })

it.skip('Update account details',()=>{

  cy.get('#maincontainer > div > div.column_right.col-md-3.col-xs-12.mt20 > div.sidewidt > div > ul > li:nth-child(3) > a')
      .should('have.attr', 'href', 'https://automationteststore.com/index.php?rt=account/edit').contains('Edit account details').click()

  //clearing old data from fields.
  cy.get('#AccountFrm_firstname').should('have.class', 'form-control').clear()
  cy.get('#AccountFrm_lastname').should('have.class', 'form-control').clear()
  cy.get('#AccountFrm_email').should('have.class', 'form-control').clear()
  cy.get('#AccountFrm_telephone').should('have.class', 'form-control').clear()
  cy.get('#AccountFrm_fax').should('have.class', 'form-control').clear()

  //Adding new data.
  cy.get('#AccountFrm_firstname').should('have.class', 'form-control').type('Iulian')
  nume = cy.get('#AccountFrm_firstname').should('have.class', 'form-control');
  cy.get('#AccountFrm_lastname').should('have.class', 'form-control').type('Pinzaru')
  cy.get('#AccountFrm_email').should('have.class', 'form-control').type('iulian.pinzaru@yahoo.com')
  cy.get('#AccountFrm_telephone').should('have.class', 'form-control').type('0787878765')
  cy.get('#AccountFrm_fax').should('have.class', 'form-control').type('0769663763')

  //Continue

  cy.get('#AccountFrm > div.form-group > div > button').contains('Continue').click()

    if(cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > h1 > span.subtext').contains('Iulian'))
      {
        cy.log('Account updated succesfull!')
      }

    if(cy.get('.alert')){
      cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.alert.alert-success')
      .contains('Success: Your account has been successfully updated.')
    }
    else{
      cy.log('It should be an Alert here.')
    }
    

})
  it.skip('Updating address book',() =>{

    cy.get('#maincontainer > div > div.column_right.col-md-3.col-xs-12.mt20 > div.sidewidt > div > ul > li:nth-child(5) > a')
      .should('have.attr', 'href', 'https://automationteststore.com/index.php?rt=account/address').click()
    
    //Edit process
    cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div.col-md-12.col-xs-12.pull-right.mt20.mb20 > a.btn.btn-orange.pull-right')
      .contains('New Address').click()
    cy.get('#AddressFrm_firstname').should('have.class', 'form-control').type('Iulian')
    cy.get('#AddressFrm_lastname').should('have.class', 'form-control').type('Pinzaru')
    cy.get('#AddressFrm_company').should('have.class', 'form-control').type('SC TEST2 SRL')
    cy.get('#AddressFrm_address_1').should('have.class', 'form-control').type('Str Tipografiei 1')
    cy.get('#AddressFrm_country_id').should('have.class', 'form-control')
      .select('Romania').should('have.value', '175')
    cy.get('#AddressFrm_zone_id').should('have.class', 'form-control')
      .select('Suceava').should('have.value', '2714')
    cy.get('#AddressFrm_city').should('have.class', 'form-control').type('Radauti')
    cy.get('#AddressFrm_postcode').should('have.class', 'form-control').type('725400')
    cy.get('#AddressFrm_default1').should('have.value', '1').click()
    cy.get('#AddressFrm > div > fieldset > div:nth-child(11) > div > button').contains('Continue').click()

    if(cy.get('.alert'))
    {
      cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.alert.alert-success')
        .contains('Your address has been successfully inserted')
    }
    else{
      cy.log('It should be an alert here.')
    }

    //verify if the old address exists.
    cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.contentpanel > div:nth-child(2) > table > tbody > tr > td:nth-child(1) > address')
      .contains('Iulian Pinzaru')
      .contains('SC TEST2 SRL')
      .contains('Str Tipografiei 2')
      .contains('Radauti 725400')
      .contains('Suceava')
      .contains('Romania')

    //verify if the new address is correct
    cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.contentpanel > div:nth-child(3) > table > tbody > tr > td:nth-child(1) > address')
      .contains('Iulian Pinzaru')
      .contains('SC TEST2 SRL')
      .contains('Str Tipografiei 1')
      .contains('Radauti 725400')
      .contains('Suceava')
      .contains('Romania')
    
      // Deleting the old adress
    
    cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.contentpanel > div:nth-child(2) > table > tbody > tr > td.pull-right > button.btn.btn-default')
      .contains('Delete').click()

  })

  it.skip('Wishlist', () =>{
    cy.get('#categorymenu > nav > ul > li:nth-child(6) > a').should('have.attr', 'href', 'https://automationteststore.com/index.php?rt=product/category&path=58')
      .click()

    //Addin' items
    cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.fixed_wrapper > div > a')
      .should('have.attr', 'href','https://automationteststore.com/index.php?rt=product/product&path=58&product_id=78')
      .contains('ck IN2U Eau De Toilette Spray for Him').click()
    
    cy.get('#product > fieldset > div.wishlist > a.wishlist_add.btn.btn-large').contains('Add to wish list').click()
    
    if(cy.get('#product > fieldset > div.wishlist > a.wishlist_remove.btn.btn-large').contains('Remove from wish list'))
    {
      cy.log('First product added succesfull.')
    }
    else
    {
      cy.log('The product is not added.')
    }

    //back to previos page.
    cy.get('body > div > div:nth-child(2) > div:nth-child(2) > section > ul > li:nth-child(2) > a')
      .should('have.attr', 'href', 'https://automationteststore.com/index.php?rt=product/category&path=58')
      .click()

    cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(2) > div.fixed_wrapper > div > a')
      .should('have.attr', 'href', 'https://automationteststore.com/index.php?rt=product/product&path=58&product_id=76')
      .contains('Men+Care Clean Comfort Deodorant').click()

    cy.get('#product > fieldset > div.wishlist > a.wishlist_add.btn.btn-large').contains('Add to wish list').click()
    
    if(cy.get('#product > fieldset > div.wishlist > a.wishlist_remove.btn.btn-large').contains('Remove from wish list'))
    {
      cy.log('First product added succesfull.')
    }
    else
    {
      cy.log('The product is not added.')
    }
    
    //verify wishlist
      cy.get('#customer_menu_top > li > ul > li:nth-child(2) > a')
        .should('have.attr', 'href', 'https://automationteststore.com/index.php?rt=account/wishlist')
        .click({force: true})

      if(!cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div > table > tbody > tr.wishlist_78 > td:nth-child(2) > a').should('have.attr', 'href', 'https://automationteststore.com/index.php?rt=product/product&product_id=78'))
        {
          cy.log('Not the right product')
        }
        else{
          cy.log('The right product')
        }

        if(!cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div > table > tbody > tr.wishlist_76 > td:nth-child(2) > a').should('have.attr', 'href', 'https://automationteststore.com/index.php?rt=product/product&product_id=76'))
        {
          cy.log('Not the right product')
        }
        else{
          cy.log('The right product')
        }

        //deleting one product
        cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div > table > tbody > tr.wishlist_76 > td:nth-child(6) > a.btn.btn-sm.btn-default.btn-remove > i')
          .click()

  })

  it.skip('Purchase',() =>{

    //Addin' items to chart

    cy.get('#categorymenu > nav > ul > li:nth-child(2) > div > ul:nth-child(1) > li:nth-child(2) > a')
      .should('have.attr', 'href','https://automationteststore.com/index.php?rt=product/category&path=68_70')
      .click({force: true})

    if(cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(2) > div.fixed_wrapper > div > a').contains('Product with options and stock locations'))
    {
      cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(2) > div.fixed_wrapper > div > a')
        .click()
      cy.get('#option352').select('779').should('have.value', '779')
      cy.get('#product > fieldset > div:nth-child(5) > ul > li > a').contains('Add to Cart').click()

    }

    cy.get('#categorymenu > nav > ul > li:nth-child(3) > div > ul:nth-child(1) > li:nth-child(3) > a')
      .should('have.attr', 'href', 'https://automationteststore.com/index.php?rt=product/category&path=36_38')
      .click({force: true})
    
    if(cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(2) > div.fixed_wrapper > div > a').contains('Delicate Oil-Free Powder Blush'))
    {
      cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(2) > div.fixed_wrapper > div > a')
        .click()
      cy.get('#product > fieldset > div:nth-child(5) > ul > li > a').contains('Add to Cart').click()

    }

    cy.get('#categorymenu > nav > ul > li:nth-child(7) > div > ul:nth-child(1) > li:nth-child(1) > a')
      .should('have.attr', 'href', 'https://automationteststore.com/index.php?rt=product/category&path=52_54')
      .click({force:true})
    
    if(cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.fixed_wrapper > div > a').contains('Seaweed Conditioner'))
    {
      cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a > i')
        .click()
      cy.get('#product > fieldset > div:nth-child(5) > ul > li > a').contains('Add to Cart').click()

    }
    
    cy.get('#categorymenu > nav > ul > li:nth-child(8) > div > ul:nth-child(1) > li:nth-child(2) > a')
      .should('have.attr', 'href', 'https://automationteststore.com/index.php?rt=product/category&path=65_67')
      .click({force: true})

    if(cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(3) > div.fixed_wrapper > div > a'))
    {
      cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(3) > div.fixed_wrapper > div > a')
      .click()
      cy.get('#product > fieldset > div:nth-child(4) > ul > li > a').should('have.class', 'cart').click({force : true})
    }

    //verify if items are have been added correctly.

    cy.get('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr')
    .each(()=>{
      cy.contains('Product with options and stock locations')
      cy.contains('Delicate Oil-Free Powder Blush')
      cy.contains('Seaweed Conditioner')
      return false
    })
      
      
     
      
    
    //Update Quantity

    cy.get('#cart_quantity6938bdb8d5c9261879ee00cec3c444c9fa').clear()
    cy.get('#cart_quantity6938bdb8d5c9261879ee00cec3c444c9fa').type('2')

    cy.get('#cart_update').click()

    if(cy.get('#cart_quantity6938bdb8d5c9261879ee00cec3c444c9fa').should('have.value', '2'))
    {
      cy.log('Quantity updated.')
    }
    

    //verify the address

    if(cy.get('#estimate_country').should('have.value', '175') && cy.get('#estimate_country_zones').should('have.value','2714') && cy.get('#estimate_postcode').should('have.value','725400'))
    {
      cy.log('Address is ok')
    }
    else
    {
      cy.log('Address is not ok.')
    }
    cy.get('#cart_checkout1').click()

    cy.get('#checkout_btn').contains('Confirm Order').click()

    //check order status.
    cy.get('#maincontainer > div > div > div > div > section > p:nth-child(4) > a').contains('invoice page').click()
    if(cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1)').contains('Pending'))
    {
      cy.log('Correct status')
    }
    else{
      cy.log('Incorrect status')
    }
  })


})

