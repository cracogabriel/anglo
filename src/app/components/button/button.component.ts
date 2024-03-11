import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label: string = 'Click';
  @Input() disabled: boolean = false;
  @Input() type: string = 'button';

  class = `button ${this.disabled ? 'disabled' : ''}`;
}
