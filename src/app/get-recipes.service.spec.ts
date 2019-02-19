import { TestBed } from '@angular/core/testing';

import { GetRecipesService } from './get-recipes.service';

describe('GetRecipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRecipesService = TestBed.get(GetRecipesService);
    expect(service).toBeTruthy();
  });
});
