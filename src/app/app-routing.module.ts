import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeModule} from './home/home.module';
import { ProductsComponent} from './home/products/products.component';
import { ContactComponent } from './home/contact/contact.component';
const routes: Routes = [

  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'contact', component: ContactComponent  },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
