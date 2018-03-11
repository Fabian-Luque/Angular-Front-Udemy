import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { User } from "../../models/user";
import { GLOBAL } from "../../services/global";
import { UserService } from "../../services/user.service";

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit{
    public title: String;
    public user: User;
    public status: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ){
        this.title = 'Registro';
        this.user = new User('','','','','','ROLE_USER','');
    }

    ngOnInit(){
        console.log('Register.component cargado!!!');
    }

    onSubmit(){
        this._userService.register(this.user).subscribe(
            response =>{
                console.log(response);
                console.log(this.user);
                
                if(response.user && response.user._id){
                    this.status = 'Success';
                }else{
                    this.status = 'Error';
                }
                this.user = new User('','','','','','ROLE_USER','');
            },err => {
                console.log(<any>err);
            }
        );

    }
}
