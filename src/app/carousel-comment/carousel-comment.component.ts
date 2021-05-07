import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig, NguCarousel } from '@ngu/carousel';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-carousel-comment',
  templateUrl: './carousel-comment.component.html',
  styleUrls: ['./carousel-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselCommentComponent implements OnInit {

  comentarios: any[] = [];
  carouselTile: NguCarouselConfig;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.carouselTile = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1, all: 0 },
      speed: 100,
      point: {
        visible: true
      },
      touch: true,
      loop: true,
  
      interval: {
        timing: 4000,
        initialDelay: 1
      },
      animation: 'lazy'
    };

    this.backendService.listComments((response:any) => {
      this.comentarios = [];

      const lit = response.data;
      this.comentarios = lit;
    });
  }
}
