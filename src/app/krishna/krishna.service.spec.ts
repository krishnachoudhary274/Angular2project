import { TestBed, inject } from '@angular/core/testing';

import { KrishnaService } from './krishna.service';

describe('KrishnaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KrishnaService]
    });
  });

  it('should be created', inject([KrishnaService], (service: KrishnaService) => {
    expect(service).toBeTruthy();
  }));
});
