import { PreventUnsavedGuard } from './_guards/prevent-unsaved.guard';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessageComponent } from './message/message.component';
import { MemberComponent } from './members/member/member.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'lists', component: ListsComponent},
            { path: 'messege', component: MessageComponent},
            { path: 'member', component: MemberComponent, resolve: {users: MemberListResolver}},
            { path: 'member/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            { path: 'edit', component: MemberEditComponent,  resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedGuard]},
        ]
    },

    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];