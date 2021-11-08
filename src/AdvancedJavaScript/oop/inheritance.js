export class Customer {
    constructor(id, customerNumber) {
        this.id = id; //prototyping
        this.customerNumber = customerNumber;
    }
}

class IndividualCustomer extends Customer {
    constructor(firstName, id, customerNumber) {
        super(id, customerNumber); //2 değeri base'e gönderir
        this.firstName = firstName;
    }
}

class CorporateCustomer extends Customer {
    constructor(companyName, id, customerNumber) {
        super(id, customerNumber); //2 değeri base'e gönderir
        this.companyName = companyName;
    }
}