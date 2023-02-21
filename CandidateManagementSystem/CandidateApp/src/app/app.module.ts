import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { MasterComponent } from './components/master/master.component';
import { HttpClientModule } from '@angular/common/http';
import { MasterViewComponent } from './components/master-view/master-view.component';
import { MasterEditComponent } from './components/master-edit/master-edit.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { NavVarComponent } from './nav-var/nav-var.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon'; 

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    MasterViewComponent,
    MasterEditComponent,
    ConfirmDialogComponent,
    NavVarComponent,
    NavBarComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
