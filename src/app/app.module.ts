import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { registerLicense } from '@syncfusion/ej2-base';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLicense(
  'ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1jXH9bcnRWTmVbWUQ='
);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DialogModule,
    ToastrModule.forRoot({ timeOut: 5000 }),
    NgxLoadingModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
