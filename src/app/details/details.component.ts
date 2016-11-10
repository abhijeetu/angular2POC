import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'my-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
   this.getDetails();
  }

  getDetails(){
    this.route.params.subscribe(params => {
      let id = params['id'];
      console.log('***' + id);
    });
    console.log('Hello Details');
  }

}
