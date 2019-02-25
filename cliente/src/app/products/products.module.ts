import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { LaravelModule } from '../laravel/laravel.module';

const appRoutes: Routes = [
  { path : 'products', component: ProductsComponent }
];


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    LaravelModule
  ]
})
export class ProductsModule { }
