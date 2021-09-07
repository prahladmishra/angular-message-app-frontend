import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl:'register.component.html',
    styles: [`
        .error{background-color: rgba(255, 0, 0, 0.2)}
    `]
})
export class RegisterComponent {
    form;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['',[Validators.required, emailValid()]],
            password: ['',Validators.required],
            confirmPassword:['',Validators.required]
        }, { validator: matchingFields('password','confirmPassword')})
    }

    onSubmit() {
        console.log(this.form.errors);
    }

    isValid(control: string) {
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    }
}

let matchingFields = (field1: string, field2: string) => {
    return (form: any) => {
        if (form.controls[field1].value !== form.controls[field2].value) {
            return { mismatchedFields: true }
        } else{
            return null;
        }
    }
}

let emailValid = () => {
    return (control:any) => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return regex.test(control.value) ? null : { invalidEmail: true };
    }
}
