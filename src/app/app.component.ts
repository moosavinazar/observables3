import {Component, OnInit} from '@angular/core';
import {of, from} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {mockData} from "../helpers/mockData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

    of(mockData).subscribe(console.log);

    this.http.get('assets/mockData.json').subscribe(console.log);

    of(['name1', 'name2', 'name3']).subscribe(console.log);

    of('name1', 'name2', 'name3').subscribe(console.log);
    from(['name1', 'name2', 'name3']).subscribe(console.log);

  }
}
