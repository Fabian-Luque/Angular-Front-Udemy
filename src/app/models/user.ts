export class User{
    constructor(
        public id: String,
        public name: string,
        public surname: string,
        public email: string,
        public password: string,
        public role: string,
        public image: string,
    ){}
}