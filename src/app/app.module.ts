import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { ListComponent } from './list/list.component';
import { DataServiceService } from './data-service.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
