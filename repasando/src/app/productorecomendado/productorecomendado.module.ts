import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductorecomendadoPageRoutingModule } from './productorecomendado-routing.module';

import { ProductorecomendadoPage } from './productorecomendado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductorecomendadoPageRoutingModule
  ],
  declarations: [ProductorecomendadoPage]
})
export class ProductorecomendadoPageModule {}
