import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipClientsComponent } from './vip-clients.component';

describe('VipClientsComponent', () => {
  let component: VipClientsComponent;
  let fixture: ComponentFixture<VipClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipClientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VipClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
