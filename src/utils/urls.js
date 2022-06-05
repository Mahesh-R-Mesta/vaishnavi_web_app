class URL {
  // static baseUrl = "https://testapi.maheshmesta.repl.co";
  static baseUrl = "http://127.1.1.0:4000";
  static admin = "/api/v1/admin";
  static isLogin = this.baseUrl + this.admin + "/isLogin";
  static accountLogin = this.baseUrl + this.admin + "/accountLogin";
  static getAllProducts = this.baseUrl + this.admin + "/getProducts";
  static addProduct = this.baseUrl + this.admin + '/addProduct';
  static deleteProduct = this.baseUrl + this.admin + '/deleteById';
  static updateProduct = this.baseUrl + this.admin + '/updateProduct';
}

export default URL;
