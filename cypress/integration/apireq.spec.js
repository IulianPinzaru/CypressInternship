var res = []
describe('API Request', ()=>{
    beforeEach(() => {
      
        cy.visit('https://automationteststore.com/')
      })

    it('Api Request', ()=>{
        cy.request('https://petstore.swagger.io/v2/store/inventory').then((res) =>{
            expect(res).to.have.property('status', 200)
            console.log(res.body)
            expect(res.body).to.not.be.null
            /*expect(res.body).to.include('123')
            expect(res.body).to.include('sold')
            expect(res.body).to.include('string')
            expect(res.body).to.include('pending')
            expect(res.body).to.include('available')
            */
            Object.entries(res.body).forEach(element =>{
                cy.log(element[0] + ' ' + element[1])
            })

            });

            

        })
    })
