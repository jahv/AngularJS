import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Headers } from '@angular/http';


@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  apiRoot: string = "http://httpbin.org";

  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    this.http.get(url).subscribe(
      res => {
        console.log(res.text())
        console.log(res.json())
      }
    );
  }

  doGETWithParams() {
    console.log("GET WITH PARAMS");
    let url = `${this.apiRoot}/get`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.get(url, {search: search}).subscribe(
      res => console.log(res.json())
    );
  }

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    this.http.post(url, {moo:"foo",goo:"loo"}).subscribe(
      res => console.log(res.json())
    );
  }

  doPOSTWithParams() {
    let url = `${this.apiRoot}/post`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.post(url, {moo:"foo",goo:"loo"}, {search}).subscribe(
      res => console.log(res.json())
    );
  }

  doPUT() {
    console.log("PUT");
    let url = `${this.apiRoot}/put`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.put(url, {moo:"foo",goo:"loo"}, {search}).subscribe(
      res => console.log(res.json())
    );
  }

  doDELETE() {
    console.log("DELETE");
    let url = `${this.apiRoot}/delete`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.delete(url, {search}).subscribe(
      res => console.log(res.json())
    );
  }


  // PROMISES

  doGETAsPromise() {
    console.log("GET AS PROMISE");
    let url = `${this.apiRoot}/get`;
    this.http.get(url)
      .toPromise()
      .then(res => console.log(res.json()));
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
    let url = `${this.apiRoot}/post`;
    this.http.get(url)
      .toPromise()
      .then(
        res => console.log(res.json()),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
    let url = `${this.apiRoot}/post`;
    this.http.get(url).subscribe(
      res => console.log(res.json()),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
    let headers = new Headers();
    headers.append('Authorization', btoa('username:password'));
    let opts = new RequestOptions();
    opts.headers = headers;
    let url = `${this.apiRoot}/get`;
    this.http.get(url, opts).subscribe(
      res => console.log(res.json()),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

}
