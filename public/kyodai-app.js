/* =========================================================
   KYODAI — Datos de catálogo (Edición 2026, precios mayoristas)
   ========================================================= */
const SECTIONS = [
  { id:'proteinas',   label:'Proteínas',         jp:'力', tagline:'La base de la reconstrucción.' },
  { id:'creatinas',   label:'Creatinas',         jp:'核', tagline:'Fuerza medible, honesta, sostenida.' },
  { id:'preentrenos', label:'Pre-entrenos',      jp:'火', tagline:'La chispa antes del silencio.' },
  { id:'aminoacidos', label:'Aminoácidos',       jp:'流', tagline:'Recuperación entre batallas.' },
  { id:'quemadores',  label:'Quemadores',        jp:'刃', tagline:'Definición sin atajos.' },
  { id:'salud',       label:'Vitaminas & Salud', jp:'守', tagline:'El cuerpo se cuida entre hermanos.' },
  { id:'otros',       label:'Complementos',      jp:'道', tagline:'Cada detalle del camino.' },
];
const SECTION_JP = Object.fromEntries(SECTIONS.map(s=>[s.id,s.jp]));

const PRODUCTS = [{"brand":"BSN","name":"PROTEIN CRISP BAR","section":"proteinas","sub":"Barra de proteína","variants":[{"pres":"Unidad","price":15900}],"id":"proteinas-1"},{"brand":"Dymatize","name":"ELITE CASEIN","section":"proteinas","sub":"Caseína","variants":[{"pres":"2 Libras","price":306900},{"pres":"4 Libras","price":528900}],"id":"proteinas-2"},{"brand":"Dymatize","name":"SUPER MASS GAINER","section":"proteinas","sub":"Gainer","variants":[{"pres":"6 Libras","price":260900},{"pres":"12 Libras","price":468900}],"id":"proteinas-3"},{"brand":"Fit Mafia","name":"VIGA","section":"proteinas","sub":"Gainer","variants":[{"pres":"2 Libras","price":71900},{"pres":"7 Libras","price":219900}],"id":"proteinas-4"},{"brand":"GMN","name":"MEGA GAINER","section":"proteinas","sub":"Gainer","variants":[{"pres":"2 Libras","price":77900},{"pres":"5 Libras","price":168900},{"pres":"10 Libras","price":288900}],"id":"proteinas-5"},{"brand":"GMN","name":"SUPER MEGA GAINER","section":"proteinas","sub":"Gainer","variants":[{"pres":"2 Libras","price":72900},{"pres":"5 Libras","price":153900},{"pres":"10 Libras","price":263900}],"id":"proteinas-6"},{"brand":"Healthy Sports","name":"BARBARUS","section":"proteinas","sub":"Gainer","variants":[{"pres":"2 Libras","price":168900},{"pres":"4 Libras","price":287900}],"id":"proteinas-7"},{"brand":"IMN Nutrition","name":"WHEY OF GAIN","section":"proteinas","sub":"Gainer","variants":[{"pres":"3 Libras","price":113900},{"pres":"6 Libras","price":197900}],"id":"proteinas-8"},{"brand":"MuscleMeds","name":"CARNIVOR MASS","section":"proteinas","sub":"Gainer de res","variants":[{"pres":"6 Libras","price":360900},{"pres":"10 Libras","price":543900},{"pres":"15 Libras","price":665900}],"id":"proteinas-9"},{"brand":"MuscleTech","name":"MASSTECH","section":"proteinas","sub":"Gainer","variants":[{"pres":"6 Libras","price":260900},{"pres":"12 Libras","price":501900},{"pres":"20 Libras","price":683900}],"id":"proteinas-10"},{"brand":"Nuspro","name":"SOYBIG","section":"proteinas","sub":"Gainer vegetal","variants":[{"pres":"4 Libras","price":110900}],"id":"proteinas-11"},{"brand":"Nutramerican-Megaplex","name":"BIPRO MASS","section":"proteinas","sub":"Gainer","variants":[{"pres":"3 Libras","price":229900}],"id":"proteinas-12"},{"brand":"Nutramerican-Megaplex","name":"MEGAPLEX CREATINE POWER","section":"proteinas","sub":"Gainer + creatina","variants":[{"pres":"2 Libras","price":75900},{"pres":"10 Libras","price":262900}],"id":"proteinas-13"},{"brand":"Optimum Nutrition","name":"SERIOUS MASS","section":"proteinas","sub":"Gainer","variants":[{"pres":"6 Libras","price":272900},{"pres":"12 Libras","price":443900}],"badge":"Más vendido","id":"proteinas-14"},{"brand":"ProScience","name":"SMART GAINER","section":"proteinas","sub":"Gainer","variants":[{"pres":"3 Libras","price":91900},{"pres":"6 Libras","price":162900},{"pres":"13 Libras","price":301900}],"id":"proteinas-15"},{"brand":"Smart Muscle","name":"PROTON + GAINER","section":"proteinas","sub":"Gainer","variants":[{"pres":"3 Libras","price":92900},{"pres":"6 Libras","price":170900}],"id":"proteinas-16"},{"brand":"Smart Nutrition","name":"MASS EVOLUTION","section":"proteinas","sub":"Gainer","variants":[{"pres":"2 Libras","price":52900},{"pres":"4 Libras","price":86900},{"pres":"10 Libras","price":182900}],"id":"proteinas-17"},{"brand":"Supra","name":"GAINER","section":"proteinas","sub":"Gainer","variants":[{"pres":"4 Libras","price":129900}],"id":"proteinas-18"},{"brand":"Supra","name":"MASS GAINER","section":"proteinas","sub":"Gainer","variants":[{"pres":"2 Libras","price":71900},{"pres":"5 Libras","price":128900}],"id":"proteinas-19"},{"brand":"TNT Neopharma","name":"TNT MEGA MASS","section":"proteinas","sub":"Gainer","variants":[{"pres":"3 Libras","price":92900},{"pres":"6 Libras","price":171900},{"pres":"10 Libras","price":276900}],"id":"proteinas-20"},{"brand":"Vitanas","name":"TITAN ARMY","section":"proteinas","sub":"Gainer","variants":[{"pres":"2 Libras","price":58900},{"pres":"5 Libras","price":133900},{"pres":"12 Libras","price":251900}],"id":"proteinas-21"},{"brand":"MuscleMeds","name":"CARNIVOR","section":"proteinas","sub":"Proteína de res","variants":[{"pres":"2 Libras","price":219900},{"pres":"4 Libras","price":390900},{"pres":"8 Libras","price":626900}],"id":"proteinas-22"},{"brand":"Vitanas","name":"TITAN BEEF MASS","section":"proteinas","sub":"Gainer de res","variants":[{"pres":"2 Libras","price":60900},{"pres":"5 Libras","price":142900}],"id":"proteinas-23"},{"brand":"BSN","name":"SYNTHA 6","section":"proteinas","sub":"Proteína de mezcla","variants":[{"pres":"5 Libras","price":373900},{"pres":"10 Libras","price":744900}],"badge":"Más vendido","id":"proteinas-24"},{"brand":"Dymatize","name":"ELITE WHEY","section":"proteinas","sub":"Whey","variants":[{"pres":"5 Libras","price":411900}],"id":"proteinas-25"},{"brand":"Dymatize","name":"ISO 100","section":"proteinas","sub":"Whey aislada","variants":[{"pres":"1,3 Libras","price":243900},{"pres":"3 Libras","price":430900},{"pres":"5 Libras","price":594900}],"badge":"Más vendido","id":"proteinas-26"},{"brand":"Fit Mafia","name":"LA WEY","section":"proteinas","sub":"Whey","variants":[{"pres":"26 Servicios","price":134900}],"id":"proteinas-27"},{"brand":"GMN","name":"BE ONE","section":"proteinas","sub":"Whey","variants":[{"pres":"2 Libras","price":210900},{"pres":"3 Libras","price":291900}],"id":"proteinas-28"},{"brand":"GMN","name":"BODY RIPPED","section":"proteinas","sub":"Whey definición","variants":[{"pres":"2 Libras","price":119900}],"id":"proteinas-29"},{"brand":"GMN","name":"NITRO MASS","section":"proteinas","sub":"Whey","variants":[{"pres":"2 Libras","price":117900},{"pres":"5 Libras","price":261900}],"id":"proteinas-30"},{"brand":"Healthy Sports","name":"ISO WHEY","section":"proteinas","sub":"Whey aislada","variants":[{"pres":"1 Libra","price":162900},{"pres":"2,1 Libras","price":263900},{"pres":"4,5 Libras","price":465900}],"id":"proteinas-31"},{"brand":"Isopure","name":"ISOPURE","section":"proteinas","sub":"Whey aislada","variants":[{"pres":"3 Libras","price":383900}],"id":"proteinas-32"},{"brand":"MuscleTech","name":"ISO WHEY","section":"proteinas","sub":"Whey aislada","variants":[{"pres":"2 Libras","price":177900},{"pres":"5 Libras","price":456900}],"id":"proteinas-33"},{"brand":"MuscleTech","name":"NITROTECH","section":"proteinas","sub":"Whey","variants":[{"pres":"2 Libras","price":237900},{"pres":"4 Libras","price":383900},{"pres":"10 Libras","price":725900}],"badge":"Más vendido","id":"proteinas-34"},{"brand":"MuscleTech","name":"NITROTECH 100% WHEY GOLD","section":"proteinas","sub":"Whey","variants":[{"pres":"2 Libras","price":221900},{"pres":"5 Libras","price":421900}],"id":"proteinas-35"},{"brand":"MuscleTech","name":"NITROTECH RIPPED","section":"proteinas","sub":"Whey definición","variants":[{"pres":"4 Libras","price":357900}],"id":"proteinas-36"},{"brand":"Nuspro","name":"SOYPRO ISOLATE","section":"proteinas","sub":"Proteína vegetal","variants":[{"pres":"2,2 Libras","price":129900}],"id":"proteinas-37"},{"brand":"Nuspro","name":"WHEY GOLD","section":"proteinas","sub":"Whey","variants":[{"pres":"3 Libras","price":183900}],"id":"proteinas-38"},{"brand":"Nutramerican-Megaplex","name":"BIPRO CLASSIC","section":"proteinas","sub":"Whey","variants":[{"pres":"1 Libra","price":111900},{"pres":"2 Libras","price":219900},{"pres":"3 Libras","price":267900}],"id":"proteinas-39"},{"brand":"Nutramerican-Megaplex","name":"BIPRO CLASSIC CAJA","section":"proteinas","sub":"Whey en sobres","variants":[{"pres":"18 Servicios","price":95900}],"id":"proteinas-40"},{"brand":"Nutramerican-Megaplex","name":"BIPRO LITE","section":"proteinas","sub":"Whey ligera","variants":[{"pres":"2,4 Libras","price":186900}],"id":"proteinas-41"},{"brand":"Nutramerican-Megaplex","name":"BIPRO RIPPED","section":"proteinas","sub":"Whey definición","variants":[{"pres":"2,4 Libras","price":186900}],"id":"proteinas-42"},{"brand":"Nutramerican-Megaplex","name":"ISO CLEAN","section":"proteinas","sub":"Whey aislada","variants":[{"pres":"2 Libras","price":186900}],"id":"proteinas-43"},{"brand":"Optimum Nutrition","name":"100% WHEY GOLD STANDARD","section":"proteinas","sub":"Whey","variants":[{"pres":"2 Libras","price":239900},{"pres":"5 Libras","price":441900},{"pres":"10 Libras","price":930900}],"badge":"Más vendido","id":"proteinas-44"},{"brand":"Optimum Nutrition","name":"GOLD STANDARD ISOLATE","section":"proteinas","sub":"Whey aislada","variants":[{"pres":"3 Libras","price":397900},{"pres":"5 Libras","price":632900}],"id":"proteinas-45"},{"brand":"ProScience","name":"BEST PROTEIN","section":"proteinas","sub":"Whey","variants":[{"pres":"1 Libra","price":104900},{"pres":"2 Libras","price":195900},{"pres":"4 Libras","price":354900}],"id":"proteinas-46"},{"brand":"ProScience","name":"BEST WHEY","section":"proteinas","sub":"Whey","variants":[{"pres":"2 Libras","price":147900}],"id":"proteinas-47"},{"brand":"ProScience","name":"ISO BEST","section":"proteinas","sub":"Whey aislada","variants":[{"pres":"2 Libras","price":205900}],"id":"proteinas-48"},{"brand":"ProScience","name":"SACHET BEST PROTEIN","section":"proteinas","sub":"Whey en sobre","variants":[{"pres":"Unidad","price":9900}],"id":"proteinas-49"},{"brand":"Smart Muscle","name":"PROTON WHEY","section":"proteinas","sub":"Whey","variants":[{"pres":"2 Libras","price":170900},{"pres":"4 Libras","price":306900}],"id":"proteinas-50"},{"brand":"Smart Nutrition","name":"WHEY PURE","section":"proteinas","sub":"Whey","variants":[{"pres":"1 Libra","price":102900},{"pres":"2 Libras","price":173900},{"pres":"5 Libras","price":397900}],"id":"proteinas-51"},{"brand":"Supra","name":"ISO WHEY","section":"proteinas","sub":"Whey aislada","variants":[{"pres":"2 Libras","price":215900},{"pres":"5 Libras","price":416900}],"id":"proteinas-52"},{"brand":"Supra","name":"WHEY PLATINUM","section":"proteinas","sub":"Whey","variants":[{"pres":"3 Libras","price":203900},{"pres":"5 Libras","price":281900}],"id":"proteinas-53"},{"brand":"Supra","name":"WHEY PRO","section":"proteinas","sub":"Whey","variants":[{"pres":"2 Libras","price":188900},{"pres":"5 Libras","price":375900}],"id":"proteinas-54"},{"brand":"Supra","name":"WHEY PRO-F","section":"proteinas","sub":"Whey","variants":[{"pres":"2 Libras","price":188900}],"id":"proteinas-55"},{"brand":"TNT Neopharma","name":"HIGH STANDARD WHEY","section":"proteinas","sub":"Whey","variants":[{"pres":"3 Libras","price":212900}],"id":"proteinas-56"},{"brand":"TNT Neopharma","name":"ISO FIT","section":"proteinas","sub":"Whey aislada","variants":[{"pres":"2 Libras","price":195900},{"pres":"4 Libras","price":356900}],"id":"proteinas-57"},{"brand":"Vitanas","name":"ISOLATE GOURMET","section":"proteinas","sub":"Whey aislada","variants":[{"pres":"2 Libras","price":224900},{"pres":"5 Libras","price":455900}],"id":"proteinas-58"},{"brand":"Vitanas","name":"WHEY ELITE","section":"proteinas","sub":"Whey","variants":[{"pres":"2 Libras","price":171900},{"pres":"5 Libras","price":354900}],"id":"proteinas-59"},{"brand":"Nutramerican-Megaplex","name":"NUTRA VEGAN PROTEIN","section":"proteinas","sub":"Proteína vegana","variants":[{"pres":"400 Gramos","price":66900}],"id":"proteinas-60"},{"brand":"ProScience","name":"BEST VEGAN","section":"proteinas","sub":"Proteína vegana","variants":[{"pres":"2 Libras","price":118900}],"id":"proteinas-61"},{"brand":"Supra","name":"VEGAN PROTEIN","section":"proteinas","sub":"Proteína vegana","variants":[{"pres":"2 Libras","price":153900}],"id":"proteinas-62"},{"brand":"Dynamic","name":"CREATINA CR7INE","section":"creatinas","sub":"Monohidrato","variants":[{"pres":"450 Gramos","price":73900}],"id":"creatinas-1"},{"brand":"Fit Mafia","name":"LEGEND","section":"creatinas","sub":"Creatina","variants":[{"pres":"30 Servicios","price":89900},{"pres":"50 Servicios","price":140900}],"id":"creatinas-2"},{"brand":"Fit Mafia","name":"SHAKER MICRODOSIS","section":"creatinas","sub":"Accesorio","variants":[{"pres":"Unidad","price":69900}],"id":"creatinas-3"},{"brand":"GMN","name":"CREATINA MONOHIDRATO","section":"creatinas","sub":"Monohidrato","variants":[{"pres":"300 Gramos","price":97900}],"id":"creatinas-4"},{"brand":"Healthy Sports","name":"CREATINE MONOHYDRATE","section":"creatinas","sub":"Monohidrato","variants":[{"pres":"150 Gramos","price":71900},{"pres":"300 Gramos","price":119900}],"id":"creatinas-5"},{"brand":"IMN Nutrition","name":"CREATINE","section":"creatinas","sub":"Monohidrato","variants":[{"pres":"50 Servicios","price":55900},{"pres":"133 Servicios","price":128900}],"id":"creatinas-6"},{"brand":"MuscleTech","name":"CELLTECH","section":"creatinas","sub":"Creatina + carbos","variants":[{"pres":"3 Libras","price":204900},{"pres":"6 Libras","price":313900}],"id":"creatinas-7"},{"brand":"MuscleTech","name":"CREATINA PLATINUM","section":"creatinas","sub":"Monohidrato","variants":[{"pres":"400 Gramos","price":157900}],"id":"creatinas-8"},{"brand":"Nutramerican-Megaplex","name":"CAJA CREA STACK","section":"creatinas","sub":"Creatina en sobres","variants":[{"pres":"25 Unidades","price":123900}],"id":"creatinas-9"},{"brand":"Nutramerican-Megaplex","name":"CREA STACK","section":"creatinas","sub":"Creatina","variants":[{"pres":"60 Servicios","price":143900}],"id":"creatinas-10"},{"brand":"Nutrex","name":"CREATINE","section":"creatinas","sub":"Monohidrato","variants":[{"pres":"300 Gramos","price":87900}],"id":"creatinas-11"},{"brand":"Optimum Nutrition","name":"CREATINE","section":"creatinas","sub":"Monohidrato","variants":[{"pres":"300 Gramos","price":133900},{"pres":"600 Gramos","price":191900}],"badge":"Más vendido","id":"creatinas-12"},{"brand":"ProScience","name":"LEGACY","section":"creatinas","sub":"Creatina","variants":[{"pres":"30 Servicios","price":80900},{"pres":"50 Servicios","price":117900}],"id":"creatinas-13"},{"brand":"ProScience","name":"LEGACY PLUS","section":"creatinas","sub":"Creatina","variants":[{"pres":"30 Servicios","price":90900},{"pres":"50 Servicios","price":114900}],"id":"creatinas-14"},{"brand":"Smart Muscle","name":"ATOMIC","section":"creatinas","sub":"Creatina","variants":[{"pres":"30 Servicios","price":97900}],"id":"creatinas-15"},{"brand":"Smart Muscle","name":"ATOMIC MONOHIDRATO","section":"creatinas","sub":"Monohidrato","variants":[{"pres":"60 Servicios","price":123900}],"id":"creatinas-16"},{"brand":"Smart Muscle","name":"ATOMIC X SACHETS","section":"creatinas","sub":"Creatina en sobres","variants":[{"pres":"30 Servicios","price":114900}],"id":"creatinas-17"},{"brand":"Supra","name":"CRE HCL","section":"creatinas","sub":"Creatina HCL","variants":[{"pres":"150 Gramos","price":41900}],"id":"creatinas-18"},{"brand":"Supra","name":"CRE MONOHIDRATADA","section":"creatinas","sub":"Monohidrato","variants":[{"pres":"300 Gramos","price":44900},{"pres":"600 Gramos","price":92900}],"id":"creatinas-19"},{"brand":"TNT Neopharma","name":"CREA-TINE COMPLEX","section":"creatinas","sub":"Creatina","variants":[{"pres":"450 Gramos","price":95900}],"id":"creatinas-20"},{"brand":"TNT Neopharma","name":"CREATINA TNT INSTINCT","section":"creatinas","sub":"Monohidrato","variants":[{"pres":"240 Gramos","price":48900},{"pres":"480 Gramos","price":78900}],"id":"creatinas-21"},{"brand":"Vitanas","name":"CAJA CREAKORE","section":"creatinas","sub":"Creatina en sobres","variants":[{"pres":"30 Servicios","price":115900}],"id":"creatinas-22"},{"brand":"Vitanas","name":"CREATINA","section":"creatinas","sub":"Monohidrato","variants":[{"pres":"150 Gramos","price":64900}],"id":"creatinas-23"},{"brand":"Vitanas","name":"CREATINE","section":"creatinas","sub":"Monohidrato","variants":[{"pres":"300 Gramos","price":90900}],"id":"creatinas-24"},{"brand":"MuscleTech","name":"CELLTECH CREACTOR","section":"creatinas","sub":"Creatina HCL","variants":[{"pres":"120 Servicios","price":157900}],"id":"creatinas-25"},{"brand":"IMN Nutrition","name":"INSANITY","section":"preentrenos","sub":"Pre-entreno","variants":[{"pres":"30 Servicios","price":117900}],"id":"preentrenos-1"},{"brand":"Nutramerican-Megaplex","name":"NITRO SHOCK","section":"preentrenos","sub":"Pre-entreno","variants":[{"pres":"22 Servicios","price":111900}],"id":"preentrenos-2"},{"brand":"Nutramerican-Megaplex","name":"RADICAL POWER","section":"preentrenos","sub":"Pre-entreno","variants":[{"pres":"18 Unidades","price":100900}],"id":"preentrenos-3"},{"brand":"Smart Nutrition","name":"PUMP-NOX EDGE","section":"preentrenos","sub":"Pre-entreno","variants":[{"pres":"30 Servicios","price":104900}],"id":"preentrenos-4"},{"brand":"TNT Neopharma","name":"PARANOIA","section":"preentrenos","sub":"Pre-entreno","variants":[{"pres":"30 Servicios","price":118900}],"id":"preentrenos-5"},{"brand":"BSN","name":"NO XPLODE","section":"preentrenos","sub":"Pre-entreno","variants":[{"pres":"30 Servicios","price":181900},{"pres":"60 Servicios","price":310900}],"id":"preentrenos-6"},{"brand":"Cellucor","name":"C4 ORIGINAL","section":"preentrenos","sub":"Pre-entreno","variants":[{"pres":"30 Servicios","price":171900},{"pres":"60 Servicios","price":239900}],"badge":"Más vendido","id":"preentrenos-7"},{"brand":"Cellucor","name":"C4 RIPPED","section":"preentrenos","sub":"Pre-entreno definición","variants":[{"pres":"30 Servicios","price":143900}],"id":"preentrenos-8"},{"brand":"Cellucor","name":"LATA C4 ORIGINAL","section":"preentrenos","sub":"Bebida lista","variants":[{"pres":"Unidad","price":15900}],"id":"preentrenos-9"},{"brand":"Fit Mafia","name":"PASE","section":"preentrenos","sub":"Pre-entreno","variants":[{"pres":"30 Servicios","price":117900}],"id":"preentrenos-10"},{"brand":"Healthy Sports","name":"BETA ALANINA 3200 MG","section":"preentrenos","sub":"Beta alanina","variants":[{"pres":"120 Cápsulas","price":86900}],"id":"preentrenos-11"},{"brand":"Healthy Sports","name":"NUCLEAR","section":"preentrenos","sub":"Pre-entreno","variants":[{"pres":"180 Gramos","price":109900},{"pres":"360 Gramos","price":185900}],"id":"preentrenos-12"},{"brand":"IMN Nutrition","name":"ULTIMATE","section":"preentrenos","sub":"Pre-entreno","variants":[{"pres":"30 Servicios","price":139900}],"id":"preentrenos-13"},{"brand":"Nutramerican-Megaplex","name":"ENERGY X","section":"preentrenos","sub":"Energizante","variants":[{"pres":"25 Sobres","price":37900}],"id":"preentrenos-14"},{"brand":"Nutramerican-Megaplex","name":"LATA MYTH","section":"preentrenos","sub":"Bebida lista","variants":[{"pres":"Unidad","price":9900}],"id":"preentrenos-15"},{"brand":"ProScience","name":"INTENZE","section":"preentrenos","sub":"Pre-entreno","variants":[{"pres":"14 Servicios","price":71900},{"pres":"30 Servicios","price":133900}],"id":"preentrenos-16"},{"brand":"ProScience","name":"INTENZE SACHET","section":"preentrenos","sub":"Pre-entreno en sobre","variants":[{"pres":"Unidad","price":6900}],"id":"preentrenos-17"},{"brand":"ProScience","name":"LATA INTENZE READY","section":"preentrenos","sub":"Bebida lista","variants":[{"pres":"Unidad","price":10900}],"id":"preentrenos-18"},{"brand":"ProScience","name":"LATA INTENZE VITALITY","section":"preentrenos","sub":"Bebida lista","variants":[{"pres":"Unidad","price":10900}],"id":"preentrenos-19"},{"brand":"Smart Muscle","name":"ELECTRON","section":"preentrenos","sub":"Pre-entreno","variants":[{"pres":"30 Servicios","price":134900}],"id":"preentrenos-20"},{"brand":"Smart Muscle","name":"ELECTRON X SACHETS","section":"preentrenos","sub":"Pre-entreno en sobres","variants":[{"pres":"30 Servicios","price":149900}],"id":"preentrenos-21"},{"brand":"Supra","name":"ENERGY BRUN","section":"preentrenos","sub":"Pre-entreno","variants":[{"pres":"330 Gramos","price":117900}],"id":"preentrenos-22"},{"brand":"Supra","name":"PRE ENERGY","section":"preentrenos","sub":"Pre-entreno","variants":[{"pres":"150 Gramos","price":41900},{"pres":"330 Gramos","price":117900}],"id":"preentrenos-23"},{"brand":"BSN","name":"AMINO X","section":"aminoacidos","sub":"Aminoácidos","variants":[{"pres":"30 Servicios","price":138900},{"pres":"70 Servicios","price":293900}],"id":"aminoacidos-1"},{"brand":"Fit Mafia","name":"COYOTE","section":"aminoacidos","sub":"Aminoácidos","variants":[{"pres":"50 Servicios","price":69900}],"id":"aminoacidos-2"},{"brand":"Fit Mafia","name":"COYOTE LIQUIDO","section":"aminoacidos","sub":"Bebida lista","variants":[{"pres":"Unidad","price":8900}],"id":"aminoacidos-3"},{"brand":"GMN","name":"AMINO POWDER","section":"aminoacidos","sub":"Aminoácidos","variants":[{"pres":"200 Gramos","price":69900}],"id":"aminoacidos-4"},{"brand":"Healthy Sports","name":"BCAA 2400 MG","section":"aminoacidos","sub":"BCAA","variants":[{"pres":"90 Servicios","price":87900}],"id":"aminoacidos-5"},{"brand":"Healthy Sports","name":"BCAA 384 G","section":"aminoacidos","sub":"BCAA","variants":[{"pres":"Unidad","price":171900}],"id":"aminoacidos-6"},{"brand":"IMN Nutrition","name":"BCAA 2:1:1","section":"aminoacidos","sub":"BCAA","variants":[{"pres":"30 Servicios","price":132900}],"id":"aminoacidos-7"},{"brand":"Optimum Nutrition","name":"AMINO ENERGY + HIDRATACIÓN","section":"aminoacidos","sub":"Aminoácidos","variants":[{"pres":"30 Servicios","price":114900}],"id":"aminoacidos-8"},{"brand":"Optimum Nutrition","name":"LATA AMINO ENERGY","section":"aminoacidos","sub":"Bebida lista","variants":[{"pres":"Unidad","price":18900}],"id":"aminoacidos-9"},{"brand":"Smart Nutrition","name":"SMART STACK","section":"aminoacidos","sub":"Aminoácidos","variants":[{"pres":"30 Servicios","price":75900}],"id":"aminoacidos-10"},{"brand":"Supra","name":"AMINO GOLD","section":"aminoacidos","sub":"Aminoácidos","variants":[{"pres":"450 Gramos","price":118900}],"id":"aminoacidos-11"},{"brand":"Supra","name":"BCAA + GLUTAMINA","section":"aminoacidos","sub":"BCAA + glutamina","variants":[{"pres":"330 Gramos","price":90900}],"id":"aminoacidos-12"},{"brand":"TNT Neopharma","name":"AMINO 100","section":"aminoacidos","sub":"Aminoácidos","variants":[{"pres":"450 Gramos","price":123900}],"id":"aminoacidos-13"},{"brand":"Nutramerican-Megaplex","name":"GLUTA STACK","section":"aminoacidos","sub":"Glutamina","variants":[{"pres":"30 Servicios","price":81900}],"id":"aminoacidos-14"},{"brand":"GMN","name":"TERMO ENERGY UP","section":"quemadores","sub":"Termogénico","variants":[{"pres":"25 Unidades","price":53900}],"id":"quemadores-1"},{"brand":"Healthy Sports","name":"L-CARNITINA 1000MG","section":"quemadores","sub":"L-carnitina","variants":[{"pres":"60 Servicios","price":105900}],"id":"quemadores-2"},{"brand":"Healthy Sports","name":"L-CARNITINA LIQUIDA","section":"quemadores","sub":"L-carnitina","variants":[{"pres":"1500 Mg","price":98900},{"pres":"3000 Mg","price":124900}],"id":"quemadores-3"},{"brand":"MuscleTech","name":"HYDROXYCUT ELITE","section":"quemadores","sub":"Termogénico","variants":[{"pres":"100 Cápsulas","price":123900}],"id":"quemadores-4"},{"brand":"Nutramerican-Megaplex","name":"BURNER STACK","section":"quemadores","sub":"Termogénico","variants":[{"pres":"60 Servicios","price":134900}],"id":"quemadores-5"},{"brand":"Nutramerican-Megaplex","name":"CAJA BURNER STACK","section":"quemadores","sub":"Termogénico en sobres","variants":[{"pres":"50 Unidades","price":144900}],"id":"quemadores-6"},{"brand":"Nutramerican-Megaplex","name":"LATA BURNER STACK","section":"quemadores","sub":"Bebida lista","variants":[{"pres":"Unidad","price":9900}],"id":"quemadores-7"},{"brand":"Healthy America","name":"B-COMPLEX + B12","section":"salud","sub":"Vitaminas B","variants":[{"pres":"90 Tabletas","price":60900}],"id":"salud-1"},{"brand":"Healthy America","name":"BIOTINA 900MCG","section":"salud","sub":"Biotina","variants":[{"pres":"30 Tabletas","price":32900},{"pres":"120 Tabletas","price":62900}],"id":"salud-2"},{"brand":"Healthy America","name":"CAL-MAG-ZINC + VD3","section":"salud","sub":"Minerales","variants":[{"pres":"90 Tabletas","price":79900}],"id":"salud-3"},{"brand":"Healthy America","name":"COLAGENO + VITAMINA C","section":"salud","sub":"Colágeno","variants":[{"pres":"60 Tabletas","price":62900},{"pres":"100 Tabletas","price":94900}],"id":"salud-4"},{"brand":"Healthy America","name":"MAX FOR MEN","section":"salud","sub":"Multivitamínico","variants":[{"pres":"60 Tabletas","price":109900}],"id":"salud-5"},{"brand":"Healthy America","name":"MELATONINA 3MG","section":"salud","sub":"Descanso","variants":[{"pres":"120 Tabletas","price":65900}],"id":"salud-6"},{"brand":"Healthy America","name":"OMEGA 3 1200MG","section":"salud","sub":"Omega 3","variants":[{"pres":"60 Tabletas","price":62900},{"pres":"100 Tabletas","price":87900},{"pres":"200 Tabletas","price":149900}],"id":"salud-7"},{"brand":"Healthy America","name":"PICOLINATO DE CROMO 500MG","section":"salud","sub":"Minerales","variants":[{"pres":"100 Cápsulas","price":65900}],"id":"salud-8"},{"brand":"Healthy America","name":"POTASIO 99MG","section":"salud","sub":"Minerales","variants":[{"pres":"60 Cápsulas","price":64900}],"id":"salud-9"},{"brand":"Healthy America","name":"SUPER MAGNESIO","section":"salud","sub":"Magnesio","variants":[{"pres":"100 Cápsulas","price":102900}],"id":"salud-10"},{"brand":"Healthy America","name":"TRIPLE OMEGA 3-6-9","section":"salud","sub":"Omegas","variants":[{"pres":"60 Cápsulas","price":79900},{"pres":"120 Cápsulas","price":120900}],"id":"salud-11"},{"brand":"Healthy America","name":"VITA C 1000MG + ZINC","section":"salud","sub":"Vitamina C","variants":[{"pres":"100 Cápsulas","price":80900}],"id":"salud-12"},{"brand":"Healthy America","name":"VITAMINA D3","section":"salud","sub":"Vitamina D","variants":[{"pres":"100 Cápsulas","price":65900}],"id":"salud-13"},{"brand":"Healthy America","name":"VITAMINA E 1000 IU","section":"salud","sub":"Vitamina E","variants":[{"pres":"60 Cápsulas","price":109900},{"pres":"100 Cápsulas","price":145900}],"id":"salud-14"},{"brand":"IMN Nutrition","name":"MULTIMN","section":"salud","sub":"Multivitamínico","variants":[{"pres":"30 Servicios","price":84900}],"id":"salud-15"},{"brand":"Nutramerican-Megaplex","name":"COLLAGEN STACK","section":"salud","sub":"Colágeno","variants":[{"pres":"585 Gramos","price":125900}],"id":"salud-16"},{"brand":"Nutramerican-Megaplex","name":"NUTRA-C","section":"salud","sub":"Vitamina C","variants":[{"pres":"200 Servicios","price":84900}],"id":"salud-17"},{"brand":"ProScience","name":"OMEGA 3","section":"salud","sub":"Omega 3","variants":[{"pres":"120 Cápsulas","price":68900}],"id":"salud-18"},{"brand":"ProScience","name":"SHIELD","section":"salud","sub":"Defensas","variants":[{"pres":"30 Servicios","price":90900}],"id":"salud-19"},{"brand":"ProScience","name":"THE ONE","section":"salud","sub":"Multivitamínico","variants":[{"pres":"30 Servicios","price":80900}],"id":"salud-20"},{"brand":"Healthy Sports","name":"TEST HD","section":"salud","sub":"Soporte hormonal","variants":[{"pres":"60 Servicios","price":87900}],"id":"salud-21"},{"brand":"Nutramerican-Megaplex","name":"MEGA CARBS","section":"otros","sub":"Carbohidratos","variants":[{"pres":"2 Libras","price":100900}],"id":"otros-1"},{"brand":"Supra","name":"SUPRA CARBS","section":"otros","sub":"Carbohidratos","variants":[{"pres":"20 Servicios","price":137900}],"id":"otros-2"},{"brand":"Supra","name":"PROTEIN PANCAKE","section":"otros","sub":"Alimento proteico","variants":[{"pres":"2 Libras","price":87900}],"id":"otros-3"}];

