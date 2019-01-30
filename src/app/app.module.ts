import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { CatalogComponent } from './Components/catalog/catalog.component';

import { MaterializeModule } from 'angular2-materialize';
import { NavComponent } from './Components/nav/nav.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CatalogComponent,
    NavComponent,
    ProfileComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterializeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
