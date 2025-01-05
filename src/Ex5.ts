class DiscountRate {
    private serviceDiscountPermium: number = 0.2
    private serviceDiscountGold: number = 0.15
    private serviceDiscountSilver: number = 0.1
    private productDiscountPremium: number = 0.1
    private productDiscountGold: number = 0.1
    private productDiscountSilver: number = 0.1

    public getServiceDiscountRate(type: string):number{
        let level = 0
        if(type === 'Permium'){
            level = this.serviceDiscountPermium * 100
        }else if(type === 'Gold'){
            level = this.serviceDiscountGold * 100
        }else if (type === 'Silver'){
            level = this.serviceDiscountSilver * 100
        }else {
            console.log(new Error(`Invalid`))
        }
        return level
    }

    public getProductDiscountRate(type: string):number{
        let rate = 0
        if(type === 'Premium'){
            rate = this.productDiscountPremium
        }else if(type === 'Gold'){
            rate = this.productDiscountGold
        }else if(type === 'Silver'){
            rate = this.productDiscountSilver
        }else{
            console.log(new Error(`Invalid`))
        }
        return rate
    }
}

class Customers {
    private name: string
    private member: boolean = false
    private memberType: string

    constructor(name: string, member: boolean, memberType: string){
        this.name = name
        this.member = member
        this.memberType = memberType
    }

    public getName():string{
        return this.name
    }

    public isMember():boolean{
        return this.member
    }

    public setMember(member: boolean):void{
        this.member = member
    }

    public getMemberType():string{
        return this.memberType 
    }

    public setMemberType(memberType: string):void{
        this.memberType = memberType
    }

    public toString():string {
        return `Customer [name=${this.name}, member=${this.member}, memberType=${this.memberType}]`;
    }
}

class Visit {
    private customers: Customers
    private date: number
    private serviceExpense: number
    private productExpense: number

    constructor(customers: Customers, date: number, serviceExpense: number, productExpense: number){
        this.customers = customers
        this.date = date
        this.serviceExpense = serviceExpense
        this.productExpense = productExpense
    }

    public getName():string{
        return this.customers.getName()
    }

    public getServiceExpense():number{
        return this.serviceExpense
    }

    public setServiceExpense(ex: number):void{
        this.serviceExpense = ex
    }

    public getProductExpense():number{
        return this.productExpense
    }

    public setProductExpense(ex: number):void{
        this.productExpense = ex
    }

    public getTotalExpense():number{
        return this.serviceExpense + this. productExpense
    }

    public toString():string{
        return `Visit [customer=${this.customers.toString()}, date=${this.date}, serviceExpense=${this.serviceExpense}, productExpense=${this.productExpense}]`;
    }
}

export = { DiscountRate, Customers, Visit}