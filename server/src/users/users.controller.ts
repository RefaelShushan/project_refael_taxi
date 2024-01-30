import { Controller, Get, Post, Body, Patch, Param, Delete ,
  NotFoundException,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  UnauthorizedException,
  Req, } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AdminGuard } from 'src/auth/guards/admin/admin.guard';
import { LoginGuard } from 'src/auth/guards/login/login.guard';
import { UserPayloadInterface } from 'src/auth/interfaces/TokenInterface';
import { LoginDTO } from './dto/login.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(AdminGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Put(':id')
  @UseGuards(LoginGuard)
  updateUserInfo(
    @Req() req: UserPayloadInterface,
    @Param('id') userId: string, @Body() updateUserDto: UpdateUserDto
  ) {
    try {
      if (req.user._id !== userId) throw new UnauthorizedException();
      // return { message: 'success' };
      return this.usersService.update(userId, updateUserDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  async login(@Body() user: LoginDTO) {
    try {
      const token = await this.usersService.login(user);
      return token;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
