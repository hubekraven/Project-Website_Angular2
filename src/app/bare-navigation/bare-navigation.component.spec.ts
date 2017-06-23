import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BareNavigationComponent } from './bare-navigation.component';

describe('BareNavigationComponent', () => {
  let component: BareNavigationComponent;
  let fixture: ComponentFixture<BareNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BareNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BareNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
