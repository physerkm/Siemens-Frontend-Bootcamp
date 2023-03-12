import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminPostDetailComponent } from './admin/admin-post-detail/admin-post-detail.component';
import { AdminPostListComponent } from './admin/admin-post-list/admin-post-list.component';
import { AdminUserDetailComponent } from './admin/admin-user-detail/admin-user-detail.component';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { AdminVisitorComponent } from './admin/admin-visitor/admin-visitor.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { VisitorComponent } from './pages/visitor/visitor.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: "about", component: AboutComponent },
    { path: 'gallery', component: GalleryComponent},
    { path: 'visitor', component: VisitorComponent}
  ]},
  { path: 'admin', component: AdminLayoutComponent, children: [
    { path: 'admin-home', component: AdminHomeComponent },
    { path: 'admin-post-list', component: AdminPostListComponent},
    { path: 'admin-user-list', component: AdminUserListComponent},
    { path: 'admin-visitor', component: AdminVisitorComponent},
    { path: 'admin-post-detail/:id', component: AdminPostDetailComponent},
    { path: 'admin-user-detail/:id', component: AdminUserDetailComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
