import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PremuimPagesComponent } from './premuim-pages/premuim-pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SearchpipePipe } from './searchpipe.pipe';
import { LoadingInterceptor } from './loading.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSearchFilterModule } from 'ngx-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    NotfoundComponent,
    PremuimPagesComponent,
    SearchpipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSearchFilterModule   
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
