import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-overall-sum-dialog',
  templateUrl: './overall-sum-dialog.component.html',
  styleUrls: ['./overall-sum-dialog.component.css']
})
export class OverallSumDialogComponent implements OnInit {
  form: FormGroup = new FormGroup({
    amount: new FormControl()
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.form.get('amount')?.setValue(this.data.amount)
  }

  returnValue(): {id: number, amount: number} {
    return {id: this.data.id, amount:this.form.value.amount}
  }
}
