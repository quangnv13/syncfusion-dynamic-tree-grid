import { FormGroup } from "@angular/forms";

const markAsDirtyForm = (form: FormGroup): void => {
    Object.values(form.controls).forEach((control) => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  };

  export const utils = {
    markAsDirtyForm,
  };