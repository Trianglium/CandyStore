import { Injectable } from '@angular/core';
import { Feedback, ContactType } from '../shared/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }

  getFeedback(): Feedback[] {
    return;
  }
  OnSubmit() {

  }
}
