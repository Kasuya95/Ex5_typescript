"use strict";
class Customer {
    constructor(id, name, discount) {
        this.id = id;
        this.name = name;
        this.discount = discount;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDiscount() {
        return this.discount;
    }
    setDiscount(discount) {
        this.discount = discount;
    }
    toString() {
        return `${this.getName}${this.id}${this.discount * 100}%`;
    }
}
class Invoice {
    constructor(id, customer, amount) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
    getId() {
        return this.id;
    }
    getCustomer() {
        return this.customer;
    }
    setCustomer(customer) {
        this.customer = customer;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getCustomerId() {
        return this.customer.getId();
    }
    getCustomerName() {
        return this.customer.getName();
    }
    getCustomerDiscount() {
        return this.customer.getDiscount();
    }
    getAmountAfterDiscount() {
        return this.amount * (1 - this.customer.getDiscount());
    }
    toString() {
        return `Invoice [id=${this.id}, customer=${this.customer.getName()}${this.customer.getId()}${this.customer.getDiscount() * 100}%, amount=${this.amount}, after discount=${this.getAmountAfterDiscount()}]`;
    }
}
module.exports = { Customer, Invoice };
