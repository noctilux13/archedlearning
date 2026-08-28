// 20世纪西方现代艺术史与欧洲经典建筑史权威知识库
// 涵盖 12 大流派阶段、35 位大师与 91 件代表作品/地标
// 遵循学术客观原则：英文为主，中文释义并列

export const artData = [
  {
    "id": "futurism",
    "name": "未来主义",
    "englishName": "Futurism",
    "years": "1909 - 1928",
    "bgClass": "futurism-theme",
    "description": "未来主义是20世纪初兴起于意大利的激进艺术运动，由诗人马里内蒂发表《未来主义宣言》拉开序幕。强调速度、科技、机器、力量、青春与暴力，试图打破传统美学规范，通过'力线'（Lines of Force）与重叠意象展现现代生活的动态与机械美感。",
    "historicalContext": "诞生于第一次工业革命成果爆发的20世纪初，面对都市化、汽车与现代交通工具的崛起，未来主义艺术家摈弃一切古典与博物馆艺术，歌颂现代工业文明的飞速跃进。",
    "keyFeatures": [
      "动态演变与运动连续性",
      "力线（Lines of Force）表达能量",
      "互渗透（Interpenetration）现象",
      "对机械与现代城市文明的赞歌"
    ],
    "artists": [
      {
        "id": "umberto-boccioni",
        "name": "翁贝托·波丘尼",
        "englishName": "Umberto Boccioni",
        "years": "1882 - 1919",
        "avatar": "/images/artists/umberto-boccioni.jpg",
        "bio": "意大利未来主义画家与雕塑家，未来主义运动的领军人物与理论奠基人之一。他提出了'力线'与'雕塑空间连续性'理论，将物质在运动中与周围环境融为一体的状态表现得淋漓尽致。",
        "artworks": [
          {
            "id": "city-rises",
            "title": "The City Rises (崛起中的城市)",
            "date": "1910 - 1911",
            "location": "纽约现代艺术博物馆 (MoMA)",
            "image": "/images/artworks/city-rises.jpg",
            "notes": "波丘尼第一部重大的未来主义作品。画中奔跑的巨马与繁忙的建筑工地象征着工业化浪潮下城市建设爆发出的巨大能量与生命力。",
            "knowledgePoints": [
              "被誉为未来主义第一幅代表性杰作",
              "运用分割主义色彩与交织的力线表达现代都市爆发力",
              "将人力与机器建设融入狂热的色彩运动中"
            ],
            "titleEn": "The City Rises",
            "titleZh": "崛起中的城市"
          },
          {
            "id": "riot-gallery",
            "title": "Riot in the Gallery (长廊骚乱)",
            "date": "1910",
            "location": "米兰布雷拉画廊 (Pinacoteca di Brera)",
            "image": "/images/artworks/riot-gallery.jpg",
            "notes": "描绘米兰埃马努埃莱二世长廊内人群发生的突发冲突，展现夜间灯光下混乱而具有动感的群众情绪。",
            "knowledgePoints": [
              "点彩派与分割派技法的未来主义应用",
              "光线折射与人群奔跑线条构成的夜间动态张力"
            ],
            "titleEn": "Riot in the Gallery",
            "titleZh": "长廊骚乱"
          },
          {
            "id": "simultaneous-visions",
            "title": "Simultaneous Visions (同时发生的景象)",
            "date": "1911",
            "location": "德国伍珀塔尔冯德海特博物馆",
            "image": "/images/artworks/simultaneous-visions.jpg",
            "notes": "表现一个女人俯瞰街道时，街道喧嚣景象、建筑物与室内空间在视角中同时交融重叠的视觉体验。",
            "knowledgePoints": [
              "体现未来主义核心概念'同时性'（Simultaneity）",
              "内外空间的相互透叠与透视解构"
            ],
            "titleEn": "Simultaneous Visions",
            "titleZh": "同时发生的景象"
          },
          {
            "id": "dynamism-cyclist",
            "title": "Dynamism of a Cyclist (自行车手的动力)",
            "date": "1913",
            "location": "米兰二十世纪博物馆 (Museo del Novecento)",
            "image": "/images/artworks/dynamism-cyclist.jpg",
            "notes": "描绘骑行者极速俯冲的姿态，将人体与自行车完全融解在高速运动形成的折线与能量块面中。",
            "knowledgePoints": [
              "机械运动美学的终极抽象表达",
              "用几何面与急剧倾斜的力线重构速度感"
            ],
            "titleEn": "Dynamism of a Cyclist",
            "titleZh": "自行车手的动力"
          },
          {
            "id": "unique-forms",
            "title": "Unique Forms of Continuity in Space (空间中连续性的独特形式)",
            "date": "1913",
            "location": "圣保罗大学当代艺术博物馆 / 莫奈等多处",
            "image": "/images/artworks/unique-forms.jpg",
            "notes": "20世纪最伟大的雕塑作品之一（刻于意大利20欧分硬币上）。人体造型在极速前进中被空气阻力切割与重塑造，呈现出充满肌肉感与风阻几何面的未来战神形象。",
            "knowledgePoints": [
              "未来主义雕塑最高成就，突破传统固态雕塑局限",
              "将形态在空气与空间中的连续扩散痕迹雕刻出来",
              "印制于意大利发行的20欧分硬币背图案"
            ],
            "titleEn": "Unique Forms of Continuity in Space",
            "titleZh": "空间中连续性的独特形式"
          },
          {
            "id": "development-bottle",
            "title": "Development of a Bottle in Space (瓶子在空间中的展开)",
            "date": "1913",
            "location": "纽约MoMA / 米兰二十世纪博物馆",
            "image": "/images/artworks/development-bottle.jpg",
            "notes": "将静物瓶子及其内部螺旋结构与底座空间展开剥离，展现物体与空间融为一体的连续动态演变。",
            "knowledgePoints": [
              "解构传统静物，将剖面与空间外壳结合",
              "展现物体内部结构向外扩散的几何连续性"
            ],
            "titleEn": "Development of a Bottle in Space",
            "titleZh": "瓶子在空间中的展开"
          }
        ],
        "displayName": "Umberto Boccioni (翁贝托·波丘尼)"
      },
      {
        "id": "carlo-carra",
        "name": "卡洛·卡拉",
        "englishName": "Carlo Carrà",
        "years": "1881 - 1966",
        "avatar": "/images/artists/carlo-carra.jpg",
        "bio": "意大利著名画家，早期为未来主义运动核心领导人，后期与德·基里科共同创立了形而上画派。他撰写过大量艺术论著，兼具动感冲击力与后期的哲思理性。",
        "artworks": [
          {
            "id": "piazza-duomo",
            "title": "Piazza del Duomo a Milano (米兰大教堂广场)",
            "date": "1909",
            "location": "私人收藏",
            "image": "/images/artworks/piazza-duomo.jpg",
            "notes": "卡拉早期未来主义尝试，用明亮交错的光点与线条表现米兰大教堂广场的繁华与有轨电车的穿梭。",
            "knowledgePoints": [
              "展现未来主义对都市现代化交通的崇拜",
              "后印象派色彩点彩与速度感线的结合"
            ],
            "titleEn": "Piazza del Duomo a Milano",
            "titleZh": "米兰大教堂广场"
          },
          {
            "id": "theater-exit",
            "title": "Theater Exit (剧院出口)",
            "date": "1910",
            "location": "伦敦埃斯托里克意大利现代艺术收藏馆",
            "image": "/images/artworks/theater-exit.jpg",
            "notes": "散漫的光影下人群离开剧院的朦胧景象，富于夜间都市诗意。",
            "knowledgePoints": [
              "色彩分割与光感气氛的探索"
            ],
            "titleEn": "Theater Exit",
            "titleZh": "剧院出口"
          },
          {
            "id": "funeral-galli",
            "title": "The Funeral of the Anarchist Galli (无政府主义者加里之葬)",
            "date": "1910 - 1911",
            "location": "纽约现代艺术博物馆 (MoMA)",
            "image": "/images/artworks/funeral-galli.jpg",
            "notes": "画家亲眼目睹的1904年葬礼冲突事件。赤红与漆黑的斜线交织，骑警与罢工群众的剧烈碰撞充满战斗张力。",
            "knowledgePoints": [
              "未来主义政治冲突与政治倾向的极富代表性作品",
              "强烈斜线构成构图的剧烈动荡感"
            ],
            "titleEn": "The Funeral of the Anarchist Galli",
            "titleZh": "无政府主义者加里之葬"
          },
          {
            "id": "interventionist-demo",
            "title": "Interventionist Demonstration (主张参战的示威)",
            "date": "1914",
            "location": "米兰马蒂奥利收藏馆",
            "image": "/images/artworks/interventionist-demo.jpg",
            "notes": "拼贴画杰作！采用报纸切片、文字标语、螺旋放射线表达示威游行中传单飞舞、口号喧嚣的漩涡感。",
            "knowledgePoints": [
              "未来主义自由语言拼贴艺术（Papier Collé）典范",
              "用文字、声响模拟词汇与视觉符号构成漩涡"
            ],
            "titleEn": "Interventionist Demonstration",
            "titleZh": "主张参战的示威"
          },
          {
            "id": "knight-western-spirit",
            "title": "Il cavaliere dello spirito occidentale (西方精神骑士)",
            "date": "1917",
            "location": "私人收藏",
            "image": "/images/artworks/knight-western-spirit.jpg",
            "notes": "卡拉向形而上主义过渡阶段的作品，出现了几何木偶与人造构筑物，象征骑士精神的重塑。",
            "knowledgePoints": [
              "未来主义向形而上主义转变的关键过渡画作",
              "几何人偶与立体构图的引入"
            ],
            "titleEn": "Il cavaliere dello spirito occidentale",
            "titleZh": "西方精神骑士"
          },
          {
            "id": "metaphysical-muse",
            "title": "The Metaphysical Muse (形而上缪斯)",
            "date": "1917",
            "location": "米兰马蒂奥利收藏馆",
            "image": "/images/artworks/metaphysical-muse.jpg",
            "notes": "室内神秘陈列着无面木偶、网球拍、地图与几何体，营造出超越现实的沉静与孤寂体验。",
            "knowledgePoints": [
              "形而上画派标志性意象元素汇聚（木偶、几何体、地图）",
              "从动感未来主义转向神秘沉思"
            ],
            "titleEn": "The Metaphysical Muse",
            "titleZh": "形而上缪斯"
          }
        ],
        "displayName": "Carlo Carrà (卡洛·卡拉)"
      }
    ],
    "category": "art",
    "displayName": "Futurism (未来主义)"
  },
  {
    "id": "dadaism",
    "name": "达达主义",
    "englishName": "Dadaism",
    "years": "1919 - 1920",
    "description": "诞生于第一次世界大战期间的苏黎世（伏尔泰酒馆），是艺术史上最具反叛与颠覆精神的反艺术运动。达达主义者对战争的残忍与资产阶级理性文明感到绝望，主张通过荒诞、偶然、嘲弄与现成品（Ready-made）否定传统艺术的严肃性与神圣感。",
    "historicalContext": "一战硝烟弥漫欧洲，传统理性与人文价值崩塌。达达主义艺术家以虚无主义和幽默反讽对抗虚伪的文明与残酷的政治战争。",
    "keyFeatures": [
      "反艺术（Anti-Art）与反传统美学",
      "现成品（Ready-made）概念的提出",
      "偶然性、荒诞感与拼贴（Photomontage）",
      "解构理性，强调艺术即观念与思想服务"
    ],
    "artists": [
      {
        "id": "marcel-duchamp",
        "name": "马塞尔·杜尚",
        "englishName": "Marcel Duchamp",
        "years": "1881 - 1973",
        "avatar": "/images/artists/marcel-duchamp.jpg",
        "bio": "20世纪现代艺术与概念艺术之父，法国画家、雕塑家、棋手。他颠覆了艺术必须是'视觉视网膜愉悦'的传统观念，提出艺术应当服务于心灵与思想，对后现代艺术产生了不可估量的深远影响。",
        "artworks": [
          {
            "id": "nude-descending",
            "title": "Nudo che scende le scale n. 2 (炸弹般的名作《下楼梯的裸女2号)",
            "date": "1912",
            "location": "费城艺术博物馆 (Philadelphia Museum of Art)",
            "image": "/images/artworks/nude-descending.jpg",
            "notes": "结合立体主义分析与未来主义连续运动，将下楼梯的人体分解为连续重叠的机械切片。在1913年纽约军械库展览中引起极大轰动与争议。",
            "knowledgePoints": [
              "打破传统具象裸体画规范，将时间与连续运动引入平面",
              "立体主义与未来主义跨界融会的代表作",
              "军械库展览（Armory Show）成名战"
            ],
            "titleEn": "Nudo che scende le scale n. 2",
            "titleZh": "炸弹般的名作《下楼梯的裸女2号"
          },
          {
            "id": "fountain",
            "title": "Fountain - 现成品艺术终极形态 (泉)",
            "date": "1917",
            "location": "原件丢失 / 复制品存于泰特现代美术馆等",
            "image": "/images/artworks/fountain.jpg",
            "notes": "艺术史上最具颠覆性的时刻！杜尚购买了一个瓷小便斗，署名'R. Mutt 1917'并送展。宣告艺术不在于手艺制造，而在于艺术家的选择与观念宣告。",
            "knowledgePoints": [
              "现成品（Ready-made）艺术的终极代表",
              "彻底打破传统艺术与工业制成品的界限",
              "开创现代概念艺术（Conceptual Art）先河"
            ],
            "titleEn": "Fountain - 现成品艺术终极形态",
            "titleZh": "泉"
          },
          {
            "id": "lhooq",
            "title": "L.H.O.O.Q. (带有胡须的蒙娜丽莎)",
            "date": "1919",
            "location": "巴黎蓬皮杜艺术中心 (Centre Pompidou)",
            "image": "/images/artworks/lhooq.jpg",
            "notes": "在《蒙娜丽莎》复制品上用铅笔添上山羊胡与八字胡，并写上带有谐音双关幽默的字母L.H.O.O.Q.，对古典名著进行肆无忌惮的嘲弄与戏谑。",
            "knowledgePoints": [
              "纠正的现成品（Rectified Readymade）经典典范",
              "达达主义对古典权威艺术幽默反讽与反叛符号"
            ],
            "titleEn": "L.H.O.O.Q.",
            "titleZh": "带有胡须的蒙娜丽莎"
          },
          {
            "id": "shelter",
            "title": "Shelter (遮蔽物)",
            "date": "1919",
            "location": "私人收藏",
            "image": "/images/artworks/shelter.jpg",
            "notes": "使用破旧衣架与伞骨构造的装置，探讨普通物件在空间中的几何线条形态与荒诞感。",
            "knowledgePoints": [
              "对日常生活物品的几何解构与重新定义"
            ],
            "titleEn": "Shelter",
            "titleZh": "遮蔽物"
          },
          {
            "id": "bicycle-wheel",
            "title": "Bicycle Wheel (自行车轮)",
            "date": "1913",
            "location": "纽约现代艺术博物馆 (MoMA)",
            "image": "/images/artworks/bicycle-wheel.jpg",
            "notes": "将自行车轮倒置固定在圆凳上。这是艺术史上第一件动态现成品（Assemblage），可以由观众手动旋转。",
            "knowledgePoints": [
              "艺术史上第一件现成品拼合装置作品",
              "将旋转的动态与无目的的观赏结合"
            ],
            "titleEn": "Bicycle Wheel",
            "titleZh": "自行车轮"
          }
        ],
        "displayName": "Marcel Duchamp (马塞尔·杜尚)"
      },
      {
        "id": "man-ray",
        "name": "曼·雷",
        "englishName": "Man Ray",
        "years": "1890 - 1976",
        "avatar": "/images/artists/man-ray.jpg",
        "bio": "归化法国的美国视觉艺术家、摄影革新家，达达主义与超现实主义运动的重要贡献者。他自视为画家，但以摄影暗房实验'雷照片'（Rayographs）与先锋肖像闻名于世。",
        "artworks": [
          {
            "id": "violon-dingres",
            "title": "Ingres's Violin (安格尔的小提琴)",
            "date": "1924",
            "location": "洛杉矶保罗·盖蒂博物馆",
            "image": "/images/artworks/violon-dingres.jpg",
            "notes": "超现实摄影史上的丰碑。在其模特吉吉（Kiki de Montparnasse）裸背上绘制了小提琴音孔F孔，将女性柔美的身体幻化为一件乐器。",
            "knowledgePoints": [
              "视觉隐喻（Visual Metaphor）的摄影巅峰典范",
              "向新古典主义大师安格尔致敬并赋予达达式幽默",
              "探讨人体形态与器物符号的重叠结合"
            ],
            "titleEn": "Ingres's Violin",
            "titleZh": "安格尔的小提琴"
          }
        ],
        "displayName": "Man Ray (曼·雷)"
      }
    ],
    "category": "art",
    "displayName": "Dadaism (达达主义)"
  },
  {
    "id": "surrealism",
    "name": "超现实主义",
    "englishName": "Surrealism",
    "years": "1920 - 1930",
    "description": "由法国诗人安德烈·布勒东发表《超现实主义宣言》确立。深受弗洛伊德精神分析学说与潜意识理论影响，主张打破现实与理性的束缚，探索梦境、潜意识、幻觉与无意识自动写作，创造出离奇、超现实而充满诗意的神秘视觉世界。",
    "historicalContext": "战后人们对理性世界产生怀疑，精神分析学掀起心理学革命，艺术家试图在梦境与现实之间寻找'超现实'（Super-reality）的终极真实。",
    "keyFeatures": [
      "弗洛伊德潜意识与梦境探索",
      "异质同构与熟知物件的奇特置换",
      "自动主义（Automatism）与偏执狂临界状态",
      "高度写实的技法呈现荒诞不经的场景"
    ],
    "artists": [
      {
        "id": "salvador-dali",
        "name": "萨尔瓦多·达利",
        "englishName": "Salvador Dalí",
        "years": "1904 - 1989",
        "avatar": "/images/artists/salvador-dali.jpg",
        "bio": "西班牙加泰罗尼亚巨匠，超现实主义画派最具知名度与明星色彩的代表人物。他开创了'偏执狂批判状态'（Paranoiac-critical method），用极为细致古典的写实技法描绘梦境与荒诞潜意识。",
        "artworks": [
          {
            "id": "persistence-of-memory",
            "title": "The Persistence of Memory (记忆的永恒)",
            "date": "1931",
            "location": "纽约现代艺术博物馆 (MoMA)",
            "image": "/images/artworks/persistence-of-memory.jpg",
            "notes": "超现实主义画作中最著名的旷世代表作。在荒凉的里加特港海滩背景下，坚硬的机械怀表如融化的卡芒贝尔奶酪般软塌倒挂在枯枝与怪物躯体上，表达时间的相对性与消逝感。",
            "knowledgePoints": [
              "超现实主义最具标志性的标志符号：融化的软表",
              "用古典细致入微的写实风格呈现极致梦境幻象",
              "探讨硬与软、坚固与流逝、理性与梦境的对立"
            ],
            "titleEn": "The Persistence of Memory",
            "titleZh": "记忆的永恒"
          },
          {
            "id": "great-masturbator",
            "title": "The Great Masturbator (伟大的手淫者)",
            "date": "1929",
            "location": "马德里索菲亚王后国家艺术中心博物馆",
            "image": "/images/artworks/great-masturbator.jpg",
            "notes": "高度自传色彩与精神分析潜意识画作。庞大黄色的怪异侧面人头形态衍生出蝗虫、蚂蚁、女性躯体与欲望隐喻，揭示达利内心深处的焦虑与童年创伤。",
            "knowledgePoints": [
              "达利'偏执狂批判方法'的代表巨作",
              "深度展现弗洛伊德潜意识焦虑、性与恐惧符号"
            ],
            "titleEn": "The Great Masturbator",
            "titleZh": "伟大的手淫者"
          },
          {
            "id": "temptation-st-anthony",
            "title": "The Temptation of St. Anthony (圣安东尼的诱惑)",
            "date": "1946",
            "location": "布鲁塞尔比利时皇家美术馆",
            "image": "/images/artworks/temptation-st-anthony.jpg",
            "notes": "描绘圣徒安东尼在沙漠中高举十字架抵御欲望魔鬼。画面中象群与骏马迈着极其蜘蛛般纤细长腿在云端漫步，背负着欲望黄金与宫殿。",
            "knowledgePoints": [
              "极具视觉震撼的细长蛛腿大象形态",
              "宗教信仰与超现实幻象的完美融汇"
            ],
            "titleEn": "The Temptation of St. Anthony",
            "titleZh": "圣安东尼的诱惑"
          }
        ],
        "displayName": "Salvador Dalí (萨尔瓦多·达利)"
      },
      {
        "id": "marc-chagall",
        "name": "马克·夏加尔",
        "englishName": "Marc Chagall",
        "years": "1887 - 1985",
        "avatar": "/images/artists/marc-chagall.jpg",
        "bio": "俄裔法国犹太艺术家，巴黎学派与超现实主义先驱。他的画风充满梦幻诗意、浓郁色彩与童话色彩，常出现飘浮在天空中的恋人、小提琴手、乡村与飞牛，充满了对故乡与妻子的深情表达。",
        "artworks": [
          {
            "id": "i-and-the-village",
            "title": "I and the Village (我与村庄)",
            "date": "1911",
            "location": "纽约现代艺术博物馆 (MoMA)",
            "image": "/images/artworks/i-and-the-village.jpg",
            "notes": "将俄罗斯老家维捷布斯克的农村记忆碎片交织在一组几何圆环与分割线中。绿色的农夫脸庞与白色的羊对视，羊头内绘制着挤奶妇人，充满梦幻童趣与乡愁。",
            "knowledgePoints": [
              "立体主义几何分割与梦幻回忆的诗意融合",
              "绿色人脸与羊对视构成的浓郁乡愁隐喻"
            ],
            "titleEn": "I and the Village",
            "titleZh": "我与村庄"
          },
          {
            "id": "chagall-birthday",
            "title": "Birthday (生日)",
            "date": "1915",
            "location": "纽约现代艺术博物馆 (MoMA)",
            "image": "/images/artworks/chagall-birthday.jpg",
            "notes": "描绘妻子贝拉在生日那天为他送花，夏加尔因极度幸福而反转身体、飘浮在半空中深情亲吻妻子的浪漫场景。",
            "knowledgePoints": [
              "夏加尔代表性'飘浮恋人'图像符号的经典之作",
              "用浓烈的红地毯与不合物理常理的身体扭转传达爱的狂喜"
            ],
            "titleEn": "Birthday",
            "titleZh": "生日"
          },
          {
            "id": "romeo-juliette",
            "title": "Romeo and Juliette (罗密欧与朱丽叶)",
            "date": "1964",
            "location": "巴黎歌剧院穹顶画草稿/私人收藏",
            "image": "/images/artworks/romeo-juliette.jpg",
            "notes": "夏加尔为巴黎加尼叶歌剧院（Palais Garnier）天花板创作的巨幅穹顶画局部，将莎士比亚浪漫戏剧注入充满绿与红的天空幻境中。",
            "knowledgePoints": [
              "公共建筑天顶画艺术与舞台美术设计的巅峰展示",
              "将音乐、戏剧与超现实色彩梦境无缝统合"
            ],
            "titleEn": "Romeo and Juliette",
            "titleZh": "罗密欧与朱丽叶"
          }
        ],
        "displayName": "Marc Chagall (马克·夏加尔)"
      },
      {
        "id": "rene-magritte",
        "name": "雷内·马格里特",
        "englishName": "René Magritte",
        "years": "1898 - 1967",
        "avatar": "/images/artists/rene-magritte.jpg",
        "bio": "比利时超现实主义大师。与达利狂热的梦境不同，马格里特以冷静理智、如哲学思辨般的视角将熟悉的生活用品置于违背常理的背景中，引发人们对语言、符号与现实本质的深刻反思。",
        "artworks": [
          {
            "id": "treachery-of-images",
            "title": "The Treachery of Images - 这不是烟斗 (形象的叛逆)",
            "date": "1929",
            "location": "洛杉矶县立艺术博物馆 (LACMA)",
            "image": "/images/artworks/treachery-of-images.jpg",
            "notes": "画中精细描绘了一只烟斗，下方却写着一行法文：'Ceci n'est pas une pipe'（这不是一只烟斗）。哲学式地提醒观众：画中描绘的只是烟斗的图像符号，而非真正的烟斗实物。",
            "knowledgePoints": [
              "艺术史与符号学上最著名的反思画作",
              "揭示图像（Representation）、文字与实体物之间的断裂",
              "对后现代观念艺术与波普艺术产生深远启发"
            ],
            "titleEn": "The Treachery of Images - 这不是烟斗",
            "titleZh": "形象的叛逆"
          },
          {
            "id": "the-lovers",
            "title": "The Lovers (恋人)",
            "date": "1928",
            "location": "纽约现代艺术博物馆 (MoMA)",
            "image": "/images/artworks/the-lovers.jpg",
            "notes": "两个头缠白布的人相拥亲吻。面纱阻隔了彼此真实的接触与沟通，营造出极度压抑、疏离与神秘的气氛。",
            "knowledgePoints": [
              "被遮蔽的脸部造成的疏离感与不安氛围",
              "探讨沟通的障碍、爱与无法透视的真实"
            ],
            "titleEn": "The Lovers",
            "titleZh": "恋人"
          },
          {
            "id": "golconda",
            "title": "雨般降落的圆顶帽子绅士 (戈尔孔达)",
            "date": "1953",
            "location": "休斯顿梅尼尔收藏馆 (The Menil Collection)",
            "image": "/images/artworks/golconda.jpg",
            "notes": "蓝天白云与红砖房背景下，无数身穿黑大衣、头戴圆顶硬礼帽的绅士如雨点般等距悬浮在空中，荒诞而冷峻。",
            "knowledgePoints": [
              "标志性戴圆顶礼帽绅士形象的重复阵列",
              "将日常平庸的社会群体符号转化为超现实奇观"
            ],
            "titleEn": "雨般降落的圆顶帽子绅士",
            "titleZh": "戈尔孔达"
          },
          {
            "id": "menaced-assassin",
            "title": "The Menaced Assassin (受威胁的凶手)",
            "date": "1927",
            "location": "纽约现代艺术博物馆 (MoMA)",
            "image": "/images/artworks/menaced-assassin.jpg",
            "notes": "如同冷酷侦探电影场景：室内凶手正听着留声机，裸体女尸躺在床榻上；门外两个持棍持网的神秘男子伏击，窗外更有三人窥视。",
            "knowledgePoints": [
              "戏剧性悬疑侦探场景与凝固时间的叙事氛围",
              "对窥视癖、罪案与冷酷现实的奇特构图"
            ],
            "titleEn": "The Menaced Assassin",
            "titleZh": "受威胁的凶手"
          },
          {
            "id": "not-to-be-reproduced",
            "title": "Not to Be Reproduced (禁止复制)",
            "date": "1937",
            "location": "鹿特丹博伊曼斯·范伯宁恩美术馆",
            "image": "/images/artworks/not-to-be-reproduced.jpg",
            "notes": "男子站在镜前，但镜子里显示的依然是他背影的复制，而旁边的书籍在镜中却正常镜像呈现。打破了光透视定律。",
            "knowledgePoints": [
              "悖论式的镜像视觉陷阱",
              "探讨身份真实性与自我镜像的哲学悖论"
            ],
            "titleEn": "Not to Be Reproduced",
            "titleZh": "禁止复制"
          },
          {
            "id": "son-of-man",
            "title": "The Son of Man (人子)",
            "date": "1964",
            "location": "私人收藏",
            "image": "/images/artworks/son-of-man.jpg",
            "notes": "马格里特的自画像。身穿风衣戴硬礼帽的绅士站在海边矮墙前，脸部被一颗悬浮的青苹果完美挡住，只有眼睛从苹果边缘微微露出。",
            "knowledgePoints": [
              "流行文化中最知名的艺术符号之一（被无数电影与广告致敬）",
              "探讨隐藏与可见（What is hidden and what is visible）的心理冲突"
            ],
            "titleEn": "The Son of Man",
            "titleZh": "人子"
          }
        ],
        "displayName": "René Magritte (雷内·马格里特)"
      },
      {
        "id": "joan-miro",
        "name": "胡安·米罗",
        "englishName": "Joan Miró",
        "years": "1893 - 1983",
        "avatar": "/images/artists/joan-miro.jpg",
        "bio": "西班牙加泰罗尼亚画家、雕塑家与陶艺家。米罗被称为最具有童心与无意识直觉的超现实主义大师，他摒弃了古典绘画透视，用极简的符号（红太阳、梯子、星号、生物变形）在纯净背景上翩翩起舞。",
        "artworks": [
          {
            "id": "the-farm",
            "title": "The Farm (农场)",
            "date": "1921 - 1922",
            "location": "华盛顿国家美术馆 (National Gallery of Art)",
            "image": "/images/artworks/the-farm.jpg",
            "notes": "海明威曾收藏此画。画中极致精细地罗列了米罗老家蒙特罗伊格农场的动物、工具、房屋与树木，是其从精细写实迈向符号超现实的里程碑。",
            "knowledgePoints": [
              "米罗艺术生涯的关键转折标志性巨作",
              "将加泰罗尼亚乡土记忆转化为符号化细节集合"
            ],
            "titleEn": "The Farm",
            "titleZh": "农场"
          },
          {
            "id": "the-tilled-field",
            "title": "The Tilled Field (耕地)",
            "date": "1924",
            "location": "纽约古根海姆博物馆",
            "image": "/images/artworks/the-tilled-field.jpg",
            "notes": "农场形态演变为拟人化的器官：树木长出了眼睛与耳朵，动物转化为抽象的线条符号，充满梦幻狂想。",
            "knowledgePoints": [
              "米罗彻底成熟的生物符号语言雏形",
              "将具象动物提炼为游走生命体符号"
            ],
            "titleEn": "The Tilled Field",
            "titleZh": "耕地"
          },
          {
            "id": "maternity",
            "title": "Maternity (母性)",
            "date": "1924",
            "location": "苏格兰国家画廊",
            "image": "/images/artworks/maternity.jpg",
            "notes": "用极简的极线、圆弧与线条表达母体与婴儿哺育的深情关系，线条简约到了极点。",
            "knowledgePoints": [
              "符号化符号极简主义（Minimalist Symbolism）的先驱",
              "用最精简的点线面重塑情绪与生命主题"
            ],
            "titleEn": "Maternity",
            "titleZh": "母性"
          },
          {
            "id": "smile-flamboyant-wings",
            "title": "The Smile of the Flamboyant Wings (绚丽翅膀的微笑)",
            "date": "1953",
            "location": "私人收藏",
            "image": "/images/artworks/smile-flamboyant-wings.jpg",
            "notes": "巨大的鲜红太阳、纯黑体块与充满律动感的线条星号交相辉映，展现狂热欢快的宇宙律动。",
            "knowledgePoints": [
              "米罗晚期色彩纯度与符号韵律的完美展现"
            ],
            "titleEn": "The Smile of the Flamboyant Wings",
            "titleZh": "绚丽翅膀的微笑"
          },
          {
            "id": "woman-and-bird",
            "title": "Woman and Bird 巨型户外雕塑 (女人与鸟)",
            "date": "1983",
            "location": "巴塞罗那胡安·米罗公园",
            "image": "/images/artworks/woman-and-bird.jpg",
            "notes": "高达22米的巨型户外彩色陶瓷雕塑，耸立在水池中，成为巴塞罗那城市地想艺术。",
            "knowledgePoints": [
              "超现实主义雕塑向公共艺术（Public Art）的重大延伸",
              "彩色碎瓷拼贴（Trencadís）与米罗符号的结合"
            ],
            "titleEn": "Woman and Bird 巨型户外雕塑",
            "titleZh": "女人与鸟"
          }
        ],
        "displayName": "Joan Miró (胡安·米罗)"
      },
      {
        "id": "alberto-giacometti",
        "name": "阿尔贝托·贾科梅蒂",
        "englishName": "Alberto Giacometti",
        "years": "1901 - 1966",
        "avatar": "/images/artists/alberto-giacometti.jpg",
        "bio": "瑞士雕塑家、画家。20世纪最伟大的雕塑巨匠之一。曾参与超现实主义运动，二战后深受存在主义哲学影响，创作出极其高瘦、表面如刀削斧凿般粗砺的人体雕塑，深刻隐喻战后人类的孤独、脆弱与坚韧生命力。",
        "artworks": [
          {
            "id": "walking-man-i",
            "title": "L'Homme qui marche I (行走的人)",
            "date": "1960",
            "location": "多处顶级博物馆/拍卖史上最高价雕塑之一",
            "image": "/images/artworks/walking-man-i.jpg",
            "notes": "战后艺术史上最具象征意义的雕塑作品！极其瘦长、消瘦的人形在荒凉的空间中迈开大步向前迈进，质感粗糙如焦炭，却展现出永不屈服的生命意志。",
            "knowledgePoints": [
              "存在主义艺术（Existentialist Art）的灵魂象征",
              "消解物质体量，塑造空间侵蚀下的孤独个体",
              "拍卖史上最昂贵的艺术雕塑作品之一"
            ],
            "titleEn": "L'Homme qui marche I",
            "titleZh": "行走的人"
          }
        ],
        "displayName": "Alberto Giacometti (阿尔贝托·贾科梅蒂)"
      }
    ],
    "category": "art",
    "displayName": "Surrealism (超现实主义)"
  },
  {
    "id": "metaphysics",
    "name": "形而上主义",
    "englishName": "Metaphysics",
    "years": "1917 - 1920",
    "description": "由乔治·德·基里科（Giorgio de Chirico）与卡洛·卡拉在意大利费拉拉共同创立。画风呈现出极其沉寂、神秘、凝固的时间感。通过深远拉长的斜阳影子、无限延展的罗马拱廊、无面木偶、古典雕像与火车，营造出超越现实物理经验的哲学冥想空间。",
    "historicalContext": "在喧嚣混乱的一战期间，形而上画派反其道而行之，避开战争热点，在空旷无人的古典广场与室内追求神秘、寂静与永恒的哲学谜题。",
    "keyFeatures": [
      "长投影与不合逻辑的夸张透视",
      "罗马拱廊、无面木偶与石雕头像",
      "凝固的时间与死寂神秘的气氛",
      "深刻影响了后来的超现实主义画派"
    ],
    "artists": [
      {
        "id": "giorgio-de-chirico",
        "name": "乔治·德·基里科",
        "englishName": "Giorgio de Chirico",
        "years": "1888 - 1978",
        "avatar": "/images/artists/giorgio-de-chirico.jpg",
        "bio": "出生于希腊的意大利画家，形而上主义运动创始人。他深受叔本华与尼采哲学的启发，将希腊古典神话、罗马建筑拱廊与梦境般长影结合，创造了独树一帜的'意大利广场'神秘视觉宇宙。",
        "artworks": [
          {
            "id": "nostalgia-infinite",
            "title": "The Nostalgia of the Infinite (无限的乡愁)",
            "date": "1912 - 1913",
            "location": "纽约现代艺术博物馆 (MoMA)",
            "image": "/images/artworks/nostalgia-infinite.jpg",
            "notes": "耸立在高台上的巨大白色高塔在夕阳下投下巨大的长影，下方两个微小的人影相立。整幅画充满了无尽的孤独与对无限空间的乡愁思索。",
            "knowledgePoints": [
              "形而上主义最经典的建筑高塔与长影构图",
              "运用不合理透视引发深层心理的孤独不安"
            ],
            "titleEn": "The Nostalgia of the Infinite",
            "titleZh": "无限的乡愁"
          },
          {
            "id": "piazza-d-italia",
            "title": "Piazza of Italy (意大利广场)",
            "date": "1913",
            "location": "安大略美术馆",
            "image": "/images/artworks/piazza-d-italia.jpg",
            "notes": "无人清冷的广场上放置着雕像，黄昏拉长的斜影穿过罗马拱廊，远方地平线上缓缓驶过一列蒸汽车烟雾。",
            "knowledgePoints": [
              "基里科最具标志性的'意大利广场'题材",
              "古典建筑与现代蒸汽火车的时空错位叠加"
            ],
            "titleEn": "Piazza of Italy",
            "titleZh": "意大利广场"
          },
          {
            "id": "mystery-melancholy-street",
            "title": "Mystery and Melancholy of a Street (一条街的神秘与忧郁)",
            "date": "1914",
            "location": "私人收藏",
            "image": "/images/artworks/mystery-melancholy-street.jpg",
            "notes": "艺术史上最不安、最神秘的透视画作之一。一个小女孩正推着铁环跑向阴影深处，而墙角后隐隐投下一个巨大神秘人物的黑影。",
            "knowledgePoints": [
              "极具戏剧悬念与心理暗示的黑影对比",
              "强烈倾斜的双重透视营造的忧郁神秘感"
            ],
            "titleEn": "Mystery and Melancholy of a Street",
            "titleZh": "一条街的神秘与忧郁"
          },
          {
            "id": "disquieting-muses",
            "title": "The Disquieting Muses (令人不安的缪斯)",
            "date": "1916 - 1918",
            "location": "米兰马蒂奥利收藏馆",
            "image": "/images/artworks/disquieting-muses.jpg",
            "notes": "舞台般的广场地面上，无面的木偶模特与古典石雕缪斯如静物般立在砖台之上，远处是费拉拉城堡与工业烟囱。",
            "knowledgePoints": [
              "无面裁缝木偶（Mannequin）形象的经典集大成者",
              "古典文明遗迹与工业现代文明的沉默对话"
            ],
            "titleEn": "The Disquieting Muses",
            "titleZh": "令人不安的缪斯"
          },
          {
            "id": "hector-and-andromache",
            "title": "Hector and Andromache (赫克托尔与安德洛玛刻)",
            "date": "1912",
            "location": "私人收藏",
            "image": "/images/artworks/hector-and-andromache.jpg",
            "notes": "取材荷马史诗《伊利亚特》。两位由木架、三角板与几何体拼合而成的无面木偶战士与妻子在城门前紧紧相拥作别。",
            "knowledgePoints": [
              "将希腊悲剧英雄主题转化为机械几何人体拼合",
              "无面木偶传达的命运无奈感与深沉情感"
            ],
            "titleEn": "Hector and Andromache",
            "titleZh": "赫克托尔与安德洛玛刻"
          },
          {
            "id": "song-of-love",
            "title": "The Song of Love (爱之歌)",
            "date": "1914",
            "location": "纽约现代艺术博物馆 (MoMA)",
            "image": "/images/artworks/song-of-love.jpg",
            "notes": "著名的奇异异质组合：巨大的阿波罗石雕头像、一只红色的手套与一颗绿色球体并列悬挂在建筑墙面上。曾给年轻的马格里特带来巨大心灵震撼。",
            "knowledgePoints": [
              "不相干日常构件组合（Disparate elements）的鼻祖",
              "直接启发了马格里特与达利的超现实组合思考"
            ],
            "titleEn": "The Song of Love",
            "titleZh": "爱之歌"
          }
        ],
        "displayName": "Giorgio de Chirico (乔治·德·基里科)"
      }
    ],
    "category": "art",
    "displayName": "Metaphysics (形而上主义)"
  },
  {
    "id": "de-stijl",
    "name": "荷兰风格派",
    "englishName": "De Stijl (Neoplasticism)",
    "years": "1917 - 1928",
    "description": "由特奥·范·杜斯堡与皮特·蒙德里安于1917年在荷兰创办《De Stijl》杂志确立。主张新造型主义（Neoplasticism），摒弃一切具象自然形态，将艺术语言极简还原为纯粹的直线、直角、三原色（红黄蓝）与三无色（黑白灰），寻求绝对的和谐与数学般的秩序平衡。",
    "historicalContext": "在一战破坏背景下，荷兰作为中立国，艺术家试图从自然混乱中提炼出宇宙普遍的终极和谐秩序，这一思想深刻重塑了后世的包豪斯与现代建筑工业设计。",
    "keyFeatures": [
      "严格的水平线与垂直线网格",
      "三原色（红、黄、蓝）与三无色（黑、白、灰）",
      "非对称的动态平衡（Dynamic Balance）",
      "对包豪斯与现代主义建筑工业设计的深远重塑造"
    ],
    "artists": [
      {
        "id": "theo-van-doesburg",
        "name": "特奥·范·杜斯堡",
        "englishName": "Theo van Doesburg",
        "years": "1883 - 1931",
        "avatar": "/images/artists/theo-van-doesburg.jpg",
        "bio": "荷兰画家、诗人、建筑师，风格派的领袖与发起人。他致力于将风格派纯粹几何美学引入建筑、家具设计与室内空间，后期因提出倾斜斜线（要素主义 Elementarism）与蒙德里安产生分歧。",
        "artworks": [
          {
            "id": "counter-composition-xiii",
            "title": "Counter Composition XIII (反向构图第13号)",
            "date": "1929",
            "location": "荷兰阿姆斯特丹市立博物馆",
            "image": "/images/artworks/counter-composition-xiii.jpg",
            "notes": "引入45度倾斜斜线的斜向几何构图。杜斯堡认为斜线能为画面注入强烈的动态能量与现代活力。",
            "knowledgePoints": [
              "要素主义（Elementarism）代表作",
              "打破纯粹垂直水平线的倾斜动态探索"
            ],
            "titleEn": "Counter Composition XIII",
            "titleZh": "反向构图第13号"
          },
          {
            "id": "composition-decentralisee",
            "title": "Composition decentralizzata (分散构图)",
            "date": "1924",
            "location": "私人收藏",
            "image": "/images/artworks/composition-decentralisee.jpg",
            "notes": "黑线框分割出的红、蓝、黄、灰色块向四周边缘分散，打破中心的视觉重力。",
            "knowledgePoints": [
              "去中心化构图与平面非对称平衡"
            ],
            "titleEn": "Composition decentralizzata",
            "titleZh": "分散构图"
          }
        ],
        "displayName": "Theo van Doesburg (特奥·范·杜斯堡)"
      },
      {
        "id": "piet-mondrian",
        "name": "皮特·蒙德里安",
        "englishName": "Piet Mondrian",
        "years": "1872 - 1944",
        "avatar": "/images/artists/piet-mondrian.jpg",
        "bio": "20世纪几何抽象艺术巨匠。蒙德里安将绘画艺术从具象风景一步步提炼简化，最终推向了由黑色水平线、垂直线与红黄蓝色块构成的纯粹新造型主义巅峰。",
        "artworks": [
          {
            "id": "gray-tree",
            "title": "Albero grigio (灰树)",
            "date": "1911",
            "location": "荷兰海牙市立博物馆",
            "image": "/images/artworks/gray-tree.jpg",
            "notes": "蒙德里安几何抽象演变史上的教科书级过渡名作！将现实中树木枝干自然纹理一步步抽象提炼为弧线与放射线条网络。",
            "knowledgePoints": [
              "具象向几何抽象演变的至关重要里程碑画作",
              "分析立体主义向纯粹线条演进的见造"
            ],
            "titleEn": "Albero grigio",
            "titleZh": "灰树"
          },
          {
            "id": "composition-red-blue-yellow",
            "title": "Composition with Red, Blue and Yellow (红黄蓝构图)",
            "date": "1930",
            "location": "纽约现代艺术博物馆 (MoMA)",
            "image": "/images/artworks/composition-red-blue-yellow.jpg",
            "notes": "新造型主义的绝对代表作！巨大的红色正方形占据右上角，左下角由小块蓝色与黄色平衡，黑色粗线划分出极致的数学和谐。",
            "knowledgePoints": [
              "新造型主义（Neoplasticism）的代表作",
              "非对称但达到极致和谐的色块重量平衡",
              "影响了后世所有现代平面对齐与网页设计格栅网格"
            ],
            "titleEn": "Composition with Red, Blue and Yellow",
            "titleZh": "红黄蓝构图"
          },
          {
            "id": "broadway-boogie-woogie",
            "title": "Broadway Boogie-Woogie (百老汇爵士乐)",
            "date": "1942 - 1943",
            "location": "纽约现代艺术博物馆 (MoMA)",
            "image": "/images/artworks/broadway-boogie-woogie.jpg",
            "notes": "蒙德里安晚年移居纽约后的绝唱！取消了粗黑线条，改用黄红蓝相间的彩色小方块接连成网格，模拟纽约曼哈顿棋盘格街道与爵士乐欢快的节奏。",
            "knowledgePoints": [
              "取消黑线，用彩色小方块流动表达音乐节奏",
              "对现代大都市繁华街道网格与爵士乐（Boogie-Woogie）的赞歌"
            ],
            "titleEn": "Broadway Boogie-Woogie",
            "titleZh": "百老汇爵士乐"
          }
        ],
        "displayName": "Piet Mondrian (皮特·蒙德里安)"
      }
    ],
    "category": "art",
    "displayName": "De Stijl (Neoplasticism) (荷兰风格派)"
  },
  {
    "id": "pop-art",
    "name": "波普艺术",
    "englishName": "Pop Art",
    "years": "1950 - 1977",
    "description": "20世纪50年代源于英国、在60年代美国盛极一时的流行艺术运动。波普（Pop）即Popular（流行/大众）。艺术家打破高雅艺术与大众通俗文化的藩篱，直接取材于商业广告、连环漫画、明星报刊、汤罐头与可口可乐，用丝网印刷与大量复制探讨消费主义与大众媒介时代。",
    "historicalContext": "二战后美国经济大繁荣，战后消费主义、电视普及、明星文化与大众广告泛滥。波普艺术应运而生，直面商业社会的复制与流行符号。",
    "keyFeatures": [
      "通俗、大众、廉价、大量生产与复制",
      "丝网印刷（Silkscreen Printmaking）技法",
      "连环画笨点（Ben-Day dots）与广告符号",
      "消解艺术家的个性手触，拥抱商业消费"
    ],
    "artists": [
      {
        "id": "roy-lichtenstein",
        "name": "罗伊·利希滕斯坦",
        "englishName": "Roy Lichtenstein",
        "years": "1923 - 1997",
        "avatar": "/images/artists/roy-lichtenstein.jpg",
        "bio": "美国波普艺术大师，以独特的通俗连环画风格与印刷网点（Ben-Day Dots）闻名。他将通俗漫画中的戏剧性场景放大成巨幅画作，探讨艺术、广告与消费主义的关系。",
        "artworks": [
          {
            "id": "girls-romances",
            "title": "Girls' Romances (少女浪漫连环画)",
            "date": "1950 - 1971",
            "location": "多处私人收藏",
            "image": "/images/artworks/girls-romances.jpg",
            "notes": "放大大众漫画中夸张悲伤的恋爱女主角，用极其机械的黑色粗轮廓线与手工绘制的红蓝色网点表现工业印刷质感。",
            "knowledgePoints": [
              "漫画印刷网点（Ben-Day Dots）的符号化放大",
              "大众流行情感商品的冷静机械化再现"
            ],
            "titleEn": "Girls' Romances",
            "titleZh": "少女浪漫连环画"
          },
          {
            "id": "look-mickey",
            "title": "Look Mickey (看，米奇！)",
            "date": "1961",
            "location": "华盛顿国家美术馆",
            "image": "/images/artworks/look-mickey.jpg",
            "notes": "利希滕斯坦第一幅彻底打破高雅艺术与通俗卡通界限的突破作，直接描绘米老鼠与唐老鸭钓鱼的搞笑卡通画面。",
            "knowledgePoints": [
              "利希滕斯坦波普风格诞生的标志突破作品",
              "直接将迪士尼流行文化卡通引入美术馆"
            ],
            "titleEn": "Look Mickey",
            "titleZh": "看，米奇！"
          }
        ],
        "displayName": "Roy Lichtenstein (罗伊·利希滕斯坦)"
      },
      {
        "id": "andy-warhol",
        "name": "安迪·沃霍尔",
        "englishName": "Andy Warhol",
        "years": "1928 - 1987",
        "avatar": "/images/artists/andy-warhol.jpg",
        "bio": "波普艺术无与伦比的教父与领军人物。曾任商业插画家，他在纽约建立'工厂'（The Factory）工作室，用丝网印刷批量复制金宝汤罐头、玛丽莲·梦露与可口可乐，宣称'商业即是顶级的艺术'。",
        "artworks": [
          {
            "id": "campbell-soup",
            "title": "Campbell's Soup I (坎贝尔罐头汤)",
            "date": "1968",
            "location": "纽约现代艺术博物馆 (MoMA)",
            "image": "/images/artworks/campbell-soup.jpg",
            "notes": "将32种不同口味的坎贝尔罐头汤一字排开批量呈现。将超市货架上最普通的商品提升为博物馆圣殿的艺术品。",
            "knowledgePoints": [
              "波普艺术标志性超级符号",
              "用机械丝网印刷消解艺术家个人独创手触",
              "对消费主义社会高度标准化与批量复制的宣示"
            ],
            "titleEn": "Campbell's Soup I",
            "titleZh": "坎贝尔罐头汤"
          },
          {
            "id": "shot-marilyns",
            "title": "Shot Marilyns (枪击玛丽莲·梦露)",
            "date": "1964",
            "location": "私人收藏 / 2022年以1.95亿美元刷新公开拍卖纪录",
            "image": "/images/artworks/shot-marilyns.jpg",
            "notes": "梦露去世后创作的丝网印刷肖像，用饱和刺眼的对比色彩反复复制大众偶像的面孔。2022年以1.95亿美元成为20世纪公开拍卖最昂贵画作。",
            "knowledgePoints": [
              "大众名人文化（Celebrity Culture）与死亡隐喻",
              "色彩重叠与丝网印刷复制的极致代表",
              "拍卖史上最昂贵的20世纪艺术品"
            ],
            "titleEn": "Shot Marilyns",
            "titleZh": "枪击玛丽莲·梦露"
          },
          {
            "id": "la-banana",
            "title": "地下丝绒乐队专辑封面 (著名的黄色大香蕉)",
            "date": "1967",
            "location": "专辑封面与设计艺术",
            "image": "/images/artworks/la-banana.jpg",
            "notes": "为地下丝绒乐队（The Velvet Underground）设计的摇滚专辑封面，带有'慢慢剥开看看'的互动文字，成为流行音乐与波普艺术跨界符号。",
            "knowledgePoints": [
              "波普艺术与摇滚流行乐跨界交融的经典例子",
              "极简商业图案的流行文化符号传播"
            ],
            "titleEn": "地下丝绒乐队专辑封面",
            "titleZh": "著名的黄色大香蕉"
          },
          {
            "id": "elvis-presley",
            "title": "Elvis Presley (猫王埃尔维斯·普雷斯利)",
            "date": "1963",
            "location": "多处博物馆",
            "image": "/images/artworks/elvis-presley.jpg",
            "notes": "用银色底色与丝网重复叠加牛仔造型的猫王持枪形象，探讨大众传媒塑造的英雄神话。",
            "knowledgePoints": [
              "摇滚巨星符号与银色电影梦幻感"
            ],
            "titleEn": "Elvis Presley",
            "titleZh": "猫王埃尔维斯·普雷斯利"
          },
          {
            "id": "coca-cola",
            "title": "Coca cola (绿色可口可乐瓶)",
            "date": "1962",
            "location": "惠特尼美国艺术博物馆",
            "image": "/images/artworks/coca-cola.jpg",
            "notes": "成百上千个绿色可乐瓶排列。沃霍尔名言：'这里的可乐无论总统还是乞丐喝的都一样好，商业实现了最极致的平等'。",
            "knowledgePoints": [
              "消费社会人人平等的商品哲学阐释",
              "大众工业符号阵列化"
            ],
            "titleEn": "Coca cola",
            "titleZh": "绿色可口可乐瓶"
          }
        ],
        "displayName": "Andy Warhol (安迪·沃霍尔)"
      }
    ],
    "category": "art",
    "displayName": "Pop Art (波普艺术)"
  },
  {
    "id": "contemporary-art",
    "name": "当代艺术",
    "englishName": "Contemporary Art",
    "years": "1950 - 至今",
    "description": "涵盖抽象表现主义（Abstract Expressionism）、空间主义（Spatialism）、概念艺术与贫穷艺术（Arte Povera）。艺术家彻底解放材料与行为，用泼洒、刀割画布甚至极端日常物体质疑艺术的本质，强调创作过程与行为本身即是艺术。",
    "historicalContext": "二战后艺术中心由巴黎转移至纽约。面对战后复杂多元的世界，艺术家突破画框与画布边界，转向行动、空间与观念本身的无限探索。",
    "keyFeatures": [
      "行动绘画（Action Painting）与滴画法（Drip technique）",
      "划破画布的空间主义（Spatialism）",
      "概念艺术对艺术品物质实体本质的质疑",
      "材料的无限制解放"
    ],
    "artists": [
      {
        "id": "jackson-pollock",
        "name": "保罗·杰克逊·波洛克",
        "englishName": "Paul Jackson Pollock",
        "years": "1899 - 1968",
        "avatar": "/images/artists/jackson-pollock.jpg",
        "bio": "美国抽象表现主义（Abstract Expressionism）灵魂人物。他开创了著名的'滴画法'（Drip Technique）与行动绘画（Action Painting），将画布铺在地上，全身如舞蹈般巡走泼洒颜料，彻底颠覆了千百年来用画笔接触画布的传统。",
        "artworks": [
          {
            "id": "autumn-rhythm",
            "title": "Autumn Rhythm: Number 30 (秋天的节奏)",
            "date": "1950",
            "location": "纽约大都会艺术博物馆 (Metropolitan Museum of Art)",
            "image": "/images/artworks/autumn-rhythm.jpg",
            "notes": "波洛克滴画法顶峰杰作！黑色、白色、棕色与银色颜料在庞大画布上交织出如宇宙星云、如爵士乐律动般纷繁复杂的能量网络。",
            "knowledgePoints": [
              "行动绘画（Action Painting）与滴洒技法顶峰代表",
              "全形态绘画（All-over painting）消解中心与边际",
              "展现创作过程中肢体能量与颜料自由重力的碰撞"
            ],
            "titleEn": "Autumn Rhythm: Number 30",
            "titleZh": "秋天的节奏"
          },
          {
            "id": "one-number-31",
            "title": "One: Number 31, 1950 (第一号：1950年第31号)",
            "date": "1950",
            "location": "纽约现代艺术博物馆 (MoMA)",
            "image": "/images/artworks/one-number-31.jpg",
            "notes": "巨大的画布充满着狂热优雅的颜料滴溅流淌痕迹，令观者置身于无边无际的抽象能量气场之中。",
            "knowledgePoints": [
              "MoMA镇馆宝藏之一",
              "极端的抽象形式引发批评界对即时性与随机性的巨大轰动"
            ],
            "titleEn": "One: Number 31, 1950",
            "titleZh": "第一号：1950年第31号"
          }
        ],
        "displayName": "Paul Jackson Pollock (保罗·杰克逊·波洛克)"
      },
      {
        "id": "lucio-fontana",
        "name": "卢齐欧·封塔纳",
        "englishName": "Lucio Fontana",
        "years": "1899 - 1968",
        "avatar": "/images/artists/lucio-fontana.jpg",
        "bio": "阿根廷裔意大利大师，空间主义（Spatialism）创始人。他是艺术史上第一位用刀割破纯色画布的艺术家。通过割痕（Tagli）打破二维平面的限制，将画布后面的真实物理空间引入绘画之中。",
        "artworks": [
          {
            "id": "concetto-spaziale-punctures",
            "title": "打孔系列 (空间概念)",
            "date": "1950s",
            "location": "多处博物馆收藏",
            "image": "/images/artworks/concetto-spaziale-punctures.jpg",
            "notes": "在涂有颜料与沙粒的画布上打出一圈圈孔洞，让光线与真实空间穿透画布。",
            "knowledgePoints": [
              "空间主义（Spatialism）打孔探索",
              "突破二维绘画框限，将三维光影与透洞结合"
            ],
            "titleEn": "打孔系列",
            "titleZh": "空间概念"
          },
          {
            "id": "concetto-spaziale-slashes",
            "title": "割痕系列 - 划破画布 (空间概念)",
            "date": "1960s",
            "location": "多处顶级博物馆收藏",
            "image": "/images/artworks/concetto-spaziale-slashes.jpg",
            "notes": "艺术史上最震撼的切割！在极简鲜红或单色画布上用剃刀划出一道或数道干净利落的割痕。这一割象征着对传统绘画先决条件的彻底拒绝，开辟了三维虚无空间。",
            "knowledgePoints": [
              "划破画布（Slashed Canvas）的旷世艺术行为",
              "打破绘画与雕塑边界，将虚无空间引入绘画",
              "象征对传统艺术所有先决条件的彻底拒绝"
            ],
            "titleEn": "割痕系列 - 划破画布",
            "titleZh": "空间概念"
          }
        ],
        "displayName": "Lucio Fontana (卢齐欧·封塔纳)"
      },
      {
        "id": "piero-manzoni",
        "name": "皮耶罗·曼佐尼",
        "englishName": "Piero Manzoni",
        "years": "1933 - 1963",
        "avatar": "/images/artists/piero-manzoni.jpg",
        "bio": "意大利前卫艺术家，以对前卫艺术与艺术市场的强烈讽刺手法闻名。他的作品预示并直接影响了观念艺术与贫穷艺术（Arte Povera），避开了普通艺术材料，使用极端的物件质问艺术品本质。",
        "artworks": [
          {
            "id": "artists-shit",
            "title": "Artist's Shit (艺术家之粪)",
            "date": "1961",
            "location": "泰特现代美术馆/蓬皮杜等",
            "image": "/images/artworks/artists-shit.jpg",
            "notes": "观念艺术史上最著名的讽刺杰作！曼佐尼封存了90个印有编号与签名的罐头，宣称里面装有30克自己的排泄物，并按当时等重黄金的价格出售。彻底质疑了艺术品价值与商业盲目崇拜。",
            "knowledgePoints": [
              "观念艺术（Conceptual Art）极其尖锐的前卫代表作",
              "对艺术商品化、艺术市场盲目崇拜与艺术家签名的讽刺",
              "拍卖价格远超等重黄金的艺术奇观"
            ],
            "titleEn": "Artist's Shit",
            "titleZh": "艺术家之粪"
          }
        ],
        "displayName": "Piero Manzoni (皮耶罗·曼佐尼)"
      }
    ],
    "category": "art",
    "displayName": "Contemporary Art (当代艺术)"
  },
  {
    "id": "baroque-architecture",
    "category": "architecture",
    "name": "巴洛克建筑",
    "englishName": "Baroque Architecture",
    "years": "16世纪末 - 18世纪中叶 (1568 - 1750)",
    "bgClass": "baroque-theme",
    "description": "巴洛克建筑起源于16世纪晚期的罗马，强调集中式空间、强烈的雕塑形体感、动感的曲面平面与立面。通过光影剧场效果、壁画、雕塑与建筑的总体艺术（Gesamtkunstwerk / 视觉艺术的统一）以及奢华昂贵的大理石与金银灰泥材质，营造宏大的宗教与皇权震撼力。",
    "historicalContext": "在罗马天主教反宗教改革（Counter-Reformation）的背景下诞生，教会希望通过宏伟、生动且极具感官煽动力的建筑形式重新吸引信徒，重塑罗马作为世界天主教中心的荣光。",
    "keyFeatures": [
      "集中式空间与椭圆/复合几何平面",
      "动态雕塑形体与波浪起伏曲面立面",
      "建筑、光线、雕塑与天顶画的'总体艺术统一'",
      "奢华昂贵材质：彩色大理石、镀金灰泥（Stucco）与透视天顶画",
      "塞利奥式三联拱窗（Serliana）与神龛壁龛（Aedicula）的华丽变奏"
    ],
    "artists": [
      {
        "id": "giacomo-barozzi-da-vignola",
        "name": "贾科莫·巴罗齐·达·维尼奥拉",
        "englishName": "Giacomo Barozzi da Vignola",
        "years": "1507 - 1573",
        "avatar": "/images/artists/giacomo-barozzi-da-vignola.jpg",
        "bio": "16世纪最伟大的意大利矫饰主义与早期巴洛克过渡期建筑大师之一。他与帕拉迪奥、塞利奥并称为将文艺复兴古典法则传播至全欧的三大建筑导师。代表作包括 Caprarola 法尔内塞庄园与罗马耶稣会总堂。",
        "artworks": [
          {
            "id": "church-of-the-gesu",
            "title": "耶稣会总会教堂 (罗马耶稣堂)",
            "date": "1568 - 1584",
            "location": "罗马 (Rome)",
            "image": "/images/artworks/church-of-the-gesu.jpg",
            "notes": "反宗教改革建筑的代表作。单中殿无侧廊设计，两侧分布小礼拜堂，视线直通祭坛与辉煌穹顶，成为全世界数千座耶稣会教堂的原型范式。",
            "knowledgePoints": [
              "反宗教改革最具影响力的母体教堂范式",
              "拉丁十字平面结合集中式大穹顶",
              "由维尼奥拉设计主体，德拉·波尔塔完成宏伟双层立面与大涡卷",
              "巴洛克总体艺术天顶画《耶稣圣名之胜利》（巴奇恰绘）"
            ],
            "titleEn": "耶稣会总会教堂",
            "titleZh": "罗马耶稣堂"
          },
          {
            "id": "villa-giulia",
            "title": "教宗朱利叶斯三世庄园 (茱莉亚别墅)",
            "date": "1551 - 1553",
            "location": "罗马 (Rome)",
            "image": "/images/artworks/villa-giulia.jpg",
            "notes": "维尼奥拉与阿曼纳蒂、瓦萨里合作设计的教宗郊野度假庄园。半圆形柱廊庭院与下沉式水神殿（Nymphaeum）构成了精妙的视线与光影流动层级。",
            "knowledgePoints": [
              "矫饰主义庄园建筑经典代表",
              "半圆形多立克/爱奥尼柱廊与视轴对称设计",
              "精巧的下沉式泉水神殿与石雕水景"
            ],
            "titleEn": "教宗朱利叶斯三世庄园",
            "titleZh": "茱莉亚别墅"
          }
        ],
        "displayName": "Giacomo Barozzi da Vignola (贾科莫·巴罗齐·达·维尼奥拉)"
      },
      {
        "id": "giacomo-della-porta",
        "name": "贾科莫·德拉·波尔塔",
        "englishName": "Giacomo della Porta",
        "years": "1532 - 1602",
        "avatar": "/images/artists/giacomo-della-porta.jpg",
        "bio": "意大利著名建筑师与雕塑家，曾任罗马人民建筑师（Architetto del Popolo Romano）。他师承米开朗基罗与维尼奥拉，以完成米开朗基罗的圣彼得大教堂穹顶以及耶稣堂立面而闻名于世。",
        "artworks": [
          {
            "id": "gesu-facade",
            "title": "Façade of the Church of the Gesù (耶稣堂立面)",
            "date": "1571 - 1584",
            "location": "罗马 (Rome)",
            "image": "/images/artworks/gesu-facade.jpg",
            "notes": "德拉·波尔塔重构了维尼奥拉的原始方案，采用双层壁柱叠涩立面，上下层之间以优美巨大的侧翼涡卷（Volutes）顺滑过渡，奠定了巴洛克教堂立面的经典母题。",
            "knowledgePoints": [
              "巴洛克立面经典涡卷构图原型",
              "中央开间壁柱密集与山花套叠增强纵向吸引力",
              "成为天主教世界反宗教改革教堂立面的标准样板"
            ],
            "titleEn": "Façade of the Church of the Gesù",
            "titleZh": "耶稣堂立面"
          }
        ],
        "displayName": "Giacomo della Porta (贾科莫·德拉·波尔塔)"
      },
      {
        "id": "francesco-borromini",
        "name": "弗朗切斯科·博罗米尼",
        "englishName": "Francesco Borromini",
        "years": "1599 - 1667",
        "avatar": "/images/artists/francesco-borromini.jpg",
        "bio": "罗马巴洛克建筑最富独创性与叛逆精神的天才大师。博罗米尼精通几何学与结构力学，彻底颠覆了古典直角与平整法则，创立了凹凸波浪起伏曲面、复杂星形/蜂巢多边形平面与光影雕塑建筑。",
        "artworks": [
          {
            "id": "san-carlo-quattro-fontane",
            "title": "圣卡利诺 (四喷泉圣卡罗教堂)",
            "date": "1638 - 1646",
            "location": "罗马 (Rome)",
            "image": "/images/artworks/san-carlo-quattro-fontane.jpg",
            "notes": "博罗米尼的开山与代表作。在极其狭小的街角地块上，运用波浪般凹凸起伏的立面，以及由十字形、八角形与六角形凹陷藻井组成的椭圆形蜂巢穹顶，创造出代表作的流动空间。",
            "knowledgePoints": [
              "巴洛克波浪形动感立面（Undulating Facade）代表作",
              "几何学构图：两个等边三角形相交组成的椭圆平面",
              "利用透视递减藻井营造虚幻深邃的穹顶天光"
            ],
            "titleEn": "圣卡利诺",
            "titleZh": "四喷泉圣卡罗教堂"
          },
          {
            "id": "sant-ivo-alla-sapienza",
            "title": "罗马智慧大学教堂 (圣依佛堂)",
            "date": "1642 - 1660",
            "location": "罗马 (Rome)",
            "image": "/images/artworks/sant-ivo-alla-sapienza.jpg",
            "notes": "位于罗马智慧大学庭院尽端，平面为两个交错的正三角形构成的大卫星（Hexagram），顶部以独特的螺旋上升式通心粉状塔刹（Spiral Lantern）直插云霄。",
            "knowledgePoints": [
              "六角星几何平面与凹凸相间花瓣状内部空间",
              "独具特色的螺旋形巴洛克塔尖（Spiral Spire）",
              "象征智慧与神圣理性的几何学代表作"
            ],
            "titleEn": "罗马智慧大学教堂",
            "titleZh": "圣依佛堂"
          }
        ],
        "displayName": "Francesco Borromini (弗朗切斯科·博罗米尼)"
      },
      {
        "id": "gian-lorenzo-bernini",
        "name": "吉安·洛伦佐·贝尔尼尼",
        "englishName": "Gian Lorenzo Bernini",
        "years": "1598 - 1680",
        "avatar": "/images/artists/gian-lorenzo-bernini.jpg",
        "bio": "17世纪巴洛克艺术的绝对领袖，集雕塑家、建筑师、画家与城市规划师于一身。他被誉为米开朗基罗的继承者，将雕塑、绘画与建筑融汇为戏剧化'视觉艺术的统一'（Unity of the Visual Arts）。",
        "artworks": [
          {
            "id": "piazza-san-pietro",
            "title": "Piazza San Pietro (梵蒂冈圣伯多禄大广场)",
            "date": "1656 - 1667",
            "location": "梵蒂冈 / 罗马 (Vatican, Rome)",
            "image": "/images/artworks/piazza-san-pietro.jpg",
            "notes": "教皇国最宏伟的都市门厅。由四排巨大的托斯卡纳柱廊构成椭圆形广场，顶部矗立140尊圣人雕像，象征天主教会向全世界信徒张开热情的母性双臂。",
            "knowledgePoints": [
              "4排共284根托斯卡纳多立克式巨柱构成的半圆形柱廊",
              "栏杆上方矗立140尊大理石圣徒雕像",
              "梯形广场与椭圆形广场相连构成的光学透视校正",
              "象征教会'张开双臂拥抱全世界信徒'（Maternal Arms）"
            ],
            "titleEn": "Piazza San Pietro",
            "titleZh": "梵蒂冈圣伯多禄大广场"
          },
          {
            "id": "sant-andrea-quirinale",
            "title": "Sant'Andrea al Quirinale (奎里纳尔圣安德肋堂)",
            "date": "1658 - 1670",
            "location": "罗马 (Rome)",
            "image": "/images/artworks/sant-andrea-quirinale.jpg",
            "notes": "贝尔尼尼本人最钟爱的建筑杰作。采用短轴正对主入口的横向椭圆形平面，雕塑圣安德肋升天的雕像被金色天光环绕，戏剧性达到极致。",
            "knowledgePoints": [
              "横向椭圆平面（入口正对短轴主祭坛）",
              "建筑、雕塑与隐蔽光源剧场化融合的经典案例",
              "被贝尔尼尼自评为'唯一带给自己真正愉悦的建筑'"
            ],
            "titleEn": "Sant'Andrea al Quirinale",
            "titleZh": "奎里纳尔圣安德肋堂"
          },
          {
            "id": "palazzo-montecitorio",
            "title": "Palazzo Montecitorio (蒙特奇托里奥宫)",
            "date": "1653 - 1694",
            "location": "罗马 (Rome)",
            "image": "/images/artworks/palazzo-montecitorio.jpg",
            "notes": "贝尔尼尼受教宗英诺森十世委托设计的宏伟贵族宫殿，现为意大利众议院所在地。多边形折线立面与毛石粗琢基座表现出自然山体般的雄浑力量。",
            "knowledgePoints": [
              "分段折线形立面顺应街道走向",
              "底层粗糙质感的毛石（Rustication）基座设计",
              "后由卡洛·丰塔纳完成钟楼与最终修饰"
            ],
            "titleEn": "Palazzo Montecitorio",
            "titleZh": "蒙特奇托里奥宫"
          },
          {
            "id": "st-peters-baldachin",
            "title": "St. Peter's Baldachin (圣彼得大教堂青铜华盖)",
            "date": "1624 - 1633",
            "location": "梵蒂冈圣彼得大教堂 (St. Peter's Basilica)",
            "image": "/images/artworks/st-peters-baldachin.jpg",
            "notes": "立于圣彼得墓穴与主祭坛之上的巨型青铜华座，高近30米（约四层楼）。由4根巨大的所罗门螺旋扭纹柱支撑，是贝尔尼尼与博罗米尼早年合作的代表作。",
            "knowledgePoints": [
              "融铜自罗马万神殿门廊青铜构件",
              "巴洛克螺旋扭纹柱（Solomonic Columns）典范",
              "世界最大雕塑与建筑结合体之一，高29米"
            ],
            "titleEn": "St. Peter's Baldachin",
            "titleZh": "圣彼得大教堂青铜华盖"
          }
        ],
        "displayName": "Gian Lorenzo Bernini (吉安·洛伦佐·贝尔尼尼)"
      },
      {
        "id": "guarino-guarini",
        "name": "瓜里诺·瓜里尼",
        "englishName": "Guarino Guarini",
        "years": "1624 - 1683",
        "avatar": "/images/artists/guarino-guarini.jpg",
        "bio": "皮埃蒙特巴洛克学派巅峰代表，泰亚蒂派修道士、杰出数学家与建筑理论家。他的石构建筑代表了巴洛克结构工程学的极限，其《民用建筑论》（Architettura Civile）深刻启发了南德与奥地利晚期巴洛克与洛可可建筑。",
        "artworks": [
          {
            "id": "palazzo-carignano",
            "title": "Palazzo Carignano (都灵卡里尼亚诺宫)",
            "date": "1679",
            "location": "都灵 (Turin, Italy)",
            "image": "/images/artworks/palazzo-carignano.jpg",
            "notes": "全红砖砌筑的巴洛克宫殿典范。中央立面采用波浪形凹凸起伏曲线，将砖石材料的雕塑可塑性发挥到极致，意大利统一后曾作为第一个议会所在地。",
            "knowledgePoints": [
              "凹凸波浪形红砖立面与椭圆中央大厅",
              "无需大理石贴面、仅凭裸砖雕花展现的精湛技艺",
              "意大利复兴运动首届议会会址"
            ],
            "titleEn": "Palazzo Carignano",
            "titleZh": "都灵卡里尼亚诺宫"
          },
          {
            "id": "chapel-holy-shroud",
            "title": "圣裹尸布小堂 (裹尸布礼拜堂)",
            "date": "1668 - 1694",
            "location": "都灵主教座堂 (Turin Cathedral)",
            "image": "/images/artworks/chapel-holy-shroud.jpg",
            "notes": "建筑史上最具有探索性的几何结构穹顶。瓜里尼运用相互叠涩错落的拱券层层交错向上收缩，构成了光芒万丈的六角星形透空穹顶。",
            "knowledgePoints": [
              "分层叠涩拱券构成的悬空六角星形穹顶透光奇迹",
              "黑色大理石与上方白光倾泻构成的耶稣受难与复活神学隐喻",
              "巴洛克结构工程学与高等数学几何结合的最高成就"
            ],
            "titleEn": "圣裹尸布小堂",
            "titleZh": "裹尸布礼拜堂"
          }
        ],
        "displayName": "Guarino Guarini (瓜里诺·瓜里尼)"
      }
    ],
    "displayName": "Baroque Architecture (巴洛克建筑)"
  },
  {
    "id": "neoclassical-architecture",
    "category": "architecture",
    "name": "新古典主义建筑",
    "englishName": "Neoclassical Architecture",
    "years": "18世纪中叶 - 19世纪中叶 (1750 - 1850)",
    "bgClass": "neoclassical-theme",
    "description": "新古典主义建筑是对洛可可繁复装饰的反叛与对古希腊、古罗马理性秩序的崇高回归。以庞贝与赫库兰尼姆古城重见天日为契机，强调立方形、圆柱体、球体等纯粹几何体量，追求宏伟沉重、端庄严谨的纪念碑式秩序与古典柱式法则。",
    "historicalContext": "伴随启蒙运动（Enlightenment）的理性光芒、法国大革命与拿破仑帝国崛起，新古典主义成为理性主义、公民美德与帝国威严的官方建筑语言。",
    "keyFeatures": [
      "灵感源于古希腊神庙与古罗马万神殿/凯旋门",
      "纯粹几何体组合：立方体、圆柱体、球体、金字塔",
      "巨大沉重、严谨对称的纪念碑式体量感（Massive & Severe）",
      "标准的古典五柱式门廊与三角山花（Pediment）",
      "反对洛可可式琐碎浮华，推崇清醒冷静的理性秩序"
    ],
    "artists": [
      {
        "id": "filippo-juvarra",
        "name": "菲利波·尤瓦拉",
        "englishName": "Filippo Juvarra",
        "years": "1678 - 1736",
        "avatar": "/images/artists/filippo-juvarra.jpg",
        "bio": "意大利晚期巴洛克向新古典主义过渡的核心大师，身兼建筑师、舞台美术师、雕刻师与金匠。在都灵与西西里创作了众多辉煌建筑，其作品具备古典清晰的轮廓与戏剧化的大气象。",
        "artworks": [
          {
            "id": "basilica-of-superga",
            "title": "Basilica of Superga (苏佩尔加大教堂)",
            "date": "1717 - 1731",
            "location": "都灵苏佩尔加山顶 (Turin, Italy)",
            "image": "/images/artworks/basilica-of-superga.jpg",
            "notes": "矗立在都灵阿尔卑斯雪山背景前的壮丽圣殿。由高耸的万神殿式八柱门廊与巍峨的集中式圆顶结合，展现出晚期巴洛克走向清醒古典理性的转折典范。",
            "knowledgePoints": [
              "古罗马万神殿式深进深立柱门廊",
              "集中式高耸圆顶与双侧对称钟楼",
              "萨伏依王室墓地所在地，雪山映衬下的地标杰作"
            ],
            "titleEn": "Basilica of Superga",
            "titleZh": "苏佩尔加大教堂"
          }
        ],
        "displayName": "Filippo Juvarra (菲利波·尤瓦拉)"
      },
      {
        "id": "luigi-vanvitelli",
        "name": "路易吉·万维泰利",
        "englishName": "Luigi Vanvitelli",
        "years": "1700 - 1773",
        "avatar": "/images/artists/luigi-vanvitelli.jpg",
        "bio": "18世纪意大利最负盛名的建筑巨擘，以设计卡塞塔王宫名扬欧洲。他践行了一种严谨清醒的学院派晚期巴洛克风格，为意大利全面走向新古典主义铺平了道路。",
        "artworks": [
          {
            "id": "palace-of-caserta",
            "title": "Royal Palace of Caserta (卡塞塔王宫)",
            "date": "1752 - 1774",
            "location": "卡塞塔 (Caserta, Italy)",
            "image": "/images/artworks/palace-of-caserta.jpg",
            "notes": "世界最大的前王家宫殿之一（被称为意大利的凡尔赛宫）。整座建筑长达247米，拥有1200间房间、4座对称内庭院以及延伸数公里的宏大中轴线御花园瀑布群。",
            "knowledgePoints": [
              "长方形四合院大矩形平面，由十字通道划分为4个规整内院",
              "宏伟壮丽的中央八角形换向大厅与双向大理石皇家阶梯",
              "联合国教科文组织世界文化遗产，古典严谨轴线与壮阔园林"
            ],
            "titleEn": "Royal Palace of Caserta",
            "titleZh": "卡塞塔王宫"
          },
          {
            "id": "palace-of-naples",
            "title": "Royal Palace of Naples (那不勒斯王宫)",
            "date": "1600 / 1753 修复",
            "location": "那不勒斯保民广场 (Piazza del Plebiscito)",
            "image": "/images/artworks/palace-of-naples.jpg",
            "notes": "那不勒斯波旁王朝统治中心。万维泰利对其进行了关键的新古典主义修复与立面重构，赋予整座广场规整大气的古典韵律。",
            "knowledgePoints": [
              "底层连续多立克拱廊与上层古典壁柱韵律",
              "那不勒斯城市核心政治与仪式中心"
            ],
            "titleEn": "Royal Palace of Naples",
            "titleZh": "那不勒斯王宫"
          }
        ],
        "displayName": "Luigi Vanvitelli (路易吉·万维泰利)"
      },
      {
        "id": "giuseppe-piermarini",
        "name": "朱塞佩·皮尔马里尼",
        "englishName": "Giuseppe Piermarini",
        "years": "1734 - 1808",
        "avatar": "/images/artists/giuseppe-piermarini.jpg",
        "bio": "意大利新古典主义建筑领军大师，曾师从万维泰利，米兰布雷拉美术学院（Accademia di Brera）首任建筑学教授。他奠定了米兰作为欧洲新古典主义重镇的城市风貌。",
        "artworks": [
          {
            "id": "teatro-alla-scala",
            "title": "Teatro alla Scala (米兰斯卡拉大剧院)",
            "date": "1776 - 1778",
            "location": "米兰 (Milan, Italy)",
            "image": "/images/artworks/teatro-alla-scala.jpg",
            "notes": "世界歌剧殿堂与声学奇迹。严谨对称的新古典主义三段式立面，底层为马车通行门廊，内部为典雅的马蹄形六层包厢大厅（2002-04年由瑞士建筑师马里奥·博塔 Mario Botta 争议性改造）。",
            "knowledgePoints": [
              "新古典主义立面与多立克门廊通道",
              "马蹄形包厢声学剧场典范",
              "当代由建筑大师 Mario Botta 主持完成结构与舞台现代化扩建"
            ],
            "titleEn": "Teatro alla Scala",
            "titleZh": "米兰斯卡拉大剧院"
          },
          {
            "id": "royal-palace-milan",
            "title": "Palazzo Reale (米兰王宫)",
            "date": "1773 - 1778",
            "location": "米兰大教堂广场旁 (Piazza del Duomo, Milan)",
            "image": "/images/artworks/royal-palace-milan.jpg",
            "notes": "米兰历代统治者核心宫邸。皮尔马里尼拆除了旧有部分建筑，构建了向大教堂广场开敞的新古典主义U形荣誉庭院与端庄立面。",
            "knowledgePoints": [
              "U型向大教堂开敞的古典荣誉庭院（Cour d'Honneur）",
              "严整的爱奥尼/科林斯壁柱节奏与平屋顶檐口"
            ],
            "titleEn": "Palazzo Reale",
            "titleZh": "米兰王宫"
          }
        ],
        "displayName": "Giuseppe Piermarini (朱塞佩·皮尔马里尼)"
      },
      {
        "id": "claude-nicolas-ledoux",
        "name": "克洛德·尼古拉·勒杜",
        "englishName": "Claude Nicolas Ledoux",
        "years": "1736 - 1806",
        "avatar": "/images/artists/claude-nicolas-ledoux.jpg",
        "bio": "法国新古典主义建筑的最早代表与激进乌托邦远见者。他主张用纯粹立方体、圆柱体等原始几何形体表达建筑的'能言性'（Architecture Parlante），其肖城理想城市（Ideal City of Chaux）规划影响深远。",
        "artworks": [
          {
            "id": "rotonde-de-la-villette",
            "title": "La Rotonde de la Villette (巴黎拉维莱特圆亭)",
            "date": "1788",
            "location": "巴黎 (Paris, France)",
            "image": "/images/artworks/rotonde-de-la-villette.jpg",
            "notes": "巴黎旧城关税卡亭。以粗犷厚重的多立克希腊十字形基座托起巨大的中央纯圆柱体鼓座，体现出纯几何形体组合的巨大沉重感与公民威慑力。",
            "knowledgePoints": [
              "纯粹几何形体（圆柱体 + 希腊十字基座）组合典范",
              "古希腊无底座多立克柱式的粗犷原始力量",
              "法国大革命前夕国家关税与城市防线地标"
            ],
            "titleEn": "La Rotonde de la Villette",
            "titleZh": "巴黎拉维莱特圆亭"
          }
        ],
        "displayName": "Claude Nicolas Ledoux (克洛德·尼古拉·勒杜)"
      },
      {
        "id": "neoclassical-monuments-group",
        "name": "欧美新古典主义纪念碑群",
        "englishName": "Neoclassical Monuments Masters",
        "years": "1790 - 1860",
        "avatar": "/images/artists/neoclassical-monuments-group.jpg",
        "bio": "新古典主义作为横扫欧美大陆的跨国风潮，在巴黎、华盛顿、米兰与慕尼黑等地诞生了代表国家主权、理性与民主理想的传世纪念碑。",
        "artworks": [
          {
            "id": "arc-de-triomphe",
            "title": "Arc de Triomphe (巴黎雄狮凯旋门)",
            "date": "1806 - 1836",
            "location": "巴黎戴高乐星形广场 (Place Charles de Gaulle, Paris)",
            "image": "/images/artworks/arc-de-triomphe.jpg",
            "notes": "拿破仑为纪念奥斯特里茨战役胜利而下令建造。由沙尔格兰（Jean Chalgrin）设计，吸取罗马提图斯凯旋门灵感，高达50米，是世界最大、最宏伟的单一拱门纪念碑。",
            "knowledgePoints": [
              "古罗马单一单跨凯旋门的宏大几何体量放大",
              "包含吕德著名浮雕《马赛曲 / 1792年志愿军出征》",
              "巴黎12条林荫大道汇聚的放射状几何轴线中心"
            ],
            "titleEn": "Arc de Triomphe",
            "titleZh": "巴黎雄狮凯旋门"
          },
          {
            "id": "simplon-gate",
            "title": "辛普朗门 (米兰和平门)",
            "date": "1807 - 1838",
            "location": "米兰森皮奥内公园 (Parco Sempione, Milan)",
            "image": "/images/artworks/simplon-gate.jpg",
            "notes": "意大利建筑师路易吉·卡尼奥拉（Luigi Cagnola）设计的古罗马三跨凯旋门杰作。正对连接米兰与巴黎的辛普朗古道终点，顶冠青铜和平六马战车。",
            "knowledgePoints": [
              "由 Luigi Cagnola 设计的新古典主义三联拱凯旋门",
              "顶立青铜和平女神与六马战车（Sestiga della Pace）",
              "米兰拿破仑城市轴线'森皮奥内大道'的标志性门楼"
            ],
            "titleEn": "辛普朗门",
            "titleZh": "米兰和平门"
          },
          {
            "id": "uva-rotunda",
            "title": "University of Virginia Rotunda (弗吉尼亚大学圆厅)",
            "date": "1817 - 1826",
            "location": "美国夏洛茨维尔 (Charlottesville, Virginia, USA)",
            "image": "/images/artworks/uva-rotunda.jpg",
            "notes": "由美国《独立宣言》起草人兼建筑师托马斯·杰斐逊（Thomas Jefferson）设计。以古罗马万神殿1/2比例精准缩放，代表知识与理性照亮人类思想的学术殿堂。",
            "knowledgePoints": [
              "托马斯·杰斐逊帕拉迪奥与新古典主义最高代表作",
              "古罗马万神殿半比例纯圆顶神庙缩影",
              "世界文化遗产，美国'学术村'规划核心"
            ],
            "titleEn": "University of Virginia Rotunda",
            "titleZh": "弗吉尼亚大学圆厅"
          },
          {
            "id": "white-house",
            "title": "The White House (美国白宫)",
            "date": "1792 - 1800",
            "location": "华盛顿哥伦比亚特区 (Washington, D.C., USA)",
            "image": "/images/artworks/white-house.jpg",
            "notes": "爱尔兰建筑师詹姆斯·霍本（James Hoban）设计的美国总统府邸。灵感来自爱尔兰都柏林伦斯特府邸的帕拉迪奥新古典主义风范，端庄典雅。",
            "knowledgePoints": [
              "由 James Hoban 赢取竞标设计",
              "弗吉尼亚阿奎亚砂岩砌筑，粉刷白色保护涂层",
              "爱奥尼双层门廊与对称庄重的国家元首府邸范本"
            ],
            "titleEn": "The White House",
            "titleZh": "美国白宫"
          },
          {
            "id": "propylaea-munich",
            "title": "Propylaea (慕尼黑国王广场山门)",
            "date": "1854 - 1862",
            "location": "慕尼黑国王广场 (Königsplatz, Munich, Germany)",
            "image": "/images/artworks/propylaea-munich.jpg",
            "notes": "由巴伐利亚宫廷建筑大师莱奥·冯·克伦策（Leo von Klenze）设计。纯正复刻雅典卫城山门（Propylaea），将多立克柱廊与两侧塔楼结合，使慕尼黑被誉为'伊萨尔河畔的雅典'。",
            "knowledgePoints": [
              "Leo von Klenze 设计的纯正希腊复兴风格（Greek Revival）",
              "古希腊多立克神庙门廊结合双侧厚重塔楼",
              "为纪念巴伐利亚与希腊独立建交而立的城门纪念碑"
            ],
            "titleEn": "Propylaea",
            "titleZh": "慕尼黑国王广场山门"
          }
        ],
        "displayName": "Neoclassical Monuments Masters (欧美新古典主义纪念碑群)"
      }
    ],
    "displayName": "Neoclassical Architecture (新古典主义建筑)"
  },
  {
    "id": "industrial-architecture",
    "category": "architecture",
    "name": "工业革命铁构与玻璃建筑",
    "englishName": "Industrial Revolution Architecture",
    "years": "1851 - 1889",
    "bgClass": "industrial-theme",
    "description": "第一次工业革命催生了铸铁、熟铁、玻璃与钢材等全新工业建材的大规模量产。建筑彻底告别了厚重砖石劳作，迎来了预制装配式构件、超大跨度桁架空间与高耸铁塔，开启了建筑工程学的现代新纪元。",
    "historicalContext": "大英帝国与欧洲工业化达到巅峰，1851年伦敦世博会与1889年巴黎世博会成为展示工业制造伟力、结构工程革命的全球舞台。",
    "keyFeatures": [
      "铁与玻璃（Iron & Glass）的大规模结构化应用",
      "工厂标准化预制构件与现场模块化装配施工",
      "前所未有的超大无柱通透跨度与巨型展厅空间",
      "彻底摆脱传统砖石砌体自重束缚，追求轻盈通透与极致高度"
    ],
    "artists": [
      {
        "id": "joseph-paxton",
        "name": "约瑟夫·帕克斯顿",
        "englishName": "Joseph Paxton",
        "years": "1803 - 1865",
        "avatar": "/images/artists/joseph-paxton.jpg",
        "bio": "英国著名园艺家与建筑工程创新大师。他将温室花房的铸铁与玻璃拼接原理创新性地应用于大型公共展馆，创造了划时代的水晶宫。",
        "artworks": [
          {
            "id": "crystal-palace",
            "title": "The Crystal Palace (伦敦水晶宫)",
            "date": "1851",
            "location": "伦敦海德公园 (Hyde Park, London / 1851世博会)",
            "image": "/images/artworks/crystal-palace.jpg",
            "notes": "第一届万国工业博览会（1851 Great Exhibition）主展馆。长564米、占地超7万平方米，全部由预制铸铁肋拱与30万块标准平板玻璃在短短9个月内拼装完成，被视为现代建筑装配工业化的开端。",
            "knowledgePoints": [
              "现代预制拼装建筑（Prefabrication）的始祖",
              "全玻璃与铁架结构，带来划时代的漫射采光与透明空间",
              "1851年首届伦敦世界博览会核心标志"
            ],
            "titleEn": "The Crystal Palace",
            "titleZh": "伦敦水晶宫"
          }
        ],
        "displayName": "Joseph Paxton (约瑟夫·帕克斯顿)"
      },
      {
        "id": "gustave-eiffel",
        "name": "居斯塔夫·埃菲尔",
        "englishName": "Gustave Eiffel",
        "years": "1832 - 1923",
        "avatar": "/images/artists/gustave-eiffel.jpg",
        "bio": "法国世界级桥梁与金属结构工程大师。以设计纽约自由女神像内部铁钢骨架、波尔多铁桥以及举世闻名的巴黎埃菲尔铁塔永载史册。",
        "artworks": [
          {
            "id": "eiffel-tower",
            "title": "Eiffel Tower (埃菲尔铁塔)",
            "date": "1887 - 1889",
            "location": "巴黎战神广场 (Champ de Mars, Paris)",
            "image": "/images/artworks/eiffel-tower.jpg",
            "notes": "1889年巴黎世界博览会主入口拱门与法国大革命100周年纪念碑。高300米（在当时为世界最高人造建筑），由1.8万个锻铁构件与250万颗铆钉精密拼接而成，是金属结构美学的代表作。",
            "knowledgePoints": [
              "1889年巴黎世博会入口标志性构筑物",
              "世界第一座突破300米高度的纯锻铁格构结构（Puddle Iron）",
              "精密风洞计算与轻盈镂空桁架结构美学"
            ],
            "titleEn": "Eiffel Tower",
            "titleZh": "埃菲尔铁塔"
          }
        ],
        "displayName": "Gustave Eiffel (居斯塔夫·埃菲尔)"
      }
    ],
    "displayName": "Industrial Revolution Architecture (工业革命铁构与玻璃建筑)"
  },
  {
    "id": "art-nouveau-architecture",
    "category": "architecture",
    "name": "新艺术运动建筑",
    "englishName": "Art Nouveau Architecture",
    "years": "1890 - 1910",
    "bgClass": "nouveau-theme",
    "description": "新艺术运动（1890-1910）是一场横扫欧洲大陆的全面反学院派折衷主义风潮。在法国称 Art Nouveau，在英国称 Modern Style，在德国称 Jugendstil（青年风格），在奥地利称 Sezession（分离派），在意大利称 Stile Liberty 或 Stile Floreale（花卉风格）。以柔韧有力的植物生长线（鞭绳曲线 Whiplash line）与铸铁、马赛克、彩色玻璃的艺术化结合为灵魂。",
    "historicalContext": "世纪之交的欧洲艺术家反抗千篇一律的工业机械冰冷感与历史复古主义，渴望以自然界的生机律动创造一种属于20世纪新时代的整体艺术生活方式。",
    "keyFeatures": [
      "有机的曲线（Curved / Whiplash lines）与植物藤蔓、花卉图案（Floral motifs）",
      "新材料的装饰与结构合一：铸铁（Cast iron）、熟铁、透光玻璃与瓷砖",
      "打破传统盒子房间格局，创造流动贯通的自由空间与室内光井",
      "全方位'总体艺术'（Gesamtkunstwerk）：门窗、扶手、马赛克地坪、灯具一体化设计"
    ],
    "artists": [
      {
        "id": "victor-horta",
        "name": "维克多·奥塔",
        "englishName": "Victor Horta",
        "years": "1861 - 1947",
        "avatar": "/images/artists/victor-horta.jpg",
        "bio": "比利时新艺术运动建筑领袖与奠基人。他首次将工业铸铁裸露于住宅室内，并用如同植物茎干般舒展蜿蜒的'鞭绳曲线'统领整个空间，被联合国列为世界文化遗产。",
        "artworks": [
          {
            "id": "hotel-tassel",
            "title": "Hôtel Tassel (塔塞尔公馆)",
            "date": "1893",
            "location": "布鲁塞尔 (Brussels, Belgium)",
            "image": "/images/artworks/hotel-tassel.jpg",
            "notes": "公认的世界第一座完整的新艺术运动建筑。中庭中央那根纤细的铸铁立柱如树枝般在天花板上生出蔓藤状铁艺分叉，与地面马赛克波浪图案及彩色玻璃光线融为一体。",
            "knowledgePoints": [
              "世界第一座成熟的新艺术运动住宅建筑（1893）",
              "标志性的铸铁楼梯扶手与天花'鞭绳曲线'（Whiplash Curves）",
              "彻底打破传统布鲁塞尔联排住宅阴暗格局，引入中央玻璃天顶采光"
            ],
            "titleEn": "Hôtel Tassel",
            "titleZh": "塔塞尔公馆"
          }
        ],
        "displayName": "Victor Horta (维克多·奥塔)"
      },
      {
        "id": "joseph-maria-olbrich",
        "name": "约瑟夫·玛丽亚·奥尔布里希",
        "englishName": "Joseph Maria Olbrich",
        "years": "1867 - 1908",
        "avatar": "/images/artists/joseph-maria-olbrich.jpg",
        "bio": "奥地利维也纳分离派（Wiener Secession）联合创始人与核心建筑大师，师从奥托·瓦格纳。他为分离派艺术家设计了专属圣殿，是世纪之交中欧先锋艺术的领路人。",
        "artworks": [
          {
            "id": "secession-building",
            "title": "Secession Building (维也纳分离派展览馆)",
            "date": "1897 - 1898",
            "location": "维也纳 (Vienna, Austria)",
            "image": "/images/artworks/secession-building.jpg",
            "notes": "维也纳分离派艺术运动的最高圣殿。纯净纯白的几何体量上方托举着一具由数千片镀金月桂树叶编织而成的镂空金球穹顶（被当地人亲切称为'金卷心菜'），门楣刻有名言'给每个时代以其艺术，给艺术以其自由'。",
            "knowledgePoints": [
              "门楣名言：'Der Zeit ihre Kunst. Der Kunst ihre Freiheit'（给时代以艺术，给艺术以自由）",
              "由3000片镀金月桂叶构成的镂空金属球体圆顶（Golden Cabbage）",
              "馆内永久收藏古斯塔夫·克里姆特宏伟壁画《贝多芬饰带》"
            ],
            "titleEn": "Secession Building",
            "titleZh": "维也纳分离派展览馆"
          }
        ],
        "displayName": "Joseph Maria Olbrich (约瑟夫·玛丽亚·奥尔布里希)"
      },
      {
        "id": "hector-guimard",
        "name": "埃克托尔·吉马尔",
        "englishName": "Hector Guimard",
        "years": "1867 - 1942",
        "avatar": "/images/artists/hector-guimard.jpg",
        "bio": "法国新艺术运动最著名的大师，巴黎新艺术风格（Style Métro）的创造者。他将大自然的植物芽孢、昆虫翅膀形态通过模数化铸铁工艺工业化制造，让巴黎地铁成为流动的新艺术露天博物馆。",
        "artworks": [
          {
            "id": "paris-metro-entrances",
            "title": "Stazione metropolitana (巴黎地铁站出入口)",
            "date": "1899 - 1904",
            "location": "巴黎各主要地铁站 (Paris, France)",
            "image": "/images/artworks/paris-metro-entrances.jpg",
            "notes": "为1900年巴黎世博会配套地铁设计的出入口凉亭与栏杆。采用绿色青铜色铸铁造型，宛如从地下自然萌发的花茎与荷叶玻璃雨棚（龙虾尾状凉棚），成为巴黎城市最具浪漫诗意的永恒象征。",
            "knowledgePoints": [
              "1900年巴黎世博会公共交通艺术设计的里程碑",
              "由模数化铸铁构件工业批量浇铸而成的植物形态（Edicules & Portiques）",
              "著名的独创'新艺术地铁字体'（Metropolitain Lettering）"
            ],
            "titleEn": "Stazione metropolitana",
            "titleZh": "巴黎地铁站出入口"
          }
        ],
        "displayName": "Hector Guimard (埃克托尔·吉马尔)"
      }
    ],
    "displayName": "Art Nouveau Architecture (新艺术运动建筑)"
  },
  {
    "id": "expressionist-and-gaudi",
    "category": "architecture",
    "name": "表现主义建筑与高迪现代主义",
    "englishName": "Expressionist Architecture & Catalan Modernisme",
    "years": "1882 - 1930",
    "bgClass": "expressionist-theme",
    "description": "20世纪头几十年并驾齐驱的先锋建筑探索：在德国与中欧兴起表现主义建筑（Expressionist Architecture），以非晶体雕塑曲面、砖块表现主义（Brick Expressionism）与乌托邦水晶玻璃为特征；而在西班牙巴塞罗那，安东尼·高迪以无与伦比的自然仿生学、碎瓷拼贴（Trencadís）与悬链拱力学，开创了代表作独特的加泰罗尼亚现代主义（Catalan Modernisme）。",
    "historicalContext": "一战前后的动荡思潮促使建筑师打破传统功能主义的冰冷框架，追求极致的情感宣泄、神秘主义与从自然生物中汲取原初生命力的非凡构筑。",
    "keyFeatures": [
      "充满雕塑感与动势的非对称曲面造型（Sculptural Plasticity）",
      "高迪的自然仿生学：双曲抛物面、螺旋柱、悬链线拱（Catenary Arches）",
      "废旧彩色陶瓷与碎玻璃拼贴工艺（Trencadís）",
      "表现主义的水晶玻璃狂想与动态光线折射（Glass Expressionism）"
    ],
    "artists": [
      {
        "id": "erich-mendelsohn",
        "name": "埃里希·门德尔松",
        "englishName": "Erich Mendelsohn",
        "years": "1887 - 1953",
        "avatar": "/images/artists/erich-mendelsohn.jpg",
        "bio": "德国表现主义建筑大师与流体动态流线型建筑先驱。他将爱因斯坦的相对论物理概念融入建筑的流体雕塑中，创造了表现主义建筑最高丰碑爱因斯坦塔。",
        "artworks": [
          {
            "id": "einstein-tower",
            "title": "Einstein Tower (Einsteinturm) (爱因斯坦天文台)",
            "date": "1920 - 1921",
            "location": "德国波茨坦 (Potsdam, Germany)",
            "image": "/images/artworks/einstein-tower.jpg",
            "notes": "为验证爱因斯坦相对论重力红移效应而建的太阳天文望远镜观测塔。如同一座从大地破土而出的流线型火山雕塑，圆润光滑的曲面消解了所有的传统折角，被爱因斯坦赞誉为'有机体（Organic）'。",
            "knowledgePoints": [
              "表现主义有机流线型雕塑建筑巅峰杰作",
              "原设计为整体浇筑混凝土，实际由砖混抹灰精心塑形完成",
              "内部包含高精度的太阳望远镜与地下光学物理实验室"
            ],
            "titleEn": "Einstein Tower (Einsteinturm)",
            "titleZh": "爱因斯坦天文台"
          }
        ],
        "displayName": "Erich Mendelsohn (埃里希·门德尔松)"
      },
      {
        "id": "bruno-taut",
        "name": "布鲁诺·陶特",
        "englishName": "Bruno Taut",
        "years": "1880 - 1938",
        "avatar": "/images/artists/bruno-taut.jpg",
        "bio": "德国表现主义先锋与'水晶链'（Glass Chain）乌托邦领袖。他坚信透明纯净的彩色玻璃能够净化人类心灵，开创了玻璃建筑新篇章。",
        "artworks": [
          {
            "id": "glass-pavilion",
            "title": "Glass Pavilion (Glashaus) (科隆玻璃展馆)",
            "date": "1914",
            "location": "德国科隆德意志制造联盟展 (Cologne, Germany)",
            "image": "/images/artworks/glass-pavilion.jpg",
            "notes": "1914年科隆工业展上的水晶梦幻杰作。由菱形双层彩色玻璃构成的晶体多面体圆顶，下接混凝土圆柱基座与阶梯瀑布水池，底座环刻保罗·谢尔巴特的赞美诗。",
            "knowledgePoints": [
              "表现主义'玻璃乌托邦'（Crystal/Glass Expressionism）宣言",
              "双层多面体彩色玻璃菱形网格圆顶（Prismatic Glass Dome）",
              "万花筒般的内部彩色光影阶梯与机械水幕"
            ],
            "titleEn": "Glass Pavilion (Glashaus)",
            "titleZh": "科隆玻璃展馆"
          }
        ],
        "displayName": "Bruno Taut (布鲁诺·陶特)"
      },
      {
        "id": "antoni-gaudi",
        "name": "安东尼·高迪",
        "englishName": "Antoni Gaudí",
        "years": "1852 - 1926",
        "avatar": "/images/artists/antoni-gaudi.jpg",
        "bio": "西班牙建筑史上的代表作天才，加泰罗尼亚现代主义的最伟大代表。高迪一生奉献给建筑、自然与上帝，他视大自然为最好的老师：'直线属于人类，曲线属于上帝'。开创了悬链线力学与废瓷拼贴（Trencadís）工艺，7项作品被列为联合国世界文化遗产。",
        "artworks": [
          {
            "id": "sagrada-familia",
            "title": "圣家堂 (圣家族大教堂)",
            "date": "1882 - 至今在建",
            "location": "西班牙巴塞罗那 (Barcelona, Spain)",
            "image": "/images/artworks/sagrada-familia.jpg",
            "notes": "人类建筑史上的代表性建筑。拥有18座高耸入云的象征性尖塔，三大宏伟立面：东侧'诞生立面'（Nativity Facade，高迪亲手建造，充满自然万物雕刻）、西侧'受难立面'（Passion Facade，棱角峻峭）、南侧'荣耀立面'（Glory Facade）。内部立柱如同参天巨树与茂密森林，彩色玻璃洒下漫射光线。",
            "knowledgePoints": [
              "世界唯一尚未完工就被列入世界文化遗产的代表作",
              "三大立面：东面诞生立面（生机盎然）、西面受难立面（痛苦刚烈）、南面荣耀立面（永生）",
              "森林状分叉立柱（树状柱）与悬链线双曲抛物面结构",
              "高迪遗体安葬于圣家堂地下圣堂（Crypt）"
            ],
            "titleEn": "圣家堂",
            "titleZh": "圣家族大教堂"
          },
          {
            "id": "casa-mila",
            "title": "采石场 (米拉之家)",
            "date": "1906 - 1912",
            "location": "西班牙巴塞罗那格拉西亚大道 (Passeig de Gràcia, Barcelona)",
            "image": "/images/artworks/casa-mila.jpg",
            "notes": "高迪设计的最后一座私人住宅。全建筑无一处承重墙，完全由钢柱与拱券支撑，外立面为起伏如波浪般的粗琢天然白石（被巴塞罗那市民称为采石场），屋顶矗立着如同中世纪戴盔武士的超现实主义烟囱群。",
            "knowledgePoints": [
              "自由平面（Free Plan）先驱：全框架支撑，内部墙体可随意拆改",
              "波浪形起伏石材外立面与废铁扭曲锻造阳台栏杆",
              "魔幻屋顶露台：由武士头盔造型烟囱与排气道构成的雕塑花园"
            ],
            "titleEn": "采石场",
            "titleZh": "米拉之家"
          },
          {
            "id": "casa-batllo",
            "title": "Casa Batlló (巴特罗之家 (骨之屋)",
            "date": "1904 - 1906",
            "location": "西班牙巴塞罗那格拉西亚大道 (Passeig de Gràcia, Barcelona)",
            "image": "/images/artworks/casa-batllo.jpg",
            "notes": "取材于圣乔治屠龙传说的魔幻童话住宅。屋顶是用彩色陶瓷瓦片铺就的巨龙背脊，阁楼如龙的胸骨，立面阳台如骷髅面具骨骼，墙面则是波光粼粼的莫奈睡莲色碎瓷拼贴（Trencadís）。",
            "knowledgePoints": [
              "讲述圣乔治屠龙救公主的加泰罗尼亚英雄神话",
              "外墙运用 Trencadís 废旧彩色陶瓷与碎玻璃马赛克拼贴",
              "骨骼形态支撑柱与波浪曲面玻璃大窗，无一处生硬直角"
            ],
            "titleEn": "Casa Batlló",
            "titleZh": "巴特罗之家 (骨之屋"
          }
        ],
        "displayName": "Antoni Gaudí (安东尼·高迪)"
      }
    ],
    "displayName": "Expressionist Architecture & Catalan Modernisme (表现主义建筑与高迪现代主义)"
  }
];

