import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsloComponent } from './gslo.component';

describe('GsloComponent', () => {
  let component: GsloComponent;
  let fixture: ComponentFixture<GsloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
