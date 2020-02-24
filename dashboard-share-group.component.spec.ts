import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardShareGroupComponent } from './dashboard-share-group.component';

describe('ShareGroupComponent', () => {
  let component: DashboardShareGroupComponent;
  let fixture: ComponentFixture<DashboardShareGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardShareGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardShareGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
