import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheaderRightComponent } from './subheader-right.component';

describe('SubheaderRightComponent', () => {
  let component: SubheaderRightComponent;
  let fixture: ComponentFixture<SubheaderRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubheaderRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheaderRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
