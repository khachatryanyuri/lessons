import { requestWithProxy } from '../utils/requestWithProxy.js';
import { Proxy } from '../models/proxyModel.js';

export const proxyService = {
  fetchProductData: async () => {
    const articlesCount = 5000;
    const proxyRequestLimit = 30;

    const proxies = await Proxy.findAll();
    const proxyCount = proxies.length;

    const articleArray = Array.from(
      { length: articlesCount },
      (_, index) => index + 1
    );

    let proxyIndex = 0;
    let requestsMade = 0;

    for (const article of articleArray) {
      if (proxyIndex >= proxyCount) {
        proxyIndex = 0;
      }

      const proxy = proxies[proxyIndex];

      if (requestsMade >= proxyRequestLimit) {
        proxyIndex++;
        requestsMade = 0;
      }

      const success = await requestWithProxy.getDataWithProxy(article, proxy);

      if (success) {
        proxyIndex++;
        requestsMade++;
      }
    }
  },
};
