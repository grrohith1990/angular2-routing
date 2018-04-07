import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  paramsSubscription: Subscription;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      name: this.route.snapshot.params['id'],
      id: this.route.snapshot.params['name']
    };
    this.paramsSubscription = this.route.params.subscribe((param:Params)=>{
      this.user.id = param['id'];
      this.user.name = param['name'];
    })
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onReload() {

  }

}
