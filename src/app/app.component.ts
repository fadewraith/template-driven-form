import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // this gives access to same that from without passing it to onsubmit , this is a special use of if we need to access the form not just at the point of submitted but also earlier 

  @ViewChild('userForm') signUpForm: NgForm;

  answer = '';
  genders = ['male', 'female'];

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };

  submitted = false;

  defaultQuestion: string = 'pet';
  // works on the value given to the input field in value
  // defaultQuestion: string = 'teacher';

  suggestUserName() {
    const suggestedName = 'Superuser';
    // setValue allow us to set the whole form, here we have to pass the javascript object exactly representing the form
    // it psses the exact copy of form or we can say formvalue as a js object and can override the value of each control this is not the best approach so its commented out
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    // this is the better appraoch, here we might want to override username but dont write the other value
    // patchValue is only available on form wrapped by ngform itself
    // setvalue to set the whole form and patchvalue to set the part of form
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    });
  }

  // onSubmit(form: HTMLFormElement) {63+
  //   console.warn(form);
  // }
  // now it will be of type ngform
  // @viewchild allows us to access a local reference element controller which holds a local reference 
  // onSubmit(form: NgForm) {
  //   console.warn(form);
  // }

  onSubmit() {
    // console.warn(this.signUpForm);
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.userData.secret;
    this.user.answer = this.signUpForm.value.userData.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;
// we can do this with setValue also
// if we want, we can pass the same object as in setValue() to reset() which will then reset the form to sepcific values
    this.signUpForm.reset();

  }
}
