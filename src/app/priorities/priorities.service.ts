import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { PriorityInterface } from './types/priority.interface';




@Injectable()
export class PrioritiesService {
  private priorities: PriorityInterface[] = [
    { id: '1', name: 'John', age: 30, avatar: 'john_avatar.jpg', role: 'Admin', created_at: '2022-01-01', status: 'Active' },
    { id: '2', name: 'Alice', age: 28, avatar: 'alice_avatar.jpg', role: 'User', created_at: '2022-02-15', status: 'Away' },
    { id: '3', name: 'Bob', age: 35, avatar: 'bob_avatar.jpg', role: 'Moderator', created_at: '2022-02-15', status: 'Busy' },
  ];

  // READ operation - Get all priorities
  getPriorities(): Observable<PriorityInterface[]> { 
    return of(this.priorities).pipe(delay(2000));
  }

  // READ operation - Get a specific priority by ID
  getPriorityById(id: string): Observable<PriorityInterface | undefined> {
    const priority = this.priorities.find(item => item.id === id);
    return of(priority).pipe(delay(1000));
  }

  // CREATE operation - Add a new priority
  addPriority(newPriority: PriorityInterface): Observable<void> {
    // Create a new array with the existing priorities and the new priority
    const updatedPriorities = [...this.priorities, newPriority];
  
    // Simulate an asynchronous operation using a delay
    return of(undefined).pipe(
      delay(1000),
      tap(() => {
        // Update the priorities after the delay
        this.priorities = updatedPriorities;
      })
    );
  }

  // UPDATE operation - Update an existing priority
  updatePriority(updatedPriority: PriorityInterface): Observable<void> {
    const index = this.priorities.findIndex(item => item.id === updatedPriority.id);
    if (index !== -1) {
      // Create a new array with the updated item
      const updatedPriorities = [
        ...this.priorities.slice(0, index), // Items before the updated one
        updatedPriority,
        ...this.priorities.slice(index + 1) // Items after the updated one
      ];
      this.priorities = updatedPriorities; // Assign the new array
    }
    // Return observable with delay to simulate async operation
    return of(undefined).pipe(delay(1000));
  }
  

  // DELETE operation - Delete a priority by ID
  deletePriority(id: string): Observable<void> {
    const updatedPriorities = this.priorities.filter(item => item.id !== id);
    this.priorities = updatedPriorities; // Assign the new array
    // Return observable with delay to simulate async operation
    return of(undefined).pipe(delay(1000));
  }
}
