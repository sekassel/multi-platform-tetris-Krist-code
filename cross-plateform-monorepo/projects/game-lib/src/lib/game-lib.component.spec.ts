import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLibComponent } from './game-lib.component';

describe('GameLibComponent', () => {
  let component: GameLibComponent;
  let fixture: ComponentFixture<GameLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
