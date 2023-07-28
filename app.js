import express from 'express';
import { sequelize } from './config/database.js';
import { Proxy } from './models/proxyModel.js';
import { proxyService } from './services/proxyService.js';
import proxyRoutes from './routes/proxyRoutes.js';
import dotenv from 'dotenv';
import { addProxiesToDatabase } from './utils/addProxiesToDatabase.js';

dotenv.config();

const app = express();

import './config/database.js';
import './config/appConfig.js';

app.use(express.json());

app.use('/api', proxyRoutes);

const port = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    await Proxy.sync();
    await addProxiesToDatabase();
    await proxyService.fetchProductData();
    await sequelize.close();

    console.log('Completed.');
  } catch (error) {
    console.error('An error has occurred:', error);
    await sequelize.close();
  }
})();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
