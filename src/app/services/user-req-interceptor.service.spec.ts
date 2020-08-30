import { TestBed } from '@angular/core/testing';

import { UserReqInterceptorService } from './user-req-interceptor.service';

describe('UserReqInterceptorService', () => {
  let service: UserReqInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserReqInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
