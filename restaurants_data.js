// restaurants_data.js
const rawRestaurantsList = [
    // ================= 1. 米其林三星 (stars: 5) — 共 20 间 (ID 1 - 20) =================
    { id: 1, name: "Amber (置地文华东方酒店)", stars: 5, location: "中西区", address: "中环皇后大道中15号置地文华东方酒店7楼", price: 2588, rating: 9.8, style: "当代法式料理", ecoAward: "米其林绿星奖 (Michelin Green Star) • 100%无乳制品可持续菜单及厨余堆肥计划", pRoom: true, wSeat: false, park: true, wine: true },
    { id: 2, name: "Caprice (香港四季酒店)", stars: 5, location: "中西区", address: "中环金融街8号香港四季酒店6楼", price: 2880, rating: 9.8, style: "经典法式料理", ecoAward: "四季酒店可持续海产采购认证 • 法国有机农庄直供食材", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 3, name: "龙景轩 (香港四季酒店)", stars: 5, location: "中西区", address: "中环金融街8号香港四季酒店4楼", price: 2480, rating: 9.7, style: "顶级粤菜", ecoAward: "WWF 环保海鲜伙伴 • 100% 拒用鱼翅及支持可持续渔业认证", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 4, name: "8 1/2 Otto e Mezzo BOMBANA", stars: 5, location: "中西区", address: "中环遮打道16-20号历山大厦2楼202号铺", price: 2780, rating: 9.8, style: "传统顶级意式", ecoAward: null, pRoom: true, wSeat: false, park: true, wine: true },
    { id: 5, name: "唐阁 (香港朗廷酒店)", stars: 5, location: "油尖旺区", address: "尖沙咀北京道8号香港朗廷酒店1楼", price: 2180, rating: 9.6, style: "传统粤菜", ecoAward: "EarthCheck 白金级环保认证酒店餐厅 • 本地有机农场直采蔬菜", pRoom: true, wSeat: false, park: true, wine: true },
    { id: 6, name: "富临饭店 (阿一鲍鱼)", stars: 5, location: "湾仔区", address: "铜锣湾告士打道255-257号信和广场1楼", price: 2680, rating: 9.6, style: "经典粤菜", ecoAward: null, pRoom: true, wSeat: true, park: true, wine: true },
    { id: 7, name: "鮨·志魂 (Sushi Shikon)", stars: 5, location: "中西区", address: "中环皇后大道中15号置地文华东方酒店7楼", price: 2980, rating: 9.8, style: "江户前寿司", ecoAward: null, pRoom: true, wSeat: false, park: true, wine: true },
    { id: 8, name: "Ta Vie 旅", stars: 5, location: "中西区", address: "中环皇后大道中74号石板街酒店2楼", price: 2580, rating: 9.7, style: "日法融合料理", ecoAward: "亚洲时令本地食材减碳采购大奖 • 零塑厨房实践餐厅", pRoom: false, wSeat: false, park: false, wine: true },
    { id: 9, name: "潮厅 (Chao Ting)", stars: 5, location: "中西区", address: "中环干诺道中8号遮打大厦1楼", price: 2280, rating: 9.5, style: "精细潮州菜", ecoAward: null, pRoom: true, wSeat: false, park: true, wine: true },
    { id: 10, name: "L'Atelier de Joël Robuchon", stars: 5, location: "中西区", address: "中环皇后大道中15号置地广场4楼", price: 2680, rating: 9.7, style: "现代法式料理", ecoAward: "欧盟有机食材与可持续畜牧认证伙伴", pRoom: true, wSeat: false, park: true, wine: true },
    { id: 11, name: "天巢法国餐厅 (Robuchon au Dôme)", stars: 5, location: "油尖旺区", address: "西九龙文化区艺术公园高空观景层", price: 2850, rating: 9.7, style: "宫廷法式料理", ecoAward: null, pRoom: true, wSeat: true, park: true, wine: true },
    { id: 12, name: "誉珑轩 (Jade Dragon HK)", stars: 5, location: "湾仔区", address: "湾仔港湾道1号会展海景大楼", price: 2380, rating: 9.6, style: "奢华新派粤菜", ecoAward: "香港绿色餐饮协会金奖 • 全面采用 MSC 认证环保海产", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 13, name: "大班楼 (The Chairman)", stars: 5, location: "中西区", address: "中环威灵顿街198号The Wellington 3楼", price: 2380, rating: 9.9, style: "原创手工粤菜", ecoAward: "世界50最佳餐厅可持续食材典范 • 坚持新界本地有机农耕与本地渔民鲜捕", pRoom: true, wSeat: false, park: false, wine: true },
    { id: 14, name: "L'Envol (香港瑞吉酒店)", stars: 5, location: "湾仔区", address: "湾仔港湾径1号香港瑞吉酒店3楼", price: 2580, rating: 9.7, style: "当代法式料理", ecoAward: null, pRoom: true, wSeat: true, park: true, wine: true },
    { id: 15, name: "天龙轩 (香港丽思卡尔顿酒店)", stars: 5, location: "油尖旺区", address: "尖沙咀柯士甸道西1号环球贸易广场102楼", price: 2280, rating: 9.7, style: "高空云端粤菜", ecoAward: "万豪国际 Serve360 可持续发展认证 • 厨余转化生物能源项目", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 16, name: "TATE Dining Room", stars: 5, location: "中西区", address: "上环荷李活道210号地下及1楼", price: 2280, rating: 9.6, style: "中法颂歌料理", ecoAward: "Food Made Good 三星最高可持续发展评级 • 零厨余再生菜单", pRoom: true, wSeat: false, park: false, wine: true },
    { id: 17, name: "丽晶轩 (香港丽晶酒店)", stars: 5, location: "油尖旺区", address: "尖沙咀梳士巴利道18号香港丽晶酒店地下", price: 2180, rating: 9.6, style: "海景至尊粤菜", ecoAward: null, pRoom: true, wSeat: true, park: true, wine: true },
    { id: 18, name: "欣图轩 (Yan Toh Heen)", stars: 5, location: "油尖旺区", address: "尖沙咀梳士巴利道18号海滨长廊", price: 2150, rating: 9.5, style: "传统精致粤菜", ecoAward: "IHG 绿色餐饮先锋奖 • 室内垂直水耕香草自给系统", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 19, name: "Sushi Saito 斋藤寿司", stars: 5, location: "中西区", address: "中环金融街8号香港四季酒店45楼", price: 2980, rating: 9.8, style: "顶级江户前寿司", ecoAward: null, pRoom: true, wSeat: true, park: true, wine: true },
    { id: 20, name: "Forum 富临极品殿堂", stars: 5, location: "南区", address: "浅水湾海滩道28号海景大楼2楼", price: 2450, rating: 9.5, style: "传奇海景粤菜", ecoAward: null, pRoom: true, wSeat: true, park: true, wine: true },

    // ================= 2. 米其林二星 (stars: 4) — 共 20 间 (ID 21 - 40) =================
    { id: 21, name: "Feuille", stars: 4, location: "中西区", address: "中环威灵顿街198号The Wellington 5楼", price: 1880, rating: 9.5, style: "自然主义法餐", ecoAward: "米其林绿星奖 (Michelin Green Star) • 80%本地有机农作物与全株植物零浪费料理", pRoom: false, wSeat: true, park: false, wine: true },
    { id: 22, name: "Arbor", stars: 4, location: "中西区", address: "中环皇后大道中80号H Queen's 25楼", price: 2088, rating: 9.4, style: "北欧日式融合", ecoAward: "可持续森林与海洋友善采购认证餐厅", pRoom: true, wSeat: true, park: false, wine: true },
    { id: 23, name: "Bo Innovation 厨魔", stars: 4, location: "湾仔区", address: "湾仔庄士敦道60号J Senses 1楼", price: 2180, rating: 9.4, style: "分子中菜料理", ecoAward: null, pRoom: true, wSeat: false, park: false, wine: true },
    { id: 24, name: "润 Rùn (香港瑞吉酒店)", stars: 4, location: "湾仔区", address: "湾仔港湾径1号香港瑞吉酒店2楼", price: 2080, rating: 9.5, style: "当代精致粤菜", ecoAward: "瑞吉酒店绿色厨房认证 • 选用本地生态养殖家禽", pRoom: true, wSeat: false, park: true, wine: true },
    { id: 25, name: "营致会馆 (Ying Jee Club)", stars: 4, location: "中西区", address: "中环干诺道中41号盈置大厦地下", price: 1980, rating: 9.4, style: "高雅传统粤菜", ecoAward: null, pRoom: true, wSeat: false, park: true, wine: true },
    { id: 26, name: "Octavium", stars: 4, location: "中西区", address: "中环德辅道中22号One Chinachem 8楼", price: 2050, rating: 9.4, style: "现代手工意菜", ecoAward: null, pRoom: true, wSeat: true, park: false, wine: true },
    { id: 27, name: "Noi (香港四季酒店)", stars: 4, location: "中西区", address: "中环金融街8号香港四季酒店5楼", price: 2280, rating: 9.5, style: "当代意日料理", ecoAward: "海洋管理委员会 (MSC) 可持续海产合规伙伴", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 28, name: "香宫 (九龙香格里拉)", stars: 4, location: "油尖旺区", address: "尖沙咀么地道64号九龙香格里拉地下1层", price: 1850, rating: 9.3, style: "宫廷经典粤菜", ecoAward: "香格里拉 Rooted in Nature 可持续食材认证餐厅", pRoom: true, wSeat: false, park: true, wine: true },
    { id: 29, name: "夏宫 (港岛香格里拉)", stars: 4, location: "中西区", address: "金钟太古广场港岛香格里拉5楼", price: 1880, rating: 9.3, style: "传统名门粤菜", ecoAward: "香格里拉环保海鲜与本地有机蜂蜜采购认证", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 30, name: "新同乐鱼翅酒家", stars: 4, location: "油尖旺区", address: "尖沙咀弥敦道132号美丽华广场一期4楼", price: 1950, rating: 9.2, style: "老字号手工粤菜", ecoAward: null, pRoom: true, wSeat: false, park: true, wine: false },
    { id: 31, name: "鮨·见 (Sushi Taki)", stars: 4, location: "九龙城区", address: "红磡湾梳士巴利道海滨花园平台2楼", price: 2150, rating: 9.4, style: "熟成江户前寿司", ecoAward: null, pRoom: true, wSeat: true, park: true, wine: true },
    { id: 32, name: "柏屋 (Kashiwaya)", stars: 4, location: "中西区", address: "中环安兰街18号8楼", price: 2200, rating: 9.4, style: "京都正统怀石料理", ecoAward: null, pRoom: true, wSeat: false, park: false, wine: true },
    { id: 33, name: "明阁 (香港康得思酒店)", stars: 4, location: "油尖旺区", address: "旺角上海街555号香港康得思酒店6楼", price: 1680, rating: 9.3, style: "得奖名厨粤菜", ecoAward: "EarthCheck 白金环保认证 • 零厨余与环保海产菜单", pRoom: true, wSeat: false, park: true, wine: true },
    { id: 34, name: "珀翠餐厅 (Restaurant Petrus)", stars: 4, location: "中西区", address: "金钟太古广场港岛香格里拉56楼", price: 2380, rating: 9.5, style: "高空传统法餐", ecoAward: null, pRoom: true, wSeat: true, park: true, wine: true },
    { id: 35, name: "文华厅 (香港文华东方酒店)", stars: 4, location: "中西区", address: "中环干诺道中5号香港文华东方酒店25楼", price: 1980, rating: 9.4, style: "经典古法粤菜", ecoAward: "文华东方集团可持续淘汰一次性塑料及环保食材认证", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 36, name: "Tosca di Angelo", stars: 4, location: "油尖旺区", address: "尖沙咀柯士甸道西1号环球贸易广场102楼", price: 2180, rating: 9.5, style: "西西里云端意菜", ecoAward: null, pRoom: true, wSeat: true, park: true, wine: true },
    { id: 37, name: "割烹 凛 (Kappo Rin)", stars: 4, location: "中西区", address: "中环皇后大道中15号置地文华东方酒店7楼", price: 2350, rating: 9.5, style: "日式时令割烹", ecoAward: null, pRoom: true, wSeat: false, park: true, wine: true },
    { id: 38, name: "Mosu Hong Kong", stars: 4, location: "油尖旺区", address: "西九文化区博物馆道38号M+大楼3楼", price: 2180, rating: 9.5, style: "当代创新韩食", ecoAward: "M+ 绿建环评铂金级建筑餐厅 • 采用本地有机牛蒡与无添加发酵工艺", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 39, name: "ÉPURE", stars: 4, location: "油尖旺区", address: "尖沙咀海港城海洋中心4楼403号铺", price: 1980, rating: 9.3, style: "法式花园美馔", ecoAward: null, pRoom: true, wSeat: true, park: true, wine: true },
    { id: 40, name: "BELON", stars: 4, location: "中西区", address: "中环苏豪伊利近街1-5号1楼", price: 2080, rating: 9.4, style: "新派巴黎法餐", ecoAward: null, pRoom: false, wSeat: false, park: false, wine: true },

    // ================= 3. 米其林一星 (stars: 3) — 共 20 间 (ID 41 - 60) =================
    { id: 41, name: "Roganic Hong Kong", stars: 3, location: "湾仔区", address: "铜锣湾告士打道255号信和广场UG楼8号", price: 1680, rating: 9.6, style: "英国农场到餐桌料理", ecoAward: "米其林绿星奖 (Michelin Green Star) • 新界本地有机农场直供与零浪费微型菜园", pRoom: true, wSeat: false, park: true, wine: true },
    { id: 42, name: "摩 (Mora)", stars: 3, location: "中西区", address: "上环摩罗上街40号地下", price: 1580, rating: 9.5, style: "中法大豆概念料理", ecoAward: "米其林绿星奖 (Michelin Green Star) • 低碳植物基大豆蛋白创新及零塑环保包装", pRoom: false, wSeat: false, park: false, wine: true },
    { id: 43, name: "Andō", stars: 3, location: "中西区", address: "中环威灵顿街52号Somptueux Central 1楼", price: 1980, rating: 9.4, style: "日西交响料理", ecoAward: null, pRoom: true, wSeat: false, park: false, wine: true },
    { id: 44, name: "CHAAT (香港瑰丽酒店)", stars: 3, location: "油尖旺区", address: "尖沙咀梳士巴利道18号香港瑰丽酒店5楼", price: 1588, rating: 9.4, style: "精致印度烤肉料理", ecoAward: "瑰丽酒店 Rosewood Impacts 可持续认证 • 太阳能再生能源与零厨余回收", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 45, name: "Estro", stars: 3, location: "中西区", address: "中环都爹利街1号2楼", price: 1980, rating: 9.3, style: "当代拿坡里意菜", ecoAward: null, pRoom: true, wSeat: false, park: false, wine: true },
    { id: 46, name: "Louise (PMQ元创方)", stars: 3, location: "中西区", address: "中环鸭巴甸街35号元创方Jwan栋地下", price: 1780, rating: 9.2, style: "法式传统庭院料理", ecoAward: "古迹活化保育建筑餐厅 • 采用法国自由放养认证家禽", pRoom: true, wSeat: true, park: false, wine: true },
    { id: 47, name: "Mono", stars: 3, location: "中西区", address: "中环安兰街18号5楼", price: 1980, rating: 9.3, style: "当代拉丁美洲料理", ecoAward: "公平贸易单一产地有机可可豆及南美小农直接采购认证", pRoom: false, wSeat: true, park: false, wine: true },
    { id: 48, name: "Hansik Goo", stars: 3, location: "中西区", address: "中环威灵顿街198号The Wellington 1楼", price: 1680, rating: 9.2, style: "现代宫廷韩馔", ecoAward: null, pRoom: true, wSeat: false, park: false, wine: true },
    { id: 49, name: "New Punjab Club", stars: 3, location: "中西区", address: "中环云咸街34号世界商业大厦地下", price: 1680, rating: 9.3, style: "旁遮普泥炉炭烤", ecoAward: null, pRoom: false, wSeat: false, park: false, wine: true },
    { id: 50, name: "文华扒房+酒吧 (Mandarin Grill)", stars: 3, location: "中西区", address: "中环干诺道中5号香港文华东方酒店1楼", price: 1900, rating: 9.3, style: "经典牛排与海鲜", ecoAward: "100% 采用认证有机草饲牛肉及 MSC 环保海鲜", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 51, name: "万豪金殿 (Man Ho)", stars: 3, location: "中西区", address: "金钟道88号太古广场香港JW万豪酒店3楼", price: 1680, rating: 9.3, style: "手工养生粤菜", ecoAward: "WWF 环保海鲜先锋餐厅 • 本地有机菇菌与茶园直采", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 52, name: "都爹利会馆 (Duddell's)", stars: 3, location: "中西区", address: "中环都爹利街1号上海滩大厦3至4楼", price: 1650, rating: 9.2, style: "艺术会馆粤菜", ecoAward: null, pRoom: true, wSeat: true, park: false, wine: true },
    { id: 53, name: "逸东轩 (Yat Tung Heen)", stars: 3, location: "油尖旺区", address: "佐敦弥敦道380号香港逸东酒店B2楼层", price: 1380, rating: 9.2, style: "传统手工粤菜", ecoAward: "EarthCheck 认证 • 惜食堂厨余捐赠与有机食材伙伴", pRoom: true, wSeat: false, park: true, wine: false },
    { id: 54, name: "留园雅叙 (Liu Yuan Pavilion)", stars: 3, location: "湾仔区", address: "湾仔骆克道54-62号博汇大厦3楼", price: 1480, rating: 9.1, style: "正宗沪江本帮菜", ecoAward: null, pRoom: true, wSeat: false, park: false, wine: false },
    { id: 55, name: "甬府 (Yong Fu)", stars: 3, location: "湾仔区", address: "湾仔骆克道20-24号地下及1楼", price: 2180, rating: 9.4, style: "顶级宁波江浙菜", ecoAward: null, pRoom: true, wSeat: false, park: false, wine: true },
    { id: 56, name: "嘉麟楼 (Spring Moon)", stars: 3, location: "油尖旺区", address: "尖沙咀梳士巴利道香港半岛酒店1楼", price: 2080, rating: 9.5, style: "半岛传奇粤菜", ecoAward: "半岛酒店集团可持续奢华认证 • 100% 无笼放养鸡蛋与环保海产", pRoom: true, wSeat: false, park: true, wine: true },
    { id: 57, name: "吉地士 (Gaddi's)", stars: 3, location: "油尖旺区", address: "尖沙咀梳士巴利道香港半岛酒店1楼", price: 2280, rating: 9.5, style: "半岛经典法式料理", ecoAward: "半岛绿色认证 • 有机香草天台花园自给计划", pRoom: true, wSeat: false, park: true, wine: true },
    { id: 58, name: "端记精致私房馆 (荃湾川龙)", stars: 3, location: "荃湾区", address: "荃湾荃锦公路川龙村57-58号", price: 1180, rating: 9.0, style: "大帽山山水有机粤菜", ecoAward: "大帽山天然山泉水自家种植有机西洋菜 • 零碳排里程农庄餐厅", pRoom: false, wSeat: true, park: true, wine: false },
    { id: 59, name: "六福菜馆 (西贡总店)", stars: 3, location: "西贡区", address: "西贡市场街49号地下至2楼", price: 1380, rating: 9.2, style: "本地渔船海鲜料理", ecoAward: "西贡休渔期生态保育支持商户 • 每日小艇低碳直采鲜鱼", pRoom: true, wSeat: true, park: true, wine: false },
    { id: 60, name: "何洪记名家私房宴", stars: 3, location: "东区", address: "北角渣华道123号北角汇二期2楼", price: 1250, rating: 9.1, style: "古法手工粤式私房菜", ecoAward: null, pRoom: true, wSeat: true, park: true, wine: false },

    // ================= 4. 其它精选 (stars: 2) — 共 20 间 (ID 61 - 80) =================
    { id: 61, name: "沙田18 (香港沙田凯悦酒店)", stars: 2, location: "沙田区", address: "沙田泽祥街18号香港沙田凯悦酒店4楼", price: 1280, rating: 9.2, style: "果木烤鸭与东莞菜", ecoAward: "凯悦 World of Care 环保认证 • 采用龙眼果木修枝再生燃料及新界有机蜂蜜", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 62, name: "大屿山大澳文物酒店玻璃屋餐厅", stars: 2, location: "离岛区", address: "大屿山大澳石仔埗街旧大澳警署", price: 1180, rating: 9.1, style: "古迹海景欧陆融合菜", ecoAward: "UNESCO 亚太文化遗产保护奖 • 大澳社区低碳食材及太阳能供电认证", pRoom: false, wSeat: true, park: false, wine: false },
    { id: 63, name: "大埔林村有机农庄私房料理", stars: 2, location: "大埔区", address: "大埔林锦公路新塘段生态园12号", price: 1150, rating: 9.0, style: "新界田园有机私房菜", ecoAward: "香港有机资源中心认证合作餐厅 • 100% 自家农田有机蔬果与厨余堆肥", pRoom: true, wSeat: true, park: true, wine: false },
    { id: 64, name: "元朗屏山传统盆菜与围村私房宴", stars: 2, location: "元朗区", address: "元朗屏山塘坊村古迹文化径8号", price: 1120, rating: 8.9, style: "古法围村精制料理", ecoAward: "元朗本地生态鱼塘乌头及有机农场直采伙伴", pRoom: true, wSeat: false, park: true, wine: false },
    { id: 65, name: "屯门黄金海岸聆沨咖啡厅", stars: 2, location: "屯门区", address: "屯门青山公路1号香港黄金海岸酒店低层", price: 1180, rating: 9.0, style: "南中国海景炭烤海鲜", ecoAward: "信和集团可持续发展餐厅 • 设有酒店有机香草农圃及鱼菜共生系统", pRoom: false, wSeat: true, park: true, wine: true },
    { id: 66, name: "上水古洞有机生态园农庄御膳", stars: 2, location: "北区", address: "上水古洞河上乡排峰路生态庄园", price: 1100, rating: 8.9, style: "有机养生农家私房菜", ecoAward: "北区低碳农业发展联盟成员 • 零化学农药水耕及有机走地鸡认证", pRoom: true, wSeat: true, park: true, wine: false },
    { id: 67, name: "深水埗文青活化古迹法式小馆", stars: 2, location: "深水埗区", address: "深水埗荔枝角道119号雷生春堂旁古迹楼", price: 1280, rating: 9.1, style: "新派手工作法式料理", ecoAward: "深水埗社区咖啡渣再生与本地精酿低碳合作餐厅", pRoom: false, wSeat: false, park: false, wine: true },
    { id: 68, name: "观塘海滨工业风可持续牛排馆", stars: 2, location: "观塘区", address: "观塘海滨道181号One Harbour Square 2楼", price: 1450, rating: 9.1, style: "干式熟成炭火牛排", ecoAward: "LEED 铂金级绿建筑餐厅 • 选用碳中和认证澳洲草饲牛肉", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 69, name: "黄大仙志莲净苑荷花池畔素斋宴", stars: 2, location: "黄大仙区", address: "钻石山凤德道60号南莲园池龙门楼", price: 1080, rating: 9.3, style: "精致禅意全素私房宴", ecoAward: "100% 纯植物基低碳排健康饮食认证 • 园林雨水回收灌溉系统", pRoom: true, wSeat: true, park: true, wine: false },
    { id: 70, name: "葵青货柜码头高空海景扒房", stars: 2, location: "葵青区", address: "葵涌青山公路388号悦品酒店顶层", price: 1250, rating: 8.8, style: "高空全景欧陆扒房", ecoAward: null, pRoom: false, wSeat: true, park: true, wine: true },
    { id: 71, name: "赤柱美利楼海风地中海餐厅", stars: 2, location: "南区", address: "赤柱佳美道23号美利楼2楼", price: 1480, rating: 9.1, style: "地中海海鲜料理", ecoAward: "古迹建筑自然通风节能设计 • 采用可持续认证地中海海产", pRoom: false, wSeat: true, park: true, wine: true },
    { id: 72, name: "太古坊糖厂街有机现代欧陆餐厅 (FEAST)", stars: 2, location: "东区", address: "鲗鱼涌太古坊华兰路29号东隅酒店1楼", price: 1420, rating: 9.2, style: "当代可持续欧陆料理", ecoAward: "太古酒店 SD2030 可持续发展金奖 • 100% 厨余分解机转化肥料", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 73, name: "九龙城寨风味潮州私房名菜馆", stars: 2, location: "九龙城区", address: "九龙城衙前塱道42号1至2楼", price: 1320, rating: 9.1, style: "正宗古法潮州打冷", ecoAward: null, pRoom: true, wSeat: false, park: false, wine: false },
    { id: 74, name: "西贡白沙湾游艇会海景海鲜舫", stars: 2, location: "西贡区", address: "西贡白沙湾码头海滨径1号", price: 1520, rating: 9.2, style: "法式游艇会海鲜料理", ecoAward: "香港海洋公园保育基金「无饮管及环保海鲜」钻石级伙伴", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 75, name: "沙田吐露港单车径旁绿意玻璃餐厅", stars: 2, location: "沙田区", address: "沙田白石角科学园海滨长廊19W大楼", price: 1260, rating: 9.0, style: "低碳北欧健康料理", ecoAward: "香港科学园绿色低碳餐饮示范店 • 全店使用太阳能与生物可降解餐具", pRoom: false, wSeat: true, park: true, wine: true },
    { id: 76, name: "大埔吐露港海景游艇会西餐厅", stars: 2, location: "大埔区", address: "大埔大美督路汀角海滨长廊", price: 1220, rating: 8.9, style: "意式炭烤与手工披萨", ecoAward: null, pRoom: false, wSeat: true, park: true, wine: true },
    { id: 77, name: "荃湾南丰纱厂活化文创植物料理馆", stars: 2, location: "荃湾区", address: "荃湾白田坝街45号南丰纱厂1楼", price: 1180, rating: 9.2, style: "新派植物基融合料理", ecoAward: "南丰纱厂可持续文创奖 • 采用香港本地水耕菜及升级再造食材", pRoom: false, wSeat: false, park: true, wine: false },
    { id: 78, name: "元朗锦田有机水耕农场玻璃屋餐厅", stars: 2, location: "元朗区", address: "元朗锦田公路水尾村有机生态园", price: 1150, rating: 9.0, style: "农场直达餐桌欧陆菜", ecoAward: "香港水耕农业绿色认证 • 节水 90% 垂直农法即摘即煮", pRoom: false, wSeat: true, park: true, wine: false },
    { id: 79, name: "愉景湾海滨白教堂欧陆餐厅", stars: 2, location: "离岛区", address: "大屿山愉景湾海澄湖畔路88号", price: 1380, rating: 9.1, style: "浪漫海景欧陆料理", ecoAward: "愉景湾无车环保社区零碳排接驳认证餐厅", pRoom: true, wSeat: true, park: false, wine: true },
    { id: 80, name: "The Steak House (香港丽晶酒店)", stars: 2, location: "油尖旺区", address: "尖沙咀梳士巴利道18号香港丽晶酒店地下", price: 1850, rating: 9.3, style: "木炭烤炙顶级牛排馆", ecoAward: null, pRoom: true, wSeat: true, park: true, wine: true }
];

