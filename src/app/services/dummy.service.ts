import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeData } from '@app/exports/models';

@Injectable()
export class DummyService {

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<EmployeeData> {
        return this.http.get<EmployeeData>('http://dummy.restapiexample.com/api/v1/employees');
    }

}
