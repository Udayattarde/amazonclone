import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/Service/authservice.service';
import { ShoppingCartServiceService } from 'src/app/Service/shopping-cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
dropdownValue:string="All";
Showdropown:boolean=false;
  constructor(public service:ShoppingCartServiceService,public authService:AuthserviceService) { }

  ngOnInit() {
  }
  toggledrop()
  {
    this.Showdropown = !this.Showdropown;
  }
  onclick(p:string)
  {
    console.log(p);
  }
  signOut()
  {
    this.authService.Logout();
  }

}
