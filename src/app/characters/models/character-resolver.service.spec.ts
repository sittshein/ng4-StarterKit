import { TestBed, inject } from '@angular/core/testing';

import { CharacterResolverService } from './character-resolver.service';

describe('CharacterResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterResolverService]
    });
  });

  it('should be created', inject([CharacterResolverService], (service: CharacterResolverService) => {
    expect(service).toBeTruthy();
  }));
});
