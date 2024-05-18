import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltemplateBackComponent } from './alltemplate-back.component';

describe('AlltemplateBackComponent', () => {
  let component: AlltemplateBackComponent;
  let fixture: ComponentFixture<AlltemplateBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlltemplateBackComponent]
    });
    fixture = TestBed.createComponent(AlltemplateBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
