// restaurants_data.js

// 80 张完全不重复的高画质星级餐厅环境与装潢主图
const uniqueRestaurantImages = [
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2018/04/18/ca34f0b456024b01a97023f67d07f10a_fourseason+copy.jpg",
    "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2018/04/18/e3e3c15dadc04724ba80e3f459c7c73f_Man-Wah-Restaurant+copy.jpg",
    "https://cdn.hk01.com/di/media/images/dw/20220808/633365669978574848867294.jpeg/Ul8QRzg0jBigh8x28cdgJpW80zG1kibI0rg7A9K4OwM?v=w1920",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "https://assets.sandsresortsmacao.cn/content/parisianmacao/dining/2020/brasserie/brasserie_mb-banner_750x510.jpg",
    "https://www.openrice.com/userphoto/CMSContent/0/40/000SID19073F77E433086Cj.jpg",
    "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2CjgTQUmTzVsI7x2Pyqj3qIJr-RvP3fOu_dRs-6Ezkg8aySjm7aeS-Oy&s=10",
    "https://4co.tw/wp-content/uploads/pixnet/7981aa2665fa6e7c5e9f46880891975d.jpg",
    "https://www.tainan.queenaplaza.com/upload/fac_dining_s/ALL_fac_dining_23C23_MgRHaHBgCO.jpg",
    "https://byfood.b-cdn.net/api/public/assets/43182/content?optimizer=image&width=600&sharpen=true",
    "https://api.cosmopolitan.com.hk/var/site/storage/images/lifestyle/3-new-japanese-resturants-suggestions/dsc-2577/3585515-1-chi-HK/DSC-2577.jpg",
    "https://www.okibook.com/_next/image?url=https%3A%2F%2Fcms.okibook.com%2Fapi%2Fmedia%2Ffile%2Finterior-night-time-3_989818876678a1735657a4-1024x640.jpg&w=2048&q=75",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/9f/a9/fb/grissini-restaurant-interior.jpg",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaem6qxV9swcof04MmTgXEDYV2RcU0db3rzzvD8cT3XD_Cl_p0qSCp45R2&s=10",
    "https://res.klook.com/image/upload/c_crop,h_745,w_1192,x_0,y_112,z_0.6/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/owczp0wdfqccutwa03is.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zv7SU49PiUU7oUddeIuMyjg7uJONob-dk8km1zWj3dlJUmsrhi6vjBg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUo8QBA2bNsbp-kVguX1vNKOKKIUkYRh0DY6yS3uPQ6zwXx6OiQcrdgk5A&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHFGuPInq1RD-W7tLWXHwD7IQem4DbvOCP5aWpP8PgThObUza_v84CTmm&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQZ0tQfCfVEXO4udlGvjPmIhf08s-K1KaTJ9dd9SCsA&s=10",
    "https://assets-us-01.kc-usercontent.com/9e9a95c0-1d15-00d5-e878-50f070203f13/ea3d2dde-472e-4919-8329-653def611d77/Man%20Wah-1920.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwe4YfiBghBM_rxdl4pOI0Wqho90Bijp3oLM7F9EHVJinARpA7N9-_rw8&s=10",
    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&q=80",
    "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2020/05/19/17cbe4d6317e4683ae6e91cfea6ea46d_Voyages_Interiors.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKr6rLku5qDHMbM2tV_lRusfyHOzJqTP5xQVuJIf7OtZbFWoEtfPdx9Ao&s=10",
    "https://www.foodnext.net/dispPageBox/getFile/GetImg.aspx?FileLocation=%2FPJ-FOODNEXT%2FFiles%2F&FileName=photo-47975-i.jpg",
    "https://gia.info.gov.hk/general/201909/13/P2019091300298_photo_1164477.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRakn8YMhAFS0mY4qTNAM5LuDRWzwOHgd5D54jhqvcDxvqAOgUkd4-Vc&s=10",
    "https://blog-static.kkday.com/zh-hk/blog/wp-content/uploads/jpg-1-92.jpeg",
    "https://housefeel-public-prod.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/01/230811%E9%90%B5%E6%9D%BF%E7%87%92%E7%B6%B2%E7%AB%99%E7%B8%AE%E5%9C%96-930x500-1.png",
    "https://ccc1894.com/wp-content/uploads/2024/10/Fortune-Cafe-Gallery-943x589-1.jpg",
    "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80",
    "https://s.yimg.com/lo/mysterio/api/ca60c66203738c309e13220e77040ae92b0cf052dd7f67322bc8a11052dde25c/lightyear_networkapi/resizefill_w640%3Bquality_80%3Bformat_webp/https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2025-03%2Fd2e84a90-0540-11f0-9df5-ee33d83928dd",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaoFvTK0NfKQIFgLwfpSGUMGtA5v7Yt_2qOVVVfWv4pn27QV46485aDGbY&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZA9P7As7a_JkUHS8n5jbFfTx_gWLZ49Z6FN7cV9n9KKGcsXHHxO1IhkZc&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcWjVxGnFNL5W_3tMNSXYiQZ-xXPfOtz9zNfhy7Y9AxHdbG2oHdwC7kMQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJfjMvDgXq79h_Bao_0jboBho3E35qak10hnvH6zvAECm-7R-hWhI0i6k&s=10",
    "https://ak-d.tripcdn.com/images/1mh4z12000axl0byj087B_D_640_320_R5_Q70.jpg_.webp?proc=autoorient",
    "https://cdn.prod.website-files.com/695d6859841c394b4c0876eb/6a86f081699882e03de16a6d_chinese%20restaurant%20menu%20ideas.webp",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/d1/86/07/dragon-phoenix.jpg?w=1100&h=1100&s=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqzecgszNEwTUSMx3C3oWObxVd6jdqB0vCcIcw-2CcA&s=10",
    "https://picasso.rosewoodhotelgroup.com/transform/f7ed6c80-6e09-4588-b484-e0ff565760f5/RWHKG_3-0_Brand-com_Assets_Facilities_FB_The-Legacy-House_Main-Dining-Room_1",
    "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=800&q=80",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/5c/a4/4f/above-beyond-private.jpg?w=500&h=-1&s=1",
    "https://imgs.weekendhk.com/wp-content/uploads/2025/06/175023640664093053_119846424568527cf8768bc.jpg",
    "https://image-cdn.hypb.st/https%3A%2F%2Fpopbee.com%2Fimage%2F2025%2F04%2Fomakase-in-central-niwa-3.jpg?q=90&w=800&cbr=1&fit=max",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqme5fe1486TSnctfceAAqYY9qKeCAnx_Jxu4HBb8ID106ELSOKbDYG6wl&s=10",
    "https://pimg.1px.tw/drugs/1703248968-3723659409-g.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlM2bnvKz4U__Gsqco5ePMqDWTGMy7W07kV3rv0K3Rg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGc032rhVAPOjA27M5AQpMucUTKIwTsXeCBBotItE2AMOVqzF9gngGwMM&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_c1EQZQNyPeJuzXuS7dseANEXPzT2nqXSgzeGAyEdPwSWgn2vUNdJfA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeEivFc3eHD3niFczLnMDLBvo175wENWWw_9ISnxEewfh34XyPSQCBgw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyawcaKQqj0aR5CviE5VtAfEBvsxjzCPRHVPgAsPKUNAGqids5YOGnGVuV&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqTLVU7k-lU5faXfYR3p4PIcYZNhZhc7-OuQgYTNZUpY--LaZFW0r7wZt&s=10",
    "https://www.foodnext.net/dispPageBox/getFile/GetImg.aspx?FileLocation=%2FPJ-FOODNEXT%2FFiles%2F&FileName=photo-13066-i.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIs2e7a0CJ2ZmNl54PAAT3xCafi7mROvquCPCZMedmQnRhBPdTrSg72vGJ&s=10",
    "https://www.travelrich.com.tw/data/ca00481b-df55-4b1c-954f-143634e6477c.jpg",
    "https://www.buddhistdoor.org/wp-content/uploads/2024/07/03-1-1024x576.jpg",
    "https://freelancerpro2023.s3.ap-southeast-1.amazonaws.com/images/1783331131534-902771870-WhatsApp-Image-2026-07-06-at-4.36.39-PM-1-.jpg",
    "https://taberu-food.com/wp-content/uploads/2026/05/20260518140144_0_93d135-1024x683.jpg",
    "https://s3-eu-west-1.amazonaws.com/obonparis/pictures/000/005/127/xl/d679fd32a6f01502d5e5449f051b9a70a478c32ac87acf196956c37c4e83b38c.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdP7RGvFZjbF9isU62Rg-eokOnBSGLcOmFX2_MZYP4HpRKIK7JZQSlX2s&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUECYSe5hR0WdCb3Ehoo0g1lbxOSMMq8-SrJ4IsINMlOi8qY9oZyVtjHs&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZqEoaMYTHsocPCOxUnQ5qFsgbSreWnfCgywhLH_XQ9oq30vxW1DVEGw&s=10",
    "https://imgs.weekendhk.com/wp-content/uploads/2025/06/wp_tmp_image_for_upload_20565626346859354cb8c15-1200x630.jpg",
    "https://i.autoreserve.com/thumb/1200x1200/restaurant_image/image/065/057/128/65057128/c5106be3-314b-47d6-a7db-4f17702de2b7.jpg?format=webp",
    "https://www.getreadyhk.com/images/stories/blog/foodieyanyannn/kuromon/img-20190226-wa0019.jpg",
    "https://inline.imgix.net/branch/-MtD0eZcTcb7zNNzrHpS:inline-live-2--MtD0emTpi9t2_P3hbs6-07db662a-a8a8-41ba-973c-4dda371138f1.png?auto=format%2Ccompress&fit=max&w=1500",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8l9rkaJxKYBx4Irz3QQdnuuuAsCxivlQ3c7qCVCEPj7Tu75FVLoDMOam&s=10",
    "https://rimage.savorjapan.com/svj/image/discover_oishii_japan/1295/article_167863_w640z.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjAZr7EiadezvUdxNb6YrvxJOTlPJQFaHtLZQBnfNH0GkXSmhs7eC1KUyY&s=10",
    "https://cdn2.ettoday.net/images/7786/e7786685.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EMwZ4cC6tZmINHcaff0d7H3YUDD-K4njLjzZ9iZBCw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mdVYhfhvihLL7q1BzWoSnWZ94_KeN486PW4I1h8aqFP1VhTM6GYWO5g&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSG1HyBo7PsGtjvkUvD4cIBi9UJCE82m2R9AGFyr5Ik5tG27noj1FY6GE&s=10"
];

