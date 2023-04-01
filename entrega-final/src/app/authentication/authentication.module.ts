import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, authReducer} from './state/auth.reducer';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature(authFeatureKey, authReducer)
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthenticationModule { }
