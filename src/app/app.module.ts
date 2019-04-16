import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { XyzComponent } from './stundent-list/xyz/xyz.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    XyzComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
