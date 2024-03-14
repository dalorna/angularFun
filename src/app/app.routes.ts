import { Routes } from '@angular/router';
import {TasksComponent} from './components/tasks/tasks.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/layout/home/home.component';
import {EventsComponent} from './pages/events/events.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'task', component: TasksComponent},
  {path: 'events', component: EventsComponent},
  {path: 'about', component: AboutComponent},
];
