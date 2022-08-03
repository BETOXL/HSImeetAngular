import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JitsiComponent } from './jitsi/jitsi.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { TurnoComponent } from './turnos/turno.component';
const routes: Routes = [
    {
        path: '',
        component: JitsiComponent
    },
    {
        path: 'thank-you',
        component: ThankYouComponent
    },
    {
        path: 'turnos',
        component: TurnoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
