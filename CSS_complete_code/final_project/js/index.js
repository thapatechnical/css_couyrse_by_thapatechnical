// root@srv416761:~/TypeScript-Simple-Mern-Project# dir
// '  client  package.json  package-lock.json  pnpm-lock.yaml  server
// root@srv416761:~/TypeScript-Simple-Mern-Project# cd server/
// root@srv416761:~/TypeScript-Simple-Mern-Project/server#

// //? installing pnpm as a node package manager

// root@srv416761:~/TypeScript-Simple-Mern-Project/server# npm i -g pnpm

// added 1 package in 3s

// 1 package is looking for funding
//   run `npm fund` for details
// npm notice
// npm notice New major version of npm available! 9.8.1 -> 10.1.0
// npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.1.0
// npm notice Run npm install -g npm@10.1.0 to update!
// npm notice
// root@srv416761:~/TypeScript-Simple-Mern-Project/server# pnpm install
// Lockfile is up to date, resolution step is skipped
// Packages: +170

// server {
//     listen 80;
//     root /root/TypeScript-Simple-Mern-Project/client/dist;
//     location / {
//         try_files $uri $uri/ =404;
//     }
// }

// server {
//     listen 80;
//             server_name thapatechnical.online www.thapatechnical.online;
//     root /root/TypeScript-Simple-Mern-Project/client/dist;

//     location / {
//             try_files $uri $uri/ /index.html;
//     }
// }

// server {
//     listen 80;
//             server_name api.thapatechnical.online www.api.thapatechnical.online;

//     location / {
//             proxy_pass http://localhost:8000;
//             proxy_http_version 1.1;
//             proxy_set_header Upgrade $http_upgrade;
//             proxy_set_header Connection 'upgrade';
//             proxy_set_header Host $host;
//             proxy_cache_bypass $http_upgrade;
//     }
// }
