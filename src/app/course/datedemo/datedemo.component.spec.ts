import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatedemoComponent } from './datedemo.component';

describe('DatedemoComponent', () => {
  let component: DatedemoComponent;
  let fixture: ComponentFixture<DatedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
