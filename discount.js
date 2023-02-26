/* 
1. If ticket numbers >= 100, per ticket price = 100/-
2. If ticket numbers >= 100 & <=200 , 
    First 100 tickets ---> 100/-
    Rest of the tickets ---> 90/-
3. If you purchase more than 200 tickets:
    first 100 ---> 100/-
    101-200 ---> 90/-
    200+ ---> 70/-
*/

function ticketPrice(ticketQuantity) {
    const firstPrice = 100;
    const secondPrice = 90;
    const restPrice = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * firstPrice;
    }
    else if (ticketQuantity <= 200) {
        const first100 = 100 * firstPrice;
        const restTickeQuantity = ticketQuantity - 100;
        const restTicketPrice = restTickeQuantity * secondPrice;
        const totalPrice = first100 + restTicketPrice;
        return totalPrice;
    }
    else {
        const first100 = 100 * firstPrice;
        const second100 = 100 * secondPrice;
        const restQuantity = ticketQuantity - 200;
        const restTicketPrice = restQuantity * restPrice;
        totalCost = first100 + second100 + restTicketPrice;
        return totalCost;
    }
}

const purchase1 = ticketPrice(220);
console.log('Total tickets price:', purchase1)