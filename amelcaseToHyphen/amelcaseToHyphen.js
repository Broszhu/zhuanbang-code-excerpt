/**
 * Created by Broszhu on 2017/3/20 0020.
 * 驼峰命名法转为连接符格式；
 */
function amelcaseToHyphen(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}