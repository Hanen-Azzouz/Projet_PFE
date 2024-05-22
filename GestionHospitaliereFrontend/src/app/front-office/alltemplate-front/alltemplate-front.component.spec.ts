import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltemplateFrontComponent } from './alltemplate-front.component';

describe('AlltemplateFrontComponent', () => {
  let component: AlltemplateFrontComponent;
  let fixture: ComponentFixture<AlltemplateFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlltemplateFrontComponent]
    });
    fixture = TestBed.createComponent(AlltemplateFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
