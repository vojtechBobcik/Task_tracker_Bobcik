import { Component, Input, Output, EventEmitter } from '@angular/core';

import type { User } from './Types/User.type';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    var UserInfo = {
      id: this.user.id,
      name: this.user.name,
    };
    this.select.emit(UserInfo);
  }
}