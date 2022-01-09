import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./screens/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'uploadproof',
    loadChildren: () =>
      import('./screens/uploadproof/uploadproof.module').then(
        (m) => m.UploadproofPageModule
      ),
  },
  {
    path: 'car-details',
    loadChildren: () => import('./screens/car-details/car-details.module').then( m => m.CarDetailsPageModule)
  },
  // {
  //   path: 'current-booking',
  //   loadChildren: () => import('./screens/current-booking/current-booking.module').then( m => m.CurrentBookingPageModule)
  // },
  // {
  //   path: 'old-bookings',
  //   loadChildren: () => import('./screens/old-bookings/old-bookings.module').then( m => m.OldBookingsPageModule)
  // },
  // {
  //   path: 'old-bookings',
  //   loadChildren: () => import('./screens/old-bookings/old-bookings.module').then( m => m.OldBookingsPageModule)
  // },
  // {
  //   path: 'current-booking',
  //   loadChildren: () => import('./screens/current-booking/current-booking.module').then( m => m.CurrentBookingPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
