import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './entities/user';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
 

        constructor(private userService: UserService) {}
    
        @Get()
            async findAll(): Promise<User[]> {
            return this.userService.findAll();
            }
                 
        @Get(':id')
            getone(@Param ('id')id: string) {
            return this.userService.findOne(id);
            }
        @Post()
            async create(@Body() User: User) {
              this.userService.create(User);
            }

        @Put(':id')
            update(@Param('id') id: number, @Body() updateUser: User) {
                  this.userService.update(updateUser, 'id');
            }
        @Delete(':id')
            delete(@Param('id') id: string) {
              return this.userService.remove(id);
            }
    
    }

