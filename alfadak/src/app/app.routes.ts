import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'home', component: HomeComponent},
    {path: 'news', component: NewsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
];
