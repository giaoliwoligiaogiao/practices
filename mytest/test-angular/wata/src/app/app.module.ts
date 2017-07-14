import { AppComponent } from './../../../../../angular4-cli/project/src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes=[
  {path:'product',component: ProductComponent}
 , { path: '**', component: AppComponent }

  ];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
