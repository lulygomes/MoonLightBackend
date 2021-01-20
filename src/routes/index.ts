import { Router } from 'express';
import cors from 'cors';

import customersRouter from './customers.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use(cors);

routes.use('/customers', customersRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
