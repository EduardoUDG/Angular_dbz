import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './router.routing';

const routes: Routes = [
  {
    path: AppRoutes.DRAGON_BALL_Z,
    loadChildren: () => import('./dragon-ball-z/dragon-ball-z.module').then(m => m.DragonBallZModule)
  },
  {
    path: AppRoutes.ANY,
    redirectTo: AppRoutes.DRAGON_BALL_Z
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
