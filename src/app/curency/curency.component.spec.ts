import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurencyComponent } from './curency.component';

describe('CurencyComponent', () => {
  let component: CurencyComponent;
  let fixture: ComponentFixture<CurencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
