import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { gitHubAppService } from '../../services/gitHub.service';
import { gitHub } from '../../models/gitHubApp';
import { Observable } from 'rxjs';

@Component({
  selector: 'GitHubApp',
  templateUrl: './GitHubApp.component.html',
  styleUrls: ['./GitHubApp.component.scss'],
})
export class GitHubApp implements OnInit {
  repo = {} as gitHub;
  repos: gitHub[] | undefined;

  @Input() pageNumber = 0;
  @Input() pageSize = 0;
  @Input() changed: Observable<boolean> = new Observable();
  @Output() totalResults: EventEmitter<number> = new EventEmitter();

  constructor(private gitHubService: gitHubAppService) {}

  ngOnInit() {
    this.getTotalPage();
    this.getRepos();
  }

  getTotalPage() {
    this.gitHubService.getRepos(0, 0).subscribe((repos: gitHub[]) => {
      console.log(repos);
      const totalRepo = repos.length;
      this.totalResults.emit(totalRepo);
    });
  }

  getRepos() {
    this.gitHubService
      .getRepos(this.pageNumber, this.pageSize)
      .subscribe((repos: gitHub[]) => {
        this.repos = repos;
      });
  }
}
