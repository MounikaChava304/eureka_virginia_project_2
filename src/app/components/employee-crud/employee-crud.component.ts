import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchEmployees, deleteEmployee } from '../../actions/employee.actions';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css',
  imports:[CommonModule]
})
export class EmployeeCrudComponent {
employees$: Observable<Employee[]> | undefined;
	  constructor(private store: Store<{ employees: Employee[] }>) {
		this.employees$ = this.store.select(state => {
      console.log('Employee Selector');
      return state.employees;
    });
	  }
	  
    fetchAllEmployees(){
      this.store.dispatch(fetchEmployees());
    }

    deleteEmployee(id:string){
      this.store.dispatch(deleteEmployee({id}));
    }
}
