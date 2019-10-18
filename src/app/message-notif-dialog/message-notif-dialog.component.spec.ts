import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNotifDialogComponent } from './message-notif-dialog.component';

describe('MessageNotifDialogComponent', () => {
  let component: MessageNotifDialogComponent;
  let fixture: ComponentFixture<MessageNotifDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageNotifDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageNotifDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
