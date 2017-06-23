import { TestBed, inject } from '@angular/core/testing';

import { ServProjetsService } from './serv-projets.service';

describe('ServProjetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServProjetsService]
    });
  });

  it('should ...', inject([ServProjetsService], (service: ServProjetsService) => {
    expect(service).toBeTruthy();
  }));
});
