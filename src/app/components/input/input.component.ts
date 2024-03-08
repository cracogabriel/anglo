import { NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgStyle, NgIf],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input({ required: false }) width: string = 'auto';
  @Input({ required: false }) height: string = '24px';
  @Input({ required: false }) backgroundColor: string = '';
  @Input({ required: false }) borderRadius: string = '8px';
  @Input({ required: false }) label: string | undefined;
  @Input({ required: false }) value: string | undefined;

  @Output() onChange: EventEmitter<string> = new EventEmitter();

  handleChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange.emit(value);
  }
}
