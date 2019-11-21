import { TestBed } from '@angular/core/testing';

import { ExitProgramService } from './exit-program.service';

describe('ExitProgramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExitProgramService = TestBed.get(ExitProgramService);
    expect(service).toBeTruthy();
  });
});
