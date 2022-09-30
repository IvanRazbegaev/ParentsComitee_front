import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {OverallSumDialogComponent} from "./overall-sum-dialog/overall-sum-dialog.component";
import {IStatementResponse} from "../interfaces/responses";
import {BackendService} from "../services/backend.service";
import {AddingNewRecordComponent} from "./adding-new-record/adding-new-record.component";
import {INewStatementRecord} from "../interfaces/form-output";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<IStatementResponse> = new MatTableDataSource<IStatementResponse>()

  childrenArray: string[] = [
    "Акавова Сафия",
    "Андрущак Вадим",
    "Артамонов Андрей",
    "Васильев Петр",
    "Гречина Вика",
    "Джавадов Кемаль",
    "Ефимова Рита",
    "Затравкин Павел",
    "Захаров Ярослав",
    "Иванов Артем",
    "Игнатьев Ян",
    "Кивонен Руслан",
    "Матвеева Злата",
    "Михайлов Артем",
    "Михайлов Роман",
    "Николаев Велеслав",
    "Попова Ульяна",
    "Пщелко Алёна",
    "Разбегаева Вика",
    "Ринейский Вадим",
    "Сидоров Максим",
    "Чернышов Тимофей",
    "Шатаилов Илья",
    "Шило Арсений",
    "Яковлева Алисия",
    "Яковлева Яна",
  ]
  displayedColumns: string [] = ["childNumber", "lastName", "firstName", "totalIncome", "comments", "menu"];

  constructor(private dialog: MatDialog, private backend: BackendService) {  }

  ngOnInit(): void {
  }

  async ngAfterViewInit(): Promise<void> {
    await this.createDataSourceArray()
  }

  async createDataSourceArray(){
    await new Promise<void>(resolve => {
      this.backend.getAllValuesFromStatement()
        .subscribe(value => {
          this.dataSource = new MatTableDataSource<IStatementResponse>(value)
        })
      resolve();
    })

  }

  OpenDialog(id: number, amount: number) {
    const dialogRef = this.dialog.open(OverallSumDialogComponent,{
      data: {id, amount}
    })

    dialogRef.afterClosed()
      .subscribe(value => {
        if(value){
          console.log(value)
          this.backend.changeAmount(value.id, value.amount)
            .subscribe(() => this.createDataSourceArray())
        }
      })
  }

  newRecord() {
    const dialogRef = this.dialog.open(AddingNewRecordComponent)

    dialogRef.afterClosed()
      .subscribe((value: INewStatementRecord)  => {
        if(value){
          this.backend.insertNewRecord(value.tableNum, value.lastName, value.firstName, value.amount, value.comments)
            .subscribe(() => this.createDataSourceArray());
        }
      })
  }

  OpenEditDialog(element: IStatementResponse) {
    const dialogRef = this.dialog.open(AddingNewRecordComponent, {
      data: element
    })

    dialogRef.afterClosed()
      .subscribe((value: INewStatementRecord)  => {
        if(value){
          console.log(value)
          this.backend.editRecord(value.tableNum, value.lastName, value.firstName, value.amount, value.comments)
            .subscribe(() => this.createDataSourceArray());
        }
      })
  }
}
