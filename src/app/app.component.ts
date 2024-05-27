import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';

@Component({
  selector: 'micro-nav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'micro-nav';

  items: MenuItem[] = [];

  subscription: Subscription = new Subscription();
  props: any;
  counter = 0;

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {
    singleSpaPropsSubject.subscribe((singleSpaProps) => {
      this.props = singleSpaProps
    })
  }

  ngOnInit() {
    this.setItems();

    this.props.eventBus.on('add-count', (value: boolean) => {
      console.log(value)
      if (value) {
        this.counter++;
      }
      console.log(this.counter)
      this.cdRef.detectChanges();
    })

    this.props.eventBus.on('sub-count', (value: boolean) => {
      if (value) {
        this.counter--;
        this.cdRef.detectChanges();
      }
    })

  }

  navigateToMicroNg() {
    this.router.navigate(['/micro-ng']);
  }

  setItems() {
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
}
