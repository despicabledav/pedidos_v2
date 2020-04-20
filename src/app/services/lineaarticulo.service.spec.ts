import { TestBed } from '@angular/core/testing';

import { LineaarticuloService } from './lineaarticulo.service';

describe('LineaarticuloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineaarticuloService = TestBed.get(LineaarticuloService);
    expect(service).toBeTruthy();
  });
});
