import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragtableComponent } from './dragtable.component';

describe('DragtableComponent', () => {
  let component: DragtableComponent;
  let fixture: ComponentFixture<DragtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragtableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
