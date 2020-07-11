import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessageComponent } from './message/message.component';
import { MemberComponent } from './members/member/member.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { 
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'lists', component: ListsComponent},
            { path: 'messege', component: MessageComponent},
            { path: 'member', component: MemberComponent},
            { path: 'member/:id', component: MemberDetailComponent, resolve:{user: MemberDetailResolver}},
        ]
    },

    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];