import { GithubFollowersService } from './../github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];
  constructor(private service: GithubFollowersService) { }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(followers => this.followers= followers)
    this.service.getRecords();
    this.service.getPics();
  }

}
