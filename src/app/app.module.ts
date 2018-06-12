import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReferenceListComponent } from './reference-list/reference-list.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ApiipaService } from './services/apiipa.service';


@NgModule({
  declarations: [
    AppComponent,
    ReferenceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiipaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
