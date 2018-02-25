import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveGiphyComponent } from './retrieve-giphy.component';

describe('RetrieveGiphyComponent', () => {
  let component: RetrieveGiphyComponent;
  let fixture: ComponentFixture<RetrieveGiphyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveGiphyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveGiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
