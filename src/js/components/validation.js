import { validateForms } from '../functions/validate-forms';
import toastr from 'toastr';

const rules = [
  {
    ruleSelector: '.name-input',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Minimum length 3 characters'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Enter your name'
      }
    ]
  },
  {
    ruleSelector: '.message-input',
    rules: [
      {
        rule: 'minLength',
        value: 15,
        errorMessage: 'Minimum length 15 characters'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Enter your message'
      }
    ]
  },
  {
    ruleSelector: '.phone-input',
    tel: true,
    telError: 'Invalid phone number',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Invalid phone number'
      }
    ]
  },
];

const afterForm = () => {
  toastr.options.progressBar = true;
  toastr.options.closeButton = true;
  toastr.success('Message sent!');
};

validateForms('.form', rules, afterForm);
