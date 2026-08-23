import {
  Component,
  Input,
  // input,
  // computed,
  Output,
  EventEmitter,
} from '@angular/core';

import type { User } from '../Types/User.type';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({ required: true }) user!: User;

  // avatar = input.required<string>();
  // name = input.required<string>();

  @Output() select = new EventEmitter();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
  // imagePath = computed(() => {
  //   return `assets/users/${this.avatar()}`;
  // })

  onSelectUser() {
    var UserInfo = {
      id: this.user.id,
      name: this.user.name,
    };
    this.select.emit(UserInfo);
  }
}
