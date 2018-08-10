import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DefaultComponent } from './table/default/default.component';
import { FilteredComponent } from './table/filtered/filtered.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
  { path: 'table/default', component: DefaultComponent },
  { path: 'table/filtered', component: FilteredComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DefaultComponent,
    FilteredComponent,
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
