import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { ToolbarComponent } from '../core/components/toolbar/toolbar.component';
import { MaterialModule } from '../material.module';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NotFoundComponent,
    NavbarComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AuthenticationModule,
    HttpClientModule
  ], exports: [
    NavbarComponent,
    ToolbarComponent,
    HttpClientModule
  ]
})
export class CoreModule { }
