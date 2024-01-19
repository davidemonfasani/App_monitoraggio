import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yeah',
  templateUrl: './yeah.component.html',
  styleUrls: ['./yeah.component.scss'],
})
export class YeahComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("ok");
  }

}
