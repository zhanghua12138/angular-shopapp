import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//引入页面组件
import { HomepageComponent } from './pagecoms/homepage/homepage.component';
import { CategoryallComponent } from './pagecoms/categoryall/categoryall.component';
import { CartComponent } from './pagecoms/cart/cart.component';
import { MemberComponent } from './pagecoms/member/member.component';

//配置路由并做好映射关系
const routes: Routes = [
   { path:"homepage",component: HomepageComponent },
   { path:"",component: HomepageComponent },
   { path:"categoryall",component: CategoryallComponent },
   { path:"cart",component: CartComponent },
   { path:"member",component: MemberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

