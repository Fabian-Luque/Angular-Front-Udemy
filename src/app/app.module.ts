import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from "@angular/http";

// Importar nuestro nuevo modulo
import { ModuloEmailModule } from "./moduloemail/moduloemail.module";
import { AdminModule } from "./admin/admin.module";

//componentes
import { AppComponent } from './app.component';
import { SimpleTinyComponent } from "./components/simple-tiny/simple-tiny.component";
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

// Servicios
import { UserService } from "./services/user.service";


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    AnimalsComponent,
    KeepersComponent,
    ContactComponent,
    ParquesComponent,
    HomeComponent,
    SimpleTinyComponent,
    LoginComponent,
    RegisterComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ModuloEmailModule,
    BrowserAnimationsModule,
    AdminModule,
    HttpModule
  ],
  providers: [
    appRoutingProviders,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
