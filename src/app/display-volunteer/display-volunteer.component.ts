import {Component, OnInit, EventEmitter, Output} from "@angular/core";

import {Inject} from "@angular/core";
import {AuthService} from "app/shared/auth.service";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";
import {UserInfo} from "app/shared/user-info";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';

@Component({
  selector: 'app-display-volunteer',
  templateUrl: './display-volunteer.component.html',
  styleUrls: ['./display-volunteer.component.css']
})
export class DisplayVolunteerComponent {
    dialogResult: string;

    @Output() onLoggedOut = new EventEmitter();


    constructor(private authService: AuthService,public dialog: MatDialog) {}

    currentUser(): Observable<UserInfo> {
        return this.authService.currentUser();
    }

    logout() {
        this.authService.logout().subscribe(() => this.onLoggedOut.emit("success"));
    }
    openDialog(ticket:any): void {
        let dialogRef = this.dialog.open(TicketFormComponent, {
            width: '600px',
            // height:'1000px',
            data: ticket
        });
        //   console.log(ticket)
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog closed: ${result}`);
            this.dialogResult = result;
        })
    }

}
