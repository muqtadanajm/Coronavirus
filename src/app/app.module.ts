import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes  } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import {SeletonLoaderModule} from './seleton-loader/seleton-loader.module';
import { CasesComponent } from './cases/cases.component';;
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import{ FormsModule } from '@angular/forms'
import { CoronaDataService } from './corona-data.service';
import { AskComponent } from './ask/ask.component'
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const routes:Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'cases', component:CasesComponent},
  {path:'Ask', component:AskComponent},
] 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CasesComponent,
    AskComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyA9ue3Q6fk7aQGRym61VpZ2LuFy-GItiMk',
    }),
    SeletonLoaderModule,
    NgCircleProgressModule.forRoot({
      backgroundPadding: 7,
      radius: 60,
      space: -2,
      outerStrokeWidth: 2,
      outerStrokeColor: "#808080",
      innerStrokeColor: "#e7e8ea",
      innerStrokeWidth: 2,
      showSubtitle:false,
        }),
        FormsModule,
        Ng2SearchPipeModule,
        HttpClientModule,


  ],
  // providers: [CoronaDataService,LocationStrategy, useClass: HashLocationStrategy],
      providers: [CoronaDataService,{provide: LocationStrategy, useClass: HashLocationStrategy}],

  bootstrap: [AppComponent]
})
export class AppModule { }
