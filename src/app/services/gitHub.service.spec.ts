import { TestBed } from '@angular/core/testing';

import { gitHubAppService } from './gitHub.service';

describe('gitHubAppService', () => {
  let service: gitHubAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(gitHubAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
