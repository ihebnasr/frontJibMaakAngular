import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtCateComponent } from './art-cate.component';

describe('ArtCateComponent', () => {
  let component: ArtCateComponent;
  let fixture: ComponentFixture<ArtCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtCateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
