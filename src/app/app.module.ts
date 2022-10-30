import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyComponent } from './components/property/property/property.component';
import { PropertyOwnerComponent } from './components/property-owner/property-owner/property-owner.component';
import { TenantComponent } from './components/tenant/tenant/tenant.component';
import { SingInComponent } from './components/auth/sing-in/sing-in.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    PropertyOwnerComponent,
    TenantComponent,
    SingInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
