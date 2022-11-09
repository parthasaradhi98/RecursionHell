import { Injectable } from "@angular/core";
import { catchError } from "rxjs/internal/operators";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "../environments/environment";
import { from } from "rxjs";
const endpoint = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class RestService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }

  getVideos(): Observable<any> {
    return this.http
      .get<Video>(endpoint + "videos")
      .pipe(catchError(this.handleError));
  }

  getLogin(): Observable<any> {
    
  // window.location.replace(endpoint+'auth/google')
  return this.http
      .get<any>(endpoint + 'auth/google')
      .pipe(catchError(this.handleError));

  }

  
}

export interface Video {
  _id: string;
  uploaded_at: Date;
  uploaded_by: string;
  description: string;
  title: string;
}

export interface User {
  _id: string;
  name: string;
}
