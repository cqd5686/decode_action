//Sun Jan 25 2026 13:55:52 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
  log: _0x57bc75
} = require("console");
(function () {
  "use strict";
  const _0x1fdbc0 = require("crypto");
  const _0x50e15e = require("fs");
  const _0x34ad04 = require("path");
  const _0x377103 = require("axios");
  const _0x5bc806 = require("querystring");
  const _0xc8023e = require("querystring");
  const {
    SocksProxyAgent: _0x382ef5
  } = require("socks-proxy-agent");
  const _0x14de9b = require("https");
  const _0x19fb4e = "http://vv.video.qq.com/checktime?otype=json";
  const _0xbf2486 = "https://api.e.kuaishou.com/rest/e/reward/mixed/ad";
  const _0x4d9fc5 = "http://www.52yun.xyz/ks_sign_service_v2.php";
  const _0x2c8353 = process.env.CARD_KEY || "你的卡密";
  const _0xbcf146 = "http://www.52yun.xyz/query.php";
  const _0x136090 = process.env.CARD_CHECK_INTERVAL ? parseInt(process.env.CARD_CHECK_INTERVAL) : 60;
  let _0x197e7e = 0;
  let _0x18a14b = 0;
  let _0x4731ff = "";
  let _0x3ea3b7 = 0;
  let _0x5bc690 = false;
  let _0x34dd93 = 0;
  const _0x395a51 = process.env.MAX_CONSECUTIVE_SIGN_FAIL ? parseInt(process.env.MAX_CONSECUTIVE_SIGN_FAIL) : 5;
  const _0x533cfd = process.env.MAX_TOTAL_SIGN_FAIL ? parseInt(process.env.MAX_TOTAL_SIGN_FAIL) : 15;
  let _0x35869b = false;
  if (!_0x4d9fc5 || _0x4d9fc5.includes("你的签名服务地址")) {
    {
      console.log("❌ 请设置签名服务地址！可通过环境变量 SIGN_API_URL 或修改脚本");
      process.exit(1);
    }
  }
  if (!_0x2c8353 || _0x2c8353 === "你的卡密") {
    {
      console.log("❌ 请设置卡密！可通过环境变量 CARD_KEY 或修改脚本");
      process.exit(1);
    }
  }
  function _0x1c85ec() {
    return _0x4d9fc5 + (_0x4d9fc5.includes("?") ? "&" : "?") + "card_key=" + encodeURIComponent(_0x2c8353);
  }
  async function _0x2f9f3c() {
    {
      try {
        {
          const _0x4641aa = _0xbcf146 + "?card_key=" + encodeURIComponent(_0x2c8353);
          const _0x1b7974 = {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15"
          };
          const _0x25d0b2 = {
            timeout: 10000,
            headers: _0x1b7974
          };
          const _0x102fac = await _0x377103.get(_0x4641aa, _0x25d0b2);
          const _0x22c373 = _0x102fac.data;
          if (_0x22c373.code === 0) {
            {
              const _0x37f5a2 = _0x22c373.data || {};
              _0x4731ff = _0x37f5a2.type || "unknown";
              _0x197e7e = _0x37f5a2.expire || 0;
              _0x18a14b = _0x37f5a2.val || 0;
              const _0x935134 = {
                valid: true,
                msg: "卡密有效",
                data: _0x37f5a2
              };
              return _0x935134;
            }
          } else {
            {
              const _0x392b0a = {
                valid: false,
                msg: _0x22c373.msg || "卡密验证失败",
                data: _0x22c373.data || null
              };
              return _0x392b0a;
            }
          }
        }
      } catch (_0x50fe6d) {
        {
          console.log("❌ 卡密查询请求失败: " + _0x50fe6d.message);
          return {
            valid: false,
            msg: "查询请求失败: " + _0x50fe6d.message,
            data: null
          };
        }
      }
    }
  }
  async function _0x255a65() {
    {
      console.log("🔐 正在验证卡密...");
      const _0x5817c1 = await _0x2f9f3c();
      if (!_0x5817c1.valid) {
        {
          console.log("❌ Logger.失败: " + _0x5817c1.msg);
          _0x5817c1.data && console.log("   卡密状态: " + (_0x5817c1.data.status || "未知"));
          return false;
        }
      }
      const _0x503725 = _0x5817c1.data;
      console.log("✅ 卡密验证通过!");
      console.log("   卡密类型: " + _0x56bbbc(_0x503725.type));
      if (_0x503725.type === "count") {
        {
          console.log("   剩余次数: " + _0x503725.val + " 次");
          if (_0x503725.val <= 0) {
            console.log("❌ 卡密次数已用完，无法继续执行");
            return false;
          }
        }
      } else {
        if (_0x503725.type === "permanent") {
          {
            console.log("   有效期: 永久");
          }
        } else {
          {
            console.log("   到期时间: " + _0x503725.expire_formatted);
            const _0x46cbf1 = Math.floor(Date.now() / 1000);
            if (_0x503725.expire > 0 && _0x46cbf1 > _0x503725.expire) {
              {
                console.log("❌ 卡密已过期，无法继续执行");
                return false;
              }
            }
            if (_0x503725.expire > 0) {
              {
                const _0x1f493f = _0x503725.expire - _0x46cbf1;
                const _0x1cae38 = Math.floor(_0x1f493f / 3600);
                const _0x132621 = Math.floor(_0x1f493f % 3600 / 60);
                console.log("   剩余时间: " + _0x1cae38 + "小时" + _0x132621 + "分钟");
              }
            }
          }
        }
      }
      _0x3ea3b7 = Date.now();
      return true;
    }
  }
  async function _0x51a1c4() {
    {
      if (_0x5bc690) {
        {
          return false;
        }
      }
      const _0x5e85e4 = Date.now();
      const _0x20d6f7 = (_0x5e85e4 - _0x3ea3b7) / 1000;
      if (_0x20d6f7 < _0x136090) {
        {
          return true;
        }
      }
      let _0x2a3953 = 0;
      const _0x57a7e9 = 3;
      const _0x536f0e = 3000;
      while (_0x2a3953 <= _0x57a7e9) {
        {
          const _0x23fe82 = await _0x2f9f3c();
          _0x3ea3b7 = Date.now();
          if (_0x23fe82.valid) {
            {
              const _0x3b31f0 = _0x23fe82.data;
              if (_0x3b31f0.type === "count" && _0x3b31f0.val <= 0) {
                console.log("\n🚨 卡密次数已用完，停止执行任务!");
                _0x5bc690 = true;
                return false;
              }
              if (_0x3b31f0.type !== "permanent" && _0x3b31f0.type !== "count") {
                {
                  const _0x533ef6 = Math.floor(Date.now() / 1000);
                  if (_0x3b31f0.expire > 0 && _0x533ef6 > _0x3b31f0.expire) {
                    {
                      console.log("\n🚨 卡密已过期，停止执行任务!");
                      _0x5bc690 = true;
                      return false;
                    }
                  }
                }
              }
              return true;
            }
          } else {
            {
              if (_0x23fe82.msg.includes("查询请求失败") || _0x23fe82.msg.includes("Error")) {
                {
                  _0x2a3953++;
                  if (_0x2a3953 <= _0x57a7e9) {
                    console.log("\n🚨 卡密状态检查失败 (第" + _0x2a3953 + "/" + _0x57a7e9 + "次重试): " + _0x23fe82.msg);
                    console.log("   ⏱ 等待" + _0x536f0e / 1000 + "秒后重试...");
                    await new Promise(_0x51054b => setTimeout(_0x51054b, _0x536f0e));
                  } else {
                    {
                      console.log("\n🚨 卡密状态检查失败，已重试" + _0x57a7e9 + "次，停止执行任务!");
                      _0x5bc690 = true;
                      return false;
                    }
                  }
                }
              } else {
                {
                  console.log("\n🚨 卡密状态检查失败: " + _0x23fe82.msg);
                  _0x5bc690 = true;
                  return false;
                }
              }
            }
          }
        }
      }
      return false;
    }
  }
  function _0x56bbbc(_0x1b6bfc) {
    {
      const _0x5a7cc8 = {
        count: "次数卡",
        hour: "小时卡",
        day: "日卡",
        week: "周卡",
        month: "月卡",
        year: "年卡",
        permanent: "永久卡"
      };
      return _0x5a7cc8[_0x1b6bfc] || _0x1b6bfc;
    }
  }
  async function _0x57c3fd() {
    {
      const _0x1047b4 = "http://www.52yun.xyz/message.txt";
      try {
        {
          const _0x36c956 = {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15"
          };
          const _0x42d9b0 = {
            timeout: 10000,
            headers: _0x36c956
          };
          const _0x3324ad = await _0x377103.get(_0x1047b4, _0x42d9b0);
          if (_0x3324ad.status === 200 && _0x3324ad.data) {
            {
              const _0x560ef1 = String(_0x3324ad.data).replace(/\\n/g, "\n").trim();
              if (!_0x560ef1) {
                {
                  return;
                }
              }
              console.log("\n" + "═".repeat(35));
              console.log("📢 公告");
              console.log("═".repeat(35));
              console.log(_0x560ef1);
              console.log("═".repeat(35) + "\n");
            }
          }
        }
      } catch (_0x1106ae) {}
    }
  }
  console.log("⚠️ 免责声明 / DISCLAIMER", "═");
  console.log("1. 本脚本仅供学习研究，严禁商用或违法使用");
  console.log("2. 使用本脚本产生的任何后果由用户自行承担");
  console.log("3. 继续使用即表示您已同意以上条款");
  console.log("☷".repeat(30));
  console.log("🔑 卡密: " + _0x2c8353);
  const _0x168d62 = process.env.TASK_CONFIG || "look:50,food:50,box:50,search:50";
  const _0x1e8c70 = process.env.TASK_ORDER || "sequential";
  const _0x2c225b = process.env.TASK_CYCLE_ROUNDS ? parseInt(process.env.TASK_CYCLE_ROUNDS) : 0;
  const _0x1a9d8e = process.env.DEFAULT_TASKS ? process.env.DEFAULT_TASKS.split(",").map(_0x3b0284 => _0x3b0284.trim()) : ["look", "food", "box", "search"];
  const _0x1ef157 = process.env.KS_EXECUTION_TIMES ? parseInt(process.env.KS_EXECUTION_TIMES) : 50;
  const _0x202f06 = process.env.TASK_EXECUTION_TIMES_PER_ROUND ? parseInt(process.env.TASK_EXECUTION_TIMES_PER_ROUND) : 1;
  const _0x130acd = process.env.KSCOIN_LIMIT ? parseInt(process.env.KSCOIN_LIMIT) : 300000;
  const _0x2a4df3 = process.env.IMMEDIATE_STOP_THRESHOLD ? parseInt(process.env.IMMEDIATE_STOP_THRESHOLD) : 0;
  const _0x54e11b = process.env.LOW_REWARD_THRESHOLD ? parseInt(process.env.LOW_REWARD_THRESHOLD) : 10;
  const _0x924367 = process.env.LOW_REWARD_LIMIT ? parseInt(process.env.LOW_REWARD_LIMIT) : 5;
  const _0xeb4a53 = process.env.AD_INFO_FAIL_LIMIT ? parseInt(process.env.AD_INFO_FAIL_LIMIT) : 30;
  const _0x56d22f = process.env.REQUEST_TIMEOUT ? parseInt(process.env.REQUEST_TIMEOUT) : 30000;
  const _0x2d7346 = process.env.MAX_CONCURRENCY ? parseInt(process.env.MAX_CONCURRENCY) : 666;
  let _0x5cb13d = process.env.WATCH_TIME_MIN ? parseInt(process.env.WATCH_TIME_MIN) : 40;
  let _0x1f588f = process.env.WATCH_TIME_MAX ? parseInt(process.env.WATCH_TIME_MAX) : 65;
  if (_0x5cb13d < 0) {
    {
      console.log("⚠️ 自定义最小观看时间 " + _0x5cb13d + " 秒，允许0秒设置");
    }
  }
  _0x1f588f < 0 && console.log("⚠️ 自定义最大观看时间" + _0x1f588f + "秒，允许0秒设置");
  _0x5cb13d > _0x1f588f && (console.log("⚠️ 最小观看时间" + _0x5cb13d + "秒大于最大观看时间" + _0x1f588f + "秒，自动交换"), [_0x5cb13d, _0x1f588f] = [_0x1f588f, _0x5cb13d]);
  const _0xfd85e0 = process.env.SEQUENTIAL_EXECUTION === "1";
  const _0x4e951a = "http://www.52yun.xyz/zdyupdate.json";
  const _0x38222d = "http://www.52yun.xyz/zdyupdate.js";
  const _0x48db6e = 2;
  const _0x555783 = process.env.AD_APPEND_ENABLED !== "0";
  const _0x13d855 = process.env.SEARCH_AD_ENABLED !== "0";
  const _0x286de3 = process.env.AD_APPEND_MAX_COUNT ? parseInt(process.env.AD_APPEND_MAX_COUNT) : 30;
  const _0x4cb200 = process.env.AD_APPEND_REST_INTERVAL ? parseInt(process.env.AD_APPEND_REST_INTERVAL) : 2;
  const _0x2578d2 = process.env.AD_APPEND_REST_MIN ? parseInt(process.env.AD_APPEND_REST_MIN) : 10000;
  const _0x4df44c = process.env.AD_APPEND_REST_MAX ? parseInt(process.env.AD_APPEND_REST_MAX) : 20000;
  const _0x4d54af = process.env.SEARCH_KEYWORDS ? process.env.SEARCH_KEYWORDS.split(",").map(_0x3a29cd => _0x3a29cd.trim()).filter(_0x188193 => _0x188193) : process.env.SEARCH_KEYWORD ? [process.env.SEARCH_KEYWORD] : ["短剧小说"];
  const _0x2a9ea2 = process.env.SEARCH_KEYWORDS_MODE || "sequential";
  async function _0x146f24() {
    {
      console.log("\n🔍 开始检测API接口连通性...");
      try {
        {
          const _0x5612c4 = _0x4d9fc5;
          console.log("🔍 正在检测签名服务");
          const _0x10ec79 = {
            test: true
          };
          const _0x45b40d = await _0x377103.post(_0x1c85ec(), JSON.stringify(_0x10ec79), {
            timeout: 5000,
            headers: {
              "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/125.3 Mobile/15E148 Safari/605.1.15"
            }
          });
          if (_0x45b40d.status === 200 || _0x45b40d.status === 400) {
            {
              console.log("✅ 签名服务状态正常!");
            }
          } else {
            console.log("❌ 签名服务:连通异常，状态码: " + _0x45b40d.status);
          }
        }
      } catch (_0x20f840) {
        {
          if (_0x20f840.response && _0x20f840.response.status === 400) {
            console.log("✅ 签名服务状态正常!");
          } else {
            {
              console.log("❌ 签名服务:连通异常: " + _0x20f840.message);
            }
          }
        }
      }
      try {
        {
          const _0x45582f = {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/125.3 Mobile/15E148 Safari/605.1.15"
          };
          const _0x229f7b = {
            timeout: 3000,
            headers: _0x45582f
          };
          const _0x21c35e = await _0x377103.get(_0x19fb4e, _0x229f7b);
          if (_0x21c35e.status === 200) {
            {
              console.log("✅ 时间戳接口:连通正常！");
            }
          } else {
            {
              console.log("❌ 时间戳接口:连通异常，状态码: " + _0x21c35e.status);
            }
          }
        }
      } catch (_0x578489) {
        {
          console.log("❌ 时间戳接口:连通异常: " + _0x578489.message);
        }
      }
      try {
        {
          const _0x53197e = {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/125.3 Mobile/15E148 Safari/605.1.15"
          };
          const _0x54f17a = {
            timeout: 3000,
            headers: _0x53197e
          };
          const _0x226508 = await _0x377103.get(_0xbf2486, _0x54f17a);
          if (_0x226508.status === 200) {
            console.log("✅ KS广告接口:连通正常！");
          } else {
            {
              console.log("❌ KS广告接口:连通异常，状态码: " + _0x226508.status);
            }
          }
        }
      } catch (_0x5ac9fe) {
        console.log("❌ KS广告接口:连通异常: " + _0x5ac9fe.message);
      }
      console.log("🔍 API接口连通性检测完成\n");
    }
  }
  async function _0x49e056() {
    {
      try {
        {
          console.log("🔍 正在检查脚本更新...");
          console.log("📋 当前版本: v" + _0x48db6e);
          const _0x508568 = {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/125.3 Mobile/15E148 Safari/605.1.15"
          };
          const _0x31ef26 = {
            timeout: 10000,
            headers: _0x508568
          };
          const _0x109a6e = await _0x377103.get(_0x4e951a, _0x31ef26);
          const _0x7d56ac = parseInt(_0x109a6e.data);
          if (isNaN(_0x7d56ac)) {
            console.log("❌ 无法解析服务器版本号，跳过更新检查");
            return false;
          }
          console.log("📋 最新版本: v" + _0x7d56ac);
          if (_0x7d56ac <= _0x48db6e) {
            {
              console.log("✅ 当前已是最新版本！");
              return false;
            }
          }
          console.log("🔄 发现新版本，开始下载更新...");
          const _0x2254c1 = {
            timeout: 30000,
            responseType: "text",
            headers: {}
          };
          _0x2254c1.headers["User-Agent"] = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/125.3 Mobile/15E148 Safari/605.1.15";
          const _0xfff827 = await _0x377103.get(_0x38222d, _0x2254c1);
          if (!_0xfff827.data) {
            {
              console.log("❌ 下载更新脚本失败：内容为空");
              return false;
            }
          }
          const _0x32d882 = __filename;
          const _0x3b4de8 = _0x34ad04.dirname(_0x32d882);
          const _0x4053e3 = _0x34ad04.basename(_0x32d882);
          const _0x3c2688 = _0x34ad04.join(_0x3b4de8, _0x4053e3 + ".backup");
          _0x50e15e.copyFileSync(_0x32d882, _0x3c2688);
          console.log("📦 已创建备份: " + _0x3c2688);
          _0x50e15e.writeFileSync(_0x32d882, _0xfff827.data, "utf8");
          console.log("✅ 脚本更新完成: " + _0x32d882);
          try {
            {
              delete require.cache[require.resolve(_0x32d882)];
              console.log("✅ 更新验证成功");
            }
          } catch (_0x10b9c3) {
            {
              console.log("❌ 更新验证失败，恢复备份...");
              _0x50e15e.copyFileSync(_0x3c2688, _0x32d882);
              console.log("✅ 备份恢复完成");
              return false;
            }
          }
          console.log("\n" + "=".repeat(60));
          console.log("🎉 自动更新完成!");
          console.log("🔄 已从 v" + _0x48db6e + " 更新到 v" + _0x7d56ac);
          console.log("🚀 请重新运行以使用新版本！");
          console.log("🚀 如果运行一直显示更新，请加🐧群:850618882");
          console.log("=".repeat(60));
          return true;
        }
      } catch (_0x5c7050) {
        console.log("❌ 更新检查失败: " + _0x5c7050.message);
        return false;
      }
    }
  }
  async function _0x1677de() {
    {
      try {
        {
          const _0x477d1f = {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
          };
          const _0x1b2dd6 = {
            headers: _0x477d1f,
            timeout: 10000
          };
          const _0x44fe79 = await _0x377103.get(_0x19fb4e, _0x1b2dd6);
          if (_0x44fe79.data) {
            {
              const _0x8e7e16 = _0x44fe79.data;
              const _0x100160 = _0x8e7e16.match(/QZOutputJson=({.*?});/);
              if (_0x100160 && _0x100160[1]) {
                {
                  const _0x24be20 = JSON.parse(_0x100160[1]);
                  if (_0x24be20 && _0x24be20.t) {
                    {
                      return parseInt(_0x24be20.t);
                    }
                  }
                }
              }
            }
          }
        }
      } catch (_0x342c99) {
        {
          console.log("❌ 获取腾讯时间戳失败: " + _0x342c99.message);
        }
      }
      return Math.floor(Date.now() / 1000);
    }
  }
  async function _0x22c50d() {
    {
      const _0x3c0b43 = await _0x1677de();
      const _0x232903 = _0x3c0b43 + "12345";
      return {
        key: _0x1fdbc0.createHash("md5").update(_0x232903).digest("hex"),
        timestamp: _0x3c0b43
      };
    }
  }
  let _0x231363 = 0;
  const _0x409abb = 5;
  function _0x3cbe4f(_0x5d84bd, _0x1094f7) {
    {
      const _0x193ae5 = parseInt(process.env[_0x5d84bd], 10);
      if (isNaN(_0x193ae5)) {
        {
          return _0x1094f7;
        }
      } else {
        {
          return _0x193ae5;
        }
      }
    }
  }
  const _0x887fa1 = _0x3cbe4f("KSCOIN_LIMIT", _0x130acd);
  const _0x31c402 = _0x3cbe4f("IMMEDIATE_STOP_THRESHOLD", _0x2a4df3);
  const _0x519ba8 = _0x3cbe4f("LOW_REWARD_THRESHOLD", _0x54e11b);
  const _0x2ac5b8 = _0x3cbe4f("LOW_REWARD_LIMIT", _0x924367);
  const _0x9f8a0b = _0x3cbe4f("AD_INFO_FAIL_LIMIT", _0xeb4a53);
  function _0x5ee374() {
    {
      const _0x553edf = {};
      const _0x166680 = _0x168d62.split(",");
      _0x166680.forEach(_0x462b3c => {
        {
          const [_0x378026, _0x487b96] = _0x462b3c.split(":").map(_0x51acdd => _0x51acdd.trim());
          _0x378026 && _0x487b96 && !isNaN(parseInt(_0x487b96)) && (_0x553edf[_0x378026] = parseInt(_0x487b96));
        }
      });
      const _0x5b491f = {
        food: 50,
        look: 50,
        box: 50,
        search: 50
      };
      const _0x16baa2 = {
        ..._0x5b491f,
        ..._0x553edf
      };
      return _0x16baa2;
    }
  }
  function _0x5551c6() {
    {
      const _0x169b72 = process.env.Task;
      if (!_0x169b72) {
        {
          return _0x1a9d8e;
        }
      }
      const _0x57278c = _0x169b72.split(",").map(_0x3945f1 => _0x3945f1.trim().toLowerCase()).filter(Boolean);
      const _0x6b3c70 = ["look", "lookk", "dj", "food", "box", "search"];
      const _0x401fd8 = _0x57278c.filter(_0x593f8b => _0x6b3c70.includes(_0x593f8b));
      if (_0x401fd8.length === 0) {
        {
          return _0x1a9d8e;
        }
      }
      return _0x401fd8;
    }
  }
  function _0x50b2d7() {
    {
      const _0x581075 = [];
      const _0x44f35e = new Set();
      if (process.env.ksck) {
        {
          const _0x486666 = process.env.ksck;
          const _0x21799a = _0x486666.split("&").map(_0x59e56f => _0x59e56f.trim()).filter(Boolean);
          _0x581075.push(..._0x21799a);
        }
      }
      for (let _0x476438 = 1; _0x476438 <= 666; _0x476438++) {
        {
          const _0x568c2f = "ksck" + _0x476438;
          if (process.env[_0x568c2f]) {
            {
              const _0x1207aa = process.env[_0x568c2f];
              const _0x12f8ab = _0x1207aa.split("&").map(_0x2c0f4b => _0x2c0f4b.trim()).filter(Boolean);
              _0x581075.push(..._0x12f8ab);
            }
          }
        }
      }
      const _0x493681 = [];
      for (const _0xf0277c of _0x581075) {
        {
          !_0x44f35e.has(_0xf0277c) && (_0x44f35e.add(_0xf0277c), _0x493681.push(_0xf0277c));
        }
      }
      return _0x493681;
    }
  }
  const _0xd0075e = _0x50b2d7();
  const _0xae9838 = _0xd0075e.length;
  const _0x4b6fe9 = _0x5551c6();
  const _0x1c5f0f = _0x5ee374();
  async function _0x4ba8fc() {
    {
      const _0x4de1ae = await _0x255a65();
      if (!_0x4de1ae) {
        {
          console.log("\n❌ 卡密验证未通过，程序退出");
          console.log("   请检查卡密是否正确、是否过期、是否有剩余次数");
          process.exit(1);
        }
      }
      await _0x57c3fd();
      await _0x146f24();
      const _0x287811 = await _0x49e056();
      if (_0x287811) {
        {
          return;
        }
      }
      console.log("\n" + "-".repeat(35));
      console.log("🚀 ks普通免费版-启动成功！");
      console.log("♻️ 当前版本: v" + _0x48db6e);
      console.log("👉🏻 代理推荐1:http://www.tianxingip.com/proxy/index/index/code/xianyuqi321/p/2761.html");
      console.log("👉🏻 代理推荐2:http://www.canghaiip.com/#/register?invitation=xianyuqi");
      console.log("🍃 任务类型:look➠看广告  box➠宝箱广告  food➠饭补  search➠搜索");
      console.log("🐧群: 850618882");
      console.log("-".repeat(35));
      console.log("📱 账号数量: " + _0xae9838 + "个");
      console.log("🎯 执行任务: " + _0x4b6fe9.join(", "));
      _0x2c225b > 0 ? (console.log("⚙️ 执行模式: 循环执行 " + _0x2c225b + " 轮"), console.log("🔄 任务顺序: " + (_0x1e8c70 === "sequential" ? "顺序执行" : "循环执行"))) : (console.log("⚙️ 执行模式: 独立次数执行"), _0x4b6fe9.forEach(_0xa2c436 => {
        {
          if (_0x1c5f0f[_0xa2c436]) {
            {
              console.log("   " + _0xa2c436 + ": " + _0x1c5f0f[_0xa2c436] + "次");
            }
          }
        }
      }));
      console.log("💰 金币上限: " + _0x887fa1);
      console.log("⚠️ 低金币阈值: " + _0x519ba8 + "金币, 累计" + _0x2ac5b8 + "次自动切换");
      console.log("❌ 广告信息失败限制: " + _0x9f8a0b + "次");
      console.log("🔍 搜索广告: " + (_0x13d855 ? "开启" : "关闭"));
      console.log("🔤 搜索关键词: " + _0x4d54af.join(", ") + " (模式: " + _0x2a9ea2 + ")");
      console.log("📺 广告追加: " + (_0x555783 ? "开启" : "关闭") + ", 最大追加次数=" + _0x286de3);
      console.log("⏱ 追加休息: 每" + _0x4cb200 + "次休息" + _0x2578d2 / 1000 + "-" + _0x4df44c / 1000 + "秒");
      console.log("⏱ 观看时间: " + _0x5cb13d + "-" + _0x1f588f + "秒 (支持0秒设置)");
      console.log("🔢 多账号执行模式: " + (_0xfd85e0 ? "顺序执行" : "并发执行"));
      console.log("-".repeat(35) + "\n");
      _0xae9838 > (process.env.MAX_CONCURRENCY || _0x2d7346) && (console.log("❌ 错误: 检测到 " + _0xae9838 + " 个账号配置，最多只允许" + (process.env.MAX_CONCURRENCY || _0x2d7346) + "个"), process.exit(1));
      const _0x355d50 = _0x1c6d8a();
      console.log("📊 共找到 " + _0x355d50.length + " 个有效账号");
      if (!_0x355d50.length) {
        {
          console.log("❌ 没有找到有效账号，程序退出");
          process.exit(1);
        }
      }
      const _0x284604 = _0xfd85e0 ? 1 : _0x2d7346;
      console.log("🔢 执行模式: " + (_0xfd85e0 ? "顺序执行" : "并发执行") + " (并发数: " + _0x284604 + ")");
      const _0x1ad824 = [];
      await _0x40565c(_0x355d50, _0x284604, async _0x43987c => {
        {
          if (_0x5bc690) {
            {
              console.log("🛑 卡密已失效，跳过账号 " + _0x43987c.index);
              _0x1ad824.push({
                index: _0x43987c.index,
                remark: _0x43987c.remark || "无备注",
                nickname: "账号" + _0x43987c.index,
                initialCoin: 0,
                finalCoin: 0,
                coinChange: 0,
                error: "卡密已失效"
              });
              return;
            }
          }
          console.log("\n── 🚀 开始处理 " + _0x43987c.index + "号账号" + (_0x43987c.remark ? "(" + _0x43987c.remark + ")" : "") + " ──");
          try {
            {
              const _0x33017b = await _0x52bfcd(_0x43987c);
              _0x1ad824.push({
                index: _0x43987c.index,
                remark: _0x43987c.remark || "无备注",
                nickname: _0x33017b?.["nickname"] || "账号" + _0x43987c.index,
                initialCoin: _0x33017b?.["initialCoin"] || 0,
                finalCoin: _0x33017b?.["finalCoin"] || 0,
                coinChange: _0x33017b?.["coinChange"] || 0,
                stats: _0x33017b?.["stats"] || {},
                coinLimitExceeded: _0x33017b?.["coinLimitExceeded"] || false,
                lowRewardStopped: _0x33017b?.["lowRewardStopped"] || false,
                accumulatedCoins: _0x33017b?.["accumulatedCoins"] || 0,
                adInfoFailCount: _0x33017b?.["adInfoFailCount"] || 0
              });
            }
          } catch (_0x149a5f) {
            {
              console.log("❌ 账号[" + _0x43987c.index + "] 执行异常：" + _0x149a5f.message);
              _0x1ad824.push({
                index: _0x43987c.index,
                remark: _0x43987c.remark || "无备注",
                nickname: "账号" + _0x43987c.index,
                initialCoin: 0,
                finalCoin: 0,
                coinChange: 0,
                error: _0x149a5f.message
              });
            }
          }
        }
      });
      _0x1ad824.sort((_0x27260f, _0x186eda) => _0x27260f.index - _0x186eda.index);
      _0x442d26(_0x1ad824);
    }
  }
  async function _0x5cbcc9(_0x4dfa99, _0x5bd271 = null, _0xd129a = "Unknown Request") {
    {
      const _0x49a6cc = {
        ..._0x4dfa99
      };
      const _0x4592d3 = _0x49a6cc;
      let _0x182e52 = null;
      if (_0x5bd271) {
        {
          try {
            {
              _0x182e52 = new _0x382ef5(_0x5bd271);
            }
          } catch (_0x179d78) {
            {
              console.log("❌ " + _0xd129a + " 代理URL无效，尝试直连模式");
            }
          }
        }
      }
      try {
        {
          const _0x36ab97 = {
            method: _0x4592d3.method || "GET",
            url: _0x4592d3.url,
            headers: _0x4592d3.headers || {},
            data: _0x4592d3.body || _0x4592d3.form,
            timeout: _0x4592d3.timeout || _0x56d22f
          };
          if (_0x182e52) {
            _0x36ab97.httpAgent = _0x182e52;
            _0x36ab97.httpsAgent = _0x182e52;
          } else {
            {
              const _0x37acc2 = {
                rejectUnauthorized: false
              };
              _0x36ab97.httpsAgent = new _0x14de9b.Agent(_0x37acc2);
            }
          }
          const _0xb682c6 = await _0x377103(_0x36ab97);
          const _0x24abdb = {
            response: _0xb682c6,
            body: _0xb682c6.data
          };
          return _0x24abdb;
        }
      } catch (_0x338d62) {
        {
          const _0x2b7b5c = {
            response: null,
            body: null
          };
          return _0x2b7b5c;
        }
      }
    }
  }
  async function _0xdd738b(_0x340e04, _0x2fbce5 = "代理连通性检测") {
    {
      if (!_0x340e04) {
        {
          const _0x44ab77 = {
            ok: true,
            msg: "✅ 未配置代理（直连模式）",
            ip: "localhost"
          };
          return _0x44ab77;
        }
      }
      let _0x9f0bc1 = 0;
      const _0x51aed6 = 5;
      while (_0x9f0bc1 < _0x51aed6) {
        {
          try {
            {
              const _0x1626a1 = new _0x382ef5(_0x340e04);
              const _0x213822 = await _0x377103.get("https://ipv4.gdt.qq.com/get_client_ip", {
                httpAgent: _0x1626a1,
                httpsAgent: _0x1626a1,
                timeout: 10000,
                headers: {
                  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/125.3  Mobile/15E148 Safari/605.1.15",
                  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                  "Sec-Fetch-Site": "none",
                  "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                  "Sec-Fetch-Mode": "navigate",
                  "Cache-Control": "no-cache",
                  Pragma: "no-cache",
                  "Sec-Fetch-Dest": "document",
                  Cookie: "pgv_pvid=2059158520; fqm_pvqid=28d9ba83-df83-4304-98c6-dbae8b6c200b"
                }
              });
              if (_0x213822.status === 200 && _0x213822.data && typeof _0x213822.data === "string") {
                {
                  const _0x41ebf5 = _0x213822.data.trim();
                  if (_0x41ebf5 && _0x41ebf5 !== "") {
                    return {
                      ok: true,
                      msg: "✅ ✅ SOCKS5代理正常，出口IP: " + _0x41ebf5,
                      ip: _0x41ebf5
                    };
                  }
                }
              }
            }
          } catch (_0x4b347a) {}
          _0x9f0bc1++;
          if (_0x9f0bc1 < _0x51aed6) {
            {
              console.log("   🔄 代理连接失败，第" + _0x9f0bc1 + "次重试...");
              await new Promise(_0x1f6ceb => setTimeout(_0x1f6ceb, 2000));
            }
          }
        }
      }
      return {
        ok: false,
        msg: "❌ 代理连接失败，已重试" + _0x51aed6 + "次",
        ip: null
      };
    }
  }
  const _0x2417ea = ["https://ipv4.gdt.qq.com/get_client_ip", "https://myip.ipip.net", "https://v4.ident.me", "https://ipv4.icanhazip.com"];
  async function _0x5961b9(_0x3a5e5d, _0x3fd4d7 = "代理连通性检测") {
    {
      if (!_0x3a5e5d) {
        {
          const _0x426618 = {
            ok: true,
            msg: "✅ 未配置代理（直连模式）",
            ip: "localhost"
          };
          return _0x426618;
        }
      }
      let _0x5001b2 = null;
      try {
        {
          const _0x4948cf = _0x3a5e5d.match(/(\d+\.\d+\.\d+\.\d+)/);
          if (_0x4948cf) {
            {
              _0x5001b2 = _0x4948cf[1];
            }
          }
        }
      } catch (_0x20d548) {
        {
          console.log("❌ 无法解析代理IP: " + _0x20d548.message);
        }
      }
      if (!_0x5001b2) {
        {
          const _0x1fa712 = {
            ok: false,
            msg: "❌ 无法解析代理IP地址",
            ip: null
          };
          return _0x1fa712;
        }
      }
      const _0x3412df = _0x2417ea.map(async (_0x52d0d0, _0x3fd525) => {
        {
          try {
            {
              const _0x1c3876 = new _0x382ef5(_0x3a5e5d);
              const _0xc0dd73 = {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/125.3  Mobile/15E148 Safari/605.1.15",
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Sec-Fetch-Site": "none",
                "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                "Sec-Fetch-Mode": "navigate",
                "Cache-Control": "no-cache",
                Pragma: "no-cache",
                "Sec-Fetch-Dest": "document"
              };
              const _0x2c9a02 = {
                httpAgent: _0x1c3876,
                httpsAgent: _0x1c3876,
                timeout: 10000,
                headers: _0xc0dd73
              };
              const _0x385572 = await _0x377103.get(_0x52d0d0, _0x2c9a02);
              if (_0x385572.status === 200 && _0x385572.data) {
                {
                  let _0x37e7a5 = "";
                  if (_0x52d0d0.includes("myip.ipip.net")) {
                    {
                      const _0x4ef656 = _0x385572.data.match(/当前 IP：(\d+\.\d+\.\d+\.\d+)/);
                      if (_0x4ef656) {
                        {
                          _0x37e7a5 = _0x4ef656[1];
                        }
                      }
                    }
                  } else {
                    _0x37e7a5 = _0x385572.data.toString().trim();
                  }
                  if (_0x37e7a5 && _0x37e7a5 !== "") {
                    {
                      if (_0x37e7a5 === _0x5001b2) {
                        {
                          return {
                            success: true,
                            url: _0x52d0d0,
                            ip: _0x37e7a5,
                            matched: true,
                            message: "✅ 接口" + (_0x3fd525 + 1) + " IP匹配: " + _0x37e7a5
                          };
                        }
                      } else {
                        {
                          return {
                            success: true,
                            url: _0x52d0d0,
                            ip: _0x37e7a5,
                            matched: false,
                            message: "⚠️ 接口" + (_0x3fd525 + 1) + " IP不匹配: 检测到" + _0x37e7a5 + ", 期望" + _0x5001b2
                          };
                        }
                      }
                    }
                  }
                }
              }
            }
          } catch (_0x43c3db) {
            {
              return {
                success: false,
                url: _0x52d0d0,
                ip: null,
                matched: false,
                message: "❌ 接口" + (_0x3fd525 + 1) + "错误: " + _0x43c3db.message
              };
            }
          }
        }
      });
      const _0x37317e = await Promise.all(_0x3412df);
      const _0xde7513 = _0x37317e.filter(_0x414bd5 => _0x414bd5.success);
      const _0x5b6eec = _0xde7513.filter(_0xb68b65 => _0xb68b65.matched);
      const _0x1e580c = [...new Set(_0xde7513.map(_0x49f074 => _0x49f074.ip).filter(_0x10c4a7 => _0x10c4a7))];
      _0x37317e.forEach(_0x5889a4 => {
        console.log("   " + _0x5889a4.message);
      });
      if (_0x5b6eec.length > 0) {
        {
          return {
            ok: true,
            msg: "✅ 代理检测通过 (" + _0x5b6eec.length + "/" + _0x2417ea.length + "个接口IP匹配)",
            ip: _0x5001b2,
            detectedIPs: _0x1e580c,
            matchCount: _0x5b6eec.length
          };
        }
      } else {
        if (_0xde7513.length > 0) {
          {
            return {
              ok: true,
              msg: "⚠️ 代理连通但IP不匹配 (检测到: " + _0x1e580c.join(", ") + ", 期望: " + _0x5001b2 + ")",
              ip: _0x5001b2,
              detectedIPs: _0x1e580c,
              matchCount: 0
            };
          }
        } else {
          {
            const _0xdc7d0c = _0x37317e.map(_0x5b83e1 => _0x5b83e1.message).join("; ");
            return {
              ok: false,
              msg: "❌ 代理连接失败: " + _0xdc7d0c,
              ip: null,
              detectedIPs: [],
              matchCount: 0
            };
          }
        }
      }
    }
  }
  async function _0x322bfd(_0x745782, _0x4de273 = "代理连通性检测") {
    {
      const _0x10a02d = process.env.DL;
      if (_0x10a02d === "0") {
        {
          console.log("   🔧 DL=0，跳过代理检测");
          const _0xa8b472 = {
            ok: true,
            msg: "✅ 已跳过代理检测（直连模式）",
            ip: "localhost"
          };
          return _0xa8b472;
        }
      }
      if (_0x10a02d === "3") {
        console.log("   🔧 DL=3，使用V3代理检测逻辑");
        return await _0xdd738b(_0x745782, _0x4de273);
      }
      if (_0x10a02d === "4") {
        {
          console.log("   🔧 DL=4，使用V4代理检测逻辑");
          return await _0x5961b9(_0x745782, _0x4de273);
        }
      }
      if (_0x10a02d === undefined) {
        {
          console.log("   🔧 未设置DL环境变量，先尝试V3代理检测逻辑");
          const _0x49a191 = await _0xdd738b(_0x745782, _0x4de273);
          if (_0x49a191.ok) {
            {
              return _0x49a191;
            }
          }
          console.log("   🔧 V3代理检测失败，尝试V4代理检测逻辑");
          const _0x556960 = await _0x5961b9(_0x745782, _0x4de273);
          if (_0x556960.ok) {
            {
              return _0x556960;
            }
          }
          const _0x33d857 = {
            ok: false,
            msg: "❌ 代理检测不通过或存在问题，请创建DL环境变量设置值为0跳过检测，或使用直连模式！",
            ip: null
          };
          return _0x33d857;
        }
      }
      console.log("   🔧 使用默认V3代理检测逻辑");
      return await _0xdd738b(_0x745782, _0x4de273);
    }
  }
  async function _0x420cca(_0x4d1075, _0x4fad87, _0xd4e8f8 = "?") {
    {
      const _0x401bfd = "https://encourage.kuaishou.com/rest/wd/encourage/account/basicInfo";
      const {
        body: _0x39216f
      } = await _0x5cbcc9({
        method: "GET",
        url: _0x401bfd,
        headers: {
          Host: "encourage.kuaishou.com",
          "User-Agent": "kwai-android aegon/3.56.0",
          Cookie: _0x4d1075,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        timeout: 12000
      }, _0x4fad87, "获取账号基本信息");
      if (_0x39216f && _0x39216f.result === 1 && _0x39216f.data) {
        {
          const _0x4e5cd = {
            nickname: _0x39216f.data.userData?.["nickname"] || null,
            totalCoin: _0x39216f.data.coinAmount ?? null,
            allCash: _0x39216f.data.cashAmountDisplay ?? null
          };
          return _0x4e5cd;
        }
      }
      return null;
    }
  }
  class _0x180065 {
    constructor({
      index: _0x308a6e,
      salt: _0x2fc648,
      cookie: _0x490c06,
      nickname = "",
      proxyUrl = null,
      tasksToExecute = _0x1a9d8e,
      remark = ""
    }) {
      {
        this.index = _0x308a6e;
        this.salt = _0x2fc648;
        this.cookie = _0x490c06;
        this.nickname = nickname || remark || "账号" + _0x308a6e;
        this.remark = remark;
        this.proxyUrl = proxyUrl;
        this.coinLimit = _0x887fa1;
        this.coinExceeded = false;
        this.tasksToExecute = tasksToExecute;
        this.accumulatedCoins = 0;
        this.searchKeywords = _0x4d54af;
        this.searchKeywordsMode = _0x2a9ea2;
        this.currentKeywordIndex = 0;
        this.lowRewardCount = 0;
        this.maxLowRewardCount = 30;
        this.adInfoFailCount = 0;
        this.maxAdInfoFailCount = _0x9f8a0b;
        this.taskLowRewardCount = {};
        this.tasksToExecute.forEach(_0x2d1e02 => {
          this.taskLowRewardCount[_0x2d1e02] = 0;
        });
        this.extractCookieInfo();
        this.headers = {
          Host: "nebula.kuaishou.com",
          Connection: "keep-alive",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
          Cookie: this.cookie,
          "content-type": "application/json"
        };
        this.taskReportPath = "/rest/r/ad/task/report";
        this.startTime = Date.now();
        this.endTime = this.startTime - 30000;
        this.queryParams = "mod=" + this.mod + "&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
        const _0x124ca9 = {
          name: "宝箱广告",
          businessId: 604,
          posId: 20345,
          subPageId: 100024063,
          requestSceneType: 1,
          taskType: 1
        };
        const _0x1c7bd3 = {
          name: "看广告得金币",
          businessId: 671,
          posId: 24068,
          subPageId: 100026368,
          requestSceneType: 1,
          taskType: 1
        };
        const _0x579f7d = {
          name: "饭补广告",
          businessId: 921,
          posId: 29742,
          subPageId: 100029908,
          requestSceneType: 7,
          taskType: 2
        };
        const _0x43620b = {
          name: "搜索广告",
          businessId: 7077,
          posId: 216267,
          subPageId: 100161535,
          pageId: 10014,
          requestSceneType: 1,
          taskType: 2,
          linkUrl: "eyJwYWdlSWQiOjEwMDE0LCJzdWJQYWdlSWQiOjEwMDE2MTUzNSwicG9zSWQiOjIxNjI2NywiYnVzaW5lc3NJZCI6NzA3NywiZXh0UGFyYW1zIjoiYzc4OWI1ZTAzMjMxOTUwZjcyM2ZjMWE1ZGJjYzgwNmYzMDE1OTcyZWE0Mzc2NmNlNDYwNTk2ZDgzMGVjNTE5MDM0OGEwNTlkOTA2NWYwZGY1ZjkwY2YwMjEwMGVhMmQzYzU0YjUyZDBlNGUxY2Q0NmMxN2ExZDU3YmRhY2EyMzVlM2U1NjYzN2JmZGQzMThiZWMzNTgzOWU1YzIxNWUyNzMzY2IyMzQ2ZGQ1NDYyODc1NDdlMjc4OWYxMjZjZWU5NWZhYzg4N2IxMzM2MzBlZTEzYTVmYTlhODYzNDYxODQ5MjM0NDk3ZGY3ZTRmOWYyYzk2ZjQ5YzViMGExNzQ2NGE2MGM0MDg1MzU2NTY2ZDc4NGIxYjY3NzY3MzYzYjg3IiwiY3VzdG9tRGF0YSI6eyJleGl0SW5mbyI6eyJ0b2FzdERlc2MiOm51bGwsInRvYXN0SW1nVXJsIjpudWxsfX0sInBlbmRhbnRUeXBlIjoxLCJkaXNwbGF5VHlwZSI6Miwic2luZ2xlUGFnZUlkIjowLCJzaW5nbGVTdWJQYWdlSWQiOjAsImNoYW5uZWwiOjAsImNvdW50ZG93blJlcG9ydCI6ZmFsc2UsInRoZW1lVHlwZSI6MCwibWl4ZWRBZCI6dHJ1ZSwiZnVsbE1peGVkIjp0cnVlLCJhdXRvUmVwb3J0Ijp0cnVlLCJmcm9tVGFza0NlbnRlciI6dHJ1ZSwic2VhcmNoSW5zcGlyZVNjaGVtZUluZm8iOm51bGwsImFtb3VudCI6MH0"
        };
        const _0x16add3 = {
          box: _0x124ca9,
          look: _0x1c7bd3,
          food: _0x579f7d,
          search: _0x43620b
        };
        this.taskConfigs = _0x16add3;
        this.taskStats = {};
        this.tasksToExecute.forEach(_0x5985a6 => {
          {
            if (this.taskConfigs[_0x5985a6]) {
              {
                const _0x24a4eb = {
                  success: 0,
                  failed: 0,
                  totalReward: 0
                };
                this.taskStats[_0x5985a6] = _0x24a4eb;
              }
            }
          }
        });
        this.lowRewardStreak = 0;
        this.immediateStopThreshold = _0x31c402;
        this.lowRewardThreshold = _0x519ba8;
        this.lowRewardLimit = _0x2ac5b8;
        this.stopAllTasks = false;
        this.taskLimitReached = {};
        this.tasksToExecute.forEach(_0x272471 => {
          {
            if (this.taskConfigs[_0x272471]) {
              {
                this.taskLimitReached[_0x272471] = false;
              }
            }
          }
        });
        this.taskDisabled = {};
        this.tasksToExecute.forEach(_0x114542 => {
          {
            this.taskDisabled[_0x114542] = false;
          }
        });
        this.ssFirstTaskShown = false;
        this.currentTaskIndex = 0;
        this.taskLowRewardFlags = {};
        this.tasksToExecute.forEach(_0x1dd90a => {
          this.taskLowRewardFlags[_0x1dd90a] = false;
        });
        this.isSingleTaskMode = this.tasksToExecute.length === 1;
        this.isCycleMode = _0x2c225b > 0;
        this.cycleRounds = _0x2c225b;
        this.currentCycleRound = 0;
        this.taskExecutionOrder = _0x1e8c70;
      }
    }
    checkAccumulatedCoinsLimit() {
      {
        if (this.accumulatedCoins >= this.coinLimit) {
          {
            console.log("💰 " + this.getAccountDisplayName() + " 累计获得金币已达 " + this.accumulatedCoins + "，超过阈值 " + this.coinLimit + "，停止任务");
            this.coinExceeded = true;
            this.stopAllTasks = true;
            return true;
          }
        }
        return false;
      }
    }
    getSearchKeyword() {
      {
        if (this.searchKeywords.length === 0) {
          return "短剧小说";
        }
        if (this.searchKeywords.length === 1) {
          {
            return this.searchKeywords[0];
          }
        }
        if (this.searchKeywordsMode === "random") {
          {
            const _0x18e137 = Math.floor(Math.random() * this.searchKeywords.length);
            return this.searchKeywords[_0x18e137];
          }
        } else {
          {
            const _0x67b8e = this.searchKeywords[this.currentKeywordIndex];
            this.currentKeywordIndex = (this.currentKeywordIndex + 1) % this.searchKeywords.length;
            return _0x67b8e;
          }
        }
      }
    }
    _getImpExtData(_0x364948) {
      {
        if (_0x364948.name === "搜索广告") {
          {
            const _0x283d9f = this.getSearchKeyword();
            const _0x4b36cd = {
              openH5AdCount: 2,
              sessionLookedCompletedCount: "1",
              sessionType: "1",
              searchKey: _0x283d9f,
              triggerType: "2",
              disableReportToast: "true",
              businessEnterAction: "7",
              neoParams: _0x364948.linkUrl
            };
            return JSON.stringify(_0x4b36cd);
          }
        } else {
          {
            return "{}";
          }
        }
      }
    }
    async checkCoinLimit() {
      {
        try {
          {
            const _0x11dad5 = await _0x420cca(this.cookie, this.proxyUrl, this.index);
            if (_0x11dad5 && _0x11dad5.totalCoin) {
              {
                const _0x14ec2c = parseInt(_0x11dad5.totalCoin);
                if (_0x14ec2c >= this.coinLimit) {
                  {
                    console.log("💰 " + this.getAccountDisplayName() + " 当前金币已达 " + _0x14ec2c + "，超过阈值 " + this.coinLimit + "，停止任务");
                    this.coinExceeded = true;
                    this.stopAllTasks = true;
                    return true;
                  }
                }
              }
            }
            return false;
          }
        } catch (_0x4b064d) {
          console.log("❌ " + this.getAccountDisplayName() + " 金币检查异常: " + _0x4b064d.message);
          return false;
        }
      }
    }
    getAccountDisplayName() {
      {
        return "账号[" + this.nickname + "]" + (this.remark ? "(" + this.remark + ")" : "");
      }
    }
    extractCookieInfo() {
      {
        try {
          {
            const _0x14971c = this.cookie.match(/mod=([^;]+)/);
            const _0x276fbd = this.cookie.match(/egid=([^;]+)/);
            const _0x1e4038 = this.cookie.match(/did=([^;]+)/);
            const _0x43678f = this.cookie.match(/userId=([^;]+)/);
            const _0x15eb35 = this.cookie.match(/kuaishou\.api_st=([^;]+)/);
            const _0x4b5cc7 = this.cookie.match(/appver=([^;]+)/);
            const _0x311ffb = this.cookie.match(/region_ticket=([^;]+)/);
            const _0x33c3a4 = this.cookie.match(/token=([^;]+)/);
            this.token = _0x33c3a4 ? _0x33c3a4[1] : "";
            this.customRegionTicket = _0x311ffb ? _0x311ffb[1] : "RT_66898EB2122EC01C6A99E8FCCB4887F9C156DFC294E9FD56AD0156AECEB24C4EC69BFDFE7";
            this.mod = _0x14971c ? _0x14971c[1] : "Xiaomi(23116PN5BC)";
            this.egid = _0x276fbd ? _0x276fbd[1] : "";
            this.did = _0x1e4038 ? _0x1e4038[1] : "";
            this.userId = _0x43678f ? _0x43678f[1] : "";
            this.kuaishouApiSt = _0x15eb35 ? _0x15eb35[1] : "";
            this.appver = _0x4b5cc7 ? _0x4b5cc7[1] : "13.7.20.10468";
            if (!this.egid || !this.did) {
              {
                console.log("⚠️ " + this.getAccountDisplayName() + " cookie格式可能无egid或did，继续尝试...");
              }
            }
          }
        } catch (_0x30b4a6) {
          {
            console.log("❌ " + this.getAccountDisplayName() + " 解析cookie失败: " + _0x30b4a6.message);
          }
        }
      }
    }
    getTaskStats() {
      return this.taskStats;
    }
    printTaskStats() {
      {
        console.log("\n📊 " + this.getAccountDisplayName() + " 任务统计:");
        for (const [_0x448633, _0x3ae7d5] of Object.entries(this.taskStats)) {
          {
            const _0x1795b3 = this.taskConfigs[_0x448633].name;
            console.log("   " + _0x1795b3 + ": 成功" + _0x3ae7d5.success + "次, 失败" + _0x3ae7d5.failed + "次, 奖励" + _0x3ae7d5.totalReward + "金币");
          }
        }
        console.log("💰 累计获得金币: " + this.accumulatedCoins);
        console.log("❌ 广告信息失败次数: " + this.adInfoFailCount + "/" + this.maxAdInfoFailCount);
      }
    }
    async retryOperation(_0x358503, _0x2d4337, _0x191d58 = 5, _0x57210c = 2000) {
      {
        let _0x48891c = 0;
        let _0x21abaa = null;
        while (_0x48891c < _0x191d58) {
          {
            try {
              {
                const _0x147a23 = await _0x358503();
                if (_0x147a23) {
                  {
                    return _0x147a23;
                  }
                }
                _0x21abaa = new Error(_0x2d4337 + " 返回空结果");
              }
            } catch (_0x48c1c6) {
              _0x21abaa = _0x48c1c6;
            }
            _0x48891c++;
            if (_0x48891c < _0x191d58) {
              {
                let _0x9e6ca8 = "🔄 " + this.getAccountDisplayName() + " " + _0x2d4337 + " 失败，重试 " + _0x48891c + "/" + _0x191d58;
                _0x2d4337.includes("获取") && _0x2d4337.includes("广告信息") && (_0x9e6ca8 += " (偶尔出现可能是[1.面板网络不好][2.代理延迟太高]无视即可！若一直出现该提示[1.请重抓ck和salt][2.更换青龙面板][3.更换代理ip][4.不要使用国外ip的青龙面板])");
                console.log(_0x9e6ca8);
                await new Promise(_0xe11ae8 => setTimeout(_0xe11ae8, _0x57210c));
              }
            }
          }
        }
        console.log("❌ " + this.getAccountDisplayName() + " " + _0x2d4337 + " 失败，已重试" + _0x191d58 + "次");
        return null;
      }
    }
    async getAdInfo(_0x2eb241) {
      {
        try {
          {
            const _0x5f39cb = "/rest/e/reward/mixed/ad";
            const _0x233878 = {
              encData: "|encData|",
              sign: "|sign|",
              cs: "false",
              client_key: "3c2cd3f3",
              videoModelCrowdTag: "1_23",
              os: "android",
              "kuaishou.api_st": this.kuaishouApiSt,
              uQaTag: "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
            };
            const _0x1664eb = {
              earphoneMode: "1",
              mod: this.mod,
              appver: this.appver,
              isp: "CUCC",
              language: "zh-cn",
              ud: this.userId,
              did_tag: "0",
              net: "WIFI",
              kcv: "1599",
              app: "0",
              kpf: "ANDROID_PHONE",
              ver: "11.6",
              android_os: "0",
              boardPlatform: "pineapple",
              kpn: "KUAISHOU",
              androidApiLevel: "35",
              country_code: "cn",
              sys: "ANDROID_15",
              sw: "1080",
              sh: "2400",
              abi: "arm64",
              userRecoBit: "0"
            };
            const _0x1717bb = {
              appId: "kuaishou",
              name: "快手",
              packageName: "com.smile.gifmaker",
              version: this.appver,
              versionCode: -1
            };
            const _0x1c48d1 = {
              width: 1080,
              height: 2249
            };
            const _0x19952e = {
              osType: 1,
              osVersion: "15",
              deviceId: this.did,
              screenSize: _0x1c48d1,
              ftt: ""
            };
            const _0x3ae7e5 = {
              userId: this.userId,
              age: 0,
              gender: ""
            };
            const _0x5b28a8 = {
              appInfo: _0x1717bb,
              deviceInfo: _0x19952e,
              userInfo: _0x3ae7e5,
              impInfo: [{
                pageId: _0x2eb241.pageId || 100011251,
                subPageId: _0x2eb241.subPageId,
                action: 0,
                browseType: _0x2eb241.name === "搜索广告" ? 4 : 3,
                impExtData: this._getImpExtData(_0x2eb241),
                mediaExtData: "{}"
              }]
            };
            const _0x481258 = Buffer.from(JSON.stringify(_0x5b28a8)).toString("base64");
            let _0xd6400e = await this.getSign(_0x481258);
            if (!_0xd6400e) {
              console.log("❌ " + this.getAccountDisplayName() + " 获取签名失败，跳过此次任务");
              return null;
            }
            _0x233878.encData = _0xd6400e.encdata;
            _0x233878.sign = _0xd6400e.sign;
            let _0x32629b = await this.requestSignService({
              urlpath: _0x5f39cb,
              reqdata: _0x5bc806.stringify(_0x233878) + "&" + _0x5bc806.stringify(_0x1664eb),
              api_client_salt: this.salt
            });
            if (!_0x32629b) {
              {
                console.log("❌ " + this.getAccountDisplayName() + " 获取签名服务失败，跳过此次任务");
                return null;
              }
            }
            const _0x3bcead = {
              ..._0x1664eb,
              sig: _0x32629b.sig || "",
              __NS_sig3: _0x32629b.__NS_sig3 || "",
              __NS_xfalcon: _0x32629b.__NS_xfalcon || "",
              __NStokensig: _0x32629b.__NStokensig || ""
            };
            const _0x2633d3 = "https://api.e.kuaishou.com" + _0x5f39cb + "?" + _0xc8023e.stringify(_0x3bcead);
            const {
              body: _0x27b550
            } = await _0x5cbcc9({
              method: "POST",
              url: _0x2633d3,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                Host: "api.e.kuaishou.com",
                "User-Agent": "kwai-android aegon/3.56.0",
                Cookie: this.cookie + ";__NSWJ=;region_ticket=" + this.customRegionTicket
              },
              form: _0x233878,
              timeout: 12000
            }, this.proxyUrl, this.getAccountDisplayName() + " 获取广告");
            if (!_0x27b550) {
              {
                this.adInfoFailCount++;
                console.log("❌ " + this.getAccountDisplayName() + " 获取广告信息失败，累计失败: " + this.adInfoFailCount + "/" + this.maxAdInfoFailCount);
                if (this.adInfoFailCount >= this.maxAdInfoFailCount) {
                  {
                    console.log("🚨 " + this.getAccountDisplayName() + " 广告信息失败次数超过" + this.maxAdInfoFailCount + "次，停止脚本运行");
                    this.stopAllTasks = true;
                  }
                }
                return null;
              }
            }
            if (_0x27b550.errorMsg === "OK" && _0x27b550.feeds && _0x27b550.feeds[0] && _0x27b550.feeds[0].ad) {
              {
                const _0xfc0a9c = _0x27b550.feeds[0].caption || _0x27b550.feeds[0].ad?.["caption"] || "";
                if (_0xfc0a9c) {
                  {
                    console.log("✅ " + this.getAccountDisplayName() + " 成功获取广告：" + _0xfc0a9c);
                  }
                }
                const _0x39d8fc = _0x27b550.feeds[0].exp_tag || "";
                const _0x4280a7 = _0x39d8fc.split("/")[1]?.["split"]("_")?.[0] || "";
                let _0x28347b = false;
                try {
                  {
                    const _0x1df3e0 = _0x27b550.feeds[0].ad?.["adDataV2"];
                    const _0x26dae3 = _0x1df3e0?.["onceAgainRewardInfo"];
                    if (_0x26dae3?.["hasMore"]) {
                      {
                        _0x28347b = true;
                        console.log("🔍 " + this.getAccountDisplayName() + " 检测到追加广告标识");
                      }
                    }
                  }
                } catch (_0x1fd6f2) {}
                let _0x37e174 = 0;
                try {
                  {
                    if (_0x27b550.feeds[0].ad.extData) {
                      {
                        const _0x1ee373 = JSON.parse(_0x27b550.feeds[0].ad.extData);
                        _0x37e174 = _0x1ee373.awardCoin || 0;
                      }
                    }
                    if (_0x37e174 === 0) {
                      {
                        if (_0x27b550.feeds[0].ad.adDataV2?.["inspirePersonalize"]?.["awardValue"]) {
                          {
                            _0x37e174 = parseInt(_0x27b550.feeds[0].ad.adDataV2.inspirePersonalize.awardValue) || 0;
                          }
                        } else {
                          _0x27b550.feeds[0].ad.adDataV2?.["inspireAdInfo"]?.["inspirePersonalize"]?.["neoValue"] && (_0x37e174 = parseInt(_0x27b550.feeds[0].ad.adDataV2.inspireAdInfo.inspirePersonalize.neoValue) || 0);
                        }
                      }
                    }
                  }
                } catch (_0x43dad9) {
                  {
                    console.log("❌ " + this.getAccountDisplayName() + " 解析预计金币失败: " + _0x43dad9.message);
                  }
                }
                console.log("🟢 " + this.getAccountDisplayName() + " 本次广告预计获得:" + _0x37e174 + "金币");
                if (_0x37e174 === 5) {
                  {
                    console.log("⚠️ " + this.getAccountDisplayName() + " 预计金币为5，可能是直播广告，已为您自动跳过！");
                    return null;
                  }
                }
                const _0x4e4cb4 = {
                  cid: _0x27b550.feeds[0].ad.creativeId,
                  llsid: _0x4280a7,
                  hasRewardEnd: _0x28347b,
                  expectedCoins: _0x37e174
                };
                return _0x4e4cb4;
              }
            }
            this.adInfoFailCount++;
            console.log("❌ " + this.getAccountDisplayName() + " 获取广告信息失败，累计失败: " + this.adInfoFailCount + "/" + this.maxAdInfoFailCount);
            this.adInfoFailCount >= this.maxAdInfoFailCount && (console.log("🚨 " + this.getAccountDisplayName() + " 广告信息失败次数超过" + this.maxAdInfoFailCount + "次，停止脚本运行"), this.stopAllTasks = true);
            return null;
          }
        } catch (_0x56c17f) {
          {
            console.log("❌ " + this.getAccountDisplayName() + " 获取广告异常: " + _0x56c17f.message);
            this.adInfoFailCount++;
            console.log("❌ " + this.getAccountDisplayName() + " 获取广告信息失败，累计失败: " + this.adInfoFailCount + "/" + this.maxAdInfoFailCount);
            this.adInfoFailCount >= this.maxAdInfoFailCount && (console.log("🚨 " + this.getAccountDisplayName() + " 广告信息失败次数超过" + this.maxAdInfoFailCount + "次，停止脚本运行"), this.stopAllTasks = true);
            return null;
          }
        }
      }
    }
    async generateSignature(_0x21f351, _0x139283, _0x39eac0, _0x2d3288) {
      {
        try {
          {
            const _0x4e9784 = {
              businessId: _0x2d3288.businessId,
              endTime: this.endTime,
              extParams: "",
              mediaScene: "video",
              neoInfos: [{
                creativeId: _0x21f351,
                extInfo: "",
                llsid: _0x139283,
                requestSceneType: _0x2d3288.requestSceneType,
                taskType: _0x2d3288.taskType,
                watchExpId: "",
                watchStage: 0
              }],
              pageId: _0x2d3288.pageId || 100011251,
              posId: _0x2d3288.posId,
              reportType: 0,
              sessionId: "",
              startTime: this.startTime,
              subPageId: _0x2d3288.subPageId
            };
            const _0x55574f = JSON.stringify(_0x4e9784);
            const _0x47120d = "bizStr=" + encodeURIComponent(_0x55574f) + "&cs=false&client_key=3c2cd3f3";
            const _0x477b7 = this.queryParams + "&" + _0x47120d;
            const _0x10da63 = await this.requestSignService({
              urlpath: this.taskReportPath,
              reqdata: _0x477b7,
              api_client_salt: this.salt
            }, this.getAccountDisplayName() + " 生成报告签名");
            if (!_0x10da63) {
              {
                console.log("❌ " + this.getAccountDisplayName() + " 生成报告签名失败");
                return null;
              }
            }
            const _0x20bc67 = {
              sig: _0x10da63.sig,
              sig3: _0x10da63.__NS_sig3,
              xfalcon: _0x10da63.__NS_xfalcon,
              sigtoken: _0x10da63.__NStokensig,
              post: _0x47120d
            };
            return _0x20bc67;
          }
        } catch (_0x3ec283) {
          {
            console.log("❌ " + this.getAccountDisplayName() + " 生成签名异常: " + _0x3ec283.message);
            return null;
          }
        }
      }
    }
    async getSign(_0x48a7eb) {
      {
        if (_0x35869b) {
          {
            console.log("🛑 签名服务已标记为故障，跳过签名");
            return null;
          }
        }
        try {
          {
            const _0x1a22fd = await _0x22c50d();
            const _0x5ed603 = {
              data: _0x48a7eb,
              timestamp: _0x1a22fd.timestamp
            };
            const {
              body: _0x265bef
            } = await _0x5cbcc9({
              method: "POST",
              url: _0x1c85ec(),
              body: JSON.stringify(_0x5ed603),
              headers: {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0"
              }
            }, null, "获取encsign签名");
            if (_0x265bef) {
              {
                if (_0x265bef.status) {
                  {
                    console.log("✅ " + this.getAccountDisplayName() + " encsign签名成功");
                    _0x34dd93 = 0;
                    return _0x265bef.data;
                  }
                } else {
                  {
                    const _0x2de951 = _0x265bef.error || "未知错误";
                    console.log("❌ " + this.getAccountDisplayName() + " encsign签名失败: " + _0x2de951);
                    _0x34dd93++;
                    if (_0x2de951.includes("卡密") || _0x2de951.includes("次数") || _0x2de951.includes("过期") || _0x2de951.includes("无效")) {
                      {
                        console.log("🔍 检测到可能是卡密问题，正在验证卡密状态...");
                        const _0x5be5e8 = await _0x2f9f3c();
                        if (!_0x5be5e8.valid) {
                          console.log("🚨 卡密已失效: " + _0x5be5e8.msg);
                          _0x5bc690 = true;
                          this.stopAllTasks = true;
                          return null;
                        }
                        if (_0x5be5e8.data && _0x5be5e8.data.type === "count" && _0x5be5e8.data.val <= 0) {
                          {
                            console.log("🚨 卡密次数已用完，剩余次数: 0");
                            _0x5bc690 = true;
                            this.stopAllTasks = true;
                            return null;
                          }
                        }
                      }
                    }
                    if (_0x34dd93 >= _0x395a51) {
                      {
                        console.log("🔍 连续签名失败 " + _0x34dd93 + " 次，正在检查卡密状态...");
                        const _0x29c48a = await _0x2f9f3c();
                        if (!_0x29c48a.valid || _0x29c48a.data && _0x29c48a.data.type === "count" && _0x29c48a.data.val <= 0) {
                          {
                            console.log("🚨 卡密已失效或次数用完，停止执行");
                            _0x5bc690 = true;
                            this.stopAllTasks = true;
                            return null;
                          }
                        }
                        console.log("⚠️ 卡密状态正常，可能是签名服务问题");
                      }
                    }
                    if (_0x34dd93 >= _0x533cfd) {
                      {
                        console.log("🚨 连续签名失败已达 " + _0x34dd93 + " 次，超过限制 " + _0x533cfd + " 次");
                        console.log("🚨 签名服务可能已故障，停止执行所有任务");
                        _0x35869b = true;
                        this.stopAllTasks = true;
                        return null;
                      }
                    }
                    if (_0x2de951.includes("未授权")) {
                      {
                        _0x231363++;
                        if (_0x231363 >= _0x409abb) {
                          {
                            console.log("❌ 未授权错误达到上限，停止脚本运行");
                            process.exit(1);
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              {
                console.log("❌ " + this.getAccountDisplayName() + " 签名服务无响应");
                _0x34dd93++;
                if (_0x34dd93 >= _0x395a51 && _0x34dd93 < _0x533cfd) {
                  {
                    console.log("🔍 连续签名失败 " + _0x34dd93 + " 次，正在检查卡密状态...");
                    const _0x3fc1c3 = await _0x2f9f3c();
                    if (!_0x3fc1c3.valid || _0x3fc1c3.data && _0x3fc1c3.data.type === "count" && _0x3fc1c3.data.val <= 0) {
                      {
                        console.log("🚨 卡密已失效或次数用完，停止执行");
                        _0x5bc690 = true;
                        this.stopAllTasks = true;
                        return null;
                      }
                    }
                  }
                }
                if (_0x34dd93 >= _0x533cfd) {
                  console.log("🚨 连续签名失败已达 " + _0x34dd93 + " 次，签名服务可能已故障，停止执行");
                  _0x35869b = true;
                  this.stopAllTasks = true;
                  return null;
                }
              }
            }
          }
        } catch (_0x3b54d5) {
          {
            console.log("❌ " + this.getAccountDisplayName() + " 签名异常: " + _0x3b54d5.message);
            _0x34dd93++;
            if (_0x34dd93 >= _0x395a51 && _0x34dd93 < _0x533cfd) {
              {
                console.log("🔍 连续签名失败 " + _0x34dd93 + " 次，正在检查卡密状态...");
                const _0x3c805f = await _0x2f9f3c();
                if (!_0x3c805f.valid || _0x3c805f.data && _0x3c805f.data.type === "count" && _0x3c805f.data.val <= 0) {
                  {
                    console.log("🚨 卡密已失效或次数用完，停止执行");
                    _0x5bc690 = true;
                    this.stopAllTasks = true;
                    return null;
                  }
                }
              }
            }
            if (_0x34dd93 >= _0x533cfd) {
              {
                console.log("🚨 连续签名失败已达 " + _0x34dd93 + " 次，签名服务可能已故障，停止执行");
                _0x35869b = true;
                this.stopAllTasks = true;
                return null;
              }
            }
          }
        }
        return null;
      }
    }
    async requestSignService(_0x49447c, _0x276985) {
      {
        if (_0x35869b) {
          {
            console.log("🛑 签名服务已标记为故障，跳过签名");
            return null;
          }
        }
        try {
          {
            const _0x692ac4 = {
              salt: _0x49447c.api_client_salt,
              path: _0x49447c.urlpath,
              data: _0x49447c.reqdata
            };
            const {
              body: _0x266520
            } = await _0x5cbcc9({
              method: "POST",
              url: _0x1c85ec(),
              headers: {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0"
              },
              body: JSON.stringify(_0x692ac4),
              timeout: 15000
            }, null, _0x276985 || "获取nssig签名");
            if (_0x266520) {
              {
                if (_0x266520.status) {
                  {
                    console.log("✅ " + this.getAccountDisplayName() + " nssig签名成功");
                    _0x34dd93 = 0;
                    const _0x19e9c0 = {
                      sig: _0x266520.data.sig,
                      __NStokensig: _0x266520.data.nstokensig,
                      __NS_sig3: _0x266520.data.nssig3,
                      __NS_xfalcon: _0x266520.data.xfalcon || ""
                    };
                    return _0x19e9c0;
                  }
                } else {
                  {
                    const _0x284ab1 = _0x266520.error || "未知错误";
                    console.log("❌ nssig签名失败: " + _0x284ab1);
                    _0x34dd93++;
                    if (_0x284ab1.includes("卡密") || _0x284ab1.includes("次数") || _0x284ab1.includes("过期") || _0x284ab1.includes("无效")) {
                      {
                        console.log("🔍 检测到可能是卡密问题，正在验证卡密状态...");
                        const _0x58dd94 = await _0x2f9f3c();
                        if (!_0x58dd94.valid) {
                          {
                            console.log("🚨 卡密已失效: " + _0x58dd94.msg);
                            _0x5bc690 = true;
                            this.stopAllTasks = true;
                            return null;
                          }
                        }
                        if (_0x58dd94.data && _0x58dd94.data.type === "count" && _0x58dd94.data.val <= 0) {
                          {
                            console.log("🚨 卡密次数已用完，剩余次数: 0");
                            _0x5bc690 = true;
                            this.stopAllTasks = true;
                            return null;
                          }
                        }
                      }
                    }
                    if (_0x34dd93 >= _0x395a51) {
                      {
                        console.log("🔍 连续签名失败 " + _0x34dd93 + " 次，正在检查卡密状态...");
                        const _0xd0d5fa = await _0x2f9f3c();
                        if (!_0xd0d5fa.valid || _0xd0d5fa.data && _0xd0d5fa.data.type === "count" && _0xd0d5fa.data.val <= 0) {
                          {
                            console.log("🚨 卡密已失效或次数用完，停止执行");
                            _0x5bc690 = true;
                            this.stopAllTasks = true;
                            return null;
                          }
                        }
                        console.log("⚠️ 卡密状态正常，可能是签名服务问题");
                      }
                    }
                    if (_0x34dd93 >= _0x533cfd) {
                      {
                        console.log("🚨 连续签名失败已达 " + _0x34dd93 + " 次，签名服务可能已故障，停止执行");
                        _0x35869b = true;
                        this.stopAllTasks = true;
                        return null;
                      }
                    }
                    if (_0x284ab1.includes("未授权")) {
                      {
                        _0x231363++;
                        if (_0x231363 >= _0x409abb) {
                          {
                            console.log("❌ 未授权错误达到上限，停止脚本运行");
                            process.exit(1);
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              {
                console.log("❌ 签名服务无响应");
                _0x34dd93++;
                if (_0x34dd93 >= _0x395a51 && _0x34dd93 < _0x533cfd) {
                  {
                    console.log("🔍 连续签名失败 " + _0x34dd93 + " 次，正在检查卡密状态...");
                    const _0x293f8d = await _0x2f9f3c();
                    if (!_0x293f8d.valid || _0x293f8d.data && _0x293f8d.data.type === "count" && _0x293f8d.data.val <= 0) {
                      {
                        console.log("🚨 卡密已失效或次数用完，停止执行");
                        _0x5bc690 = true;
                        this.stopAllTasks = true;
                        return null;
                      }
                    }
                  }
                }
                if (_0x34dd93 >= _0x533cfd) {
                  {
                    console.log("🚨 连续签名失败已达 " + _0x34dd93 + " 次，签名服务可能已故障，停止执行");
                    _0x35869b = true;
                    this.stopAllTasks = true;
                    return null;
                  }
                }
              }
            }
          }
        } catch (_0x1bfc29) {
          {
            console.log("❌ 签名异常: " + _0x1bfc29.message);
            _0x34dd93++;
            if (_0x34dd93 >= _0x395a51 && _0x34dd93 < _0x533cfd) {
              {
                console.log("🔍 连续签名失败 " + _0x34dd93 + " 次，正在检查卡密状态...");
                const _0x47c15f = await _0x2f9f3c();
                if (!_0x47c15f.valid || _0x47c15f.data && _0x47c15f.data.type === "count" && _0x47c15f.data.val <= 0) {
                  {
                    console.log("🚨 卡密已失效或次数用完，停止执行");
                    _0x5bc690 = true;
                    this.stopAllTasks = true;
                    return null;
                  }
                }
              }
            }
            if (_0x34dd93 >= _0x533cfd) {
              console.log("🚨 连续签名失败已达 " + _0x34dd93 + " 次，签名服务可能已故障，停止执行");
              _0x35869b = true;
              this.stopAllTasks = true;
              return null;
            }
          }
        }
        return null;
      }
    }
    async submitReport(_0x151520, _0x10acd8, _0x477b5a, _0x48432f, _0x14dbf8, _0x280593, _0x574635) {
      {
        try {
          {
            const _0x36dfd6 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x151520 + "&__NS_sig3=" + _0x10acd8 + "&__NS_xfalcon=" + _0x48432f + "&__NStokensig=" + _0x477b5a);
            const {
              body: _0x34d329
            } = await _0x5cbcc9({
              method: "POST",
              url: _0x36dfd6,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                Host: "api.e.kuaishou.cn",
                Cookie: this.cookie,
                "User-Agent": "kwai-android aegon/3.56.0",
                "Content-Type": "application/x-www-form-urlencoded"
              },
              body: _0x14dbf8,
              timeout: 12000
            }, this.proxyUrl, this.getAccountDisplayName() + " 提交任务");
            if (!_0x34d329) {
              {
                const _0xd8116b = {
                  success: false,
                  reward: 0
                };
                return _0xd8116b;
              }
            }
            if (_0x34d329.result === 1) {
              {
                const _0xbc01cc = _0x34d329.data?.["neoAmount"] || 0;
                const _0x535c2a = {
                  success: true,
                  reward: _0xbc01cc
                };
                return _0x535c2a;
              }
            }
            if ([20107, 20108, 1003, 415].includes(_0x34d329.result)) {
              {
                console.log("🚫 " + this.getAccountDisplayName() + " " + _0x574635.name + " 已达上限，停止该任务继续执行");
                this.taskLimitReached[_0x280593] = true;
                const _0x4eec15 = {
                  success: false,
                  reward: 0,
                  limitReached: true
                };
                return _0x4eec15;
              }
            }
            const _0x256db9 = {
              success: false,
              reward: 0
            };
            return _0x256db9;
          }
        } catch (_0x15faa7) {
          {
            console.log("❌ " + this.getAccountDisplayName() + " 提交任务异常: " + _0x15faa7.message);
            const _0x817341 = {
              success: false,
              reward: 0
            };
            return _0x817341;
          }
        }
      }
    }
    checkLowReward(_0x2ad37d, _0x89358, _0xf7c379) {
      {
        if (_0x2ad37d === 5) {
          {
            console.log("💰 " + this.getAccountDisplayName() + " " + _0xf7c379 + " 获得5金币(可能是直播广告，请继续保持脚本运行！)");
            return false;
          }
        }
        if (_0x2ad37d === 1 || _0x2ad37d === 10 || _0x2ad37d <= this.lowRewardThreshold) {
          {
            this.taskLowRewardCount[_0x89358]++;
            console.log("⚠️ " + this.getAccountDisplayName() + " " + _0xf7c379 + " 低金币累计: " + this.taskLowRewardCount[_0x89358] + "/" + this.lowRewardLimit + "次");
            if (this.taskLowRewardCount[_0x89358] >= this.lowRewardLimit) {
              {
                console.log("🚫 " + this.getAccountDisplayName() + " " + _0xf7c379 + " 低金币次数已达" + this.lowRewardLimit + "次，禁用该任务");
                this.taskDisabled[_0x89358] = true;
                return true;
              }
            }
          }
        }
        return false;
      }
    }
    checkLowRewardAndStop(_0x861be9, _0x2bbd1d) {
      {
        if (_0x861be9 === 5) {
          {
            console.log("💰 " + this.getAccountDisplayName() + " " + _0x2bbd1d + " 获得5金币(可能是直播广告，请继续保持脚本运行！)");
            return false;
          }
        }
        if (_0x861be9 <= this.lowRewardThreshold && _0x861be9 !== 5) {
          {
            this.lowRewardCount++;
            console.log("⚠️ " + this.getAccountDisplayName() + " " + _0x2bbd1d + " 低奖励累计: " + this.lowRewardCount + "/" + this.maxLowRewardCount + "次");
            if (this.lowRewardCount >= this.maxLowRewardCount) {
              {
                console.log("🚫 " + this.getAccountDisplayName() + " 累计低奖励次数已达" + this.maxLowRewardCount + "次，停止该账号继续执行任务");
                this.stopAllTasks = true;
                return true;
              }
            }
          }
        }
        return false;
      }
    }
    async executeTask(_0x153798, _0x3bcf23 = 1, _0x5c0754 = false, _0x2a25ed = 0) {
      const _0x202b71 = await _0x51a1c4();
      if (!_0x202b71) {
        {
          console.log("🛑 " + this.getAccountDisplayName() + " 卡密已失效，停止执行任务");
          this.stopAllTasks = true;
          const _0x34ca15 = {
            success: false,
            reward: 0,
            hasRewardEnd: false,
            cardExpired: true
          };
          return _0x34ca15;
        }
      }
      const _0x415c53 = this.taskConfigs[_0x153798];
      if (!_0x415c53) {
        {
          const _0x4e0318 = {
            success: false,
            reward: 0,
            hasRewardEnd: false
          };
          return _0x4e0318;
        }
      }
      if (this.taskDisabled[_0x153798]) {
        {
          const _0x19cef2 = {
            success: false,
            reward: 0,
            hasRewardEnd: false
          };
          return _0x19cef2;
        }
      }
      if (this.taskLimitReached[_0x153798]) {
        {
          const _0x2115ef = {
            success: false,
            reward: 0,
            hasRewardEnd: false,
            limitReached: true
          };
          return _0x2115ef;
        }
      }
      try {
        const _0x3c784a = {
          ..._0x415c53
        };
        const _0x3023cc = _0x3c784a;
        _0x3023cc.taskType = _0x3bcf23;
        if (_0x153798 === "search") {
          {
            _0x3023cc.requestSceneType = _0x5c0754 ? 7 : 1;
            if (!_0x5c0754) {
              {
                const _0x964660 = this.getSearchKeyword();
                console.log("🔍 " + this.getAccountDisplayName() + " 使用搜索关键词: " + _0x964660);
              }
            }
          }
        } else {
          _0x3bcf23 === 2 && (_0x3023cc.requestSceneType = 7);
        }
        let _0x5b90e4 = null;
        let _0x5a666e = 0;
        while (!_0x5b90e4 && !this.stopAllTasks) {
          _0x5a666e++;
          console.log("🔄 " + this.getAccountDisplayName() + " 尝试获取广告信息 (第" + _0x5a666e + "次)...");
          _0x5b90e4 = await this.getAdInfo(_0x3023cc);
          if (_0x5b90e4) {
            {
              break;
            }
          }
          !_0x5b90e4 && !this.stopAllTasks && (console.log("⏱ " + this.getAccountDisplayName() + " 自动跳过直播广！等待3秒后继续获取..."), await new Promise(_0x4fe750 => setTimeout(_0x4fe750, 3000)));
        }
        if (!_0x5b90e4) {
          this.taskStats[_0x153798].failed++;
          const _0x3f0a67 = {
            success: false,
            reward: 0,
            hasRewardEnd: false
          };
          return _0x3f0a67;
        }
        let _0x8e469a = 0;
        _0x1f588f > 0 && (_0x8e469a = Math.floor(Math.random() * (_0x1f588f - _0x5cb13d) + _0x5cb13d) * 1000);
        if (_0x8e469a > 0) {
          _0x5c0754 && _0x2a25ed > 0 ? console.log("👀 " + this.getAccountDisplayName() + " " + _0x415c53.name + "_追加第" + _0x2a25ed + "次 广告浏览中 " + Math.round(_0x8e469a / 1000) + "秒") : console.log("👀 " + this.getAccountDisplayName() + " " + _0x415c53.name + " 广告浏览中 " + Math.round(_0x8e469a / 1000) + "秒");
          await new Promise(_0x131cd2 => setTimeout(_0x131cd2, _0x8e469a));
        } else {
          _0x5c0754 && _0x2a25ed > 0 ? console.log("👀 " + this.getAccountDisplayName() + " " + _0x415c53.name + "_追加第" + _0x2a25ed + "次 广告浏览中 0秒") : console.log("👀 " + this.getAccountDisplayName() + " " + _0x415c53.name + " 广告浏览中 0秒");
        }
        const _0x1c74cf = await this.retryOperation(() => this.generateSignature(_0x5b90e4.cid, _0x5b90e4.llsid, _0x153798, _0x3023cc), "生成" + _0x415c53.name + "签名", 3);
        if (!_0x1c74cf) {
          this.taskStats[_0x153798].failed++;
          const _0x312e65 = {
            success: false,
            reward: 0,
            hasRewardEnd: false
          };
          return _0x312e65;
        }
        const _0x3eb863 = await this.retryOperation(() => this.submitReport(_0x1c74cf.sig, _0x1c74cf.sig3, _0x1c74cf.sigtoken, _0x1c74cf.xfalcon, _0x1c74cf.post, _0x153798, _0x3023cc), "提交" + _0x415c53.name + "报告", 3);
        if (_0x3eb863?.["success"]) {
          this.taskStats[_0x153798].success++;
          const _0x3c2d14 = _0x3eb863.reward || 0;
          this.taskStats[_0x153798].totalReward += _0x3c2d14;
          this.accumulatedCoins += _0x3c2d14;
          console.log("💰 " + this.getAccountDisplayName() + " 本次运行累计获得: " + this.accumulatedCoins + "金币");
          if (this.checkAccumulatedCoinsLimit()) {
            const _0x1a8708 = {
              success: true,
              reward: _0x3c2d14,
              hasRewardEnd: false,
              coinLimitExceeded: true
            };
            return _0x1a8708;
          }
          _0x5c0754 && _0x2a25ed > 0 ? console.log("💰 " + this.getAccountDisplayName() + " " + _0x415c53.name + "_追加第" + _0x2a25ed + "次 获得" + _0x3c2d14 + "金币奖励！") : console.log("💰 " + this.getAccountDisplayName() + " " + _0x415c53.name + " 获得" + _0x3c2d14 + "金币奖励！");
          this.checkLowReward(_0x3c2d14, _0x153798, _0x415c53.name);
          const _0x13287c = this.checkLowRewardAndStop(_0x3c2d14, _0x415c53.name);
          if (_0x13287c) {
            const _0x963582 = {
              success: true,
              reward: _0x3c2d14,
              hasRewardEnd: false,
              lowRewardStopped: true
            };
            return _0x963582;
          }
          if (_0x3c2d14 !== 5 && _0x3c2d14 <= this.lowRewardThreshold) {
            this.taskLowRewardFlags[_0x153798] = true;
            console.log("⚠️ " + this.getAccountDisplayName() + " " + _0x415c53.name + (_0x5c0754 ? "_追加" : "") + " 奖励金币过低，标记为低奖励任务！");
            this.isSingleTaskMode && (this.lowRewardStreak++, this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 " + this.getAccountDisplayName() + " 连续" + this.lowRewardLimit + "次低奖励，风控停止"), this.stopAllTasks = true));
          } else {
            _0x3c2d14 !== 5 && (this.taskLowRewardFlags[_0x153798] = false, this.lowRewardStreak = 0);
          }
          _0x3c2d14 < this.immediateStopThreshold && console.log("⚠️ " + this.getAccountDisplayName() + " 金币奖励(" + _0x3c2d14 + ")低于" + this.immediateStopThreshold);
          const _0x5dcfcd = {
            success: true,
            reward: _0x3c2d14,
            hasRewardEnd: _0x5b90e4.hasRewardEnd || false,
            limitReached: _0x3eb863.limitReached || false
          };
          return _0x5dcfcd;
        }
        _0x3eb863?.["limitReached"] && (this.taskLimitReached[_0x153798] = true);
        this.taskStats[_0x153798].failed++;
        const _0x1e3c73 = {
          success: false,
          reward: 0,
          hasRewardEnd: false,
          limitReached: _0x3eb863?.["limitReached"] || false
        };
        return _0x1e3c73;
      } catch (_0x13d30b) {
        console.log("❌ " + this.getAccountDisplayName() + " 任务异常(" + _0x153798 + "): " + _0x13d30b.message);
        this.taskStats[_0x153798].failed++;
        const _0x24bb9d = {
          success: false,
          reward: 0,
          hasRewardEnd: false
        };
        return _0x24bb9d;
      }
    }
    getNextAvailableTask() {
      const _0x3f2ad3 = this.tasksToExecute.length;
      if (_0x3f2ad3 === 1) {
        return this.tasksToExecute[0];
      }
      for (let _0x9827ad = 0; _0x9827ad < _0x3f2ad3; _0x9827ad++) {
        this.currentTaskIndex = (this.currentTaskIndex + 1) % _0x3f2ad3;
        const _0x1aebc5 = this.tasksToExecute[this.currentTaskIndex];
        if (!this.taskLowRewardFlags[_0x1aebc5] && !this.taskLimitReached[_0x1aebc5] && !this.taskDisabled[_0x1aebc5]) {
          return _0x1aebc5;
        }
      }
      return null;
    }
    allTasksHaveLowReward() {
      return this.tasksToExecute.every(_0x168640 => this.taskLowRewardFlags[_0x168640] || this.taskLimitReached[_0x168640] || this.taskDisabled[_0x168640]);
    }
    async appendAdRest(_0x5ef172) {
      if (_0x5ef172 > 0 && _0x5ef172 % _0x4cb200 === 0) {
        const _0x2ede9d = Math.floor(Math.random() * (_0x4df44c - _0x2578d2)) + _0x2578d2;
        console.log("⏱ " + this.getAccountDisplayName() + " 已追加" + _0x5ef172 + "次广告，休息" + Math.round(_0x2ede9d / 1000) + "秒");
        await new Promise(_0x4cac7f => setTimeout(_0x4cac7f, _0x2ede9d));
      }
    }
    async processTaskWithAppend(_0x4828ac, _0x189dd2 = 10) {
      let _0x508ef6 = 0;
      while (_0x508ef6 < _0x189dd2 && !this.stopAllTasks) {
        _0x508ef6++;
        const _0x422386 = await this.executeTask(_0x4828ac, _0x4828ac === "search" ? 2 : 1, false);
        if (!_0x422386.success) {
          if (_0x422386.limitReached) {
            console.log("🚫 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4828ac].name + " 已达上限，停止该任务继续执行");
            break;
          }
          continue;
        }
        if (_0x422386.coinLimitExceeded) {
          const _0xb03f1e = {
            switched: false,
            coinLimitExceeded: true
          };
          return _0xb03f1e;
        }
        if (_0x422386.lowRewardStopped) {
          const _0x34ed7a = {
            switched: false,
            lowRewardStopped: true
          };
          return _0x34ed7a;
        }
        if (this.taskDisabled[_0x4828ac]) {
          console.log("🔄 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4828ac].name + " 因低金币被禁用，自动切换到下一个任务");
          const _0x4be8df = this.getNextAvailableTask();
          if (_0x4be8df && _0x4be8df !== _0x4828ac) {
            const _0x49b488 = {
              switched: true,
              nextTask: _0x4be8df
            };
            return _0x49b488;
          }
          break;
        }
        if (this.taskLimitReached[_0x4828ac]) {
          console.log("🚫 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4828ac].name + " 已达上限，停止该任务继续执行");
          break;
        }
        if (!this.isSingleTaskMode && _0x422386.reward <= this.lowRewardThreshold && _0x422386.reward !== 5) {
          const _0x51b686 = this.getNextAvailableTask();
          if (_0x51b686 && _0x51b686 !== _0x4828ac) {
            console.log("🔄 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4828ac].name + " 奖励金币过低，自动切换到下一个任务");
            const _0x22b862 = {
              switched: true,
              nextTask: _0x51b686
            };
            return _0x22b862;
          }
          break;
        }
        let _0x199402 = 0;
        let _0xad9b57 = _0x422386.hasRewardEnd && _0x555783;
        while (_0xad9b57 && _0x199402 < _0x286de3 && !this.stopAllTasks) {
          _0x199402++;
          await this.appendAdRest(_0x199402);
          const _0x17eeee = await this.executeTask(_0x4828ac, 2, true, _0x199402);
          if (!_0x17eeee.success) {
            if (_0x17eeee.limitReached) {
              break;
            }
            continue;
          }
          if (_0x17eeee.coinLimitExceeded) {
            const _0x5a7d2d = {
              switched: false,
              coinLimitExceeded: true
            };
            return _0x5a7d2d;
          }
          if (_0x17eeee.lowRewardStopped) {
            const _0x3dde51 = {
              switched: false,
              lowRewardStopped: true
            };
            return _0x3dde51;
          }
          if (this.taskDisabled[_0x4828ac]) {
            console.log("🔄 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4828ac].name + "_追加第" + _0x199402 + "次 因低金币被禁用，自动切换到下一个任务");
            const _0x2df1a3 = this.getNextAvailableTask();
            if (_0x2df1a3 && _0x2df1a3 !== _0x4828ac) {
              const _0x1fd534 = {
                switched: true,
                nextTask: _0x2df1a3
              };
              return _0x1fd534;
            }
            break;
          }
          _0xad9b57 = _0x17eeee.hasRewardEnd;
          if (!this.isSingleTaskMode && _0x17eeee.reward <= this.lowRewardThreshold && _0x17eeee.reward !== 5) {
            const _0x4bb9e2 = this.getNextAvailableTask();
            if (_0x4bb9e2 && _0x4bb9e2 !== _0x4828ac) {
              console.log("🔄 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4828ac].name + "_追加第" + _0x199402 + "次 奖励金币过低，自动切换到下一个任务");
              const _0x4a1a39 = {
                switched: true,
                nextTask: _0x4bb9e2
              };
              return _0x4a1a39;
            }
            break;
          }
          if (_0x199402 >= _0x286de3) {
            if (!this.isSingleTaskMode) {
              console.log("🔄 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4828ac].name + " 达到最大追加次数" + _0x286de3 + "，切换到下一个任务");
              const _0x562365 = this.getNextAvailableTask();
              if (_0x562365 && _0x562365 !== _0x4828ac) {
                const _0x4b41b2 = {
                  switched: true,
                  nextTask: _0x562365
                };
                return _0x4b41b2;
              }
            } else {
              console.log("🔄 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4828ac].name + " 达到最大追加次数" + _0x286de3 + "，进行下一轮");
            }
            break;
          }
        }
        if (this.taskLimitReached[_0x4828ac]) {
          console.log("🚫 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4828ac].name + " 已达上限，停止该任务继续执行");
          break;
        }
      }
      const _0x4d266b = {
        switched: false
      };
      return _0x4d266b;
    }
    async executeCycleMode() {
      console.log("🔄 " + this.getAccountDisplayName() + " 开始循环模式，总轮数: " + this.cycleRounds);
      for (let _0x2cedfa = 1; _0x2cedfa <= this.cycleRounds && !this.stopAllTasks; _0x2cedfa++) {
        this.currentCycleRound = _0x2cedfa;
        console.log("\n🔄 " + this.getAccountDisplayName() + " 开始第" + _0x2cedfa + "/" + this.cycleRounds + "轮循环");
        if (this.taskExecutionOrder === "sequential") {
          for (const _0x25cf74 of this.tasksToExecute) {
            if (this.stopAllTasks) {
              break;
            }
            if (this.taskDisabled[_0x25cf74] || this.taskLimitReached[_0x25cf74]) {
              console.log("⏭️ " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x25cf74].name + " 被禁用或已达上限，跳过");
              continue;
            }
            console.log("🎯 " + this.getAccountDisplayName() + " 执行 " + this.taskConfigs[_0x25cf74].name);
            const _0x17e368 = await this.executeTask(_0x25cf74);
            _0x17e368.limitReached && (this.taskLimitReached[_0x25cf74] = true);
            if (_0x17e368.success && _0x555783 && _0x17e368.hasRewardEnd && !this.taskLimitReached[_0x25cf74]) {
              let _0x39a500 = 0;
              let _0x15cfa2 = _0x17e368.hasRewardEnd;
              while (_0x15cfa2 && _0x39a500 < _0x286de3 && !this.stopAllTasks && !this.taskLimitReached[_0x25cf74]) {
                _0x39a500++;
                await this.appendAdRest(_0x39a500);
                const _0x2d0e47 = await this.executeTask(_0x25cf74, 2, true, _0x39a500);
                if (!_0x2d0e47.success) {
                  _0x2d0e47.limitReached && (this.taskLimitReached[_0x25cf74] = true);
                  break;
                }
                _0x15cfa2 = _0x2d0e47.hasRewardEnd;
              }
            }
          }
        } else {
          let _0x2dbece = 0;
          let _0x3eab35 = 0;
          const _0x2c35e2 = this.tasksToExecute.length;
          while (_0x3eab35 < _0x2c35e2 && !this.stopAllTasks) {
            const _0x44b1ea = this.tasksToExecute[_0x2dbece];
            if (!this.taskDisabled[_0x44b1ea] && !this.taskLimitReached[_0x44b1ea]) {
              console.log("🎯 " + this.getAccountDisplayName() + " 执行 " + this.taskConfigs[_0x44b1ea].name);
              const _0x6a1869 = await this.executeTask(_0x44b1ea);
              _0x6a1869.limitReached && (this.taskLimitReached[_0x44b1ea] = true);
              if (_0x6a1869.success && _0x555783 && _0x6a1869.hasRewardEnd && !this.taskLimitReached[_0x44b1ea]) {
                let _0x49d5d3 = 0;
                let _0x35b592 = _0x6a1869.hasRewardEnd;
                while (_0x35b592 && _0x49d5d3 < _0x286de3 && !this.stopAllTasks && !this.taskLimitReached[_0x44b1ea]) {
                  _0x49d5d3++;
                  await this.appendAdRest(_0x49d5d3);
                  const _0x26122f = await this.executeTask(_0x44b1ea, 2, true, _0x49d5d3);
                  if (!_0x26122f.success) {
                    _0x26122f.limitReached && (this.taskLimitReached[_0x44b1ea] = true);
                    break;
                  }
                  _0x35b592 = _0x26122f.hasRewardEnd;
                }
              }
              _0x3eab35++;
            } else {
              console.log("⏭️ " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x44b1ea].name + " 被禁用或已达上限，跳过");
              _0x3eab35++;
            }
            _0x2dbece = (_0x2dbece + 1) % _0x2c35e2;
          }
        }
        if (_0x2cedfa < this.cycleRounds && !this.stopAllTasks) {
          const _0x1aa9fe = Math.floor(Math.random() * 5000) + 3000;
          console.log("⏱ " + this.getAccountDisplayName() + " 第" + _0x2cedfa + "轮完成，等待 " + Math.round(_0x1aa9fe / 1000) + "秒后开始下一轮");
          await new Promise(_0x3aa290 => setTimeout(_0x3aa290, _0x1aa9fe));
        }
      }
    }
    async executeIndependentMode() {
      console.log("🎯 " + this.getAccountDisplayName() + " 开始独立次数模式");
      for (const _0x4e7215 of this.tasksToExecute) {
        if (this.stopAllTasks) {
          break;
        }
        if (this.taskDisabled[_0x4e7215]) {
          console.log("⏭️ " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4e7215].name + " 因低金币被禁用，跳过");
          continue;
        }
        if (this.taskLimitReached[_0x4e7215]) {
          console.log("⏭️ " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4e7215].name + " 已达上限，跳过");
          continue;
        }
        const _0x2c4ef8 = _0x1c5f0f[_0x4e7215] || 1;
        console.log("🎯 " + this.getAccountDisplayName() + " 开始执行 " + this.taskConfigs[_0x4e7215].name + "，计划执行" + _0x2c4ef8 + "次");
        for (let _0x392d54 = 1; _0x392d54 <= _0x2c4ef8 && !this.stopAllTasks; _0x392d54++) {
          if (this.taskLimitReached[_0x4e7215]) {
            console.log("🚫 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4e7215].name + " 已达上限，停止执行");
            break;
          }
          console.log("📝 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4e7215].name + " 第" + _0x392d54 + "/" + _0x2c4ef8 + "次");
          const _0x10a5f4 = await this.executeTask(_0x4e7215);
          if (_0x10a5f4.limitReached) {
            this.taskLimitReached[_0x4e7215] = true;
            console.log("🚫 " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4e7215].name + " 已达上限，停止执行");
            break;
          }
          if (_0x10a5f4.success && _0x555783 && _0x10a5f4.hasRewardEnd && !this.taskLimitReached[_0x4e7215]) {
            let _0x1946fe = 0;
            let _0x4479ad = _0x10a5f4.hasRewardEnd;
            while (_0x4479ad && _0x1946fe < _0x286de3 && !this.stopAllTasks && !this.taskLimitReached[_0x4e7215]) {
              _0x1946fe++;
              await this.appendAdRest(_0x1946fe);
              const _0x23f0d3 = await this.executeTask(_0x4e7215, 2, true, _0x1946fe);
              if (!_0x23f0d3.success) {
                _0x23f0d3.limitReached && (this.taskLimitReached[_0x4e7215] = true);
                break;
              }
              _0x4479ad = _0x23f0d3.hasRewardEnd;
            }
          }
          if (this.taskDisabled[_0x4e7215]) {
            console.log("⏭️ " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4e7215].name + " 因低金币被禁用，停止执行");
            break;
          }
          if (_0x392d54 < _0x2c4ef8 && !this.stopAllTasks && !this.taskLimitReached[_0x4e7215]) {
            const _0x3a2102 = Math.floor(Math.random() * 3000) + 2000;
            await new Promise(_0x5988e0 => setTimeout(_0x5988e0, _0x3a2102));
          }
        }
        console.log("✅ " + this.getAccountDisplayName() + " " + this.taskConfigs[_0x4e7215].name + " 执行完成");
        if (!this.stopAllTasks && _0x4e7215 !== this.tasksToExecute[this.tasksToExecute.length - 1]) {
          const _0x4f638e = Math.floor(Math.random() * 5000) + 3000;
          console.log("⏱ " + this.getAccountDisplayName() + " 任务间休息 " + Math.round(_0x4f638e / 1000) + "秒");
          await new Promise(_0x1be784 => setTimeout(_0x1be784, _0x4f638e));
        }
      }
    }
    async executeAllTasksByPriority() {
      this.isCycleMode ? await this.executeCycleMode() : await this.executeIndependentMode();
    }
  }
  function _0x204fdc(_0x3ee707) {
    const _0x487aa7 = String(_0x3ee707 || "").trim().split("#");
    if (_0x487aa7.length < 2) {
      return null;
    }
    let _0x3276c8 = "";
    let _0xd7537f = "";
    let _0x2eca29 = "";
    let _0x18c9fc = null;
    const _0x14dde2 = _0x487aa7[_0x487aa7.length - 1];
    const _0x658243 = _0x14dde2.startsWith("socks5://") || _0x14dde2.includes("|");
    _0x658243 && (_0x18c9fc = _0x14dde2, _0x487aa7.pop());
    if (_0x487aa7.length === 2) {
      _0xd7537f = _0x487aa7[0];
      _0x2eca29 = _0x487aa7[1];
    } else {
      if (_0x487aa7.length === 3) {
        _0x3276c8 = _0x487aa7[0];
        _0xd7537f = _0x487aa7[1];
        _0x2eca29 = _0x487aa7[2];
      } else {
        _0x487aa7.length > 3 && (_0x3276c8 = _0x487aa7[0], _0xd7537f = _0x487aa7[1], _0x2eca29 = _0x487aa7.slice(2).join("#"));
      }
    }
    if (_0x18c9fc && _0x18c9fc.includes("|")) {
      const _0x3e02d4 = _0x18c9fc.split("|");
      if (_0x3e02d4.length >= 2) {
        const [_0x5aa5bc, _0x1d00ff, _0x3ca1e4, _0x70ff58] = _0x3e02d4;
        _0x3ca1e4 && _0x70ff58 ? _0x18c9fc = "socks5://" + _0x3ca1e4 + ":" + _0x70ff58 + "@" + _0x5aa5bc + ":" + _0x1d00ff : _0x18c9fc = "socks5://" + _0x5aa5bc + ":" + _0x1d00ff;
      }
    }
    return {
      remark: _0x3276c8 || "",
      salt: _0x2eca29,
      cookie: _0xd7537f,
      proxyUrl: _0x18c9fc
    };
  }
  function _0x1c6d8a() {
    const _0x57822b = _0x50b2d7();
    const _0x3c6812 = [];
    for (const _0x18acfd of _0x57822b) {
      const _0x4bff00 = _0x204fdc(_0x18acfd);
      _0x4bff00 ? _0x3c6812.push(_0x4bff00) : console.log("❌ 账号格式错误：" + _0x18acfd);
    }
    _0x3c6812.forEach((_0x25b0cd, _0x544562) => {
      _0x25b0cd.index = _0x544562 + 1;
    });
    return _0x3c6812;
  }
  async function _0x40565c(_0x3e3a72, _0x25379f, _0x2023a1) {
    const _0x3c12bc = new Array(_0x3e3a72.length);
    let _0x4bee74 = 0;
    async function _0x3b3d79() {
      while (true) {
        const _0x495480 = _0x4bee74++;
        if (_0x495480 >= _0x3e3a72.length) {
          return;
        }
        const _0x244e50 = _0x3e3a72[_0x495480];
        try {
          _0x3c12bc[_0x495480] = await _0x2023a1(_0x244e50, _0x495480);
        } catch (_0xe3d26b) {
          console.log("❌ 并发执行异常（index=" + (_0x495480 + 1) + "）：" + _0xe3d26b.message);
          _0x3c12bc[_0x495480] = null;
        }
      }
    }
    const _0x2b9d72 = Array.from({
      length: Math.min(_0x25379f, _0x3e3a72.length)
    }, _0x3b3d79);
    await Promise.all(_0x2b9d72);
    return _0x3c12bc;
  }
  async function _0x52bfcd(_0x4a2bab) {
    const _0x4dd1aa = () => {
      return "账号[" + _0x4a2bab.index + "]" + (_0x4a2bab.remark ? "(" + _0x4a2bab.remark + ")" : "");
    };
    console.log("🔌 " + _0x4dd1aa() + " 测试代理连接中...");
    const _0x158771 = await _0x322bfd(_0x4a2bab.proxyUrl, _0x4dd1aa());
    console.log("   " + _0x158771.msg);
    if (_0x4a2bab.proxyUrl && !_0x158771.ok) {
      console.log("❌ " + _0x4dd1aa() + " 代理测试失败，停止执行该账号任务");
      return {
        index: _0x4a2bab.index,
        remark: _0x4a2bab.remark || "无备注",
        nickname: "账号" + _0x4a2bab.index,
        initialCoin: 0,
        finalCoin: 0,
        coinChange: 0,
        error: "代理连接失败",
        proxyFailed: true
      };
    }
    console.log("🔍 " + _0x4dd1aa() + " 获取账号信息中...");
    let _0x13fa86 = await _0x420cca(_0x4a2bab.cookie, _0x4a2bab.proxyUrl, _0x4a2bab.index);
    let _0x2446db = _0x13fa86?.["nickname"] || "账号" + _0x4a2bab.index;
    if (_0x13fa86) {
      const _0x3b2f66 = _0x13fa86.totalCoin != null ? _0x13fa86.totalCoin : "未知";
      const _0x4eea46 = _0x13fa86.allCash != null ? _0x13fa86.allCash : "未知";
      console.log("✅ " + _0x4dd1aa() + " 登录成功，金币: " + _0x3b2f66 + "，余额: " + _0x4eea46);
    } else {
      console.log("❌ " + _0x4dd1aa() + " 基本信息获取失败，继续执行");
    }
    const _0x171a30 = {
      ..._0x4a2bab,
      nickname: _0x2446db,
      tasksToExecute: _0x4b6fe9
    };
    const _0x5669a7 = new _0x180065(_0x171a30);
    await _0x5669a7.checkCoinLimit();
    if (_0x5669a7.coinExceeded) {
      console.log("💰 " + _0x4dd1aa() + " 初始金币已超过阈值，不执行任务");
      return {
        index: _0x4a2bab.index,
        remark: _0x4a2bab.remark || "无备注",
        nickname: _0x2446db,
        initialCoin: _0x13fa86?.["totalCoin"] || 0,
        finalCoin: _0x13fa86?.["totalCoin"] || 0,
        coinChange: 0,
        stats: _0x5669a7.getTaskStats(),
        coinLimitExceeded: true,
        accumulatedCoins: 0,
        adInfoFailCount: _0x5669a7.adInfoFailCount
      };
    }
    console.log("🚀 " + _0x4dd1aa() + " 开始执行任务");
    await _0x5669a7.executeAllTasksByPriority();
    const _0x4bfb65 = await _0x420cca(_0x4a2bab.cookie, _0x4a2bab.proxyUrl, _0x4a2bab.index);
    const _0x50e93a = _0x13fa86?.["totalCoin"] || 0;
    const _0x37ba51 = _0x4bfb65?.["totalCoin"] || 0;
    const _0x312b5e = _0x37ba51 - _0x50e93a;
    _0x5669a7.printTaskStats();
    return {
      index: _0x4a2bab.index,
      remark: _0x4a2bab.remark || "无备注",
      nickname: _0x2446db,
      initialCoin: _0x50e93a,
      finalCoin: _0x37ba51,
      coinChange: _0x312b5e,
      stats: _0x5669a7.getTaskStats(),
      coinLimitExceeded: _0x5669a7.coinExceeded,
      lowRewardStopped: _0x5669a7.lowRewardCount >= _0x5669a7.maxLowRewardCount,
      accumulatedCoins: _0x5669a7.accumulatedCoins,
      adInfoFailCount: _0x5669a7.adInfoFailCount
    };
  }
  function _0x442d26(_0x4754ce) {
    if (!_0x4754ce.length) {
      return;
    }
    let _0x18e0f4 = 0;
    let _0x45dd55 = 0;
    let _0x556dc3 = 0;
    let _0x52523c = 0;
    let _0x4bece7 = 0;
    _0x4754ce.forEach(_0x5434e4 => {
      _0x18e0f4 += _0x5434e4.coinChange || 0;
      _0x52523c += _0x5434e4.accumulatedCoins || 0;
      _0x4bece7 += _0x5434e4.adInfoFailCount || 0;
      _0x5434e4.stats && Object.values(_0x5434e4.stats).forEach(_0x2a5505 => {
        _0x45dd55 += _0x2a5505.totalReward;
      });
      _0x5434e4.lowRewardStopped && _0x556dc3++;
    });
    console.log("\n" + "-".repeat(35));
    console.log("🎉 全部任务完成!");
    console.log("📊 总金币变化: " + (_0x18e0f4 >= 0 ? "+" : "") + _0x18e0f4);
    console.log("🏆 总金币奖励: " + _0x45dd55);
    console.log("💰 累计获得金币: " + _0x52523c);
    console.log("❌ 总广告信息失败次数: " + _0x4bece7);
    _0x556dc3 > 0 && console.log("⚠️  低奖励停止账号: " + _0x556dc3 + "个");
    _0x5bc690 && console.log("🚨 注意: 任务因卡密过期/次数用完而提前终止");
    _0x35869b && console.log("🚨 注意: 任务因签名服务故障而提前终止 (连续失败 " + _0x34dd93 + " 次)");
    console.log("-".repeat(35));
  }
  if (typeof global !== "undefined") {
    const _0x50590f = {
      version: "8.0",
      compatible: true,
      features: ["广告信息失败限制", "任务上限检测", "预计金币检测与跳过", "新增破黑和破黑2任务"]
    };
    global.V8js = _0x50590f;
  }
  (async () => {
    await _0x4ba8fc();
  })();
})();