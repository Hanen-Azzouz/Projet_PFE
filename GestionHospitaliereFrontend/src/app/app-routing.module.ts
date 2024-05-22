import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltemplateBackComponent } from './back-office/alltemplate-back/alltemplate-back.component';
import { HomeComponent } from './front-office-pages/home/home.component';
import { AlltemplateFrontComponent } from './front-office/alltemplate-front/alltemplate-front.component';
import { LoginComponent } from './Users Components/Components/login/login.component';
import { AddUserComponent } from './Users Components/Components/add-user/add-user.component';


const routes: Routes = [


  {path: 'login',component:LoginComponent},
  {
  path:'',component:AlltemplateFrontComponent,
  children:[   
    //{path: '',component:LoginComponent}
    //{path: '/home', component:HomeComponent}

    ]


  },

  {path:'admin', component:AlltemplateBackComponent,
  children:[
    {path: 'addUser',component:AddUserComponent}


   //{path: '/',component:}
    //{path:'addContrat',component:AddContratComponent}
  ]
  }
  
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
