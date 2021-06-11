import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowNewComponent } from './tv-show-new.component';

describe('TvShowNewComponent', () => {
  let component: TvShowNewComponent;
  let fixture: ComponentFixture<TvShowNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
