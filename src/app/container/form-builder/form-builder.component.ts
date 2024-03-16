import { Component, OnInit, effect, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialog
} from '@angular/material/dialog';
import { DialogAddQuestionComponent } from '../dialog-add-question/dialog-add-question.component';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent  implements OnInit{
  testTaskForm: FormGroup | undefined
  listQuestion = signal([])
  constructor(private fb: FormBuilder,public dialog: MatDialog){

    effect(() => {
    })
  }

  ngOnInit(): void {
    this.testTaskForm = this.fb.group({
      listQuestion: this.fb.array([])
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddQuestionComponent, {
      width:'600px',
      data: {},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result: ', result);
      this.listQuestion.set(result)
    });
  }
}
