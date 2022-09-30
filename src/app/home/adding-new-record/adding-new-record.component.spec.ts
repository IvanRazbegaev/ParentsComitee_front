import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingNewRecordComponent } from './adding-new-record.component';

describe('AddingNewRecordComponent', () => {
  let component: AddingNewRecordComponent;
  let fixture: ComponentFixture<AddingNewRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingNewRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingNewRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
