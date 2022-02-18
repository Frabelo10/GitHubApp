import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { gitHubAppService } from '../../services/gitHub.service';
import { gitHub } from '../../models/gitHubApp';
import { Observable } from 'rxjs';

@Component({
  selector: 'GitHubApp',
  templateUrl: './GitHubApp.component.html',
  styleUrls: ['./GitHubApp.component.scss'],
})
export class GitHubApp implements OnInit, OnChanges {
  repo = {} as gitHub;
  repos: gitHub[] | undefined;

  @Input() pageNumber = 1;
  @Input() pageSize = 5;
  @Output() total: EventEmitter<number> = new EventEmitter();

  constructor(private gitHubService: gitHubAppService) {}

  ngOnInit() {
    this.getTotalPage();
    this.getRepos();
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  getTotalPage() {
    this.gitHubService.getRepos(0, 0).subscribe((repos: gitHub[]) => {
      const total = repos.length;
      this.total.emit(total);
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
