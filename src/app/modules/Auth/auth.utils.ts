import jwt, { JwtPayload } from 'jsonwebtoken';

export const createToken = (
  jwtPayload: { email: string; role: string ,name: string},
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};

export const verifyToken = (item: string, secret: string) => {
  const token =item.split(' ')[1]
  return jwt.verify(token, secret) as JwtPayload;
};
