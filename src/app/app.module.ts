import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import {CovalentCoreModule, CovalentDataTableModule} from '@covalent/core';
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentSearchModule } from '@covalent/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './dashboard/carts/carts.component';
import { ShopComponent } from './dashboard/shops/shops.component';

import { appRoutes, appRoutingProviders } from './app.routes';
import {Ng2PaginationModule} from 'ng2-pagination';


import { RequestInterceptor } from '../config/interceptors/request.interceptor';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import {HttpService} from "../services/http.service";
import {AuthService} from "../services/auth.service";
import {UsersService} from "../services/users.service";
import {RetailShopsService} from "../services/shop.service";
import {
  ItemsService, DistributorService, TagsService, TaxsService, BrandsService,
  SaltsService
} from "../services/items.service";
import {
  ProductSearchPipe, ProductBrandPipe, ProductDistributorPipe,
  ProductTagPipe, ProductSaltPipe, KeysPipe
} from '../pipes/product-search.pipe';
import {IndexDBServiceService} from "../services/indexdb.service";
import {CartService} from "../services/cart.service";
import {OrdersService} from "../services/orders.service";
import {BillingComponent} from "./billing/billing.component";
import {ProductInfoComponent} from "./billing/product-info/product-info.component";
import {CheckoutComponent} from "./billing/checkout/checkout.component";
import {ItemDiscountComponent} from "./billing/item-discount/item-discount.component";
import {ProductComponent} from "./inventory/product/product.component";
import {BrandComponent} from "./inventory/brand/brand.component";
import {TagComponent} from "./inventory/tag/tag.component";
import {SaltComponent} from "./inventory/salt/salt.component";
import {TaxComponent} from "./inventory/tax/tax.component";
import {DistributorComponent} from "./inventory/distributor/distributor.component";
import {InventoryComponent} from "./inventory/inventory.component";


const httpInterceptorProviders: Type<IHttpInterceptor>[] = [
  RequestInterceptor,
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    DashboardComponent,
    CartComponent,
    ShopComponent,
    ItemDiscountComponent,
    ProductInfoComponent,
    ProductComponent,
    BrandComponent,
    TagComponent,
    SaltComponent,
    TaxComponent,
    DistributorComponent,
    CheckoutComponent,
    BillingComponent,
    InventoryComponent,
    ProductSearchPipe,
    ProductBrandPipe,
    ProductDistributorPipe,
    ProductTagPipe,
    ProductSaltPipe,
    KeysPipe
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    Ng2PaginationModule,
    CovalentCoreModule.forRoot(),
    CovalentDataTableModule.forRoot(),
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    CovalentSearchModule.forRoot(),
    appRoutes,
    NgxChartsModule,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    httpInterceptorProviders,
    Title,
    HttpService,
    AuthService,
    UsersService,
    RetailShopsService,
    ItemsService,
    DistributorService, TagsService, SaltsService,
    TaxsService,
    BrandsService,
    CartService,
    OrdersService,
    IndexDBServiceService

  ], // additional providers needed for this module
  entryComponents: [ProductInfoComponent, CheckoutComponent, ItemDiscountComponent],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
