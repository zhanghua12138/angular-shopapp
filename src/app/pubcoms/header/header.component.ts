import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //菜单显示的布尔值
  isShow:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
