
describe('Register and Login functionality', () => {
  beforeEach(() => {
    
    cy.visit('https://automationteststore.com/')
  })
  
    it('Register account.', () => {

      cy.get("#customer_menu_top")
        .click()
      
        cy.get("#accountFrm > fieldset > button")
        .contains("Continue").click()
  
        //Adding data
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type('Pinzaru')
        cy.get('#AccountFrm_lastname').should('have.class', 'form-control').type('Iulian')
        cy.get('#AccountFrm_email').should('have.class', 'form-control').type('iulipinzaru@gmail.com')
        cy.get('#AccountFrm_telephone').should('have.class', 'form-control').type('0769662763')
        cy.get('#AccountFrm_fax').should('have.class', 'form-control').type('-')
        cy.get('#AccountFrm_company').should('have.class', 'form-control').type('SC TEST SRL')
        cy.get('#AccountFrm_address_1').should('have.class', 'form-control').type('STR Tipografiei 1')
        cy.get('#AccountFrm_address_2').should('have.class', 'form-control').type('-')
        cy.get('#AccountFrm_city').should('have.class', 'form-control').type('Radauti')
  
        cy.get('#AccountFrm_country_id').should('have.class', 'form-control')
          .select('Romania').should('have.value','175')
        cy.get('#AccountFrm_zone_id').should('have.class', 'form-control')
          .select('Suceava').should('have.value', '2714')
  
        cy.get('#AccountFrm_postcode').should('have.class', 'form-control').type('725400')
        cy.get('#AccountFrm_loginname').should('have.class', 'form-control').type('IulianPinzaru')
        cy.get('#AccountFrm_password').should('have.class', 'form-control').type('12345678')
        cy.get('#AccountFrm_confirm').should('have.class', 'form-control').type('12345678')
        cy.get('#AccountFrm_newsletter1').should('have.value', '1').click()
        cy.get('#AccountFrm_agree').should('have.value', '1').click()
        cy.get('#AccountFrm > div.form-group > div > div > button').contains('Continue').click()
  })

    it('Login', () => {
      cy.get("#customer_menu_top")
      .click()

      cy.get('#loginFrm_loginname').should('have.class', 'form-control').type('IulianPinzaru')
      cy.get('#loginFrm_password').should('have.class', 'form-control').type('12345678')
      cy.get('#loginFrm > fieldset > button').contains('Login').click()

      if(cy.get('#customer_menu_top > li > a > div').contains('Pinzaru'))
      {
        cy.log('Login Succesful')
      }

    })

    

it('Validation for Register with invalid data. ( Ascii characters, invalid email, number )',() =>{
  
  cy.get("#customer_menu_top")
    .click()
  
    cy.get("#accountFrm > fieldset > button")
    .contains("Continue").click()
  //Tryin' to register with invalid data.
  cy.get('#AccountFrm_lastname').should('have.class', 'form-control').type('Iulian┘') // Ascii characters
  cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type('∞²╚±B╞á') // Ascii characters
  cy.get('#AccountFrm_email').should('have.class', 'form-control').type('iulipinzaru') // invalid email
  cy.get('#AccountFrm_telephone').should('have.class', 'form-control').type('076966276') // invalid number
  cy.get('#AccountFrm_fax').should('have.class', 'form-control').type('abcderf') // invalid fax ( only numbers )
  cy.get('#AccountFrm_company').should('have.class', 'form-control').type('SCSA3∞3') // Ascii characters
  cy.get('#AccountFrm_address_1').should('have.class', 'form-control').type('STR∞ Tipografiei 1') //Ascii characters
  cy.get('#AccountFrm_address_2').should('have.class', 'form-control').type('∞') // Ascii characters ( field not required ) 
  cy.get('#AccountFrm_city').should('have.class', 'form-control').type('Radauti■') // Ascii characters

  cy.get('#AccountFrm_country_id').should('have.class', 'form-control')
    .select('Romania').should('have.value','175')
  cy.get('#AccountFrm_zone_id').should('have.class', 'form-control')
    .select('Suceava').should('have.value', '2714')

  cy.get('#AccountFrm_postcode').should('have.class', 'form-control').type('000033') //invalid postal code for Country
  cy.get('#AccountFrm_loginname').should('have.class', 'form-control').type('Iuli∞G≥0') // Ascii characters
  cy.get('#AccountFrm_password').should('have.class', 'form-control').type('12345678:∞') // Ascii characters
  cy.get('#AccountFrm_confirm').should('have.class', 'form-control').type('12345678:∞') // Ascii characters
  cy.get('#AccountFrm_newsletter1').should('have.value', '1').click()
  cy.get('#AccountFrm_agree').should('have.value', '1').click()
  cy.get('#AccountFrm > div.form-group > div > div > button').contains('Continue').click()


  if(cy.get('.alert'))
  {
  cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger')
      .contains('Login name must be alphanumeric only and between 5 and 64 characters!')
  cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger')
      .contains('Email Address does not appear to be valid!')
  }
  else
  {
      cy.log('It should display an alert')
  }
  
  
 
  
})

    it('Validation for Register with all fields empty.', () => {

      cy.get("#customer_menu_top")
        .click()
      
        cy.get("#accountFrm > fieldset > button")
        .contains("Continue").click()
  
        //Tryin' to Register an account with all fields empty.
        cy.get('#AccountFrm_agree').should('have.value', '1').click()
        cy.get('#AccountFrm > div.form-group > div > div > button').contains('Continue').click()


        if(cy.get('.alert'))
        {
        cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger')
          .contains('Login name must be alphanumeric only and between 5 and 64 characters!')
          .contains('First Name must be between 1 and 32 characters!')
          .contains('Last Name must be between 1 and 32 characters!')
          .contains('Email Address does not appear to be valid!')
          .contains('Address 1 must be between 3 and 128 characters!')
          .contains('City must be between 3 and 128 characters!')
          .contains('Zip/postal code must be between 3 and 10 characters!')
          .contains('Please select a region / state!')
          .contains('Password must be between 4 and 20 characters!')
        }
        else
        {
            cy.log('It should display an alert')
        }
      
  })

      it('Validation for Register with Boundary values. #1',() =>{

        cy.get("#customer_menu_top")
        .click()
      
        cy.get("#accountFrm > fieldset > button")
        .contains("Continue").click()
  
        //Adding data using Boundary method
        //Name and Last name with 33 characters
        cy.get("#AccountFrm_firstname").should('have.class', 'form-control').type('123456789012345678901234567890121')
        cy.get('#AccountFrm_lastname').should('have.class', 'form-control').type('123456789012345678901234567890121')
        cy.get('#AccountFrm_email').should('have.class', 'form-control').type('iulipinzaru@gmail.com')
        cy.get('#AccountFrm_telephone').should('have.class', 'form-control').type('0769662763')
        cy.get('#AccountFrm_fax').should('have.class', 'form-control').type('-')
        cy.get('#AccountFrm_company').should('have.class', 'form-control').type('SC TEST SRL')
        //Address and City with 130 characters.
        cy.get('#AccountFrm_address_1').should('have.class', 'form-control').type('opsdrtzjpiyxxwukxxlznekfdetoxosskntgedhivuscijjevocysloamxbdrudiiurmoazhqlegfytfopqhuwatflcderjmmdbygknjzjbrvetybvnpnidxrnolxqhcmw')
        cy.get('#AccountFrm_address_2').should('have.class', 'form-control').type('-')
        cy.get('#AccountFrm_city').should('have.class', 'form-control').type('opsdrtzjpiyxxwukxxlznekfdetoxosskntgedhivuscijjevocysloamxbdrudiiurmoazhqlegfytfopqhuwatflcderjmmdbygknjzjbrvetybvnpnidxrnolxqhcmw')
  
        cy.get('#AccountFrm_country_id').should('have.class', 'form-control')
          .select('Romania').should('have.value','175')
        cy.get('#AccountFrm_zone_id').should('have.class', 'form-control')
          .select('Suceava').should('have.value', '2714')
        
        //Postal code with 2 characters.
        cy.get('#AccountFrm_postcode').should('have.class', 'form-control').type('00')
        cy.get('#AccountFrm_loginname').should('have.class', 'form-control').type('IulianPinzaru')
        //Password with 3 chars.
        cy.get('#AccountFrm_password').should('have.class', 'form-control').type('123')
        cy.get('#AccountFrm_confirm').should('have.class', 'form-control').type('123')
        cy.get('#AccountFrm_newsletter1').should('have.value', '1').click()
        cy.get('#AccountFrm_agree').should('have.value', '1').click()
        cy.get('#AccountFrm > div.form-group > div > div > button').contains('Continue').click()
        
        if(cy.get('.alert'))
        {
        cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger')
          .contains('First Name must be between 1 and 32 characters!')
          .contains('Last Name must be between 1 and 32 characters!')
          .contains('Address 1 must be between 3 and 128 characters!')
          .contains('City must be between 3 and 128 characters!')
          .contains('Zip/postal code must be between 3 and 10 characters!')
          .contains('Password must be between 4 and 20 characters!')
        }
        else
        {
            cy.log('It should display an alert')
        }


      })

      it('Validation for Register with Boundary values. #2',() =>{ 

        cy.get("#customer_menu_top")
        .click()
      
        cy.get("#accountFrm > fieldset > button")
        .contains("Continue").click()
  
        //Adding data using Boundary method
        //Name and Last name with 0 characters
        cy.get('#AccountFrm_email').should('have.class', 'form-control').type('iulipinzaru@gmail.com')
        cy.get('#AccountFrm_telephone').should('have.class', 'form-control').type('0769662763')
        cy.get('#AccountFrm_fax').should('have.class', 'form-control').type('-')
        cy.get('#AccountFrm_company').should('have.class', 'form-control').type('SC TEST SRL')
        //Address and City with 2 characters.
        cy.get('#AccountFrm_address_1').should('have.class', 'form-control').type('12')
        cy.get('#AccountFrm_address_2').should('have.class', 'form-control').type('-')
        cy.get('#AccountFrm_city').should('have.class', 'form-control').type('12')
  
        cy.get('#AccountFrm_country_id').should('have.class', 'form-control')
          .select('Romania').should('have.value','175')
        cy.get('#AccountFrm_zone_id').should('have.class', 'form-control')
          .select('Suceava').should('have.value', '2714')
        
        //Postal code with 11 characters.
        cy.get('#AccountFrm_postcode').should('have.class', 'form-control').type('12345678901')
        cy.get('#AccountFrm_loginname').should('have.class', 'form-control').type('IulianPinzaru')
        //Password with 21 chars.
        cy.get('#AccountFrm_password').should('have.class', 'form-control').type('123456789012345678901')
        cy.get('#AccountFrm_confirm').should('have.class', 'form-control').type('123456789012345678901')
        cy.get('#AccountFrm_newsletter1').should('have.value', '1').click()
        cy.get('#AccountFrm_agree').should('have.value', '1').click()
        cy.get('#AccountFrm > div.form-group > div > div > button').contains('Continue').click()

        if(cy.get('.alert'))
        {
        cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger')
          .contains('First Name must be between 1 and 32 characters!')
          .contains('Last Name must be between 1 and 32 characters!')
          .contains('Address 1 must be between 3 and 128 characters!')
          .contains('City must be between 3 and 128 characters!')
          .contains('Password must be between 4 and 20 characters!')
        }
        else
        {
            cy.log('It should display an alert')
        }
        // it pass for postal code > 11

      })
      


      it('Validation for Login functionality with Ascii chars at Login name.', () => {
        cy.get("#customer_menu_top")
        .click()
        //"Login name" contains ascii characters.
        cy.get('#loginFrm_loginname').should('have.class', 'form-control').type('IulianPinzaru∞')
        cy.get('#loginFrm_password').should('have.class', 'form-control').type('12345678')
        cy.get('#loginFrm > fieldset > button').contains('Login').click()
        
        if(cy.get('.alert'))
        {
            cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger')
            .contains('Error: Incorrect login or password provided.')
        }
    
    
      })
    
      it('Validation for Login functionality with Email istead of Login name.', () => {
        cy.get("#customer_menu_top")
        .click()
        //"Login name" contains email instead of Login name.
        cy.get('#loginFrm_loginname').should('have.class', 'form-control').type('iulipinzaru@gmail.com')
        cy.get('#loginFrm_password').should('have.class', 'form-control').type('12345678')
        cy.get('#loginFrm > fieldset > button').contains('Login').click()
    
        if(cy.get('.alert'))
        {
            cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger')
            .contains('Error: Incorrect login or password provided.')
        }
    
      })
      
      it('Validation for Login functionality with wrong password.', () => {
        cy.get("#customer_menu_top")
        .click()
        // Tryin' to connect with the wrong password.
        cy.get('#loginFrm_loginname').should('have.class', 'form-control').type('IulianPinzaru')
        cy.get('#loginFrm_password').should('have.class', 'form-control').type('123456789')
        cy.get('#loginFrm > fieldset > button').contains('Login').click()
    
        if(cy.get('.alert'))
        {
            cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger')
            .contains('Error: Incorrect login or password provided.')
        }
    
      })
    
    
      it('Validation for Login Functionality with all data empty', () => {
        cy.get("#customer_menu_top")
        .click()
        // Tryin' to connect all data empty.
        cy.get('#loginFrm > fieldset > button').contains('Login').click()
    
        if(cy.get('.alert'))
        {
            cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger')
            .contains('Error: Incorrect login or password provided.')
        }
    
      })
    
      it('Validation for Login Functionality with invalid name and password.', () => {
        cy.get("#customer_menu_top")
        .click()
        // Tryin' to connect with Login name and password invalid.
        cy.get('#loginFrm_loginname').should('have.class', 'form-control').type('IulianPinzaru2')
        cy.get('#loginFrm_password').should('have.class', 'form-control').type('123456781')
        cy.get('#loginFrm > fieldset > button').contains('Login').click()
    
        if(cy.get('.alert'))
        {
            cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger')
            .contains('Error: Incorrect login or password provided.')
        }
      })



})

