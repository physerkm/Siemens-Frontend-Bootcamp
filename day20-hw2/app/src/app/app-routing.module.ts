import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAboutComponent } from './admin/about/about.component';
import { AdminContactComponent } from './admin/contact/contact.component';
import { AdminHomeComponent } from './admin/home/home.component';
import { AdminLayoutComponent } from './admin/layout/layout.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';


const routes: Routes = [{
  path:'', component: LayoutComponent, children: [
    { path: '', component: HomeComponent},
    { path: 'Home Page', component: HomeComponent},
    { path: 'About', component: AboutComponent},
    { path: 'Contact', component: ContactComponent}]},
  
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', component: AdminHomeComponent},
      { path: 'Home Page', component: AdminHomeComponent},
      { path: 'About', component: AdminAboutComponent},
      { path: 'Contact', component: AdminContactComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



