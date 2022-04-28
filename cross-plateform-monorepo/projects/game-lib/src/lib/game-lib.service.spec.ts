import { TestBed } from '@angular/core/testing';

import { GameLibService } from './game-lib.service';

describe('GameLibService', () => {
  let service: GameLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
