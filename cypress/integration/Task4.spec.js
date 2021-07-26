import { register, Login, slider } from "../support/POM/POM.spec"
import * as jsarray from "../fixtures/date.json"

describe('My own tests',()=>{

    beforeEach(() => {
      
        cy.visit('https://automationteststore.com/')
      })
    
    it('Check slide container from the Home Page',()=>{
        //check if buttons work and validate if images are visible.
        for(let i=0;i<5;i++){
            slider.rightarrowclick().click({force:true})
            slider.banner().should('be.visible')
        }

        for(let i=0;i<5;i++){
            slider.leftarrowclick().click({force:true})
            slider.banner().should('be.visible')
        }
    })

    it('Check social media pages.', ()=>{

        Cypress.config('chromeWebSecurity', 'false');

        //checking buttons
        /* This is editing target but isn't loading the page.
        slider.facebook().should('have.class', 'facebook', 'have.title', 'facebook').then(function($input){
            $input[0].setAttribute('target', '_self')
          })
          .should('have.attr', 'target', '_self').click()
         //Protocol error (http)
        slider.facebook().then(($a)=>{
            const url = $a.prop('href')
            cy.visit(url)
        })
        
        //won't load
        slider.facebook().should('have.class', 'facebook', 'have.title', 'facebook')
        .invoke('removeAttr', 'target')
        slider.facebook().click()
        */ 

        slider.facebook().should('have.class', 'facebook', 'have.title', 'facebook').click()
        slider.twitter().should('have.class', 'twitter', 'have.title', 'Twitter').click()

        //checking status
        slider.facebook().should('have.class', 'facebook', 'have.title', 'facebook').then(($a)=>{
            const url = $a.prop('href')

            cy.request(url).then(($url)=>{
                expect($url).to.have.property('status', 200)

            })
        })

        slider.twitter().then(($a)=>{
            const url = $a.prop('href')

            cy.request(url).then(($url)=>{
                expect($url).to.have.property('status', 200)

            })
        })

        slider.linkedin().then(($a)=>{
            const url = $a.prop('href')

            cy.request(url).then(($el)=>{
                expect($el).to.have.property('status', 200)

            })
        })

    })

    it('Check notifications',()=>{
        //login
        Login.customermenu().click()
        Login.enterloginname().type(jsarray.loginname)
        Login.enterpassword().type(jsarray.password)
        Login.selectbutton().contains('Login').click({force:true})
        //notifications
        slider.enternotifpage().click({force:true})
        slider.selectcheckboxemailnotif().should('have.value', '1')
        slider.selectbutton().contains('Continue').click()
        slider.alert().contains('Success: Your notification settings has been successfully updated!')
        
    })
})