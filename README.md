Repo ini adalah revisi untuk repo: https://github.com/zidni-bwi/react-dashboard-jwt 

folder node_modules tidak disertakan:

Backend:

### `$ npm install`
### `$ npm run start:dev`

Database: nest-jwt

- API login [http://localhost:8000/api/login](http://localhost:8000/api/login) [POST]
- API refreshtoken [http://localhost:8000/api/refreshtoken](http://localhost:8000/api/refreshtoken) [POST]
- API register [http://localhost:8000/api/register](http://localhost:8000/api/register) [POST]
- API get products [http://localhost:8000/api/products](http://localhost:8000/api/products) [POST]
- API get customers [http://localhost:8000/api/customer](http://localhost:8000/api/customers) [POST]

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