/* Fotos de producto (opcional): asigna aquí URL de imagen por id de producto.
   Ej: PRODUCT_IMAGES['proteinas-44'] = 'img/gold-standard.jpg';
   Si un producto no tiene foto, se muestra el emblema tipográfico. */
const PRODUCT_IMAGES = {};

/* KITS — combos de varios productos en una sola compra.
   Cada componente referencia un producto por id y el índice de presentación.
   El precio del kit es la suma exacta de sus componentes (se recalcula solo). */
const KITS = [
  { id:'kit-inicio', jp:'始', name:'KIT INICIO', desc:'La base del que empieza en serio.',
    items:[ ['proteinas-44',0], ['creatinas-12',0] ] },
  { id:'kit-volumen', jp:'力', name:'KIT VOLUMEN', desc:'Masa con estructura, no con excusas.',
    items:[ ['proteinas-14',0], ['creatinas-12',0], ['aminoacidos-1',0] ] },
  { id:'kit-fuerza', jp:'核', name:'KIT FUERZA', desc:'Entreno pesado, recuperación honesta.',
    items:[ ['proteinas-34',0], ['preentrenos-7',0], ['creatinas-12',0] ] },
  { id:'kit-definicion', jp:'刃', name:'KIT DEFINICIÓN', desc:'Corte limpio, sin perder lo ganado.',
    items:[ ['proteinas-26',0], ['preentrenos-8',0], ['quemadores-4',0] ] },
  { id:'kit-salud', jp:'守', name:'KIT SALUD', desc:'El mantenimiento del templo.',
    items:[ ['salud-7',1], ['salud-10',0], ['salud-12',0] ] },
];

