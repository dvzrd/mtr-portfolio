AccountsTemplates.configure({
	// Behaviour
	confirmPassword: true,
	enablePasswordChange: true,
	forbidClientAccountCreation: true,
	overrideLoginErrors: true,
	sendVerificationEmail: false,

	// Appearance
	showAddRemoveServices: false,
	showForgotPasswordLink: false,
	showLabels: false,
	showPlaceholders: true,

	// Client-side Validation
	continuousValidation: true,
	negativeFeedback: true,
	negativeValidation: true,
	positiveValidation: true,
	positiveFeedback: true,
	showValidating: true,

	// Redirects
	homeRoutePath: '/',
	redirectTimeout: 1000,

	// Texts
	texts: {
		button: {
			signIn: 'Login'
		},
		title: {
			signIn: 'Admin Entry',
			changePwd: '',
			resetPwd: '',
			verifyEmail: ''
		}
	}
});

// customize fields

AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');

AccountsTemplates.addFields([
  {
    _id: 'username',
    type: 'text',
    displayName: 'Username',
    minLength: 3,
    required: true
  },
  {
    _id: 'email',
    type: 'email',
    required: true,
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Invalid email',
    displayName: 'Email',
  },
  {
    _id: 'username_and_email',
    type: 'text',
    required: true,
    displayName: 'Username or Email',
    placeholder: 'Username or Email'
  },
  {
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 6,
    displayName: 'Password',
    placeholder: 'Password'
  }
]);
