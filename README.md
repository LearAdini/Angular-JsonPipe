# Display Json data after button click in Angular

![showAllUsers](https://user-images.githubusercontent.com/80118008/147559232-d889aa07-e2bf-403d-9381-6379e1df4aee.gif)

**You can either download the source code and run `ng serve` to view the results or you can follow this steps:**


First create a new Angular app by using `ng new client`.

After packages are installed cd into **'client'** and run `ng generate component users`.

After **'users'** folder is generate go to **app-routing.module.ts** inside **'app'** folder, and add the following lines:

```
import { UsersComponent } from './users/users.component';

const routes: Routes = [{path:'users',component:UsersComponent}];
```

Now create a new Json file called `users.json`, And move it into **'src/assets'**.

Now navigate to `tsconfig.json`,

Under **`"compilerOptions": {`** Add these two lines:

    `"resolveJsonModule": true,
    "esModuleInterop": true,`

Now Go to **client -> src -> users** and open `users.component.ts`:

Add `import UsersJson from '../../assets/users.json';`.

And add inside UsersComponent export class:

```
 users: any;

 getUsers():void {
    this.users = UsersJson;
  } 
```
# getUsers(special:any) Function
Fetching the json data and assign it to -> this.users.


Now delete all content inside `app.component.html` in **'app'** folder, and paste this inside:

```
<nav>
<a routerLink="users"> Users</a>
</nav>
<router-outlet></router-outlet>
```

Now go to **'users'** folder and go to `users.component.html`, and paste this inside:

```
<div class="wrapper">
    <button (click)="getUsers()">Show All Users</button>
</div>

<pre *ngIf="users">{{ users | json }}</pre> 
```
When button is clicked calling getUsers function and 'pre' element will display the Json data using JsonPipe.


Inside `users.component.css` paste this:

```
.wrapper{
    text-align:center;
}

button{
    transition:transform 0.2s;
    animation-duration: 1.4s;
    animation-delay:0.5s;
    animation-timing-function:ease-in-out;
    background:rgb(221, 217, 217);
    color:rgb(46, 46, 46);  
    border-radius:5px;
    border:1.8px solid rgb(102, 102, 102);
}
button:hover{
    transform:scale(1.1); 
    cursor:pointer;   
    background:rgb(250, 46, 46);
    color:rgb(221, 217, 217); 
    border:1.8px solid rgb(27, 27, 27);
  }

  h4{
      font-family: monospace;
      font-size:25px;
      font-weight:bold;
  }
```

Run `ng serve --ssl true --open` and nvaigate to `https://localhost:yourport/users`.

And finally we can click on **"Show All Users"** to show all json data on screen,the data displayed on the selected element by the query selector in the getDocument function.