const WHATSAPP = '573144521946';
const DISCOUNTS = { 'KYODAI_5%':0.05, 'KYODAI_7%':0.07 };
const CITIES = ['Bogotá D.C.','Soacha','Chía','Cajicá','Zipaquirá','Mosquera','Funza','Medellín','Cali','Barranquilla','Cartagena','Bucaramanga','Cúcuta','Pereira','Manizales','Armenia','Ibagué','Villavicencio','Tunja','Santa Marta','Neiva','Pasto','Montería','Valledupar','Otro municipio'];
const SHIPPING_BOGOTA = 9000;

/* =========================================================
   Estado
   ========================================================= */
const state = {
  active:'all', brand:'all', sort:'feat', group:false, q:'',
  sel:{}, cart:{}, added:{}, cartOpen:false,
  step:'cart',                       // cart | address | summary
  disc:{ code:null, rate:0, msg:'', ok:false },
  addr:{ city:'', cityOther:'', dir:'', comp:'', instr:'' },
};
const byId = Object.fromEntries(PRODUCTS.map(p=>[p.id,p]));
const fmt = n => '$' + n.toLocaleString('es-CO');
const prefersReduced = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const kitPrice = k => k.items.reduce((t,[id,vi]) => t + byId[id].variants[vi].price, 0);
const minPrice = p => Math.min(...p.variants.map(v=>v.price));

