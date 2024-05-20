import { Routes } from '@angular/router'
import { AuthGuard } from '@core/guards'
import { AccountLayoutComponent } from './layouts/account-layout.component'
import { ConferenceComponent } from './pages/landings/conference/conference.component'
import { InfluencerComponent } from './pages/landings/influencer/influencer.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'conference',
    pathMatch: 'full'
  },
  {
    path: 'conference',
    component: ConferenceComponent,
    data: { title: 'Conference (Event)' },
  },
  {
    path: '**',
    redirectTo: 'conference',
    pathMatch: 'full'
  }
]
