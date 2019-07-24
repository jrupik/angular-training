import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Api} from './api';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    Api
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('pl');
  }

}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
