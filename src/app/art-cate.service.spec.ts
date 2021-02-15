import { TestBed } from '@angular/core/testing';

import { ArtCateService } from './art-cate.service';

describe('ArtCateService', () => {
  let service: ArtCateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtCateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
