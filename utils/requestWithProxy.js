import axios from 'axios';
import bcrypt from 'bcrypt';

export const requestWithProxy = {
  getDataWithProxy: async (article, proxy) => {
    const url = `https://kaspi.kz/yml/offer-view/offers/${article}`;
    const MAX_ERRORS_PER_REQUEST = 3;
    const RETRY_DELAY = 15000;
    let retries = 0;
    let errors = 0;

    while (retries <= MAX_ERRORS_PER_REQUEST) {
      try {
        const response = await axios.post(url, null, {
          proxy: {
            host: proxy.ip,
            port: proxy.port,
            auth: {
              username: proxy.login,
              password: proxy.password,
            },
          },
          timeout: 7000,
        });

        console.log(`Article data ${article}:`, response.data);

        return true;
      } catch (error) {
        console.error(
          `Error when getting data by article ${article}:`,
          error.message
        );
        retries++;
        errors++;

        if (errors > MAX_ERRORS_PER_REQUEST) {
          console.error(
            `Skip the article ${article} due to error limit exceeded.`
          );
          return false;
        }

        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      }
    }
  },
};
