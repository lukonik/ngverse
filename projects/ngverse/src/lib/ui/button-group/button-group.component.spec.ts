import {
  ChangeDetectionStrategy,
  Component,
  DebugElement,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonGroupComponent } from './button-group.component';
import { ButtonGroupItemComponent } from './button-group-item.component';

describe('ButtonGroupComponent', () => {
  let fixture: ComponentFixture<ButtonGroupHarnessComponent>;
  let debugElement: DebugElement;
  let hostComponent: ButtonGroupHarnessComponent;
  let buttonGroupComponent: ButtonGroupComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ButtonGroupComponent,
        ButtonGroupItemComponent,
        ReactiveFormsModule,
      ],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonGroupHarnessComponent);
    hostComponent = fixture.componentInstance;
    debugElement = fixture.debugElement;
    buttonGroupComponent = debugElement.query(
      By.directive(ButtonGroupComponent)
    ).componentInstance as ButtonGroupComponent;

    fixture.detectChanges();
  });

  function getButtons() {
    return fixture.debugElement.queryAll(
      By.css('app-button-group-item button')
    );
  }

  it('should create the component', () => {
    expect(buttonGroupComponent).toBeTruthy();
  });

  it('should render projected items', () => {
    expect(getButtons().length).toBe(3);
  });

  it('should select the value provided by the form control', () => {
    const selectedButton = fixture.debugElement.query(
      By.css('app-button-group-item button.selected')
    );

    expect(selectedButton).toBeTruthy();
    expect(selectedButton?.nativeElement.textContent.trim()).toBe('Medium');
  });

  it('should update the form control value when selecting an item', async () => {
    const [smallButton] = getButtons();

    smallButton.nativeElement.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(hostComponent.sizeControl.value).toBe('small');
  });

  it('should update selected item when form control value changes programmatically', () => {
    hostComponent.sizeControl.setValue('small');
    fixture.detectChanges();

    const selectedButton = fixture.debugElement.query(
      By.css('app-button-group-item button.selected')
    );

    expect(selectedButton).toBeTruthy();
    expect(selectedButton?.nativeElement.textContent.trim()).toBe('Small');
  });

  it('should not change value when clicking a disabled item', () => {
    const buttons = getButtons();
    const disabledButton = buttons[2];

    disabledButton.nativeElement.click();
    fixture.detectChanges();

    expect(hostComponent.sizeControl.value).toBe('medium');
    expect(disabledButton.nativeElement.disabled).toBeTrue();
  });

  it('should disable all items when form control is disabled', () => {
    hostComponent.sizeControl.disable();
    fixture.detectChanges();

    const buttons = getButtons();
    const hostElement = debugElement.query(By.directive(ButtonGroupComponent))
      .nativeElement as HTMLElement;

    buttons.forEach((button) => {
      expect(button.nativeElement.disabled).toBeTrue();
    });
    expect(hostElement.classList).toContain('app-button-group-disabled');
  });
});

@Component({
  imports: [
    ButtonGroupComponent,
    ButtonGroupItemComponent,
    ReactiveFormsModule,
  ],
  template: `
    <app-button-group [formControl]="sizeControl">
      <app-button-group-item [itemValue]="'small'">Small</app-button-group-item>
      <app-button-group-item [itemValue]="'medium'"
        >Medium</app-button-group-item
      >
      <app-button-group-item [itemValue]="'large'" [disabled]="true"
        >Large</app-button-group-item
      >
    </app-button-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ButtonGroupHarnessComponent {
  sizeControl = new FormControl<'small' | 'medium' | 'large'>('medium', {
    nonNullable: true,
  });
}
