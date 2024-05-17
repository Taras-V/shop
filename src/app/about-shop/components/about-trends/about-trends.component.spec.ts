import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTrendsComponent } from './about-trends.component';

describe('AboutTrendsComponent', () => {
  let component: AboutTrendsComponent;
  let fixture: ComponentFixture<AboutTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTrendsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
