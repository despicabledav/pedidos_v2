import { TestBed } from '@angular/core/testing';

import { PedidoventarengService } from './pedidoventareng.service';

describe('PedidoventarengService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PedidoventarengService = TestBed.get(PedidoventarengService);
    expect(service).toBeTruthy();
  });
});
