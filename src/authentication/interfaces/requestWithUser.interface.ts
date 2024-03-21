import { Request } from 'express';
import { User } from '../../users/entities';

export interface RequestWithUser extends Request {
  user: User;
}
