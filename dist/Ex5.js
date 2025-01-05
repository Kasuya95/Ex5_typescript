"use strict";
class DiscountRate {
    constructor() {
        this.serviceDiscountPermium = 0.2;
        this.serviceDiscountGold = 0.15;
        this.serviceDiscountSilver = 0.1;
        this.productDiscountPremium = 0.1;
        this.productDiscountGold = 0.1;
        this.productDiscountSilver = 0.1;
    }
    getServiceDiscountRate(type) {
        let level = 0;
        if (type === 'Permium') {
            level = this.serviceDiscountPermium * 100;
        }
        else if (type === 'Gold') {
            level = this.serviceDiscountGold * 100;
        }
        else if (type === 'Silver') {
            level = this.serviceDiscountSilver * 100;
        }
        else {
            console.log(new Error(`Invalid`));
        }
        return level;
    }
    getProductDiscountRate(type) {
        let rate = 0;
        if (type === 'Premium') {
            rate = this.productDiscountPremium;
        }
        else if (type === 'Gold') {
            rate = this.productDiscountGold;
        }
        else if (type === 'Silver') {
            rate = this.productDiscountSilver;
        }
        else {
            console.log(new Error(`Invalid`));
        }
        return rate;
    }
}
class Customers {
    constructor(name, member, memberType) {
        this.member = false;
        this.name = name;
        this.member = member;
        this.memberType = memberType;
    }
    getName() {
        return this.name;
    }
    isMember() {
        return this.member;
    }
    setMember(member) {
        this.member = member;
    }
    getMemberType() {
        return this.memberType;
    }
    setMemberType(memberType) {
        this.memberType = memberType;
    }
    toString() {
        return `Customer [name=${this.name}, member=${this.member}, memberType=${this.memberType}]`;
    }
}
class Visit {
    constructor(customers, date, serviceExpense, productExpense) {
        this.customers = customers;
        this.date = date;
        this.serviceExpense = serviceExpense;
        this.productExpense = productExpense;
    }
    getName() {
        return this.customers.getName();
    }
    getServiceExpense() {
        return this.serviceExpense;
    }
    setServiceExpense(ex) {
        this.serviceExpense = ex;
    }
    getProductExpense() {
        return this.productExpense;
    }
    setProductExpense(ex) {
        this.productExpense = ex;
    }
    getTotalExpense() {
        return this.serviceExpense + this.productExpense;
    }
    toString() {
        return `Visit [customer=${this.customers.toString()}, date=${this.date}, serviceExpense=${this.serviceExpense}, productExpense=${this.productExpense}]`;
    }
}
module.exports = { DiscountRate, Customers, Visit };
