//Mon Oct 21 2024 15:49:43 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("动态Key原作者@unorz", {
  "logLevel": "debug"
});
(async () => {
  try {
    const I1IiiIl = await loadUtils();
    if (!I1IiiIl || typeof I1IiiIl.createCryptoJS !== "function") throw new ReferenceError("Utils 或 createCryptoJS 方法未正确加载");
    const I1li1li = I1IiiIl.createCryptoJS(),
      iiIIlIi = {
        "Accept-Language": "zh-CN,zh;q=0.8",
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 7.1.2; zh-cn; V1936A Build/N2G47O) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        "Content-Type": "application/x-www-form-urlencoded"
      };
    function Iil1i1ii() {
      return Date.now();
    }
    function iiIiii1() {
      const liIIi1l1 = Math.floor(Date.now() / 1000 / 1800);
      return I1li1li.MD5("req_id_" + liIIi1l1).toString();
    }
    function liiIliIi() {
      const i1I1II11 = Date.now();
      return I1li1li.MD5("serial_num_" + i1I1II11).toString();
    }
    function illI11(l1lli, liIllli, llIIlI1l) {
      {
        const Illilll = l1lli.toString(),
          liiIilli = (l1lli & 1) !== 0 ? [5, 11, 11, 8, 27, 12, 9, 21] : [16, 8, 10, 12, 26, 11, 2, 18];
        let lilll1i = liIllli[liiIilli[0]] + liIllli[liiIilli[1]] + Illilll[liiIilli[2]] + liIllli[liiIilli[3]] + liIllli[liiIilli[4]] + Illilll[liiIilli[5]] + liIllli[liiIilli[6]] + liIllli[liiIilli[7]];
        lilll1i += llIIlI1l.length ? llIIlI1l[parseInt(Illilll[11])] : liIllli[parseInt(Illilll[11])];
        return lilll1i;
      }
    }
    function Ili11ili(l1Iil1ll, Illl1iI1, I1ii1Iil) {
      const illII1lI = l1Iil1ll.toString(),
        IIlIill = (l1Iil1ll & 1) !== 0 ? [5, 11, 11, 8, 27, 12, 9, 21] : [16, 8, 10, 12, 26, 11, 2, 18];
      let lIliIii = Illl1iI1[IIlIill[0]] + Illl1iI1[IIlIill[1]] + illII1lI[IIlIill[2]] + Illl1iI1[IIlIill[3]] + Illl1iI1[IIlIill[4]] + illII1lI[IIlIill[5]] + Illl1iI1[IIlIill[6]] + Illl1iI1[IIlIill[7]];
      lIliIii += I1ii1Iil[IIlIill[0]] + I1ii1Iil[IIlIill[1]] + illII1lI[IIlIill[2]] + I1ii1Iil[IIlIill[3]] + I1ii1Iil[IIlIill[4]] + illII1lI[IIlIill[5]] + I1ii1Iil[IIlIill[6]] + I1ii1Iil[IIlIill[7]];
      return lIliIii;
    }
    function II11lI1I(iII111li) {
      {
        iII111li.clientModel = "V1936A";
        iII111li.clientType = "Android";
        iII111li.promoteChannel = "S100";
        iII111li.rankVersion = "10";
        iII111li.version = "v2.0.4";
        const IlIIIl1i = Object.keys(iII111li).sort();
        let illliiii = "";
        for (let lII1iii of IlIIIl1i) {
          illliiii += lII1iii + "=" + iII111li[lII1iii] + "&";
        }
        illliiii = illliiii.slice(0, -1);
        const IllI1l = illI11(iII111li.requestTimestamp, iII111li.requestId, iII111li.token || ""),
          lI1l1iii = I1li1li.MD5(illliiii + IllI1l).toString();
        iII111li.sign = lI1l1iii;
        return iII111li;
      }
    }
    function i1iiliIl(i1illlll, lI11IIII) {
      {
        const I11i11Il = I1li1li.enc.Base64.parse(lI11IIII),
          I11liil = I1li1li.enc.Utf8.parse("A-16-Byte-String"),
          IiIl1iiI = I1li1li.AES.decrypt({
            "ciphertext": I11i11Il
          }, I1li1li.enc.Utf8.parse(i1illlll), {
            "iv": I11liil,
            "mode": I1li1li.mode.CBC,
            "padding": I1li1li.pad.Pkcs7
          });
        return IiIl1iiI.toString(I1li1li.enc.Utf8);
      }
    }
    function Iliili1i(lI1ill1i) {
      const Iii1llli = [];
      for (let lllIilil in lI1ill1i) lI1ill1i.hasOwnProperty(lllIilil) && Iii1llli.push(encodeURIComponent(lllIilil) + "=" + encodeURIComponent(lI1ill1i[lllIilil]));
      return Iii1llli.join("&");
    }
    async function liI1llii(iI1l1iI) {
      try {
        const I1Iilii = II11lI1I({
            "requestId": iiIiii1(),
            "requestTimestamp": Iil1i1ii(),
            "serialNumber": iI1l1iI
          }),
          i1iliIii = Iliili1i(I1Iilii),
          liilIl1l = await new Promise((I11l, lli1iIii) => {
            $.post({
              "url": "https://api.go01.top/proxy/user/auto/login",
              "headers": iiIIlIi,
              "body": i1iliIii
            }, (lIi1lIil, iiI1I1I, iiiIII1) => {
              lIi1lIil ? lli1iIii(lIi1lIil) : I11l({
                "resp": iiI1I1I,
                "body": iiiIII1
              });
            });
          }),
          iI1li1iI = JSON.parse(liilIl1l.body);
        return iI1li1iI.data.token;
      } catch (IiIiliII) {
        $.logErr("登录失败：" + IiIiliII);
      }
    }
    async function IIIilII(Il1i11ll, liIili1l) {
      try {
        {
          const ill1II1 = II11lI1I({
              "requestId": iiIiii1(),
              "requestTimestamp": Iil1i1ii(),
              "serialNumber": Il1i11ll,
              "token": liIili1l,
              "vipType": "vip"
            }),
            I1iliIlI = Iliili1i(ill1II1),
            lllII1 = await new Promise((lI1Il1I1, i111i111) => {
              $.post({
                "url": "https://api.go01.top/proxy/user/fetch/node/list",
                "headers": iiIIlIi,
                "body": I1iliIlI
              }, (lii1Iill, liIiIIll, ll11i1ll) => {
                lii1Iill ? i111i111(lii1Iill) : lI1Il1I1({
                  "resp": liIiIIll,
                  "body": ll11i1ll
                });
              });
            }),
            il1111l1 = JSON.parse(lllII1.body);
          return il1111l1.data;
        }
      } catch (i1IIIiIi) {
        $.logErr("获取节点列表失败：" + i1IIIiIi);
      }
    }
    async function IlllI11(lIiI1II, liiliIl1, i1i11lIi) {
      try {
        const lIlil1I = Iil1i1ii(),
          IilIll11 = iiIiii1(),
          Ii1liiI = II11lI1I({
            "requestId": IilIll11,
            "requestTimestamp": lIlil1I,
            "serialNumber": lIiI1II,
            "token": liiliIl1,
            "nodeId": i1i11lIi
          }),
          II1lI11i = Iliili1i(Ii1liiI),
          iIIiIli = await new Promise((lIiII111, iliIIiIi) => {
            $.post({
              "url": "https://api.go01.top/proxy/user/fetch/node/detail",
              "headers": iiIIlIi,
              "body": II1lI11i
            }, (Ii1lI1I1, I11i1ii1, llIiIi1) => {
              Ii1lI1I1 ? iliIIiIi(Ii1lI1I1) : lIiII111({
                "resp": I11i1ii1,
                "body": llIiIi1
              });
            });
          }),
          iiiil1II = JSON.parse(iIIiIli.body).data,
          lIiiI1Il = Ili11ili(lIlil1I, IilIll11, liiliIl1),
          IIiIIIii = i1iiliIl(lIiiI1Il, iiiil1II.content),
          lilI = IIiIIIii.split(","),
          il11Ii11 = "trojan://" + lilI[3] + "@" + lilI[1] + ":" + lilI[2] + "?security=tls&type=tcp&headerType=none&allowInsecure=1#" + encodeURIComponent(iiiil1II.name);
        $.log(il11Ii11);
      } catch (Iii1Ilil) {
        $.logErr("获取节点信息失败：" + Iii1Ilil);
      }
    }
    const i1iiI1I1 = liiIliIi(),
      lI1ii1i = await liI1llii(i1iiI1I1);
    if (lI1ii1i) {
      const Il1IlIl1 = await IIIilII(i1iiI1I1, lI1ii1i);
      for (const ii11iil1 of Il1IlIl1) {
        await IlllI11(i1iiI1I1, lI1ii1i, ii11iil1.id);
      }
    }
  } catch (iI11ii1I) {
    $.logErr(iI11ii1I);
  } finally {
    $.done();
  }
})();
async function loadUtils() {
  let illiiiI1 = $.getdata("Utils_Code") || "";
  if (illiiiI1 && illiiiI1.length) {
    $.log("✅ " + $.name + ": 原作者代码基础上更改by-iu");
    eval(illiiiI1);
    return creatUtils();
  }
  $.log("🚀 " + $.name + ": 开始下载Utils代码");
  return new Promise(Il1lI111 => {
    $.getScript("https://cdn.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Utils.js").then(li1IlIIl => {
      $.setdata(li1IlIIl, "Utils_Code");
      eval(li1IlIIl);
      $.log("✅ Utils加载成功, 请继续");
      Il1lI111(creatUtils());
    });
  });
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, a) => {
        s.call(this, t, (t, s, r) => {
          t ? a(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const a = this.getdata(t);
      if (a) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, a) => e(a));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        a = a ? a.replace(/\n/g, "").trim() : a;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [i, o] = a.split("@"),
          n = {
            url: `http://${o}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": i,
              Accept: "*/*"
            },
            timeout: r
          };
        this.post(n, (t, e, a) => s(a));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          a = !s && this.fs.existsSync(e);
        if (!s && !a) return {};
        {
          const a = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(a));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          a = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : a ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const a = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of a) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, a) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, a] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, a, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, a, r] = /^@(.*?)\.(.*?)$/.exec(e),
          i = this.getval(a),
          o = a ? "null" === i ? null : i || "{}" : "{}";
        try {
          const e = JSON.parse(o);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), a);
        } catch (e) {
          const i = {};
          this.lodash_set(i, r, t);
          s = this.setval(JSON.stringify(i), a);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: a,
                statusCode: r,
                headers: i,
                rawBody: o
              } = t,
              n = s.decode(o, this.encoding);
            e(null, {
              status: a,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: a,
              response: r
            } = t;
            e(a, r, r && s.decode(r.rawBody, this.encoding));
          });
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let a = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: r,
            ...i
          } = t;
          this.got[s](r, i).then(t => {
            const {
                statusCode: s,
                statusCode: r,
                headers: i,
                rawBody: o
              } = t,
              n = a.decode(o, this.encoding);
            e(null, {
              status: s,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: r
            } = t;
            e(s, r, r && a.decode(r.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let a = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in a) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[e] : ("00" + a[e]).substr(("" + a[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let a = t[s];
        null != a && "" !== a && ("object" == typeof a && (a = JSON.stringify(a)), e += `${s}=${a}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", a = "", r) {
      const i = t => {
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let e = t.url || t.openUrl || t["open-url"];
                  return {
                    url: e
                  };
                }
              case "Loon":
                {
                  let e = t.openUrl || t.url || t["open-url"],
                    s = t.mediaUrl || t["media-url"];
                  return {
                    openUrl: e,
                    mediaUrl: s
                  };
                }
              case "Quantumult X":
                {
                  let e = t["open-url"] || t.url || t.openUrl,
                    s = t["media-url"] || t.mediaUrl,
                    a = t["update-pasteboard"] || t.updatePasteboard;
                  return {
                    "open-url": e,
                    "media-url": s,
                    "update-pasteboard": a
                  };
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(e, s, a, i(r));
          break;
        case "Quantumult X":
          $notify(e, s, a, i(r));
          break;
        case "Node.js":
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        a && t.push(a);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t.stack);
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}