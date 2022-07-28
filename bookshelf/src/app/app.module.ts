import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BookDataComponent } from './book-data/book-data.component';
import { SharedModule } from './shared/shared.module';
import { BookShelfComponent } from './book-shelf/book-shelf.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDataComponent,
    BookShelfComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
