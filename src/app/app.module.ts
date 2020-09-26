import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { NarBarComponent } from './nar-bar/nar-bar.component';
import { HousingService } from './service/housing.service';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const appRoutes: Routes = [
  {path: 'property-details/:id',component: PropertyDetailsComponent},
  {path: 'rent-property',component: PropertyListComponent},
  {path: '',component: PropertyListComponent},
  { path:'add-property', component: AddPropertyComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NarBarComponent,
    AddPropertyComponent,
      PropertyDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
