console.log("******* Mediator *******");

function SalesPerson(name) {
    this.name = name;
    this.auctionRoom = null;
}

SalesPerson.prototype = {
    offer: (item, price) => {
        console.log(`${item} at ${price}`);
    },
    sold: buyer => {
        console.log(`Sold to ${buyer}`);
    }
}

function Buyer(name) {
    this.name = name;
    this.auctionRoom = null;
}

Buyer.prototype = {
    offer: (money, buyer) => {
        console.log(`${buyer.name} offers $${money}`);
    }
}


function Auction () {
    let buyers = {};

    return {
        register: user => {
            buyers[user.name] = user;
            user.auctionRoom = this;
        }
    }
}

const pacoSalesPerson = new SalesPerson("Paco");
const luis = new Buyer("Luis");
const juan = new Buyer("Juan");
const auction = new Auction(pacoSalesPerson, luis);

//register this is the mediator
auction.register(luis);
auction.register(juan);
auction.register(pacoSalesPerson);


pacoSalesPerson.offer("Challenger", 45000);

luis.offer(45000, luis);
juan.offer(48000, juan);
juan.offer(50000, luis);
pacoSalesPerson.sold("Luis");