import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'product-add-1', component: ProductComponent },
  { path: 'product-add-2', component: ProductComponent },
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'products/category/:categoryId', component : ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
