import { map } from 'rxjs/operators';
import { PaginationResult } from "./../_models/Pagination";
import { Observable, pipe } from "rxjs";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { User } from "../_models/User";

@Injectable({
  providedIn: "root",
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(page?, itemsPerPage?): Observable<PaginationResult<User[]>> {
    const paginatedResult: PaginationResult<User[]> = new PaginationResult<
      User[]
    >();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append("pageNumber", page);
      params = params.append("pageSize", itemsPerPage);
    }

    return this.http.get<User[]>(this.baseUrl + "user", {observe: 'response', params})
    .pipe(
      map(response => {
        paginatedResult.result = response.body;
        if ( response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + "user/" + id);
  }

  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + "user/" + id, user);
  }
}
