import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { WomanpageComponent } from './womanpage/womanpage.component';
import { BodyComponent } from './body/body.component';
import { MenpageComponent } from './menpage/menpage.component';
import { KidspageComponent } from './kidspage/kidspage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TechpageComponent } from './techpage/techpage.component';
import { EmbroideredKurtasComponent } from './embroidered-kurtas/embroidered-kurtas.component';
import { PumaBrandComponent } from './puma-brand/puma-brand.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { VykdpageComponent } from './vykdpage/vykdpage.component';

const routes: Routes = [
  {path: 'loginpagecomponent', component: LoginPageComponent},
  {path: 'womanpage', component: WomanpageComponent},
  {path: 'fshop', component: BodyComponent},
  {path: 'menpage', component: MenpageComponent},
  {path:'kidspage',component:KidspageComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'techpage',component:TechpageComponent},
  {path:'embroidered',component:EmbroideredKurtasComponent},
  {path:'pumabrand',component:PumaBrandComponent},
  {path:'productdetails',component:ProductdetailsComponent},
  {path:'vykdpage',component:VykdpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
