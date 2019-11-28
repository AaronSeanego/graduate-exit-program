import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGradsComponent } from './view-grads.component';

describe('ViewGradsComponent', () => {
  let component: ViewGradsComponent;
  let fixture: ComponentFixture<ViewGradsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGradsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
