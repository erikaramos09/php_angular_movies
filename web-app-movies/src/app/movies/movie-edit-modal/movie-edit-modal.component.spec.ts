import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieEditModalComponent } from './movie-edit-modal.component';

describe('MovieEditModalComponent', () => {
  let component: MovieEditModalComponent;
  let fixture: ComponentFixture<MovieEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
