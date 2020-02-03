import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterExpensesPage } from './enter-expenses.page';

describe('EnterExpensesPage', () => {
  let component: EnterExpensesPage;
  let fixture: ComponentFixture<EnterExpensesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterExpensesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterExpensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
