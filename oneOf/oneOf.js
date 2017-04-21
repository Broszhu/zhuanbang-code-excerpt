/**
 * 判断参数是不是目标参数中的一份子；
 * value:校验的子数据
 * validList：数组集合,
 */
function oneOf (value, validList) {
    for (var i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}