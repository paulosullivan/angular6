import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGroundChildComponent } from './test-ground-child.component';

describe('TestGroundChildComponent', () => {
  let component: TestGroundChildComponent;
  let fixture: ComponentFixture<TestGroundChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGroundChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGroundChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
