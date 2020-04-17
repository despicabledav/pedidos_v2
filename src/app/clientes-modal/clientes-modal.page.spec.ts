import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesModalPage } from './clientes-modal.page';

describe('ClientesModalPage', () => {
  let component: ClientesModalPage;
  let fixture: ComponentFixture<ClientesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
