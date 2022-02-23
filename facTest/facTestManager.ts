import { TestClass } from "./testClass";

export class FacTestManager {
    database: Map<string,  TestClass>;

    constructor(){
        this.database = new Map<string, TestClass>();
    }

    addTest(subject: string, date: Date, description: string) {
        let test: TestClass;
        if(description === null) {
            test = new TestClass(subject,date,"");
            console.log("addTest: no description test created!")
        } else {
            test = new TestClass(subject,date,description);
            console.log("addTest: test created with description!")
        }

        if(!this.database.has(subject.trim().toUpperCase())) {
            this.database.set(subject.trim().toUpperCase(), test);
            console.log("addTest: database does not have subject. Had to set")
        } else {
            this.database.get(subject.trim().toUpperCase())!.addTestDate(date);
            console.log("addTest: database  have subject. Had to get")
        }
    }

    getSubjects(){
        return new Set(this.database.values());
    }

    getTests(subject: string){
        if(this.database.has(subject.trim().toUpperCase())){
            return this.database.get(subject.trim().toUpperCase())!.getTestDates();
        }
    }
}
