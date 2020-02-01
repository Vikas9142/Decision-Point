import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [];
  modUsers = [];
  queryField = new FormControl();
  constructor(private apiservie: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiservie.userList().subscribe(res => {
      this.users = res;
      this.modUsers = res;
    });

    this.queryField.valueChanges.pipe(
      debounceTime(150),
    ).subscribe(newValue => {
      if (newValue !== '') {
        console.log(newValue);
        this.modUsers = this.users.filter(e => e.name.toLowerCase().includes(newValue.toLowerCase()));
      } else {
        this.modUsers = [...this.users];
      }
    });

  }

  navigatePost(userId) {
    this.router.navigate(['user-post'], { queryParams: { userId} });
  }
}
