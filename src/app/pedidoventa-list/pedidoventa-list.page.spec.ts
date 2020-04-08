import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidoventaListPage } from './pedidoventa-list.page';

describe('PedidoventaListPage', () => {
  let component: PedidoventaListPage;
  let fixture: ComponentFixture<PedidoventaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoventaListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoventaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
