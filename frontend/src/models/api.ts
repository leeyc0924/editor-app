export interface IAccount {
  accountId: String,
  accountEmail: String,
  accountPw: String,
  accountNm: String,
  placeId: String,
  viewPlaceId: String,
  loginType: String,
  lastLoginDt: String,
  pwChangeDt: String,
  imagePath: String,
  imageSize: String,
  useYn: String,
  delYn: String,
  delDt: String,
  regDt: String,
  modDt: String,
}

export interface ILogin {
  accountEmail: string;
  accountPw: string;
}