// 正交基底配置 (4星级 × 4菜系 × 4地区 严格各20间均等)
// 价格梯度设计：三星 ($1480-$2000), 二星 ($980-$1450), 一星 ($580-$960), 精选 ($200-$550)
const rawRestaurantsList = [
    // =========================================================================
    // 1. 米其林三星 (stars: 5) — 共 20 间 (均价 $1480 ~ $2000)
    // =========================================================================
    // --- 三星 × 粤菜/中菜 (5 间) ---
    { id: 1, name: "龙景轩 (香港四季酒店)", stars: 5, cuisine: "粤菜/中菜", region: "香港岛", location: "中西区", address: "中环金融街8号香港四季酒店4楼", price: 1980, rating: 9.8, ecoAward: "WWF 环保海鲜伙伴 • 100% 拒用鱼翅及支持可持续渔业认证", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 2, name: "唐阁 (香港朗廷酒店)", stars: 5, cuisine: "粤菜/中菜", region: "九龙", location: "油尖旺区", address: "尖沙咀北京道8号香港朗廷酒店1楼", price: 1880, rating: 9.6, ecoAward: "EarthCheck 白金级环保认证酒店餐厅 • 本地有机农场直采蔬菜", pRoom: true, wSeat: false, park: true, wine: true },
    { id: 3, name: "沙田名家天禧粤宴", stars: 5, cuisine: "粤菜/中菜", region: "新界东", location: "沙田区", address: "沙田白石角科学园海滨长廊尊尚馆", price: 1680, rating: 9.5, ecoAward: "新界绿色有机农业联盟示范餐厅 • 全店低碳排能源管理", pRoom: false, wSeat: true, park: true, wine: false },
    { id: 4, name: "荃湾南丰云锦私房粤膳", stars: 5, cuisine: "粤菜/中菜", region: "新界西", location: "荃湾区", address: "荃湾大河道100号海之恋高层全景馆", price: 1580, rating: 9.5, ecoAward: null, pRoom: true, wSeat: false, park: false, wine: false },
    { id: 5, name: "大班楼 (The Chairman)", stars: 5, cuisine: "粤菜/中菜", region: "香港岛", location: "中西区", address: "中环威灵顿街198号The Wellington 3楼", price: 1920, rating: 9.9, ecoAward: "世界50最佳餐厅可持续食材典范 • 坚持新界本地有机农耕与本地渔民鲜捕", pRoom: false, wSeat: false, park: false, wine: true },

    // --- 三星 × 法式料理 (5 间) ---
    { id: 6, name: "Caprice (香港四季酒店)", stars: 5, cuisine: "法式料理", region: "香港岛", location: "中西区", address: "中环金融街8号香港四季酒店6楼", price: 2000, rating: 9.8, ecoAward: "四季酒店可持续海产采购认证 • 法国有机农庄直供食材", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 7, name: "天巢法国餐厅 (Robuchon 九龙峰会)", stars: 5, cuisine: "法式料理", region: "九龙", location: "油尖旺区", address: "西九龙文化区艺术公园高空艺术馆顶层", price: 1950, rating: 9.7, ecoAward: null, pRoom: false, wSeat: true, park: true, wine: true },
    { id: 8, name: "西贡白沙湾蔚蓝法式公馆", stars: 5, cuisine: "法式料理", region: "新界东", location: "西贡区", address: "西贡白沙湾游艇码头海滨道8号", price: 1780, rating: 9.6, ecoAward: "香港海洋公园保育基金「无饮管及环保海鲜」钻石级伙伴", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 9, name: "屯门黄金海岸御海法式名邸", stars: 5, cuisine: "法式料理", region: "新界西", location: "屯门区", address: "屯门青山公路1号黄金海岸名邸顶层", price: 1650, rating: 9.5, ecoAward: "信和集团可持续发展金奖 • 设有室内微型水耕种植香草园", pRoom: false, wSeat: true, park: true, wine: false },
    { id: 10, name: "九龙环球港法式尊尚品味馆", stars: 5, cuisine: "法式料理", region: "九龙", location: "油尖旺区", address: "尖沙咀柯士甸道西1号天际大厦100楼", price: 1880, rating: 9.7, ecoAward: "国际绿色建筑LEED金级认证合作餐厅", pRoom: true, wSeat: false, park: true, wine: true },

    // --- 三星 × 日本料理 (5 间) ---
    { id: 11, name: "鮨·志魂 (Sushi Shikon)", stars: 5, cuisine: "日本料理", region: "香港岛", location: "中西区", address: "中环皇后大道中15号置地文华东方酒店7楼", price: 2000, rating: 9.8, ecoAward: null, pRoom: true, wSeat: false, park: true, wine: true },
    { id: 12, name: "天空龙吟极上日本料理", stars: 5, cuisine: "日本料理", region: "九龙", location: "油尖旺区", address: "尖沙咀柯士甸道西1号环球贸易广场101楼", price: 1950, rating: 9.7, ecoAward: "亚洲零碳排放冷链物流配送示范单位", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 13, name: "大埔吐露港松风极上割烹", stars: 5, cuisine: "日本料理", region: "新界东", location: "大埔区", address: "大埔大美督水岸松风别馆", price: 1720, rating: 9.5, ecoAward: null, pRoom: false, wSeat: true, park: true, wine: false },
    { id: 14, name: "元朗锦田翠竹怀石御膳", stars: 5, cuisine: "日本料理", region: "新界西", location: "元朗区", address: "元朗锦田水尾村生态庄园庭院", price: 1600, rating: 9.5, ecoAward: "本地有机竹笋与山泉水活水养殖溯源认证", pRoom: true, wSeat: false, park: false, wine: false },
    { id: 15, name: "西贡早禾坑正统江户前主厨店", stars: 5, cuisine: "日本料理", region: "新界东", location: "西贡区", address: "西贡大网仔路早禾坑海滨别院", price: 1850, rating: 9.6, ecoAward: "严选可持续认证小鳞犬牙南极鱼与野生捕捞直供", pRoom: false, wSeat: true, park: true, wine: true },

    // --- 三星 × 意式料理 (5 间) ---
    { id: 16, name: "8 1/2 Otto e Mezzo BOMBANA", stars: 5, cuisine: "意式料理", region: "香港岛", location: "中西区", address: "中环遮打道16-20号历山大厦2楼202号铺", price: 1980, rating: 9.8, ecoAward: "皮埃蒙特可持续松露保育基金支持者", pRoom: true, wSeat: false, park: true, wine: true },
    { id: 17, name: "Tosca di Angelo (丽思卡尔顿)", stars: 5, cuisine: "意式料理", region: "九龙", location: "油尖旺区", address: "尖沙咀柯士甸道西1号环球贸易广场102楼", price: 1880, rating: 9.7, ecoAward: "万豪国际可持续海鲜倡议成员", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 18, name: "西贡银线湾意式滨海宫邸", stars: 5, cuisine: "意式料理", region: "新界东", location: "西贡区", address: "西贡清水湾道银线湾海滨平台", price: 1680, rating: 9.5, ecoAward: null, pRoom: false, wSeat: true, park: true, wine: true },
    { id: 19, name: "大屿山愉景湾维罗纳意式宴厅", stars: 5, cuisine: "意式料理", region: "新界西", location: "离岛区", address: "大屿山愉景湾海澄湖畔路88号海滨翼", price: 1550, rating: 9.5, ecoAward: "愉景湾零碳排智慧社区环保商户认证", pRoom: true, wSeat: true, park: false, wine: false },
    { id: 20, name: "葵青蓝巴勒海湾意式私享名邸", stars: 5, cuisine: "意式料理", region: "新界西", location: "葵青区", address: "青衣青敬路33号蓝巴勒海峡观景公馆", price: 1480, rating: 9.5, ecoAward: null, pRoom: true, wSeat: false, park: true, wine: true },

    // =========================================================================
    // 2. 米其林二星 (stars: 4) — 共 20 间 (均价 $980 ~ $1450)
    // =========================================================================
    // --- 二星 × 粤菜/中菜 (5 间) ---
    { id: 21, name: "文华厅 (香港文华东方酒店)", stars: 4, cuisine: "粤菜/中菜", region: "香港岛", location: "中西区", address: "中环干诺道中5号香港文华东方酒店25楼", price: 1450, rating: 9.4, ecoAward: "文华东方集团可持续淘汰一次性塑料及环保食材认证", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 22, name: "天龙轩 (九龙丽思卡尔顿)", stars: 4, cuisine: "粤菜/中菜", region: "九龙", location: "油尖旺区", address: "尖沙咀柯士甸道西1号环球贸易广场102楼", price: 1380, rating: 9.7, ecoAward: "万豪国际 Serve360 可持续发展认证 • 厨余转化生物能源项目", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 23, name: "沙田18 (香港沙田凯悦酒店)", stars: 4, cuisine: "粤菜/中菜", region: "新界东", location: "沙田区", address: "沙田泽祥街18号香港沙田凯悦酒店4楼", price: 1180, rating: 9.4, ecoAward: "凯悦 World of Care 环保认证 • 采用龙眼果木修枝再生燃料", pRoom: true, wSeat: true, park: true, wine: false },
    { id: 24, name: "元朗屏山传统名家御宴", stars: 4, cuisine: "粤菜/中菜", region: "新界西", location: "元朗区", address: "元朗屏山塘坊村古迹文化径8号", price: 1050, rating: 9.2, ecoAward: null, pRoom: true, wSeat: false, park: false, wine: false },
    { id: 25, name: "润 Rùn (香港瑞吉酒店)", stars: 4, cuisine: "粤菜/中菜", region: "香港岛", location: "湾仔区", address: "湾仔港湾径1号香港瑞吉酒店2楼", price: 1420, rating: 9.5, ecoAward: "瑞吉酒店绿色厨房认证 • 选用本地生态养殖家禽", pRoom: false, wSeat: false, park: true, wine: true },

    // --- 二星 × 法式料理 (5 间) ---
    { id: 26, name: "Amber (置地文华东方酒店)", stars: 4, cuisine: "法式料理", region: "香港岛", location: "中西区", address: "中环皇后大道中15号置地文华东方酒店7楼", price: 1450, rating: 9.7, ecoAward: "米其林绿星奖 (Michelin Green Star) • 全植物基乳制品替代体系", pRoom: false, wSeat: false, park: true, wine: true },
    { id: 27, name: "ÉPURE (尖沙咀海港城)", stars: 4, cuisine: "法式料理", region: "九龙", location: "油尖旺区", address: "尖沙咀海港城海洋中心4楼403号铺", price: 1350, rating: 9.4, ecoAward: null, pRoom: true, wSeat: true, park: true, wine: true },
    { id: 28, name: "西贡海傍法国名厨品味馆", stars: 4, cuisine: "法式料理", region: "新界东", location: "西贡区", address: "西贡海傍广场新街15号全海景栋", price: 1200, rating: 9.3, ecoAward: "每日西贡近海小艇鲜捕采购减碳协议单位", pRoom: false, wSeat: true, park: false, wine: false },
    { id: 29, name: "葵涌高空海湾法式私房宴", stars: 4, cuisine: "法式料理", region: "新界西", location: "葵青区", address: "葵涌青山公路388号高层尊荣厅", price: 1100, rating: 9.2, ecoAward: null, pRoom: true, wSeat: false, park: true, wine: true },
    { id: 30, name: "九龙站当代艺术法式尊飨", stars: 4, cuisine: "法式料理", region: "九龙", location: "油尖旺区", address: "尖沙咀雅翔道1号圆方顶级海景阁", price: 1320, rating: 9.4, ecoAward: "零塑料餐具与厨余就地堆肥处理示范单位", pRoom: false, wSeat: true, park: true, wine: true },

    // --- 二星 × 日本料理 (5 间) ---
    { id: 31, name: "割烹 凛 (Kappo Rin)", stars: 4, cuisine: "日本料理", region: "香港岛", location: "中西区", address: "中环皇后大道中15号置地文华东方酒店7楼", price: 1450, rating: 9.5, ecoAward: null, pRoom: true, wSeat: false, park: true, wine: true },
    { id: 32, name: "鮨·见 (Sushi Taki 九龙店)", stars: 4, cuisine: "日本料理", region: "九龙", location: "九龙城区", address: "红磡湾梳士巴利道海滨花园平台2楼", price: 1380, rating: 9.4, ecoAward: "MSC 国际认证蓝鳍金枪鱼可追溯渔业伙伴", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 33, name: "大埔汀角江户前海鲜怀石", stars: 4, cuisine: "日本料理", region: "新界东", location: "大埔区", address: "大埔汀角路海滨长廊翠影轩", price: 1150, rating: 9.2, ecoAward: null, pRoom: false, wSeat: true, park: true, wine: false },
    { id: 34, name: "屯门海翠和风炭火割烹", stars: 4, cuisine: "日本料理", region: "新界西", location: "屯门区", address: "屯门湖翠路海翠长廊名店街", price: 1080, rating: 9.2, ecoAward: null, pRoom: true, wSeat: false, park: false, wine: false },
    { id: 35, name: "马鞍山鞍骏水岸时令割烹", stars: 4, cuisine: "日本料理", region: "新界东", location: "沙田区", address: "沙田马鞍山鞍骏街海滨名邸", price: 1180, rating: 9.3, ecoAward: "本地有机蔬菜产地直销与海鲜可溯源体系", pRoom: false, wSeat: true, park: true, wine: true },

    // --- 二星 × 意式料理 (5 间) ---
    { id: 36, name: "Octavium (中环)", stars: 4, cuisine: "意式料理", region: "香港岛", location: "中西区", address: "中环德辅道中22号One Chinachem 8楼", price: 1350, rating: 9.4, ecoAward: null, pRoom: true, wSeat: false, park: false, wine: true },
    { id: 37, name: "海港城巴罗洛意式景观酒廊", stars: 4, cuisine: "意式料理", region: "九龙", location: "油尖旺区", address: "尖沙咀广东道海港城港威大厦25楼", price: 1280, rating: 9.4, ecoAward: null, pRoom: true, wSeat: true, park: true, wine: true },
    { id: 38, name: "西贡海景托斯卡纳意式庄园", stars: 4, cuisine: "意式料理", region: "新界东", location: "西贡区", address: "西贡大网仔路早禾坑海滨花园", price: 1120, rating: 9.3, ecoAward: "庄园自家天然堆肥意式香草园", pRoom: false, wSeat: true, park: true, wine: false },
    { id: 39, name: "荃湾汀九海湾意式私厨", stars: 4, cuisine: "意式料理", region: "新界西", location: "荃湾区", address: "荃湾青山公路汀九段海景豪苑", price: 1050, rating: 9.2, ecoAward: null, pRoom: true, wSeat: true, park: false, wine: false },
    { id: 40, name: "东涌大屿蓝湾意式窑烤工坊", stars: 4, cuisine: "意式料理", region: "新界西", location: "离岛区", address: "东涌达东路20号东薈城名品高层海景阁", price: 980, rating: 9.2, ecoAward: "采用大屿山再生林木修剪柴火窑烤认证", pRoom: false, wSeat: false, park: true, wine: true },

    // =========================================================================
    // 3. 米其林一星 (stars: 3) — 共 20 间 (均价 $580 ~ $960)
    // =========================================================================
    // --- 一星 × 粤菜/中菜 (5 间) ---
    { id: 41, name: "万豪金殿 (Man Ho)", stars: 3, cuisine: "粤菜/中菜", region: "香港岛", location: "中西区", address: "金钟道88号太古广场香港JW万豪酒店3楼", price: 960, rating: 9.3, ecoAward: "WWF 环保海鲜先锋餐厅 • 本地有机菇菌与茶园直采", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 42, name: "逸东轩 (Yat Tung Heen)", stars: 3, cuisine: "粤菜/中菜", region: "九龙", location: "油尖旺区", address: "佐敦弥敦道380号香港逸东酒店B2楼层", price: 820, rating: 9.2, ecoAward: "EarthCheck 认证 • 惜食堂厨余捐赠与有机食材伙伴", pRoom: true, wSeat: false, park: true, wine: false },
    { id: 43, name: "六福菜馆 (西贡总店)", stars: 3, cuisine: "粤菜/中菜", region: "新界东", location: "西贡区", address: "西贡市场街49号地下至2楼", price: 780, rating: 9.2, ecoAward: "西贡休渔期生态保育支持商户 • 每日小艇低碳直采鲜鱼", pRoom: false, wSeat: true, park: false, wine: false },
    { id: 44, name: "端记精致私房馆 (荃湾川龙)", stars: 3, cuisine: "粤菜/中菜", region: "新界西", location: "荃湾区", address: "荃湾荃锦公路川龙村57-58号", price: 650, rating: 9.1, ecoAward: "大帽山天然山泉水自家种植有机西洋菜 • 零碳排里程农庄餐厅", pRoom: false, wSeat: true, park: true, wine: false },
    { id: 45, name: "启德邮轮海景名门国宴", stars: 3, cuisine: "粤菜/中菜", region: "九龙", location: "九龙城区", address: "启德承丰道33号启德邮轮码头顶层花园", price: 880, rating: 9.3, ecoAward: "香港绿建环评铂金级海景建筑低碳餐厅", pRoom: true, wSeat: true, park: true, wine: true },

    // --- 一星 × 法式料理 (5 间) ---
    { id: 46, name: "Roganic Hong Kong", stars: 3, cuisine: "法式料理", region: "香港岛", location: "湾仔区", address: "铜锣湾告士打道255号信和广场UG楼8号", price: 920, rating: 9.6, ecoAward: "米其林绿星奖 (Michelin Green Star) • 新界本地有机农场直供与零浪费微型菜园", pRoom: false, wSeat: false, park: true, wine: true },
    { id: 47, name: "吉地士 (Gaddi's 半岛酒店)", stars: 3, cuisine: "法式料理", region: "九龙", location: "油尖旺区", address: "尖沙咀梳士巴利道香港半岛酒店1楼", price: 960, rating: 9.5, ecoAward: "半岛绿色认证 • 有机香草天台花园自给计划", pRoom: true, wSeat: false, park: true, wine: true },
    { id: 48, name: "沙田马场尊尚法式品味厅", stars: 3, cuisine: "法式料理", region: "新界东", location: "沙田区", address: "沙田马场看台大楼贵宾楼层", price: 850, rating: 9.2, ecoAward: "赛马会绿色运营节能建筑示范单位", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 49, name: "深井海澄法式风情小馆", stars: 3, cuisine: "法式料理", region: "新界西", location: "荃湾区", address: "荃湾深井青山公路深井段海澄轩", price: 720, rating: 9.1, ecoAward: null, pRoom: false, wSeat: true, park: false, wine: false },
    { id: 50, name: "Feuille (自然主义法餐)", stars: 3, cuisine: "法式料理", region: "香港岛", location: "中西区", address: "中环威灵顿街198号The Wellington 5楼", price: 890, rating: 9.4, ecoAward: "米其林绿星奖 • 100% 采用低碳有机植物与时令永续水产", pRoom: false, wSeat: false, park: false, wine: true },

    // --- 一星 × 日本料理 (5 间) ---
    { id: 51, name: "摩 (Mora)", stars: 3, cuisine: "日本料理", region: "香港岛", location: "中西区", address: "上环摩罗上街40号地下", price: 860, rating: 9.5, ecoAward: "米其林绿星奖 • 低碳植物基大豆蛋白创新及零塑环保包装", pRoom: false, wSeat: false, park: false, wine: true },
    { id: 52, name: "Sushi Wadatsumi (K11 MUSEA)", stars: 3, cuisine: "日本料理", region: "九龙", location: "油尖旺区", address: "尖沙咀梳士巴利道18号K11 MUSEA 6楼", price: 920, rating: 9.3, ecoAward: "K11 绿色可追溯食品采购安全计划认证", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 53, name: "大埔吐露港日本直输寿司割烹", stars: 3, cuisine: "日本料理", region: "新界东", location: "大埔区", address: "大埔白石角海赋街8号水岸名庭", price: 790, rating: 9.1, ecoAward: null, pRoom: false, wSeat: true, park: true, wine: false },
    { id: 54, name: "屯门三圣湾极鲜和风御膳", stars: 3, cuisine: "日本料理", region: "新界西", location: "屯门区", address: "屯门三圣街三圣海鲜舫平台2楼", price: 680, rating: 9.0, ecoAward: "三圣湾本地休渔友善海产直供", pRoom: true, wSeat: false, park: true, wine: false },
    { id: 55, name: "九龙湾德福高端怀石别馆", stars: 3, cuisine: "日本料理", region: "九龙", location: "观塘区", address: "九龙湾伟业街33号德福大厦尊荣层", price: 840, rating: 9.1, ecoAward: null, pRoom: true, wSeat: false, park: true, wine: true },

    // --- 一星 × 意式料理 (5 间) ---
    { id: 56, name: "Grissini (香港君悦酒店)", stars: 3, cuisine: "意式料理", region: "香港岛", location: "湾仔区", address: "湾仔港湾道1号香港君悦酒店2楼", price: 950, rating: 9.3, ecoAward: "君悦酒店绿色会议与永续食材采购认证", pRoom: true, wSeat: true, park: true, wine: true },
    { id: 57, name: "尖沙咀丽晶海畔意式餐厅", stars: 3, cuisine: "意式料理", region: "九龙", location: "油尖旺区", address: "尖沙咀梳士巴利道18号香港丽晶酒店海滨层", price: 890, rating: 9.3, ecoAward: null, pRoom: false, wSeat: true, park: true, wine: true },
    { id: 58, name: "西贡匡湖居露台意式餐馆", stars: 3, cuisine: "意式料理", region: "新界东", location: "西贡区", address: "西贡西贡公路380号匡湖居游艇会所", price: 760, rating: 9.1, ecoAward: "匡湖居自然保护区绿色友善伙伴", pRoom: false, wSeat: true, park: false, wine: false },
    { id: 59, name: "元朗锦田绿色水耕意面工坊", stars: 3, cuisine: "意式料理", region: "新界西", location: "元朗区", address: "元朗锦田公路水尾村有机生态园西座", price: 580, rating: 9.0, ecoAward: "香港水耕农业绿色认证 • 节水 90% 垂直农法即摘即煮", pRoom: false, wSeat: false, park: true, wine: false },
    { id: 60, name: "中环荷李活道名邸意式私厨", stars: 3, cuisine: "意式料理", region: "香港岛", location: "中西区", address: "中环荷李活道108号聚贤居高层", price: 910, rating: 9.2, ecoAward: null, pRoom: true, wSeat: false, park: false, wine: true },

    // =========================================================================
    // 4. 其它精选 (stars: 2) — 共 20 间 (均价 $200 ~ $550)
    // =========================================================================
    // --- 精选 × 粤菜/中菜 (5 间) ---
    { id: 61, name: "何洪记名家私房宴", stars: 2, cuisine: "粤菜/中菜", region: "香港岛", location: "东区", address: "北角渣华道123号北角汇二期2楼", price: 450, rating: 9.1, ecoAward: null, pRoom: true, wSeat: true, park: false, wine: false },
    { id: 62, name: "黄大仙志莲净苑荷花池畔素斋宴", stars: 2, cuisine: "粤菜/中菜", region: "九龙", location: "黄大仙区", address: "钻石山凤德道60号南莲园池龙门楼", price: 320, rating: 9.3, ecoAward: "100% 纯植物基低碳排健康饮食认证 • 园林雨水回收灌溉系统", pRoom: false, wSeat: true, park: true, wine: false },
    { id: 63, name: "大埔林村有机农庄私房料理", stars: 2, cuisine: "粤菜/中菜", region: "新界东", location: "大埔区", address: "大埔林锦公路新塘段生态园12号", price: 280, rating: 9.0, ecoAward: "香港有机资源中心认证合作餐厅 • 100% 自家农田有机蔬果与厨余堆肥", pRoom: true, wSeat: false, park: true, wine: false },
    { id: 64, name: "元朗朗屏百年围村风味私厨", stars: 2, cuisine: "粤菜/中菜", region: "新界西", location: "元朗区", address: "元朗朗屏宏乐街38号大生围渔村旁", price: 220, rating: 8.9, ecoAward: "元朗传统生态鱼塘无公害鲜鱼供销认证", pRoom: false, wSeat: false, park: false, wine: false },
    { id: 65, name: "上水古洞有机生态园农庄御膳", stars: 2, cuisine: "粤菜/中菜", region: "新界东", location: "北区", address: "上水古洞河上乡排峰路生态庄园", price: 250, rating: 8.9, ecoAward: "北区低碳农业发展联盟成员 • 零化学农药水耕及有机走地鸡认证", pRoom: false, wSeat: true, park: true, wine: false },

    // --- 精选 × 法式料理 (5 间) ---
    { id: 66, name: "太古坊糖厂街有机现代法欧餐厅", stars: 2, cuisine: "法式料理", region: "香港岛", location: "东区", address: "鲗鱼涌太古坊华兰路29号东隅酒店1楼", price: 520, rating: 9.2, ecoAward: "太古酒店 SD2030 可持续发展金奖 • 100% 厨余分解机转化肥料", pRoom: true, wSeat: false, park: true, wine: true },
    { id: 67, name: "深水埗文青活化古迹法式小馆", stars: 2, cuisine: "法式料理", region: "九龙", location: "深水埗区", address: "深水埗荔枝角道119号雷生春堂旁古迹楼", price: 380, rating: 9.1, ecoAward: "深水埗社区咖啡渣再生与本地精酿低碳合作餐厅", pRoom: false, wSeat: false, park: false, wine: false },
    { id: 68, name: "沙田科学园绿色水岸法式餐厅", stars: 2, cuisine: "法式料理", region: "新界东", location: "沙田区", address: "沙田白石角科学园海滨长廊19W大楼", price: 420, rating: 9.0, ecoAward: "香港科学园绿色低碳餐饮示范店 • 全店使用太阳能与生物可降解餐具", pRoom: false, wSeat: true, park: true, wine: false },
    { id: 69, name: "大屿山大澳文物酒店玻璃屋法欧餐厅", stars: 2, cuisine: "法式料理", region: "新界西", location: "离岛区", address: "大屿山大澳石仔埗街旧大澳警署", price: 360, rating: 9.1, ecoAward: "UNESCO 亚太文化遗产保护奖 • 大澳社区低碳食材及太阳能供电认证", pRoom: false, wSeat: true, park: false, wine: false },
    { id: 70, name: "屯门黄金海岸聆沨法式海鲜扒房", stars: 2, cuisine: "法式料理", region: "新界西", location: "屯门区", address: "屯门青山公路1号香港黄金海岸酒店低层", price: 480, rating: 9.0, ecoAward: "信和集团可持续发展餐厅 • 设有酒店有机香草农圃及鱼菜共生系统", pRoom: true, wSeat: true, park: true, wine: true },

    // --- 精选 × 日本料理 (5 间) ---
    { id: 71, name: "铜锣湾炭火地鸡与极鲜割烹", stars: 2, cuisine: "日本料理", region: "香港岛", location: "湾仔区", address: "铜锣湾登龙街18号V Point 28楼", price: 550, rating: 9.1, ecoAward: null, pRoom: true, wSeat: true, park: false, wine: true },
    { id: 72, name: "观塘海滨日式水产工坊", stars: 2, cuisine: "日本料理", region: "九龙", location: "观塘区", address: "观塘海滨道133号万兆丰中心低层", price: 350, rating: 9.0, ecoAward: "可持续沿海渔业冷链直采合作商", pRoom: false, wSeat: false, park: true, wine: false },
    { id: 73, name: "将军澳海旁江户前回转寿司工坊", stars: 2, cuisine: "日本料理", region: "新界东", location: "西贡区", address: "将军澳唐俊街23号MONTEREY Place地下", price: 290, rating: 9.0, ecoAward: null, pRoom: false, wSeat: true, park: true, wine: false },
    { id: 74, name: "荃湾南丰纱厂活化和风素食馆", stars: 2, cuisine: "日本料理", region: "新界西", location: "荃湾区", address: "荃湾白田坝街45号南丰纱厂1楼", price: 240, rating: 9.2, ecoAward: "南丰纱厂可持续文创奖 • 采用香港本地水耕菜及升级再造食材", pRoom: false, wSeat: false, park: false, wine: false },
    { id: 75, name: "葵涌都会和风炭烤炉端烧", stars: 2, cuisine: "日本料理", region: "新界西", location: "葵青区", address: "葵涌兴芳路223号新都会广场4楼", price: 200, rating: 8.9, ecoAward: null, pRoom: true, wSeat: false, park: true, wine: false },

    // --- 精选 × 意式料理 (5 间) ---
    { id: 76, name: "赤柱美利楼海风地中海意式餐厅", stars: 2, cuisine: "意式料理", region: "香港岛", location: "南区", address: "赤柱佳美道23号美利楼2楼", price: 490, rating: 9.1, ecoAward: "古迹建筑自然通风节能设计 • 采用可持续认证地中海海产", pRoom: false, wSeat: true, park: true, wine: false },
    { id: 77, name: "大埔吐露港意式牛排窑烤馆", stars: 2, cuisine: "意式料理", region: "新界东", location: "大埔区", address: "大埔大美督路汀角海滨长廊3号", price: 460, rating: 9.1, ecoAward: "LEED 铂金级绿建筑餐厅 • 选用碳中和认证澳洲草饲牛肉", pRoom: true, wSeat: false, park: true, wine: true },
    { id: 78, name: "大埔吐露港海景意式庄园披萨", stars: 2, cuisine: "意式料理", region: "新界东", location: "大埔区", address: "大埔大美督路汀角海滨长廊22号", price: 310, rating: 8.9, ecoAward: null, pRoom: false, wSeat: true, park: false, wine: false },
    { id: 79, name: "愉景湾海滨白教堂浪漫意式工坊", stars: 2, cuisine: "意式料理", region: "新界西", location: "离岛区", address: "大屿山愉景湾海澄湖畔路88号海滨翼", price: 430, rating: 9.1, ecoAward: "愉景湾无车环保社区零碳排接驳认证餐厅", pRoom: false, wSeat: true, park: false, wine: true },
    { id: 80, name: "红磡海滨罗马传统手工意面馆", stars: 2, cuisine: "意式料理", region: "九龙", location: "九龙城区", address: "红磡环海街7号海滨广场二期地下", price: 260, rating: 9.0, ecoAward: null, pRoom: false, wSeat: false, park: true, wine: false }
];

