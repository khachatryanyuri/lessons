import helmet from 'helmet';
import cors from 'cors';

const configureApp = (app) => {
  app.use(cors());
  app.use(helmet());
};

export default configureApp;
