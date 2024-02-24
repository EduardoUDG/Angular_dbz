import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../router.routing';
import { DragonBallZPageComponent } from './components/dragon-ball-zpage/dragon-ball-zpage.component';

const routes: Routes = [
  {
    path: AppRoutes.EMPTY,
    component: DragonBallZPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonBallZRoutingModule { }
