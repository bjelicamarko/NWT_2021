import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfoView } from '../../models/user-info-view';
import { UserTableView } from '../../models/user-table-view';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private headers = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  getUserInfo(id : number) : Observable<HttpResponse<UserInfoView>>{
    let queryParams = {};

    queryParams = {
      headers: this.headers,
      observe: 'response'
    };
    

    return this.http.get<HttpResponse<UserInfoView>>("restaurant/api/users/get_user_info/" + id, queryParams);
  }

  getUsers(pageNum: number, pageSize: number, sortBy: string | undefined, sortDir: string | undefined): Observable<HttpResponse<UserTableView[]>> {
    let queryParams = {};

    if (sortBy === '' || sortDir === ''){
      queryParams = {
        headers: this.headers,
        params: {
          size: pageSize,
          page: pageNum
        },
        observe: 'response'
      };
    }else{
      queryParams = {
        headers: this.headers,
        params: {
          size: pageSize,
          page: pageNum,
          sort: sortBy + "," + sortDir
        },
        observe: 'response'
      };
    }

    return this.http.get<HttpResponse<UserTableView[]>>("restaurant/api/users", queryParams);
  }

  searchUsers(searchFieldVal: string, userTypeVal: string, pageNum: number, pageSize: number, sortBy: string | undefined, sortDir: string | undefined): Observable<HttpResponse<UserTableView[]>> {
    let queryParams = {};

    if (sortBy === '' || sortDir === ''){
      queryParams = {
        headers: this.headers,
        params: {
          searchField: searchFieldVal,
          userType: userTypeVal,
          size: pageSize,
          page: pageNum
        },
        observe: 'response'
      };
    }else{
      queryParams = {
        headers: this.headers,
        params: {
          searchField: searchFieldVal,
          userType: userTypeVal,
          size: pageSize,
          page: pageNum,
          sort: sortBy + "," + sortDir
        },
        observe: 'response'
      };
    }

    

    return this.http.get<HttpResponse<UserTableView[]>>("restaurant/api/users/admin_search", queryParams);
  }
}
