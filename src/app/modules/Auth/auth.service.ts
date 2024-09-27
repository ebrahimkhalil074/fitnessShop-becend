
// import httpStatus from 'http-status';

// import config from '../../config';
// import AppError from '../../errors/AppError';

// import { createToken, verifyToken } from './auth.utils';
// import { Useres } from '../user/user.model';



// const loginUser = async (payload:{email:string,password:string}) => {
//   // console.log(payload);
  
//   // checking if the user is exist
//    const user = await Useres.findOne({email:payload.email});
//   //  console.log(user)

//   // if (!user) {
//   //   throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
//   // }
//   // checking if the user is already deleted

//   // const isDeleted = user?.isDeleted;

//   // if (isDeleted) {
//   //   throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
//   // }

//   // checking if the user is blocked

//   // const userStatus = user?.status;

//   // if (userStatus === 'blocked') {
//   //   throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
//   // }

//   //checking if the password is correct

//   // if (!(await User.isPasswordMatched(payload?.password, user?.password)))
//   //   throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

//   //create token and sent to the  client

//   const jwtPayload = {
//     email: user!.email,
//     role: user!.role,
//     name:user!.name,
//   };

//   const accessToken = createToken(
//     jwtPayload,
//     config.jwt_access_secret as string,
//     config.jwt_access_expires_in as string,
//   );

//   const refreshToken = createToken(
//     jwtPayload,
//     config.jwt_refresh_secret as string,
//     config.jwt_refresh_expires_in as string,
//   );

//   return {
//     accessToken: `Bearer ${accessToken}`,
//     refreshToken: `Bearer ${refreshToken}`,
//   };
// };



// const refreshToken = async (token: string) => {
//   console.log(token)
//   // checking if the given token is valid
//   const decoded = verifyToken(token, config.jwt_refresh_secret as string);

//   const { email } = decoded;
// console.log('first',email)
//   // checking if the user is exist
//   const user = await Useres.find({email});

//   if (!user) {
//     throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
//   }
//   // checking if the user is already deleted
//   const isDeleted = user?.isDeleted;

//   if (isDeleted) {
//     throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
//   }



//   const jwtPayload = { email:user.email, role: user.role ,name:user.name}

//   const accessToken = createToken(
//     jwtPayload,
//     config.jwt_access_secret as string,
//     config.jwt_access_expires_in as string,
//   );

//   return {
//     accessToken,
//   };
// };





// export const AuthServices = {
//   loginUser,
//   refreshToken,
// };
import httpStatus from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import { createToken, verifyToken } from './auth.utils';
import { Useres } from '../user/user.model';

// Define login payload type
interface ILoginPayload {
  email: string;
  password: string;
}

// Define JWT payload type
interface IJwtPayload {
  email: string;
  role: string;
  name: string;
}

// Login function
const loginUser = async (payload: ILoginPayload): Promise<{ accessToken: string; refreshToken: string }> => {
  // Checking if the user exists
  const user = await Useres.findOne({ email: payload.email });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  // Checking if the user is deleted or blocked
  if (user.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted!');
  }



  

  // Create JWT payload
  const jwtPayload: IJwtPayload = {
    email: user.email,
    role: user.role,
    name: user.name,
  };

  // Create tokens
  const accessToken = createToken(jwtPayload, config.jwt_access_secret as string, config.jwt_access_expires_in as string);
  const refreshToken = createToken(jwtPayload, config.jwt_refresh_secret as string, config.jwt_refresh_expires_in as string);

  return {
    accessToken: `Bearer ${accessToken}`,
    refreshToken: `Bearer ${refreshToken}`,
  };
};

// Refresh Token function
const refreshToken = async (token: string): Promise<{ accessToken: string }> => {
  console.log(token);
  // Verifying the given token
  const decoded = verifyToken(token, config.jwt_refresh_secret as string) as IJwtPayload;

  const { email } = decoded;
  console.log('first', email);

  // Checking if the user exists
  const user = await Useres.findOne({ email });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  // Checking if the user is deleted
  if (user.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted!');
  }

  // Create JWT payload
  const jwtPayload: IJwtPayload = { email: user.email, role: user.role, name: user.name };

  // Create a new access token
  const accessToken = createToken(jwtPayload, config.jwt_access_secret as string, config.jwt_access_expires_in as string);

  return { accessToken };
};

// Export Auth services with proper TypeScript types
export const AuthServices = {
  loginUser,
  refreshToken,
};
