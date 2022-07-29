import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RabbitAngular';

  constructor(protected servis:AppService) {
  }

  ngOnInit(): void {
  this.rabbit();
  console.log('===============>', this.rabbit())
  }

  rabbit():any{
   return this.servis.query().subscribe({
     next: res => {
       console.log('===============>',res)
     }
   }

   );
  }
}
