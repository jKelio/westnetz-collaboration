export class Person {
    private name: string;
    private tel: string;
    private mail: string;
    private firm: string;
    private job: string;

    constructor(name: string, tel: string, mail: string, firm: string, job: string) {
        this.name = name;
        this.tel = tel;
        this.mail = mail;
        this.firm = firm;
        this.job = job;
    }
}