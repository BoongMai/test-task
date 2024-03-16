import { Component, OnInit, effect, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-dialog-add-question',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './dialog-add-question.component.html',
  styleUrl: './dialog-add-question.component.scss',
})
export class DialogAddQuestionComponent implements OnInit {
  typeOfQuestion = signal<'paragraph' | 'checkbox'>('paragraph');
  initQuestion = signal<string>('');
  initListQuest = signal<any[]>([
    {
      answer: '',
      isChecked: false,
    },
    {
      answer: '',
      isChecked: false,
    },
  ]);
  dataSendBack = signal([
    {
      type: '',
      labelOfQuestion: '',
      listQuest: [
        { title: '', isChecked: false },
        { title: '', isChecked: false },
      ],
    },
  ]);

  constructor(private _formBuilder: FormBuilder) {
    effect(() => {
      console.log('asdasdasd');
    });
    console.log('this.dataSendBack:', this.dataSendBack());
  }

  ngOnInit(): void {}

  handleSetQuestion(event: Event) {
    this.initQuestion.set((event.target as HTMLInputElement).value);
    this.dataSendBack.update((prev) => {
      return {
        ...prev,
        labelOfQuestion: this.initQuestion(),
      };
    });
  }

  handleChangeType() {
    this.dataSendBack.update((prev) => {
      return {
        ...prev,
        type: this.typeOfQuestion(),
      };
    });
  }

  handleAddAnswerQuestion() {
    this.initListQuest.update((cur) => {
      return [
        ...cur,
        {
          answer: '',
          isChecked: false,
        },
      ];
    });
    this.dataSendBack()[this.dataSendBack().length - 1].listQuest =
      this.initListQuest();
  }

  handleChangeAnswer(event: Event, index: number) {
    console.log('index: ', index);
    console.log('event: ', event);
  }

  optionQuestion = this._formBuilder.group({
    allowUser: false,
    isRequire: false,
  });
}