/* =========================================================
   Render del catálogo
   ========================================================= */
const UI = {};
window.UI = UI;
let io;

function sortItems(list){
  const s = state.sort;
  const arr = [...list];
  if (s==='priceAsc')  arr.sort((a,b)=>minPrice(a)-minPrice(b));
  if (s==='priceDesc') arr.sort((a,b)=>minPrice(b)-minPrice(a));
  if (s==='az')        arr.sort((a,b)=>(a.brand+a.name).localeCompare(b.brand+b.name,'es'));
  if (s==='best')      arr.sort((a,b)=>(b.badge?1:0)-(a.badge?1:0));
  if (s==='feat')      arr.sort((a,b)=>(b.badge?1:0)-(a.badge?1:0)===0 ? 0 : (b.badge?1:0)-(a.badge?1:0));
  return arr;
}

function productCard(p){
  const vi = Math.min(state.sel[p.id] ?? 0, p.variants.length-1);
  const v = p.variants[vi];
  const img = PRODUCT_IMAGES[p.id];
  const tile = img
    ? `<img src="${esc(img)}" alt="${esc(p.brand+' '+p.name)}" loading="lazy">`
    : `<span class="wm">${SECTION_JP[p.section]||'兄'}</span>
       <div class="tb"><div class="b">${esc(p.brand)}</div><div class="n">${esc(p.name)}</div><div class="rule"></div></div>`;
  return `<article class="card" data-card>
    ${p.badge?`<div class="badge">${esc(p.badge)}</div>`:''}
    <div class="tile">${tile}</div>
    <div class="cardBody">
      <div class="cardMeta"><span class="cardBrand">${esc(p.brand)}</span><span class="cardSub">${esc(p.sub)}</span></div>
      <h3 class="cardName">${esc(p.name)}</h3>
      <div class="pills">${p.variants.map((vv,i)=>
        `<button class="pill${i===vi?' on':''}" onclick="UI.pickVar('${p.id}',${i})">${esc(vv.pres)}</button>`).join('')}
      </div>
      <div class="priceRow">
        <div class="priceLbl">Precio</div>
        <div class="priceVal">${fmt(v.price)}</div>
      </div>
      <button class="addBtn${state.added[p.id]?' done':''}" onclick="UI.add('${p.id}')">${state.added[p.id]?'Agregado ✓':'Agregar al pedido'}</button>
    </div>
  </article>`;
}

