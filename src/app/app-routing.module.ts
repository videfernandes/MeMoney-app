import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { DespesaCreateComponent } from './components/views/despesa/despesa-create/despesa-create.component';
import { DespesaDeleteComponent } from './components/views/despesa/despesa-delete/despesa-delete.component';
import { DespesaReadAllComponent } from './components/views/despesa/despesa-read-all/despesa-read-all.component';
import { DespesaReadComponent } from './components/views/despesa/despesa-read/despesa-read.component';
import { DespesaUpdateComponent } from './components/views/despesa/despesa-update/despesa-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoriaReadComponent
  },
  {
    path: 'categorias/create',
    component: CategoriaCreateComponent
  },
  {
    path: 'categorias/delete/:id',
    component: CategoriaDeleteComponent
  },
  {
    path: 'categorias/update/:id',
    component: CategoriaUpdateComponent
  },
  {
    path: 'categorias/:id_cat/despesas',
    component: DespesaReadAllComponent
  },
  {
    path: 'categorias/:id_cat/despesas/create',
    component: DespesaCreateComponent
  },
  {
    path: 'categorias/:id_cat/despesas/:id/update',
    component: DespesaUpdateComponent
  },
  {
    path: 'categorias/:id_cat/despesas/:id/delete',
    component: DespesaDeleteComponent
  },
  {
    path: 'categorias/:id_cat/despesas/:id/read',
    component: DespesaReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
