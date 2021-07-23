import { slider } from './POM.spec.js'


describe('My own tests',()=>{

    beforeEach(() => {
      
        cy.visit('https://automationteststore.com/')
      })
    
    it('Check slide container from the Home Page',()=>{
        //check if buttons work and validate if images are visible.
        slider.rightarrow();
        slider.leftarrow();
    })

    it('Check social media pages.', ()=>{
        Cypress.config('chromeWebSecurity',false);
        slider.facebook();
        slider.twitter();
        slider.linkedin();
    })

    it('Check notifications',()=>{
        slider.notifications();
    })
})