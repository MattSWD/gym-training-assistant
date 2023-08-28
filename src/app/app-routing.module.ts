import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home/admin',
    loadChildren: () => import('./pages/home/admin/admin-home.module').then((m) => m.AdminHomeModule),
  },
  {
    path: 'home/user',
    loadChildren: () => import('./pages/home/user/user-home.module').then((m) => m.UserHomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
