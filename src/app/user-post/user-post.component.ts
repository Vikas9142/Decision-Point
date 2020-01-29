import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  userPost = [];
  id;
  constructor(private activateroute: ActivatedRoute, private apiservice: ApiService) {
    this.id = this.activateroute.snapshot.queryParamMap.get('userId');
  }

  ngOnInit() {
    this.apiservice.userPost(this.id).subscribe(posts => {
      this.userPost = posts;
      console.log(this.userPost);
    });
  }

}
