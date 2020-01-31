import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Backstab319Page } from './backstab319.page';

describe('Backstab319Page', () => {
  let component: Backstab319Page;
  let fixture: ComponentFixture<Backstab319Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Backstab319Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Backstab319Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
