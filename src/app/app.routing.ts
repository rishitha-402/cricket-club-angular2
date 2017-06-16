import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { CricketclubComponent} from'./cricketclub/cricketclub.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'cricketclub',
    component: CricketclubComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
