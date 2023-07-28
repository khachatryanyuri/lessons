import { Proxy } from '../models/proxyModel.js';
import bcrypt from 'bcrypt';

const proxyData = [
  {
    ip: '66.33.212.161',
    port: 15891,
    login: 'proxy1_login',
    password: 'proxy1_password',
  },
  {
    ip: '176.103.51.24',
    port: 30421,
    login: 'proxy2_login',
    password: 'proxy2_password',
  },
  {
    ip: '123.45.67.89',
    port: 5001,
    login: 'proxy3_login',
    password: 'proxy3_password',
  },
  {
    ip: '111.222.333.444',
    port: 5002,
    login: 'proxy4_login',
    password: 'proxy4_password',
  },
  {
    ip: '192.168.1.100',
    port: 8080,
    login: 'proxy5_login',
    password: 'proxy5_password',
  },
  {
    ip: '198.51.100.42',
    port: 8000,
    login: 'proxy6_login',
    password: 'proxy6_password',
  },
  {
    ip: '203.0.113.10',
    port: 5003,
    login: 'proxy7_login',
    password: 'proxy7_password',
  },
  {
    ip: '128.0.0.1',
    port: 9000,
    login: 'proxy8_login',
    password: 'proxy8_password',
  },
  {
    ip: '10.0.0.1',
    port: 1080,
    login: 'proxy9_login',
    password: 'proxy9_password',
  },
  {
    ip: '172.16.0.1',
    port: 3128,
    login: 'proxy10_login',
    password: 'proxy10_password',
  },
  {
    ip: '192.168.0.1',
    port: 8888,
    login: 'proxy11_login',
    password: 'proxy11_password',
  },
  {
    ip: '104.238.97.230',
    port: 8118,
    login: 'proxy12_login',
    password: 'proxy12_password',
  },
  {
    ip: '109.86.47.224',
    port: 65103,
    login: 'proxy13_login',
    password: 'proxy13_password',
  },
  {
    ip: '178.238.232.50',
    port: 43747,
    login: 'proxy14_login',
    password: 'proxy14_password',
  },
  {
    ip: '94.228.207.3',
    port: 31479,
    login: 'proxy15_login',
    password: 'proxy15_password',
  },
  {
    ip: '51.79.142.36',
    port: 1080,
    login: 'proxy16_login',
    password: 'proxy16_password',
  },
  {
    ip: '92.246.147.126',
    port: 56831,
    login: 'proxy17_login',
    password: 'proxy17_password',
  },
  {
    ip: '35.225.114.58',
    port: 1080,
    login: 'proxy18_login',
    password: 'proxy18_password',
  },
  {
    ip: '196.53.96.25',
    port: 8080,
    login: 'proxy19_login',
    password: 'proxy19_password',
  },
  {
    ip: '200.141.210.226',
    port: 8080,
    login: 'proxy20_login',
    password: 'proxy20_password',
  },
  {
    ip: '173.82.73.134',
    port: 3128,
    login: 'proxy21_login',
    password: 'proxy21_password',
  },
  {
    ip: '190.214.27.234',
    port: 53281,
    login: 'proxy22_login',
    password: 'proxy22_password',
  },
  {
    ip: '45.227.255.1',
    port: 53281,
    login: 'proxy23_login',
    password: 'proxy23_password',
  },
  {
    ip: '185.94.193.90',
    port: 80,
    login: 'proxy24_login',
    password: 'proxy24_password',
  },
  {
    ip: '213.57.48.83',
    port: 3128,
    login: 'proxy25_login',
    password: 'proxy25_password',
  },
  {
    ip: '36.37.160.207',
    port: 9999,
    login: 'proxy26_login',
    password: 'proxy26_password',
  },
  {
    ip: '118.24.26.13',
    port: 1080,
    login: 'proxy27_login',
    password: 'proxy27_password',
  },
  {
    ip: '109.238.222.6',
    port: 8888,
    login: 'proxy28_login',
    password: 'proxy28_password',
  },
  {
    ip: '203.177.132.221',
    port: 8080,
    login: 'proxy29_login',
    password: 'proxy29_password',
  },
  {
    ip: '175.139.179.65',
    port: 80,
    login: 'proxy30_login',
    password: 'proxy30_password',
  },
];

export const addProxiesToDatabase = async () => {
  try {
    // Loop through the proxyData array and add each proxy to the database
    for (const proxyInfo of proxyData) {
      const [proxy, created] = await Proxy.findOrCreate({
        where: { ip: proxyInfo.ip, port: proxyInfo.port },
        defaults: proxyInfo,
      });

      if (!created) {
        console.log(
          `Proxy with IP ${proxy.ip} and port ${proxy.port} already exists.`
        );
      }
    }

    console.log('Proxy servers added to the database.');
  } catch (error) {
    console.error('Error adding proxy servers to the database:', error);
  }
};
