import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    
    this.items = [
      {
          label:'Home',
          styleClass: 'navElement',
          routerLink: ['/#']
      },
      {
          label:'Uffici',
          icon:'pi pi-fw pi-desktop',
          items:[
              {
                  label:'Sedi',
                  //icon:'pi pi-fw pi-desktop',
                  items: [
                    {
                        label:'Roma',
                        //icon: 'pi pi-fw pi-desktop',
                        items: [
                            {
                                label:'Stanza 504',
                                //icon:'pi pi-fw pi-desktop',
                            },
                            {
                                label:'Stanza 506',
                                //icon:'pi pi-fw pi-desktop',
                            }
                        ]
                    },
                    {
                        label:'Milano',
                        items: [
                            {
                                label:'Stanza 504',
                                //icon:'pi pi-fw pi-desktop',
                            },
                            {
                                label:'Stanza 506',
                                //icon:'pi pi-fw pi-desktop',
                            }
                        ]
                    }
                  ]
              }
          ]
      },
      {
          label:'Calendario',
          icon:'pi pi-fw pi-calendar',
      },
      {
          label:'Logout',
          icon:'pi pi-fw pi-power-off'
      }
    ];
    }
}

