import {TestBed, inject} from '@angular/core/testing';

import {StorageService} from './storage.service';

describe('ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [StorageService]});
  });

  it('should be created', inject([StorageService], (service : ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