// 正交基底映射组装（确保全局挂载）
var restaurantsData = rawRestaurantsList.map(function(item, idx) {
    var isEco = Boolean(item.ecoAward);
    return {
        id: item.id,
        name: item.name,
        stars: item.stars,
        cuisine: item.cuisine,
        region: item.region,
        location: item.location,
        district: item.location,
        address: item.address,
        distance: "距离核心交通枢纽步行约 3-6 分钟",
        images: [uniqueRestaurantImages[idx]],
        rating: item.rating,
        reviewCount: 750 + (idx * 43) % 2200,
        verdict: item.rating >= 9.6 ? "传奇极佳" : item.rating >= 9.3 ? "极高赞誉" : "精选好评",
        originalPrice: Math.round(item.price * 1.15),
        price: item.price,
        ecoAward: item.ecoAward,
        hasPrivateRoom: Boolean(item.pRoom),
        hasWindowSeat: Boolean(item.wSeat),
        hasParking: Boolean(item.park),
        hasSommelier: Boolean(item.wine),
        hasSustainable: isEco,
        menus: [
            {
                id: "m_" + item.id + "_1",
                name: item.name + " 经典主厨品鉴套餐",
                image: uniqueRestaurantImages[(idx + 1) % uniqueRestaurantImages.length],
                style: item.cuisine,
                drinks: item.wine ? "包含侍酒师餐酒搭配" : "包含精选名茶或特调饮品",
                seating: item.wSeat ? "优先安排景观位" : "主厅雅致席位",
                cancel: "提前24小时免费取消",
                origPrice: Math.round(item.price * 1.15),
                price: item.price
            }
        ]
    };
});