function kitCard(k){
  const price = kitPrice(k);
  const comps = k.items.map(([id,vi])=>{
    const p = byId[id], v = p.variants[vi];
    return `<div>· <span>${esc(p.brand)} ${esc(p.name)}</span> — ${esc(v.pres)}</div>`;
  }).join('');
  return `<article class="card" data-card>
    <div class="badge">Kit</div>
    <div class="tile kit"><span class="wm">${k.jp}</span>
      <div class="tb"><span class="kitKanji">${k.jp}</span><div class="b" style="margin-top:8px">${esc(k.name)}</div><div class="rule"></div></div>
    </div>
    <div class="cardBody">
      <h3 class="cardName">${esc(k.name)}</h3>
      <div style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:14.5px;color:var(--grey)">${esc(k.desc)}</div>
      <div class="kitList">${comps}</div>
      <div class="priceRow">
        <div class="priceLbl">Precio del kit</div>
        <div class="priceVal">${fmt(price)}</div>
      </div>
      <button class="addBtn${state.added[k.id]?' done':''}" onclick="UI.addKit('${k.id}')">${state.added[k.id]?'Agregado ✓':'Agregar kit al pedido'}</button>
    </div>
  </article>`;
}

function renderTabs(){
  const tabs = [{id:'all',label:'Todos'}, ...SECTIONS, {id:'kits',label:'Kits'}];
  document.getElementById('tabs').innerHTML = tabs.map(t=>
    `<button class="tab${t.id==='kits'?' kits':''}${state.active===t.id?' on':''}" onclick="UI.setTab('${t.id}')">${t.label}</button>`).join('');
}

