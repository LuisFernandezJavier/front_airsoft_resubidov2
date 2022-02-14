import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearAccesorioComponent } from './components/crear-accesorio/crear-accesorio.component';

import { CrearTiradorComponent } from './components/crear-tirador/crear-tirador.component';
import { HomeComponent } from './components/home/home.component';
import { ListarAccesorioComponent } from './components/listar-accesorio/listar-accesorio.component';




import { VeoTiradorComponent } from './components/veo-tirador/veo-tirador.component';
import { CrearArmaComponent } from './components/crear-arma/crear-arma.component';
import { ListarArmaComponent } from './components/listar-arma/listar-arma.component';
import { ListarEquipoComponent } from './components/listar-equipo/listar-equipo.component';
import { ListarTiradorComponent } from './components/listar-tirador/listar-tirador.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HighchartsChartModule } from 'highcharts-angular';

import {MatSliderModule} from '@angular/material/slider'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    CrearAccesorioComponent,
    CrearArmaComponent,
    CrearTiradorComponent,
    HomeComponent,
    ListarAccesorioComponent,
    ListarArmaComponent,
    ListarEquipoComponent,
    ListarTiradorComponent,
    LoginComponent,
    VeoTiradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    HighchartsChartModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
