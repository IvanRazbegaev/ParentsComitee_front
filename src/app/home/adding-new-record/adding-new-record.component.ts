import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IStatementResponse} from "../../interfaces/responses";

@Component({
  selector: 'app-adding-new-record',
  templateUrl: './adding-new-record.component.html',
  styleUrls: ['./adding-new-record.component.css']
})
export class AddingNewRecordComponent implements OnInit {
  form: FormGroup = new FormGroup({
    tableNum: new FormControl(),
    lastName: new FormControl(),
    firstName: new FormControl(),
    amount: new FormControl(),
    comments: new FormControl(),
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: IStatementResponse) { }

  ngOnInit(): void {
    if(this.data){
      this.form.get('tableNum')?.setValue(this.data.TableNum)
      this.form.get('tableNum')?.disable()
      this.form.get('lastName')?.setValue(this.data.LastName)
      this.form.get('firstName')?.setValue(this.data.FirstName)
      this.form.get('amount')?.setValue(this.data.Amount)
      this.form.get('amount')?.disable()
      this.form.get('comments')?.setValue(this.data.Comments)
    }
  }

  returnValue() {
    return this.form.value
  }
}
