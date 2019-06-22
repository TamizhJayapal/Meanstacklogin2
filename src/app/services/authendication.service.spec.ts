import { TestBed } from '@angular/core/testing';

import { AuthendicationService } from './authendication.service';

describe('AuthendicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthendicationService = TestBed.get(AuthendicationService);
    expect(service).toBeTruthy();
  });
});
