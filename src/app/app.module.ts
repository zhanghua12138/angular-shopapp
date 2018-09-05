import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HeaderComponent } from './pubcoms/header/header.component';
import { CategoryComponent } from './pubcoms/category/category.component';
import { FooterComponent } from './pubcoms/footer/footer.component';
import { BottomnavComponent } from './pubcoms/bottomnav/bottomnav.component';
import { HomepageComponent } from './pagecoms/homepage/homepage.component';
import { CategoryallComponent } from './pagecoms/categoryall/categoryall.component';
import { CartComponent } from './pagecoms/cart/cart.component';
import { GoodslistComponent } from './pagecoms/goodslist/goodslist.component';
import { GoodsdetailsComponent } from './pagecoms/goodsdetails/goodsdetails.component';
import { MemberComponent } from './pagecoms/member/member.component';
import { RegisterComponent } from './pagecoms/register/register.component';
import { LoginComponent } from './pagecoms/login/login.component';
import { BannerComponent } from './pubcoms/banner/banner.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    FooterComponent,
    BottomnavComponent,
    HomepageComponent,
    CategoryallComponent,
    CartComponent,
    GoodslistComponent,
    GoodsdetailsComponent,
    MemberComponent,
    RegisterComponent,
    LoginComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
