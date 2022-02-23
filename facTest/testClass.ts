export class TestClass{
    dates: Set<Date>;
    subject: string;
    description: string;
    
    constructor(subject: string, date: Date, description: string ){
        this.subject = subject;
        this.dates = new Set<Date>();
        this.dates.add(date);
        this.description = description;
    }

    addTestDate(date: Date){
        if(!this.dates.has(date)){
            this.dates.add(date);
        }
    }

    getTestDates(){
        return new Set(this.dates.values());
    }
}
