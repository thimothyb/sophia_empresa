import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { TablaComponent } from './empresa/tabla/tabla.component';
import { SidebarComponent } from './empresa/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    TablaComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
