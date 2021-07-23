export class slider{
    
    static login(){
        cy.get("#customer_menu_top").click()

      cy.get('#loginFrm_loginname').should('have.class', 'form-control').type('IulianPinzaru')
      cy.get('#loginFrm_password').should('have.class', 'form-control').type('12345678')
      cy.get('#loginFrm > fieldset > button').contains('Login').click()
    }

    static rightarrow(){
        for(let i=0;i<4;i++){
        let rightarrow = cy.get('.nextArrow').click({force:true})
        cy.get('#banner_slides > div > p > img').should('be.visible')
        }
    }

    static leftarrow(){
        for(let i=0;i<5;i++){
            let leftarrow = cy.get('.prevArrow').click({force:true})
            cy.get('#banner_slides > div > p > img').should('be.visible')
            cy.wait(500) // i used cy.wait because images aren't loading faster than cy.get
        }
    }

    static facebook(){
        cy.get('.header_block > .social_icons > .facebook').should('have.class', 'facebook', 'have.title', 'facebook').click()
    }

    static twitter(){
        cy.get('.header_block > .social_icons > .twitter').click()
    }

    static linkedin(){
        cy.get('.header_block > .social_icons > .linkedin').click()
    }

    static notifications(){
        this.login()
        cy.get('#customer_menu_top > li > ul > li:nth-child(9) > a > i').click({force:true})
        cy.get('#imFrm_settingsnewsletteremail').should('have.value', '1')
        cy.get('button').contains('Continue').click()
        cy.get('div.alert.alert-success').contains('Success: Your notification settings has been successfully updated!')
        
    }
}