export const quizQuestions = [
  {
    "id": "arch_q1",
    "category": "architecture",
    "text": "The word 'echino' (海胆饰 / 垫盘) defines a part of which architectural element?",
    "options": [
      "Column (柱身)",
      "Frieze (檐壁 / 额枋)",
      "Capital (柱头)",
      "Pediment (三角山花)",
      "Cornice (檐口)"
    ],
    "correctAnswer": 2,
    "explanation": "In classical Greek Doric order, the echinus (echino) is the round, cushion-like molding directly below the abacus forming the capital."
  },
  {
    "id": "arch_q2",
    "category": "architecture",
    "text": "Which of the following works was NOT designed by Michelangelo?",
    "options": [
      "Dome of San Pietro",
      "Laurentian Library",
      "Porta Pia",
      "The Palazzo Vecchio",
      "Sagrestia Nuova"
    ],
    "correctAnswer": 3,
    "explanation": "The Palazzo Vecchio in Florence was designed by Arnolfo di Cambio. Michelangelo designed the St. Peter's Dome, Laurentian Library, Porta Pia, and Sagrestia Nuova (New Sacristy)."
  },
  {
    "id": "arch_q3",
    "category": "architecture",
    "text": "Palladio redesigned the Palazzo della Ragione in Vicenza, renaming it a 'basilica', in order to:",
    "options": [
      "The new function of a religious cult building",
      "The overturned ship's hull roof",
      "The imposing size of the building",
      "The addition of the loggia to serlian (塞利奥式三联拱窗双层敞廊)",
      "The tripartition into naves"
    ],
    "correctAnswer": 3,
    "explanation": "Palladio encased the gothic structure with two-storey marble loggias featuring the famous Serlian window motif (Serliana / Palladian motif)."
  },
  {
    "id": "arch_q4",
    "category": "architecture",
    "text": "The Domus Aurea (金宫) in ancient Rome was built as a lavish residence for which Roman Emperor?",
    "options": [
      "Caligula",
      "Trajan",
      "Nero (尼禄)",
      "Vespasian",
      "Hadrian"
    ],
    "correctAnswer": 2,
    "explanation": "The Domus Aurea was a vast landscaped palace built by Emperor Nero in the heart of Rome after the great fire of 64 AD."
  },
  {
    "id": "arch_q5",
    "category": "architecture",
    "text": "The Palazzo dei Diamanti (钻石宫) in Ferrara took its name from:",
    "options": [
      "From the square in which it is located",
      "By the designer who conceived it",
      "From the bossage (bugnato) that characterizes the external walls",
      "From the precious stones kept inside",
      "By its noble clients"
    ],
    "correctAnswer": 2,
    "explanation": "It is named after the 8,500 diamond-point faceted marble blocks (bugnato a punta di diamante) that cover its exterior walls."
  },
  {
    "id": "arch_q6",
    "category": "architecture",
    "text": "To which period and century does the Tempietto of San Pietro in Montorio (by Bramante) date?",
    "options": [
      "XV - Renaissance",
      "XVII - Baroque",
      "XVI - Renaissance (16世纪文艺复兴盛期)",
      "XVI - Baroque",
      "XVIII - Neoclassicism"
    ],
    "correctAnswer": 2,
    "explanation": "Donato Bramante's Tempietto in Rome was commissioned around 1502 (early 16th century, High Renaissance)."
  },
  {
    "id": "arch_q7",
    "category": "architecture",
    "text": "The architectural style of the Basilica di Sant'Ambrogio in Milan is:",
    "options": [
      "Gothic",
      "Renaissance",
      "Eclectic",
      "Romanesque (罗马式 / 伦巴第罗曼风)",
      "Baroque"
    ],
    "correctAnswer": 3,
    "explanation": "Sant'Ambrogio in Milan is one of the most ancient and celebrated masterpieces of Lombard Romanesque architecture."
  },
  {
    "id": "arch_q8",
    "category": "architecture",
    "text": "What is the primary architectural style of the Milan Cathedral (Duomo di Milano)?",
    "options": [
      "Gothic (哥特式 / 辐射状哥特)",
      "Renaissance",
      "Eclectic",
      "Romanesque",
      "Baroque"
    ],
    "correctAnswer": 0,
    "explanation": "Duomo di Milano is the second-largest Catholic cathedral in the world, renowned for its flamboyant Gothic spires and pinnacles."
  },
  {
    "id": "arch_q9",
    "category": "architecture",
    "text": "In what century did Filippo Brunelleschi, designer of the Florence Cathedral Dome, die?",
    "options": [
      "XV (15th century, 1446)",
      "XIV",
      "XIII",
      "XVI",
      "XII"
    ],
    "correctAnswer": 0,
    "explanation": "Filippo Brunelleschi died in 1446 in Florence, which is the 15th century (XV)."
  },
  {
    "id": "arch_q10",
    "category": "architecture",
    "text": "The construction of the Parthenon on the Athenian Acropolis began in which year?",
    "options": [
      "1444 b.c.",
      "447 b.c.",
      "823 b.c.",
      "1700 b.c.",
      "2478 b.c."
    ],
    "correctAnswer": 1,
    "explanation": "Construction of the Parthenon in Athens began in 447 BC under the leadership of Pericles, by architects Ictinus and Callicrates."
  },
  {
    "id": "arch_q11",
    "category": "architecture",
    "text": "Who designed the iconic wavy red-brick facade of Palazzo Carignano and the interlaced dome of the Chapel of the Holy Shroud in Turin?",
    "options": [
      "Francesco Borromini",
      "Gian Lorenzo Bernini",
      "Guarino Guarini",
      "Luigi Vanvitelli"
    ],
    "correctAnswer": 2,
    "explanation": "Guarino Guarini was the mathematical genius of Piedmontese Baroque who designed Palazzo Carignano and the Chapel of the Holy Shroud."
  },
  {
    "id": "arch_q12",
    "category": "architecture",
    "text": "Which Belgian architect created Hôtel Tassel (1893) in Brussels, introducing the famous 'whiplash line' and visible ironwork to domestic interiors?",
    "options": [
      "Victor Horta",
      "Hector Guimard",
      "Joseph Maria Olbrich",
      "Antoni Gaudí"
    ],
    "correctAnswer": 0,
    "explanation": "Victor Horta's Hôtel Tassel in Brussels is universally acknowledged as the first mature Art Nouveau building."
  },
  {
    "id": "arch_q13",
    "category": "architecture",
    "text": "Which building bears the famous motto 'Der Zeit ihre Kunst. Der Kunst ihre Freiheit' (To every age its art, to every art its freedom)?",
    "options": [
      "Secession Building (Vienna)",
      "Einstein Tower",
      "Glass Pavilion (Cologne)",
      "Rotonde de la Villette"
    ],
    "correctAnswer": 0,
    "explanation": "The Vienna Secession Building (1897) by Joseph Maria Olbrich bears this famous motto over its entrance."
  },
  {
    "id": "arch_q14",
    "category": "architecture",
    "text": "Antoni Gaudí used which technique of recycled ceramic and tile mosaics in works like Sagrada Família and Casa Batlló?",
    "options": [
      "Trencadís",
      "Sgraffito",
      "Opus sectile",
      "Intarsia"
    ],
    "correctAnswer": 0,
    "explanation": "Trencadís is the Catalan mosaic technique created from broken tiles, dinnerware, and glass pioneered by Gaudí and Josep Maria Jujol."
  },
  {
    "id": "arch_q15",
    "category": "architecture",
    "text": "The Crystal Palace (1851) in London was designed by which pioneer using modular prefabricated iron and plate glass?",
    "options": [
      "Gustave Eiffel",
      "Joseph Paxton",
      "Leo von Klenze",
      "Claude Nicolas Ledoux"
    ],
    "correctAnswer": 1,
    "explanation": "Sir Joseph Paxton drew on his greenhouse engineering experience to design the prefabricated iron and glass Crystal Palace for the 1851 Great Exhibition."
  },
  {
    "id": "art_q1",
    "category": "art",
    "text": "Which movement celebrated modern technology, industrial machinery, and velocity?",
    "options": [
      "Futurism (未来主义)",
      "Dadaism (达达主义)",
      "Surrealism (超现实主义)",
      "De Stijl (风格派)"
    ],
    "correctAnswer": 0,
    "explanation": "Futurism, founded by Marinetti in 1909, exalted dynamism, technology, and speed."
  },
  {
    "id": "art_q2",
    "category": "art",
    "text": "Who created the famous 'Readymade' titled 'Fountain' by signing a porcelain urinal 'R. Mutt 1917'?",
    "options": [
      "Man Ray",
      "Marcel Duchamp",
      "Salvador Dalí",
      "Piet Mondrian"
    ],
    "correctAnswer": 1,
    "explanation": "Marcel Duchamp submitted Fountain in 1917, sparking the modern conceptual art revolution."
  },
  {
    "id": "art_q3",
    "category": "art",
    "text": "Which painting by René Magritte features a pipe with the text 'Ceci n'est pas une pipe'?",
    "options": [
      "The Son of Man",
      "The Lovers",
      "The Treachery of Images",
      "Golconda"
    ],
    "correctAnswer": 2,
    "explanation": "The Treachery of Images (1929) highlights the semiotic separation between a physical object and its visual representation."
  },
  {
    "id": "art_q4",
    "category": "art",
    "text": "Which artist slashed canvases with a razor blade to explore 3D space in Spatialism?",
    "options": [
      "Jackson Pollock",
      "Lucio Fontana",
      "Piero Manzoni",
      "Umberto Boccioni"
    ],
    "correctAnswer": 1,
    "explanation": "Lucio Fontana's 'Concetto Spaziale: Attese' series featured deliberate cuts into monochrome canvases to transcend 2D surface limitations."
  },
  {
    "id": "art_q5",
    "category": "art",
    "text": "What technique did Jackson Pollock pioneer by dripping enamel paint on canvases laid flat on the floor?",
    "options": [
      "Ben-Day Dots",
      "Silkscreen Printing",
      "Action Painting / Drip Technique",
      "Photomontage"
    ],
    "correctAnswer": 2,
    "explanation": "Pollock used drip technique and action painting to express rhythmic, physical unconscious energy across large canvases."
  }
];

export const getQuizQuestions = (filterCategory) => {
  let pool = [...quizQuestions];
  if (filterCategory && filterCategory !== 'all') {
    pool = pool.filter(q => q.category === filterCategory);
  }
  return pool.sort(() => Math.random() - 0.5);
};
