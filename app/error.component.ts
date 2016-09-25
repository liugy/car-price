import { Component, Input } from '@angular/core';
@Component({
  selector: 'assessor-error',
  templateUrl: 'assessor-error.html'
})
export class ErrorComponent {
    @Input() errorMessage: string;
}

