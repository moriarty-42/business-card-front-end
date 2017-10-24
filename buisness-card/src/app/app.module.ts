import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import { TeamPageModule } from './team-page/team-page.module';

const ROUTES: Routes = [{
  path: "**", redirectTo: "/"
}]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TeamPageModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
