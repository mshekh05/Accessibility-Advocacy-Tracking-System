import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import {FormsModule ,FormControl, Validators} from '@angular/forms';
import { MatSnackBar  } from '@angular/material';


//class
import {Ticket} from "../ticket";



@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  
  ticket:Ticket;
  email = new FormControl('', [Validators.required, Validators.email]);
  cats = [
    {value: 'phy-1', viewValue: 'Physical'},
    {value: 'cog-1', viewValue: 'Cognitive'},
    {value: 'usage', viewValue: 'Accessible Usage'}
  ];

  status = [
    {value: 'new', viewValue: 'New'},
    {value: 'Design', viewValue: 'Design'},
    {value: 'inprogress', viewValue: 'In-Progress'},
    {value: 'completed', viewValue: 'Completed'},
    {value: 'hold', viewValue: 'On-Hold'}
  ];

  seviarities = [
    {value: 'low', viewValue: 'Low'},
    {value: 'med', viewValue: 'Medium'},
    {value: 'high', viewValue: 'High'},
    {value: 'critical', viewValue: 'Critical'}
  ];



 
  constructor(public snackBar: MatSnackBar,public thisDialogRef: MatDialogRef<TicketFormComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { 
    console.log(data)
    this.ticket = new Ticket;
  }
  

  ngOnInit() {
  }
 

  getErrorMessage() {
    
    return this.email.hasError('required') ? false :
        this.email.hasError('email') ? false :
            true;
  }

  onCloseConfirm() {
    this.snackBar.open("New Ticket created. Thanks for improving the community :)");
    
    this.thisDialogRef.close(this.ticket);
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