function renderBrandSel(){
  const brands = [...new Set(PRODUCTS.map(p=>p.brand))].sort((a,b)=>a.localeCompare(b,'es'));
  document.getElementById('brandSel').innerHTML =
    `<option value="all">Todas las marcas</option>` +
    brands.map(b=>`<option value="${esc(b)}"${state.brand===b?' selected':''}>${esc(b)}</option>`).join('');
}

function renderCatalog(){
  const root = document.getElementById('sections');
  const q = state.q.trim().toLowerCase();
  const match = p => (!q || (p.name+' '+p.brand+' '+p.sub).toLowerCase().includes(q))
                  && (state.brand==='all' || p.brand===state.brand);

  if (state.active==='kits'){
    const kq = k => !q || (k.name+' '+k.desc).toLowerCase().includes(q);
    const kits = KITS.filter(kq);
    root.innerHTML = kits.length ? `
      <section class="cat">
        <div class="secHead">
          <div>
            <div class="secEyebrow">Combos — Kits</div>
            <h2 class="secTitle">Kits <span class="jp">組</span></h2>
            <div class="secTag">Varios productos, una sola compra.</div>
          </div>
          <div class="secCount">${kits.length} kits</div>
        </div>
        <div class="grid kitsGrid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">${kits.map(kitCard).join('')}</div>
      </section>` : noRes();
    observeCards(); return;
  }

  let secs = [];
  if (state.group){
    // Agrupar por marca
    const pool = PRODUCTS.filter(p => match(p) && (state.active==='all' || p.section===state.active));
    const brands = [...new Set(pool.map(p=>p.brand))].sort((a,b)=>a.localeCompare(b,'es'));
    secs = brands.map((b,i)=>({
      key:b, label:b, jp:'印', tagline:'Todo lo de la casa, junto.',
      idx:String(i+1).padStart(2,'0'),
      items: sortItems(pool.filter(p=>p.brand===b)),
    }));
  } else {
    let idx=0;
    for (const s of SECTIONS){
      if (state.active!=='all' && state.active!==s.id) continue;
      const items = sortItems(PRODUCTS.filter(p=>p.section===s.id && match(p)));
      if (!items.length) continue;
      idx++;
      secs.push({ key:s.id, label:s.label, jp:s.jp, tagline:s.tagline, idx:String(idx).padStart(2,'0'), items });
    }
  }

  root.innerHTML = secs.length ? secs.map(s=>`
    <section class="cat">
      <div class="secHead">
        <div>
          <div class="secEyebrow">${s.idx} — ${esc(s.label)}</div>
          <h2 class="secTitle">${esc(s.label)} <span class="jp">${s.jp}</span></h2>
          <div class="secTag">${esc(s.tagline)}</div>
        </div>
        <div class="secCount">${s.items.length} productos</div>
      </div>
      <div class="grid">${s.items.map(productCard).join('')}</div>
    </section>`).join('') : noRes();
  observeCards();
}

function noRes(){
  return `<div class="noRes"><div class="mu">無</div><div style="font-size:14px;letter-spacing:.08em">Nada por aquí. Ajusta la búsqueda, hermano.</div></div>`;
}

function observeCards(){
  if (io) io.disconnect();
  const cards = document.querySelectorAll('[data-card]');
  if (!('IntersectionObserver' in window) || prefersReduced()){
    cards.forEach(c=>c.classList.add('vis')); return;
  }
  io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('vis'); io.unobserve(e.target);} }),{rootMargin:'80px'});
  cards.forEach(c=>io.observe(c));
}

/* =========================================================
   Carrito y flujo de pedido
   ========================================================= */
function cartEntries(){ return Object.values(state.cart); }
function subtotal(){ return cartEntries().reduce((t,c)=>t+c.price*c.qty,0); }
function discountVal(){ return Math.round(subtotal()*state.disc.rate); }
function shippingVal(){
  const city = state.addr.city;
  if (!city) return null;
  return city==='Bogotá D.C.' ? SHIPPING_BOGOTA : null; // null → se confirma por WhatsApp
}
function cityName(){ return state.addr.city==='Otro municipio' ? state.addr.cityOther : state.addr.city; }

