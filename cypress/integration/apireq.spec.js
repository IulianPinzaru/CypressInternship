var res = []
describe('API Request', ()=>{
    beforeEach(() => {
      
        cy.visit('https://automationteststore.com/')
      })

    it('Api Request', ()=>{
        cy.request('https://petstore.swagger.io/v2/store/inventory').then((res) =>{

            Object.entries(res.body).forEach(element =>{
                cy.log(element[0] + ' ' + element[1])
            })

            });

            

        })
    })
