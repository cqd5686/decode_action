//Sat Aug 23 2025 04:20:00 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = Env("心股部落");
const got = require("got");
const envPrefix = "xgbl";
const envSplitor = /[\n]/;
const ckNames = [envPrefix + "_data"];
const DEFAULT_TIMEOUT = 20000;
const DEFAULT_RETRY = 3;
const default_UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.62(0x18003e30) NetType/WIFI Language/zh_CN";
const Referer = "https://servicewechat.com/wx19c782057b961ed8/10/page-frame.html";
const appId = "wx19c782057b961ed8";
class BasicClass {
  constructor() {
    this.index = $.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x51eb6b = {
      limit: 0
    };
    const _0x190d23 = {
      Connection: "keep-alive"
    };
    const _0x4c8745 = {
      retry: _0x51eb6b,
      timeout: DEFAULT_TIMEOUT,
      followRedirect: false,
      ignoreInvalidCookies: true,
      headers: _0x190d23
    };
    this.got = got.extend(_0x4c8745);
  }
  log(_0x24beca, _0x562c5a = {}) {
    var _0x46c1ad = "";
    var _0x51150f = $.userCount.toString().length;
    if (this.index) {
      _0x46c1ad += "账号[" + this.index.toString().padStart(_0x51150f, "0") + "]";
    }
    if (this.name) {
      _0x46c1ad += "[" + this.name + "]";
    }
    $.log(_0x46c1ad + _0x24beca, _0x562c5a);
  }
  set_cookie(_0x594c1e, _0x409c5b, _0xfd4ee6, _0x3dbffa, _0x538ece = {}) {
    this.cookieJar.setCookieSync(_0x594c1e + "=" + _0x409c5b + "; Domain=" + _0xfd4ee6 + ";", "" + _0x3dbffa);
  }
  async request(_0x2fd194) {
    const _0x2548a9 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"];
    const _0x416829 = ["TimeoutError"];
    const _0x597b2d = [];
    var _0x57e2a5 = null;
    var _0x54d059 = 0;
    var _0x471e24 = _0x2fd194.fn || _0x2fd194.url;
    let _0x440970 = $.get(_0x2fd194, "valid_code", _0x597b2d);
    _0x2fd194.method = _0x2fd194?.["method"]?.["toUpperCase"]() || "GET";
    let _0x577f8a;
    while (_0x54d059 < DEFAULT_RETRY) {
      try {
        _0x54d059++;
        _0x577f8a = null;
        let _0x47416f = null;
        let _0x401f00 = _0x2fd194?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || DEFAULT_TIMEOUT;
        let _0x1a9a59 = false;
        await new Promise(async _0x57bf3e => {
          setTimeout(() => {
            _0x1a9a59 = true;
            _0x57bf3e();
          }, _0x401f00);
          await this.got(_0x2fd194).then(_0x285d83 => {
            _0x57e2a5 = _0x285d83;
          }, _0x2e1ee6 => {
            _0x47416f = _0x2e1ee6;
            _0x57e2a5 = _0x2e1ee6.response;
            _0x577f8a = _0x47416f?.["code"];
          });
          _0x57bf3e();
        });
        if (_0x1a9a59) {
          this.log("[" + _0x471e24 + "]请求超时(" + _0x401f00 / 1000 + "秒)，重试第" + _0x54d059 + "次");
        } else {
          if (_0x416829.includes(_0x47416f?.["name"])) {
            this.log("[" + _0x471e24 + "]请求超时(" + _0x47416f.code + ")，重试第" + _0x54d059 + "次");
          } else {
            if (_0x2548a9.includes(_0x47416f?.["code"])) {
              this.log("[" + _0x471e24 + "]请求错误(" + _0x47416f.code + ")，重试第" + _0x54d059 + "次");
            } else {
              let _0xa4e809 = _0x57e2a5?.["statusCode"] || 999;
              let _0x594a03 = _0xa4e809 / 100 | 0;
              _0x594a03 > 3 && !_0x440970.includes(_0xa4e809) && this.log("请求[" + _0x471e24 + "]返回[" + _0xa4e809 + "]");
              if (_0x594a03 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x41b265) {
        _0x41b265.name == "TimeoutError" ? this.log("[" + _0x471e24 + "]请求超时，重试第" + _0x54d059 + "次") : this.log("[" + _0x471e24 + "]请求错误(" + _0x41b265.message + ")，重试第" + _0x54d059 + "次");
      }
    }
    if (_0x57e2a5 == null) {
      return Promise.resolve({
        statusCode: _0x577f8a || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x29a8e0,
      headers: _0x8f0b8c,
      body: _0x102d64
    } = _0x57e2a5;
    if (_0x102d64) {
      try {
        _0x102d64 = JSON.parse(_0x102d64);
      } catch {}
    }
    const _0x4bd38d = {
      statusCode: _0x29a8e0,
      headers: _0x8f0b8c,
      result: _0x102d64
    };
    return Promise.resolve(_0x4bd38d);
  }
}
let http = new BasicClass();
class UserClass extends BasicClass {
  constructor(_0x20c80c) {
    super();
    this.openIds = _0x20c80c.split("@");
    this.name = this.openIds.shift();
    this.openId = this.openIds[0];
    const _0x3dc63d = {
      "User-Agent": default_UA,
      Referer: Referer
    };
    const _0x29c1c9 = {
      headers: _0x3dc63d
    };
    this.got = this.got.extend(_0x29c1c9);
  }
  async user_info(_0x3d313f = {}) {
    try {
      const _0x285032 = {
        openid: this.openId
      };
      let _0x132686 = {
        fn: "user_info",
        method: "get",
        url: "https://fhywib.cn/user/info",
        searchParams: _0x285032
      };
      {
        let {
          result: _0x4e8858,
          statusCode: _0x3b2336
        } = await this.request($.copy(_0x132686));
        let _0x59692c = $.get(_0x4e8858, "code", _0x3b2336);
        if (_0x59692c == 0) {
          let {
            userName: _0x13c1b4,
            unionid: _0x5252e9,
            onlyId: _0x32b335
          } = _0x4e8858?.["data"]?.["users"];
          this.unionid = _0x5252e9;
          for (let _0x23a3de of this.openIds) {
            await this.checkin(_0x23a3de);
          }
        } else {
          let _0x3f1a87 = $.get(_0x4e8858, "msg", "");
          const _0x13fab8 = {
            notify: true
          };
          this.log("登陆失败[" + _0x59692c + "]: " + _0x3f1a87, _0x13fab8);
          return;
        }
      }
      {
        let {
          result: _0x3cc2c6,
          statusCode: _0x5e972d
        } = await this.request($.copy(_0x132686));
        let _0x25c239 = $.get(_0x3cc2c6, "code", _0x5e972d);
        if (_0x25c239 == 0) {
          this.points = _0x3cc2c6?.["data"]?.["userAccount"] || 0;
          await this.cash_info();
        } else {
          let _0x4025f4 = $.get(_0x3cc2c6, "msg", "");
          this.log("查询积分失败[" + _0x25c239 + "]: " + _0x4025f4);
        }
      }
    } catch (_0x443517) {
      console.log(_0x443517);
    }
  }
  async cash_info(_0x4a8088 = {}) {
    try {
      const _0x3d7d4d = {
        unionId: this.unionid,
        pageIndex: 1,
        pageSize: 10
      };
      let _0x46805f = {
        fn: "cash_info",
        method: "get",
        url: "https://fhywib.cn/user/cash/info",
        searchParams: _0x3d7d4d
      };
      let {
        result: _0xa5f928,
        statusCode: _0x29f447
      } = await this.request($.copy(_0x46805f));
      let _0x7952f6 = $.get(_0xa5f928, "code", _0x29f447);
      if (_0x7952f6 == 0) {
        let _0x33c2c5 = _0xa5f928?.["data"]?.["userAccount"] || 0;
        const _0xeac98e = {
          notify: true
        };
        this.log("积分: " + this.points + " (" + (this.points / 10000).toFixed(2) + "元), 现金余额: " + _0x33c2c5 + "元", _0xeac98e);
      } else {
        let _0x3d7325 = $.get(_0xa5f928, "msg", "");
        this.log("查询现金失败[" + _0x7952f6 + "]: " + _0x3d7325);
      }
    } catch (_0x421372) {
      console.log(_0x421372);
    }
  }
  async checkin(_0x5e5d79, _0x4c25a8 = {}) {
    try {
      let _0x212985 = {
        fn: "checkin",
        method: "post",
        url: "https://fhywib.cn/wechat/checkin/records",
        json: {
          openId: _0x5e5d79,
          isRetro: 1,
          checkinDate: $.time("yyyy-MM-dd"),
          appId: appId
        }
      };
      let {
        result: _0x38411e,
        statusCode: _0x20a69e
      } = await this.request($.copy(_0x212985));
      let _0x1e6649 = $.get(_0x38411e, "code", _0x20a69e);
      if (_0x1e6649 == 0) {
        let {
          checkinNumber: _0x39c796,
          points: _0x59ea66
        } = _0x38411e?.["data"];
        this.log("签到成功: " + _0x59ea66 + "积分, 今天累计签到" + _0x39c796 + "次");
        await $.wait(1000);
        await this.checkin(_0x5e5d79);
      } else {
        let _0x2442f6 = $.get(_0x38411e, "msg", "");
        this.log("签到失败[" + _0x1e6649 + "]: " + _0x2442f6);
      }
    } catch (_0x3ae1cc) {
      console.log(_0x3ae1cc);
    }
  }
  async userTask(_0x531ecd = {}) {
    await this.user_info();
  }
}
!(async () => {
  $.read_env(UserClass);
  for (let _0x4a6919 of $.userList) {
    await _0x4a6919.userTask();
  }
})().catch(_0xee7ab4 => $.log(_0xee7ab4)).finally(() => $.exitNow());
function Env(_0xa8a99a) {
  return new class {
    constructor(_0x5ef79b) {
      this.name = _0x5ef79b;
      this.startTime = Date.now();
      const _0x3e6742 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x3e6742);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    log(_0x5a5a07, _0x22da1b = {}) {
      let _0x3cb08a = {
        console: true
      };
      Object.assign(_0x3cb08a, _0x22da1b);
      if (_0x3cb08a.time) {
        let _0x2ca6f1 = _0x3cb08a.fmt || "hh:mm:ss";
        _0x5a5a07 = "[" + this.time(_0x2ca6f1) + "]" + _0x5a5a07;
      }
      if (_0x3cb08a.notify) {
        this.notifyStr.push(_0x5a5a07);
      }
      if (_0x3cb08a.console) {
        console.log(_0x5a5a07);
      }
    }
    get(_0x235eae, _0x4e3302, _0x115f16 = "") {
      let _0x18d56b = _0x115f16;
      _0x235eae?.["hasOwnProperty"](_0x4e3302) && (_0x18d56b = _0x235eae[_0x4e3302]);
      return _0x18d56b;
    }
    pop(_0x519fb4, _0x382faa, _0x10acdc = "") {
      let _0x50d293 = _0x10acdc;
      _0x519fb4?.["hasOwnProperty"](_0x382faa) && (_0x50d293 = _0x519fb4[_0x382faa], delete _0x519fb4[_0x382faa]);
      return _0x50d293;
    }
    copy(_0xaf1b97) {
      return Object.assign({}, _0xaf1b97);
    }
    read_env(_0x4df793) {
      let _0x7278c6 = ckNames.map(_0xd28f11 => process.env[_0xd28f11]);
      for (let _0x389dcf of _0x7278c6.filter(_0x3eac00 => !!_0x3eac00)) {
        for (let _0x8fe7c6 of _0x389dcf.split(envSplitor).filter(_0x540b09 => !!_0x540b09)) {
          this.userList.push(new _0x4df793(_0x8fe7c6));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x464ed1 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + ckNames.map(_0x40ef0d => "[" + _0x40ef0d + "]").join("或"), _0x464ed1);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x492c5c, _0x40fc94 = null) {
      let _0x2a86b2 = _0x40fc94 ? new Date(_0x40fc94) : new Date();
      let _0x21fb1a = {
        "M+": _0x2a86b2.getMonth() + 1,
        "d+": _0x2a86b2.getDate(),
        "h+": _0x2a86b2.getHours(),
        "m+": _0x2a86b2.getMinutes(),
        "s+": _0x2a86b2.getSeconds(),
        "q+": Math.floor((_0x2a86b2.getMonth() + 3) / 3),
        S: _0x2a86b2.getMilliseconds().toString().padStart(3, "0")
      };
      /(y+)/.test(_0x492c5c) && (_0x492c5c = _0x492c5c.replace(RegExp.$1, (_0x2a86b2.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x203456 in _0x21fb1a) new RegExp("(" + _0x203456 + ")").test(_0x492c5c) && (_0x492c5c = _0x492c5c.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x21fb1a[_0x203456] : ("00" + _0x21fb1a[_0x203456]).substr(("" + _0x21fb1a[_0x203456]).length)));
      return _0x492c5c;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      try {
        var _0x5a26ab = require("./sendNotify");
        this.log("\n============== 推送 ==============");
        await _0x5a26ab.sendNotify(this.name, this.notifyStr.join("\n"));
      } catch {
        this.log("\n=================================");
        this.log("读取推送依赖[sendNotify.js]失败, 请检查同目录下是否有依赖");
      }
    }
    randomPattern(_0x133dcc, _0x32762d = "abcdef0123456789") {
      let _0xe4b9ae = "";
      for (let _0x3dd188 of _0x133dcc) {
        if (_0x3dd188 == "x") {
          _0xe4b9ae += _0x32762d.charAt(Math.floor(Math.random() * _0x32762d.length));
        } else {
          _0x3dd188 == "X" ? _0xe4b9ae += _0x32762d.charAt(Math.floor(Math.random() * _0x32762d.length)).toUpperCase() : _0xe4b9ae += _0x3dd188;
        }
      }
      return _0xe4b9ae;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x1a43c8 = 32, _0x5ee1a8 = "abcdef0123456789") {
      let _0x33dfee = "";
      for (let _0x44951b = 0; _0x44951b < _0x1a43c8; _0x44951b++) {
        _0x33dfee += _0x5ee1a8.charAt(Math.floor(Math.random() * _0x5ee1a8.length));
      }
      return _0x33dfee;
    }
    randomList(_0x345cc5) {
      let _0x47e294 = Math.floor(Math.random() * _0x345cc5.length);
      return _0x345cc5[_0x47e294];
    }
    wait(_0x1341c8) {
      return new Promise(_0x4a3233 => setTimeout(_0x4a3233, _0x1341c8));
    }
    async exitNow() {
      await this.showmsg();
      let _0x455322 = Date.now();
      let _0x2e7166 = (_0x455322 - this.startTime) / 1000;
      this.log("");
      const _0x279f00 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x2e7166 + "秒", _0x279f00);
      process.exit(0);
    }
    async wait_until(_0x142cb7, _0x33d4b5 = {}) {
      let _0x23b101 = _0x33d4b5.logger || this;
      let _0x569f86 = _0x33d4b5.interval || this.default_wait_interval;
      let _0x4eb137 = _0x33d4b5.limit || this.default_wait_limit;
      let _0x3a5799 = _0x33d4b5.ahead || this.default_wait_ahead;
      if (typeof _0x142cb7 == "string" && _0x142cb7.includes(":")) {
        if (_0x142cb7.includes("-")) {
          _0x142cb7 = new Date(_0x142cb7).getTime();
        } else {
          let _0xa6b2d4 = this.time("yyyy-MM-dd ");
          _0x142cb7 = new Date(_0xa6b2d4 + _0x142cb7).getTime();
        }
      }
      let _0x504207 = this.normalize_time(_0x142cb7) - _0x3a5799;
      let _0x5ae525 = this.time("hh:mm:ss.S", _0x504207);
      let _0x4a2cb7 = Date.now();
      _0x4a2cb7 > _0x504207 && (_0x504207 += 86400000);
      let _0x40ef2c = _0x504207 - _0x4a2cb7;
      if (_0x40ef2c > _0x4eb137) {
        const _0x6745cf = {
          time: true
        };
        _0x23b101.log("离目标时间[" + _0x5ae525 + "]大于" + _0x4eb137 / 1000 + "秒,不等待", _0x6745cf);
      } else {
        const _0x1c7d0f = {
          time: true
        };
        _0x23b101.log("离目标时间[" + _0x5ae525 + "]还有" + _0x40ef2c / 1000 + "秒,开始等待", _0x1c7d0f);
        while (_0x40ef2c > 0) {
          let _0x2ff858 = Math.min(_0x40ef2c, _0x569f86);
          await this.wait(_0x2ff858);
          _0x4a2cb7 = Date.now();
          _0x40ef2c = _0x504207 - _0x4a2cb7;
        }
        const _0x4d161d = {
          time: true
        };
        _0x23b101.log("已完成等待", _0x4d161d);
      }
    }
    async wait_gap_interval(_0x12895c, _0xd6a524) {
      let _0x200b0f = Date.now() - _0x12895c;
      _0x200b0f < _0xd6a524 && (await this.wait(_0xd6a524 - _0x200b0f));
    }
  }(_0xa8a99a);
}