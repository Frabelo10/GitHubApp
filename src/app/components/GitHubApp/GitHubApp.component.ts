import { Component, OnInit } from '@angular/core';
import { gitHubAppService } from '../../services/gitHub.service';
import { gitHub } from '../../models/gitHubApp';

@Component({
    selector: 'GitHubApp',
    templateUrl: './GitHubApp.component.html',
    styleUrls: ['./GitHubApp.component.scss'],
  })
  export class GitHubApp implements OnInit {
    repo = {} as gitHub;
    repos: gitHub[] | undefined;

    constructor(private gitHubService: gitHubAppService) {}

    ngOnInit() {
      this.getRepos();
    }
    getRepos() {
      this.gitHubService.getRepos().subscribe((repos: gitHub[]) => {
      this.repos = repos;
      const totalRepo = this.repos.length;
      });
    }
  }