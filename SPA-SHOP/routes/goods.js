// routes/goods.js

import express from 'express';

// Express.js의 라우터를 생성합니다.
const router = express.Router();



// routes/goods.js

// localhost:3000/api/ GET
router.get('/', (req, res) => {
    res.json('default url for goods.js GET Method');
  });
  
  // localhost:3000/api/about GET
  router.get('/about', (req, res) => {
    res.json('goods.js about PATH');
  });

  export default router;