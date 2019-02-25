import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PaginateComponent } from './paginate/paginate.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    SearchComponent,
    PaginateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent,
    PaginateComponent
  ]
})
export class LaravelModule { }
