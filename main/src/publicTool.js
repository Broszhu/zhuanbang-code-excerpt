/**
 * Created by Broszhu on 2017/3/20 0020.
 * 一个通用的工具
 */

var publicTool={};

/*  typeof 的加强版 判断数据类型；
*参数：一个变量或者数据;
* */
publicTool.typeof=function (obj) {
    var toString = Object.prototype.toString;
    var tempObj = {
        '[object Boolean]'  : 'boolean',
        '[object Number]'   : 'number',
        '[object String]'   : 'string',
        '[object Function]' : 'function',
        '[object Array]'    : 'array',
        '[object Date]'     : 'date',
        '[object RegExp]'   : 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]'     : 'null',
        '[object Object]'   : 'object'
    };
    return tempObj[toString.call(obj)];
};
