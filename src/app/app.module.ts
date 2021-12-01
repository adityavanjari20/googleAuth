import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { BuyComponent } from './components/buy/buy.component';
import { HomeComponent } from './components/home/home.component';
import { MySharesComponent } from './components/my-shares/my-shares.component';
import { SellComponent } from './components/sell/sell.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewComponent } from './components/view/view.component'
import { LogoutComponent } from './components/logout/logout.component';
import { UnderProgressComponent } from './components/under-progress/under-progress.component';
import { SearchComponent } from './components/search/search.component'
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { HistoryComponent } from './components/history/history.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AddStocksComponent } from './components/add-stocks/add-stocks.component';
import { AdminComponent } from './components/admin/admin.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GetallClientsComponent } from './components/getall-clients/getall-clients.component';
import { GethistoryComponent } from './components/gethistory/gethistory.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    WatchListComponent,
    BuyComponent,
    HomeComponent,
    MySharesComponent,
    SellComponent,
    ProfileComponent,
    ViewComponent,
    LogoutComponent,
    UnderProgressComponent,
    SearchComponent,
    FooterComponent,
    ForgotpasswordComponent,
    HistoryComponent,
    AdminloginComponent,
    AddStocksComponent,
    AdminComponent,
    UpdateCompanyComponent,

    AboutusComponent,

    GetallClientsComponent,

    GethistoryComponent,

    ContactusComponent,


  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ChartsModule,
    OrderModule,
    Ng2OrderModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1012436284466-ajo9drrsn2jj2pul0il8u31ul7ck8i49.apps.googleusercontent.com' // add web app client id
            )
          }
        ]
      } as SocialAuthServiceConfig
    },
    ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
