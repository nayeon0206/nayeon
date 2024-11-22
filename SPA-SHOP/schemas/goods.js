// /schemas/goods.js

import mongoose from 'mongoose';

// 상품(goods)에 대한 정보를 나타내는 스키마를 정의합니다.
const goodsSchema = new mongoose.Schema({
  goodsId: {
    type: Number, // 상품의 고유 ID를 나타냅니다.
    required: true, // 필수 항목입니다.
    unique: true, // 중복된 값을 허용하지 않습니다.
  },
  name: {
    type: String, // 상품의 이름을 나타냅니다.
    required: true, // 필수 항목입니다.
    unique: true, // 중복된 값을 허용하지 않습니다.
  },
  thumbnailUrl: {
    type: String, // 상품의 썸네일 이미지 URL을 나타냅니다.
  },
  category: {
    type: String, // 상품의 카테고리를 나타냅니다.
  },
  price: {
    type: Number, // 상품의 가격을 나타냅니다.
  },
});

// 위에서 정의한 스키마를 이용하여 'Goods'라는 이름의 모델을 생성합니다.
export default mongoose.model('Goods', goodsSchema);