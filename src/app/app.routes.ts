import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home },

    { path: 'login',
        loadComponent: () => import(`./features/login/login`)
        .then(mod => mod.Login),
    },

    { path: '**', component: NotFound },
];