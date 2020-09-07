import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { GsloComponent } from './gslo/gslo.component';
import { SearchComponent } from './search/search.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    GsloComponent,
    SearchComponent,
    UserComponent,
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    ],
    
   providers: [],
  //bootstrap: [SearchComponent]
  //bootstrap: [GsloComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
