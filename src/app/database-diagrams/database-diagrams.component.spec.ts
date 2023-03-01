import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseDiagramsComponent } from './database-diagrams.component';

describe('DatabaseDiagramsComponent', () => {
  let component: DatabaseDiagramsComponent;
  let fixture: ComponentFixture<DatabaseDiagramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseDiagramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseDiagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
