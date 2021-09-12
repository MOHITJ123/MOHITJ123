import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmploysComponent } from './add-employs.component';

describe('AddEmploysComponent', () => {
  let component: AddEmploysComponent;
  let fixture: ComponentFixture<AddEmploysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmploysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmploysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
