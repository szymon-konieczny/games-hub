import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


const materialModules = [
  MatInputModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...materialModules,
  ],
  exports: [
    ...materialModules,
  ]
})
export class MaterialModule { }
