describe('API Request', ()=>{
    beforeEach(() => {
      
        cy.visit('https://automationteststore.com/')
      })

    it('Api Request', ()=>{
        cy.request('https://petstore.swagger.io/v2/store/inventory').then((res) =>{
            console.log(res.body)

            let availableproducts = res.body.available
            let sold = res.body.sold
            let unavailable = res.body.unavailable
            let free = res.body.free
            let pending = res.body.pending
            let string = res.body.string

            cy.log('Available Products: ', availableproducts)
            cy.log('Sold items: ', sold)
            cy.log('Unavailable items: ', unavailable)
            cy.log('Free: ', free)
            cy.log('Pending: ', pending)
            cy.log('String ', string)

        })
    })
})