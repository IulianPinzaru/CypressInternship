export class slider{
    
    static rightarrowclick()
    {
        return cy.get('.nextArrow')
    }

    static leftarrowclick(){
        return cy.get('.prevArrow')
    }

    static banner()
    {
        return cy.get('#banner_slides > div > p > img', {timeout: 10000})
    }

    static facebook(){
        return cy.get('.header_block > .social_icons > .facebook', {timeout: 10000})
    }

    static twitter(){
        return cy.get('.header_block > .social_icons > .twitter', {timeout: 10000})
    }

    static linkedin(){
        return cy.get('.header_block > .social_icons > .linkedin')
    }

    static enternotifpage(){
        return cy.get('#customer_menu_top > li > ul > li:nth-child(9) > a > i')
    }

    static selectcheckboxemailnotif(){
        return cy.get('#imFrm_settingsnewsletteremail')
    }

    static selectbutton(){
        return cy.get('button')
    }
    

    static alert(){
        return cy.get('div.alert.alert-success')
    }
    
}

export class Login{

    static customermenu(){
        return cy.get("#customer_menu_top")
     }

     static enterloginname()
     {
         return cy.get('#loginFrm_loginname')
     }
 
     static enterpassword()
     {
         return cy.get('#loginFrm_password')
     }

     static selectbutton(){
        return cy.get('button')
    }
 
}

export class register{

    static customermenu(){
        return cy.get("#customer_menu_top")
     }

    static firstname(){
        return cy.get("#AccountFrm_firstname")
    }
    
    static lastname(){
        return cy.get('#AccountFrm_lastname')
    }

    static email(){
        return cy.get('#AccountFrm_email')
    }

    static telephone(){
        return cy.get('#AccountFrm_telephone')
    }

    static fax(){
        return cy.get('#AccountFrm_fax')
    }

    static company(){
        return cy.get('#AccountFrm_company')
    }

    static address1(){
        return cy.get('#AccountFrm_address_1')
    }

    static address2(){
        return cy.get('#AccountFrm_address_2')
    }

    static city(){
        return cy.get('#AccountFrm_city')
    }

    static country(){
        return cy.get('#AccountFrm_country_id')
    }

    static zone(){
        return cy.get('#AccountFrm_zone_id')
    }

    static postalcode(){
        return cy.get('#AccountFrm_postcode')
    }

    static loginname(){
        return cy.get('#AccountFrm_loginname')
    }

    static password(){
        return cy.get('#AccountFrm_password')
    }

    static confirmpassword(){
        return cy.get('#AccountFrm_confirm')
    }

    static newsletter(){
        return cy.get('#AccountFrm_newsletter1')
    }

    static agree(){
        return cy.get('#AccountFrm_agree')
    }

    static alert(){
        return cy.get('div.alert.alert-error.alert-danger')
    }

}