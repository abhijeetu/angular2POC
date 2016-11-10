import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'my-carousel',
  templateUrl: './carousel.component.html'
  // template : '<p>{{myInterval}}</p>'
})
export class CarouselComponent implements OnInit {

  public myInterval: number = 5000;
  public noWrapSlides: boolean = false;
  public slides: Array<any> = [];

  constructor(private router: Router) {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  ngOnInit() {
    console.log('Hello Carousal');
  }


  public addSlide():void {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      image: `//placekitten.com/${newWidth}/300`,
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });
  }

  public removeSlide(index:number):void {
    this.slides.splice(index, 1);
  }

  public gotoDetails(id){
    this.router.navigate(['/details',id]);
  }
}
