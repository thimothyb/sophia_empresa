import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { TablaComponent } from './empresa/tabla/tabla.component';
import { SidebarComponent } from './empresa/sidebar/sidebar.component';
import { MenbresiaComponent } from './empresa/menbresia/menbresia.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    TablaComponent,
    SidebarComponent,
    MenbresiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
