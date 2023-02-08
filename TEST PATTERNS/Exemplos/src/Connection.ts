import pgp from "pgpromise";

export default class Connection{
    pgp:any;
    constructor(){
        this.pgp = pgp()("postgres://postgres:123456@localhost:8080/app");
}
    query (statement: string, parameters: any){
        return this.pgp.query(statement, parameters);
    }
} 