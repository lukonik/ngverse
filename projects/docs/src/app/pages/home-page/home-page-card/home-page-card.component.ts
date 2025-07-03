import { CardComponent } from '@/ui/card/card.component';
import { FontIconComponent } from '@/ui/font-icon/font-icon.component';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'doc-home-page-card',
  imports: [CardComponent, FontIconComponent, RouterLink],
  templateUrl: './home-page-card.component.html',
  styleUrl: './home-page-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageCardComponent {
  label = input.required<string>();
  link = input.required<string>();
}
