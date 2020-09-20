import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import { LaunchComponent } from './launch/launch.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, FilterComponent, LaunchComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
