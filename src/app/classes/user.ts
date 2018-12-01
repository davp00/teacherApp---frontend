export class User {
    private token: String;
    public name: String;
    public type;
    public email: String;
    public img_url: String;

    constructor()
    {

    }

    public getToken(): any
    {
        return this.token;
    }

    public setToken(token: String): void
    {
        this.token = token;
    }
}
