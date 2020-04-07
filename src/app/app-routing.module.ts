import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';
import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { RequestlineListComponent } from './requestlines/requestline-list/requestline-list.component';
import { RequestlineDetailComponent } from './requestlines/requestline-detail/requestline-detail.component';
import { RequestlineEditComponent } from './requestlines/requestline-edit/requestline-edit.component';
import { RequestlineCreateComponent } from './requestlines/requestline-create/requestline-create.component';
import { LoginComponent } from './system/login/login.component';
import { ReviewRequestsComponent } from './requests/review-requests/review-requests.component';


const routes: Routes = [
  { path: "", redirectTo: "/users/list", pathMatch: "full" },
  { path: "login", component: LoginComponent },

  { path: "users", component: UserListComponent },
  { path: "users/list", component: UserListComponent },
  { path: "users/detail/:id", component: UserDetailComponent },
  { path: "users/edit/:id", component: UserEditComponent },
  { path: "users/create", component: UserCreateComponent },

  { path: "vendors", component: VendorListComponent },
  { path: "vendors/list", component: VendorListComponent },
  { path: "vendors/detail/:id", component: VendorDetailComponent },
  { path: "vendors/edit/:id", component: VendorEditComponent },
  { path: "vendors/create", component: VendorCreateComponent },

  { path: "products", component: ProductListComponent },
  { path: "products/list", component: ProductListComponent },
  { path: "products/detail/:id", component: ProductDetailComponent },
  { path: "products/edit/:id", component: ProductEditComponent },
  { path: "products/create", component: ProductCreateComponent },

  { path: "requests", component: RequestListComponent },
  { path: "requests/forReview", component: ReviewRequestsComponent },
  { path: "requests/list", component: RequestListComponent },
  { path: "requests/detail/:id", component: RequestDetailComponent },
  { path: "requests/edit/:id", component: RequestEditComponent },
  { path: "requests/create", component: RequestCreateComponent },

  { path: "requestlines/list/:requestId", component: RequestlineListComponent },
  { path: "requestlines/detail/:id", component: RequestlineDetailComponent },
  { path: "requestlines/edit/:id", component: RequestlineEditComponent },
  { path: "requestlines/create/:requestId", component: RequestlineCreateComponent },

  { path: "**", component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
