import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './menu/header/header.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { SortPipe } from './pipes/sort.pipe';

import { LoginComponent } from './system/login/login.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserSearchPipe } from './users/user-search.pipe';

import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorSearchPipe } from './vendors/vendor-search.pipe';

import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductSearchPipe } from './products/product-search.pipe';

import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';
import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { RequestSearchPipe } from './requests/request-search.pipe';

import { RequestlineListComponent } from './requestlines/requestline-list/requestline-list.component';
import { RequestlineDetailComponent } from './requestlines/requestline-detail/requestline-detail.component';
import { RequestlineEditComponent } from './requestlines/requestline-edit/requestline-edit.component';
import { RequestlineCreateComponent } from './requestlines/requestline-create/requestline-create.component';
import { RequestlineSearchPipe } from './requestlines/requestline-search.pipe';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    SortPipe,

    LoginComponent,

    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    UserSearchPipe,

    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorSearchPipe,

    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,
    ProductSearchPipe,

    RequestListComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestCreateComponent,
    RequestSearchPipe,

    RequestlineListComponent,
    RequestlineDetailComponent,
    RequestlineEditComponent,
    RequestlineCreateComponent,
    RequestlineSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
