import BaseApi from "./BaseApi";

class Auth extends BaseApi {

  constructor() {
    const module = '/auth';
    super(module);
    this.a = "Aaa";
  }

  login = async (data) => {
    const result = await this.post(this.getUrlApi('/login'), data);
    return result;
  }
  /* chổ này nên dùng arrow function để tránh trường hợp gọi class này dùng mà gán function của class này với 1 biến khác
  chứ không gọi thực thi luôn, khi gán sẽ làm mất context của function này dẫn đến không dùng được this của class hiện tại
  thì có 4 cách: 
   - dùng arrow function ( hàm này khi dùng nó sẽ lấy context của class hoặc hàm gần nhất)
   - gán this vào 1 biến rồi dùng biến đó
   - bind this vào function ở constructor
   - apply, call
  */

}

export default Auth;