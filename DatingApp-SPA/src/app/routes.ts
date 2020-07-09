import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessageComponent } from './message/message.component';
import { MemberComponent } from './member/member.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './_guard/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'lists', component: ListsComponent, canActivate: [AuthGuard]},
    { path: 'messege', component: MessageComponent},
    { path: 'member', component: MemberComponent},
    { path: 'forbidden', component: ForbiddenComponent},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { permittedRoles: ['Admin']}},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];