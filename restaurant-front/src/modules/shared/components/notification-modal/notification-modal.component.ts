import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Notification } from '../../models/notification';
import { NotificationService } from '../../services/notification.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { UtilService } from '../../services/util/util.service';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss']
})
export class NotificationModalComponent {

  notifications: Notification[];
  //employeeId: number;

  constructor(public dialogRef: MatDialogRef<NotificationModalComponent>,
    @Inject(MAT_DIALOG_DATA) private _notifications: Notification[],
    //@Inject(MAT_DIALOG_DATA) private _employeeId: number,
    private notificationService: NotificationService,
    private snackBarService: SnackBarService,
    private utilService: UtilService) {
    this.notifications = _notifications
    //this.employeeId = _employeeId;
  }

  seenAll() {
    let employeeId = this.utilService.getLoggedUserId();
    this.notificationService.seenAllNotifications(employeeId).subscribe((res) => {
      if (res.body) {
        this.snackBarService.openSnackBar(res.body);
        this.dialogRef.close();
      }
    });
  }
  seenOne(notification: Notification) {
    this.notificationService.seenOneNotifications(notification.id).subscribe((res) => {
      if (res.body) {
        let index = this.notifications.indexOf(notification);
        this.notifications.splice(index, 1);
        this.snackBarService.openSnackBar(res.body);
        if (this.notifications.length === 0) this.dialogRef.close();
      }
    })
  }
}
