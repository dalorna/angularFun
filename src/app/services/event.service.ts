import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../interfaces/Event';

const options: { headers: HttpHeaders } = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl: string = 'http://localhost:5000/events';

  constructor(private httpClient: HttpClient) { }

  getEvent(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.apiUrl);
  }
  getEventById(id: number): Observable<Event> {
    return this.httpClient.get<Event>(`${this.apiUrl}/${id}`);
  }
  deleteEvent(id: number): void {
    this.httpClient.delete<Event>(`${this.apiUrl}/${id}`);
  }
  updateEvent(event: Event): Observable<Event> {
    return this.httpClient.put<Event>(`${this.apiUrl}/${event.id}`, event, options);
  }
  saveEvent(event: Event): Observable<Event> {
    return this.httpClient.post<Event>(this.apiUrl, event, options);
  }
}
