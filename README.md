# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

## User Test Data

-- ADMIN USERS --

firstName: 'Camila',
lastName: 'Demo',
email: 'camila@admin.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 1,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Claudio',
lastName: 'Peralta',
email: 'clauperalta@admin.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 1,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Maria',
lastName: 'Rodriguez',
email: 'mariarodriguez@admin.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 1,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Micaela',
lastName: 'Rodriguez',
email: 'micarodriguez@admin.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 1,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Marcelo',
lastName: 'Klen',
email: 'marceloklen@admin.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 1,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Gonzalo',
lastName: 'Persi',
email: 'gonzapersi@admin.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 1,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Gustavo',
lastName: 'Spring',
email: 'gusspring@admin.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png', 
password: '1234567',
organizationId: 1,
roleId: 1,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Carlos',
lastName: 'Guri',
email: 'carlosguri@admin.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 1,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Sofia',
lastName: 'Plagio',
email: 'sofiplagio@admin.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 1,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Peter',
lastName: 'Cascoz',
email: 'petercascoz@admin.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 1,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
-- STANDARD USERS --

firstName: 'Claudia',
lastName: 'Matienzo',
email: 'claumatienzo@gmail.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 2,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Josefina',
lastName: 'Montalva',
email: 'josemontalva@gmail.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 2,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Agustina',
lastName: 'Siareto',
email: 'agussiareto@gmail.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 2,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Agustino',
lastName: 'Correa',
email: 'aguscorrea@gmail.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 2,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Cesar',
lastName: 'Legizamon',
email: 'cesarlegizamon@gmail.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 2,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Hugo',
lastName: 'Ondura',
email: 'hugoondura@gmail.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 2,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Leandro',
lastName: 'Povich',
email: 'leapovich@gmail.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 2,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Eugenia',
lastName: 'sexto',
email: 'eugesexto@gmail.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 2,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Leonardo',
lastName: 'Gomarca',
email: 'leogomarca@gmail.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 2,
createdAt: new Date,
updatedAt: new Date
--------------------------------------------
firstName: 'Matias',
lastName: 'Gulibe',
email: 'matiasgulibe@gmail.com',
image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
password: '1234567',
organizationId: 1,
roleId: 2,
createdAt: new Date,
updatedAt: new Date



