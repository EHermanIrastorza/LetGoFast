import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersRepository } from 'src/users/users.repository';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async signUp(CreateUserDto: CreateUserDto) {
      // userService ya verifica el mail
      // const repeatedUser = await this.userRepository.findOne({
      //   where: { email: createAuthDto.email },
      // });
      // if (repeatedUser) throw new BadRequestException('Email already exists');
      // hashear password ANTES de crear usuario y reemplazar
      const hashPassword = await bcrypt.hash(CreateUserDto.password, 10);
      CreateUserDto.password = hashPassword;
        //crear usuario
      const user = await this.userService.create(CreateUserDto);
      if (!user) throw new BadRequestException('User not created');
  
      //pasar nada mas lo importante y no sesnsible
      const payload = { sub: user.id };
      const token = await this.jwtService.sign(payload);
  
  
      //no tiene sentido devolver el token y el user
      return {
        message: 'User created successfully',
      //   user: {
      //     id: user.id,
      //     email: user.email,
      //   },
        token,
      };
      // const repeatedUser = await this.userRepository.findOne({
        //   where: { email: createAuthDto.email },
        // });
        // if (repeatedUser) throw new BadRequestException('Email already exists');
        // const user = await this.userRepository.create(CreateAuthDto);
        // if (!user) throw new BadRequestException('User not created');
        // const hashPassword = await bcrypt.hash(CreateAuthDto.password, 10);
        // const newUser = await this.userRepository.create({
          //   ...CreateAuthDto,
          //   password: hashPassword,
          // });
          
          // await this.userRepository.save(newUser);
          // const payload = { id: user.id, email: user.email };
          // const token = await this.jwtService.signAsync(payload);
          // return {
            //   message: 'User created successfully',
            //   user: {
              //     id: user.id,
              //     email: user.email,
              //   },
              //   token,
              // };
            }
            
            async signIn(createAuthDto: CreateAuthDto) {
              const user = await this.userService.findByEmail(createAuthDto.email);
              if (!user) throw new NotFoundException('User not found');
             console.log(user.password, user.email);
              const isPasswordValid = await bcrypt.compare(
                createAuthDto.password,
                user.password,
              );
              if (!isPasswordValid) throw new UnauthorizedException('Invalid password');
            
              const payload = { sub: user.id, email: user.email };
              const token = await this.jwtService.sign(payload);
            
              return {
                message: 'User logged in successfully',
                user: {
                  id: user.id,
                  email: user.email,
                },
                token,
              };
            }

            findAll() {
              return `This action returns all auth`;
            }
            
            findOne(id: number) {
              return `This action returns a #${id} auth`;
            }
            
            // Date(id: number, UpdateAuthDto: UpdateAuthDto) {
            //   return `This action updates a #${id} auth`;
            // } 
            
            remove(id: number) {
              return `This action removes a #${id} auth`;
            }

            
            
          }