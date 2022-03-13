Repo ini adalah revisi untuk repo: https://github.com/zidni-bwi/react-dashboard-jwt 

Backend: NestJS

Frontend: ReactJS

Database: Sqlite

folder node_modules tidak disertakan:

Catatan: Sudah bisa sqlite

Notes: Cara kerja refresh token pada repo ini:
- user login dan mendapatkan akses token dan refresh token.
akses token kadaluarsa dalam 4 detik sedangkan refresh token kadaluarsa dalam 3 hari
untuk refresh token dan tanggal kadaluarsanya di simpan oleh server bersama database user sedangkan akses token hanya dimiliki oleh user via browser
- saat akses token kadaluarsa dan user melakukan request maka refresh token yang dikirim akan diverivikasi seperti tanggal kadaluarsanya, serta kecocokan refresh token yang dikirim user dengan refresh token yang tersimpan di database user.
- setelah kecocokan ditemukan maka server mengirim token akses dan token refresh yang baru

User login:
- username: admin, password: admin
- username: q, password: q

Registrasi:
http://localhost:3000/register [ReactJS]

Backend:

### `$ npm install`
### `$ npm run start:dev`

Database: nest-jwt

- API login [http://localhost:8000/api/login](http://localhost:8000/api/login) [POST] [NestJS]
- API refreshtoken [http://localhost:8000/api/refreshtoken](http://localhost:8000/api/refreshtoken) [POST] [NestJS]
- API register [http://localhost:8000/api/register](http://localhost:8000/api/register) [POST] [NestJS]
- API get products [http://localhost:8000/api/products](http://localhost:8000/api/products) [POST] [NestJS]
- API get customers [http://localhost:8000/api/customer](http://localhost:8000/api/customers) [POST] [NestJS]

Frontend:

### `$ npm install`
### `$ npm start`

**Screenshot:**
Kondisi awal, token awal (Localstorage):
![alt tag](https://github.com/zidni-bwi/react-dashboard-nest-jwt/blob/main/sc21.png)
Kondisi awal, token belum kadaluarsa (console):
![alt tag](https://github.com/zidni-bwi/react-dashboard-nest-jwt/blob/main/sc22.png)
Ketika token kadaluarsa maka akan dibuat request refresh token pada API /api/refreshtoken:
![alt tag](https://github.com/zidni-bwi/react-dashboard-nest-jwt/blob/main/sc23.png)
akses token dan refresh token telah diperbaharui secara otomatis:
![alt tag](https://github.com/zidni-bwi/react-dashboard-nest-jwt/blob/main/sc24.png)

UI dashboard:
![alt tag](https://github.com/zidni-bwi/react-dashboard-nest-jwt/blob/main/scc01.png)
UI Customers:
![alt tag](https://github.com/zidni-bwi/react-dashboard-nest-jwt/blob/main/scc02.png)
UI Products:
![alt tag](https://github.com/zidni-bwi/react-dashboard-nest-jwt/blob/main/scc03.png)
