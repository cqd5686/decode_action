//Fri May 16 2025 18:22:29 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const IiIl11 = new li1llI("联通云手机任务"),
  I1l1i = IiIl11.isNode() ? require("./sendNotify") : "",
  lIiIIl = 1,
  IliI = 0;
let I1l1l = process.env.ltysj,
  ilI1i = "",
  llIiI1 = "";
ckArr = I1l1l.split("&");
lI11i("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = I1l1l.split("&");
  await iiliIi();
  for (let IIilIi = 0; IIilIi < ckArr.length; IIilIi++) {
    let l1Iiii = IIilIi + 1;
    console.log("------------- 开始【第 " + l1Iiii + " 个账号】-------------");
    llIiI1 = ckArr[IIilIi].split("&");
    lI11i("【debug】 这是你第 " + l1Iiii + " 账号信息:\n " + llIiI1);
    await i111l1();
    await li1li1();
    await li1liI();
    await lIl11l();
    await IiIl11.wait(1000);
    await iiii1l();
    for (let l1Iiil = 0; l1Iiil < cjcs; l1Iiil++) {
      await lI11I();
      await IiIl11.wait(3000);
    }
    await ii11li();
  }
})().catch(I1li1I => IiIl11.logErr(I1li1I)).finally(() => IiIl11.done());
async function li1li1() {
  let iiiI = {
      "url": "https://h5forphone.wostore.cn/h5forphone/activity/signIn",
      "headers": {
        "Accept-Encoding": "gzip, deflate, br",
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Host": "h5forphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "X-Requested-With": "XMLHttpRequest",
        "Connection": "keep-alive"
      },
      "body": "{\"accesstoken\": \"" + llIiI1 + "\"}"
    },
    I1li11 = await i111ii(iiiI, "签到");
  console.log("签到：" + I1li11.msg);
  ilI1i += "签到：" + I1li11.msg + "\n";
}
async function li1liI() {
  let II1iI1 = {
      "url": "https://uphone.wostore.cn/h5api/activity-service/user/login",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://uphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "X-USR-TOKEN": "",
        "Host": "uphone.wostore.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      },
      "body": "{\n  \"identityType\": \"cloudPhoneLogin\",\n  \"code\": \"" + llIiI1 + "\",\n  \"activityId\": \"" + activityCode + "\",\n  \"device\": \"device\"\n}"
    },
    iI1i1 = await i111ii(II1iI1, "token");
  token = iI1i1.data.user_token;
}
async function ii11li() {
  let ill1l = {
      "url": "https://uphone.wo-adv.cn/bucp/servers/resource/instance/list?pageNum=1&pageSize=200",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "Authorization": llIiI1,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      }
    },
    iiIIi1 = await i111il(ill1l, "time");
  console.log("设备总数: " + iiIIi1.total);
  iiIIi1.rows.forEach(iiIIiI => {
    device_id = iiIIiI.id;
    console.log("设备 " + iiIIiI.name + "(" + device_id + ") 信息:");
    console.log("- 类型: " + iiIIiI.cpSkuProduct.remark);
    console.log("- 实例编号: " + iiIIiI.instanceNum);
    console.log("- 状态: " + iiIIiI.status);
    console.log("- 开始时间: " + iiIIiI.startTime);
    console.log("- 结束时间: " + iiIIiI.endTime);
    iiIIiI.status !== "running" ? (console.log("⚠️ 设备状态异常，尝试开机..."), il1lIl()) : console.log("✅ 设备运行正常");
  });
}
async function il1lIl() {
  let ilII1l = {
      "url": "https://uphone.wo-adv.cn/bucp/servers/resource/backup/recover",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "Authorization": llIiI1,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      },
      "body": "{\"cpInstanceId\":" + device_id + "}"
    },
    IIilII = await i111ii(ilII1l, "recover");
  console.log(IIilII.msg);
}
async function iiliIi() {
  let ill11 = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    i1ii1l = await i111il(ill11, "ll");
  hqsjc = i1ii1l.ymsjc;
  gong = i1ii1l.gong;
  activityCode = i1ii1l.activityCode;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  hqsjc > dqsjc ? (console.log("公告：" + i1ii1l.ghn), console.log("当前版本1.2，最新版本" + i1ii1l.fwbbh), console.log("当前脚本有效期至" + il1Iii(hqsjc))) : (console.error(gong), process.exit());
}
async function i111l1() {
  let llIi1I = {
      "url": "https://uphone.wo-adv.cn/bucp/servers/system/user/getAppUserInfo",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "Authorization": llIiI1,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      }
    },
    lIlIii = await i111il(llIi1I, "username");
  console.log("" + lIlIii.data.userName);
}
async function lIl11i(lIlIil, I11lii) {
  let Ili1ll = {
      "url": "https://uphone.wostore.cn/h5api/activity-service/user/task/logs",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://uphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "X-USR-TOKEN": token,
        "Host": "uphone.wostore.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      },
      "body": "{\n  \"logType\": \"01\",\n  \"logCode\": \"" + lIlIil + "\",\n  \"logSource\": \"01\",\n  \"logDetail\": \"" + I11lii + "\"\n}"
    },
    IIl1Il = await i111ii(Ili1ll, "完成任务");
  console.log(IIl1Il.msg);
  IIl1Il.code == 200 && (await IiIl11.wait(5000), console.log("领取" + I11lii), await iiii1l(), await iiii1i(lIlIil));
}
async function lIl11l() {
  let lIIII = {
      "url": "https://uphone.wostore.cn/h5api/activity-service/user/task/list",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://uphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "X-USR-TOKEN": token,
        "Host": "uphone.wostore.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      },
      "body": "{\n  \"activityCode\": \"" + activityCode + "\"\n}"
    },
    li1IlI = await i111ii(lIIII, "查询任务");
  const iiI1i = typeof li1IlI === "string" ? JSON.parse(li1IlI) : li1IlI;
  if (!iiI1i.taskList || !Array.isArray(iiI1i.taskList)) {
    console.log("没有找到任务列表");
    return;
  }
  for (const iiI11 of iiI1i.taskList) {
    taskName = iiI11.taskName;
    logCode = iiI11.taskCode;
    const lIlIli = iiI11.status;
    try {
      if (lIlIli === "OBTAINED") {
        console.log("奖励已领取");
      } else {
        if (lIlIli === "UNCLAIMED") {
          console.log("领取" + taskName);
          await iiii1i(logCode);
        } else lIlIli === "INCOMPLETE" ? (console.log("完成" + taskName), await lIl11i(logCode, taskName)) : console.log("未知状态: " + lIlIli);
      }
    } catch (liIii1) {
      console.error("处理任务 " + taskName + " 时出错:", liIii1);
    }
  }
}
async function iiii1i(Iili11) {
  let lII1 = {
      "url": "https://uphone.wostore.cn/h5api/activity-service/user/task/raffle/get",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://uphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "X-USR-TOKEN": token,
        "Host": "uphone.wostore.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      },
      "body": "{\n  \"activityCode\": \"" + activityCode + ("\",\n  \"taskCode\": \"" + Iili11 + "\"\n}")
    },
    iIlIlI = await i111ii(lII1, "领取奖励");
  console.log(iIlIlI.msg);
}
async function iiii1l() {
  let iI1 = {
      "url": "https://uphone.wostore.cn/h5api/activity-service/user/task/list",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://uphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "X-USR-TOKEN": token,
        "Host": "uphone.wostore.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      },
      "body": "{\n  \"activityCode\": \"" + activityCode + "\"\n}"
    },
    I111Il = await i111ii(iI1, "查询任务");
  cjcs = I111Il.rafflesLeftCount;
}
async function lI11I() {
  let IIlli1 = {
      "url": "https://uphone.wostore.cn/h5api/activity-service/lottery",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://uphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "X-USR-TOKEN": token,
        "Host": "uphone.wostore.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      },
      "body": "{\n  \"activityCode\": \"" + activityCode + "\"\n}"
    },
    ilIiii = await i111ii(IIlli1, "抽奖");
  console.log(ilIiii.prizeName);
  ilI1i += "抽奖获得：" + ilIiii.prizeName + "\n";
}
async function iIilIi(Iili1l, liIiil) {
  return new Promise(iI1l => {
    {
      let iiili = [];
      if (Iili1l) {
        if (Iili1l.indexOf("@") !== -1) Iili1l.split("@").forEach(Il1III => {
          iiili.push(Il1III);
        });else Iili1l.indexOf("\n") !== -1 ? Iili1l.split("\n").forEach(l11iI => {
          iiili.push(l11iI);
        }) : iiili.push(Iili1l);
        iI1l(iiili);
      } else console.log("\n 【" + IiIl11.name + "】：未填写变量 " + liIiil);
    }
  });
}
async function IllI(IIiIil) {
  if (!IIiIil) return;
  if (lIiIIl > 0) {
    {
      if (IiIl11.isNode()) {
        let Il1IIl = require("./sendNotify");
        await Il1IIl.sendNotify(IiIl11.name, IIiIil);
      } else {
        IiIl11.msg(IIiIil);
      }
    }
  } else console.log(IIiIil);
}
function iIilIl(Ii1liI) {
  Ii1liI = Ii1liI || 32;
  let Ii1li1 = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    iiil1 = Ii1li1.length,
    liIil1 = "";
  for (i = 0; i < Ii1liI; i++) liIil1 += Ii1li1.charAt(Math.floor(Math.random() * iiil1));
  return liIil1;
}
let ilI1I = "";
function il1Iil(lliIl) {
  ilI1I = lliIl;
}
function ii11ll(lliIi) {
  if (ilI1I === lliIi) console.log("Reached mark " + lliIi);else {
    console.log("Invalid mark: " + lliIi);
  }
}
function il1Iii(iiIlII) {
  var I1II1i = new Date(iiIlII * 1000);
  var IIiIiI = I1II1i.getFullYear();
  var ll1l = String(I1II1i.getMonth() + 1).padStart(2, "0");
  var lli1ii = String(I1II1i.getDate()).padStart(2, "0");
  var Il1l11 = String(I1II1i.getHours()).padStart(2, "0");
  var lli1il = String(I1II1i.getMinutes()).padStart(2, "0");
  var I1II1l = String(I1II1i.getSeconds()).padStart(2, "0");
  var lii1I = IIiIiI + "-" + ll1l + "-" + lli1ii + " " + Il1l11 + ":" + lli1il + ":" + I1II1l;
  return lii1I;
}
function lili1l(I1ii, I1il) {
  return Math.round(Math.random() * (I1il - I1ii) + I1ii);
}
function iI1iIi() {
  const IlIill = new Date(),
    iiI1I1 = IlIill.getHours(),
    IlIili = new Date(IlIill.getFullYear(), IlIill.getMonth(), IlIill.getDate(), iiI1I1 + 1, 0, 0, 0);
  return IlIili.getTime();
}
function iI1iIl() {
  const lIIli1 = new Date(),
    iIl11i = lIIli1.getMinutes(),
    i11ll1 = new Date(lIIli1.getFullYear(), lIIli1.getMonth(), lIIli1.getDate(), lIIli1.getHours(), iIl11i === 0 ? 1 : iIl11i + 1, 0, 0);
  if (i11ll1.getMinutes() === 0 && i11ll1.getHours() !== lIIli1.getHours()) {
    i11ll1.setDate(lIIli1.getDate() + (i11ll1.getHours() === 0 ? 1 : 0));
  }
  return i11ll1.getTime();
}
function lili1i() {
  return Math.round(new Date().getTime()).toString();
}
function iI1Ii() {
  const iIlII = new Date(),
    iIiII1 = String(iIlII.getFullYear()).padStart(4, "0"),
    I1l1 = String(iIlII.getMonth() + 1).padStart(2, "0"),
    Il11I1 = String(iIlII.getDate()).padStart(2, "0"),
    i11liI = String(iIlII.getHours()).padStart(2, "0"),
    iilI11 = String(iIlII.getMinutes()).padStart(2, "0"),
    lIiiiI = String(iIlII.getSeconds()).slice(0, 2);
  return iIiII1 + I1l1 + Il11I1 + i11liI + iilI11 + lIiiiI;
}
function IiIIIl() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function IiIIIi() {
  let lll1l1 = new Date();
  h = lll1l1.getHours();
  return h;
}
function lI11l() {
  let llili1 = new Date();
  m = llili1.getMinutes();
  return m;
}
function iI1Il(iIllIl = 3000) {
  return new Promise(IiIlI1 => {
    {
      let lli1I = {
        "url": "https://keai.icu/apiwyy/api"
      };
      IiIl11.get(lli1I, async (IlIilI, Il1il, lll1il) => {
        try {
          lll1il = JSON.parse(lll1il);
          console.log("\n 【网抑云时间】: " + lll1il.content + "  by--" + lll1il.music);
        } catch (lll1ii) {
          IiIl11.logErr(lll1ii, Il1il);
        } finally {
          IiIlI1();
        }
      }, iIllIl);
    }
  });
}
async function i111il(IIllli, lIIll1, Il1ii = 3000) {
  return new Promise(ll1ili => {
    let il1liI = IIllli;
    if (!lIIll1) {
      let IiiiII = arguments.callee.toString(),
        llilll = /function\s*(\w*)/i,
        ll1ill = llilll.exec(IiiiII);
      lIIll1 = ll1ill[1];
    }
    IliI && (console.log("\n 【debug】=============== 这是 " + lIIll1 + " 请求 url ==============="), console.log(il1liI));
    IiIl11.get(il1liI, async (l1liI, llilli, il1li1) => {
      try {
        if (IliI) {
          console.log("\n\n 【debug】===============这是 " + lIIll1 + " 返回data==============");
          console.log(il1li1);
          console.log("======");
          console.log(JSON.parse(il1li1));
        }
        let l1liI1 = JSON.parse(il1li1);
        ll1ili(l1liI1);
      } catch (ll1il1) {
        console.log(l1liI, llilli);
      } finally {
        ll1ili();
      }
    }, Il1ii);
  });
}
async function i111ii(i1IIIl, illi11, li111l = 200) {
  return new Promise(il1lii => {
    let lll1ll = i1IIIl;
    if (!illi11) {
      let llilii = arguments.callee.toString(),
        lll1li = /function\s*(\w*)/i,
        l1ii1l = lll1li.exec(llilii);
      illi11 = l1ii1l[1];
    }
    if (IliI) {
      console.log("\n 【debug】=============== 这是 " + illi11 + " 请求 url ===============");
      console.log(lll1ll);
    }
    IiIl11.post(lll1ll, async (I11Ii1, l1liIl, l111li) => {
      try {
        if (IliI) {
          console.log("\n\n 【debug】===============这是 " + illi11 + " 返回data==============");
          console.log(l111li);
          console.log("======");
          console.log(JSON.parse(l111li));
        }
        let Il1ll = JSON.parse(l111li);
        il1lii(Il1ll);
      } catch (Iilii) {} finally {
        il1lii();
      }
    }, li111l);
  });
}
function lI11i(...I1il1) {
  IliI && console.log(...I1il1);
}
function ilI11(l1lll) {
  function li1lII(Ilii1l, IIi1l1) {
    return Ilii1l << IIi1l1 | Ilii1l >>> 32 - IIi1l1;
  }
  function Il11II(ilIi, i1il1I) {
    var lliIli, IlliII, ilIl, ill1ii, lllli1;
    ilIl = 2147483648 & ilIi;
    ill1ii = 2147483648 & i1il1I;
    lliIli = 1073741824 & ilIi;
    IlliII = 1073741824 & i1il1I;
    lllli1 = (1073741823 & ilIi) + (1073741823 & i1il1I);
    return lliIli & IlliII ? 2147483648 ^ lllli1 ^ ilIl ^ ill1ii : lliIli | IlliII ? 1073741824 & lllli1 ? 3221225472 ^ lllli1 ^ ilIl ^ ill1ii : 1073741824 ^ lllli1 ^ ilIl ^ ill1ii : lllli1 ^ ilIl ^ ill1ii;
  }
  function Iilll(Il11ii, iI1l1I, i1llII) {
    return Il11ii & iI1l1I | ~Il11ii & i1llII;
  }
  function I11Ill(ill1il, Il11il, lIiiII) {
    return ill1il & lIiiII | Il11il & ~lIiiII;
  }
  function IlII1l(I11l1l, IIi1lI, I11l1i) {
    return I11l1l ^ IIi1lI ^ I11l1i;
  }
  function IiIIll(lIiiIl, Iiiii1, il1iiI) {
    return Iiiii1 ^ (lIiiIl | ~il1iiI);
  }
  function lIiiii(lliIil, IIi1iI, lliIii, il1ii1, IIII1, iIi1, I11IIl) {
    lliIil = Il11II(lliIil, Il11II(Il11II(Iilll(IIi1iI, lliIii, il1ii1), IIII1), I11IIl));
    return Il11II(li1lII(lliIil, iIi1), IIi1iI);
  }
  function iililI(IiiiiI, IIi1il, IIi1ii, lliIiI, iI1l11, IlliIl, IlliIi) {
    IiiiiI = Il11II(IiiiiI, Il11II(Il11II(I11Ill(IIi1il, IIi1ii, lliIiI), iI1l11), IlliIi));
    return Il11II(li1lII(IiiiiI, IlliIl), IIi1il);
  }
  function IlII1i(Il11ll, Il11li, i1lIi1, l1i1il, lil1l1, I1i1ll, lIlil) {
    Il11ll = Il11II(Il11ll, Il11II(Il11II(IlII1l(Il11li, i1lIi1, l1i1il), lil1l1), lIlil));
    return Il11II(li1lII(Il11ll, I1i1ll), Il11li);
  }
  function Iilli(iIi1li, l11I11, ii1II, IIIIl, iIi1ll, liili1, IIIIi) {
    iIi1li = Il11II(iIi1li, Il11II(Il11II(IiIIll(l11I11, ii1II, IIIIl), iIi1ll), IIIIi));
    return Il11II(li1lII(iIi1li, liili1), l11I11);
  }
  function i1Il1I(iIii) {
    for (var Iiliii, iIil = iIii.length, lIlili = iIil + 8, li1ii1 = (lIlili - lIlili % 64) / 64, lIlill = 16 * (li1ii1 + 1), i1iI11 = new Array(lIlill - 1), I1i1li = 0, Il1lil = 0; iIil > Il1lil;) Iiliii = (Il1lil - Il1lil % 4) / 4, I1i1li = Il1lil % 4 * 8, i1iI11[Iiliii] = i1iI11[Iiliii] | iIii.charCodeAt(Il1lil) << I1i1li, Il1lil++;
    Iiliii = (Il1lil - Il1lil % 4) / 4;
    I1i1li = Il1lil % 4 * 8;
    i1iI11[Iiliii] = i1iI11[Iiliii] | 128 << I1i1li;
    i1iI11[lIlill - 2] = iIil << 3;
    i1iI11[lIlill - 1] = iIil >>> 29;
    return i1iI11;
  }
  function lIiiil(lIlii) {
    var lil1lI,
      i1lII1,
      lIll1 = "",
      l11I1I = "";
    for (i1lII1 = 0; 3 >= i1lII1; i1lII1++) lil1lI = lIlii >>> 8 * i1lII1 & 255, l11I1I = "0" + lil1lI.toString(16), lIll1 += l11I1I.substr(l11I1I.length - 2, 2);
    return lIll1;
  }
  function ll1I1I(Il1llI) {
    Il1llI = Il1llI.replace(/\r\n/g, "\n");
    for (var ii1I1 = "", liiliI = 0; liiliI < Il1llI.length; liiliI++) {
      {
        var iIi1lI = Il1llI.charCodeAt(liiliI);
        128 > iIi1lI ? ii1I1 += String.fromCharCode(iIi1lI) : iIi1lI > 127 && 2048 > iIi1lI ? (ii1I1 += String.fromCharCode(iIi1lI >> 6 | 192), ii1I1 += String.fromCharCode(63 & iIi1lI | 128)) : (ii1I1 += String.fromCharCode(iIi1lI >> 12 | 224), ii1I1 += String.fromCharCode(iIi1lI >> 6 & 63 | 128), ii1I1 += String.fromCharCode(63 & iIi1lI | 128));
      }
    }
    return ii1I1;
  }
  var IiIIli,
    IlII11,
    iiliil,
    il1llI,
    il1ll1,
    Il11Ii,
    Il11Il,
    I1ill,
    i111Il,
    i111Ii = [],
    IlII1I = 7,
    IillI = 12,
    i1Il1i = 17,
    lIiil1 = 22,
    i1Il1l = 5,
    I11IlI = 9,
    IiIIlI = 14,
    IIi1I1 = 20,
    lIiilI = 4,
    i111II = 11,
    I11Il1 = 16,
    IiIIl1 = 23,
    IiiiI1 = 6,
    i111I1 = 10,
    I11Ili = 15,
    IIi1II = 21;
  for (l1lll = ll1I1I(l1lll), i111Ii = i1Il1I(l1lll), Il11Ii = 1732584193, Il11Il = 4023233417, I1ill = 2562383102, i111Il = 271733878, IiIIli = 0; IiIIli < i111Ii.length; IiIIli += 16) IlII11 = Il11Ii, iiliil = Il11Il, il1llI = I1ill, il1ll1 = i111Il, Il11Ii = lIiiii(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 0], IlII1I, 3614090360), i111Il = lIiiii(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 1], IillI, 3905402710), I1ill = lIiiii(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 2], i1Il1i, 606105819), Il11Il = lIiiii(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 3], lIiil1, 3250441966), Il11Ii = lIiiii(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 4], IlII1I, 4118548399), i111Il = lIiiii(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 5], IillI, 1200080426), I1ill = lIiiii(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 6], i1Il1i, 2821735955), Il11Il = lIiiii(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 7], lIiil1, 4249261313), Il11Ii = lIiiii(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 8], IlII1I, 1770035416), i111Il = lIiiii(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 9], IillI, 2336552879), I1ill = lIiiii(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 10], i1Il1i, 4294925233), Il11Il = lIiiii(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 11], lIiil1, 2304563134), Il11Ii = lIiiii(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 12], IlII1I, 1804603682), i111Il = lIiiii(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 13], IillI, 4254626195), I1ill = lIiiii(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 14], i1Il1i, 2792965006), Il11Il = lIiiii(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 15], lIiil1, 1236535329), Il11Ii = iililI(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 1], i1Il1l, 4129170786), i111Il = iililI(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 6], I11IlI, 3225465664), I1ill = iililI(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 11], IiIIlI, 643717713), Il11Il = iililI(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 0], IIi1I1, 3921069994), Il11Ii = iililI(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 5], i1Il1l, 3593408605), i111Il = iililI(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 10], I11IlI, 38016083), I1ill = iililI(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 15], IiIIlI, 3634488961), Il11Il = iililI(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 4], IIi1I1, 3889429448), Il11Ii = iililI(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 9], i1Il1l, 568446438), i111Il = iililI(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 14], I11IlI, 3275163606), I1ill = iililI(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 3], IiIIlI, 4107603335), Il11Il = iililI(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 8], IIi1I1, 1163531501), Il11Ii = iililI(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 13], i1Il1l, 2850285829), i111Il = iililI(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 2], I11IlI, 4243563512), I1ill = iililI(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 7], IiIIlI, 1735328473), Il11Il = iililI(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 12], IIi1I1, 2368359562), Il11Ii = IlII1i(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 5], lIiilI, 4294588738), i111Il = IlII1i(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 8], i111II, 2272392833), I1ill = IlII1i(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 11], I11Il1, 1839030562), Il11Il = IlII1i(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 14], IiIIl1, 4259657740), Il11Ii = IlII1i(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 1], lIiilI, 2763975236), i111Il = IlII1i(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 4], i111II, 1272893353), I1ill = IlII1i(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 7], I11Il1, 4139469664), Il11Il = IlII1i(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 10], IiIIl1, 3200236656), Il11Ii = IlII1i(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 13], lIiilI, 681279174), i111Il = IlII1i(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 0], i111II, 3936430074), I1ill = IlII1i(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 3], I11Il1, 3572445317), Il11Il = IlII1i(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 6], IiIIl1, 76029189), Il11Ii = IlII1i(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 9], lIiilI, 3654602809), i111Il = IlII1i(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 12], i111II, 3873151461), I1ill = IlII1i(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 15], I11Il1, 530742520), Il11Il = IlII1i(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 2], IiIIl1, 3299628645), Il11Ii = Iilli(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 0], IiiiI1, 4096336452), i111Il = Iilli(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 7], i111I1, 1126891415), I1ill = Iilli(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 14], I11Ili, 2878612391), Il11Il = Iilli(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 5], IIi1II, 4237533241), Il11Ii = Iilli(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 12], IiiiI1, 1700485571), i111Il = Iilli(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 3], i111I1, 2399980690), I1ill = Iilli(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 10], I11Ili, 4293915773), Il11Il = Iilli(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 1], IIi1II, 2240044497), Il11Ii = Iilli(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 8], IiiiI1, 1873313359), i111Il = Iilli(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 15], i111I1, 4264355552), I1ill = Iilli(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 6], I11Ili, 2734768916), Il11Il = Iilli(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 13], IIi1II, 1309151649), Il11Ii = Iilli(Il11Ii, Il11Il, I1ill, i111Il, i111Ii[IiIIli + 4], IiiiI1, 4149444226), i111Il = Iilli(i111Il, Il11Ii, Il11Il, I1ill, i111Ii[IiIIli + 11], i111I1, 3174756917), I1ill = Iilli(I1ill, i111Il, Il11Ii, Il11Il, i111Ii[IiIIli + 2], I11Ili, 718787259), Il11Il = Iilli(Il11Il, I1ill, i111Il, Il11Ii, i111Ii[IiIIli + 9], IIi1II, 3951481745), Il11Ii = Il11II(Il11Ii, IlII11), Il11Il = Il11II(Il11Il, iiliil), I1ill = Il11II(I1ill, il1llI), i111Il = Il11II(i111Il, il1ll1);
  var li1lIl = lIiiil(Il11Ii) + lIiiil(Il11Il) + lIiiil(I1ill) + lIiiil(i111Il);
  return li1lIl.toLowerCase();
}
function li1llI(iIiI, i1iI1I) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class llllIl {
    constructor(IiI1I1) {
      this.env = IiI1I1;
    }
    ["send"](i1I1l1, iIIi11 = "GET") {
      i1I1l1 = "string" == typeof i1I1l1 ? {
        "url": i1I1l1
      } : i1I1l1;
      let IliI1 = this.get;
      "POST" === iIIi11 && (IliI1 = this.post);
      return new Promise((ii1Ii1, i1I1lI) => {
        IliI1.call(this, i1I1l1, (l1l1ll, l1ilii, l1l1li) => {
          l1l1ll ? i1I1lI(l1l1ll) : ii1Ii1(l1ilii);
        });
      });
    }
    ["get"](IliIi) {
      return this.send.call(this.env, IliIi);
    }
    ["post"](i1I1ll) {
      return this.send.call(this.env, i1I1ll, "POST");
    }
  }
  return new class {
    constructor(I11ll, lllIll) {
      this.name = I11ll;
      this.http = new llllIl(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, lllIll);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](illii, ii1Iii = null) {
      try {
        return JSON.parse(illii);
      } catch {
        return ii1Iii;
      }
    }
    ["toStr"](lllIli, illil = null) {
      try {
        return JSON.stringify(lllIli);
      } catch {
        return illil;
      }
    }
    ["getjson"](l1illl, l11ill) {
      {
        let llIII = l11ill;
        const l11ili = this.getdata(l1illl);
        if (l11ili) try {
          llIII = JSON.parse(this.getdata(l1illl));
        } catch {}
        return llIII;
      }
    }
    ["setjson"](ii1Il1, lIlI11) {
      try {
        return this.setdata(JSON.stringify(ii1Il1), lIlI11);
      } catch {
        return false;
      }
    }
    ["getScript"](l1illI) {
      return new Promise(lIlI1I => {
        this.get({
          "url": l1illI
        }, (iIi1i1, llII1, II1l1l) => lIlI1I(II1l1l));
      });
    }
    ["runScript"](II1l1i, iiIlI) {
      return new Promise(ii1IlI => {
        let i1I1 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i1I1 = i1I1 ? i1I1.replace(/\n/g, "").trim() : i1I1;
        let I1Ii1l = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        I1Ii1l = I1Ii1l ? 1 * I1Ii1l : 20;
        I1Ii1l = iiIlI && iiIlI.timeout ? iiIlI.timeout : I1Ii1l;
        const [l1i, l1l] = i1I1.split("@"),
          I1Ii1i = {
            "url": "http://" + l1l + "/v1/scripting/evaluate",
            "body": {
              "script_text": II1l1i,
              "mock_type": "cron",
              "timeout": I1Ii1l
            },
            "headers": {
              "Accept": "*/*"
            }
          };
        this.post(I1Ii1i, (iIIi1i, iIIi1l, lIlI1i) => ii1IlI(lIlI1i));
      }).catch(IIIiI1 => this.logErr(IIIiI1));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const llIIl = this.path.resolve(this.dataFile),
            llIIi = this.path.resolve(process.cwd(), this.dataFile),
            IiI1Il = this.fs.existsSync(llIIl),
            iiIii = !IiI1Il && this.fs.existsSync(llIIi);
          if (!IiI1Il && !iiIii) return {};
          {
            {
              const IiI1Ii = IiI1Il ? llIIl : llIIi;
              try {
                return JSON.parse(this.fs.readFileSync(IiI1Ii));
              } catch (IilI11) {
                return {};
              }
            }
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const i1Ii = this.path.resolve(this.dataFile),
            i1Il = this.path.resolve(process.cwd(), this.dataFile),
            llilI = this.fs.existsSync(i1Ii),
            I11I1I = !llilI && this.fs.existsSync(i1Il),
            il1IIl = JSON.stringify(this.data);
          llilI ? this.fs.writeFileSync(i1Ii, il1IIl) : I11I1I ? this.fs.writeFileSync(i1Il, il1IIl) : this.fs.writeFileSync(i1Ii, il1IIl);
        }
      }
    }
    ["lodash_get"](l1111i, il1IIi, i1II) {
      const iI1I1I = il1IIi.replace(/\[(\d+)\]/g, ".$1").split(".");
      let I111I = l1111i;
      for (const I11I11 of iI1I1I) if (I111I = Object(I111I)[I11I11], undefined === I111I) return i1II;
      return I111I;
    }
    ["lodash_set"](il1l1I, i1Ili1, l1111l) {
      return Object(il1l1I) !== il1l1I ? il1l1I : (Array.isArray(i1Ili1) || (i1Ili1 = i1Ili1.toString().match(/[^.[\]]+/g) || []), i1Ili1.slice(0, -1).reduce((I111i, iili11, llI1li) => Object(I111i[iili11]) === I111i[iili11] ? I111i[iili11] : I111i[iili11] = Math.abs(i1Ili1[llI1li + 1]) >> 0 == +i1Ili1[llI1li + 1] ? [] : {}, il1l1I)[i1Ili1[i1Ili1.length - 1]] = l1111l, il1l1I);
    }
    ["getdata"](Illii1) {
      {
        let i1IliI = this.getval(Illii1);
        if (/^@/.test(Illii1)) {
          const [, lI1I1, I1lI1] = /^@(.*?)\.(.*?)$/.exec(Illii1),
            l11lI1 = lI1I1 ? this.getval(lI1I1) : "";
          if (l11lI1) try {
            const lI1II = JSON.parse(l11lI1);
            i1IliI = lI1II ? this.lodash_get(lI1II, I1lI1, "") : i1IliI;
          } catch (i1Ilii) {
            i1IliI = "";
          }
        }
        return i1IliI;
      }
    }
    ["setdata"](llI11, IlIIl1) {
      {
        let IliiIi = false;
        if (/^@/.test(IlIIl1)) {
          const [, I1lII, iili1l] = /^@(.*?)\.(.*?)$/.exec(IlIIl1),
            il1l1i = this.getval(I1lII),
            IlIIil = I1lII ? "null" === il1l1i ? null : il1l1i || "{}" : "{}";
          try {
            const lI1Il = JSON.parse(IlIIil);
            this.lodash_set(lI1Il, iili1l, llI11);
            IliiIi = this.setval(JSON.stringify(lI1Il), I1lII);
          } catch (IlIIii) {
            {
              const lI1Ii = {};
              this.lodash_set(lI1Ii, iili1l, llI11);
              IliiIi = this.setval(JSON.stringify(lI1Ii), I1lII);
            }
          }
        } else IliiIi = this.setval(llI11, IlIIl1);
        return IliiIi;
      }
    }
    ["getval"](I1lIl) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(I1lIl) : this.isQuanX() ? $prefs.valueForKey(I1lIl) : this.isNode() ? (this.data = this.loaddata(), this.data[I1lIl]) : this.data && this.data[I1lIl] || null;
    }
    ["setval"](llI1i, IlIIli) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(llI1i, IlIIli) : this.isQuanX() ? $prefs.setValueForKey(llI1i, IlIIli) : this.isNode() ? (this.data = this.loaddata(), this.data[IlIIli] = llI1i, this.writedata(), true) : this.data && this.data[IlIIli] || null;
    }
    ["initGotEnv"](IlIIll) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      IlIIll && (IlIIll.headers = IlIIll.headers ? IlIIll.headers : {}, undefined === IlIIll.headers.Cookie && undefined === IlIIll.cookieJar && (IlIIll.cookieJar = this.ckjar));
    }
    ["get"](i1IllI, ii1lil = () => {}) {
      i1IllI.headers && (delete i1IllI.headers["Content-Type"], delete i1IllI.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (i1IllI.headers = i1IllI.headers || {}, Object.assign(i1IllI.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(i1IllI, (iI1ii1, IiiIIi, iI1iiI) => {
        !iI1ii1 && IiiIIi && (IiiIIi.body = iI1iiI, IiiIIi.statusCode = IiiIIi.status);
        ii1lil(iI1ii1, IiiIIi, iI1iiI);
      })) : this.isQuanX() ? (this.isNeedRewrite && (i1IllI.opts = i1IllI.opts || {}, Object.assign(i1IllI.opts, {
        "hints": false
      })), $task.fetch(i1IllI).then(l1ii => {
        const {
          statusCode: I11ii1,
          statusCode: Iil11i,
          headers: i1iiiI,
          body: l1il
        } = l1ii;
        ii1lil(null, {
          "status": I11ii1,
          "statusCode": Iil11i,
          "headers": i1iiiI,
          "body": l1il
        }, l1il);
      }, I1l1lI => ii1lil(I1l1lI))) : this.isNode() && (this.initGotEnv(i1IllI), this.got(i1IllI).on("redirect", (I1IiI, I1iliI) => {
        try {
          if (I1IiI.headers["set-cookie"]) {
            const I1ili1 = I1IiI.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            I1ili1 && this.ckjar.setCookieSync(I1ili1, null);
            I1iliI.cookieJar = this.ckjar;
          }
        } catch (iIl1l1) {
          this.logErr(iIl1l1);
        }
      }).then(iI1iil => {
        const {
          statusCode: lIIIIl,
          statusCode: l1iI,
          headers: II111i,
          body: Illill
        } = iI1iil;
        ii1lil(null, {
          "status": lIIIIl,
          "statusCode": l1iI,
          "headers": II111i,
          "body": Illill
        }, Illill);
      }, II111l => {
        const {
          message: I1Iil,
          response: i1iiii
        } = II111l;
        ii1lil(I1Iil, i1iiii, i1iiii && i1iiii.body);
      }));
    }
    ["post"](i1iiil, I11iiI = () => {}) {
      if (i1iiil.body && i1iiil.headers && !i1iiil.headers["Content-Type"] && (i1iiil.headers["Content-Type"] = "application/json;charset=utf-8"), i1iiil.headers && delete i1iiil.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (i1iiil.headers = i1iiil.headers || {}, Object.assign(i1iiil.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(i1iiil, (iIl1ii, I1l1il, lii1II) => {
        !iIl1ii && I1l1il && (I1l1il.body = lii1II, I1l1il.statusCode = I1l1il.status);
        I11iiI(iIl1ii, I1l1il, lii1II);
      });else {
        if (this.isQuanX()) i1iiil.method = "POST", this.isNeedRewrite && (i1iiil.opts = i1iiil.opts || {}, Object.assign(i1iiil.opts, {
          "hints": false
        })), $task.fetch(i1iiil).then(ili1li => {
          const {
            statusCode: Iiil11,
            statusCode: iIl1il,
            headers: IlI1II,
            body: lIIIIi
          } = ili1li;
          I11iiI(null, {
            "status": Iiil11,
            "statusCode": iIl1il,
            "headers": IlI1II,
            "body": lIIIIi
          }, lIIIIi);
        }, II1lIl => I11iiI(II1lIl));else {
          if (this.isNode()) {
            this.initGotEnv(i1iiil);
            const {
              url: Iiil1I,
              ...iliI
            } = i1iiil;
            this.got.post(Iiil1I, iliI).then(l1lI => {
              const {
                statusCode: II1lIi,
                statusCode: I1Il1,
                headers: I1l1ii,
                body: i1iil1
              } = l1lI;
              I11iiI(null, {
                "status": II1lIi,
                "statusCode": I1Il1,
                "headers": I1l1ii,
                "body": i1iil1
              }, i1iil1);
            }, I1Ili => {
              const {
                message: iIl1iI,
                response: lii1Ii
              } = I1Ili;
              I11iiI(iIl1iI, lii1Ii, lii1Ii && lii1Ii.body);
            });
          }
        }
      }
    }
    ["time"](lii1Il, ii11II = null) {
      const IillII = ii11II ? new Date(ii11II) : new Date();
      let II1lI1 = {
        "M+": IillII.getMonth() + 1,
        "d+": IillII.getDate(),
        "H+": IillII.getHours(),
        "m+": IillII.getMinutes(),
        "s+": IillII.getSeconds(),
        "q+": Math.floor((IillII.getMonth() + 3) / 3),
        "S": IillII.getMilliseconds()
      };
      /(y+)/.test(lii1Il) && (lii1Il = lii1Il.replace(RegExp.$1, (IillII.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let iiII1I in II1lI1) new RegExp("(" + iiII1I + ")").test(lii1Il) && (lii1Il = lii1Il.replace(RegExp.$1, 1 == RegExp.$1.length ? II1lI1[iiII1I] : ("00" + II1lI1[iiII1I]).substr(("" + II1lI1[iiII1I]).length)));
      return lii1Il;
    }
    ["msg"](lIIIII = iIiI, Iiil1i = "", Iiil1l = "", II1lII) {
      {
        const i1iilI = iiII11 => {
          if (!iiII11) return iiII11;
          if ("string" == typeof iiII11) return this.isLoon() ? iiII11 : this.isQuanX() ? {
            "open-url": iiII11
          } : this.isSurge() ? {
            "url": iiII11
          } : undefined;
          if ("object" == typeof iiII11) {
            {
              if (this.isLoon()) {
                let I1l1iI = iiII11.openUrl || iiII11.url || iiII11["open-url"],
                  iIilll = iiII11.mediaUrl || iiII11["media-url"];
                return {
                  "openUrl": I1l1iI,
                  "mediaUrl": iIilll
                };
              }
              if (this.isQuanX()) {
                let I11ili = iiII11["open-url"] || iiII11.url || iiII11.openUrl,
                  Ii1i1i = iiII11["media-url"] || iiII11.mediaUrl;
                return {
                  "open-url": I11ili,
                  "media-url": Ii1i1i
                };
              }
              if (this.isSurge()) {
                let iIilli = iiII11.url || iiII11.openUrl || iiII11["open-url"];
                return {
                  "url": iIilli
                };
              }
            }
          }
        };
        if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(lIIIII, Iiil1i, Iiil1l, i1iilI(II1lII)) : this.isQuanX() && $notify(lIIIII, Iiil1i, Iiil1l, i1iilI(II1lII))), !this.isMuteLog) {
          let lI11i1 = ["", "==============📣系统通知📣=============="];
          lI11i1.push(lIIIII);
          Iiil1i && lI11i1.push(Iiil1i);
          Iiil1l && lI11i1.push(Iiil1l);
          console.log(lI11i1.join("\n"));
          this.logs = this.logs.concat(lI11i1);
        }
      }
    }
    ["log"](...iiII1i) {
      iiII1i.length > 0 && (this.logs = [...this.logs, ...iiII1i]);
      console.log(iiII1i.join(this.logSeparator));
    }
    ["logErr"](lll11l, iI1ill) {
      const Illiil = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      Illiil ? this.log("", "❗️" + this.name + ", 错误!", lll11l.stack) : this.log("", "❗️" + this.name + ", 错误!", lll11l);
    }
    ["wait"](i1iili) {
      return new Promise(iIillI => setTimeout(iIillI, i1iili));
    }
    ["done"](iI1lI = {}) {
      const ll1i11 = new Date().getTime(),
        lliIIl = (ll1i11 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + lliIIl + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(iI1lI);
    }
  }(iIiI, i1iI1I);
}