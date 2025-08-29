import { AccordionBodyComponent } from '@/ui/accordion/accordion-body.component';
import { AccordionItemComponent } from '@/ui/accordion/accordion-item.component';
import { AccordionComponent } from '@/ui/accordion/accordion.component';
import { ButtonComponent } from '@/ui/button/button.component';
import { CheckboxComponent } from '@/ui/checkbox/checkbox.component';
import { IconComponent } from '@/ui/icon/icon.component';
import { InputDirective } from '@/ui/input/input.directive';
import { OtpInputComponent } from '@/ui/otp-input/otp-input.component';
import { SkeletonComponent } from '@/ui/skeleton/skeleton.component';
import { SwitchComponent } from '@/ui/switch/switch.component';
import { TabGroupComponent } from '@/ui/tab/tab-group.component';
import { TabPanelComponent } from '@/ui/tab/tab-panel/tab-panel.component';
import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { HomePageCardComponent } from './home-page-card/home-page-card.component';

@Component({
  selector: 'doc-home-page',
  imports: [
    RouterLink,
    ButtonComponent,
    InputDirective,
    CheckboxComponent,
    SwitchComponent,
    IconComponent,
    HomePageCardComponent,
    OtpInputComponent,
    AccordionComponent,
    AccordionBodyComponent,
    AccordionItemComponent,
    TabPanelComponent,
    TabGroupComponent,
    SkeletonComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  title = inject(Title);
  meta = inject(Meta);
  document = inject(DOCUMENT);

  constructor() {
    this.title.setTitle('ngverse');

    this.meta.addTags([
      { property: 'og:title', content: 'NgVerse' },
      {
        property: 'og:description',
        content: 'Collection of Angular components',
      },
      {
        property: 'og:image',
        content: 'https://lukonik.github.io/ngverse/logo.png',
      },
      { property: 'og:image:alt', content: 'NgVerse logo' },
      { property: 'og:url', content: this.document.location.href },
      { property: 'og:type', content: 'website' },
    ]);
  }
}
