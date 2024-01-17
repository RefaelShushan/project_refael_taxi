import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import LoginInterface from './interface/loginInterface';
import { comparePassword, generateUserPassword } from './helpers/bcrypt';
import { generateAuthToken } from 'src/auth/helpers/jwt';
import RegisterInterface from './interface/RegisterInterface';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<RegisterInterface>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    const password = generateUserPassword(createdUser.password)
    createdUser.password = password
    return createdUser.save();
  }

  async login(user: LoginInterface) {
    try {
      const { email, password: passwordFromClient } = user;

      const userFromDb = await this.userModel.findOne({ email });
      if (!userFromDb) throw new Error('Invalid email or password');
      const { _id, isAdmin, password: passwordFromDB } = userFromDb;

      const validPassword = comparePassword(passwordFromClient, passwordFromDB);
      if (!validPassword) throw new Error('Invalid email or password');

      const token = generateAuthToken({ _id, isAdmin });

      return token;
    } catch (error) {
    
      return Promise.reject(error);
      
    }
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id:string) {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });

    // if (!cat) {
    //   throw new NotFoundException(`Cat with id ${id} not found`);
    // }
    return user;
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndDelete(id);

    // if (!cat) {
    //   throw new NotFoundException(`Cat with id ${id} not found`);
    // }

    return user;
  }
}
