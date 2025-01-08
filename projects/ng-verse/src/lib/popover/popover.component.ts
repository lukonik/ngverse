import { Overlay } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  OnDestroy,
  OnInit,
  output,
  Renderer2,
  signal,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { PopoverTriggerDirective } from './popover-trigger.directive';
import { POPOVER_ANIMATIONS } from './popover.animations';

type TRIGGER_COORDINATES = {
  x: number;
  y: number;
};

@Component({
  selector: 'app-popover',
  imports: [],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [POPOVER_ANIMATIONS],
})
export class PopoverComponent implements OnInit, OnDestroy, AfterViewInit {
  popover = inject(ElementRef<HTMLElement>);
  popoverEl = this.popover.nativeElement;
  private overlay = inject(Overlay);
  private renderer2 = inject(Renderer2);
  private document = inject(DOCUMENT);

  @HostBinding('attr.popover')
  bind = '';

  trigger = input<PopoverTriggerDirective>();
  isOpen = input(false);
  offsetY = input<number>(0);
  offsetX = input<number>(0);
  blockScroll = input(true);

  opened = output();
  closed = output();

  scrollSub: Subscription | undefined;

  coordinates = signal<TRIGGER_COORDINATES | undefined>(undefined);

  get popoverIsOpen() {
    return this.popoverEl.matches(':popover-open');
  }

  @HostListener('beforetoggle', ['$event'])
  onBeforeToggle(event: ToggleEvent) {
    const toggleEvent = event as ToggleEvent;
    if (toggleEvent.newState === 'open') {
      this.opened.emit();
      this.updateCoordinates();
      if (this.blockScroll()) {
        this.overlay.scrollStrategies.block().enable();
      }
      this.listenToDocumentScroll();
    } else {
      this.closed.emit();
      if (this.blockScroll()) {
        this.overlay.scrollStrategies.block().disable();
      }
    }
  }

  constructor() {
    effect(() => {
      const isOpen = this.isOpen();
      if (isOpen) {
        this.open();
      } else {
        this.hide();
      }
    });
  }
  ngAfterViewInit(): void {
    const triggerEl = this.trigger()?.el;
    if (triggerEl) {
      (triggerEl as any).popoverTargetElement = this.popoverEl;
    }
  }
  ngOnDestroy(): void {
    this.scrollSub?.unsubscribe();
  }

  ngOnInit() {
    // this.trigger()?.host.nativeElement.addEventListener('click', () => {
    //   this.open();
    // });
  }

  open(coordinates?: TRIGGER_COORDINATES) {
    this.coordinates.set(coordinates);
    if (this.popoverIsOpen) {
      return;
    }
    const popover = this.popover.nativeElement;
    popover.showPopover();
    this.listenToDocumentScroll();
  }

  hide() {
    if (this.popoverIsOpen) {
      const popover = this.popover.nativeElement;
      popover.hidePopover();
      this.scrollSub?.unsubscribe();
    }
  }

  listenToDocumentScroll() {
    this.scrollSub?.unsubscribe();
    this.scrollSub = fromEvent(this.document, 'scroll', {
      capture: true,
      passive: true,
    }).subscribe(() => {
      const trigger = this.trigger();
      if (trigger) {
        const popover = this.popover.nativeElement;

        const triggerHost = trigger.host;
        const bounds = triggerHost.nativeElement.getBoundingClientRect();

        this.renderer2.setStyle(popover, 'left', `${bounds.left}px`);
        this.renderer2.setStyle(popover, 'top', `${bounds.top + 30}px`);
      }
    });
  }

  getTriggerCoordinates(): TRIGGER_COORDINATES | undefined {
    const trigger = this.trigger();
    if (!trigger) {
      return;
    }
    const triggerEl = trigger.el;
    const bounds = triggerEl.getBoundingClientRect();
    return { x: bounds.left, y: bounds.top };
  }

  updateCoordinates() {
    const coord = this.coordinates();
    const coordinates =
      coord ?? (this.getTriggerCoordinates() as TRIGGER_COORDINATES);
    const popoverEl = this.popoverEl;
    this.renderer2.setStyle(
      popoverEl,
      'left',
      `${coordinates.x + this.offsetX()}px`
    );
    this.renderer2.setStyle(
      popoverEl,
      'top',
      `${coordinates.y + this.offsetY()}px`
    );
  }
}
