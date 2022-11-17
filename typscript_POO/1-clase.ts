class myDate {
    constructor(
        private day : number = 28,
        private month : number = 9,
        private year : number = 2005
    ) {}

    get formatMonth(){
        const month = this.month
        if (month < 10){
            return `${this.day}/0${this.month}/${this.year}`
        }else{
            return `${this.day}/${this.month}/${this.year}`
        }
    }
    set changeMonth(newMonth : number){
        if (newMonth >= 1 && newMonth <= 12){
            this.month = newMonth
        }else{
            throw new Error("el mes no puede ser " + newMonth)
        }
    }
}
const myFECHA = new myDate(13 , 7 , 2005)
const myFECHA2 = new myDate(13 , 10 , 2005)
console.log(myFECHA2.changeMonth = 12);
console.log(myFECHA.changeMonth  = 13 );
