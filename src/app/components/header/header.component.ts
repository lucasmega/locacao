import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isOpen = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void { }

  public toogle(): void {
    this.sharedService.toogle(this.isOpen = !this.isOpen);
  }

}
