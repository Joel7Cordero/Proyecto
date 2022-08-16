import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithOutSaveGuard } from '../guards/with-out-save.guard';
import { DataResolverService } from '../resolvers/data.resolver.service';
import { ContactReactiveComponent } from './contact-reactive.component';

const routes: Routes = [
  {
    path: '', component: ContactReactiveComponent,
    canDeactivate: [WithOutSaveGuard],
    resolve: { departments: DataResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactReactiveRoutingModule { }
