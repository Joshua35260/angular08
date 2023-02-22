import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateOnomatopiaComponent } from './liste/create-onomatopia/create-onomatopia.component';

import { ListeComponent } from './liste/liste.component';


@NgModule({
  declarations: [			
    AppComponent,
      ListeComponent,
      CreateOnomatopiaComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
