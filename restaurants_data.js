// restaurants_data.js - 80 間正交獨立星級餐廳 (完整支援兩文三語 zh-HK / zh-CN / en)

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

const CUISINE_I18N = {
    "中式料理": { "zh-HK": "中式料理", "zh-CN": "中式料理", "en": "Chinese Cuisine" },
    "法式料理": { "zh-HK": "法式料理", "zh-CN": "法式料理", "en": "French Fine Dining" },
    "日本料理": { "zh-HK": "日本料理", "zh-CN": "日本料理", "en": "Japanese Cuisine" },
    "意式料理": { "zh-HK": "意式料理", "zh-CN": "意式料理", "en": "Italian Cuisine" }
};

const REGION_I18N = {
    "香港岛": { "zh-HK": "香港島", "zh-CN": "香港岛", "en": "Hong Kong Island" },
    "九龙": { "zh-HK": "九龍", "zh-CN": "九龙", "en": "Kowloon" },
    "新界东": { "zh-HK": "新界東", "zh-CN": "新界东", "en": "New Territories East" },
    "新界西": { "zh-HK": "新界西", "zh-CN": "新界西", "en": "New Territories West" }
};

// 80 間正交獨立餐廳 (嚴格 1~80 間，不重複追加)
const rawRestaurantsList = [
    // --- 1 ~ 20 (米芝蓮三星 stars: 5) ---
    {
        id: 1, stars: 5, cuisine: "中式料理", region: "香港岛",
        location: { "zh-HK": "中西區", "zh-CN": "中西区", "en": "Central & Western District" },
        price: 1980, rating: 9.8,
        name: { "zh-HK": "龍景軒 (香港四季酒店)", "zh-CN": "龙景轩 (香港四季酒店)", "en": "Lung King Heen (Four Seasons Hotel)" },
        address: { "zh-HK": "中環金融街8號香港四季酒店4樓", "zh-CN": "中环金融街8号香港四季酒店4楼", "en": "4/F, Four Seasons Hotel Hong Kong, 8 Finance Street, Central" },
        ecoAward: { "zh-HK": "WWF 環保海鮮夥伴 • 100% 拒用魚翅及支持可持續漁業認證", "zh-CN": "WWF 环保海鲜伙伴 • 100% 拒用鱼翅及支持可持续渔业认证", "en": "WWF Sustainable Seafood Partner • Shark Fin-Free & Sustainable Fishery Certified" },
        pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 2, stars: 5, cuisine: "中式料理", region: "九龙",
        location: { "zh-HK": "油尖旺區", "zh-CN": "油尖旺区", "en": "Yau Tsim Mong District" },
        price: 1880, rating: 9.6,
        name: { "zh-HK": "唐閣 (香港朗廷酒店)", "zh-CN": "唐阁 (香港朗廷酒店)", "en": "T'ang Court (The Langham Hong Kong)" },
        address: { "zh-HK": "尖沙咀北京道8號香港朗廷酒店1樓", "zh-CN": "尖沙咀北京道8号香港朗廷酒店1楼", "en": "1/F, The Langham Hong Kong, 8 Peking Road, Tsim Sha Tsui" },
        ecoAward: { "zh-HK": "EarthCheck 白金級環保認證酒店餐廳 • 本地有機農場直採蔬菜", "zh-CN": "EarthCheck 白金级环保认证酒店餐厅 • 本地有机农场直采蔬菜", "en": "EarthCheck Certified Platinum Dining • Locally Sourced Organic Vegetables" },
        pRoom: true, wSeat: false, park: true, wine: true
    },
    {
        id: 3, stars: 5, cuisine: "中式料理", region: "新界东",
        location: { "zh-HK": "沙田區", "zh-CN": "沙田区", "en": "Sha Tin District" },
        price: 1680, rating: 9.5,
        name: { "zh-HK": "沙田名家天禧粵宴", "zh-CN": "沙田名家天禧粤宴", "en": "Shatin Tianxi Cantonese Master Banquet" },
        address: { "zh-HK": "沙田白石角科學園海濱長廊尊尚館", "zh-CN": "沙田白石角科学园海滨长廊尊尚馆", "en": "Science Park Waterfront Promenade Premier Pavilion, Pak Shek Kok, Sha Tin" },
        ecoAward: { "zh-HK": "新界綠色有機農業聯盟示範餐廳 • 全店低碳排能源管理", "zh-CN": "新界绿色有机农业联盟示范餐厅 • 全店低碳排能源管理", "en": "NT Green Organic Alliance Demonstration Restaurant • Low Carbon Energy System" },
        pRoom: false, wSeat: true, park: true, wine: false
    },
    {
        id: 4, stars: 5, cuisine: "中式料理", region: "新界西",
        location: { "zh-HK": "荃灣區", "zh-CN": "荃湾区", "en": "Tsuen Wan District" },
        price: 1580, rating: 9.5,
        name: { "zh-HK": "荃灣南豐雲錦私房粵膳", "zh-CN": "荃湾南丰云锦私房粤膳", "en": "Tsuen Wan Nan Fung Cantonese Private Dining" },
        address: { "zh-HK": "荃灣大河道100號海之戀高層全景館", "zh-CN": "荃湾大河道100号海之恋高层全景馆", "en": "High-Floor Ocean Panorama Room, OP Mall, 100 Tai Ho Road, Tsuen Wan" },
        ecoAward: null, pRoom: true, wSeat: false, park: false, wine: false
    },
    {
        id: 5, stars: 5, cuisine: "中式料理", region: "香港岛",
        location: { "zh-HK": "中西區", "zh-CN": "中西区", "en": "Central & Western District" },
        price: 1920, rating: 9.9,
        name: { "zh-HK": "大班樓 (The Chairman)", "zh-CN": "大班楼 (The Chairman)", "en": "The Chairman (Hong Kong)" },
        address: { "zh-HK": "中環威靈頓街198號The Wellington 3樓", "zh-CN": "中环威灵顿街198号The Wellington 3楼", "en": "3/F, The Wellington, 198 Wellington Street, Central" },
        ecoAward: { "zh-HK": "世界50最佳餐廳可持續食材典範 • 堅持本地有機農耕與本地漁民鮮捕", "zh-CN": "世界50最佳餐厅可持续食材典范 • 坚持本地有机农耕与本地渔民鲜捕", "en": "World's 50 Best Sustainable Dining Icon • Local Organic Produce & Direct Catch" },
        pRoom: false, wSeat: false, park: false, wine: true
    },
    {
        id: 6, stars: 5, cuisine: "法式料理", region: "香港岛",
        location: { "zh-HK": "中西區", "zh-CN": "中西区", "en": "Central & Western District" },
        price: 2000, rating: 9.8,
        name: { "zh-HK": "Caprice (香港四季酒店)", "zh-CN": "Caprice (香港四季酒店)", "en": "Caprice (Four Seasons Hotel Hong Kong)" },
        address: { "zh-HK": "中環金融街8號香港四季酒店6樓", "zh-CN": "中环金融街8号香港四季酒店6楼", "en": "6/F, Four Seasons Hotel Hong Kong, 8 Finance Street, Central" },
        ecoAward: { "zh-HK": "四季酒店可持續海產採購認證 • 法國有機農莊直送食材", "zh-CN": "四季酒店可持续海产采购认证 • 法国有机农庄直供食材", "en": "Four Seasons Sustainable Seafood Certified • French Organic Farm Direct Supply" },
        pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 7, stars: 5, cuisine: "法式料理", region: "九龙",
        location: { "zh-HK": "油尖旺區", "zh-CN": "油尖旺区", "en": "Yau Tsim Mong District" },
        price: 1950, rating: 9.7,
        name: { "zh-HK": "天巢法國餐廳 (Robuchon 九龍頂級峰會)", "zh-CN": "天巢法国餐厅 (Robuchon 九龙峰会)", "en": "Robuchon High Altitude Dining Salon Kowloon" },
        address: { "zh-HK": "西九文化區藝術公園高空藝術館頂層", "zh-CN": "西九龙文化区艺术公园高空艺术馆顶层", "en": "Penthouse Art Pavilion, West Kowloon Cultural District Art Park" },
        ecoAward: null, pRoom: false, wSeat: true, park: true, wine: true
    },
    {
        id: 8, stars: 5, cuisine: "法式料理", region: "新界东",
        location: { "zh-HK": "西貢區", "zh-CN": "西贡区", "en": "Sai Kung District" },
        price: 1780, rating: 9.6,
        name: { "zh-HK": "西貢白沙灣蔚藍法式公館", "zh-CN": "西贡白沙湾蔚蓝法式公馆", "en": "Hebe Haven Azure French Coastal Mansion Sai Kung" },
        address: { "zh-HK": "西貢白沙灣遊艇碼頭海濱道8號", "zh-CN": "西贡白沙湾游艇码头海滨道8号", "en": "8 Waterfront Road, Hebe Haven Marina, Sai Kung" },
        ecoAward: { "zh-HK": "香港海洋公園保育基金「環保海鮮」鑽石級夥伴", "zh-CN": "香港海洋公园保育基金「环保海鲜」钻石级伙伴", "en": "Ocean Park Conservation Foundation Certified Diamond Eco-Seafood Partner" },
        pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 9, stars: 5, cuisine: "法式料理", region: "新界西",
        location: { "zh-HK": "屯門區", "zh-CN": "屯门区", "en": "Tuen Mun District" },
        price: 1650, rating: 9.5,
        name: { "zh-HK": "屯門黃金海岸御海法式名邸", "zh-CN": "屯门黄金海岸御海法式名邸", "en": "Gold Coast Royal French Oceanfront Estate Tuen Mun" },
        address: { "zh-HK": "屯門青山公路1號黃金海岸名邸頂層", "zh-CN": "屯门青山公路1号黄金海岸名邸顶层", "en": "Penthouse, Gold Coast Residence, 1 Castle Peak Road, Tuen Mun" },
        ecoAward: { "zh-HK": "信和集團可持續發展金獎 • 設有室內微型水耕香草園", "zh-CN": "信和集团可持续发展金奖 • 设有室内微型水耕种植香草园", "en": "Sino Sustainability Gold Award • On-site Indoor Hydroponic Herb Garden" },
        pRoom: false, wSeat: true, park: true, wine: false
    },
    {
        id: 10, stars: 5, cuisine: "法式料理", region: "九龙",
        location: { "zh-HK": "油尖旺區", "zh-CN": "油尖旺区", "en": "Yau Tsim Mong District" },
        price: 1880, rating: 9.7,
        name: { "zh-HK": "九龍環球港法式尊尚品味館", "zh-CN": "九龙环球港法式尊尚品味馆", "en": "Skyline French Gastronomy Lounge Kowloon" },
        address: { "zh-HK": "尖沙咀柯士甸道西1號天際大廈100樓", "zh-CN": "尖沙咀柯士甸道西1号天际大厦100楼", "en": "100/F, Sky Tower, 1 Austin Road West, Tsim Sha Tsui" },
        ecoAward: { "zh-HK": "國際綠色建築 LEED 金級認證合作餐廳", "zh-CN": "国际绿色建筑LEED金级认证合作餐厅", "en": "LEED Gold Certified Sustainable Green Building Partner Restaurant" },
        pRoom: true, wSeat: false, park: true, wine: true
    },
    {
        id: 11, stars: 5, cuisine: "日本料理", region: "香港岛",
        location: { "zh-HK": "中西區", "zh-CN": "中西区", "en": "Central & Western District" },
        price: 2000, rating: 9.8,
        name: { "zh-HK": "鮨·志魂 (Sushi Shikon)", "zh-CN": "鮨·志魂 (Sushi Shikon)", "en": "Sushi Shikon Hong Kong" },
        address: { "zh-HK": "中環皇后大道中15號置地文華東方酒店7樓", "zh-CN": "中环皇后大道中15号置地文华东方酒店7楼", "en": "7/F, The Landmark Mandarin Oriental, 15 Queen's Road Central" },
        ecoAward: null, pRoom: true, wSeat: false, park: true, wine: true
    },
    {
        id: 12, stars: 5, cuisine: "日本料理", region: "九龙",
        location: { "zh-HK": "油尖旺區", "zh-CN": "油尖旺区", "en": "Yau Tsim Mong District" },
        price: 1950, rating: 9.7,
        name: { "zh-HK": "天空龍吟極上日本料理", "zh-CN": "天空龙吟极上日本料理", "en": "Tenku RyuGin Premium Japanese Kaiseki" },
        address: { "zh-HK": "尖沙咀柯士甸道西1號環球貿易廣場101樓", "zh-CN": "尖沙咀柯士甸道西1号环球贸易广场101楼", "en": "101/F, International Commerce Centre (ICC), 1 Austin Road West" },
        ecoAward: { "zh-HK": "亞洲零碳排放冷鏈物流配送示範單位", "zh-CN": "亚洲零碳排放冷链物流配送示范单位", "en": "Asian Zero-Emission Carbon-Neutral Cold Chain Logistic Partner" },
        pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 13, stars: 5, cuisine: "日本料理", region: "新界东",
        location: { "zh-HK": "大埔區", "zh-CN": "大埔区", "en": "Tai Po District" },
        price: 1720, rating: 9.5,
        name: { "zh-HK": "大埔吐露港松風極上割烹", "zh-CN": "大埔吐露港松风极上割烹", "en": "Matsu Kaze Kappo Tolo Harbour Tai Po" },
        address: { "zh-HK": "大埔大美督水岸松風別館", "zh-CN": "大埔大美督水岸松风别馆", "en": "Tai Mei Tuk Waterfront Promenade Villa, Tai Po" },
        ecoAward: null, pRoom: false, wSeat: true, park: true, wine: false
    },
    {
        id: 14, stars: 5, cuisine: "日本料理", region: "新界西",
        location: { "zh-HK": "元朗區", "zh-CN": "元朗区", "en": "Yuen Long District" },
        price: 1600, rating: 9.5,
        name: { "zh-HK": "元朗錦田翠竹懷石御膳", "zh-CN": "元朗锦田翠竹怀石御膳", "en": "Kam Tin Bamboo Kaiseki Pavilion Yuen Long" },
        address: { "zh-HK": "元朗錦田水尾村生態莊園庭院", "zh-CN": "元朗锦田水尾村生态庄园庭院", "en": "Shui Mei Village Eco Sanctuary Courtyard, Kam Tin, Yuen Long" },
        ecoAward: { "zh-HK": "本地有機竹筍與山泉水活水養殖溯源認證", "zh-CN": "本地有机竹笋与山泉水活水养殖溯源认证", "en": "Organic Mountain Spring Aqua Traceability Certification" },
        pRoom: true, wSeat: false, park: false, wine: false
    },
    {
        id: 15, stars: 5, cuisine: "日本料理", region: "新界东",
        location: { "zh-HK": "西貢區", "zh-CN": "西贡区", "en": "Sai Kung District" },
        price: 1850, rating: 9.6,
        name: { "zh-HK": "西貢早禾坑正統江戶前主廚店", "zh-CN": "西贡早禾坑正统江户前主厨店", "en": "Tso Wo Hang Authentic Edomae Sushi Sai Kung" },
        address: { "zh-HK": "西貢大網仔路早禾坑海濱別院", "zh-CN": "西贡大网仔路早禾坑海滨别院", "en": "Tai Mong Tsai Road Coastal Villa, Tso Wo Hang, Sai Kung" },
        ecoAward: { "zh-HK": "嚴選可持續認證深海漁獲與野生捕撈直供", "zh-CN": "严选可持续认证小鳞犬牙南极鱼与野生捕捞直供", "en": "Certified Sustainable Wild Seafood Supply Protocol" },
        pRoom: false, wSeat: true, park: true, wine: true
    },
    {
        id: 16, stars: 5, cuisine: "意式料理", region: "香港岛",
        location: { "zh-HK": "中西區", "zh-CN": "中西区", "en": "Central & Western District" },
        price: 1980, rating: 9.8,
        name: { "zh-HK": "8 1/2 Otto e Mezzo BOMBANA", "zh-CN": "8 1/2 Otto e Mezzo BOMBANA", "en": "8 1/2 Otto e Mezzo BOMBANA" },
        address: { "zh-HK": "中環遮打道16-20號歷山大廈2樓202號舖", "zh-CN": "中环遮打道16-20号历山大厦2楼202号铺", "en": "Shop 202, 2/F, Alexandra House, 16-20 Chater Road, Central" },
        ecoAward: { "zh-HK": "皮埃蒙特可持續松露保育基金支持商戶", "zh-CN": "皮埃蒙特可持续松露保育基金支持者", "en": "Piedmont Sustainable Truffle Forest Preservation Supporter" },
        pRoom: true, wSeat: false, park: true, wine: true
    },
    {
        id: 17, stars: 5, cuisine: "意式料理", region: "九龙",
        location: { "zh-HK": "油尖旺區", "zh-CN": "油尖旺区", "en": "Yau Tsim Mong District" },
        price: 1880, rating: 9.7,
        name: { "zh-HK": "Tosca di Angelo (九龍麗思卡爾頓)", "zh-CN": "Tosca di Angelo (丽思卡尔顿)", "en": "Tosca di Angelo (The Ritz-Carlton Hong Kong)" },
        address: { "zh-HK": "尖沙咀柯士甸道西1號環球貿易廣場102樓", "zh-CN": "尖沙咀柯士甸道西1号环球贸易广场102楼", "en": "102/F, The Ritz-Carlton, 1 Austin Road West, Tsim Sha Tsui" },
        ecoAward: { "zh-HK": "萬豪國際可持續海鮮倡議核心認證餐廳", "zh-CN": "万豪国际可持续海鲜倡议成员", "en": "Marriott International Sustainable Seafood Action Member" },
        pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 18, stars: 5, cuisine: "意式料理", region: "新界东",
        location: { "zh-HK": "西貢區", "zh-CN": "西贡区", "en": "Sai Kung District" },
        price: 1680, rating: 9.5,
        name: { "zh-HK": "西貢銀線灣意式濱海宮邸", "zh-CN": "西贡银线湾意式滨海宫邸", "en": "Silverstrand Bay Italian Riviera Villa Sai Kung" },
        address: { "zh-HK": "西貢清水灣道銀線灣海濱平台", "zh-CN": "西贡清水湾道银线湾海滨平台", "en": "Silverstrand Beach Esplanade, Clear Water Bay Road, Sai Kung" },
        ecoAward: null, pRoom: false, wSeat: true, park: true, wine: true
    },
    {
        id: 19, stars: 5, cuisine: "意式料理", region: "新界西",
        location: { "zh-HK": "離島區", "zh-CN": "离岛区", "en": "Islands District" },
        price: 1550, rating: 9.5,
        name: { "zh-HK": "大嶼山愉景灣維羅納意式宴廳", "zh-CN": "大屿山愉景湾维罗纳意式宴厅", "en": "Discovery Bay Verona Ristorante Lantau" },
        address: { "zh-HK": "大嶼山愉景灣海澄湖畔路88號海濱翼", "zh-CN": "大屿山愉景湾海澄湖畔路88号海滨翼", "en": "Waterfront Wing, 88 Siena Avenue, Discovery Bay, Lantau" },
        ecoAward: { "zh-HK": "愉景灣零碳排智慧社區環保商戶認證", "zh-CN": "愉景湾零碳排智慧社区环保商户认证", "en": "Discovery Bay Certified Zero-Carbon Community Merchant" },
        pRoom: true, wSeat: true, park: false, wine: false
    },
    {
        id: 20, stars: 5, cuisine: "意式料理", region: "新界西",
        location: { "zh-HK": "葵青區", "zh-CN": "葵青区", "en": "Kwai Tsing District" },
        price: 1480, rating: 9.5,
        name: { "zh-HK": "葵青藍巴勒海灣意式私享名邸", "zh-CN": "葵青蓝巴勒海湾意式私享名邸", "en": "Rambler Channel Italian Private Residence Kwai Tsing" },
        address: { "zh-HK": "青衣青敬路33號藍巴勒海峽觀景公館", "zh-CN": "青衣青敬路33号蓝巴勒海峡观景公馆", "en": "33 Tsing King Road, Rambler Channel Panorama Pavilion, Tsing Yi" },
        ecoAward: null, pRoom: true, wSeat: false, park: true, wine: true
    },

    // --- 21 ~ 40 (米芝蓮二星 stars: 4) ---
    {
        id: 21, stars: 4, cuisine: "中式料理", region: "香港岛",
        location: { "zh-HK": "中西區", "zh-CN": "中西区", "en": "Central & Western District" },
        price: 1450, rating: 9.4,
        name: { "zh-HK": "文華廳 (香港文華東方酒店)", "zh-CN": "文华厅 (香港文华东方酒店)", "en": "Man Wah (Mandarin Oriental Hong Kong)" },
        address: { "zh-HK": "中環干諾道中5號香港文華東方酒店25樓", "zh-CN": "中环干诺道中5号香港文华东方酒店25楼", "en": "25/F, Mandarin Oriental, 5 Connaught Road Central" },
        ecoAward: { "zh-HK": "文華東方集團可持續淘汰一次性塑料及環保食材認證", "zh-CN": "文华东方集团可持续淘汰一次性塑料及环保食材认证", "en": "Mandarin Oriental Single-Use Plastic Elimination & Sustainable Dining Award" },
        pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 22, stars: 4, cuisine: "中式料理", region: "九龙",
        location: { "zh-HK": "油尖旺區", "zh-CN": "油尖旺区", "en": "Yau Tsim Mong District" },
        price: 1380, rating: 9.7,
        name: { "zh-HK": "天龍軒 (九龍麗思卡爾頓)", "zh-CN": "天龙轩 (九龙丽思卡尔顿)", "en": "Tin Lung Heen (The Ritz-Carlton Hong Kong)" },
        address: { "zh-HK": "尖沙咀柯士甸道西1號環球貿易廣場102樓", "zh-CN": "尖沙咀柯士甸道西1号环球贸易广场102楼", "en": "102/F, The Ritz-Carlton, 1 Austin Road West, Tsim Sha Tsui" },
        ecoAward: { "zh-HK": "萬豪國際 Serve360 可持續發展認證 • 廚餘轉化生物能源項目", "zh-CN": "万豪国际 Serve360 可持续发展认证 • 厨余转化生物能源项目", "en": "Marriott Serve360 Sustainable Certified • Food Waste to Bioenergy Program" },
        pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 23, stars: 4, cuisine: "中式料理", region: "新界东",
        location: { "zh-HK": "沙田區", "zh-CN": "沙田区", "en": "Sha Tin District" },
        price: 1180, rating: 9.4,
        name: { "zh-HK": "沙田18 (香港沙田凱悅酒店)", "zh-CN": "沙田18 (香港沙田凯悦酒店)", "en": "Sha Tin 18 (Hyatt Regency Sha Tin)" },
        address: { "zh-HK": "沙田澤祥街18號香港沙田凱悅酒店4樓", "zh-CN": "沙田泽祥街18号香港沙田凯悦酒店4楼", "en": "4/F, Hyatt Regency Hong Kong, Sha Tin, 18 Chak Cheung Street" },
        ecoAward: { "zh-HK": "凱悅 World of Care 環保認證 • 採用龍眼果木修枝再生燃料", "zh-CN": "凯悦 World of Care 环保认证 • 采用龙眼果木修枝再生燃料", "en": "Hyatt World of Care Environmental Certified • Recycled Longan Wood Fuel" },
        pRoom: true, wSeat: true, park: true, wine: false
    },
    {
        id: 24, stars: 4, cuisine: "中式料理", region: "新界西",
        location: { "zh-HK": "元朗區", "zh-CN": "元朗区", "en": "Yuen Long District" },
        price: 1050, rating: 9.2,
        name: { "zh-HK": "元朗屏山傳統名家御宴", "zh-CN": "元朗屏山传统名家御宴", "en": "Ping Shan Heritage Cantonese Banquet Yuen Long" },
        address: { "zh-HK": "元朗屏山塘坊村古蹟文化徑8號", "zh-CN": "元朗屏山塘坊村古迹文化径8号", "en": "8 Heritage Trail, Tong Fong Tsuen, Ping Shan, Yuen Long" },
        ecoAward: null, pRoom: true, wSeat: false, park: false, wine: false
    },
    {
        id: 25, stars: 4, cuisine: "中式料理", region: "香港岛",
        location: { "zh-HK": "灣仔區", "zh-CN": "湾仔区", "en": "Wan Chai District" },
        price: 1420, rating: 9.5,
        name: { "zh-HK": "潤 Rùn (香港瑞吉酒店)", "zh-CN": "润 Rùn (香港瑞吉酒店)", "en": "Rùn (The St. Regis Hong Kong)" },
        address: { "zh-HK": "灣仔港灣徑1號香港瑞吉酒店2樓", "zh-CN": "湾仔港湾径1号香港瑞吉酒店2楼", "en": "2/F, The St. Regis Hong Kong, 1 Harbour Drive, Wan Chai" },
        ecoAward: { "zh-HK": "瑞吉酒店綠色廚房認證 • 選用本地生態養殖家禽", "zh-CN": "瑞吉酒店绿色厨房认证 • 选用本地生态养殖家禽", "en": "St. Regis Green Kitchen Certified • Local Free-Range Eco Poultry" },
        pRoom: false, wSeat: false, park: true, wine: true
    },
    {
        id: 26, stars: 4, cuisine: "法式料理", region: "香港岛",
        location: { "zh-HK": "中西區", "zh-CN": "中西区", "en": "Central & Western District" },
        price: 1450, rating: 9.7,
        name: { "zh-HK": "Amber (置地文華東方酒店)", "zh-CN": "Amber (置地文华东方酒店)", "en": "Amber (The Landmark Mandarin Oriental)" },
        address: { "zh-HK": "中環皇后大道中15號置地文華東方酒店7樓", "zh-CN": "中环皇后大道中15号置地文华东方酒店7楼", "en": "7/F, The Landmark Mandarin Oriental, 15 Queen's Road Central" },
        ecoAward: { "zh-HK": "米芝蓮綠星獎 (Michelin Green Star) • 全植物基乳製品替代體系", "zh-CN": "米其林绿星奖 (Michelin Green Star) • 全植物基乳制品替代体系", "en": "Michelin Green Star • Dairy-Free Plant-Based Eco Culinary Framework" },
        pRoom: false, wSeat: false, park: true, wine: true
    },
    {
        id: 27, stars: 4, cuisine: "法式料理", region: "九龙",
        location: { "zh-HK": "油尖旺區", "zh-CN": "油尖旺区", "en": "Yau Tsim Mong District" },
        price: 1350, rating: 9.4,
        name: { "zh-HK": "ÉPURE (尖沙咀海港城)", "zh-CN": "ÉPURE (尖沙咀海港城)", "en": "ÉPURE (Harbour City, Tsim Sha Tsui)" },
        address: { "zh-HK": "尖沙咀海港城海洋中心4樓403號舖", "zh-CN": "尖沙咀海港城海洋中心4楼403号铺", "en": "Shop 403, 4/F, Ocean Centre, Harbour City, Tsim Sha Tsui" },
        ecoAward: null, pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 28, stars: 4, cuisine: "法式料理", region: "新界东",
        location: { "zh-HK": "西貢區", "zh-CN": "西贡区", "en": "Sai Kung District" },
        price: 1200, rating: 9.3,
        name: { "zh-HK": "西貢海傍法國名廚品味館", "zh-CN": "西贡海傍法国名厨品味馆", "en": "Sai Kung Waterfront French Gourmet House" },
        address: { "zh-HK": "西貢海傍廣場新街15號全海景棟", "zh-CN": "西贡海傍广场新街15号全海景栋", "en": "15 Waterfront Promenade New Street, Sai Kung" },
        ecoAward: { "zh-HK": "每日西貢近海小艇鮮捕採購減碳協議單位", "zh-CN": "每日西贡近海小艇鲜捕采购减碳协议单位", "en": "Low-Carbon Sai Kung Inshore Artisanal Fishery Direct Supply" },
        pRoom: false, wSeat: true, park: false, wine: false
    },
    {
        id: 29, stars: 4, cuisine: "法式料理", region: "新界西",
        location: { "zh-HK": "葵青區", "zh-CN": "葵青区", "en": "Kwai Tsing District" },
        price: 1100, rating: 9.2,
        name: { "zh-HK": "葵涌高空海灣法式私房宴", "zh-CN": "葵涌高空海湾法式私房宴", "en": "Kwai Chung Skyline Bay French Private Salon" },
        address: { "zh-HK": "葵涌青山公路388號高層尊榮廳", "zh-CN": "葵涌青山公路388号高层尊荣厅", "en": "High Floor Panoramic Hall, 388 Castle Peak Road, Kwai Chung" },
        ecoAward: null, pRoom: true, wSeat: false, park: true, wine: true
    },
    {
        id: 30, stars: 4, cuisine: "法式料理", region: "九龙",
        location: { "zh-HK": "油尖旺區", "zh-CN": "油尖旺区", "en": "Yau Tsim Mong District" },
        price: 1320, rating: 9.4,
        name: { "zh-HK": "九龍站當代藝術法式尊饗", "zh-CN": "九龙站当代艺术法式尊飨", "en": "Contemporary Fine French Atelier Kowloon Station" },
        address: { "zh-HK": "尖沙咀雅翔道1號圓方頂級海景閣", "zh-CN": "尖沙咀雅翔道1号圆方顶级海景阁", "en": "Elements Premier Harbor Pavilion, 1 Austin Road, Tsim Sha Tsui" },
        ecoAward: { "zh-HK": "零塑料餐具與廚餘就地堆肥處理示範單位", "zh-CN": "零塑料餐具与厨余就地堆肥处理示范单位", "en": "Zero Plastic Dining & In-House Organic Composting Certified" },
        pRoom: false, wSeat: true, park: true, wine: true
    },
    {
        id: 31, stars: 4, cuisine: "日本料理", region: "香港岛",
        location: { "zh-HK": "中西區", "zh-CN": "中西区", "en": "Central & Western District" },
        price: 1450, rating: 9.5,
        name: { "zh-HK": "割烹 凜 (Kappo Rin)", "zh-CN": "割烹 凛 (Kappo Rin)", "en": "Kappo Rin (The Landmark Mandarin Oriental)" },
        address: { "zh-HK": "中環皇后大道中15號置地文華東方酒店7樓", "zh-CN": "中环皇后大道中15号置地文华东方酒店7楼", "en": "7/F, The Landmark Mandarin Oriental, 15 Queen's Road Central" },
        ecoAward: null, pRoom: true, wSeat: false, park: true, wine: true
    },
    {
        id: 32, stars: 4, cuisine: "日本料理", region: "九龙",
        location: { "zh-HK": "九龍城區", "zh-CN": "九龙城区", "en": "Kowloon City District" },
        price: 1380, rating: 9.4,
        name: { "zh-HK": "鮨·見 (Sushi Taki 九龍旗艦店)", "zh-CN": "鮨·见 (Sushi Taki 九龙店)", "en": "Sushi Taki Kowloon Waterfront" },
        address: { "zh-HK": "紅磡灣梳士巴利道海濱花園平台2樓", "zh-CN": "红磡湾梳士巴利道海滨花园平台2楼", "en": "Podium 2/F, Waterfront Promenade Garden, Hung Hom Bay" },
        ecoAward: { "zh-HK": "MSC 國際認證藍鰭金槍魚可追溯漁業夥伴", "zh-CN": "MSC 国际认证蓝鳍金枪鱼可追溯渔业伙伴", "en": "Marine Stewardship Council (MSC) Certified Sustainable Tuna Partner" },
        pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 33, stars: 4, cuisine: "日本料理", region: "新界东",
        location: { "zh-HK": "大埔區", "zh-CN": "大埔区", "en": "Tai Po District" },
        price: 1150, rating: 9.2,
        name: { "zh-HK": "大埔汀角江戶前海鮮懷石", "zh-CN": "大埔汀角江户前海鲜怀石", "en": "Ting Kok Edomae Seafood Kaiseki Tai Po" },
        address: { "zh-HK": "大埔汀角路海濱長廊翠影軒", "zh-CN": "大埔汀角路海滨长廊翠影轩", "en": "Ting Kok Coastal Esplanade Green Pavilion, Tai Po" },
        ecoAward: null, pRoom: false, wSeat: true, park: true, wine: false
    },
    {
        id: 34, stars: 4, cuisine: "日本料理", region: "新界西", price: 1080, rating: 9.2, pRoom: true, wSeat: false, park: false, wine: false,
        name: { "zh-HK": "屯門海翠和風炭火割烹", "zh-CN": "屯门海翠和风炭火割烹", "en": "Pierhead Charcoal Kappo Tuen Mun" },
        location: { "zh-HK": "屯門區", "zh-CN": "屯门区", "en": "Tuen Mun District" },
        address: { "zh-HK": "屯門湖翠路海翠長廊名店街", "zh-CN": "屯门湖翠路海翠长廊名店街", "en": "Pierhead Promenade Boutique Avenue, Wu Chui Road, Tuen Mun" },
        ecoAward: null
    },
    {
        id: 35, stars: 4, cuisine: "日本料理", region: "新界东", price: 1180, rating: 9.3, pRoom: false, wSeat: true, park: true, wine: true,
        name: { "zh-HK": "馬鞍山鞍駿水岸時令割烹", "zh-CN": "马鞍山鞍骏水岸时令割烹", "en": "On Chun Waterfront Seasonal Kappo Ma On Shan" },
        location: { "zh-HK": "沙田區", "zh-CN": "沙田区", "en": "Sha Tin District" },
        address: { "zh-HK": "沙田馬鞍山鞍駿街海濱名邸", "zh-CN": "沙田马鞍山鞍骏街海滨名邸", "en": "Waterfront Mansion, On Chun Street, Ma On Shan, Sha Tin" },
        ecoAward: { "zh-HK": "本地有機蔬菜產地直銷與海鮮可溯源體系", "zh-CN": "本地有机蔬菜产地直销与海鲜可溯源体系", "en": "Certified Farm-Direct Organic Produce & Traceable Seafood System" }
    },
    {
        id: 36, stars: 4, cuisine: "意式料理", region: "香港岛", price: 1350, rating: 9.4, pRoom: true, wSeat: false, park: false, wine: true,
        name: { "zh-HK": "Octavium (中環)", "zh-CN": "Octavium (中环)", "en": "Octavium Italian Restaurant Central" },
        location: { "zh-HK": "中西區", "zh-CN": "中西区", "en": "Central & Western District" },
        address: { "zh-HK": "中環德輔道中22號One Chinachem 8樓", "zh-CN": "中环德辅道中22号One Chinachem 8楼", "en": "8/F, One Chinachem Central, 22 Des Voeux Road Central" },
        ecoAward: null
    },
    {
        id: 37, stars: 4, cuisine: "意式料理", region: "九龙", price: 1280, rating: 9.4, pRoom: true, wSeat: true, park: true, wine: true,
        name: { "zh-HK": "海港城巴羅洛意式景觀酒廊", "zh-CN": "海港城巴罗洛意式景观酒廊", "en": "Harbour City Barolo Italian Panorama Lounge" },
        location: { "zh-HK": "油尖旺區", "zh-CN": "油尖旺区", "en": "Yau Tsim Mong District" },
        address: { "zh-HK": "尖沙咀廣東道海港城港威大廈25樓", "zh-CN": "尖沙咀广东道海港城港威大厦25楼", "en": "25/F, Gateway Tower, Harbour City, Canton Road, Tsim Sha Tsui" },
        ecoAward: null
    },
    {
        id: 38, stars: 4, cuisine: "意式料理", region: "新界东", price: 1120, rating: 9.3, pRoom: false, wSeat: true, park: true, wine: false,
        name: { "zh-HK": "西貢海景托斯卡納意式莊園", "zh-CN": "西贡海景托斯卡纳意式庄园", "en": "Tuscan Coastal Italian Estate Sai Kung" },
        location: { "zh-HK": "西貢區", "zh-CN": "西贡区", "en": "Sai Kung District" },
        address: { "zh-HK": "西貢大網仔路早禾坑海濱花園", "zh-CN": "西贡大网仔路早禾坑海滨花园", "en": "Waterfront Garden, Tai Mong Tsai Road, Tso Wo Hang, Sai Kung" },
        ecoAward: { "zh-HK": "莊園自家天然堆肥意式香草園", "zh-CN": "庄园自家天然堆肥意式香草园", "en": "Estate Organic Herb Garden with Natural Composting Practice" }
    },
    {
        id: 39, stars: 4, cuisine: "意式料理", region: "新界西", price: 1050, rating: 9.2, pRoom: true, wSeat: true, park: false, wine: false,
        name: { "zh-HK": "荃灣汀九海灣意式私廚", "zh-CN": "荃湾汀九海湾意式私厨", "en": "Ting Kau Bay Italian Private Kitchen Tsuen Wan" },
        location: { "zh-HK": "荃灣區", "zh-CN": "荃湾区", "en": "Tsuen Wan District" },
        address: { "zh-HK": "荃灣青山公路汀九段海景豪苑", "zh-CN": "荃湾青山公路汀九段海景豪苑", "en": "Ting Kau Seaview Residence, Castle Peak Road, Tsuen Wan" },
        ecoAward: null
    },
    {
        id: 40,
        name: { "zh-HK": "東涌大嶼藍灣意式窯烤工坊", "zh-CN": "东涌大屿蓝湾意式窑烤工坊", "en": "Lantau Blue Bay Italian Wood-Fired Oven Tung Chung" },
        stars: 4, cuisine: "意式料理", region: "新界西",
        location: { "zh-HK": "離島區", "zh-CN": "离岛区", "en": "Islands District" },
        address: { "zh-HK": "東涌達東路20號東薈城名店倉高層海景閣", "zh-CN": "东涌达东路20号东荟城名店仓高层海景阁", "en": "High-Floor Harbor Suite, Citygate Outlets, 20 Tat Tung Road, Tung Chung" },
        price: 980, rating: 9.2,
        ecoAward: { "zh-HK": "採用大嶼山再生林木修剪柴火窯烤認證", "zh-CN": "采用大屿山再生林木修剪柴火窑烤认证", "en": "Certified Sustainable Lantau Forest Pruned Firewood Wood-Fired Oven" },
        pRoom: false, wSeat: false, park: true, wine: true
    },

    // =========================================================================
    // 3. 米其林一星 (stars: 3) — 共 20 間 (均價 $580 ~ $960)
    // =========================================================================
    {
        id: 41,
        name: { "zh-HK": "萬豪金殿 (Man Ho)", "zh-CN": "万豪金殿 (Man Ho)", "en": "Man Ho Chinese Restaurant (JW Marriott Hotel Hong Kong)" },
        stars: 3, cuisine: "中式料理", region: "香港岛",
        location: { "zh-HK": "中西區", "zh-CN": "中西区", "en": "Central & Western District" },
        address: { "zh-HK": "金鐘道88號太古廣場香港JW萬豪酒店3樓", "zh-CN": "金钟道88号太古广场香港JW万豪酒店3楼", "en": "3/F, JW Marriott Hotel Hong Kong, Pacific Place, 88 Queensway, Admiralty" },
        price: 960, rating: 9.3,
        ecoAward: { "zh-HK": "WWF 環保海鮮先鋒餐廳 • 本地有機菇菌與茶園直採", "zh-CN": "WWF 环保海鲜先锋餐厅 • 本地有机菇菌与茶园直采", "en": "WWF Sustainable Seafood Pioneer • Local Organic Mushrooms & Tea Garden Direct" },
        pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 42,
        name: { "zh-HK": "逸東軒 (Yat Tung Heen)", "zh-CN": "逸东轩 (Yat Tung Heen)", "en": "Yat Tung Heen (Eaton HK)" },
        stars: 3, cuisine: "中式料理", region: "九龙",
        location: { "zh-HK": "油尖旺區", "zh-CN": "油尖旺区", "en": "Yau Tsim Mong District" },
        address: { "zh-HK": "佐敦彌敦道380號香港逸東酒店B2樓層", "zh-CN": "佐敦弥敦道380号香港逸东酒店B2楼层", "en": "B2/F, Eaton HK, 380 Nathan Road, Jordan" },
        price: 820, rating: 9.2,
        ecoAward: { "zh-HK": "EarthCheck 認證 • 惜食堂廚餘捐贈與有機食材夥伴", "zh-CN": "EarthCheck 认证 • 惜食堂厨余捐赠与有机食材伙伴", "en": "EarthCheck Certified • Food Angel Surplus Donation & Organic Produce Partner" },
        pRoom: true, wSeat: false, park: true, wine: false
    },
    {
        id: 43,
        name: { "zh-HK": "六福菜館 (西貢總店)", "zh-CN": "六福菜馆 (西贡总店)", "en": "Loaf On (Sai Kung Main Branch)" },
        stars: 3, cuisine: "中式料理", region: "新界东",
        location: { "zh-HK": "西貢區", "zh-CN": "西贡区", "en": "Sai Kung District" },
        address: { "zh-HK": "西貢市場街49號地下至2樓", "zh-CN": "西贡市场街49号地下至2楼", "en": "G/F-2/F, 49 See Cheung Street, Sai Kung" },
        price: 780, rating: 9.2,
        ecoAward: { "zh-HK": "西貢休漁期生態保育支持商戶 • 每日小艇低碳直採鮮魚", "zh-CN": "西贡休渔期生态保育支持商户 • 每日小艇低碳直采鲜鱼", "en": "Sai Kung Moratorium Eco Supporter • Daily Low-Carbon Skiff Line-Caught Fish" },
        pRoom: false, wSeat: true, park: false, wine: false
    },
    {
        id: 44,
        name: { "zh-HK": "端記精緻私房館 (荃灣川龍)", "zh-CN": "端记精致私房馆 (荃湾川龙)", "en": "Duen Kee Artisanal Private Dining (Chuen Lung, Tsuen Wan)" },
        stars: 3, cuisine: "中式料理", region: "新界西",
        location: { "zh-HK": "荃灣區", "zh-CN": "荃湾区", "en": "Tsuen Wan District" },
        address: { "zh-HK": "荃灣荃錦公路川龍村57-58號", "zh-CN": "荃湾荃锦公路川龙村57-58号", "en": "57-58 Chuen Lung Village, Route Twisk, Tsuen Wan" },
        price: 650, rating: 9.1,
        ecoAward: { "zh-HK": "大帽山天然山泉水自家種植有機西洋菜 • 零碳排里程農莊餐廳", "zh-CN": "大帽山天然山泉水自家种植有机西洋菜 • 零碳排里程农庄餐厅", "en": "Tai Mo Shan Mountain Spring Organic Watercress • Zero Food-Miles Farmhouse Dining" },
        pRoom: false, wSeat: true, park: true, wine: false
    },
    {
        id: 45,
        name: { "zh-HK": "啟德郵輪海景名門國宴", "zh-CN": "启德邮轮海景名门国宴", "en": "Kai Tak Cruise Waterfront Grand Banquet" },
        stars: 3, cuisine: "中式料理", region: "九龙",
        location: { "zh-HK": "九龍城區", "zh-CN": "九龙城区", "en": "Kowloon City District" },
        address: { "zh-HK": "啟德承豐道33號啟德郵輪碼頭頂層花園", "zh-CN": "启德承丰道33号启德邮轮码头顶层花园", "en": "Rooftop Garden, Kai Tak Cruise Terminal, 33 Shing Fung Road, Kai Tak" },
        price: 880, rating: 9.3,
        ecoAward: { "zh-HK": "香港綠建環評鉑金級海景建築低碳餐廳", "zh-CN": "香港绿建环评铂金级海景建筑低碳餐厅", "en": "BEAM Plus Platinum Certified Harborfront Low-Carbon Dining" },
        pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 46,
        name: { "zh-HK": "Roganic Hong Kong", "zh-CN": "Roganic Hong Kong", "en": "Roganic Hong Kong" },
        stars: 3, cuisine: "法式料理", region: "香港岛",
        location: { "zh-HK": "灣仔區", "zh-CN": "湾仔区", "en": "Wan Chai District" },
        address: { "zh-HK": "銅鑼灣告士打道255號信和廣場UG樓8號舖", "zh-CN": "铜锣湾告士打道255号信和广场UG楼8号", "en": "Shop 8, UG/F, Sino Plaza, 255 Gloucester Road, Causeway Bay" },
        price: 920, rating: 9.6,
        ecoAward: { "zh-HK": "米芝蓮綠星獎 (Michelin Green Star) • 新界有機農場直供與微型菜園料理", "zh-CN": "米其林绿星奖 (Michelin Green Star) • 新界本地有机农场直供与可持续微型菜园料理", "en": "Michelin Green Star • Local Organic Farm-to-Table & Zero-Waste Micro Garden Cuisine" },
        pRoom: false, wSeat: false, park: true, wine: true
    },
    {
        id: 47,
        name: { "zh-HK": "吉地士 (Gaddi's 半島酒店)", "zh-CN": "吉地士 (Gaddi's 半岛酒店)", "en": "Gaddi's (The Peninsula Hong Kong)" },
        stars: 3, cuisine: "法式料理", region: "九龙",
        location: { "zh-HK": "油尖旺區", "zh-CN": "油尖旺区", "en": "Yau Tsim Mong District" },
        address: { "zh-HK": "尖沙咀梳士巴利道香港半島酒店1樓", "zh-CN": "尖沙咀梳士巴利道香港半岛酒店1楼", "en": "1/F, The Peninsula Hong Kong, Salisbury Road, Tsim Sha Tsui" },
        price: 960, rating: 9.5,
        ecoAward: { "zh-HK": "半島綠色認證 • 有機香草天台花園自給計劃", "zh-CN": "半岛绿色认证 • 有机香草天台花园自给计划", "en": "Peninsula Green Certified • Rooftop Organic Herb Garden Self-Sufficiency Initiative" },
        pRoom: true, wSeat: false, park: true, wine: true
    },
    {
        id: 48,
        name: { "zh-HK": "沙田馬場尊尚法式品味廳", "zh-CN": "沙田马场尊尚法式品味厅", "en": "Sha Tin Racecourse Grand French Salon" },
        stars: 3, cuisine: "法式料理", region: "新界东",
        location: { "zh-HK": "沙田區", "zh-CN": "沙田区", "en": "Sha Tin District" },
        address: { "zh-HK": "沙田馬場看台大樓貴賓樓層", "zh-CN": "沙田马场看台大楼贵宾楼层", "en": "VIP Grandstand Pavilion, Sha Tin Racecourse, Sha Tin" },
        price: 850, rating: 9.2,
        ecoAward: { "zh-HK": "香港賽馬會綠色運營節能建築示範單位", "zh-CN": "赛马会绿色运营节能建筑示范单位", "en": "HKJC Green Operations & Energy-Efficient Certified Facility" },
        pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 49,
        name: { "zh-HK": "深井海澄法式風情小館", "zh-CN": "深井海澄法式风情小馆", "en": "Sham Tseng Coast French Bistro" },
        stars: 3, cuisine: "法式料理", region: "新界西",
        location: { "zh-HK": "荃灣區", "zh-CN": "荃湾区", "en": "Tsuen Wan District" },
        address: { "zh-HK": "荃灣深井青山公路深井段海澄軒", "zh-CN": "荃湾深井青山公路深井段海澄轩", "en": "Apex Horizon, Castle Peak Road (Sham Tseng), Tsuen Wan" },
        price: 720, rating: 9.1,
        ecoAward: null,
        pRoom: false, wSeat: true, park: false, wine: false
    },
    {
        id: 50,
        name: { "zh-HK": "Feuille (自然主義法式料理)", "zh-CN": "Feuille (自然主义法餐)", "en": "Feuille (Nature-Inspired French Cuisine)" },
        stars: 3, cuisine: "法式料理", region: "香港岛",
        location: { "zh-HK": "中西區", "zh-CN": "中西区", "en": "Central & Western District" },
        address: { "zh-HK": "中環威靈頓街198號The Wellington 5樓", "zh-CN": "中环威灵顿街198号The Wellington 5楼", "en": "5/F, The Wellington, 198 Wellington Street, Central" },
        price: 890, rating: 9.4,
        ecoAward: { "zh-HK": "米芝蓮綠星獎 • 100% 採用低碳有機植物與時令永續水產", "zh-CN": "米其林绿星奖 • 100% 采用低碳有机植物与时令永续水产", "en": "Michelin Green Star • 100% Plant-Centric Low Carbon & Sustainable Catch" },
        pRoom: false, wSeat: false, park: false, wine: true
    },
    {
        id: 51,
        name: { "zh-HK": "摩 (Mora)", "zh-CN": "摩 (Mora)", "en": "Mora Hong Kong" },
        stars: 3, cuisine: "日本料理", region: "香港岛",
        location: { "zh-HK": "中西區", "zh-CN": "中西区", "en": "Central & Western District" },
        address: { "zh-HK": "上環摩羅上街40號地下", "zh-CN": "上环摩罗上街40号地下", "en": "G/F, 40 Upper Lascar Row, Sheung Wan" },
        price: 860, rating: 9.5,
        ecoAward: { "zh-HK": "米芝蓮綠星獎 • 低碳植物基大豆蛋白創新及零塑環保包裝", "zh-CN": "米其林绿星奖 • 低碳植物基大豆蛋白创新及零塑环保包装", "en": "Michelin Green Star • Sustainable Soy Culinary Innovation & Plastic-Free" },
        pRoom: false, wSeat: false, park: false, wine: true
    },
    {
        id: 52,
        name: { "zh-HK": "Sushi Wadatsumi (K11 MUSEA)", "zh-CN": "Sushi Wadatsumi (K11 MUSEA)", "en": "Sushi Wadatsumi (K11 MUSEA)" },
        stars: 3, cuisine: "日本料理", region: "九龙",
        location: { "zh-HK": "油尖旺區", "zh-CN": "油尖旺区", "en": "Yau Tsim Mong District" },
        address: { "zh-HK": "尖沙咀梳士巴利道18號K11 MUSEA 6樓", "zh-CN": "尖沙咀梳士巴利道18号K11 MUSEA 6楼", "en": "Shop 607, 6/F, K11 MUSEA, Victoriaside, 18 Salisbury Road, Tsim Sha Tsui" },
        price: 920, rating: 9.3,
        ecoAward: { "zh-HK": "K11 綠色可追溯食品採購安全計劃認證", "zh-CN": "K11 绿色可追溯食品采购安全计划认证", "en": "K11 Sustainable & Traceable Ethical Seafood Procurement Certified" },
        pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 53,
        name: { "zh-HK": "大埔吐露港日本直送壽司割烹", "zh-CN": "大埔吐露港日本直输寿司割烹", "en": "Tolo Harbour Direct Japanese Sushi Kappo Tai Po" },
        stars: 3, cuisine: "日本料理", region: "新界东",
        location: { "zh-HK": "大埔區", "zh-CN": "大埔区", "en": "Tai Po District" },
        address: { "zh-HK": "大埔白石角海賦街8號水岸名庭", "zh-CN": "大埔白石角海赋街8号水岸名庭", "en": "8 Hoi Fu Street, Waterfront Villa, Pak Shek Kok, Tai Po" },
        price: 790, rating: 9.1,
        ecoAward: null,
        pRoom: false, wSeat: true, park: true, wine: false
    },
    {
        id: 54,
        name: { "zh-HK": "屯門三聖灣極鮮和風御膳", "zh-CN": "屯门三圣湾极鲜和风御膳", "en": "Sam Shing Bay Fresh Japanese Kappo Tuen Mun" },
        stars: 3, cuisine: "日本料理", region: "新界西",
        location: { "zh-HK": "屯門區", "zh-CN": "屯门区", "en": "Tuen Mun District" },
        address: { "zh-HK": "屯門三聖街三聖海鮮舫平台2樓", "zh-CN": "屯门三圣街三圣海鲜舫平台2楼", "en": "2/F, Sam Shing Seafood Promenade, Sam Shing Street, Tuen Mun" },
        price: 680, rating: 9.0,
        ecoAward: { "zh-HK": "三聖灣本地休漁友善海產直供", "zh-CN": "三圣湾本地休渔友善海产直供", "en": "Sam Shing Bay Eco-Friendly Sustainable Artisanal Fishery Supply" },
        pRoom: true, wSeat: false, park: true, wine: false
    },
    {
        id: 55,
        name: { "zh-HK": "九龍灣德福高端懷石別館", "zh-CN": "九龙湾德福高端怀石别馆", "en": "Telford Premium Kaiseki Pavilion Kowloon Bay" },
        stars: 3, cuisine: "日本料理", region: "九龙",
        location: { "zh-HK": "觀塘區", "zh-CN": "观塘区", "en": "Kwun Tong District" },
        address: { "zh-HK": "九龍灣偉業街33號德福大廈尊榮層", "zh-CN": "九龙湾伟业街33号德福大厦尊荣层", "en": "Executive Club, Telford House, 33 Wai Yip Street, Kowloon Bay" },
        price: 840, rating: 9.1,
        ecoAward: null,
        pRoom: true, wSeat: false, park: true, wine: true
    },
    {
        id: 56,
        name: { "zh-HK": "Grissini (香港君悅酒店)", "zh-CN": "Grissini (香港君悦酒店)", "en": "Grissini (Grand Hyatt Hong Kong)" },
        stars: 3, cuisine: "意式料理", region: "香港岛",
        location: { "zh-HK": "灣仔區", "zh-CN": "湾仔区", "en": "Wan Chai District" },
        address: { "zh-HK": "灣仔港灣道1號香港君悅酒店2樓", "zh-CN": "湾仔港湾道1号香港君悦酒店2楼", "en": "2/F, Grand Hyatt Hong Kong, 1 Harbour Road, Wan Chai" },
        price: 950, rating: 9.3,
        ecoAward: { "zh-HK": "君悅酒店綠色會議與永續食材採購認證", "zh-CN": "君悦酒店绿色会议与永续食材采购认证", "en": "Grand Hyatt Green Culinary & Sustainable Sourcing Certification" },
        pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 57,
        name: { "zh-HK": "尖沙咀麗晶海畔意式餐廳", "zh-CN": "尖沙咀丽晶海畔意式餐厅", "en": "Regent Harbor Italian Kitchen Tsim Sha Tsui" },
        stars: 3, cuisine: "意式料理", region: "九龙",
        location: { "zh-HK": "油尖旺區", "zh-CN": "油尖旺区", "en": "Yau Tsim Mong District" },
        address: { "zh-HK": "尖沙咀梳士巴利道18號香港麗晶酒店海濱層", "zh-CN": "尖沙咀梳士巴利道18号香港丽晶酒店海滨层", "en": "Harbourside Level, Regent Hong Kong, 18 Salisbury Road, Tsim Sha Tsui" },
        price: 890, rating: 9.3,
        ecoAward: null,
        pRoom: false, wSeat: true, park: true, wine: true
    },
    {
        id: 58,
        name: { "zh-HK": "西貢匡湖居露台意式餐館", "zh-CN": "西贡匡湖居露台意式餐馆", "en": "Marina Cove Veranda Ristorante Sai Kung" },
        stars: 3, cuisine: "意式料理", region: "新界东",
        location: { "zh-HK": "西貢區", "zh-CN": "西贡区", "en": "Sai Kung District" },
        address: { "zh-HK": "西貢西貢公路380號匡湖居遊艇會所", "zh-CN": "西贡西贡公路380号匡湖居游艇会所", "en": "Club Marina Cove, 380 Hiram's Highway, Sai Kung" },
        price: 760, rating: 9.1,
        ecoAward: { "zh-HK": "匡湖居自然保護區綠色友善夥伴", "zh-CN": "匡湖居自然保护区绿色友善伙伴", "en": "Marina Cove Eco Sanctuary Certified Green Partner" },
        pRoom: false, wSeat: true, park: false, wine: false
    },
    {
        id: 59,
        name: { "zh-HK": "元朗錦田綠色水耕意粉工坊", "zh-CN": "元朗锦田绿色水耕意面工坊", "en": "Kam Tin Green Hydroponic Pasta Atelier Yuen Long" },
        stars: 3, cuisine: "意式料理", region: "新界西",
        location: { "zh-HK": "元朗區", "zh-CN": "元朗区", "en": "Yuen Long District" },
        address: { "zh-HK": "元朗錦田公路水尾村有機生態園西座", "zh-CN": "元朗锦田公路水尾村有机生态园西座", "en": "West Wing, Eco Sanctuary, Shui Mei Village, Kam Tin Road, Yuen Long" },
        price: 580, rating: 9.0,
        ecoAward: { "zh-HK": "香港水耕農業綠色認證 • 節水 90% 垂直農法即摘即煮", "zh-CN": "香港水耕农业绿色认证 • 节水 90% 垂直农法即摘即煮", "en": "Hong Kong Hydroponic Green Award • 90% Water-Saving Farm-to-Table Pasta" },
        pRoom: false, wSeat: false, park: true, wine: false // 修復：改為小寫 true
    },
    {
        id: 60,
        name: { "zh-HK": "中環荷李活道名邸意式私廚", "zh-CN": "中环荷李活道名邸意式私厨", "en": "Hollywood Road Italian Private Atelier Central" },
        stars: 3, cuisine: "意式料理", region: "香港岛",
        location: { "zh-HK": "中西區", "zh-CN": "中西区", "en": "Central & Western District" },
        address: { "zh-HK": "中環荷李活道108號聚賢居高層", "zh-CN": "中环荷李活道108号聚贤居高层", "en": "High-Floor, CentreStage, 108 Hollywood Road, Central" },
        price: 910, rating: 9.2,
        ecoAward: null,
        pRoom: true, wSeat: false, park: false, wine: true
    },

    // =========================================================================
    // 4. 其它精選 (stars: 2) — 共 20 間 (均價 $200 ~ $550)
    // =========================================================================
    {
        id: 61,
        name: { "zh-HK": "何洪記名家私房宴", "zh-CN": "何洪记名家私房宴", "en": "Ho Hung Kee Master Private Feast" },
        stars: 2, cuisine: "中式料理", region: "香港岛",
        location: { "zh-HK": "東區", "zh-CN": "东区", "en": "Eastern District" },
        address: { "zh-HK": "北角渣華道123號北角匯二期2樓", "zh-CN": "北角渣华道123号北角汇二期2楼", "en": "2/F, Harbour North Phase 2, 123 Java Road, North Point" },
        price: 450, rating: 9.1,
        ecoAward: null,
        pRoom: true, wSeat: true, park: false, wine: false
    },
    {
        id: 62,
        name: { "zh-HK": "黃大仙志蓮淨苑荷花池畔素齋宴", "zh-CN": "黄大仙志莲净苑荷花池畔素斋宴", "en": "Chi Lin Vegetarian Banquet Pavilion Wong Tai Sin" },
        stars: 2, cuisine: "中式料理", region: "九龙",
        location: { "zh-HK": "黃大仙區", "zh-CN": "黄大仙区", "en": "Wong Tai Sin District" },
        address: { "zh-HK": "鑽石山鳳德道60號南蓮園池龍門樓", "zh-CN": "钻石山凤德道60号南莲园池龙门楼", "en": "Long Men Lou, Nan Lian Garden, 60 Fung Tak Road, Diamond Hill" },
        price: 320, rating: 9.3,
        ecoAward: { "zh-HK": "100% 純植物基低碳排健康飲食認證 • 園林雨水回收灌溉系統", "zh-CN": "100% 纯植物基低碳排健康饮食认证 • 园林雨水回收灌溉系统", "en": "100% Plant-Based Low-Carbon Certified • Rainwater Harvesting Garden Irrigation" },
        pRoom: false, wSeat: true, park: true, wine: false
    },
    {
        id: 63,
        name: { "zh-HK": "大埔林村有機農莊私房料理", "zh-CN": "大埔林村有机农庄私房料理", "en": "Lam Tsuen Organic Farm Kitchen Tai Po" },
        stars: 2, cuisine: "中式料理", region: "新界东",
        location: { "zh-HK": "大埔區", "zh-CN": "大埔区", "en": "Tai Po District" },
        address: { "zh-HK": "大埔林錦公路新塘段生態園12號", "zh-CN": "大埔林锦公路新塘段生态园12号", "en": "No. 12 Eco Sanctuary, San Tong, Lam Kam Road, Tai Po" },
        price: 280, rating: 9.0,
        ecoAward: { "zh-HK": "香港有機資源中心認證合作餐廳 • 100% 自家農田有機蔬果與廚餘堆肥", "zh-CN": "香港有机资源中心认证合作餐厅 • 100% 自家农田有机蔬果与厨余堆肥", "en": "HKORC Certified Organic Partner • 100% Farm-Grown Produce & Composting" },
        pRoom: true, wSeat: false, park: true, wine: false
    },
    {
        id: 64,
        name: { "zh-HK": "元朗朗屏百年圍村風味私廚", "zh-CN": "元朗朗屏百年围村风味私厨", "en": "Long Ping Walled Village Heritage Kitchen Yuen Long" },
        stars: 2, cuisine: "中式料理", region: "新界西",
        location: { "zh-HK": "元朗區", "zh-CN": "元朗区", "en": "Yuen Long District" },
        address: { "zh-HK": "元朗朗屏宏樂街38號大生圍漁村旁", "zh-CN": "元朗朗屏宏乐街38号大生围渔村旁", "en": "Near Tai Sang Wai Fish Ponds, 38 Wang Lok Street, Yuen Long" },
        price: 220, rating: 8.9,
        ecoAward: { "zh-HK": "元朗傳統生態魚塘無公害鮮魚供銷認證", "zh-CN": "元朗传统生态鱼塘无公害鲜鱼供销认证", "en": "Certified Sustainable Pond-Raised Chemical-Free Local Fishery" },
        pRoom: false, wSeat: false, park: false, wine: false
    },
    {
        id: 65,
        name: { "zh-HK": "上水古洞有機生態園農莊御膳", "zh-CN": "上水古洞有机生态园农庄御膳", "en": "Kwu Tung Organic Eco Sanctuary Feast Sheung Shui" },
        stars: 2, cuisine: "中式料理", region: "新界东",
        location: { "zh-HK": "北區", "zh-CN": "北区", "en": "North District" },
        address: { "zh-HK": "上水古洞河上鄉排峰路生態莊園", "zh-CN": "上水古洞河上乡排峰路生态庄园", "en": "Eco Estate, Pai Fung Road, Ho Sheung Heung, Kwu Tung, Sheung Shui" },
        price: 250, rating: 8.9,
        ecoAward: { "zh-HK": "北區低碳農業發展聯盟成員 • 零化學農藥水耕及有機走地雞認證", "zh-CN": "北区低碳农业发展联盟成员 • 零化学农药水耕及有机走地鸡认证", "en": "North District Low-Carbon Alliance Member • Certified Free-Range & Pesticide-Free" },
        pRoom: false, wSeat: true, park: true, wine: false
    },
    {
        id: 66,
        name: { "zh-HK": "太古坊糖廠街有機現代法歐餐廳", "zh-CN": "太古坊糖厂街有机现代法欧餐厅", "en": "Taikoo Place Tong Chong Street Organic Bistro" },
        stars: 2, cuisine: "法式料理", region: "香港岛",
        location: { "zh-HK": "東區", "zh-CN": "东区", "en": "Eastern District" },
        address: { "zh-HK": "鰂魚涌太古坊華蘭路29號東隅酒店1樓", "zh-CN": "鲗鱼涌太古坊华兰路29号东隅酒店1楼", "en": "1/F, EAST Hong Kong, 29 Taikoo Shing Road, Taikoo Place, Quarry Bay" },
        price: 520, rating: 9.2,
        ecoAward: { "zh-HK": "太古酒店 SD2030 可持續發展金獎 • 100% 廚餘分解機轉化肥料", "zh-CN": "太古酒店 SD2030 可持续发展金奖 • 100% 厨余分解机转化肥料", "en": "Swire Hotels SD2030 Sustainable Gold • 100% On-site Food Waste Composting" },
        pRoom: true, wSeat: false, park: true, wine: true
    },
    {
        id: 67,
        name: { "zh-HK": "深水埗文青活化古蹟法式小館", "zh-CN": "深水埗文青活化古迹法式小馆", "en": "Sham Shui Po Heritage Revitalization French Bistro" },
        stars: 2, cuisine: "法式料理", region: "九龙",
        location: { "zh-HK": "深水埗區", "zh-CN": "深水埗区", "en": "Sham Shui Po District" },
        address: { "zh-HK": "深水埗荔枝角道119號雷生春堂旁古蹟樓", "zh-CN": "深水埗荔枝角道119号雷生春堂旁古迹楼", "en": "Heritage Mansion adjacent to Lui Seng Chun, 119 Lai Chi Kok Road" },
        price: 380, rating: 9.1,
        ecoAward: { "zh-HK": "深水埗社區咖啡渣再生與本地精釀低碳合作餐廳", "zh-CN": "深水埗社区咖啡渣再生与本地精酿低碳合作餐厅", "en": "Sham Shui Po Community Upcycled Coffee Grounds & Local Microbrew Partner" },
        pRoom: false, wSeat: false, park: false, wine: false
    },
    {
        id: 68,
        name: { "zh-HK": "沙田科學園綠色水岸法式餐廳", "zh-CN": "沙田科学园绿色水岸法式餐厅", "en": "Science Park Green Waterfront French Brasserie Sha Tin" },
        stars: 2, cuisine: "法式料理", region: "新界东",
        location: { "zh-HK": "沙田區", "zh-CN": "沙田区", "en": "Sha Tin District" },
        address: { "zh-HK": "沙田白石角科學園海濱長廊19W大樓", "zh-CN": "沙田白石角科学园海滨长廊19W大楼", "en": "Building 19W, Science Park Waterfront Promenade, Pak Shek Kok, Sha Tin" },
        price: 420, rating: 9.0,
        ecoAward: { "zh-HK": "香港科學園綠色低碳餐飲示範店 • 全店使用太陽能與生物可降解餐具", "zh-CN": "香港科学园绿色低碳餐饮示范店 • 全店使用太阳能与生物可降解餐具", "en": "HKSTP Green Demonstration Cafe • Solar Powered & Biodegradable Dining Ware" },
        pRoom: false, wSeat: true, park: true, wine: false
    },
    {
        id: 69,
        name: { "zh-HK": "大嶼山大澳文物酒店玻璃屋法歐餐廳", "zh-CN": "大屿山大澳文物酒店玻璃屋法欧餐厅", "en": "Tai O Lookout Glasshouse Bistro Lantau" },
        stars: 2, cuisine: "法式料理", region: "新界西",
        location: { "zh-HK": "離島區", "zh-CN": "离岛区", "en": "Islands District" },
        address: { "zh-HK": "大嶼山大澳石仔埗街舊大澳警署", "zh-CN": "大屿山大澳石仔埗街旧大澳警署", "en": "Tai O Heritage Hotel, Shek Tsai Po Street, Tai O, Lantau Island" },
        price: 360, rating: 9.1,
        ecoAward: { "zh-HK": "UNESCO 亞太文化遺產保護獎 • 大澳社區低碳食材及太陽能供電認證", "zh-CN": "UNESCO 亚太文化遗产保护奖 • 大澳社区低碳食材及太阳能供电认证", "en": "UNESCO Asia-Pacific Heritage Award • Local Heritage Sourced Ingredients & Solar Eco Grid" },
        pRoom: false, wSeat: true, park: false, wine: false
    },
    {
        id: 70,
        name: { "zh-HK": "屯門黃金海岸聆渢法式海鮮扒房", "zh-CN": "屯门黄金海岸聆沨法式海鲜扒房", "en": "Gold Coast Coastal French Seafood & Grill Tuen Mun" },
        stars: 2, cuisine: "法式料理", region: "新界西",
        location: { "zh-HK": "屯門區", "zh-CN": "屯门区", "en": "Tuen Mun District" },
        address: { "zh-HK": "屯門青山公路1號香港黃金海岸酒店低層", "zh-CN": "屯门青山公路1号香港黄金海岸酒店低层", "en": "Lower Ground, Hong Kong Gold Coast Hotel, 1 Castle Peak Road, Tuen Mun" },
        price: 480, rating: 9.0,
        ecoAward: { "zh-HK": "信和集團可持續發展餐廳 • 設有酒店有機香草農圃及魚菜共生系統", "zh-CN": "信和集团可持续发展餐厅 • 设有酒店有机香草农圃及鱼菜共生系统", "en": "Sino Green Hotel Partner • Featuring Hotel Organic Herb Farm & Aquaponics" },
        pRoom: true, wSeat: true, park: true, wine: true
    },
    {
        id: 71,
        name: { "zh-HK": "銅鑼灣炭火地雞與極鮮割烹", "zh-CN": "铜锣湾炭火地鸡与极鲜割烹", "en": "Causeway Bay Charcoal Free-Range Chicken & Sashimi Kappo" },
        stars: 2, cuisine: "日本料理", region: "香港岛",
        location: { "zh-HK": "灣仔區", "zh-CN": "湾仔区", "en": "Wan Chai District" },
        address: { "zh-HK": "銅鑼灣登龍街18號V Point 28樓", "zh-CN": "铜锣湾登龙街18号V Point 28楼", "en": "28/F, V Point, 18 Tang Lung Street, Causeway Bay" },
        price: 550, rating: 9.1,
        ecoAward: null,
        pRoom: true, wSeat: true, park: false, wine: true
    },
    {
        id: 72,
        name: { "zh-HK": "觀塘海濱日式水產工坊", "zh-CN": "观塘海滨日式水产工坊", "en": "Kwun Tong Promenade Japanese Coastal Seafood Atelier" },
        stars: 2, cuisine: "日本料理", region: "九龙",
        location: { "zh-HK": "觀塘區", "zh-CN": "观塘区", "en": "Kwun Tong District" },
        address: { "zh-HK": "觀塘海濱道133號萬兆豐中心低層", "zh-CN": "观塘海滨道133号万兆丰中心低层", "en": "LG/F, MG Tower, 133 Hoi Bun Road, Kwun Tong" },
        price: 350, rating: 9.0,
        ecoAward: { "zh-HK": "可持續沿海漁業冷鏈直採合作商", "zh-CN": "可持续沿海渔业冷链直采合作商", "en": "Certified Sustainable Coastal Fishery Cold-Chain Partner" },
        pRoom: false, wSeat: false, park: true, wine: false
    },
    {
        id: 73,
        name: { "zh-HK": "將軍澳海旁江戶前迴轉壽司工坊", "zh-CN": "将军澳海旁江户前回转寿司工坊", "en": "Tseung Kwan O Waterfront Edomae Sushi Workshop" },
        stars: 2, cuisine: "日本料理", region: "新界东",
        location: { "zh-HK": "西貢區", "zh-CN": "西贡区", "en": "Sai Kung District" },
        address: { "zh-HK": "將軍澳唐俊街23號MONTEREY Place地下", "zh-CN": "将军澳唐俊街23号MONTEREY Place地下", "en": "G/F, MONTEREY Place, 23 Tong Chun Street, Tseung Kwan O" },
        price: 290, rating: 9.0,
        ecoAward: null,
        pRoom: false, wSeat: true, park: true, wine: false
    },
    {
        id: 74,
        name: { "zh-HK": "荃灣南豐紗廠活化和風素食館", "zh-CN": "荃湾南丰纱厂活化和风素食馆", "en": "The Mills Revitalized Japanese Vegetarian Teahouse Tsuen Wan" },
        stars: 2, cuisine: "日本料理", region: "新界西",
        location: { "zh-HK": "荃灣區", "zh-CN": "荃湾区", "en": "Tsuen Wan District" },
        address: { "zh-HK": "荃灣白田壩街45號南豐紗廠1樓", "zh-CN": "荃湾白田坝街45号南丰纱厂1楼", "en": "1/F, The Mills, 45 Pak Tin Par Street, Tsuen Wan" },
        price: 240, rating: 9.2,
        ecoAward: { "zh-HK": "南豐紗廠可持續文創獎 • 採用香港本地水耕菜及升級再造食材", "zh-CN": "南丰纱厂可持续文创奖 • 采用香港本地水耕菜及升级再造食材", "en": "The Mills Sustainability Cultural Award • Hydroponic Greens & Upcycled Food" },
        pRoom: false, wSeat: false, park: false, wine: false
    },
    {
        id: 75,
        name: { "zh-HK": "葵涌都會和風炭烤爐端燒", "zh-CN": "葵涌都会和风炭烤炉端烧", "en": "Metroplaza Charcoal Robatayaki Kwai Chung" },
        stars: 2, cuisine: "日本料理", region: "新界西",
        location: { "zh-HK": "葵青區", "zh-CN": "葵青区", "en": "Kwai Tsing District" },
        address: { "zh-HK": "葵涌興芳路223號新都會廣場4樓", "zh-CN": "葵涌兴芳路223号新都会广场4楼", "en": "Shop 401, 4/F, Metroplaza, 223 Hing Fong Road, Kwai Chung" },
        price: 200, rating: 8.9,
        ecoAward: null,
        pRoom: true, wSeat: false, park: true, wine: false
    },
    {
        id: 76,
        name: { "zh-HK": "赤柱美利樓海風地中海意式餐廳", "zh-CN": "赤柱美利楼海风地中海意式餐厅", "en": "Murray House Mediterranean Breeze Ristorante Stanley" },
        stars: 2, cuisine: "意式料理", region: "香港岛",
        location: { "zh-HK": "南區", "zh-CN": "南区", "en": "Southern District" },
        address: { "zh-HK": "赤柱佳美道23號美利樓2樓", "zh-CN": "赤柱佳美道23号美利楼2楼", "en": "2/F, Murray House, 23 Carmel Road, Stanley" },
        price: 490, rating: 9.1,
        ecoAward: { "zh-HK": "古蹟建築自然通風節能設計 • 採用可持續認證地中海海產", "zh-CN": "古迹建筑自然通风节能设计 • 采用可持续认证地中海海产", "en": "Heritage Natural Ventilation Energy-Saving Design • Certified Mediterranean Catch" },
        pRoom: false, wSeat: true, park: true, wine: false
    },
    {
        id: 77,
        name: { "zh-HK": "大埔吐露港意式牛扒窯烤館", "zh-CN": "大埔吐露港意式牛排窑烤馆", "en": "Tolo Harbour Italian Steakhouse & Hearth Grill Tai Po" },
        stars: 2, cuisine: "意式料理", region: "新界东",
        location: { "zh-HK": "大埔區", "zh-CN": "大埔区", "en": "Tai Po District" },
        address: { "zh-HK": "大埔大美督路汀角海濱長廊3號", "zh-CN": "大埔大美督路汀角海滨长廊3号", "en": "No. 3 Tai Mei Tuk Road, Ting Kok Waterfront Promenade, Tai Po" },
        price: 460, rating: 9.1,
        ecoAward: { "zh-HK": "LEED 鉑金級綠建築餐廳 • 選用碳中和認證澳洲草飼牛肉", "zh-CN": "LEED 铂金级绿建筑餐厅 • 选用碳中和认证澳洲草饲牛肉", "en": "LEED Platinum Green Certified • Carbon-Neutral Certified Grass-Fed Beef" },
        pRoom: true, wSeat: false, park: true, wine: true
    },
    {
        id: 78,
        name: { "zh-HK": "大埔吐露港海景意式莊園披薩", "zh-CN": "大埔吐露港海景意式庄园披萨", "en": "Tolo Harbour Estate Artisanal Pizza Tai Po" },
        stars: 2, cuisine: "意式料理", region: "新界东",
        location: { "zh-HK": "大埔區", "zh-CN": "大埔区", "en": "Tai Po District" },
        address: { "zh-HK": "大埔大美督路汀角海濱長廊22號", "zh-CN": "大埔大美督路汀角海滨长廊22号", "en": "No. 22 Tai Mei Tuk Road, Waterfront Esplanade, Tai Po" },
        price: 310, rating: 8.9,
        ecoAward: null,
        pRoom: false, wSeat: true, park: false, wine: false
    },
    {
        id: 79,
        name: { "zh-HK": "愉景灣海濱白教堂浪漫意式工坊", "zh-CN": "愉景湾海滨白教堂浪漫意式工坊", "en": "White Chapel Seaside Romantic Italian Atelier Discovery Bay" },
        stars: 2, cuisine: "意式料理", region: "新界西",
        location: { "zh-HK": "離島區", "zh-CN": "离岛区", "en": "Islands District" },
        address: { "zh-HK": "大嶼山愉景灣海澄湖畔路88號海濱翼", "zh-CN": "大屿山愉景湾海澄湖畔路88号海滨翼", "en": "Waterfront Wing, 88 Siena Avenue, Discovery Bay, Lantau Island" },
        price: 430, rating: 9.1,
        ecoAward: { "zh-HK": "愉景灣無車環保社區零碳排接駁認證餐廳", "zh-CN": "愉景湾无车环保社区零碳排接驳认证餐厅", "en": "Car-Free Eco Community Certified Zero-Emission Transit Restaurant" },
        pRoom: false, wSeat: true, park: false, wine: true
    },
    {
        id: 80,
        name: { "zh-HK": "紅磡海濱羅馬傳統手工意粉館", "zh-CN": "红磡海滨罗马传统手工意面馆", "en": "Hung Hom Waterfront Roman Handcrafted Pasta Trattoria" },
        stars: 2, cuisine: "意式料理", region: "九龙",
        location: { "zh-HK": "九龍城區", "zh-CN": "九龙城区", "en": "Kowloon City District" },
        address: { "zh-HK": "紅磡環海街7號海濱廣場二期地下", "zh-CN": "红磡环海街7号海滨广场二期地下", "en": "G/F, Two Harbourfront, 7 Tak Fung Street, Hung Hom" },
        price: 260, rating: 9.0,
        ecoAward: null,
        pRoom: false, wSeat: false, park: true, wine: false
    }
];

