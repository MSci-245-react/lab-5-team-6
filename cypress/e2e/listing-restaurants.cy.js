
//works now
describe('Listing Restaurants', () => {
    it('shows restaurants from the server', () => {
        const sushiPlace = 'Sushi Place';
        const pizzaPlace = 'Pizza Place';
        cy.intercept('GET', 'https://api.outsidein.dev/tIPk37H5cTrXKGetT8SJL7O6YNdPR0DZ/restaurants', [
            {id: 1, name: sushiPlace},
            {id: 2, name: pizzaPlace},
        ]);
        cy.visit('/');
        cy.contains(sushiPlace);
        cy.contains(pizzaPlace);
    });
});
    