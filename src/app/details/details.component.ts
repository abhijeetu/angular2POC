import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'my-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute) {

  }

  ngOnInit() {
    //this.productID = route.snapshot.params['id']; // 3
    this.route.params.subscribe(params => {
      let id = params['id'];
      console.log('***' + id);
    });
    /*this.route.params.forEach((params : Params) => {
      let index = +params['id'];
      console.log("index=" + index);
    });*/
    console.log('Hello Details');
  }

}
