import { TestBed } from '@angular/core/testing';

import { ListarService } from './listar.service';

describe('ListarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarService = TestBed.get(ListarService);
    expect(service).toBeTruthy();
  });
});
