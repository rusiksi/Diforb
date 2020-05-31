import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiforbComponent } from './diforb.component';

describe('DiforbComponent', () => {
  let component: DiforbComponent;
  let fixture: ComponentFixture<DiforbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiforbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiforbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
