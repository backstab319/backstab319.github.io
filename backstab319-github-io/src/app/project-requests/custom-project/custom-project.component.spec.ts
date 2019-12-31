import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProjectComponent } from './custom-project.component';

describe('CustomProjectComponent', () => {
  let component: CustomProjectComponent;
  let fixture: ComponentFixture<CustomProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
