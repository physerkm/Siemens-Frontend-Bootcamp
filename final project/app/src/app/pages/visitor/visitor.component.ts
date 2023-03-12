import { BirhdateValidator } from 'src/app/validations/birthdateValidator';
import { Component } from '@angular/core';
import { ContentType } from 'src/app/models/contentType';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PublishMenu } from 'src/app/models/publishMenu';
import { Visitor } from 'src/app/models/visitor';
import { VisitorStateService } from 'src/app/services/visitor-state.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent {

  newVisitor: Visitor | undefined = undefined;

  newFormArray: Visitor[] = [];
  isButtonVisible = false;
  
  visitorForm = this.formBuilder.group({   
    name:["", [Validators.required, Validators.minLength(5)]],
    email: ['email@example.com', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    content:["", [Validators.required, Validators.minLength(50)]],
    publishdateExpire: ["", Validators.required],  
    contentType:["", Validators.required],
    birthDate: ["", [Validators.required, BirhdateValidator()]],
    isConfirmed:[false]
  })
  
  contentTypeList: ContentType[]=[
    {id:1, text:'criticism'},
    {id:2, text:'suggestion'},
  ];
  
  publishMenulist: PublishMenu[] = [
    { id: 1, text: '1 month' },
    { id: 2, text: '3 months' },
    { id: 3, text: '6 months' },
  ];
  
  constructor(private formBuilder: FormBuilder, public visitorStateService: VisitorStateService){}
  
  save(){    
    if (this.visitorForm.invalid) {
      alert('Please fill in all fields!');
      return;
    }
    
    this.visitorForm.controls['isConfirmed'].setValue(false);
    this.newVisitor = this.visitorForm.value as unknown as Visitor;
    this.visitorStateService.addVisitor(this.newVisitor);
    console.log(this.visitorStateService.visitors);
    alert("form başarıyla gönderildi");
    this.visitorStateService.resetForm(this.visitorForm);
  }
  
  isInvalid(controlName: string): boolean{    
    let control = this.visitorForm.get(controlName)!;
    if(!(control.invalid && (control.dirty|| control.touched))) return false;
    if(control.errors?.['required']) return true;
    if(control.errors?.['minlength']) return true;
    if(control.errors?.['maxlength']) return true;
    if(control.errors?.['max']) return true;
    if(control.errors?.['min']) return true;
    if(control.errors?.['pattern']) return true;
    if (control.errors?.['birthdateFormat']) return true;  
    return false;
  }
  
  isValid(controlName: string){
    let control = this.visitorForm.get(controlName)!;
    return control.valid && (control.dirty || control.touched);
  }
  
  getControl(controlName: string){
    return this.visitorForm.get(controlName)!;
  }
  
  isInvalidControl(controlName:string, validationName: string) {
    return this.getControl(controlName).errors?.[validationName];
  }
}