import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCarousselComponent } from './app-caroussel.component';

describe('AppCarousselComponent', () => {
  let component: AppCarousselComponent;
  let fixture: ComponentFixture<AppCarousselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCarousselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
