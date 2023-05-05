import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = 'https://www.w3schools.com/howto/img_avatar.png';

  constructor() { }

  ngOnInit(): void {
  }

  errorImg(){
    this.img = '';
  }

  loadImg(){
    console.log('loaded');
    this.loaded.emit(this.img);

  }

}
