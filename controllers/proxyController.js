import { Proxy } from '../models/proxyModel.js';

export const proxyController = {
  getAllProxies: async (req, res) => {
    try {
      const proxies = await Proxy.findAll();
      res.json(proxies);
    } catch (error) {
      console.error('Error getting proxy list:', error);
      res
        .status(500)
        .json({ error: 'An error occurred while getting the proxy list' });
    }
  },
};
