import { Routes} from '@angular/router';
import { GsloComponent } from './gslo/gslo.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
export const appRoutes:Routes=[
    { 
        path : 'gslo',
        component :GsloComponent 
    },
    {
    path :'search',
    component:SearchComponent
    },
    {
        path: 'user/:userId',
        component:UserComponent

    }
];
