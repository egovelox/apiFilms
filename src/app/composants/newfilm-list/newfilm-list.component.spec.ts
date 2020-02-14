import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfilmListComponent } from './newfilm-list.component';

describe('NewfilmListComponent', () => {
  let component: NewfilmListComponent;
  let fixture: ComponentFixture<NewfilmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfilmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfilmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
