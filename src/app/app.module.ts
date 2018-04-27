import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {firebaseConfig} from "environments/firebaseConfig";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthService} from "app/shared/auth.service";
import {AlertModule} from "ngx-bootstrap";
import {Routes, RouterModule} from "@angular/router";
import { LoggedInGuard } from "app/shared/logged-in-guard";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule,MatInputModule,MatSelectModule ,MatFormFieldModule,MatDialogModule,  MatCardModule,    MatButtonModule,        MatTooltipModule,    MatSnackBarModule} from '@angular/material';
// Components
import {AppComponent} from "./app.component";
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import {RegisterPageComponent} from "./pages/register-page.component";
import {AllInOnePageComponent} from "./pages/all-in-one-page.component";
import {LoginPageComponent} from "./pages/login-page.component";
import {HomePageComponent} from "./pages/home-page.component";
import {LoginUserComponent} from "app/login-user/login-user.component";
import {DisplayUserComponent} from "app/display-user/display-user.component";
import {RegisterUserComponent} from "app/register-user/register-user.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { TicketDialogComponent } from './ticket-dialog/ticket-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { DisplayVolunteerComponent } from './display-volunteer/display-volunteer.component';
import { TicketFormVolunteerComponent } from './ticket-form-volunteer/ticket-form-volunteer.component';
import { ViewUsersComponent } from './view-users/view-users.component';



const routes: Routes = [
    { path: 'register', component: RegisterPageComponent },
    { path: 'all-in-one', component: AllInOnePageComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'ticket-form', component: TicketFormComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'display-user', component: DisplayUserComponent },
    { path: 'display-volunteer', component: DisplayVolunteerComponent },
    { path: 'ticket-form-volunteer', component: TicketFormVolunteerComponent },
    { path: 'view-users', component: ViewUsersComponent },
    { path: 'dashboard', component: DashboardPageComponent, canActivate: [LoggedInGuard] },
    { path: '', component: HomescreenComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        DisplayUserComponent,
        LoginUserComponent,
        RegisterUserComponent,
        ResetPasswordComponent,
        HomePageComponent,
        RegisterPageComponent,
        AllInOnePageComponent,
        LoginPageComponent,
        DashboardPageComponent,
        HomescreenComponent,
        TicketFormComponent,
        TicketDialogComponent,
        FooterComponent,
        DisplayVolunteerComponent,
        TicketFormVolunteerComponent,
        ViewUsersComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AlertModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig, "acc-advocacy-tracking"),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatSelectModule  ,
        MatInputModule,
        MatExpansionModule,

        RouterModule.forRoot(routes),

    ],
    providers: [ AuthService, LoggedInGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
