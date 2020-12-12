import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontEnd';
  postId: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {      
        // Simple POST request with a JSON body and response type <any>
        /* this.http.post<any>('localhost:3000/user/add', { title: 'Angular POST Request Example' }).subscribe(data => {
            this.postId = data.name;
        }) */
    }
}





