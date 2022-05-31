class URL {
  static baseUrl = "http://127.1.1.0:4000";
  static admin = "/api/v1/admin";
  static isLogin = this.baseUrl + this.admin + "/isLogin";
  static accountLogin = this.baseUrl + this.admin + "/accountLogin";
}

export default URL;
