var res = []
describe('API Request', ()=>{
    beforeEach(() => {
      
        cy.visit('https://automationteststore.com/')
      })

    it('Api Request', ()=>{
        cy.request('https://petstore.swagger.io/v2/store/inventory').then((res) =>{
            
            expect(res).to.have.property('status', 200)
            expect(res.body).to.not.be.null

            Object.entries(res.body).forEach(element =>{
                cy.log(element[0] + ' ' + element[1])
            })

            });

            

        })
    })
