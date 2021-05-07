import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToDiv(div: string) {
    if(this.router.url === '/'
      || this.router.url.startsWith('/#')) {
      location.href = '#';
      location.href = '#' + div;
    } else {
      this.router.navigate(['/'], { fragment: div, skipLocationChange: true });
    }
  }

}
