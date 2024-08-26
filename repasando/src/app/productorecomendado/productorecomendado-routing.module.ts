import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductorecomendadoPage } from './productorecomendado.page';

const routes: Routes = [
  {
    path: '',
    component: ProductorecomendadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductorecomendadoPageRoutingModule {}
