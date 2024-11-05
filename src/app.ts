/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());

// app.use(cors({ origin:['https://fitnes-shop.vercel.app','https://fitness-shop-becend.vercel.app'], credentials: true }));
app.use(cors({
  origin: '*',credentials:true
}));

// application routes
app.use('/api', router);
    

app.get('/', (req: Request, res: Response) => {
  res.send('fitnes shop..!');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
