import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixProjectComponent } from './fix-project.component';

describe('FixProjectComponent', () => {
  let component: FixProjectComponent;
  let fixture: ComponentFixture<FixProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
