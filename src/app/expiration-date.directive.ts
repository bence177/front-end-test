import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const expirationDateValidator: ValidatorFn =
    (control: FormGroup): ValidationErrors | null => {
        const month = control.get('expireMonth').value;
        const year = control.get('expireYear').value;
        const currMonth = new Date().getMonth();
        const currYear = new Date().getFullYear();

        if (+year === currYear && +month < currMonth) {
            return { expirationDate: true };
        }
        return null;
    };
