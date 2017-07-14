// import { FormComponent } from './../../../../../angular4-cli/project/src/app/form/form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
