import { Component } from '@angular/core';
import { NgConfirmService } from 'ng-confirm-box';
import { VisitorStateService } from 'src/app/services/visitor-state.service';

@Component({
  selector: 'app-admin-visitor',
  templateUrl: './admin-visitor.component.html',
  styleUrls: ['./admin-visitor.component.css']
})
export class AdminVisitorComponent {
  constructor(public visitorService: VisitorStateService){}

  isChecked: boolean = false;
  isDisabled: boolean = false;
  checkValue(event: any){
    this.isChecked =  !this.isChecked;
    this.isDisabled=true;
  }
  deleteVisitor(email: string) {
    this.confirmService.showConfirm('Are you sure you want to delete this visitor?', ()=> {
      this.visitorService.deleteVisitor(email);
    }, () => {}) }
}
