import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { authGuard } from './guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { FreindComponent } from './pages/freind/freind.component';
import { MessagerComponent } from './pages/messager/messager.component';
import { RequestComponent } from './pages/request/request.component';

export const routes: Routes = [
    {path: 'login', component: AuthComponent},
    {path: 'registration', component: AuthComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
    {path: 'freind', component: FreindComponent, canActivate: [authGuard]},
    {path: 'messager/:id', component: MessagerComponent, canActivate: [authGuard]},
    {path: 'requests', component: RequestComponent, canActivate: [authGuard]},
];
