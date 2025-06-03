import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCertifiedComponent } from './item-certified.component';

describe('ItemCertifiedComponent', () => {
  let component: ItemCertifiedComponent;
  let fixture: ComponentFixture<ItemCertifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCertifiedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCertifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
