import { IsEmail, IsNotEmpty, IsString ,Matches } from 'class-validator';

export class CreateUserDto {

    id:string

  
    @IsString()
    name: string;
  
  
    age: number;
  
    @Matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, {
        message: 'email must be a valid email',
      })
      email: string;
  
      @Matches(
        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/,
        {
          message:
            'Password must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
        },
      )
      password: string;
  
   
    is_admin: boolean;
}
