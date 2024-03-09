import { TestBed } from '@angular/core/testing';

import { MyapplyService } from './myapply.service';

describe('MyapplyService', () => {
  let service: MyapplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyapplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
