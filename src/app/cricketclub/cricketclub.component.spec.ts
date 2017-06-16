import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketclubComponent } from './cricketclub.component';

describe('CricketclubComponent', () => {
  let component: CricketclubComponent;
  let fixture: ComponentFixture<CricketclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
