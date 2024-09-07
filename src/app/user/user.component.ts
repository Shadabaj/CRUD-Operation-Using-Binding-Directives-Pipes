import { Component } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent {

  users_array: User[];
  user: User | any;
  IsEdit: Boolean;

  constructor() {
    this.users_array = [
      { UserId: 120, UserName: 'SHADAB', Address: 'Andheri' },
      { UserId: 121, UserName: 'Anil', Address: 'Govandi' },
      { UserId: 123, UserName: 'Gaurav', Address: 'Khargar' },
      { UserId: 124, UserName: 'Pooja', Address: 'Badlapur' }

    ];
    this.user = new User();
    this.IsEdit = false;
  }

  AddUser() {
    // Check if the user object has any properties
    if (Object.keys(this.user).length == 0) {
      alert(`Name & Address Cannot Be Blank`);
    }
    else {
      this.users_array.push(this.user);
      alert(`Name ${this.user.UserName} & Address ${this.user.Address} had been Added Successfully `)
      this.user = new User();
    }
  }

  UpdatedUser() {
    for (let i = 0; i < this.users_array.length; i++) {
      const element = this.users_array[i];
      if (element.UserId == this.user.UserId) {
        this.users_array[i].UserId = this.user.UserId;
        this.users_array[i].UserName = this.user.UserName;
        this.users_array[i].Address = this.user.Address;
        this.user = new User();
        this.IsEdit = true;
        break;
      }
    }
  }

  EditUser(ID: number) {
    const Existing_user = this.users_array.find(u => u.UserId == ID);
    if (Existing_user != null) {
      this.user = Object.create(Existing_user);
      this.IsEdit = true;
    }
  }

  DeleteUser(id:number,Name:string)
  {
    if (confirm(`Are You Sure want to Delete the User ${Name} ?`)) {
      let index= this.users_array.findIndex(u=>u.UserId==id);
      this.users_array.splice(index,1);
      alert(`The UserName ${Name} had Been Deleted Successfully !`);
    }
  }
}
