folder node_modules tidak disertakan:

Backend:

### `$ npm install`
### `$ npm run start:dev`

Database: nest-jwt

- API login [http://localhost:8000/api/login](http://localhost:8000/api/login) [POST]
- API refreshtoken [http://localhost:8000/api/refreshtoken](http://localhost:8000/api/refreshtoken) [POST]

Frontend:

### `$ npm install`
### `$ npm start`

**Screenshot:**
Token saat login (Localstorage):
![alt tag](https://github.com/zidni-bwi/react-dashboard-nest-jwt/blob/main/sc21.png)
Token saat login (console):
![alt tag](https://github.com/zidni-bwi/react-dashboard-nest-jwt/blob/main/sc22.png)
Ketika token kadaluarsa maka akan dibuat request refresh token pada API /api/refreshtoken:
![alt tag](https://github.com/zidni-bwi/react-dashboard-nest-jwt/blob/main/sc23.png)
akses token dan refresh token telah diperbaharui secara otomatis:
![alt tag](https://github.com/zidni-bwi/react-dashboard-nest-jwt/blob/main/sc24.png)
