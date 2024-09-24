const customers = ["Ahmad", "Lir", "Mamad", "Mertash"];

const activeCutomers = ["Ahmad", "Lir"];

const inactiveCustomers = _.difference(customers, activeCutomers);

console.log(inactiveCustomers);