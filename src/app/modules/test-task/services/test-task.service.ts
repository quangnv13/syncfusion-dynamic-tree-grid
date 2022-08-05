import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { storage } from 'src/app/shared/utilities/storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TestTaskService {
  constructor(private httpClient: HttpClient) {}

  getCurrentState() {
    return this.httpClient.get<any>(
      `${environment.baseUrl}/data/get-current-state`,
      {
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF1YW5nMTMiLCJpYXQiOjE2NTk1OTYzNTh9.hJ62NT3YKEuaCQL-w7ESW_E8oIUs1boCsvK0nbW4ndM` },
      }
    );
  }
}
