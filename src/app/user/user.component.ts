import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  imports: [CardComponent],
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Most companies use older versions, so this is the supported method of taking input outside of the component.
  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();  // A modern way of creating event emitter. Note: it's not a signal as input function.

  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  // This method is in newer versions and more efficient,
  // however, newer versions of angular may be adobted by only start ups!
  // name = input.required<string>();
  // avatar = input.required<string>();
  // imagePath = computed(() => '../../assets/users/' + this.avatar());
}
