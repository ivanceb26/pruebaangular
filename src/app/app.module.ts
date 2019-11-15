import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs';
import { CrearFormComponent } from './crear-form/crear-form.component';
import { Routes, RouterModule } from '@angular/router';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    //{ path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'crear', component: CrearFormComponent },
    //{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CrearFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
