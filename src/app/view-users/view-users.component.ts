import { Component, OnInit } from '@angular/core';
import {UserInfo} from "../shared/user-info";


@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
    user: UserInfo;

    users: [
        {
            'displayName': 'Ayush Ruchandani',
            'emailId': 'ayush@ruchandani.com'
        },
        {
            'displayName': 'Mohamad Mudassar Shekh',
            'emailId': 'mshekh@asu.edu'
        },
        {
            'displayName': 'Santosh Bidve',
            'emailId': 'sbidve@asu.edu'
        },
        {
            'displayName': 'Kushal Adhvaryu',
            'emailId': 'kadhvary@asu.edu'
        },
        {
            'displayName': 'ABC XYZ',
            'emailId': 'abc@xyz.com'
        }
    ];

  constructor() { }

  ngOnInit() {
  }

    openDialog(ticket:any): void {
        alert("Do you want to remove this user?");
    }
}
