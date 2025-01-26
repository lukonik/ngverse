import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  model,
  signal,
  viewChild,
} from '@angular/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { PopoverOriginDirective } from './popover-origin.directive';
import { PopoverComponent } from './popover.component';

describe('PopoverComponent', () => {
  let component: PopoverTestComponent;
  let fixture: ComponentFixture<PopoverTestComponent>;
  let overlayContainer: OverlayContainer;
  let document: Document;

  function getOverlayContainerEl() {
    return overlayContainer.getContainerElement();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverTestComponent, PopoverComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverTestComponent);
    component = fixture.componentInstance;
    overlayContainer = TestBed.inject(OverlayContainer);
    document = TestBed.inject(DOCUMENT);
  });

  it('should throw error without origin or coordinates', () => {
    expect(() => {
      const comp = TestBed.createComponent(PopoverComponent);
      comp.componentInstance.isOpen.set(true);
      comp.detectChanges();
    }).toThrowError('origin or coordinates must be provided');
  });

  it('should create with origin', () => {
    expect(component.popover).toBeTruthy();
  });
  it('should open popover on IsOpen=true', fakeAsync(() => {
    component.isOpen.set(true);
    fixture.detectChanges();
    tick(0);
    const overlayPopover = getOverlayContainerEl().querySelector(
      '.popover'
    ) as HTMLElement;
    expect(overlayPopover).toBeTruthy();
    expect(overlayPopover.textContent).toBe('I am First Popover content');
    fixture.detectChanges();
  }));
  it('should close popover on IsOpen=false', fakeAsync(() => {
    component.isOpen.set(true);
    fixture.detectChanges();
    tick(0);
    component.isOpen.set(false);
    fixture.detectChanges();
    tick(0);
    const overlayPopover = getOverlayContainerEl().querySelector(
      '.popover'
    ) as HTMLElement;
    expect(overlayPopover).toBeNull();
  }));
  it('should update isOpen value, on outside close of popover', fakeAsync(() => {
    component.isOpen.set(true);
    component.outsideClose.set(true);
    fixture.detectChanges();
    tick(0);
    fixture.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    tick(0);
    expect(component.isOpen()).toBeFalse();
  }));
  it('should close popover on outside click if outsideClose is true', fakeAsync(() => {
    component.isOpen.set(true);
    component.outsideClose.set(true);
    fixture.detectChanges();
    tick();
    fixture.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    tick();
    const overlayPopover = getOverlayContainerEl().querySelector(
      '.popover'
    ) as HTMLElement;
    expect(overlayPopover).toBeNull();
  }));
  it('should close popover on escape click if outsideClose is true', fakeAsync(() => {
    component.isOpen.set(true);
    component.outsideClose.set(true);
    fixture.detectChanges();
    tick();
    document.body.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape' })
    );
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    tick();
    const overlayPopover = getOverlayContainerEl().querySelector(
      '.popover'
    ) as HTMLElement;
    expect(overlayPopover).toBeNull();
  }));
  it('should not close popover on outside click if outsideClose is false', fakeAsync(() => {
    component.isOpen.set(true);
    component.outsideClose.set(false);
    fixture.detectChanges();
    tick();
    fixture.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    tick();
    const overlayPopover = getOverlayContainerEl().querySelector(
      '.popover'
    ) as HTMLElement;
    expect(overlayPopover).toBeTruthy();
  }));
  it('should block scroll if blockScroll is true', fakeAsync(() => {
    //We need to increase the body height to be able to scroll
    //otherwise block strategy doesn't block the scroll
    document.body.style.height = '1000px';
    component.isOpen.set(true);
    component.blockScroll.set(true);
    fixture.detectChanges();
    tick();
    expect(document.documentElement).toHaveClass('cdk-global-scrollblock');
  }));
  it('should add style class when styled=true', fakeAsync(() => {
    component.isOpen.set(true);
    component.styled.set(true);
    fixture.detectChanges();
    tick();
    const overlayPopover = getOverlayContainerEl().querySelector(
      '.popover'
    ) as HTMLElement;
    expect(overlayPopover).toHaveClass('styled');
  }));
  it('should add backdrop when hasBackdrop=true', fakeAsync(() => {
    component.isOpen.set(true);
    component.hasBackdrop.set(true);
    fixture.detectChanges();
    tick();
    const overlayBackdrop = getOverlayContainerEl().querySelector(
      '.cdk-overlay-backdrop'
    ) as HTMLElement;
    expect(overlayBackdrop).toBeTruthy();
  }));
  it("should emit 'close' event", fakeAsync(() => {
    const spy = jasmine.createSpy('closedSpty');
    component.isOpen.set(true);
    fixture.detectChanges();
    tick();
    component.popover().closed.subscribe(spy);
    component.isOpen.set(false);
    fixture.detectChanges();
    tick();
    expect(spy).toHaveBeenCalled();
  }));
  it("should emit 'opened' event", fakeAsync(() => {
    const spy = jasmine.createSpy('openedSpy');
    component.popover().opened.subscribe(spy);
    component.isOpen.set(true);
    fixture.detectChanges();
    tick();
    expect(spy).toHaveBeenCalled();
  }));
  it('should restore focus on restoreFocus=true', fakeAsync(() => {
    component.isOpen.set(true);
    component.restoreFocus.set(true);
    fixture.detectChanges();
    tick();
    component.isOpen.set(false);
    fixture.detectChanges();
    tick();
    expect(document.activeElement).toBe(
      fixture.nativeElement.querySelector('.popover-button')
    );
  }));
  it('should stretch to origin if stretchToOrigin=true', fakeAsync(() => {
    component.isOpen.set(true);
    component.stretchToOrigin.set(true);
    fixture.detectChanges();
    tick();
    const overlayPopover = getOverlayContainerEl().querySelector(
      '.popover'
    ) as HTMLElement;
    const buttonElement = fixture.nativeElement.querySelector(
      '.popover-button'
    ) as HTMLElement;

    const tolerance = 5;

    expect(
      Math.abs(overlayPopover.clientWidth - buttonElement.clientWidth)
    ).toBeLessThanOrEqual(tolerance);
  }));
});

@Component({
  template: `
    <button appPopoverOrigin #origin1="appPopoverOrigin" class="popover-button">
      Popover 1 origin
    </button>
    <app-popover
      #popover1
      [origin]="origin1"
      [(isOpen)]="isOpen"
      id="popover1"
      [outsideClose]="outsideClose()"
      [blockScroll]="blockScroll()"
      [styled]="styled()"
      [hasBackdrop]="hasBackdrop()"
      [restoreFocus]="restoreFocus()"
      [stretchToOrigin]="stretchToOrigin()"
    >
      <h1>I am First Popover content</h1>
    </app-popover>
  `,
  imports: [PopoverComponent, PopoverOriginDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class PopoverTestComponent {
  popover = viewChild.required<PopoverComponent>('popover1');
  isOpen = model(false);
  outsideClose = signal(false);
  blockScroll = signal(false);
  styled = signal(false);
  hasBackdrop = signal(false);
  restoreFocus = signal(false);
  stretchToOrigin = signal(false);
}
