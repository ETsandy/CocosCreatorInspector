import Vue from 'vue'

export default function () {
  // String 字符串扩展函数
  // firstUpperCase 将字符串首字母大写
  String.prototype.firstUpperCase = function () {
    let that = this;
    return that.toString()[0].toUpperCase() + that.toString().slice(1);
  };

  // eraseSubstring 将字符串删去子串部分
  String.prototype.eraseSubstring = function (str) {
    let that = this;
    return that.replace(str, "");
  };

  // 判断有没有子串，大小写不灵敏
  String.prototype.hasSubstrIgnoreCase = function (substr) {
    return this.toLowerCase().indexOf(substr.toLowerCase()) !== -1;
  };

  // Array 数组扩展函数
  // sliceByObj 通过给定的obj切分数组，只取前半部分
  Array.prototype.sliceByObj = function (obj) {
    let that = this;
    let index = that.indexOf(obj);
    if (index == -1) {
      return that;
    } else {
      return that.slice(0, index);
    }
  };

  // Vue util
  // 刷新节点
  Vue.prototype._freshNode = function (uuid) {
    if (uuid) {
      let code2 = "ccIns.getNodeInfo('" + uuid + "')";
      this._evalCode(code2);
    }
  };

  // 执行代码
  Vue.prototype._evalCode = function (code) {
    if (chrome && chrome.devtools) {
      chrome.devtools.inspectedWindow.eval(code);
    } else {
      console.log(code);
    }
  };
}