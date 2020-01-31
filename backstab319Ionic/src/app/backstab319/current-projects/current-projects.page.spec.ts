import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentProjectsPage } from './current-projects.page';

describe('CurrentProjectsPage', () => {
  let component: CurrentProjectsPage;
  let fixture: ComponentFixture<CurrentProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentProjectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
