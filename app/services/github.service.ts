import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id ='33adaee4cfc544b8f71d';
  private client_secret ='df8027e2af5948a365df90892e8f5c2a8fa9447b';

  constructor(private _http: Http){
    console.log('Github Service ready...');
  //  this.username='pallabee';
    this.username;
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res=>res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res=>res.json());
  }

  updateUser(username:string){
    this.username=username;
  }
}
