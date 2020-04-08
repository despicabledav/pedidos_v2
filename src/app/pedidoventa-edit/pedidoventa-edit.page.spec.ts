import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidoventaEditPage } from './pedidoventa-edit.page';

describe('PedidoventaEditPage', () => {
  let component: PedidoventaEditPage;
  let fixture: ComponentFixture<PedidoventaEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoventaEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoventaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
