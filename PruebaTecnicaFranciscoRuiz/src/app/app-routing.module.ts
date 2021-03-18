import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
];

const opt = {
  enableTracing: true
  // true if you want to print navigation routes
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, opt)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModuole{

}
