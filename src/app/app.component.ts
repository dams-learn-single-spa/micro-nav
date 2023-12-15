import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'micro-nav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'micro-nav';

  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        command: (e) => {
          console.log(e);
          this.router.navigate(['/']);
        },
      },
      {
        label: 'Micro-NG',
        command: (e) => {
          console.log(e);
          this.router.navigate(['/micro-ng']);
        },
      },
      {
        label: 'Micro-React',
        command: (e) => {
          this.router.navigate(['/micro-react']);
        },
      },
      {
        label: 'Micro-Vue',
        command: (e) => {
          this.router.navigate(['/micro-vue']);
        },
      },
    ];
  }

  navigateToMicroNg() {
    this.router.navigate(['/micro-ng']);
  }
}
