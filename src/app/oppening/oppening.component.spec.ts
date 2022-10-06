import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppeningComponent } from './oppening.component';

describe('OppeningComponent', () => {
  let component: OppeningComponent;
  let fixture: ComponentFixture<OppeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OppeningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OppeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
