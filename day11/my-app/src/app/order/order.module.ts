import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OderListComponent } from './order-list/order-list.component';



@NgModule({
  declarations: [
    OderListComponent
  ],
  exports:[OrderListComponent],
  imports: [
    CommonModule
  ]
})
export class OrderModule {}
