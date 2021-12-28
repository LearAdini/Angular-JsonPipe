import { Component, OnInit } from '@angular/core';
import UsersJson from '../../assets/users.json';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent implements OnInit {
  getUsers(special:any):void{
  special.innerText = JSON.stringify(UsersJson).replace(/,|}|{|\\/g, "\n");
}  

constructor() { }

ngOnInit(): void { }

  // getUsers(special:any):void 
  // {  
  //   fetch("../../assets/users.json")
  //   .then( data => special.innerText = `All Users:
  //   ${JSON.stringify(UsersJson).replace(/,|}|{|\\/g, "\n")}`, 
  //   error => console.log(error))
  //   .catch(err =>console.log(err));  
  // }

  // getDocument():any{    
  //   let currentElement = document.querySelector("#special");
  //   return currentElement;
  // }
}
