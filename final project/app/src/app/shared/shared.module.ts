import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [MainLayoutComponent, AdminLayoutComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, NgOptimizedImage],
  exports: [ ReactiveFormsModule, NgOptimizedImage]
})
export class SharedModule { }
