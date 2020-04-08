import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidoventaCreatePage } from './pedidoventa-create.page';

describe('PedidoventaCreatePage', () => {
  let component: PedidoventaCreatePage;
  let fixture: ComponentFixture<PedidoventaCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoventaCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoventaCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
