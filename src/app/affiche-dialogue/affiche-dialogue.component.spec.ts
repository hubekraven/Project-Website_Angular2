import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheDialogueComponent } from './affiche-dialogue.component';

describe('AfficheDialogueComponent', () => {
  let component: AfficheDialogueComponent;
  let fixture: ComponentFixture<AfficheDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
