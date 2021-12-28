# Display Json data after button click via JsonPipe in Angular 

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

You can add the following list into **users.json**:

```
[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "phone": "1-463-123-4447",
      "website": "ramiro.info"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "phone": "493-170-9623 x156",
      "website": "kale.biz"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "phone": "(254)954-1289",
      "website": "demarco.info"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "phone": "210.067.6132",
      "website": "elvis.io"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "phone": "024-648-3804",
      "website": "ambrose.net"
    }
  ]
```

Now navigate to `tsconfig.json`,

Under **`"compilerOptions": {`** Add these two lines:

    `"resolveJsonModule": true,
    "esModuleInterop": true,`

Now go to **client -> src -> users** and open `users.component.ts`:

Add `import UsersJson from '../../assets/users.json';`.

And add this inside UsersComponent export class:

```
  getUsers():void {
  this.users = UsersJson;
  }
```
# 

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

<pre>{{ users | json }}</pre> 
```
When button is clicked use getUsers function,it will display the Json data from **this.users** on the element **pre**

(shortage for pretty / prettier display of data).


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


And finally we can click on **Show All Users** to display all Json data on the element **pre**.
