import { TestBed } from '@angular/core/testing';

import { ProductsApiService } from './products-api.service';

describe('ProductsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsApiService = TestBed.get(ProductsApiService);
    expect(service).toBeTruthy();
  });
});
