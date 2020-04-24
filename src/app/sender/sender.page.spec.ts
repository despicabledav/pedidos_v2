import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SenderPage } from './sender.page';

describe('SenderPage', () => {
  let component: SenderPage;
  let fixture: ComponentFixture<SenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
