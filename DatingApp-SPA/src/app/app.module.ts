import { AlertifyService } from "./_Services/alertify.service";
import { appRoutes } from "./routes";
import { Routes, RouterModule } from "@angular/router";
import { AuthService } from "./_Services/auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ListsComponent } from "./lists/lists.component";
import { MessageComponent } from "./message/message.component";
import { MemberComponent } from "./members/member/member.component";
import { Errorintercepter } from "./_Services/error.intercepter";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserService } from "./_Services/user.service";
import { AuthGuard } from "./_guards/auth.guard";
import { MemberCardComponent } from "./members/member-card/member-card.component";
import { JwtModule } from "@auth0/angular-jwt";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";
import { MemberEditResolver } from "./_resolvers/member-edit.resolver";
import { MemberEditComponent } from "./members/member-edit/member-edit.component";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PreventUnsavedGuard } from "./_guards/prevent-unsaved.guard";
import { PhotoEditorComponent } from "./members/photo-editor/photo-editor.component";
import { FileUploadModule } from "ng2-file-upload";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { PaginationModule } from 'ngx-bootstrap/pagination';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ListsComponent,
    MessageComponent,
    MemberComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    PhotoEditorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    FileUploadModule,
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5000"],
        disallowedRoutes: ["localhost:5000/api/auth"],
      },
    }),
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard,
    Errorintercepter,
    AlertifyService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    PreventUnsavedGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