const sampleImages = [
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
];

const restaurantsData = rawRestaurantsList.map((item, idx) => {
    const isEco = Boolean(item.ecoAward);
    return {
        id: item.id,
        name: item.name,
        location: item.location, // 标准香港 18 区名称 (中西区, 湾仔区, 油尖旺区等)
        district: item.location,
        address: item.address,
        distance: "距离核心交通枢纽步行约 3-6 分钟",
        images: [sampleImages[idx % sampleImages.length]],
        stars: item.stars, // 5:米其林三星, 4:米其林二星, 3:米其林一星, 2:其它精选
        rating: item.rating,
        reviewCount: 850 + (idx * 37) % 2500,
        verdict: item.rating >= 9.5 ? "传奇极佳" : item.rating >= 9.2 ? "极高赞誉" : "精选好评",
        originalPrice: Math.round(item.price * 1.15),
        price: item.price,
        ecoAward: item.ecoAward, // 环保可持续奖项纪录
        // 5 大特色设施 Tag
        hasPrivateRoom: item.pRoom,
        hasWindowSeat: item.wSeat,
        hasParking: item.park,
        hasSommelier: item.wine,
        hasSustainable: isEco,
        menus: [
            {
                id: `m_${item.id}_1`,
                name: `${item.name} 主厨精选时令品鉴晚宴`,
                image: sampleImages[(idx + 1) % sampleImages.length],
                style: item.style,
                drinks: item.wine ? "包含侍酒师精选餐酒搭配" : "包含精选名茶或特调饮品",
                seating: item.wSeat ? "优先安排景观雅座" : "主厅雅致席位",
                cancel: "24小时前免费取消",
                origPrice: Math.round(item.price * 1.15),
                price: item.price
            }
        ]
    };
});