import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './container/form-builder/form-builder.component';

export const routes: Routes = [
  {
    path:'*',
    component: AppComponent
  },
  {
    path:'form',
    children: [
      {
        path: 'builder',
        component: FormBuilderComponent
      }
    ]
  }
];
