import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAudiosComponent } from './my-audios.component';

describe('MyAudiosComponent', () => {
  let component: MyAudiosComponent;
  let fixture: ComponentFixture<MyAudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAudiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
