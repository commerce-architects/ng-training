import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyService } from './app.service';

import { RouterModule, Routes }   from '@angular/router';
import { ExampleComponent } from './components/example/example.component';
import { ErrorComponent } from './components/error/error.component';
import { FormComponent } from './components/form/form.component';
import { ModelFormComponent } from './components/model-form/model-form.component';

const routes: Routes = [
  { path: 'example',   component: ExampleComponent },
  { path: '',
    redirectTo: '/example',
    pathMatch: 'full'
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ErrorComponent,
    FormComponent,
    ModelFormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
