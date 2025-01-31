import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdderComponent } from './adder.component';

describe('AdderComponent', () => {
  let component: AdderComponent;
  let fixture: ComponentFixture<AdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
