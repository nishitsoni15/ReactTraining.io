export const validUsername = new RegExp(
    '^\\w[\\w.]{2,18}\\w$'
);
export const validEmail = new RegExp(
    '/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-] /'
 );
 export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

export const validContact = new RegExp(
    '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'

);
