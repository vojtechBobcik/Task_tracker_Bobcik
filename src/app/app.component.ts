import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';

  users = DUMMY_USERS;

  selectedUserId: string = '';
  selectedUserName: string ='';

  onSelectUser(userInfo: { id:string; name: string}) {
    this.selectedUserId = userInfo.id;
    this.selectedUserName = userInfo.name

    console.log(
      `Selected user with id : ${this.selectedUserId} and name ${this.selectedUserName}`
    )
  }
}
