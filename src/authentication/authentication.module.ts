import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthenticationController } from './authentication.controller';

@Module({
  providers: [AuthenticationService, LocalStrategy],
  imports: [UsersModule, PassportModule],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
