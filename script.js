
const orderInput = prompt("Place order here seperated by commas.", "vanilla, vanilla, vanilla, strawberry, coffee,coffee");

const orderArray = orderInput.split(",");
const flavorAmount = {};

orderArray.forEach(flavor => {

    if (flavorAmount [flavor]) {
        flavorAmount[flavor]++;
    }
    else {
        flavorAmount[flavor] = 1;
    }

});

console.table(flavorAmount)

