import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneInfoDialogComponent } from './zone-info-dialog.component';

describe('ZoneInfoDialogComponent', () => {
  let component: ZoneInfoDialogComponent;
  let fixture: ComponentFixture<ZoneInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
