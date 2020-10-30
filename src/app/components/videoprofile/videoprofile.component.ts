import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dz-videoprofile',
  templateUrl: './videoprofile.component.html',
  styleUrls: ['./videoprofile.component.scss'],
})
export class VideoprofileComponent implements OnInit {

  @Input()
  seconds: number = 3;

  ext = '.jpg';

  ngOnInit() {

  }

  onImageLoaded() {
    setTimeout(() => {
      this.ext = '.gif';
    }, this.seconds * 1000);
  }
}

