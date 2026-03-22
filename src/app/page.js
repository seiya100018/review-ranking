'use client';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // 都道府県データ
    const CITY_MAP = {
      "北海道":["札幌市中央区","札幌市北区","札幌市東区","札幌市白石区","札幌市豊平区","札幌市南区","札幌市西区","札幌市厚別区","札幌市手稲区","札幌市清田区","函館市","旭川市","釧路市","帯広市","小樽市","苫小牧市","北見市","室蘭市","江別市","千歳市","恵庭市","北広島市","石狩市","網走市","岩見沢市","富良野市","留萌市","稚内市","根室市","名寄市","北斗市"],
      "青森県":["青森市","弘前市","八戸市","黒石市","五所川原市","十和田市","三沢市","むつ市","つがる市","平川市"],
      "岩手県":["盛岡市","宮古市","大船渡市","花巻市","北上市","久慈市","遠野市","一関市","陸前高田市","釜石市","二戸市","八幡平市","奥州市","滝沢市"],
      "宮城県":["仙台市青葉区","仙台市宮城野区","仙台市若林区","仙台市太白区","仙台市泉区","石巻市","塩竈市","気仙沼市","白石市","名取市","多賀城市","岩沼市","大崎市","富谷市"],
      "秋田県":["秋田市","能代市","横手市","大館市","男鹿市","湯沢市","由利本荘市","大仙市","北秋田市","仙北市"],
      "山形県":["山形市","米沢市","鶴岡市","酒田市","新庄市","寒河江市","天童市","東根市","南陽市"],
      "福島県":["福島市","会津若松市","郡山市","いわき市","白河市","須賀川市","相馬市","二本松市","南相馬市","本宮市"],
      "茨城県":["水戸市","日立市","土浦市","つくば市","ひたちなか市","鹿嶋市","古河市","取手市","牛久市","守谷市"],
      "栃木県":["宇都宮市","足利市","栃木市","佐野市","鹿沼市","日光市","小山市","真岡市","那須塩原市","下野市"],
      "群馬県":["前橋市","高崎市","桐生市","伊勢崎市","太田市","沼田市","館林市","渋川市","藤岡市","富岡市"],
      "埼玉県":["さいたま市大宮区","さいたま市浦和区","さいたま市中央区","さいたま市緑区","川越市","熊谷市","川口市","所沢市","春日部市","草加市","越谷市","戸田市","朝霞市","新座市","富士見市","三郷市","ふじみ野市"],
      "千葉県":["千葉市中央区","千葉市稲毛区","千葉市美浜区","銚子市","市川市","船橋市","木更津市","松戸市","成田市","柏市","市原市","流山市","八千代市","浦安市"],
      "東京都":["千代田区","中央区","港区","新宿区","文京区","台東区","墨田区","江東区","品川区","目黒区","大田区","世田谷区","渋谷区","中野区","杉並区","豊島区","北区","荒川区","板橋区","練馬区","足立区","葛飾区","江戸川区","八王子市","立川市","武蔵野市","三鷹市","府中市","調布市","町田市","日野市"],
      "神奈川県":["横浜市西区","横浜市中区","横浜市港北区","横浜市青葉区","横浜市都筑区","川崎市川崎区","川崎市中原区","川崎市高津区","相模原市中央区","横須賀市","平塚市","鎌倉市","藤沢市","小田原市","茅ヶ崎市","厚木市","大和市","海老名市"],
      "新潟県":["新潟市中央区","新潟市東区","新潟市西区","長岡市","三条市","柏崎市","上越市","佐渡市"],
      "富山県":["富山市","高岡市","魚津市","氷見市","黒部市","射水市"],
      "石川県":["金沢市","七尾市","小松市","輪島市","加賀市","白山市","野々市市"],
      "福井県":["福井市","敦賀市","小浜市","大野市","鯖江市","越前市","坂井市"],
      "山梨県":["甲府市","富士吉田市","山梨市","南アルプス市","甲斐市","笛吹市","甲州市"],
      "長野県":["長野市","松本市","上田市","飯田市","諏訪市","小諸市","伊那市","茅野市","塩尻市","佐久市","安曇野市"],
      "岐阜県":["岐阜市","大垣市","高山市","多治見市","関市","各務原市","可児市","郡上市","下呂市"],
      "静岡県":["静岡市葵区","静岡市駿河区","浜松市中央区","沼津市","熱海市","三島市","富士宮市","伊東市","富士市","磐田市","焼津市","掛川市","藤枝市","御殿場市"],
      "愛知県":["名古屋市中区","名古屋市中村区","名古屋市東区","名古屋市西区","名古屋市昭和区","名古屋市緑区","名古屋市名東区","名古屋市天白区","豊橋市","岡崎市","一宮市","春日井市","豊田市","安城市","西尾市","犬山市","小牧市","刈谷市","長久手市"],
      "三重県":["津市","四日市市","伊勢市","松阪市","桑名市","鈴鹿市","名張市","伊賀市","志摩市"],
      "滋賀県":["大津市","彦根市","長浜市","草津市","守山市","栗東市","甲賀市","東近江市"],
      "京都府":["京都市北区","京都市上京区","京都市左京区","京都市中京区","京都市東山区","京都市下京区","京都市南区","京都市右京区","京都市伏見区","宇治市","亀岡市","長岡京市","向日市","京田辺市","木津川市"],
      "大阪府":["大阪市北区","大阪市中央区","大阪市西区","大阪市天王寺区","大阪市浪速区","大阪市淀川区","大阪市平野区","堺市堺区","堺市北区","豊中市","吹田市","高槻市","枚方市","茨木市","八尾市","寝屋川市","東大阪市"],
      "兵庫県":["神戸市中央区","神戸市東灘区","神戸市灘区","神戸市兵庫区","神戸市長田区","神戸市須磨区","神戸市垂水区","姫路市","尼崎市","明石市","西宮市","芦屋市","伊丹市","宝塚市","川西市","三田市"],
      "奈良県":["奈良市","橿原市","生駒市","大和郡山市","天理市","桜井市","香芝市"],
      "和歌山県":["和歌山市","海南市","橋本市","田辺市","新宮市","紀の川市"],
      "鳥取県":["鳥取市","米子市","倉吉市","境港市"],
      "島根県":["松江市","浜田市","出雲市","益田市","大田市"],
      "岡山県":["岡山市北区","岡山市南区","倉敷市","津山市","総社市","赤磐市"],
      "広島県":["広島市中区","広島市西区","広島市南区","広島市安佐南区","呉市","尾道市","福山市","東広島市","廿日市市"],
      "山口県":["下関市","宇部市","山口市","萩市","防府市","岩国市","周南市"],
      "徳島県":["徳島市","鳴門市","阿南市","吉野川市"],
      "香川県":["高松市","丸亀市","坂出市","観音寺市","さぬき市"],
      "愛媛県":["松山市","今治市","宇和島市","新居浜市","西条市","大洲市"],
      "高知県":["高知市","室戸市","南国市","四万十市","香南市"],
      "福岡県":["福岡市博多区","福岡市中央区","福岡市南区","福岡市西区","福岡市早良区","北九州市小倉北区","北九州市小倉南区","北九州市八幡東区","北九州市八幡西区","大牟田市","久留米市","飯塚市","春日市","大野城市","宗像市","太宰府市","糸島市"],
      "佐賀県":["佐賀市","唐津市","鳥栖市","伊万里市","武雄市"],
      "長崎県":["長崎市","佐世保市","島原市","諫早市","大村市","対馬市","五島市"],
      "熊本県":["熊本市中央区","熊本市東区","熊本市西区","熊本市南区","熊本市北区","八代市","天草市","合志市"],
      "大分県":["大分市","別府市","中津市","日田市","佐伯市","宇佐市","由布市"],
      "宮崎県":["宮崎市","都城市","延岡市","日南市","日向市"],
      "鹿児島県":["鹿児島市","鹿屋市","薩摩川内市","霧島市","姶良市","奄美市"],
      "沖縄県":["那覇市","宜野湾市","石垣市","浦添市","名護市","沖縄市","豊見城市","うるま市","宮古島市"]
    };

    // 都道府県をセレクトに追加
    const sPref = document.getElementById('sPref');
    if (sPref) {
      Object.keys(CITY_MAP).forEach(p => {
        const o = document.createElement('option');
        o.value = p; o.textContent = p;
        sPref.appendChild(o);
      });
    }

    // 以降のロジックはwindowに登録
    window.CITY_MAP = CITY_MAP;
    window.onPref = function() {
      const pref = sPref.value, cl = document.getElementById('cityList'), rw = document.getElementById('rowMulti');
      cl.innerHTML = '';
      if (!pref) { rw.style.display = 'none'; return; }
      rw.style.display = 'block';
      (CITY_MAP[pref] || []).forEach(c => {
        const lbl = document.createElement('label'); lbl.className = 'ccb';
        const cb = document.createElement('input'); cb.type = 'checkbox'; cb.value = c; cb.onchange = window.updCity;
        lbl.appendChild(cb); lbl.appendChild(document.createTextNode(c)); cl.appendChild(lbl);
      });
      window.updCity();
    };
    window.updCity = function() {
      const c = document.querySelectorAll('#cityList input:checked').length, t = document.querySelectorAll('#cityList input').length;
      document.getElementById('cityCount').textContent = c === 0 ? '選択なし（都道府県全体）' : c + ' / ' + t + ' 選択中';
    };
    window.cityAll = function(v) { document.querySelectorAll('#cityList input[type=checkbox]').forEach(c => c.checked = v); window.updCity(); };
    window.getSelCities = function() { return [...document.querySelectorAll('#cityList input:checked')].map(c => c.value); };
  }, []);

  return (
    <div id="app-root">
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{--bg:#0d0d0d;--sur:#161616;--sur2:#1e1e1e;--bdr:#2a2a2a;--bdr2:#3a3a3a;--gold:#f5c842;--silver:#b0b8c1;--bronze:#cd7f32;--accent:#4285f4;--txt:#f0f0f0;--mut:#777;--mut2:#555;--danger:#e84040;--green:#34a853;--purple:#a78bfa;--orange:#fb923c}
        body{background:var(--bg);color:var(--txt);font-family:'Noto Sans JP',sans-serif;min-height:100vh;padding:28px 16px 80px}
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Bebas+Neue&display=swap');
        .container{max-width:860px;margin:0 auto}
        header{text-align:center;margin-bottom:24px}
        header h1{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,7vw,4rem);letter-spacing:.06em;color:var(--gold);line-height:1}
        header p{color:var(--mut);font-size:.78rem;margin-top:4px}
        .panel{background:var(--sur);border:1px solid var(--bdr);border-radius:14px;padding:20px;margin-bottom:14px}
        .pt{font-size:.68rem;letter-spacing:.14em;color:var(--mut);text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:8px}
        .sb{background:var(--accent);color:#fff;border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700;flex-shrink:0}
        label{display:block;font-size:.68rem;color:var(--mut);letter-spacing:.07em;margin-bottom:5px;text-transform:uppercase}
        input,select{width:100%;background:var(--sur2);border:1px solid var(--bdr);border-radius:8px;color:var(--txt);font-family:inherit;font-size:.87rem;padding:9px 12px;outline:none;transition:border-color .2s}
        select option{background:var(--sur2)}
        input:focus,select:focus{border-color:var(--accent)}
        .g2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
        @media(max-width:560px){.g2{grid-template-columns:1fr}}
        .rctrl{display:flex;gap:7px;align-items:center;margin-bottom:8px;flex-wrap:wrap}
        .rctrl span{font-size:.72rem;color:var(--mut)}
        .bxs{background:transparent;border:1px solid var(--bdr2);border-radius:6px;color:var(--mut);cursor:pointer;font-family:inherit;font-size:.72rem;padding:4px 11px;transition:all .18s}
        .bxs:hover{border-color:var(--txt);color:var(--txt)}
        .city-list{background:var(--sur2);border:1px solid var(--bdr);border-radius:8px;padding:8px;max-height:140px;overflow-y:auto;display:flex;flex-wrap:wrap;gap:5px;margin-bottom:10px}
        .ccb{display:flex;align-items:center;gap:4px;background:var(--sur);border:1px solid var(--bdr);border-radius:14px;padding:3px 10px;font-size:.72rem;cursor:pointer;white-space:nowrap}
        .ccb input{width:12px;height:12px;accent-color:var(--accent);cursor:pointer}
        .chips{display:flex;flex-wrap:wrap;gap:6px}
        .chip{background:var(--sur2);border:1px solid var(--bdr);border-radius:18px;color:var(--mut);cursor:pointer;font-family:inherit;font-size:.72rem;padding:4px 12px;transition:all .15s;user-select:none}
        .chip:hover{border-color:var(--bdr2);color:var(--txt)}
        .chip.on{background:rgba(66,133,244,.14);border-color:var(--accent);color:var(--accent)}
        .btn-s{background:var(--accent);border:none;border-radius:8px;color:#fff;cursor:pointer;font-family:inherit;font-size:.88rem;font-weight:700;padding:10px 22px;transition:all .2s;white-space:nowrap}
        .btn-s:hover:not(:disabled){background:#3367d6;transform:translateY(-1px)}
        .btn-s:disabled{background:var(--sur2);color:var(--mut);cursor:not-allowed}
        .cov{background:rgba(66,133,244,.06);border:1px solid rgba(66,133,244,.2);border-radius:8px;padding:10px 14px;font-size:.73rem;color:var(--mut);line-height:1.7;margin-bottom:12px}
        .cov strong{color:var(--accent)}
        .pbw{display:none;margin-top:10px}
        .pbw.show{display:block}
        .pb{height:5px;background:var(--bdr);border-radius:3px;overflow:hidden;margin-bottom:5px}
        .pf{height:100%;background:linear-gradient(90deg,var(--accent),var(--purple));border-radius:3px;transition:width .3s}
        .pl{font-size:.72rem;color:var(--mut);display:none}
        .pl.show{display:block}
        .rh{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:6px}
        .rh span{font-size:.72rem;color:var(--mut)}
        .rl{display:flex;flex-direction:column;gap:5px;max-height:240px;overflow-y:auto;margin-bottom:8px}
        .ri{background:var(--sur2);border:1px solid var(--bdr);border-radius:8px;display:flex;align-items:center;gap:8px;padding:9px 12px}
        .ri:hover{border-color:var(--bdr2)}
        .ri input{width:14px;height:14px;accent-color:var(--accent);cursor:pointer;flex-shrink:0}
        .rn{font-size:.85rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;cursor:pointer}
        .rsb{font-size:.7rem;color:var(--mut);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer}
        .rc{font-size:1rem;font-weight:700;color:var(--accent);white-space:nowrap;flex-shrink:0}
        .ib{display:flex;align-items:center;gap:8px;padding-top:8px;border-top:1px solid var(--bdr)}
        .fp{background:var(--sur);border:1px solid var(--bdr);border-radius:12px;padding:12px 16px;margin-bottom:14px}
        .fr{display:flex;align-items:flex-start;gap:8px;margin-bottom:6px}
        .fr:last-child{margin-bottom:0}
        .fsl{font-size:.65rem;color:var(--mut);text-transform:uppercase;white-space:nowrap;min-width:48px;padding-top:5px}
        .ftags{display:flex;flex-wrap:wrap;gap:5px}
        .ftag{background:var(--sur2);border:1px solid var(--bdr);border-radius:14px;color:var(--mut);cursor:pointer;font-family:inherit;font-size:.72rem;padding:3px 10px;white-space:nowrap;transition:all .15s}
        .ftag:hover{border-color:var(--bdr2);color:var(--txt)}
        .ftag.ap{background:rgba(66,133,244,.13);border-color:var(--accent);color:var(--accent)}
        .ftag.ac{background:rgba(167,139,250,.13);border-color:var(--purple);color:var(--purple)}
        .vt{display:flex;gap:0;background:var(--sur);border:1px solid var(--bdr);border-radius:10px;padding:3px;margin-bottom:12px}
        .vb{flex:1;background:transparent;border:none;border-radius:7px;color:var(--mut);cursor:pointer;font-family:inherit;font-size:.78rem;font-weight:500;padding:7px;transition:all .15s}
        .vb.active{background:var(--sur2);color:var(--txt);border:1px solid var(--bdr)}
        .sbar{display:flex;align-items:center;gap:7px;margin-bottom:10px;flex-wrap:wrap}
        .sbar span{font-size:.75rem;color:var(--mut)}
        .sbtn{background:transparent;border:1px solid var(--bdr);border-radius:6px;color:var(--mut);cursor:pointer;font-family:inherit;font-size:.72rem;padding:4px 10px;transition:all .18s}
        .sbtn.active{border-color:var(--accent);color:var(--accent);background:rgba(66,133,244,.08)}
        .tbar{display:flex;justify-content:space-between;font-size:.7rem;color:var(--mut);margin-bottom:10px}
        .ranking{list-style:none;display:flex;flex-direction:column;gap:9px}
        .ri2{background:var(--sur);border:1px solid var(--bdr);border-radius:12px;display:grid;grid-template-columns:44px 1fr auto auto;align-items:center;gap:11px;padding:13px 15px;position:relative;overflow:hidden;transition:border-color .18s,transform .15s;animation:si .3s ease both}
        @keyframes si{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:translateY(0)}}
        .ri2:hover{border-color:var(--bdr2);transform:translateX(2px)}
        .ri2.r1{border-color:var(--gold)}.ri2.r2{border-color:var(--silver)}.ri2.r3{border-color:var(--bronze)}
        .rbg{font-family:'Bebas Neue',sans-serif;font-size:1.6rem;text-align:center;line-height:1}
        .rif{min-width:0}
        .rnm{font-weight:700;font-size:.92rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .rmt{display:flex;align-items:center;gap:5px;margin-top:3px;flex-wrap:wrap}
        .rst{font-size:.7rem;color:var(--gold)}
        .tag{font-size:.62rem;border-radius:9px;padding:1px 7px;white-space:nowrap}
        .tag.p{background:rgba(66,133,244,.1);border:1px solid rgba(66,133,244,.25);color:var(--accent)}
        .tag.c{background:rgba(167,139,250,.1);border:1px solid rgba(167,139,250,.25);color:var(--purple)}
        .tag.t{background:rgba(52,168,83,.08);border:1px solid rgba(52,168,83,.22);color:var(--green)}
        .rct{text-align:right;font-family:'Bebas Neue',sans-serif;font-size:1.4rem;color:var(--accent);white-space:nowrap}
        .rct small{display:block;font-family:inherit;font-size:.6rem;color:var(--mut);text-transform:uppercase;font-weight:400}
        .bdl{background:transparent;border:none;color:var(--mut2);cursor:pointer;font-size:.9rem;padding:3px;border-radius:4px;transition:color .18s;line-height:1}
        .bdl:hover{color:var(--danger)}
        .bfl{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,rgba(66,133,244,.05),transparent);pointer-events:none}
        .r1 .bfl{background:linear-gradient(90deg,rgba(245,200,66,.07),transparent)}
        .r2 .bfl{background:linear-gradient(90deg,rgba(176,184,193,.06),transparent)}
        .r3 .bfl{background:linear-gradient(90deg,rgba(205,127,50,.07),transparent)}
        .empty{text-align:center;color:var(--mut);padding:32px 0;font-size:.85rem}
        #mapWrap{width:100%;height:420px;border-radius:12px;overflow:hidden;border:1px solid var(--bdr);background:var(--sur2);display:flex;align-items:center;justify-content:center}
        .me{font-size:.85rem;color:var(--mut)}
        .toast{position:fixed;bottom:20px;right:20px;background:#252525;border:1px solid var(--bdr);border-radius:10px;padding:9px 16px;font-size:.78rem;z-index:9999;transform:translateY(50px);opacity:0;transition:all .25s;pointer-events:none}
        .toast.show{transform:translateY(0);opacity:1}
        .toast.ok{border-color:var(--green);color:var(--green)}
        .toast.err{border-color:var(--danger);color:var(--danger)}
      `}</style>

      <div className="container">
        <header>
          <h1>Review Ranking</h1>
          <p>Google Places API (New) でエリアを網羅的にスキャンしてランキング化</p>
        </header>

        <div className="panel">
          <div className="pt"><span className="sb">1</span> エリアを選ぶ</div>
          <div style={{marginBottom:'10px'}}>
            <label>都道府県</label>
            <select id="sPref" onChange={() => window.onPref && window.onPref()}><option value="">─ 選択 ─</option></select>
          </div>
          <div id="rowMulti" style={{display:'none'}}>
            <div className="rctrl">
              <button className="bxs" onClick={() => window.cityAll && window.cityAll(true)}>全選択</button>
              <button className="bxs" onClick={() => window.cityAll && window.cityAll(false)}>全解除</button>
              <span id="cityCount">選択なし（都道府県全体）</span>
            </div>
            <div className="city-list" id="cityList" />
          </div>
        </div>

        <div className="panel">
          <div className="pt"><span className="sb">2</span> カテゴリを選ぶ（複数OK）</div>
          <div className="rctrl">
            <button className="bxs" onClick={() => window.chipAll && window.chipAll(true)}>全選択</button>
            <button className="bxs" onClick={() => window.chipAll && window.chipAll(false)}>全解除</button>
            <span id="catCount">0 / 0 選択中</span>
          </div>
          <div className="chips" id="chips" />
        </div>

        <div className="panel">
          <div className="pt"><span className="sb">3</span> スキャン設定</div>
          <div className="cov"><strong>網羅的スキャン方式</strong>：エリアを格子状に分割し、各地点から半径内の場所を繰り返し検索します。</div>
          <div className="g2" style={{marginBottom:'12px'}}>
            <div><label>スキャン密度</label>
              <select id="density"><option value="low">低（速い）</option><option value="mid" defaultValue>中（推奨）</option><option value="high">高（網羅）</option></select>
            </div>
            <div><label>最低レビュー数</label>
              <select id="minRev"><option value="0">制限なし</option><option value="10">10件以上</option><option value="50" defaultValue>50件以上</option><option value="100">100件以上</option><option value="500">500件以上</option></select>
            </div>
          </div>
          <button className="btn-s" id="btnSearch" onClick={() => window.doSearch && window.doSearch()}>🔍 スキャン開始</button>
          <div className="pbw" id="pbw"><div className="pb"><div className="pf" id="pf" style={{width:'0%'}} /></div><div className="pl" id="pl" /></div>
          <div id="resSection" style={{display:'none',marginTop:'14px'}}>
            <div className="rh"><span id="resTitle" /><div style={{display:'flex',gap:'6px'}}><button className="bxs" onClick={() => window.ckAll && window.ckAll(true)}>全選択</button><button className="bxs" onClick={() => window.ckAll && window.ckAll(false)}>全解除</button></div></div>
            <div className="rl" id="resList" />
            <div className="ib"><span style={{fontSize:'.73rem',color:'var(--mut)'}} id="selInfo" /><button className="btn-s" style={{marginLeft:'auto',padding:'8px 16px',fontSize:'.82rem'}} onClick={() => window.importSel && window.importSel()}>✅ 選択した場所を追加</button></div>
          </div>
        </div>

        <div className="fp" id="filterPanel" style={{display:'none'}}>
          <div className="fr"><span className="fsl">🗾 都道府県</span><div className="ftags" id="tagsPref" /></div>
          <div className="fr" id="fcRow" style={{display:'none'}}><span className="fsl">📍 市区町村</span><div className="ftags" id="tagsCity" /></div>
        </div>

        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'10px',flexWrap:'wrap',gap:'8px'}}>
          <div className="sbar" style={{margin:0}}>
            <span>並び替え：</span>
            <button className="sbtn active" id="sR" onClick={() => window.setSort && window.setSort('r')}>レビュー数</button>
            <button className="sbtn" id="sRt" onClick={() => window.setSort && window.setSort('rt')}>評価</button>
            <button className="sbtn" id="sN" onClick={() => window.setSort && window.setSort('n')}>名前</button>
          </div>
          <button className="bxs" style={{color:'var(--danger)',borderColor:'#3a1515'}} onClick={() => window.clearAll && window.clearAll()}>🗑 全削除</button>
        </div>
        <div className="tbar"><span id="totL">0件</span><span id="totR" /></div>
        <div className="vt">
          <button className="vb active" id="tabList" onClick={() => window.switchView && window.switchView('list')}>📋 リスト</button>
          <button className="vb" id="tabMap" onClick={() => window.switchView && window.switchView('map')}>🗺 マップ</button>
        </div>
        <ul className="ranking" id="rankList" />
        <div id="mapWrap"><div className="me">場所を追加するとマップに表示されます</div></div>
      </div>
      <div className="toast" id="toast" />

      <script src="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Bebas+Neue&display=swap" />
      <AppScript />
    </div>
  );
}

function AppScript() {
  useEffect(() => {
    const CITY_COORDS = {"北海道":[43.2203,142.8635],"青森県":[40.5942,140.934],"岩手県":[39.5036,141.4287],"宮城県":[38.4688,140.8721],"秋田県":[39.7185,140.5234],"山形県":[38.5545,140.2573],"福島県":[37.4601,140.4428],"茨城県":[36.3418,140.4468],"栃木県":[36.6658,139.8947],"群馬県":[36.3912,138.9792],"埼玉県":[35.8572,139.6489],"千葉県":[35.6047,140.1233],"東京都":[35.6894,139.6917],"神奈川県":[35.4478,139.6425],"新潟県":[37.9022,139.0234],"富山県":[36.6953,137.2113],"石川県":[36.5944,136.6256],"福井県":[36.0652,136.2219],"山梨県":[35.6635,138.5686],"長野県":[36.2048,137.9674],"岐阜県":[35.7911,136.7217],"静岡県":[34.9769,138.3831],"愛知県":[35.0787,137.152],"三重県":[34.6301,136.3006],"滋賀県":[35.0045,135.8686],"京都府":[35.0212,135.7556],"大阪府":[34.6864,135.5219],"兵庫県":[34.9085,134.914],"奈良県":[34.4851,135.805],"和歌山県":[33.9481,135.3705],"鳥取県":[35.4038,133.5316],"島根県":[35.1832,132.5651],"岡山県":[34.8994,133.9334],"広島県":[34.5963,132.7796],"山口県":[34.1858,131.4706],"徳島県":[33.8388,134.695],"香川県":[34.2401,133.9949],"愛媛県":[33.8416,132.7657],"高知県":[33.5597,133.5311],"福岡県":[33.5904,130.4017],"佐賀県":[33.2442,130.299],"長崎県":[32.7503,129.8779],"熊本県":[32.7898,130.7417],"大分県":[33.2382,131.6126],"宮崎県":[31.9111,131.4239],"鹿児島県":[31.5966,130.5571],"沖縄県":[26.2124,127.6809],"札幌市中央区":[43.0617,141.3544],"札幌市北区":[43.0878,141.3396],"札幌市東区":[43.0736,141.3832],"札幌市白石区":[43.0504,141.4007],"札幌市豊平区":[43.0342,141.3859],"札幌市南区":[42.9931,141.3287],"札幌市西区":[43.0756,141.3042],"札幌市厚別区":[43.0371,141.438],"札幌市手稲区":[43.1144,141.2374],"札幌市清田区":[43.0059,141.4195],"函館市":[41.7686,140.7288],"旭川市":[43.7706,142.365],"釧路市":[42.9849,144.382],"帯広市":[42.9237,143.1966],"小樽市":[43.1907,140.9947],"苫小牧市":[42.6333,141.6044],"北見市":[43.8029,143.8897],"室蘭市":[42.315,140.9736],"江別市":[43.1022,141.5471],"千歳市":[42.8207,141.6476],"恵庭市":[42.8757,141.5775],"北広島市":[42.9877,141.5648],"石狩市":[43.1694,141.3455],"網走市":[44.0218,144.2735],"岩見沢市":[43.1963,141.7757],"富良野市":[43.3418,142.3832],"留萌市":[43.94,141.6419],"稚内市":[45.4159,141.6734],"根室市":[43.3285,145.5833],"名寄市":[44.3567,142.4681],"北斗市":[41.8245,140.6542],"青森市":[40.8244,140.7402],"弘前市":[40.6031,140.4645],"八戸市":[40.5122,141.4883],"黒石市":[40.6442,140.5931],"五所川原市":[40.8073,140.4409],"十和田市":[40.613,141.2062],"三沢市":[40.6822,141.3681],"むつ市":[41.2932,141.1841],"つがる市":[40.8032,140.381],"平川市":[40.5906,140.5636],"盛岡市":[39.7036,141.1527],"宮古市":[39.6413,141.9545],"大船渡市":[39.082,141.7115],"花巻市":[39.3882,141.1167],"北上市":[39.2895,141.1136],"久慈市":[40.1897,141.7757],"遠野市":[39.3272,141.5327],"一関市":[38.9343,141.1265],"陸前高田市":[39.0169,141.6252],"釜石市":[39.276,141.8672],"二戸市":[40.2675,141.3046],"八幡平市":[39.9244,141.0956],"奥州市":[39.1441,141.1348],"滝沢市":[39.7348,141.0776],"仙台市青葉区":[38.2682,140.8694],"仙台市宮城野区":[38.2672,140.9097],"仙台市若林区":[38.2337,140.8999],"仙台市太白区":[38.2017,140.8695],"仙台市泉区":[38.3244,140.8757],"石巻市":[38.4344,141.3029],"塩竈市":[38.3144,141.0218],"気仙沼市":[38.9082,141.5696],"白石市":[38.0027,140.6194],"名取市":[38.1676,140.8898],"多賀城市":[38.2938,141.0001],"岩沼市":[38.1044,140.8699],"大崎市":[38.5717,140.9555],"富谷市":[38.3958,140.8842],"秋田市":[39.7186,140.1023],"能代市":[40.2139,140.0273],"横手市":[39.3101,140.5633],"大館市":[40.275,140.5493],"男鹿市":[39.8809,139.8457],"湯沢市":[39.1642,140.4963],"由利本荘市":[39.3891,140.0494],"大仙市":[39.4593,140.4792],"北秋田市":[40.2298,140.4019],"仙北市":[39.6244,140.7268],"山形市":[38.2404,140.3634],"米沢市":[37.9215,140.1176],"鶴岡市":[38.7299,139.8276],"酒田市":[38.914,139.836],"新庄市":[38.7621,140.3011],"寒河江市":[38.3791,140.2346],"天童市":[38.3622,140.3795],"東根市":[38.4317,140.3929],"南陽市":[38.0576,140.1542],"福島市":[37.7608,140.4747],"会津若松市":[37.4944,139.9293],"郡山市":[37.3941,140.3876],"いわき市":[37.0504,140.8876],"白河市":[37.1286,140.2851],"須賀川市":[37.2939,140.3888],"相馬市":[37.8007,140.9248],"二本松市":[37.5845,140.4274],"南相馬市":[37.643,140.9576],"本宮市":[37.5125,140.3908],"水戸市":[36.366,140.4713],"日立市":[36.5994,140.6516],"土浦市":[36.0748,140.2048],"つくば市":[36.0831,140.0777],"ひたちなか市":[36.3965,140.534],"鹿嶋市":[35.9663,140.6453],"古河市":[36.1838,139.7059],"取手市":[35.9091,140.0495],"牛久市":[35.9831,140.1495],"守谷市":[35.9557,139.9764],"宇都宮市":[36.5659,139.8836],"足利市":[36.3406,139.4497],"栃木市":[36.3801,139.7258],"佐野市":[36.2266,139.578],"鹿沼市":[36.562,139.738],"日光市":[36.7199,139.6983],"小山市":[36.3148,139.8006],"真岡市":[36.4401,140.0135],"那須塩原市":[36.9162,139.9869],"下野市":[36.3886,139.8506],"前橋市":[36.3895,139.0634],"高崎市":[36.3231,139.003],"桐生市":[36.406,139.3327],"伊勢崎市":[36.3108,139.1975],"太田市":[36.2926,139.3757],"沼田市":[36.6479,138.8778],"館林市":[36.2448,139.5409],"渋川市":[36.4891,139.0036],"藤岡市":[36.2562,139.0741],"富岡市":[36.2566,138.8866],"さいたま市大宮区":[35.9062,139.6239],"さいたま市浦和区":[35.8578,139.6481],"さいたま市中央区":[35.8946,139.6278],"さいたま市緑区":[35.8572,139.7072],"川越市":[35.9252,139.4855],"熊谷市":[36.1474,139.3888],"川口市":[35.8077,139.7244],"所沢市":[35.7994,139.4688],"春日部市":[35.9757,139.7518],"草加市":[35.8253,139.8059],"越谷市":[35.8883,139.7907],"戸田市":[35.8175,139.6779],"朝霞市":[35.7964,139.5937],"新座市":[35.7937,139.5626],"富士見市":[35.8577,139.5497],"三郷市":[35.8318,139.8711],"ふじみ野市":[35.8773,139.52],"千葉市中央区":[35.6073,140.1064],"千葉市稲毛区":[35.6371,140.0835],"千葉市美浜区":[35.6446,140.0436],"銚子市":[35.7351,140.8268],"市川市":[35.7219,139.9316],"船橋市":[35.694,139.9826],"木更津市":[35.3749,139.9263],"松戸市":[35.7877,139.9029],"成田市":[35.7726,140.318],"柏市":[35.8681,139.9756],"市原市":[35.498,140.1163],"流山市":[35.8561,139.9026],"八千代市":[35.7228,140.1019],"浦安市":[35.6498,139.8978],"千代田区":[35.694,139.7534],"中央区":[35.6703,139.7726],"港区":[35.6581,139.7514],"新宿区":[35.6938,139.7036],"文京区":[35.7077,139.752],"台東区":[35.7126,139.7812],"墨田区":[35.7101,139.8014],"江東区":[35.6722,139.8168],"品川区":[35.609,139.7302],"目黒区":[35.6332,139.6981],"大田区":[35.5614,139.7159],"世田谷区":[35.6467,139.6532],"渋谷区":[35.6617,139.7041],"中野区":[35.7076,139.6635],"杉並区":[35.6994,139.6363],"豊島区":[35.7253,139.7181],"北区":[35.7528,139.7337],"荒川区":[35.7361,139.7827],"板橋区":[35.7509,139.7094],"練馬区":[35.7358,139.6522],"足立区":[35.7751,139.8048],"葛飾区":[35.744,139.847],"江戸川区":[35.7067,139.8681],"八王子市":[35.6663,139.3161],"立川市":[35.6922,139.413],"武蔵野市":[35.7175,139.5665],"三鷹市":[35.6834,139.5611],"府中市":[35.6688,139.4778],"調布市":[35.6519,139.543],"町田市":[35.5484,139.4483],"日野市":[35.6714,139.396],"横浜市西区":[35.4655,139.6215],"横浜市中区":[35.4438,139.638],"横浜市港北区":[35.5397,139.6279],"横浜市青葉区":[35.5463,139.5338],"横浜市都筑区":[35.5439,139.5807],"川崎市川崎区":[35.5306,139.703],"川崎市中原区":[35.5756,139.6557],"川崎市高津区":[35.59,139.652],"相模原市中央区":[35.5681,139.3731],"横須賀市":[35.2819,139.6722],"平塚市":[35.3283,139.3492],"鎌倉市":[35.3197,139.5469],"藤沢市":[35.3385,139.4904],"小田原市":[35.2654,139.1523],"茅ヶ崎市":[35.3318,139.4036],"厚木市":[35.443,139.3628],"大和市":[35.4885,139.4608],"海老名市":[35.4449,139.3924],"新潟市中央区":[37.9161,139.0364],"新潟市東区":[37.9283,139.0781],"新潟市西区":[37.9011,138.9811],"長岡市":[37.448,138.8509],"三条市":[37.6364,138.9591],"柏崎市":[37.3713,138.5578],"上越市":[37.1478,138.2365],"佐渡市":[38.018,138.3688],"富山市":[36.6953,137.2113],"高岡市":[36.7545,137.0258],"魚津市":[36.8284,137.4136],"氷見市":[36.8574,136.9873],"黒部市":[36.8697,137.4502],"射水市":[36.7026,137.0848],"金沢市":[36.5944,136.6256],"七尾市":[37.0465,136.966],"小松市":[36.4062,136.5047],"輪島市":[37.3903,136.8993],"加賀市":[36.3046,136.3163],"白山市":[36.5151,136.5627],"野々市市":[36.5236,136.6091],"福井市":[36.0652,136.2219],"敦賀市":[35.6447,136.0555],"小浜市":[35.4957,135.744],"大野市":[35.9784,136.4882],"鯖江市":[35.9568,136.1843],"越前市":[35.9005,136.1684],"坂井市":[36.1747,136.231],"甲府市":[35.6635,138.5686],"富士吉田市":[35.4878,138.8081],"山梨市":[35.6912,138.6888],"南アルプス市":[35.6121,138.4605],"甲斐市":[35.7058,138.5097],"笛吹市":[35.6467,138.6381],"甲州市":[35.6972,138.7277],"長野市":[36.6486,138.1946],"松本市":[36.2381,137.972],"上田市":[36.4022,138.2493],"飯田市":[35.5149,137.8218],"諏訪市":[36.039,138.1132],"小諸市":[36.328,138.4268],"伊那市":[35.8276,137.954],"茅野市":[35.9947,138.1598],"塩尻市":[36.1153,137.9542],"佐久市":[36.2487,138.4759],"安曇野市":[36.3036,137.9046],"岐阜市":[35.4232,136.7608],"大垣市":[35.3593,136.6178],"高山市":[36.1411,137.252],"多治見市":[35.353,137.1324],"関市":[35.4968,136.9134],"各務原市":[35.4008,136.849],"可児市":[35.4262,137.0613],"郡上市":[35.7479,136.9665],"下呂市":[35.8075,137.2454],"静岡市葵区":[34.9756,138.383],"静岡市駿河区":[34.9468,138.4026],"浜松市中央区":[34.7108,137.7261],"沼津市":[35.096,138.8637],"熱海市":[35.0961,139.0718],"三島市":[35.1178,138.9196],"富士宮市":[35.2225,138.6186],"伊東市":[34.9654,139.1011],"富士市":[35.1617,138.6762],"磐田市":[34.7184,137.8512],"焼津市":[34.8675,138.3248],"掛川市":[34.7691,138.0153],"藤枝市":[34.8684,138.2563],"御殿場市":[35.3085,138.9318],"名古屋市中区":[35.1677,136.9066],"名古屋市中村区":[35.1709,136.8745],"名古屋市東区":[35.181,136.9244],"名古屋市西区":[35.1902,136.8758],"名古屋市昭和区":[35.1497,136.929],"名古屋市緑区":[35.0824,136.9724],"名古屋市名東区":[35.1719,137.0269],"名古屋市天白区":[35.1221,136.9807],"豊橋市":[34.7698,137.3916],"岡崎市":[34.9479,137.1744],"一宮市":[35.3041,136.8023],"春日井市":[35.249,136.9723],"豊田市":[35.0826,137.1563],"安城市":[34.9584,137.0833],"西尾市":[34.8618,137.0596],"犬山市":[35.383,136.9449],"小牧市":[35.2935,136.9108],"刈谷市":[35.0148,136.9878],"長久手市":[35.1847,137.0508],"津市":[34.7303,136.5085],"四日市市":[34.9647,136.6248],"伊勢市":[34.4872,136.7075],"松阪市":[34.5793,136.5276],"桑名市":[35.0603,136.6897],"鈴鹿市":[34.8823,136.584],"名張市":[34.6273,136.109],"伊賀市":[34.7678,136.1311],"志摩市":[34.3276,136.8261],"大津市":[35.0045,135.8686],"彦根市":[35.276,136.2561],"長浜市":[35.3829,136.2689],"草津市":[35.0126,135.9558],"守山市":[35.053,135.9971],"栗東市":[34.9836,135.9989],"甲賀市":[34.9609,136.1694],"東近江市":[35.1154,136.1993],"京都市北区":[35.0601,135.7605],"京都市上京区":[35.0264,135.7599],"京都市左京区":[35.0426,135.782],"京都市中京区":[35.0116,135.756],"京都市東山区":[34.9969,135.7789],"京都市下京区":[34.9946,135.7565],"京都市南区":[34.9793,135.7432],"京都市右京区":[35.0148,135.7105],"京都市伏見区":[34.947,135.764],"宇治市":[34.8841,135.7998],"亀岡市":[35.0028,135.5764],"長岡京市":[34.9251,135.6942],"向日市":[34.9444,135.6961],"京田辺市":[34.8176,135.7686],"木津川市":[34.784,135.8292],"大阪市北区":[34.7027,135.5021],"大阪市中央区":[34.6864,135.5219],"大阪市西区":[34.6793,135.4899],"大阪市天王寺区":[34.6524,135.5226],"大阪市浪速区":[34.6624,135.5051],"大阪市淀川区":[34.7266,135.493],"大阪市平野区":[34.6305,135.56],"堺市堺区":[34.581,135.483],"堺市北区":[34.5977,135.4843],"豊中市":[34.7817,135.4694],"吹田市":[34.7647,135.5175],"高槻市":[34.8496,135.6173],"枚方市":[34.8143,135.6524],"茨木市":[34.8162,135.5676],"八尾市":[34.6264,135.6015],"寝屋川市":[34.7666,135.6279],"東大阪市":[34.6793,135.5993],"神戸市中央区":[34.6908,135.1955],"神戸市東灘区":[34.7232,135.2684],"神戸市灘区":[34.7165,135.2268],"神戸市兵庫区":[34.6849,135.1707],"神戸市長田区":[34.6671,135.1479],"神戸市須磨区":[34.6538,135.1211],"神戸市垂水区":[34.6345,135.0884],"姫路市":[34.8394,134.6939],"尼崎市":[34.7335,135.406],"明石市":[34.6451,134.998],"西宮市":[34.7367,135.3411],"芦屋市":[34.7279,135.3017],"伊丹市":[34.7848,135.4032],"宝塚市":[34.7994,135.3602],"川西市":[34.8314,135.4128],"三田市":[34.8889,135.2231],"奈良市":[34.6851,135.805],"橿原市":[34.5066,135.7937],"生駒市":[34.6934,135.6943],"大和郡山市":[34.6485,135.7874],"天理市":[34.6003,135.8359],"桜井市":[34.5219,135.8456],"香芝市":[34.5539,135.7175],"和歌山市":[34.226,135.1675],"海南市":[34.1527,135.2163],"橋本市":[34.3159,135.6049],"田辺市":[33.7323,135.3736],"新宮市":[33.726,135.9868],"紀の川市":[34.2761,135.3656],"鳥取市":[35.5011,134.2351],"米子市":[35.4283,133.3308],"倉吉市":[35.4294,133.8237],"境港市":[35.5393,133.2274],"松江市":[35.4723,133.0505],"浜田市":[34.8996,132.0809],"出雲市":[35.3671,132.755],"益田市":[34.6768,131.8426],"大田市":[35.1925,132.4986],"岡山市北区":[34.6551,133.9195],"岡山市南区":[34.602,133.9149],"倉敷市":[34.585,133.7735],"津山市":[35.0659,134.0001],"総社市":[34.6826,133.745],"赤磐市":[34.7534,134.0156],"広島市中区":[34.3963,132.4596],"広島市西区":[34.3963,132.4282],"広島市南区":[34.3782,132.4698],"広島市安佐南区":[34.4395,132.4676],"呉市":[34.2491,132.5657],"尾道市":[34.4084,133.2023],"福山市":[34.486,133.3625],"東広島市":[34.4268,132.7439],"廿日市市":[34.3497,132.3268],"下関市":[33.9559,130.9434],"宇部市":[33.9511,131.2465],"山口市":[34.1859,131.471],"萩市":[34.4081,131.399],"防府市":[34.0534,131.5625],"岩国市":[34.1653,132.2178],"周南市":[34.0538,131.806],"徳島市":[34.0657,134.5591],"鳴門市":[34.1766,134.6085],"阿南市":[33.9215,134.6592],"吉野川市":[34.07,134.3627],"高松市":[34.3401,134.0434],"丸亀市":[34.287,133.7974],"坂出市":[34.3148,133.8615],"観音寺市":[34.1229,133.659],"さぬき市":[34.3252,134.1729],"松山市":[33.8416,132.7657],"今治市":[34.0658,132.998],"宇和島市":[33.2232,132.5612],"新居浜市":[33.9603,133.2832],"西条市":[33.9196,133.1818],"大洲市":[33.5062,132.5444],"高知市":[33.5597,133.5311],"室戸市":[33.2924,134.1525],"南国市":[33.5801,133.646],"四万十市":[32.996,132.9374],"香南市":[33.5603,133.6872],"福岡市博多区":[33.5902,130.421],"福岡市中央区":[33.5904,130.3952],"福岡市南区":[33.5555,130.42],"福岡市西区":[33.5944,130.3186],"福岡市早良区":[33.5734,130.3625],"北九州市小倉北区":[33.8843,130.8753],"北九州市小倉南区":[33.858,130.9217],"北九州市八幡東区":[33.8672,130.7953],"北九州市八幡西区":[33.8679,130.7549],"大牟田市":[33.0289,130.4487],"久留米市":[33.3189,130.508],"飯塚市":[33.6468,130.6913],"春日市":[33.5323,130.471],"大野城市":[33.5355,130.4773],"宗像市":[33.809,130.5416],"太宰府市":[33.5137,130.5253],"糸島市":[33.5571,130.1991],"佐賀市":[33.2492,130.299],"唐津市":[33.4485,129.9695],"鳥栖市":[33.3793,130.5083],"伊万里市":[33.2641,129.883],"武雄市":[33.1935,130.0168],"長崎市":[32.7503,129.8779],"佐世保市":[33.1596,129.7153],"島原市":[32.7888,130.3688],"諫早市":[32.844,130.0549],"大村市":[32.9001,129.9593],"対馬市":[34.2046,129.2878],"五島市":[32.696,128.8376],"熊本市中央区":[32.7898,130.7417],"熊本市東区":[32.8021,130.7784],"熊本市西区":[32.7827,130.6968],"熊本市南区":[32.739,130.7299],"熊本市北区":[32.8529,130.7235],"八代市":[32.5064,130.601],"天草市":[32.4597,130.1946],"合志市":[32.8842,130.7832],"大分市":[33.2382,131.6126],"別府市":[33.2847,131.491],"中津市":[33.5983,131.1884],"日田市":[33.3219,130.9417],"佐伯市":[32.96,131.9],"宇佐市":[33.5318,131.3497],"由布市":[33.1802,131.4175],"宮崎市":[31.9111,131.4239],"都城市":[31.7197,131.0622],"延岡市":[32.5822,131.663],"日南市":[31.6086,131.3692],"日向市":[32.4228,131.6248],"鹿児島市":[31.5966,130.5571],"鹿屋市":[31.3793,130.8525],"薩摩川内市":[31.8096,130.3031],"霧島市":[31.7438,130.7608],"姶良市":[31.7252,130.6282],"奄美市":[28.3759,129.4945],"那覇市":[26.2124,127.6809],"宜野湾市":[26.2815,127.7789],"石垣市":[24.3336,124.1544],"浦添市":[26.2477,127.7219],"名護市":[26.5913,127.9777],"沖縄市":[26.3344,127.8056],"豊見城市":[26.1612,127.6686],"うるま市":[26.3789,127.8579],"宮古島市":[24.8056,125.2814]};

    const CATS = [
      {l:"ラーメン",t:"ramen_restaurant",k:""},{l:"寿司",t:"sushi_restaurant",k:""},{l:"そば・うどん",t:"japanese_restaurant",k:"そば うどん"},
      {l:"焼肉",t:"barbecue_restaurant",k:"焼肉"},{l:"和食",t:"japanese_restaurant",k:"和食"},{l:"カレー",t:"indian_restaurant",k:"カレー"},
      {l:"回転寿司",t:"sushi_restaurant",k:"回転寿司"},{l:"海鮮料理",t:"seafood_restaurant",k:""},{l:"焼き鳥",t:"japanese_restaurant",k:"焼き鳥"},
      {l:"中華・餃子",t:"chinese_restaurant",k:"餃子"},{l:"洋食・パスタ",t:"italian_restaurant",k:"洋食 パスタ"},{l:"ピザ",t:"pizza_restaurant",k:""},
      {l:"鍋・しゃぶしゃぶ",t:"japanese_restaurant",k:"鍋 しゃぶしゃぶ"},{l:"ファストフード",t:"fast_food_restaurant",k:""},{l:"弁当・テイクアウト",t:"meal_takeaway",k:"弁当"},
      {l:"居酒屋・バー",t:"bar",k:"居酒屋"},{l:"カフェ",t:"cafe",k:""},{l:"パン・ベーカリー",t:"bakery",k:""},
      {l:"スイーツ",t:"dessert_shop",k:""},{l:"日本酒・ワインバー",t:"wine_bar",k:"日本酒"},{l:"つけ麺・担々麺",t:"ramen_restaurant",k:"つけ麺 担々麺"},
      {l:"観光スポット",t:"tourist_attraction",k:""},{l:"神社",t:"shinto_shrine",k:""},{l:"仏閣・寺院",t:"buddhist_temple",k:""},
      {l:"公園・庭園",t:"park",k:"庭園 植物園"},{l:"テーマパーク",t:"amusement_park",k:""},{l:"水族館",t:"aquarium",k:""},
      {l:"動物園",t:"zoo",k:""},{l:"美術館",t:"art_gallery",k:""},{l:"博物館",t:"museum",k:""},
      {l:"劇場・ホール",t:"performing_arts_theater",k:""},{l:"映画館",t:"movie_theater",k:""},{l:"カラオケ",t:"karaoke",k:"ゲームセンター"},
      {l:"山・自然",t:"national_park",k:"山 自然"},{l:"花・植物園",t:"botanical_garden",k:"花 桜"},{l:"ホテル",t:"hotel",k:""},
      {l:"旅館",t:"japanese_inn",k:""},{l:"温泉・銭湯",t:"spa",k:"温泉 銭湯"},{l:"スキー場",t:"ski_resort",k:""},
      {l:"ショッピングモール",t:"shopping_mall",k:""},{l:"百貨店",t:"department_store",k:""},{l:"スーパー",t:"supermarket",k:""},
      {l:"薬局・ドラッグストア",t:"pharmacy",k:"ドラッグストア"},{l:"ファッション",t:"clothing_store",k:""},{l:"書店",t:"book_store",k:""},
      {l:"コンビニ",t:"convenience_store",k:""},{l:"酒屋",t:"liquor_store",k:""},{l:"ホームセンター",t:"hardware_store",k:"ホームセンター"},
      {l:"病院",t:"hospital",k:""},{l:"クリニック",t:"doctor",k:"クリニック"},{l:"ジム・フィットネス",t:"gym",k:""},
      {l:"スポーツ施設",t:"stadium",k:"スポーツ施設 球場"},{l:"プール",t:"swimming_pool",k:""},{l:"美容室",t:"hair_salon",k:""},
      {l:"ネイル・エステ",t:"nail_salon",k:"エステ"},{l:"歯科",t:"dentist",k:""},{l:"駅",t:"train_station",k:""},
      {l:"空港",t:"airport",k:""},{l:"駐車場",t:"parking",k:""},{l:"ガソリンスタンド",t:"gas_station",k:""},
    ];

    const DENSITY = {low:{r:3000,s:0.04},mid:{r:1500,s:0.02},high:{r:800,s:0.01}};

    // カテゴリチップを生成
    let activeChips = new Set();
    const chipsEl = document.getElementById('chips');
    if (chipsEl) {
      function updCC() { const el = document.getElementById('catCount'); if(el) el.textContent = activeChips.size + ' / ' + CATS.length + ' 選択中'; }
      window.chipAll = function(v) { const bs = chipsEl.querySelectorAll('.chip'); if(v){CATS.forEach((_,i)=>activeChips.add(i));bs.forEach(b=>b.classList.add('on'));}else{activeChips.clear();bs.forEach(b=>b.classList.remove('on'));}updCC(); };
      CATS.forEach((c,i) => {
        const b = document.createElement('button'); b.className = 'chip'; b.textContent = c.l; b.type = 'button';
        b.onclick = () => { activeChips.has(i)?(activeChips.delete(i),b.classList.remove('on')):(activeChips.add(i),b.classList.add('on')); updCC(); };
        chipsEl.appendChild(b);
      });
      updCC();
    }

    function coordToBounds(lat,lng,r){const d=r/111000,dL=d/Math.cos(lat*Math.PI/180);return{north:lat+d,south:lat-d,east:lng+dL,west:lng-dL};}
    function getAreaBounds(name){if(CITY_COORDS[name]){const[lat,lng]=CITY_COORDS[name];const isPref=name.endsWith('都')||name.endsWith('道')||name.endsWith('府')||name.endsWith('県');const r=isPref?80000:name.endsWith('区')?3000:10000;return coordToBounds(lat,lng,r);}return null;}

    function fmtN(n){return n>=10000?(n/10000).toFixed(n%10000===0?0:1)+'万':n.toLocaleString('ja-JP');}
    function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
    function setProg(p,l){document.getElementById('pbw').classList.add('show');document.getElementById('pl').classList.add('show');document.getElementById('pf').style.width=p+'%';document.getElementById('pl').textContent=l;}
    function hideProg(){document.getElementById('pbw').classList.remove('show');document.getElementById('pl').classList.remove('show');}

    let srchRes = [], aborted = false;

    window.doSearch = async function() {
      const pref = document.getElementById('sPref').value;
      const selCities = window.getSelCities ? window.getSelCities() : [];
      const minRev = parseInt(document.getElementById('minRev').value) || 0;
      const {r:radius,s:step} = DENSITY[document.getElementById('density').value];
      const cats = [...activeChips].map(i => CATS[i]);
      if (!pref) { alert('都道府県を選択してください'); return; }
      if (!cats.length) { alert('カテゴリを選択してください'); return; }
      const areaNames = selCities.length > 0 ? selCities : [pref];
      const btn = document.getElementById('btnSearch');
      btn.disabled = true; btn.textContent = '⏳ スキャン中...';
      document.getElementById('resSection').style.display = 'none';
      setProg(0, 'エリア座標を取得中...'); srchRes = []; aborted = false;
      const seen = new Set(); const ptSet = new Set(); const gridPts = [];
      for (const name of areaNames) { const b = getAreaBounds(name); if(!b) continue; for(let la=b.south;la<=b.north+step;la+=step){for(let lo=b.west;lo<=b.east+step;lo+=step){const k=(+la.toFixed(4))+','+(+lo.toFixed(4));if(!ptSet.has(k)){ptSet.add(k);gridPts.push({lat:Math.min(la,b.north),lng:Math.min(lo,b.east)});}}}}
      if (!gridPts.length) { alert('エリアの座標が見つかりませんでした'); btn.disabled=false; btn.textContent='🔍 スキャン開始'; hideProg(); return; }
      function matchArea(addr){return selCities.length>0?selCities.some(c=>addr.includes(c)):addr.includes(pref);}
      const total = gridPts.length * cats.length; let done = 0;
      for (const cat of cats) {
        if (aborted) break;
        for (const pt of gridPts) {
          if (aborted) break;
          try {
            const body = {includedTypes:[cat.t],locationRestriction:{circle:{center:{latitude:pt.lat,longitude:pt.lng},radius}},languageCode:'ja',maxResultCount:20};
            if (cat.k) body.textQuery = cat.k;
            const res = await fetch('/api/places', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
            const data = await res.json();
            if (data.error) { alert('APIエラー: '+(data.error.message||data.error.status)); aborted=true; break; }
            (data.places||[]).forEach(pl => {
              if(seen.has(pl.id))return; seen.add(pl.id);
              const cnt=pl.userRatingCount||0; if(cnt<minRev)return;
              const addr=pl.formattedAddress||''; if(!matchArea(addr))return;
              const mc=selCities.find(c=>addr.includes(c))||null;
              srchRes.push({id:pl.id,name:pl.displayName?.text||'不明',count:cnt,rating:pl.rating?Math.round(pl.rating*10)/10:null,address:addr,type:pl.primaryTypeDisplayName?.text||'',pref,city:mc,lat:pl.location?.latitude||null,lng:pl.location?.longitude||null});
            });
          } catch(e) {}
          done++; setProg(Math.round(done/total*100), Math.round(done/total*100)+'% — '+cat.l+' ('+srchRes.length+'件発見)');
          await new Promise(r => setTimeout(r, 80));
        }
      }
      hideProg(); btn.disabled=false; btn.textContent='🔍 スキャン開始';
      if (!srchRes.length) { showToast('結果が0件でした','err'); return; }
      srchRes.sort((a,b)=>b.count-a.count); renderRes();
    };

    function renderRes() {
      document.getElementById('resSection').style.display='block';
      document.getElementById('resTitle').textContent='スキャン結果 '+srchRes.length+'件（レビュー数順）';
      document.getElementById('resList').innerHTML=srchRes.map((p,i)=>'<div class="ri"><input type="checkbox" id="rc'+i+'" checked onchange="window.updSel()"><label for="rc'+i+'" style="flex:1;min-width:0;cursor:pointer"><div class="rn">'+esc(p.name)+'</div><div class="rsb">'+(p.rating?'★'+p.rating+' · ':'')+' <span style="color:var(--accent)">'+p.count.toLocaleString()+'件</span> · '+esc(p.address)+'</div></label><div class="rc">'+fmtN(p.count)+'</div></div>').join('');
      window.updSel();
    }
    window.updSel = function(){const t=srchRes.length,c=document.querySelectorAll('#resList input:checked').length;document.getElementById('selInfo').textContent=c+' / '+t+' 件選択中';};
    window.ckAll = function(v){document.querySelectorAll('#resList input[type=checkbox]').forEach(c=>c.checked=v);window.updSel();};
    window.importSel = function(){let added=0;document.querySelectorAll('#resList input[type=checkbox]').forEach((c,i)=>{if(c.checked&&srchRes[i]){pushPlace(srchRes[i]);added++;}});document.getElementById('resSection').style.display='none';srchRes=[];showToast(added+'件追加しました','ok');};

    let places=[], sortMode='r', aPref=null, aCity=null, curView='list';
    function pushPlace(p){places.push({uid:Date.now()+Math.random(),...p});render();}
    window.delPlace = function(uid){places=places.filter(p=>p.uid!==uid);render();};
    window.setSort = function(m){sortMode=m;['sR','sRt','sN'].forEach(id=>document.getElementById(id).classList.remove('active'));document.getElementById(m==='r'?'sR':m==='rt'?'sRt':'sN').classList.add('active');render();};
    function getSorted(list){const a=[...list];if(sortMode==='r')return a.sort((x,y)=>y.count-x.count);if(sortMode==='rt')return a.sort((x,y)=>(y.rating||0)-(x.rating||0)||y.count-x.count);return a.sort((x,y)=>x.name.localeCompare(y.name,'ja'));}
    function setP(p){aPref=p;aCity=null;render();}
    function setC(c){aCity=c;render();}
    window.clearAll = function(){if(!confirm('全件削除しますか？'))return;places=[];aPref=null;aCity=null;render();};
    window.switchView = function(v){curView=v;document.getElementById('tabList').classList.toggle('active',v==='list');document.getElementById('tabMap').classList.toggle('active',v==='map');document.getElementById('rankList').style.display=v==='list'?'flex':'none';document.getElementById('mapWrap').style.display=v==='map'?'flex':'none';};
    const medals=['🥇','🥈','🥉'];

    function render(){
      const prefs=[...new Set(places.map(p=>p.pref).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'ja'));
      const cities=aPref?[...new Set(places.filter(p=>p.pref===aPref).map(p=>p.city).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'ja')):[];
      const fp=document.getElementById('filterPanel');
      if(!prefs.length){fp.style.display='none';aPref=null;aCity=null;}
      else{fp.style.display='block';if(aPref&&!prefs.includes(aPref)){aPref=null;aCity=null;}if(aCity&&!cities.includes(aCity))aCity=null;
        document.getElementById('tagsPref').innerHTML=[null,...prefs].map(r=>{const cnt=r?places.filter(p=>p.pref===r).length:places.length;return'<button class="ftag'+(aPref===r?' ap':'')+'" onclick="('+setP.toString()+')('+(r?'\''+esc(r)+'\'':null)+')">'+(r||'すべて')+' '+cnt+'</button>';}).join('');
        const fc=document.getElementById('fcRow');
        if(aPref&&cities.length){fc.style.display='flex';document.getElementById('tagsCity').innerHTML=[null,...cities].map(c=>{const cnt=c?places.filter(p=>p.pref===aPref&&p.city===c).length:places.filter(p=>p.pref===aPref).length;return'<button class="ftag'+(aCity===c?' ac':'')+'" onclick="('+setC.toString()+')('+(c?'\''+esc(c)+'\'':null)+')">'+(c||'すべて')+' '+cnt+'</button>';}).join('');}else fc.style.display='none';
      }
      let filtered=[...places];if(aPref)filtered=filtered.filter(p=>p.pref===aPref);if(aCity)filtered=filtered.filter(p=>p.city===aCity);
      const sorted=getSorted(filtered),maxC=sorted.length?Math.max(...sorted.map(p=>p.count)):1,total=sorted.reduce((s,p)=>s+p.count,0);
      let bc='';if(aPref){bc+=aPref;if(aCity)bc+=' › '+aCity;}
      document.getElementById('totL').textContent=sorted.length+'件'+(bc?' ('+bc+')':'');
      document.getElementById('totR').textContent=sorted.length?'合計 '+total.toLocaleString()+' レビュー':'';
      const list=document.getElementById('rankList');
      if(!sorted.length){list.innerHTML='<li class="empty">スキャンを実行してランキングを作成してください 🔍</li>';}
      else list.innerHTML=sorted.map((p,i)=>{
        const rank=i+1,pct=p.count/maxC*100,ss=p.rating?'★'.repeat(Math.round(p.rating))+'☆'.repeat(5-Math.round(p.rating))+' '+p.rating:'─',badge=rank<=3?medals[rank-1]:rank;
        const gc=rank===1?'var(--gold)':rank===2?'var(--silver)':rank===3?'var(--bronze)':'var(--mut2)';
        const tp=p.pref?'<span class="tag p">'+esc(p.pref)+'</span>':'',tc=p.city?'<span class="tag c">'+esc(p.city)+'</span>':'',tt=p.type?'<span class="tag t">'+esc(p.type)+'</span>':'';
        return'<li class="ri2 '+(rank<=3?'r'+rank:'')+'" style="animation-delay:'+Math.min(i,.3)*.03+'s"><div class="bfl" style="width:'+pct+'%"></div><div class="rbg" style="color:'+gc+(rank===1?';text-shadow:0 0 12px rgba(245,200,66,.4)':'')+'">'+badge+'</div><div class="rif"><div class="rnm">'+esc(p.name)+'</div><div class="rmt"><span class="rst">'+ss+'</span>'+tp+tc+tt+'</div></div><div class="rct">'+fmtN(p.count)+'<small>reviews</small></div><button class="bdl" onclick="window.delPlace('+JSON.stringify(p.uid)+')">✕</button></li>';
      }).join('');
      window.switchView(curView);
    }

    let toastT;
    function showToast(msg,type){const el=document.getElementById('toast');el.textContent=msg;el.className='toast show'+(type?' '+type:'');clearTimeout(toastT);toastT=setTimeout(()=>el.classList.remove('show'),3000);}

    render();
    window.switchView('list');
  }, []);

  return null;
}
