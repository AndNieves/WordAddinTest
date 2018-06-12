import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Reference} from '../entities/reference';
import {ApiipaService} from '../services/apiipa.service';

@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.component.html',
  styleUrls: ['./reference-list.component.css']
})
export class ReferenceListComponent implements OnInit {

  references: Observable<Reference[]>;


  constructor(private apiService: ApiipaService) {
  }

  loadReferences(): void {
    this.references = this.apiService.getReferences();
    console.log(this.references);
  }

  ngOnInit() {
    this.loadReferences();
  }

}
