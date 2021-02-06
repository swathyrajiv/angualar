import {Routes} from "@angular/router";
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {IntroductionComponent} from './introduction/introduction.component';

export const applicationRoutes :Routes =[
    {path:'home',component:HomeComponent},
{path:'contact',component:ContactComponent},
{path:'introduction',component:IntroductionComponent}


]