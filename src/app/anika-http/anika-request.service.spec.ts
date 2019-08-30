import { TestBed } from '@angular/core/testing';

import { AnikaRequestService } from './anika-request.service';

describe('AnikaRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnikaRequestService = TestBed.get(AnikaRequestService);
    expect(service).toBeTruthy();
  });
});
