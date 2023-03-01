import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUnitTestsComponent } from './api-unit-tests.component';

describe('ApiUnitTestsComponent', () => {
  let component: ApiUnitTestsComponent;
  let fixture: ComponentFixture<ApiUnitTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUnitTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUnitTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
