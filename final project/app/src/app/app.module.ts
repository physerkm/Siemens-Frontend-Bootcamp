import { AboutComponent } from './pages/about/about.component';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminPostListComponent } from './admin/admin-post-list/admin-post-list.component';
import { AdminPostDetailComponent } from './admin/admin-post-detail/admin-post-detail.component';
import { AdminUserDetailComponent } from './admin/admin-user-detail/admin-user-detail.component';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { AdminVisitorComponent } from './admin/admin-visitor/admin-visitor.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { VisitorComponent } from './pages/visitor/visitor.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminPostListComponent,
    AdminPostDetailComponent,
    AdminUserDetailComponent,
    AdminUserListComponent,
    AdminVisitorComponent,
    AboutComponent,
    GalleryComponent,
    HomeComponent,
    VisitorComponent,
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
