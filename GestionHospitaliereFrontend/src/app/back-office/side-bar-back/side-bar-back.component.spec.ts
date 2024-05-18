import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarBackComponent } from './side-bar-back.component';

describe('SideBarBackComponent', () => {
  let component: SideBarBackComponent;
  let fixture: ComponentFixture<SideBarBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarBackComponent]
    });
    fixture = TestBed.createComponent(SideBarBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
