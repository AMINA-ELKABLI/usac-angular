import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChildsComponent } from './list-childs.component';

describe('ListChildsComponent', () => {
  let component: ListChildsComponent;
  let fixture: ComponentFixture<ListChildsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChildsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
