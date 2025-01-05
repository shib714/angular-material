import { Routes } from '@angular/router';
import { StoreViewComponent } from './components/store-view/store-view.component';
import { VehicleSelectionComponent } from './components/vehicle-selection/vehicle-selection.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'vehicle-selection',
        pathMatch: 'full'
    },
    {
        path: 'vehicle-selection',
        component: VehicleSelectionComponent
    },
    {
        path: 'store-view',
        component: StoreViewComponent
    },
    {
        path:'employee-view',
        component: EmployeeViewComponent

    }
    // {
    //     path: "cart", 
    //     component: CartViewComponent
    // },
 
    // {
    //     path: "checkout", 
    //     component: CheckoutViewComponent
    // },
];
