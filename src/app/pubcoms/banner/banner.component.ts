import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //轮播的数据源
  bannerObj=[];
  constructor() { }

  ngOnInit() {
    //发起ajax请求去获取数据
    for (let index = 1; index <= 4; index++) {
      const bannerObj = { 
        "title": "广告"+index, 
        "imgUrl": "assets/images/banner"+index+".jpg", 
        "linkUrl": "http://",
        "description":"广告描述"+index 
      };
      this.bannerObj.push(bannerObj);
    }
  }

}
