import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {

    id:string

   @IsString()
    firs_name: string;
  
    @IsString()
    last_name: string;
  
  
    age: number;
  
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    password: string;
  
   
    is_admin: boolean;
}
