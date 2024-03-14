import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatSidenavContainer} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatSidenav} from '@angular/material/sidenav';
import {MatIconButton} from '@angular/material/button';
import {MatSidenavContent} from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatSidenavContainer,
    MatNavList,
    MatSidenav,
    MatListItem,
    MatIconButton,
    MatSidenavContent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
