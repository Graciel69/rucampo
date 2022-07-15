import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEncargoComponent } from './crear-encargo.component';

describe('CrearEncargoComponent', () => {
  let component: CrearEncargoComponent;
  let fixture: ComponentFixture<CrearEncargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEncargoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEncargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
