import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightercardsComponent } from './fightercards.component';

describe('FightercardsComponent', () => {
  let component: FightercardsComponent;
  let fixture: ComponentFixture<FightercardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightercardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightercardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
