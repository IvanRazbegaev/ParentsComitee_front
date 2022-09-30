import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallSumDialogComponent } from './overall-sum-dialog.component';

describe('OverallSumDialogComponent', () => {
  let component: OverallSumDialogComponent;
  let fixture: ComponentFixture<OverallSumDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallSumDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallSumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
