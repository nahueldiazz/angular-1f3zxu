import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal/principal.component';
import { ArticulosListaComponent } from './articulos-lista/articulos-lista.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [PrincipalComponent, MenuComponent, ArticulosListaComponent ],
  bootstrap:    [ PrincipalComponent ]
})
export class AppModule { }
