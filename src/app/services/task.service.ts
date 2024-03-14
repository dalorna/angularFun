import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../interfaces/Tasks';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private httpClient: HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl)
  }
  deleteTask(task: Task): Observable<Task> {
    return this.httpClient.delete<Task>(`${this.apiUrl}/${task.id}`);
  }
  updateTaskReminder(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(`${this.apiUrl}/${task.id}`, task, httpOptions);
  }
  saveTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, task, httpOptions);
  }

}
