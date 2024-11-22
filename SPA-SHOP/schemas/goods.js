// /schemas/goods.js
// 1. mongoose 가져오기
import mongoose from 'mongoose';

// 상품(goods)에 대한 정보를 나타내는 스키마를 정의합니다.
// 2. 스키마 작성하기
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
// 3. 스키마를 통해 모델 구현하기
// 4. 모델 외부로 보내기
export default mongoose.model('Goods', goodsSchema);