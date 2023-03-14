import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seleton-loader',
  template: `
    <div [ngStyle]="getMyStyles()" class="skelt-load loader"></div>
  `,
  styleUrls: ['./seleton-loader.component.scss']
})
export class SeletonLoaderComponent implements OnInit {
  @Input() Cwidth;
  @Input() Cheight;
  @Input() Circle:boolean;
  @Input() Margin;

  constructor() { }

  ngOnInit() {
  }
  getMyStyles(){
    const myStyle = {
      'width.px':this.Cwidth ? this.Cwidth:'',
      'height.px':this.Cheight ? this.Cheight:'',
      'border-radius':this.Circle ? '50%':'',
      'margin':this.Margin ? this.Margin:'20px 0',
    };
    return myStyle;
  }

}
