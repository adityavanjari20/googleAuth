import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { BuyComponent } from './components/buy/buy.component';
import { SellComponent } from './components/sell/sell.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewComponent } from './components/view/view.component';
import { MySharesComponent } from './components/my-shares/my-shares.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UnderProgressComponent } from './components/under-progress/under-progress.component'
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { HistoryComponent } from './components/history/history.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminComponent } from './components/admin/admin.component';

import { AddStocksComponent } from './components/add-stocks/add-stocks.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';

import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GetallClientsComponent } from './components/getall-clients/getall-clients.component';
import { GethistoryComponent } from './components/gethistory/gethistory.component';
import { ContactusComponent } from './components/contactus/contactus.component';



export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'watch', component: WatchListComponent },
  { path: 'buy/:id', component: BuyComponent },
  { path: 'sell/:id', component: SellComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'my-shares', component: MySharesComponent },
  { path: 'gainers', component: UnderProgressComponent },
  { path: 'losers', component: UnderProgressComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home',component: HomeComponent },
  { path: 'adminlogin',component: AdminloginComponent },
  { path: 'admin',component: AdminComponent },
  { path: 'addCompany',component: AddStocksComponent },
  { path: 'updatecompany/:company_id',component: UpdateCompanyComponent },
  { path: 'getallclient',component:GetallClientsComponent },
  { path: 'gethistory/:email',component:GethistoryComponent},
 
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
