import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

//Componentes
import { TiendaComponent } from './components/tienda/tienda.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

const appRoustes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'animales', component: AnimalsComponent},
    {path: 'cuidadores', component: KeepersComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: HomeComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoustes);