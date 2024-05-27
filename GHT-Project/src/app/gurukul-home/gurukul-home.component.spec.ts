import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GurukulHomeComponent } from './gurukul-home.component';

describe('GurukulHomeComponent', () => {
  let component: GurukulHomeComponent;
  let fixture: ComponentFixture<GurukulHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GurukulHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GurukulHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
