import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { AutocompleteComponent } from './material/autocomplete/autocomplete.component';
import { TemplateSyntaxComponent } from './angular/template-syntax/template-syntax.component';
import { DirectivesComponent } from './angular/directives/directives.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'sidenav', component: SidenavComponent,
        children: [
            { path: 'autocomplete', component: AutocompleteComponent },
            { path: 'template-syntax', component: TemplateSyntaxComponent },
            { path: 'directives', component: DirectivesComponent }
        ]
    }
];
