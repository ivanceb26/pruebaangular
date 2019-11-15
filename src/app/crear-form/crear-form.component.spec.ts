import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFormComponent } from './crear-form.component';

describe('CrearFormComponent', () => {
  let component: CrearFormComponent;
  let fixture: ComponentFixture<CrearFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
