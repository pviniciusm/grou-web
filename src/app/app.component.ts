import { Component, DoCheck, OnChanges, OnInit, ChangeDetectionStrategy, ViewChild  } from '@angular/core';
import { NguCarouselConfig, NguCarousel  } from '@ngu/carousel';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, DoCheck {

  title = 'grourriculum';
  comentarios: any[] = [];

  carouselTile: NguCarouselConfig;

  constructor(private backendService: BackendService) { }

  ngOnInit() { }

  ngDoCheck() { }

}
