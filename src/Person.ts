export class Person {
    private name: string;
    private tel: string;
    private mail: string;
    private firm: string;
    private job: string;

    private img: string;

    constructor(name: string, tel: string, mail: string, firm: string, job: string, img: string) {
        this.name = name;
        this.tel = tel;
        this.mail = mail;
        this.firm = firm;
        this.job = job;
        this.img = img;
    }

    getName(): string {
        return this.name;
    }

    getTel(): string {
        return this.name;
    }

    getMail(): string {
        return this.mail;
    }

    getFirm(): string {
        return this.firm;
    }

    getJob(): string {
        return this.job;
    }
}