function flash(id){
  state.added[id]=true; renderAll();
  clearTimeout(flash._t?.[id]); flash._t = flash._t||{};
  flash._t[id]=setTimeout(()=>{ state.added[id]=false; renderAll(); },1400);
}

UI.pickVar = (id,i)=>{ state.sel[id]=i; renderCatalog(); };
UI.add = id=>{
  const p=byId[id]; const vi=Math.min(state.sel[id]??0,p.variants.length-1); const v=p.variants[vi];
  const key=id+'|'+v.pres; const cur=state.cart[key];
  state.cart[key]=cur?{...cur,qty:cur.qty+1}:{key,brand:p.brand,name:p.name,pres:v.pres,price:v.price,qty:1};
  flash(id);
};
UI.addKit = kid=>{
  const k=KITS.find(x=>x.id===kid);
  const pres=k.items.map(([id,vi])=>{const p=byId[id];return p.name+' '+p.variants[vi].pres;}).join(' + ');
  const key='kit|'+kid; const cur=state.cart[key];
  state.cart[key]=cur?{...cur,qty:cur.qty+1}:{key,brand:'Kyodai Kit',name:k.name,pres,price:kitPrice(k),qty:1,isKit:true};
  flash(kid);
};
UI.bump = (key,d)=>{
  const cur=state.cart[key]; if(!cur) return;
  const qty=cur.qty+d;
  if (qty<=0 || !isFinite(qty)) delete state.cart[key]; else state.cart[key]={...cur,qty};
  renderAll();
};
UI.toggleCart = ()=>{ state.cartOpen=!state.cartOpen; if(state.cartOpen) state.step='cart'; renderDrawer(); };
UI.closeCart  = ()=>{ state.cartOpen=false; hideSummary(); renderDrawer(); };
UI.setTab   = id=>{ state.active=id; renderTabs(); renderCatalog(); };
UI.setBrand = b =>{ state.brand=b; renderCatalog(); };
UI.setSort  = s =>{ state.sort=s; renderCatalog(); };
UI.setQ     = q =>{ state.q=q; renderCatalog(); };
UI.toggleGroup = ()=>{
  state.group=!state.group;
  const el=document.getElementById('groupBrand');
  el.classList.toggle('on',state.group); el.setAttribute('aria-checked',state.group);
  renderCatalog();
};
UI.applyDisc = ()=>{
  const raw=(document.getElementById('discInput')?.value||'').trim().toUpperCase();
  if (!raw){ state.disc={code:null,rate:0,msg:'',ok:false}; renderDrawer(); return; }
  const rate=DISCOUNTS[raw];
  state.disc = rate
    ? {code:raw,rate,msg:'Código aplicado: '+Math.round(rate*100)+'% de descuento sobre el subtotal.',ok:true}
    : {code:null,rate:0,msg:'Código no válido.',ok:false};
  renderDrawer();
};
UI.clearDisc = ()=>{ state.disc={code:null,rate:0,msg:'',ok:false}; renderDrawer(); };
UI.goAddress = ()=>{ if(!cartEntries().length) return; state.step='address'; renderDrawer(); };
UI.backToCart = ()=>{ state.step='cart'; renderDrawer(); };
UI.saveAddr = ()=>{
  const g=id=>document.getElementById(id)?.value?.trim()||'';
  state.addr={ city:g('fCity'), cityOther:g('fCityOther'), dir:g('fDir'), comp:g('fComp'), instr:g('fInstr') };
  const errs=[];
  if(!state.addr.city) errs.push('ciudad / municipio');
  if(state.addr.city==='Otro municipio' && !state.addr.cityOther) errs.push('nombre del municipio');
  if(!state.addr.dir) errs.push('dirección');
  const errEl=document.getElementById('fErr');
  if(errs.length){ errEl.textContent='Falta: '+errs.join(', ')+'.'; errEl.style.display='block'; return; }
  state.step='summary'; renderDrawer(); showSummary();
};
UI.backToAddress = ()=>{ hideSummary(); state.step='address'; renderDrawer(); };
UI.onCityChange = v=>{
  state.addr.city=v;
  document.getElementById('fCityOtherWrap').style.display = v==='Otro municipio'?'block':'none';
  const s=shippingVal();
  document.getElementById('shipNote').innerHTML = shipNoteHtml();
};
function shipNoteHtml(){
  if(!state.addr.city) return 'Selecciona la ciudad para calcular el envío.';
  return state.addr.city==='Bogotá D.C.'
    ? 'Envío en Bogotá: <b>'+fmt(SHIPPING_BOGOTA)+'</b>'
    : 'Envío fuera de Bogotá: <b>se confirma el costo vía WhatsApp</b>.';
}

/* ---------- Drawer render ---------- */
function renderDrawer(){
  const drawer=document.getElementById('drawer'), ov=document.getElementById('overlay');
  drawer.classList.toggle('open',state.cartOpen);
  ov.style.display=state.cartOpen?'block':'none';
  document.body.style.overflow = (state.cartOpen||document.getElementById('summaryWrap').style.display==='flex')?'hidden':'';
  const body=document.getElementById('dBody'), foot=document.getElementById('dFoot'), title=document.getElementById('dTitle');
  const entries=cartEntries();

  if (state.step==='address'){
    title.innerHTML='Datos de entrega <span class="jp">配達</span>';
    body.innerHTML=`
      <div class="fGroup">
        <label class="fLbl" for="fCity">Ciudad / Municipio</label>
        <select id="fCity" onchange="UI.onCityChange(this.value)">
          <option value="">Selecciona…</option>
          ${CITIES.map(c=>`<option${state.addr.city===c?' selected':''}>${c}</option>`).join('')}
        </select>
        <div id="fCityOtherWrap" style="display:${state.addr.city==='Otro municipio'?'block':'none'};margin-top:10px">
          <input id="fCityOther" type="text" placeholder="Escribe el municipio" value="${esc(state.addr.cityOther)}">
        </div>
        <div class="shipNote" id="shipNote" style="margin-top:10px">${shipNoteHtml()}</div>
      </div>
      <div class="fGroup">
        <label class="fLbl" for="fDir">Dirección</label>
        <input id="fDir" type="text" placeholder="Ej: Cra 15 # 85-24" value="${esc(state.addr.dir)}">
        <div class="fHint">Formato colombiano: Calle / Carrera / Diagonal # xx-xx</div>
      </div>
      <div class="fGroup">
        <label class="fLbl" for="fComp">Complemento <span class="opt">· opcional</span></label>
        <input id="fComp" type="text" placeholder="Apto, torre, casa, interior, conjunto…" value="${esc(state.addr.comp)}">
      </div>
      <div class="fGroup">
        <label class="fLbl" for="fInstr">Instrucciones de entrega <span class="opt">· opcional</span></label>
        <textarea id="fInstr" rows="2" placeholder="Ej: dejar en portería, llamar al llegar…">${esc(state.addr.instr)}</textarea>
      </div>
      <div id="fErr" style="display:none;color:var(--bad);font-size:12px;margin-top:4px;letter-spacing:.03em"></div>`;
    foot.innerHTML=`
      <button class="primaryBtn" onclick="UI.saveAddr()">Ver resumen del pedido</button>
      <button class="ghostBtn" onclick="UI.backToCart()">← Volver al pedido</button>`;
    return;
  }

  /* step: cart */
  title.innerHTML='Tu pedido <span class="jp">注文</span>';
  body.innerHTML = entries.length ? entries.map(c=>`
    <div class="cItem">
      <div class="cTop">
        <div>
          <div class="cBrand">${esc(c.brand)}</div>
          <div class="cName">${esc(c.name)}</div>
          <div class="cPres">${esc(c.pres)}</div>
        </div>
        <div class="cLine">${fmt(c.price*c.qty)}</div>
      </div>
      <div class="cCtl">
        <button class="qBtn" onclick="UI.bump('${esc(c.key)}',-1)">−</button>
        <span class="cQty">${c.qty}</span>
        <button class="qBtn" onclick="UI.bump('${esc(c.key)}',1)">+</button>
        <button class="cRem" onclick="UI.bump('${esc(c.key)}',-Infinity)">Quitar</button>
      </div>
    </div>`).join('')
  : `<div class="dEmpty">Aún no has agregado productos.<br><em>La constancia empieza con el primer paso.</em></div>`;

  const sub=subtotal(), disc=discountVal();
  foot.innerHTML = `
    <div class="discRow">
      <input id="discInput" type="text" placeholder="Código de descuento" value="${esc(state.disc.code||'')}">
      <button onclick="UI.applyDisc()">Aplicar</button>
    </div>
    <div class="discMsg ${state.disc.ok?'ok':(state.disc.msg?'bad':'')}">${esc(state.disc.msg)}${state.disc.ok?` <a href="#" onclick="UI.clearDisc();return false" style="color:var(--dim)">(quitar)</a>`:''}</div>
    <div class="tRow"><span>Subtotal</span><span>${fmt(sub)}</span></div>
    ${state.disc.ok?`<div class="tRow"><span>Descuento (${esc(state.disc.code)})</span><span class="neg">−${fmt(disc)}</span></div>`:''}
    <div class="tRow"><span>Envío</span><span style="color:var(--dim)">se calcula con la dirección</span></div>
    <div class="tRow total"><span class="l">Total parcial</span><span class="v">${fmt(sub-disc)}</span></div>
    <button class="primaryBtn" ${entries.length?'':'disabled'} onclick="UI.goAddress()">Continuar · datos de entrega</button>
    <div class="dNote">Precios COP</div>`;
}

