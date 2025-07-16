import { InputDirective } from '@/ui/input/input.directive';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'storybook-input',
  standalone: true,
  imports: [CommonModule, InputDirective],
  template: ` <input appInput />`,
})
export class InputStory {}
