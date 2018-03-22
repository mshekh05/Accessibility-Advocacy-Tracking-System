import {Component,Inject} from "@angular/core";
import {AuthService} from "app/shared/auth.service";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";
import {UserInfo} from "app/shared/user-info";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TicketFormComponent } from './ticket-form/ticket-form.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    dialogResult: string;
    
    private alertType = null;
    private alertMessage = "";
    isLoggedIn = new BehaviorSubject<boolean>(false);

    constructor(private authService: AuthService, private router: Router,public dialog: MatDialog) {
        this.authService.isLoggedIn().subscribe(this.isLoggedIn);
    }

    currentUser(): Observable<UserInfo> {
        return this.authService.currentUser();
    } 

    logout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }

    onResetPasswordSuccess() {
        this.alertType = "success";
        this.alertMessage = "Reset Password Sent!";
    }

    onLoginSuccess() {
        this.alertType = "success";
        this.alertMessage = "Login Success!";
    }

    onRegisterSuccess() {
        this.alertType = "success";
        this.alertMessage = "User registered!";
    }

    onError(err) {
        this.alertType = "danger";
        this.alertMessage = err;
    }

    onLoggedOut() {
        // Just reset any displayed messsage.
        this.alertType = null;
        this.alertMessage = "";
    }

    alertClosed() {
        this.alertType = null;
        this.alertMessage = "";
    }
    openDialog(): void {
        let dialogRef = this.dialog.open(TicketFormComponent, {
            width: '600px',
            // height:'1000px',
            data: 'This text is passed into the dialog'
          });
      
          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog closed: ${result}`);
            this.dialogResult = result;
          })
      }
}
