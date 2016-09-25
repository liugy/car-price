import { Component, Input } from '@angular/core';
@Component({
  selector: 'assessor-result',
  templateUrl: 'assessor-result.html'
})
export class ResultComponent {
    @Input() assessment: number;
    getResultMessage(): string{
        return "Can not assess since no data found.";
    }
}

