import { Component } from '@angular/core';
import { Ticket } from './model/ticket';
import { IBtn } from './common/btn-group/btn-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-directives';

  isSearchBarVisible: boolean = false;

  tickets: Ticket[] = [
    {
      id: 1,
      checked: false,
      flightNumber: 'WA12345',
      seat: 'D3',
      service: 'tourist',
    },
    {
      id: 2,
      checked: true,
      flightNumber: 'WA12345',
      seat: 'D4',
      service: 'tourist',
    },
    {
      id: 3,
      checked: false,
      flightNumber: 'WA12345',
      seat: 'F5',
      service: 'tourist',
    },
  ];

  btnGroup: IBtn[] = [
    {name: 'show', type: 'info', icon: 'fa-eye'},
    {name: 'remove', type: 'danger', icon: 'fa-trash'},
  ]

  toggleSearchBar(): void {
    this.isSearchBarVisible = !this.isSearchBarVisible;
  }
}