/* ---------- Summary modal ---------- */
function showSummary(){
  const wrap=document.getElementById('summaryWrap');
  const el=document.getElementById('summary');
  const now=new Date();
  const dd=String(now.getDate()).padStart(2,'0'), mm=String(now.getMonth()+1).padStart(2,'0'), aa=String(now.getFullYear()).slice(-2);
  const hh=String(now.getHours()).padStart(2,'0'), mi=String(now.getMinutes()).padStart(2,'0');
  const fecha=`${dd}/${mm}/${aa}`, hora=`${hh}:${mi}`;
  const entries=cartEntries(), sub=subtotal(), disc=discountVal(), ship=shippingVal();
  const total=sub-disc+(ship??0);
  const a=state.addr;

  el.innerHTML=`
    <div class="sKanji">兄弟</div>
    <div class="sTitle">Resumen del pedido</div>
    <div class="sDate">${fecha} · ${hora}</div>
    <div class="sBlock">
      <div class="sBlockT">Productos</div>
      ${entries.map(c=>`<div class="sLine"><span><span class="q">${c.qty}×</span> ${esc(c.brand)} ${esc(c.name)} <span class="q">(${esc(c.pres)})</span></span><span>${fmt(c.price*c.qty)}</span></div>`).join('')}
    </div>
    <div class="sBlock">
      <div class="sLine"><span>Subtotal</span><span>${fmt(sub)}</span></div>
      ${state.disc.ok?`<div class="sLine"><span>Descuento (${esc(state.disc.code)})</span><span style="color:var(--ok)">−${fmt(disc)}</span></div>`:''}
      <div class="sLine"><span>Envío${ship!=null?' (Bogotá)':''}</span><span>${ship!=null?fmt(ship):'se confirma vía WhatsApp'}</span></div>
      <div class="sLine" style="border-top:1px solid var(--line);margin-top:8px;padding-top:12px">
        <span style="font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:var(--grey)">Total${ship==null?' (sin envío)':''}</span>
        <span style="font-size:20px;color:var(--ink);font-weight:600">${fmt(total)}</span>
      </div>
    </div>
    <div class="sBlock">
      <div class="sBlockT">Entrega</div>
      <div class="sAddr">
        <div><span class="k">Ciudad</span> ${esc(cityName())}</div>
        <div><span class="k">Dirección</span> ${esc(a.dir)}</div>
        ${a.comp?`<div><span class="k">Complemento</span> ${esc(a.comp)}</div>`:''}
        ${a.instr?`<div><span class="k">Instrucciones</span> ${esc(a.instr)}</div>`:''}
      </div>
    </div>
    <div class="sBlock" style="border-top:none;padding-top:6px">
      <a class="primaryBtn" href="${waHref(fecha,hora)}" target="_blank" rel="noopener">Confirmar pedido por WhatsApp</a>
      <button class="ghostBtn" onclick="UI.backToAddress()">← Editar dirección</button>
    </div>`;
  wrap.style.display='flex';
}
function hideSummary(){ document.getElementById('summaryWrap').style.display='none'; document.body.style.overflow=state.cartOpen?'hidden':''; }

function waHref(fecha,hora){
  const entries=cartEntries(), sub=subtotal(), disc=discountVal(), ship=shippingVal();
  const total=sub-disc+(ship??0);
  const a=state.addr;
  const lines=entries.map(c=>`${c.qty}x ${c.brand} ${c.name} (${c.pres}) - ${fmt(c.price*c.qty)}`);
  let msg='Hola Kyodai 兄弟, quiero confirmar este pedido:\n';
  msg+=`\n📅 Fecha: ${fecha} · Hora: ${hora}\n`;
  msg+='\n🛒 PRODUCTOS\n'+lines.join('\n')+'\n';
  msg+=`\nSubtotal: ${fmt(sub)}`;
  if (state.disc.ok) msg+=`\nDescuento (${state.disc.code}): -${fmt(disc)}`;
  msg+= ship!=null ? `\nEnvío (Bogotá): ${fmt(ship)}` : `\nEnvío: por confirmar vía WhatsApp`;
  msg+=`\nTOTAL${ship==null?' (sin envío)':''}: ${fmt(total)}\n`;
  msg+='\n📍 ENTREGA';
  msg+=`\nCiudad: ${cityName()}`;
  msg+=`\nDirección: ${a.dir}`;
  if (a.comp)  msg+=`\nComplemento: ${a.comp}`;
  if (a.instr) msg+=`\nInstrucciones: ${a.instr}`;
  return 'https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(msg);
}

/* ---------- Global render ---------- */
function renderAll(){
  const count=cartEntries().reduce((t,c)=>t+c.qty,0);
  const cc=document.getElementById('cartCount');
  cc.textContent=count; cc.style.display=count?'inline-flex':'none';
  renderCatalog(); renderDrawer();
}

/* ---------- Intro ---------- */
(function(){
  const intro=document.getElementById('intro');
  const reduced=prefersReduced();
  let seen=false;
  try{ seen=sessionStorage.getItem('kyodaiIntro')==='1'; }catch(e){}
  const end=()=>{ intro.classList.add('done'); try{sessionStorage.setItem('kyodaiIntro','1');}catch(e){} setTimeout(()=>intro.remove(),1000); };
  if (reduced||seen){ intro.remove(); return; }
  intro.addEventListener('click',end);
  setTimeout(end,3400);
})();

/* ---------- Init ---------- */
document.getElementById('heroCount').textContent =
  PRODUCTS.length+' productos · '+new Set(PRODUCTS.map(p=>p.brand)).size+' marcas · '+KITS.length+' kits · Un estándar';
renderTabs(); renderBrandSel(); renderCatalog(); renderDrawer();
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ hideSummary(); if(state.cartOpen) UI.closeCart(); }});