// 資料集匯出組裝 (包含兩文三語套餐資訊)
var restaurantsData = rawRestaurantsList.map(function(item, idx) {
    var isEco = Boolean(item.ecoAward);
    var img = uniqueRestaurantImages[idx % uniqueRestaurantImages.length];

    return {
        id: item.id,
        name: item.name,
        stars: item.stars,
        cuisine: item.cuisine,
        cuisine_i18n: CUISINE_I18N[item.cuisine] || { "zh-HK": item.cuisine, "zh-CN": item.cuisine, "en": item.cuisine },
        region: item.region,
        region_i18n: REGION_I18N[item.region] || { "zh-HK": item.region, "zh-CN": item.region, "en": item.region },
        location: item.location,
        district: item.location,
        address: item.address,
        distance: {
            "zh-HK": "距離港鐵站或交通樞紐步行約 3-5 分鐘",
            "zh-CN": "距离地铁站或交通枢纽步行约 3-5 分钟",
            "en": "Approx. 3-5 mins walk from nearest MTR station"
        },
        images: [img],
        rating: (item.rating || 9.2).toFixed(1),
        reviewCount: 750 + (idx * 43) % 2200,
        verdict: {
            "zh-HK": item.rating >= 9.6 ? "傳奇極佳" : (item.rating >= 9.3 ? "極高讚譽" : "優選美饌"),
            "zh-CN": item.rating >= 9.6 ? "传奇极佳" : (item.rating >= 9.3 ? "极高赞誉" : "优选美馔"),
            "en": item.rating >= 9.6 ? "Legendary" : (item.rating >= 9.3 ? "Exceptional" : "Top Pick")
        },
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
                name: {
                    "zh-HK": `${item.name["zh-HK"]} 經典主廚品鑑套餐`,
                    "zh-CN": `${item.name["zh-CN"]} 经典主厨品鉴套餐`,
                    "en": `${item.name["en"]} Signature Chef Tasting Menu`
                },
                image: img,
                drinks: item.wine ? {
                    "zh-HK": "包含侍酒師餐酒配搭",
                    "zh-CN": "包含侍酒师餐酒搭配",
                    "en": "Includes Sommelier Wine Pairing"
                } : {
                    "zh-HK": "包含精選名茶或特調飲品",
                    "zh-CN": "包含精选名茶或特调饮品",
                    "en": "Includes Selected Artisan Tea or Beverages"
                },
                seating: item.wSeat ? {
                    "zh-HK": "優先安排景觀席",
                    "zh-CN": "优先安排景观位",
                    "en": "Priority Window/Scenery Seating"
                } : {
                    "zh-HK": "主廳典雅席位",
                    "zh-CN": "主厅雅致席位",
                    "en": "Main Dining Room Elegant Seating"
                },
                cancel: {
                    "zh-HK": "提前24小時免費取消",
                    "zh-CN": "提前24小时免费取消",
                    "en": "Free cancellation up to 24 hours in advance"
                },
                origPrice: Math.round(item.price * 1.15),
                price: item.price
            }
        ]
    };
});