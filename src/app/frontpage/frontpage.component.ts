import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  @Output() selectedIndex = true;

  constructor(
    
  ) {
    
  }

  

  ngOnInit(): void {

  }

}
