import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAboutComponent } from './about/about.component';
import { AdminHomeComponent } from './home/home.component';
import { AdminContactComponent } from './contact/contact.component';
import { AdminLayoutComponent } from './layout/layout.component';

import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [AdminLayoutComponent, AdminAboutComponent, AdminContactComponent, AdminHomeComponent],
  exports: [AdminLayoutComponent, AdminAboutComponent, AdminContactComponent, AdminHomeComponent],
  imports: [CommonModule, AppRoutingModule]
})
export class AdminModule {}
