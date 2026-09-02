// 20世纪西方现代艺术史与欧洲经典建筑史权威知识库
// 涵盖 21 大流派阶段、50+ 位大师与 135+ 件代表作品/地标
// 遵循学术客观原则：英文为主，中文释义并列

export const artData = [
  {
    "id": "romanesque-architecture",
    "name": "罗马式建筑",
    "englishName": "Romanesque Architecture",
    "years": "900 - 1150",
    "category": "architecture",
    "bgClass": "romanesque-theme",
    "description": "罗马式建筑（又称罗曼式建筑）盛行于10至12世纪西欧，以半圆拱（Semicircular Arch）、厚重实体石墙、筒形拱顶（Barrel Vault）、十字拱顶（Groin Vault）、盲拱廊（Blind Arcade）、贴墙浅壁柱（Lesene）与独立洗礼堂（Baptistery）为核心特征，构筑出中世纪坚固沉稳的宗教与世俗空间。",
    "historicalContext": "在中世纪盛期修道院改革、朝圣热潮与封建城邦兴起背景下发展。建筑多兼具宗教礼拜与防御庇护功能，开创了欧洲中世纪大型拱顶结构体系。",
    "keyFeatures": [
      "半圆拱（Semicircular Arch）与厚重实体石砌墙体",
      "筒形拱顶（Barrel Vault）与十字拱顶（Groin Vault）",
      "节奏跨度中殿与独立集中式洗礼堂（Baptistery）",
      "贴墙浅壁柱（Lesene）与装饰性盲拱廊（Blind Arcade）",
      "单券窗（Monofora）、双联拱窗（Bifora）与三联拱窗（Trifora）"
    ],
    "artists": [
      {
        "id": "lombard-romanesque-masters",
        "name": "伦巴第罗曼建筑行会",
        "englishName": "Lombard Romanesque Masters",
        "years": "10th - 12th Century",
        "avatar": "/images/artists/lombard-masters.jpg",
        "bio": "活跃于北意大利伦巴第地区的石匠行会，开创了红砖罗曼建筑、节奏中殿跨度、贴墙浅壁柱（Lesene）与独立洗礼堂范式。",
        "artworks": [
          {
            "id": "sant-ambrogio-milan",
            "title": "Basilica of Sant'Ambrogio (米兰圣安布罗焦圣殿)",
            "titleEn": "Basilica of Sant'Ambrogio",
            "titleZh": "米兰圣安布罗焦圣殿",
            "date": "379 - 1099",
            "location": "米兰 (Milan, Italy)",
            "image": "/images/artworks/sant-ambrogio.jpg",
            "notes": "伦巴第罗曼式建筑最高成就。拥有开阔的四方列柱前庭（Atrium）、双钟楼、两层拱廊与八角形穹顶，开创了节奏中殿跨度与砖石肋穹结构。",
            "knowledgePoints": [
              "伦巴第罗曼式建筑代表作，中殿具节奏跨度（Rhythmic Span）",
              "包含四方列柱中庭（Atrium）与高低不对称双钟楼",
              "广泛运用贴墙浅壁柱（Lesene）与早期砖石交叉拱顶"
            ],
            "museum": "Basilica di Sant'Ambrogio",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://www.basilicasantambrogio.it"
          },
          {
            "id": "baptistery-parma",
            "title": "Baptistery of Parma (帕尔马洗礼堂)",
            "titleEn": "Baptistery of Parma",
            "titleZh": "帕尔马洗礼堂",
            "date": "1196 - 1270",
            "location": "帕尔马 (Parma, Italy)",
            "image": "/images/artworks/baptistery-parma.jpg",
            "notes": "由贝内代托·安特拉米（Benedetto Antelami）设计的八角形粉红大理石独立洗礼堂。外立面环绕四层平过梁式开敞凉廊（Architraved Loggias），标志着罗曼式向哥特式的过渡。",
            "knowledgePoints": [
              "八边形独立洗礼堂平面，连接罗曼式与早期哥特式过渡",
              "外墙由四层平过梁开敞凉廊（Architraved Loggias）环绕",
              "安特拉米雕刻的精美中世纪浮雕与十六边形伞状穹顶"
            ],
            "museum": "Battistero di Parma (Piazza Duomo)",
            "museumCity": "Parma, Italy",
            "museumUrl": "https://www.piazzaduomoparma.com/battistero/"
          }
        ]
      },
      {
        "id": "pisan-romanesque-masters",
        "name": "比萨罗曼建筑学派",
        "englishName": "Pisan Romanesque Masters",
        "years": "11th - 14th Century",
        "avatar": "/images/artists/pisan-masters.jpg",
        "bio": "以比萨奇迹广场为代表的托斯卡纳罗曼学派，以纯白与灰色大理石斑马条纹、多层开敞式拱廊与精美雕刻闻名。",
        "artworks": [
          {
            "id": "piazza-dei-miracoli-pisa",
            "title": "Piazza dei Miracoli & Leaning Tower (比萨奇迹广场与比萨斜塔)",
            "titleEn": "Piazza dei Miracoli & Leaning Tower",
            "titleZh": "比萨奇迹广场与比萨斜塔",
            "date": "1063 - 1350",
            "location": "比萨 (Pisa, Italy)",
            "image": "/images/artworks/pisa-miracoli.jpg",
            "notes": "由大教堂、圆形洗礼堂、圆柱形钟楼（比萨斜塔）与洗石纪念公墓构成的世界遗产建筑群。大教堂立面拥有四层开敞拱廊，纯白大理石展现极致韵律。",
            "knowledgePoints": [
              "托斯卡纳罗曼式建筑巅峰，白色大理石多层开敞拱廊立面",
              "独立式圆形洗礼堂、拉丁十字大教堂与圆柱钟楼（斜塔）组群",
              "联合国教科文组织世界文化遗产"
            ],
            "museum": "Opera della Primaziale Pisana (Piazza dei Miracoli)",
            "museumCity": "Pisa, Italy",
            "museumUrl": "https://www.opapisa.it/en/"
          }
        ]
      },
      {
        "id": "french-romanesque-masters",
        "name": "法兰西罗曼建筑行会",
        "englishName": "French Romanesque Masters",
        "years": "10th - 12th Century",
        "avatar": "/images/artists/french-romanesque-masters.jpg",
        "bio": "法国北部与香槟地区的罗曼式大教堂建造行会，发展了宏伟的长巴西利卡中殿与双塔立面，为哥特式诞生奠定基础。",
        "artworks": [
          {
            "id": "basilica-saint-remi",
            "title": "Basilica of Saint-Remi, Reims (兰斯圣雷米圣殿)",
            "titleEn": "Basilica of Saint-Remi",
            "titleZh": "兰斯圣雷米圣殿",
            "date": "c. 1000",
            "location": "兰斯 (Reims, France)",
            "image": "/images/artworks/saint-remi-reims.jpg",
            "notes": "法国加洛林与早期罗曼式长巴西利卡建筑，保留了纯正的罗曼式宽阔中殿与厚重石柱，是欧洲最古老宏伟的朝圣圣殿之一。",
            "knowledgePoints": [
              "早期罗曼式向哥特式过渡的宏伟朝圣巴西利卡",
              "纯正的罗马式长跨度中殿与厚重石柱结构",
              "联合国教科文组织世界文化遗产"
            ],
            "museum": "Basilique Saint-Remi de Reims",
            "museumCity": "Reims, France",
            "museumUrl": "https://www.reims.fr/culture-patrimoine/patrimoine-et-histoire/la-basilique-saint-remi"
          }
        ]
      },
      {
        "id": "arnolfo-di-cambio",
        "name": "阿诺尔福·迪·坎比奥",
        "englishName": "Arnolfo di Cambio",
        "years": "1240 - 1302",
        "avatar": "/images/artists/arnolfo-di-cambio.jpg",
        "bio": "意大利托斯卡纳著名建筑师与雕塑家，设计了佛罗伦萨旧宫、圣十字大殿并主持了佛罗伦萨圣母百花大教堂的初始规划。",
        "artworks": [
          {
            "id": "palazzo-vecchio",
            "title": "Palazzo Vecchio / Old Palace (佛罗伦萨旧宫 / 领主宫)",
            "titleEn": "Palazzo Vecchio",
            "titleZh": "佛罗伦萨旧宫 / 领主宫",
            "date": "1299",
            "location": "佛罗伦萨领主广场 (Florence, Italy)",
            "image": "/images/artworks/palazzo-vecchio.jpg",
            "notes": "佛罗伦萨市政厅堡垒式民用建筑，粗琢石墙面（Rustication）、齿状凸垛与高耸偏置的94米阿诺尔福钟楼，体现了中世纪晚期自治城邦的权力与防御象征。",
            "knowledgePoints": [
              "中世纪晚期托斯卡纳世俗市政宫殿（Palazzo Civile）典范",
              "粗琢石（Rustication）外立面与94米偏心防御钟楼（Torre di Arnolfo）",
              "领主广场（Piazza della Signoria）核心政治象征"
            ],
            "museum": "Museo di Palazzo Vecchio",
            "museumCity": "Florence, Italy",
            "museumUrl": "https://cultura.comune.fi.it/pagina/musei-civici-fiorentini/museo-di-palazzo-vecchio"
          }
        ]
      }
    ],
    "startYear": 900,
    "chronologicalOrder": 1,
    "era": "中世纪与拜占庭 (900-1150)",
    "eraEn": "Medieval & Romanesque"
  },
  {
    "id": "gothic-architecture",
    "name": "哥特式建筑",
    "englishName": "Gothic Architecture",
    "years": "1150 - 1400",
    "category": "architecture",
    "bgClass": "gothic-theme",
    "description": "哥特式建筑发源于12世纪中叶的法兰西岛，是欧洲中世纪建筑力学与空间美学的巅峰革命。通过交叉肋拱（Ribbed Vault）、尖拱（Pointed Arch）与外部飞扶壁（Flying Buttress / Arc-boutant），打破了厚实墙体的承重限制，使教堂得以向天空极度拔高，并开辟出巨大面积的彩色玻璃花窗与玫瑰花窗（Rose Window），营造神圣通透的'天国之光'。",
    "historicalContext": "伴随中世纪城市自治繁荣、经院哲学与主教座堂建造热潮兴起，建筑师利用几何受力分析摆脱传统重墙，开创了以骨架与光线为核心的哥特大教堂时代。",
    "keyFeatures": [
      "交叉肋拱顶（Ribbed Vaulting）与垂直力线",
      "飞扶壁（Flying Buttress / Arc-boutant）跨空传导侧推力",
      "尖拱（Pointed Arch）与高耸束柱（Fasciculate Pillars / Polystyles）",
      "大面积彩色玻璃花窗（Stained Glass）与玫瑰花窗（Rose Window）",
      "高耸尖塔（Spire）与兼具受力配重功能的小尖塔（Pinnacle）"
    ],
    "artists": [
      {
        "id": "french-gothic-masters",
        "name": "法兰西哥特大教堂工匠行会",
        "englishName": "French High Gothic Masters",
        "years": "12th - 13th Century",
        "avatar": "/images/artists/french-gothic-masters.jpg",
        "bio": "法兰西岛与香槟地区的哥特建筑大师行会，建造了亚眠、巴黎圣母院与沙特尔大教堂等古典盛期哥特式范本。",
        "artworks": [
          {
            "id": "amiens-cathedral",
            "title": "Amiens Cathedral (亚眠大教堂)",
            "titleEn": "Amiens Cathedral",
            "titleZh": "亚眠大教堂",
            "date": "1220 - 1270",
            "location": "亚眠 (Amiens, France)",
            "image": "/images/artworks/amiens-cathedral.jpg",
            "notes": "法国盛期哥特式（High Gothic）规模最大、中殿净高最高（42.3米）的大教堂。拥有极为成熟的双层飞扶壁系统与繁复华丽的立面雕刻群。",
            "knowledgePoints": [
              "法国盛期哥特式大教堂典范，中殿拱顶高达42.3米",
              "极为成熟的双层飞扶壁与三层立面透光体系",
              "联合国教科文组织世界文化遗产"
            ],
            "museum": "Cathédrale Notre-Dame d'Amiens",
            "museumCity": "Amiens, France",
            "museumUrl": "https://www.cathedrale-amiens.fr"
          },
          {
            "id": "notre-dame-paris",
            "title": "Notre-Dame de Paris (巴黎圣母院)",
            "titleEn": "Notre-Dame de Paris",
            "titleZh": "巴黎圣母院",
            "date": "1163 - 1250",
            "location": "巴黎西堤岛 (Paris, France)",
            "image": "/images/artworks/notre-dame-paris.jpg",
            "notes": "早期哥特式向盛期演进的永恒丰碑。拥有西立面三大宏伟雕刻门（圣母之门、最后审判之门、圣安娜之门）、壮丽的辐射式玫瑰花窗与标志性悬空飞扶壁。",
            "knowledgePoints": [
              "早期哥特式向盛期哥特式演进的经典地标",
              "西立面三门雕塑群（圣母之门、最后审判之门、圣安娜之门）",
              "辐射式玫瑰花窗与跨度巨大的飞扶壁体系"
            ],
            "museum": "Cathédrale Notre-Dame de Paris",
            "museumCity": "Paris, France",
            "museumUrl": "https://www.notredamedeparis.fr"
          }
        ]
      },
      {
        "id": "german-gothic-masters",
        "name": "德意志高耸哥特工匠行会",
        "englishName": "German Gothic Masters",
        "years": "13th - 19th Century",
        "avatar": "/images/artists/german-gothic-masters.jpg",
        "bio": "莱茵河谷的德意志哥特石匠大师，将哥特式垂直向上、剔透如石雕蕾丝的尖塔技术推向世界之巅。",
        "artworks": [
          {
            "id": "cologne-cathedral",
            "title": "Cologne Cathedral (科隆大教堂)",
            "titleEn": "Cologne Cathedral",
            "titleZh": "科隆大教堂",
            "date": "1248 - 1880",
            "location": "科隆 (Cologne, Germany)",
            "image": "/images/artworks/cologne-cathedral.jpg",
            "notes": "双塔高达157米的哥特式旷世杰作。历经六百年修建，拥有欧洲最宏伟的哥特式唱诗班席、巨大的飞扶壁与华丽的石雕小尖塔群（Pinnacles）。",
            "knowledgePoints": [
              "世界第三高教堂建筑，双塔高达157米",
              "极致的垂直性与如织锦般的哥特石雕小尖塔（Pinnacles）",
              "联合国教科文组织世界文化遗产"
            ],
            "museum": "Kölner Dom (Hohe Domkirche Sankt Petrus)",
            "museumCity": "Cologne, Germany",
            "museumUrl": "https://www.koelner-dom.de"
          }
        ]
      },
      {
        "id": "italian-gothic-masters",
        "name": "意大利哥特建筑学派",
        "englishName": "Italian Gothic Masters",
        "years": "13th - 15th Century",
        "avatar": "/images/artists/italian-gothic-masters.jpg",
        "bio": "融合地中海古典光影、大理石色彩斑马纹镶嵌与哥特式骨架的意大利哥特学派。",
        "artworks": [
          {
            "id": "duomo-milano",
            "title": "Milan Cathedral / Duomo di Milano (米兰大教堂)",
            "titleEn": "Milan Cathedral",
            "titleZh": "米兰大教堂",
            "date": "1386 - 1965",
            "location": "米兰主教堂广场 (Milan, Italy)",
            "image": "/images/artworks/duomo-milano.jpg",
            "notes": "世界规模最大的白色坎多利亚大理石哥特教堂。拥有135座尖塔与三千余座雕像，顶部镀金圣母像（Madonnina）傲视全城，是伦巴第国际哥特式的绝唱。",
            "knowledgePoints": [
              "世界最大的大理石哥特式主教座堂",
              "135座石雕尖塔与顶部镀金圣母像（Madonnina）",
              "融合北欧哥特垂直骨架与意大利古典宽阔空间感"
            ],
            "museum": "Duomo di Milano (Veneranda Fabbrica del Duomo)",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://www.duomomilano.it/en/"
          },
          {
            "id": "siena-cathedral",
            "title": "Siena Cathedral (锡耶纳大教堂)",
            "titleEn": "Siena Cathedral",
            "titleZh": "锡耶纳大教堂",
            "date": "1215 - 1263",
            "location": "锡耶纳 (Siena, Italy)",
            "image": "/images/artworks/siena-cathedral.jpg",
            "notes": "托斯卡纳哥特式建筑典范。黑白相间的大理石斑马纹横条纹、乔瓦尼·皮萨诺雕刻的华丽西立面与精绝天下的大理石镶嵌地坪（Pavimento）。",
            "knowledgePoints": [
              "托斯卡纳哥特式大理石色彩斑马纹结构",
              "乔瓦尼·皮萨诺设计的华美西立面雕刻群",
              "举世无双的大理石镶嵌画地坪（Pavimento del Duomo）"
            ],
            "museum": "Complesso Monumentale del Duomo di Siena",
            "museumCity": "Siena, Italy",
            "museumUrl": "https://operaduomo.siena.it/en/"
          },
          {
            "id": "doges-palace-venice",
            "title": "Doge's Palace / Palazzo Ducale (威尼斯总督宫)",
            "titleEn": "Doge's Palace",
            "titleZh": "威尼斯总督宫",
            "date": "1340 - 1424",
            "location": "威尼斯圣马可广场 (Venice, Italy)",
            "image": "/images/artworks/doges-palace.jpg",
            "notes": "威尼斯哥特式（Venetian Gothic）世俗建筑巅峰。底层开敞式尖拱凉廊、二层精美四叶饰花窗与粉白几何大理石墙面，轻盈飘逸如水上漂浮的宫殿。",
            "knowledgePoints": [
              "威尼斯哥特式世俗行政与宫殿建筑最高杰作",
              "底层与二层连续开敞尖券与四叶饰拱廊（Loggias）",
              "毗邻叹息桥（Bridge of Sighs）与圣马可广场"
            ],
            "museum": "Palazzo Ducale (Fondazione Musei Civici di Venezia)",
            "museumCity": "Venice, Italy",
            "museumUrl": "https://palazzoducale.visitmuve.it/en/"
          }
        ]
      }
    ],
    "startYear": 1150,
    "chronologicalOrder": 2,
    "era": "中世纪哥特 (1150-1400)",
    "eraEn": "High Gothic"
  },
  {
    "id": "renaissance-architecture",
    "name": "文艺复兴建筑",
    "englishName": "Renaissance Architecture",
    "years": "1400 - 1600",
    "category": "architecture",
    "bgClass": "renaissance-theme",
    "description": "15至16世纪发源于佛罗伦萨的建筑革命，以人文主义精神与古希腊罗马古典规范（柱式、比例、对称与纯粹几何）的复兴为标志。通过线性透视法的空间建构、《论建筑》与《建筑四书》的理论化、以及'理想城市'（Ideal City）规划，彻底终结了中世纪哥特风格，开启了西方近代建筑学的新纪元。",
    "historicalContext": "伴随美第奇家族等城市贵族的赞助、古典文献的再发现以及科学与透视学的发展，建筑师从工匠上升为博学的人文主义学者与工程师。",
    "keyFeatures": [
      "线性透视法（Linear Perspective）在空间中的严谨应用",
      "古典柱式系统（五大柱式）与完美几何比例（圆、正方形）",
      "理想城市（Ideal City）规划与集中式平面（Centralized Plan）",
      "塞利奥拱 / 帕拉迪奥母题（Serliana / Palladian Motif）",
      "民用宫殿（Palazzo Civile）的三段式立面与糙石外墙（Rustication）"
    ],
    "artists": [
      {
        "id": "filippo-brunelleschi",
        "name": "菲利波·布鲁内莱斯基",
        "englishName": "Filippo Brunelleschi",
        "years": "1377 - 1466",
        "avatar": "/images/artists/filippo-brunelleschi.jpg",
        "bio": "意大利文艺复兴建筑奠基人，第一位现代工程师、规划师与专利获得者（1421）。发明了线性透视法，成功筑造了佛罗伦萨圣母百花大教堂的无脚手架双层大穹顶。",
        "artworks": [
          {
            "id": "florence-cathedral-dome",
            "title": "Dome of Florence Cathedral (佛罗伦萨圣母百花大教堂穹顶)",
            "titleEn": "Dome of Florence Cathedral",
            "titleZh": "佛罗伦萨圣母百花大教堂穹顶",
            "date": "1420 - 1436",
            "location": "佛罗伦萨 (Florence, Italy)",
            "image": "/images/artworks/florence-dome.jpg",
            "notes": "文艺复兴建筑第一座丰碑。布鲁内莱斯基发明鱼骨形砌砖法（Spina di Pesce）与双层穹顶结构，在无地面支撑脚手架的情况下跨越了45米八角形鼓座。",
            "knowledgePoints": [
              "文艺复兴建筑开山之作，跨度45米无脚手架双层穹顶",
              "自承重鱼骨砌砖法（Spina di pesce）与八角形鼓座采光亭",
              "西方工程史与结构力学史里程碑"
            ],
            "museum": "Opera di Santa Maria del Fiore",
            "museumCity": "Florence, Italy",
            "museumUrl": "https://duomo.firenze.it/en"
          },
          {
            "id": "pazzi-chapel",
            "title": "Pazzi Chapel (帕齐礼拜堂)",
            "titleEn": "Pazzi Chapel",
            "titleZh": "帕齐礼拜堂",
            "date": "1440",
            "location": "佛罗伦萨圣十字大殿 (Florence, Italy)",
            "image": "/images/artworks/pazzi-chapel.jpg",
            "notes": "位于佛罗伦萨圣十字大殿回廊内，以灰绿色砂岩（Pietra Serena）线条勾勒白墙，呈现出极致纯粹的几何对称与和谐比例。",
            "knowledgePoints": [
              "文艺复兴早期完美比例与几何纯粹性的教科书典范",
              "灰绿色石材（Pietra Serena）勾勒严谨的几何与伞形穹顶"
            ],
            "museum": "Complesso Monumentale di Santa Croce (Cappella Pazzi)",
            "museumCity": "Florence, Italy",
            "museumUrl": "https://www.santacroceopera.it"
          },
          {
            "id": "santo-spirito-florence",
            "title": "Basilica of Santo Spirito (佛罗伦萨圣灵大教堂)",
            "titleEn": "Basilica of Santo Spirito",
            "titleZh": "佛罗伦萨圣灵大教堂",
            "date": "1444",
            "location": "佛罗伦萨 (Florence, Italy)",
            "image": "/images/artworks/santo-spirito.jpg",
            "notes": "布鲁内莱斯基生前最后一座巴西利卡教堂，拉丁十字平面，内部圆柱列廊与侧礼拜堂展现出无与伦比的透视纵深感与数学韵律。",
            "knowledgePoints": [
              "古典科林斯列柱构成的完美透视巴西利卡",
              "模数化设计：各开间尺寸呈严谨的数学比例递进"
            ],
            "museum": "Basilica Santo Spirito",
            "museumCity": "Florence, Italy",
            "museumUrl": "https://www.basilicasantospirito.it"
          }
        ]
      },
      {
        "id": "lorenzo-ghiberti",
        "name": "洛伦佐·吉贝尔蒂",
        "englishName": "Lorenzo Ghiberti",
        "years": "1378 - 1455",
        "avatar": "/images/artists/lorenzo-ghiberti.jpg",
        "bio": "佛罗伦萨金匠、雕塑家与建筑师，耗时27年铸造了被米开朗基罗盛赞为'天堂之门'的圣若望洗礼堂东门浮雕。",
        "artworks": [
          {
            "id": "doors-of-paradise",
            "title": "Doors of Paradise (天堂之门)",
            "titleEn": "Doors of Paradise",
            "titleZh": "天堂之门",
            "date": "1425 - 1452",
            "location": "佛罗伦萨圣若望洗礼堂 (Florence, Italy)",
            "image": "/images/artworks/doors-paradise.jpg",
            "notes": "佛罗伦萨圣若望洗礼堂东门十面镀金青铜浮雕，融合高低浮雕与线性透视法，将多幕圣经叙事生动呈现于单一空间深度中。",
            "knowledgePoints": [
              "文艺复兴雕塑与建筑立面浮雕巅峰杰作",
              "运用线性透视法与薄浮雕（Schiacciato）构建深邃空间",
              "被米开朗基罗赞誉为'适合作为天堂大门'"
            ],
            "museum": "Museo dell'Opera del Duomo (Firenze)",
            "museumCity": "Florence, Italy",
            "museumUrl": "https://duomo.firenze.it/en/discover/opera-duomo-museum"
          }
        ]
      },
      {
        "id": "donato-bramante",
        "name": "多纳托·伯拉孟特",
        "englishName": "Donato Bramante",
        "years": "1444 - 1514",
        "avatar": "/images/artists/donato-bramante.jpg",
        "bio": "盛期文艺复兴建筑开创者，将文艺复兴风格从米兰推向罗马，为教皇尤利乌斯二世设计了圣彼得大教堂的初始希腊十字集中式方案。",
        "artworks": [
          {
            "id": "tempietto-san-pietro",
            "title": "Tempietto di San Pietro in Montorio (蒙托里奥圣彼得坦比哀多)",
            "titleEn": "Tempietto di San Pietro in Montorio",
            "titleZh": "蒙托里奥圣彼得坦比哀多",
            "date": "1502 - 1510",
            "location": "罗马 (Rome, Italy)",
            "image": "/images/artworks/tempietto-bramante.jpg",
            "notes": "罗马盛期文艺复兴建筑宣言。建于圣彼得殉道处，圆形多立克柱廊环绕穹顶小神庙，实现了古罗马神庙与基督教集中式平面的完美合一。",
            "knowledgePoints": [
              "盛期文艺复兴建筑完美范式，多立克回廊式集中圆形小庙",
              "对古典比例、凹凸光影与穹顶纯粹几何的极致演绎"
            ],
            "museum": "Real Academia de España en Roma (Tempietto del Bramante)",
            "museumCity": "Rome, Italy",
            "museumUrl": "https://www.accademiaspagna.org/il-tempietto/"
          },
          {
            "id": "santa-maria-delle-grazie-milan",
            "title": "Santa Maria delle Grazie Tribune & Dome (米兰圣母感恩教堂东部穹顶后殿)",
            "titleEn": "Santa Maria delle Grazie Tribune",
            "titleZh": "米兰圣母感恩教堂东部穹顶后殿",
            "date": "1492 - 1497",
            "location": "米兰 (Milan, Italy)",
            "image": "/images/artworks/grazie-tribune.jpg",
            "notes": "伯拉孟特受斯福尔扎家族委托扩建的陵寝部分，宏伟的八角形交叉部穹顶与半圆形后殿展现出北意大利文艺复兴的恢弘尺度。",
            "knowledgePoints": [
              "伯拉孟特在米兰时期的最高建筑成就",
              "宏大的十六边形采光鼓座与八角形内部穹顶"
            ],
            "museum": "Complesso Monumentale di Santa Maria delle Grazie",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://cenacolovinciano.org"
          },
          {
            "id": "belvedere-courtyard",
            "title": "Courtyard of the Belvedere (梵蒂冈美景宫庭院)",
            "titleEn": "Courtyard of the Belvedere",
            "titleZh": "梵蒂冈美景宫庭院",
            "date": "1505",
            "location": "梵蒂冈 (Vatican City)",
            "image": "/images/artworks/belvedere-courtyard.jpg",
            "notes": "连接梵蒂冈宫与美景宫别墅的宏大三级台地园林与露天剧场空间，开创了文艺复兴大型轴线景观与台地建筑先河。",
            "knowledgePoints": [
              "西方景观建筑史里程碑：多层台地轴线透视空间",
              "融合了古罗马别墅与露天剧场（Cavea）的宏伟尺度"
            ],
            "museum": "Vatican Museums (Cortile del Belvedere)",
            "museumCity": "Vatican City",
            "museumUrl": "https://www.museivaticani.va"
          }
        ]
      },
      {
        "id": "leon-battista-alberti",
        "name": "莱昂·巴蒂斯塔·阿尔贝蒂",
        "englishName": "Leon Battista Alberti",
        "years": "1404 - 1472",
        "avatar": "/images/artists/leon-battista-alberti.jpg",
        "bio": "文艺复兴时期博学家、人文学者与建筑理论家，著有里程碑式理论巨著《论建筑》（De re aedificatoria），将罗马凯旋门母题引入教堂立面设计。",
        "artworks": [
          {
            "id": "sant-andrea-mantua",
            "title": "Basilica of Sant'Andrea, Mantua (曼图亚圣安德烈亚大教堂)",
            "titleEn": "Basilica of Sant'Andrea",
            "titleZh": "曼图亚圣安德烈亚大教堂",
            "date": "1472",
            "location": "曼图亚 (Mantua, Italy)",
            "image": "/images/artworks/sant-andrea-mantua.jpg",
            "notes": "阿尔贝蒂建筑理论的集大成者。立面融合罗马凯旋门与古典神殿山墙，内部以宏伟的格子天花巨大筒形拱顶（Barrel Vault）替代传统侧廊柱列。",
            "knowledgePoints": [
              "立面开创性融合古罗马凯旋门（Triumphal Arch）与神庙门头",
              "单中殿巨大藻井筒形拱顶（Barrel Vault），深刻影响后世巴洛克教堂布局"
            ],
            "museum": "Basilica Concattedrale di Sant'Andrea",
            "museumCity": "Mantua, Italy",
            "museumUrl": "https://www.diocesidimantova.it"
          },
          {
            "id": "tempio-malatestiano",
            "title": "Tempio Malatestiano, Rimini (里米尼马拉泰斯塔圣殿)",
            "titleEn": "Tempio Malatestiano",
            "titleZh": "里米尼马拉泰斯塔圣殿",
            "date": "1468",
            "location": "里米尼 (Rimini, Italy)",
            "image": "/images/artworks/tempio-malatestiano.jpg",
            "notes": "阿尔贝蒂受马拉泰斯塔委托将哥特旧堂改造为文艺复兴人文主义陵庙，外立面直接借鉴里米尼古罗马奥古斯都凯旋门。",
            "knowledgePoints": [
              "用古典大理石外壳包裹中世纪哥特建筑的典范",
              "侧面深凹大拱券用于安放人文主义学者石棺"
            ],
            "museum": "Tempio Malatestiano (Cattedrale di Santa Colomba)",
            "museumCity": "Rimini, Italy",
            "museumUrl": "https://www.diocesi.rimini.it"
          }
        ]
      },
      {
        "id": "michelangelo-buonarroti-arch",
        "name": "米开朗基罗·博那罗蒂",
        "englishName": "Michelangelo Buonarroti",
        "years": "1475 - 1564",
        "avatar": "/images/artists/michelangelo.jpg",
        "bio": "文艺复兴与风格主义大师。71岁接掌圣彼得大教堂工程并设计了宏伟的双层大穹顶；设计了劳伦齐阿纳图书馆的流动大台阶与罗马卡比托利欧广场。",
        "artworks": [
          {
            "id": "laurentian-library",
            "title": "Laurentian Library & Staircase (劳伦齐阿纳图书馆与大台阶)",
            "titleEn": "Laurentian Library & Staircase",
            "titleZh": "劳伦齐阿纳图书馆与大台阶",
            "date": "1524 - 1559",
            "location": "佛罗伦萨圣洛伦佐大殿 (Florence, Italy)",
            "image": "/images/artworks/laurentian-library.jpg",
            "notes": "风格主义建筑开山之作。前厅采用内嵌式壁柱与故意反常规的构件比例，三股如熔岩流淌般曲面大台阶展现出强烈的动态张力。",
            "knowledgePoints": [
              "风格主义（Mannerism）建筑里程碑，打破古典和谐定式",
              "前厅反常规的内嵌墙柱、虚假托架与雕塑般流动三轨大台阶"
            ],
            "museum": "Biblioteca Medicea Laurenziana",
            "museumCity": "Florence, Italy",
            "museumUrl": "https://www.bmlonline.it"
          },
          {
            "id": "porta-pia",
            "title": "Porta Pia, Rome (罗马皮亚门)",
            "titleEn": "Porta Pia",
            "titleZh": "罗马皮亚门",
            "date": "1561 - 1565",
            "location": "罗马奥勒良城墙 (Rome, Italy)",
            "image": "/images/artworks/porta-pia.jpg",
            "notes": "米开朗基罗生前最后的建筑杰作。城门内侧立面充满大胆自由的怪诞装饰、交错的山墙与反常的比例，展现晚期风格主义的不羁探索。",
            "knowledgePoints": [
              "米开朗基罗晚期建筑实验作品",
              "复合山墙与不规则古典构件的非传统重构"
            ],
            "museum": "Porta Pia (Museo Storico dei Bersaglieri)",
            "museumCity": "Rome, Italy",
            "museumUrl": "https://www.sovraintendenzaroma.it/i_luoghi/roma_medioevale_e_moderna/mura/porta_pia"
          },
          {
            "id": "piazza-del-campidoglio",
            "title": "Piazza del Campidoglio (罗马卡比托利欧广场)",
            "titleEn": "Piazza del Campidoglio",
            "titleZh": "罗马卡比托利欧广场",
            "date": "1536 - 1546",
            "location": "罗马卡比托利欧山 (Rome, Italy)",
            "image": "/images/artworks/campidoglio.jpg",
            "notes": "梯形透视广场与椭圆形十二角星地面铺装，中央安放马可·奥勒留骑马青铜像，两侧为新宫与保守宫，开创了现代城市广场景观规划新纪元。",
            "knowledgePoints": [
              "梯形广场抵消透视变形，开创城市轴线公共空间设计",
              "椭圆形地面十二角星几何铺装与巨柱式（Giant Order）立面"
            ],
            "museum": "Musei Capitolini (Piazza del Campidoglio)",
            "museumCity": "Rome, Italy",
            "museumUrl": "https://www.museicapitolini.org"
          },
          {
            "id": "st-peters-basilica-dome",
            "title": "St. Peter's Basilica Dome & Plan (圣彼得大教堂穹顶与平面重构)",
            "titleEn": "St. Peter's Basilica Dome",
            "titleZh": "圣彼得大教堂穹顶与平面重构",
            "date": "1547 - 1564",
            "location": "梵蒂冈 (Vatican City)",
            "image": "/images/artworks/st-peter-dome.jpg",
            "notes": "米开朗基罗简化了复杂设计，确立了雄浑集中的希腊十字核心，并设计了高达136米的双层肋拱大穹顶（后由波尔塔与马代尔诺续建）。",
            "knowledgePoints": [
              "世界最高天主教大教堂穹顶（内部净高136.5米）",
              "双层石构肋拱体系与外部成对科林斯巨柱鼓座",
              "后由卡洛·马代尔诺（Carlo Maderno）向西延伸为拉丁十字中殿与前立面"
            ],
            "museum": "Basilica Papale di San Pietro in Vaticano",
            "museumCity": "Vatican City",
            "museumUrl": "https://www.basilicasanpietro.va"
          }
        ]
      },
      {
        "id": "renaissance-palazzo-masters",
        "name": "文艺复兴民用宫殿大师",
        "englishName": "Renaissance Palazzo Masters",
        "years": "15th - 16th Century",
        "avatar": "/images/artists/renaissance-palazzo-masters.jpg",
        "bio": "塑造了佛罗伦萨与罗马文艺复兴世俗贵族宫殿（Palazzo Civile）标准三段式与糙石立面体系的代表建筑师群。",
        "artworks": [
          {
            "id": "palazzo-medici-riccardi",
            "title": "Palazzo Medici Riccardi (美第奇-里卡迪宫)",
            "titleEn": "Palazzo Medici Riccardi",
            "titleZh": "美第奇-里卡迪宫",
            "date": "1430 - 1444",
            "location": "佛罗伦萨 (Florence, Italy)",
            "image": "/images/artworks/palazzo-medici.jpg",
            "notes": "文艺复兴早期民用宫殿典范。外立面三层递减：底层厚重糙石（Rustication）、二层平滑分缝石、三层平整细石，顶部挑出巨大的古典檐口，内部设优雅柱廊内院。",
            "knowledgePoints": [
              "文艺复兴住宅宫殿范式：立面由下至上三层石材糙度与高度递减",
              "内部方形柱廊中央庭院（Cortile）与顶部巨型古典檐口"
            ],
            "museum": "Museo di Palazzo Medici Riccardi",
            "museumCity": "Florence, Italy",
            "museumUrl": "https://www.palazzomediciriccardi.it"
          },
          {
            "id": "palazzo-dei-diamanti",
            "title": "Palazzo dei Diamanti, Ferrara (费拉拉钻石宫)",
            "titleEn": "Palazzo dei Diamanti",
            "titleZh": "费拉拉钻石宫",
            "date": "1493",
            "location": "费拉拉 (Ferrara, Italy)",
            "image": "/images/artworks/palazzo-diamanti.jpg",
            "notes": "费拉拉文艺复兴城市扩建核心地标。外墙铺贴超过8500块金字塔形立体钻石切割大理石块，以光影折射与街角阳台形成戏剧性的透视视觉。",
            "knowledgePoints": [
              "8500余块金字塔形钻石琢石（Diamond-point Rustication）构成独特外立面",
              "文艺复兴理想城市扩张计划（Addizione Erculea）的街角视觉焦点"
            ],
            "museum": "Gallerie d'Arte Moderna e Contemporanea (Palazzo dei Diamanti)",
            "museumCity": "Ferrara, Italy",
            "museumUrl": "https://www.palazzodiamanti.it"
          },
          {
            "id": "palazzo-farnese",
            "title": "Palazzo Farnese, Rome (罗马法尔内塞宫)",
            "titleEn": "Palazzo Farnese",
            "titleZh": "罗马法尔内塞宫",
            "date": "1517 - 1589",
            "location": "罗马 (Rome, Italy)",
            "image": "/images/artworks/palazzo-farnese.jpg",
            "notes": "罗马盛期文艺复兴最宏伟的贵族宫殿。小桑加洛规划了严谨对称的立面与中庭，米开朗基罗设计了二层中央大阳台与极度宏伟的顶部雕花檐口。",
            "knowledgePoints": [
              "罗马盛期文艺复兴宫殿的巅峰之作",
              "小桑加洛设计的严谨三层山花窗格与米开朗基罗操刀的宏大悬挑挑檐"
            ],
            "museum": "Palazzo Farnese (Ambassade de France en Italie)",
            "museumCity": "Rome, Italy",
            "museumUrl": "https://it.ambafrance.org/-Palazzo-Farnese-"
          }
        ]
      },
      {
        "id": "andrea-palladio",
        "name": "安德烈亚·帕拉迪奥",
        "englishName": "Andrea Palladio",
        "years": "1508 - 1580",
        "avatar": "/images/artists/andrea-palladio.jpg",
        "bio": "威尼斯共和国文艺复兴最伟大的建筑师，著有《建筑四书》（I quattro libri dell'architettura），发明了塞利奥拱（Serliana / 帕拉迪奥母题），其对称严谨的帕拉迪奥主义（Palladianism）深远影响英美乃至全球古典建筑。",
        "artworks": [
          {
            "id": "basilica-palladiana",
            "title": "Basilica Palladiana, Vicenza (维琴察帕拉迪奥巴西利卡)",
            "titleEn": "Basilica Palladiana",
            "titleZh": "维琴察帕拉迪奥巴西利卡",
            "date": "1549",
            "location": "维琴察 (Vicenza, Italy)",
            "image": "/images/artworks/basilica-palladiana.jpg",
            "notes": "帕拉迪奥成名作。为旧哥特宫殿加建双层开敞大理石拱廊，巧妙运用圆拱配合两侧小矩形过梁的'塞利奥拱 / 帕拉迪奥母题'（Serliana），化解了不规则原有开间的结构难题。",
            "knowledgePoints": [
              "'帕拉迪奥母题 / 塞利奥拱'（Serliana / Palladian Motif）经典应用",
              "成功将古典和谐比例与灵活开间结构相统一的典范"
            ],
            "museum": "Museo Civico di Palazzo Chiericati e Basilica Palladiana",
            "museumCity": "Vicenza, Italy",
            "museumUrl": "https://www.museicivicivicenza.it/it/mcp/basilica_palladiana.php"
          },
          {
            "id": "villa-la-rotonda",
            "title": "Villa La Rotonda / Villa Capra (圆厅别墅 / 卡普拉别墅)",
            "titleEn": "Villa La Rotonda",
            "titleZh": "圆厅别墅 / 卡普拉别墅",
            "date": "1551 - 1567",
            "location": "维琴察 (Vicenza, Italy)",
            "image": "/images/artworks/villa-rotonda.jpg",
            "notes": "建筑史上最著名的乡间住宅。正方形绝对对称平面，中央为穹顶圆厅，四面均设有六柱爱奥尼神庙式门廊，将建筑与周围田园风景完美融为一体。",
            "knowledgePoints": [
              "四面对称的六柱爱奥尼门廊与中央穹顶圆厅",
              "住宅建筑首次采用神庙门廊，确立了帕拉迪奥主义（Palladianism）国际范式",
              "联合国教科文组织世界文化遗产"
            ],
            "museum": "Villa La Rotonda (Fondazione Aldo e Fernando Valmarana)",
            "museumCity": "Vicenza, Italy",
            "museumUrl": "https://www.villalarotonda.it"
          }
        ]
      }
    ],
    "startYear": 1400,
    "chronologicalOrder": 3,
    "era": "文艺复兴 (1400-1600)",
    "eraEn": "Renaissance"
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
            "titleZh": "罗马耶稣堂",
            "museum": "Church of the Gesù (Chiesa del Gesù)",
            "museumCity": "Rome, Italy",
            "museumUrl": "https://www.chiesadelgesu.org/"
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
            "titleZh": "茱莉亚别墅",
            "museum": "Museo Nazionale Etrusco di Villa Giulia",
            "museumCity": "Rome, Italy",
            "museumUrl": "https://www.museoetru.it/"
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
            "titleZh": "耶稣堂立面",
            "museum": "Church of the Gesù",
            "museumCity": "Rome, Italy",
            "museumUrl": "https://www.chiesadelgesu.org/"
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
            "titleZh": "四喷泉圣卡罗教堂",
            "museum": "Church of San Carlo alle Quattro Fontane",
            "museumCity": "Rome, Italy",
            "museumUrl": "https://www.sancarlino.eu/"
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
            "titleZh": "圣依佛堂",
            "museum": "Church of Sant’Ivo alla Sapienza",
            "museumCity": "Rome, Italy",
            "museumUrl": "https://www.archiviodistatoroma.beniculturali.it/"
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
            "titleZh": "梵蒂冈圣伯多禄大广场",
            "museum": "St. Peter’s Square (Vatican City)",
            "museumCity": "Vatican City / Rome",
            "museumUrl": "https://www.vatican.va/various/basiliche/san_pietro/index_it.htm"
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
            "titleZh": "奎里纳尔圣安德肋堂",
            "museum": "Church of Sant’Andrea al Quirinale",
            "museumCity": "Rome, Italy",
            "museumUrl": "https://www.gesuiti.it/"
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
            "titleZh": "蒙特奇托里奥宫",
            "museum": "Palazzo Montecitorio (Chamber of Deputies)",
            "museumCity": "Rome, Italy",
            "museumUrl": "https://www.camera.it/"
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
            "titleZh": "圣彼得大教堂青铜华盖",
            "museum": "St. Peter’s Basilica",
            "museumCity": "Vatican City / Rome",
            "museumUrl": "https://www.basilicasanpietro.va/"
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
            "titleZh": "都灵卡里尼亚诺宫",
            "museum": "Museo Nazionale del Risorgimento Italiano (Palazzo Carignano)",
            "museumCity": "Turin, Italy",
            "museumUrl": "https://www.museorisorgimentotorino.it/"
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
            "titleZh": "裹尸布礼拜堂",
            "museum": "Turin Royal Museums (Musei Reali Torino)",
            "museumCity": "Turin, Italy",
            "museumUrl": "https://museireali.beniculturali.it/cappella-della-sindone/"
          }
        ],
        "displayName": "Guarino Guarini (瓜里诺·瓜里尼)"
      }
    ],
    "displayName": "Baroque Architecture (巴洛克建筑)",
    "startYear": 1568,
    "chronologicalOrder": 4,
    "era": "巴洛克与启蒙前夜 (1568-1750)",
    "eraEn": "Baroque"
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
            "titleZh": "苏佩尔加大教堂",
            "museum": "Basilica di Superga",
            "museumCity": "Turin, Italy",
            "museumUrl": "https://www.basilicadisuperga.com/"
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
            "titleZh": "卡塞塔王宫",
            "museum": "Reggia di Caserta (UNESCO World Heritage)",
            "museumCity": "Caserta, Italy",
            "museumUrl": "https://reggiadicaserta.cultura.gov.it/"
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
            "titleZh": "那不勒斯王宫",
            "museum": "Palazzo Reale di Napoli",
            "museumCity": "Naples, Italy",
            "museumUrl": "https://palazzorealedinapoli.org/"
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
            "titleZh": "米兰斯卡拉大剧院",
            "museum": "Teatro alla Scala & Museo Teatrale",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://www.teatroallascala.org/"
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
            "titleZh": "米兰王宫",
            "museum": "Palazzo Reale di Milano",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://www.palazzorealemilano.it/"
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
            "titleZh": "巴黎拉维莱特圆亭",
            "museum": "La Rotonde Stalingrad (Claude-Nicolas Ledoux)",
            "museumCity": "Paris, France",
            "museumUrl": "https://www.paris.fr/"
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
            "titleZh": "巴黎雄狮凯旋门",
            "museum": "Centre des Monuments Nationaux (Arc de Triomphe)",
            "museumCity": "Paris, France",
            "museumUrl": "https://www.paris-arc-de-triomphe.fr/"
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
            "titleZh": "米兰和平门",
            "museum": "Arco della Pace (Parco Sempione)",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://www.turismo.milano.it/"
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
            "titleZh": "弗吉尼亚大学圆厅",
            "museum": "University of Virginia (UNESCO World Heritage)",
            "museumCity": "Charlottesville, USA",
            "museumUrl": "https://rotunda.virginia.edu/"
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
            "titleZh": "美国白宫",
            "museum": "The White House Historical Association",
            "museumCity": "Washington, D.C., USA",
            "museumUrl": "https://www.whitehousehistory.org/"
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
            "titleZh": "慕尼黑国王广场山门",
            "museum": "Königsplatz & State Antiquities Collections",
            "museumCity": "Munich, Germany",
            "museumUrl": "https://www.antike-am-koenigsplatz.mwn.de/"
          }
        ],
        "displayName": "Neoclassical Monuments Masters (欧美新古典主义纪念碑群)"
      }
    ],
    "displayName": "Neoclassical Architecture (新古典主义建筑)",
    "startYear": 1750,
    "chronologicalOrder": 5,
    "era": "新古典主义 (1750-1850)",
    "eraEn": "Neoclassicism"
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
            "titleZh": "伦敦水晶宫",
            "museum": "The Crystal Palace Foundation Archives",
            "museumCity": "London, UK",
            "museumUrl": "http://www.crystalpalacefoundation.org.uk/"
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
            "titleZh": "埃菲尔铁塔",
            "museum": "La Tour Eiffel (Société d’Exploitation)",
            "museumCity": "Paris, France",
            "museumUrl": "https://www.toureiffel.paris/"
          }
        ],
        "displayName": "Gustave Eiffel (居斯塔夫·埃菲尔)"
      }
    ],
    "displayName": "Industrial Revolution Architecture (工业革命铁构与玻璃建筑)",
    "startYear": 1851,
    "chronologicalOrder": 6,
    "era": "工业革命铁构时代 (1851-1889)",
    "eraEn": "Industrial Age"
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
            "titleZh": "爱因斯坦天文台",
            "museum": "Leibniz Institute for Astrophysics Potsdam (AIP)",
            "museumCity": "Potsdam, Germany",
            "museumUrl": "https://www.aip.de/en/institute/einsteinturm/"
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
            "titleZh": "科隆玻璃展馆",
            "museum": "Werkbundarchiv – Museum der Dinge",
            "museumCity": "Berlin / Cologne, Germany",
            "museumUrl": "https://www.museumderdinge.de/"
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
            "titleZh": "圣家族大教堂",
            "museum": "Basílica de la Sagrada Família (UNESCO World Heritage)",
            "museumCity": "Barcelona, Spain",
            "museumUrl": "https://sagradafamilia.org/en/"
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
            "titleZh": "米拉之家",
            "museum": "Fundació Catalunya La Pedrera (Casa Milà)",
            "museumCity": "Barcelona, Spain",
            "museumUrl": "https://www.lapedrera.com/en"
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
            "titleZh": "巴特罗之家 (骨之屋",
            "museum": "Casa Batlló (Antoni Gaudí / UNESCO World Heritage)",
            "museumCity": "Barcelona, Spain",
            "museumUrl": "https://www.casabatllo.es/en/"
          }
        ],
        "displayName": "Antoni Gaudí (安东尼·高迪)"
      }
    ],
    "displayName": "Expressionist Architecture & Catalan Modernisme (表现主义建筑与高迪现代主义)",
    "startYear": 1882,
    "chronologicalOrder": 7,
    "era": "世纪之交有机先锋 (1882-1930)",
    "eraEn": "Expressionism & Gaudi"
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
            "titleZh": "塔塞尔公馆",
            "museum": "Hôtel Tassel (Victor Horta / UNESCO World Heritage)",
            "museumCity": "Brussels, Belgium",
            "museumUrl": "https://whc.unesco.org/en/list/1005/"
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
            "titleZh": "维也纳分离派展览馆",
            "museum": "Secession Building (Association of Visual Artists)",
            "museumCity": "Vienna, Austria",
            "museumUrl": "https://secession.at/en/"
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
            "titleZh": "巴黎地铁站出入口",
            "museum": "RATP Heritage & Musée d’Orsay",
            "museumCity": "Paris, France",
            "museumUrl": "https://www.ratp.fr/"
          }
        ],
        "displayName": "Hector Guimard (埃克托尔·吉马尔)"
      }
    ],
    "displayName": "Art Nouveau Architecture (新艺术运动建筑)",
    "startYear": 1890,
    "chronologicalOrder": 8,
    "era": "新艺术运动 (1890-1910)",
    "eraEn": "Art Nouveau"
  },
  {
    "id": "modernist-architecture",
    "name": "现代主义建筑",
    "englishName": "Modernist Architecture",
    "years": "1871 - 1970",
    "category": "architecture",
    "bgClass": "modernist-theme",
    "description": "20世纪主导全球的建筑运动与风格，横跨芝加哥学派、包豪斯、国际风格（International Style）与有机建筑。基于钢材、玻璃与钢筋混凝土等新型建材，确立了'形式追随功能'（Form follows function）、极简主义与全面摒弃传统附着装饰的现代空间美学。",
    "historicalContext": "以1871年芝加哥大火后的灾后商业高层重建与电梯应用为起点，经历欧洲一战后工业化大生产与包豪斯设计教育，彻底重塑了20世纪现代城市景观。",
    "keyFeatures": [
      "芝加哥学派钢框架结构与商业摩天大楼（Skyscraper）",
      "功能主义（Functionalism）：形式服从功能（Form follows function）",
      "新材料技术革命：钢材、大面积玻璃幕墙与清水混凝土",
      "包豪斯学派与国际风格（International Style）",
      "有机建筑（Organic Architecture）与新建筑五点（Five Points of Architecture）"
    ],
    "artists": [
      {
        "id": "chicago-school-architects",
        "name": "芝加哥建筑学派",
        "englishName": "Chicago School of Architecture",
        "years": "1871 - 1910",
        "avatar": "/images/artists/chicago-school.jpg",
        "bio": "19世纪末至20世纪初活跃于芝加哥的先驱建筑师群体。在1871年芝加哥大火后的灾后重建中，率先将钢框架结构、安全电梯与大面积采光窗应用于高层商业摩天大楼，提出'形式服从功能'。",
        "artworks": [
          {
            "id": "chicago-skyscraper-movement",
            "title": "First Chicago School Skyscraper Era (芝加哥第一学派摩天大楼时代)",
            "titleEn": "First Chicago School Skyscraper Era",
            "titleZh": "芝加哥第一学派摩天大楼时代",
            "date": "1885 - 1904",
            "location": "芝加哥 (Chicago, USA)",
            "image": "/images/artworks/chicago-skyscrapers.jpg",
            "notes": "在市中心用地紧张背景下诞生的钢框架商业高层建筑。沙利文与珍妮等探讨了新技术与垂直立面造型，为欧洲现代主义与国际风格提供了直接启蒙。",
            "knowledgePoints": [
              "1871年芝加哥大火催生的钢框架高层商业建筑革命",
              "安全电梯普及与大面积三段式芝加哥窗（Chicago Window）",
              "路易斯·沙利文提出'形式服从功能'（Form follows function）名言"
            ],
            "museum": "Chicago Architecture Center (CAC)",
            "museumCity": "Chicago, USA",
            "museumUrl": "https://www.architecture.org"
          }
        ]
      },
      {
        "id": "walter-gropius",
        "name": "瓦尔特·格罗皮乌斯",
        "englishName": "Walter Gropius",
        "years": "1883 - 1969",
        "avatar": "/images/artists/walter-gropius.jpg",
        "bio": "德裔美国建筑师，包豪斯公立学校（Bauhaus）创办人与首任校长，国际风格的主要推动者，后任教于哈佛大学设计研究生院（GSD）。",
        "artworks": [
          {
            "id": "bauhaus-dessau",
            "title": "Bauhaus Building, Dessau (德绍包豪斯校舍)",
            "titleEn": "Bauhaus Building, Dessau",
            "titleZh": "德绍包豪斯校舍",
            "date": "1925 - 1932",
            "location": "德绍 (Dessau, Germany)",
            "image": "/images/artworks/bauhaus-dessau.jpg",
            "notes": "现代主义建筑里程碑。风车形不对称自由功能布局，全钢结构与三层通高无立柱转角玻璃幕墙（Glass Curtain Wall），体现了艺术与技术的高度统一。",
            "knowledgePoints": [
              "现代主义建筑开山纲领式建筑",
              "三层通高通透转角悬挑玻璃幕墙（Curtain Wall）",
              "风车状自由功能分区：教学、工坊、礼堂与宿舍连通",
              "联合国教科文组织世界文化遗产"
            ],
            "museum": "Bauhaus Dessau Foundation",
            "museumCity": "Dessau, Germany",
            "museumUrl": "https://www.bauhaus-dessau.de/en/"
          }
        ]
      },
      {
        "id": "mies-van-der-rohe",
        "name": "路德维希·密斯·凡·德·罗",
        "englishName": "Ludwig Mies van der Rohe",
        "years": "1886 - 1969",
        "avatar": "/images/artists/mies-van-der-rohe.jpg",
        "bio": "德裔美国现代主义建筑先驱，包豪斯最后一任校长，伊利诺伊理工学院（IIT）建筑系主任。提出'少即是多'（Less is more）与'流通空间'哲学。",
        "artworks": [
          {
            "id": "brick-country-house",
            "title": "Brick Country House Project (砖造乡村住宅方案)",
            "titleEn": "Brick Country House Project",
            "titleZh": "砖造乡村住宅方案",
            "date": "1923",
            "location": "柏林/纸上建筑 (Berlin, Germany)",
            "image": "/images/artworks/brick-country-house.jpg",
            "notes": "密斯早期受风格派与马列维奇影响的纸上建筑杰作。独立的砖墙向周围自然无限延伸，打破了传统封闭房间的内外边界，开创了'流动空间'理念。",
            "knowledgePoints": [
              "现代主义'流动空间'（Fluid Space）理论先驱方案",
              "受荷兰风格派（De Stijl）二维抽象平面启发的离心式墙体延伸"
            ],
            "museum": "Museum of Modern Art (MoMA Architecture Collection)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/81335"
          },
          {
            "id": "barcelona-pavilion",
            "title": "Barcelona Pavilion (巴塞罗那德国馆)",
            "titleEn": "Barcelona Pavilion",
            "titleZh": "巴塞罗那德国馆",
            "date": "1928 - 1929",
            "location": "巴塞罗那蒙特惠奇 (Barcelona, Spain)",
            "image": "/images/artworks/barcelona-pavilion.jpg",
            "notes": "1929年世博会德国国家馆。十字形镀铬钢柱支撑超轻屋顶，绿玛瑙大理石隔断、灰色玻璃与水池倒影构成纯净连续的流动空间，配备经典的巴塞罗那椅。",
            "knowledgePoints": [
              "'少即是多'（Less is more）的终极实体表达",
              "8根十字形镀铬钢柱实现墙体完全非承重与空间自由流动",
              "绿玛瑙大理石隔断与黎明女神雕像倒影水池"
            ],
            "museum": "Fundació Mies van der Rohe (Pavelló Mies van der Rohe)",
            "museumCity": "Barcelona, Spain",
            "museumUrl": "https://miesbcn.com"
          },
          {
            "id": "farnsworth-house",
            "title": "Farnsworth House (范斯沃斯住宅)",
            "titleEn": "Farnsworth House",
            "titleZh": "范斯沃斯住宅",
            "date": "1951",
            "location": "伊利诺伊州普莱诺 (Plano, Illinois, USA)",
            "image": "/images/artworks/farnsworth-house.jpg",
            "notes": "伊利诺伊州福克斯河畔的全玻璃透明住宅。8根白色工字钢立柱将整座建筑架空于地面之上，四周全透明落地玻璃幕墙，将建筑消隐于自然之中。",
            "knowledgePoints": [
              "极简主义住宅巅峰：工字钢架空与全景落地玻璃幕墙",
              "彻底模糊室内外生活边界，纯粹的结构与漂浮感"
            ],
            "museum": "Edith Farnsworth House (National Trust for Historic Preservation)",
            "museumCity": "Plano, Illinois, USA",
            "museumUrl": "https://edithfarnsworthhouse.org"
          },
          {
            "id": "seagram-building",
            "title": "Seagram Building (西格拉姆大厦)",
            "titleEn": "Seagram Building",
            "titleZh": "西格拉姆大厦",
            "date": "1958",
            "location": "纽约曼哈顿公园大道 (New York, USA)",
            "image": "/images/artworks/seagram-building.jpg",
            "notes": "纽约曼哈顿公园大道38层高品质摩天大楼。古铜色玻璃幕墙配合非承重外附装饰性青铜工字钢龙骨，退让出开阔的公共喷泉前庭广场。",
            "knowledgePoints": [
              "国际风格（International Style）摩天大楼终极标准范式",
              "古铜色中空玻璃幕墙与外挂青铜工字钢竖梃",
              "主动退让城市街道营造开阔公共喷泉广场（Plaza）"
            ],
            "museum": "Seagram Building (375 Park Avenue)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.nycgo.com/attractions/seagram-building/"
          },
          {
            "id": "neue-nationalgalerie",
            "title": "Neue Nationalgalerie (柏林新国家美术馆)",
            "titleEn": "Neue Nationalgalerie",
            "titleZh": "柏林新国家美术馆",
            "date": "1968",
            "location": "柏林文化广场 (Berlin, Germany)",
            "image": "/images/artworks/neue-nationalgalerie.jpg",
            "notes": "密斯生前最后一座杰作。8根外立面十字钢柱支撑巨大的黑色正方形华盖钢屋顶，地面上为全透明无柱通透大展厅，所有次要功能沉入地下。",
            "knowledgePoints": [
              "纯粹的'通用无柱空间'（Universal Space）结构",
              "8根外部钢柱支撑超大跨度双向正交钢网架屋顶",
              "全玻璃无遮挡外墙展现工业建造的终极秩序与纪念性"
            ],
            "museum": "Neue Nationalgalerie (Staatliche Museen zu Berlin)",
            "museumCity": "Berlin, Germany",
            "museumUrl": "https://www.smb.museum/en/museums-institutions/neue-nationalgalerie/home/"
          }
        ]
      },
      {
        "id": "frank-lloyd-wright",
        "name": "弗兰克·劳埃德·赖特",
        "englishName": "Frank Lloyd Wright",
        "years": "1867 - 1959",
        "avatar": "/images/artists/frank-lloyd-wright.jpg",
        "bio": "美国历史上最著名的建筑大师，有机建筑（Organic Architecture）与草原学派（Prairie School）开创者，塔里埃森学徒计划导师，一生设计了千余座建筑。",
        "artworks": [
          {
            "id": "robie-house",
            "title": "Robie House (罗比住宅)",
            "titleEn": "Robie House",
            "titleZh": "罗比住宅",
            "date": "1909",
            "location": "芝加哥海德公园 (Chicago, Illinois, USA)",
            "image": "/images/artworks/robie-house.jpg",
            "notes": "芝加哥草原学派（Prairie House）巅峰之作。极度舒展的水平低坡屋顶、深挑檐、罗马长砖砌筑与中央壁炉核心，打破了传统维多利亚式封闭盒子空间。",
            "knowledgePoints": [
              "草原学派（Prairie School）代表杰作",
              "极度延伸的水平挑檐（Cantilever）与连通起居室流动空间",
              "中央壁炉核心与彩色艺术铅封玻璃窗"
            ],
            "museum": "Frederick C. Robie House (Frank Lloyd Wright Trust)",
            "museumCity": "Chicago, Illinois, USA",
            "museumUrl": "https://flwright.org/researchexplore/robiehouse"
          },
          {
            "id": "fallingwater",
            "title": "Fallingwater (流水别墅 / 落水山庄)",
            "titleEn": "Fallingwater",
            "titleZh": "流水别墅 / 落水山庄",
            "date": "1936 - 1937",
            "location": "宾夕法尼亚熊跑溪 (Mill Run, Pennsylvania, USA)",
            "image": "/images/artworks/fallingwater.jpg",
            "notes": "被誉为'美国建筑史上最伟大作品'。建于宾夕法尼亚熊跑溪瀑布之上，钢筋混凝土悬挑阳台与就地开采的粗糙石墙交错，建筑与溪流巨石融为一体。",
            "knowledgePoints": [
              "有机建筑（Organic Architecture）世界级巅峰",
              "钢筋混凝土大跨度悬挑（Cantilever）平台凌空于天然瀑布之上",
              "就地取材天然粗石砌体与自然地貌完美共生",
              "联合国教科文组织世界文化遗产"
            ],
            "museum": "Fallingwater (Western Pennsylvania Conservancy)",
            "museumCity": "Mill Run, Pennsylvania, USA",
            "museumUrl": "https://fallingwater.org"
          },
          {
            "id": "guggenheim-museum-ny",
            "title": "The Solomon R. Guggenheim Museum (纽约古根海姆博物馆)",
            "titleEn": "The Solomon R. Guggenheim Museum",
            "titleZh": "纽约古根海姆博物馆",
            "date": "1937 / 1959",
            "location": "纽约曼哈顿第五大道 (New York, USA)",
            "image": "/images/artworks/guggenheim-ny.jpg",
            "notes": "赖特晚年划时代杰作。白色连续螺旋上升的无柱中庭坡道，观众乘电梯至顶层沿螺旋斜坡缓缓向下观展，天顶为巨大十二角几何玻璃穹顶。",
            "knowledgePoints": [
              "连续倒圆台形无柱螺旋展廊（Spiral Ramp）中庭",
              "颠覆传统房间式观展流线，从顶层沿斜坡环形向下",
              "联合国教科文组织世界文化遗产"
            ],
            "museum": "Solomon R. Guggenheim Museum",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.guggenheim.org"
          }
        ]
      },
      {
        "id": "le-corbusier",
        "name": "勒·柯布西耶",
        "englishName": "Le Corbusier",
        "years": "1887 - 1965",
        "avatar": "/images/artists/le-corbusier.jpg",
        "bio": "瑞士-法国建筑师、城市规划师与画家，现代建筑运动核心先驱，国际现代建筑大会（CIAM）创始成员，提出'住房是居住的机器'与'新建筑五点'。",
        "artworks": [
          {
            "id": "villa-savoye",
            "title": "Villa Savoye (萨伏伊别墅)",
            "titleEn": "Villa Savoye",
            "titleZh": "萨伏伊别墅",
            "date": "1928 - 1931",
            "location": "普瓦西 (Poissy, France)",
            "image": "/images/artworks/villa-savoye.jpg",
            "notes": "现代主义新建筑五点（底层架空柱、屋顶花园、自由平面、横向长窗、自由立面）的完美教科书范例，纯白几何形体宛若漂浮于绿野之上的机器。",
            "knowledgePoints": [
              "现代主义'新建筑五点'（Les 5 points d'une architecture nouvelle）完整体现",
              "底层架空立柱（Pilotis）、屋顶花园（Toit-jardin）、自由平面（Plan libre）、横向长窗（Fenêtre en longueur）、自由立面（Façade libre）",
              "联合国教科文组织世界文化遗产"
            ],
            "museum": "Villa Savoye (Centre des monuments nationaux)",
            "museumCity": "Poissy, France",
            "museumUrl": "https://www.villa-savoye.fr"
          },
          {
            "id": "unite-dhabitation",
            "title": "Unité d'Habitation, Marseille (马赛公寓)",
            "titleEn": "Unité d'Habitation, Marseille",
            "titleZh": "马赛公寓",
            "date": "1952",
            "location": "马赛 (Marseille, France)",
            "image": "/images/artworks/unite-dhabitation.jpg",
            "notes": "二战后现代集体住宅划时代杰作。粗野主义清水混凝土（Béton Brut）结构，内嵌双层跃层咬合住宅单元、空中商业街、托儿所与雕塑感屋顶跑道活动平台。",
            "knowledgePoints": [
              "现代粗野主义（Brutalism）与模度（Modulor）人体比例体系典范",
              "双层'L'形咬合紧凑剖面单元与第七层室内空中街道",
              "雕塑感混凝土屋顶公共活动平台与幼儿戏水池",
              "联合国教科文组织世界文化遗产"
            ],
            "museum": "Cité Radieuse (Unité d'Habitation de Marseille)",
            "museumCity": "Marseille, France",
            "museumUrl": "https://www.marseille-tourisme.com"
          },
          {
            "id": "notre-dame-du-haut",
            "title": "Chapelle Notre-Dame du Haut, Ronchamp (朗香教堂 / 穹顶圣母圣殿)",
            "titleEn": "Notre-Dame du Haut, Ronchamp",
            "titleZh": "朗香教堂 / 穹顶圣母圣殿",
            "date": "1955",
            "location": "朗香 (Ronchamp, France)",
            "image": "/images/artworks/ronchamp.jpg",
            "notes": "柯布西耶晚期极具表现主义与雕塑感的宗教建筑。如蟹壳般向上翘起的深色现浇混凝土屋顶与不规则厚墙中开凿的彩色光漏窗，创造出神秘莫测的光影空间。",
            "knowledgePoints": [
              "现代主义向雕塑表现主义转型的旷世之作",
              "悬浮脱开的蟹壳状曲面混凝土屋顶（产生一条细缝天光）",
              "南立面厚重斜墙中大小不一、内大外小的彩色玻璃漏光窗洞",
              "联合国教科文组织世界文化遗产"
            ],
            "museum": "Colline Notre-Dame du Haut (Association des Amis de Sainte-Barbe)",
            "museumCity": "Ronchamp, France",
            "museumUrl": "https://www.collinenotredameduhaut.com"
          }
        ]
      },
      {
        "id": "adolf-loos",
        "name": "阿道夫·洛斯",
        "englishName": "Adolf Loos",
        "years": "1870 - 1933",
        "avatar": "/images/artists/adolf-loos.jpg",
        "bio": "奥地利-捷克建筑师、理论家与论战家，发表著名的《装饰与罪恶》（Ornament and Crime），开创了三维立体错层空间规划理论（Raumplan）。",
        "artworks": [
          {
            "id": "rufer-house",
            "title": "Rufer House (鲁弗住宅)",
            "titleEn": "Rufer House",
            "titleZh": "鲁弗住宅",
            "date": "1922",
            "location": "维也纳 (Vienna, Austria)",
            "image": "/images/artworks/rufer-house.jpg",
            "notes": "位于维也纳的早期现代住宅。外部为极度克制的纯白无装饰立方体，内部各个房间根据功能需要拥有不同净高与错层连通，是'空间规划'（Raumplan）的早期实验。",
            "knowledgePoints": [
              "实践《装饰与罪恶》论断的无装饰纯白外立面",
              "空间规划（Raumplan）早期探索：内部房间根据功能具有不同标高与层高"
            ],
            "museum": "Rufer House (Schlickgasse / Adolf Loos Archive)",
            "museumCity": "Vienna, Austria",
            "museumUrl": "https://www.wien.info/en"
          },
          {
            "id": "villa-muller",
            "title": "Villa Müller, Prague (米勒别墅)",
            "titleEn": "Villa Müller",
            "titleZh": "米勒别墅",
            "date": "1930",
            "location": "布拉格 (Prague, Czech Republic)",
            "image": "/images/artworks/villa-muller.jpg",
            "notes": "空间规划（Raumplan）的终极成熟杰作。内部大客厅、起居室、女主人闺房错落穿插于不同标高上，通过视线对流与精选名贵大理石饰面展现内在的奢华与严谨。",
            "knowledgePoints": [
              "空间规划（Raumplan）的集大成代表作",
              "外部极简纯白体块与内部错层流线、西波里诺大理石（Cipollino Marble）奢华材质的鲜明对比"
            ],
            "museum": "City of Prague Museum (Villa Müller)",
            "museumCity": "Prague, Czech Republic",
            "museumUrl": "https://www.muzeumprahy.cz/en/villa-muller"
          }
        ]
      }
    ],
    "startYear": 1900,
    "chronologicalOrder": 9,
    "era": "早期现代主义 (1900-1970)",
    "eraEn": "Modernism"
  },
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
            "titleZh": "崛起中的城市",
            "museum": "Museum of Modern Art (MoMA)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/79865"
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
            "titleZh": "长廊骚乱",
            "museum": "Pinacoteca di Brera",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://pinacotecabrera.org/en/collezione-online/opere/rissa-in-galleria/"
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
            "titleZh": "同时发生的景象",
            "museum": "Von der Heydt-Museum",
            "museumCity": "Wuppertal, Germany",
            "museumUrl": "https://von-der-heydt-museum.de/"
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
            "titleZh": "自行车手的动力",
            "museum": "Peggy Guggenheim Collection",
            "museumCity": "Venice, Italy",
            "museumUrl": "https://www.guggenheim-venice.it/en/art/works/dynamism-of-a-cyclist/"
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
            "titleZh": "空间中连续性的独特形式",
            "museum": "Museo del Novecento / MoMA",
            "museumCity": "Milan / New York",
            "museumUrl": "https://www.moma.org/collection/works/81179"
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
            "titleZh": "瓶子在空间中的展开",
            "museum": "Metropolitan Museum of Art",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.metmuseum.org/art/collection/search/488583"
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
            "titleZh": "米兰大教堂广场",
            "museum": "Pinacoteca di Brera",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://pinacotecabrera.org/"
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
            "titleZh": "剧院出口",
            "museum": "Pinacoteca di Brera (Mattioli Collection)",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://pinacotecabrera.org/"
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
            "titleZh": "无政府主义者加里之葬",
            "museum": "Museum of Modern Art (MoMA)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/78694"
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
            "titleZh": "主张参战的示威",
            "museum": "Peggy Guggenheim Collection",
            "museumCity": "Venice, Italy",
            "museumUrl": "https://www.guggenheim-venice.it/en/art/works/manifestazione-interventista/"
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
            "titleZh": "西方精神骑士",
            "museum": "Private Collection",
            "museumCity": "Turin, Italy",
            "museumUrl": "https://en.wikipedia.org/wiki/Carlo_Carr%C3%A0"
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
            "titleZh": "形而上缪斯",
            "museum": "Pinacoteca di Brera (Mattioli Collection)",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://pinacotecabrera.org/"
          }
        ],
        "displayName": "Carlo Carrà (卡洛·卡拉)"
      }
    ],
    "category": "art",
    "displayName": "Futurism (未来主义)",
    "startYear": 1909,
    "chronologicalOrder": 10,
    "era": "20世纪初先锋艺术 (1909-1928)",
    "eraEn": "Early Avant-Garde"
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
            "titleZh": "无限的乡愁",
            "museum": "Museum of Modern Art (MoMA)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/80407"
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
            "titleZh": "意大利广场",
            "museum": "Art Gallery of Ontario (AGO)",
            "museumCity": "Toronto, Canada",
            "museumUrl": "https://ago.ca/"
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
            "titleZh": "一条街的神秘与忧郁",
            "museum": "Private Collection",
            "museumCity": "Rome / Geneva",
            "museumUrl": "https://en.wikipedia.org/wiki/Mystery_and_Melancholy_of_a_Street"
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
            "titleZh": "令人不安的缪斯",
            "museum": "Pinacoteca di Brera (Mattioli Collection)",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://pinacotecabrera.org/"
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
            "titleZh": "赫克托尔与安德洛玛刻",
            "museum": "Galleria Nazionale d’Arte Moderna",
            "museumCity": "Rome, Italy",
            "museumUrl": "https://lagallerianazionale.com/"
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
            "titleZh": "爱之歌",
            "museum": "Museum of Modern Art (MoMA)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/80419"
          }
        ],
        "displayName": "Giorgio de Chirico (乔治·德·基里科)"
      }
    ],
    "category": "art",
    "displayName": "Metaphysics (形而上主义)",
    "startYear": 1917,
    "chronologicalOrder": 11,
    "era": "20世纪初先锋艺术 (1917-1920)",
    "eraEn": "Early Avant-Garde"
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
            "titleZh": "反向构图第13号",
            "museum": "Stedelijk Museum Amsterdam",
            "museumCity": "Amsterdam, Netherlands",
            "museumUrl": "https://www.stedelijk.nl/en"
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
            "titleZh": "分散构图",
            "museum": "Private Collection",
            "museumCity": "The Hague, Netherlands",
            "museumUrl": "https://en.wikipedia.org/wiki/Theo_van_Doesburg"
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
            "titleZh": "灰树",
            "museum": "Kunstmuseum Den Haag",
            "museumCity": "The Hague, Netherlands",
            "museumUrl": "https://www.kunstmuseum.nl/en/collection/gray-tree"
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
            "titleZh": "红黄蓝构图",
            "museum": "Museum of Modern Art (MoMA)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/79817"
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
            "titleZh": "百老汇爵士乐",
            "museum": "Museum of Modern Art (MoMA)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/78682"
          }
        ],
        "displayName": "Piet Mondrian (皮特·蒙德里安)"
      }
    ],
    "category": "art",
    "displayName": "De Stijl (Neoplasticism) (荷兰风格派)",
    "startYear": 1917,
    "chronologicalOrder": 12,
    "era": "现代抽象与造型 (1917-1928)",
    "eraEn": "De Stijl & Abstraction"
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
            "titleZh": "炸弹般的名作《下楼梯的裸女2号",
            "museum": "Philadelphia Museum of Art",
            "museumCity": "Philadelphia, USA",
            "museumUrl": "https://www.philamuseum.org/collection/object/51449"
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
            "titleZh": "泉",
            "museum": "Tate Modern (Authorized Replica)",
            "museumCity": "London, UK",
            "museumUrl": "https://www.tate.org.uk/art/artworks/duchamp-fountain-t07573"
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
            "titleZh": "带有胡须的蒙娜丽莎",
            "museum": "Centre Pompidou",
            "museumCity": "Paris, France",
            "museumUrl": "https://www.centrepompidou.fr/en/ressources/oeuvre/c6r4y9A"
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
            "titleZh": "遮蔽物",
            "museum": "Private Collection",
            "museumCity": "Paris, France",
            "museumUrl": "https://en.wikipedia.org/wiki/Marcel_Duchamp"
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
            "titleZh": "自行车轮",
            "museum": "Museum of Modern Art (MoMA)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/81631"
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
            "titleZh": "安格尔的小提琴",
            "museum": "J. Paul Getty Museum",
            "museumCity": "Los Angeles, USA",
            "museumUrl": "https://www.getty.edu/art/collection/object/104P58"
          }
        ],
        "displayName": "Man Ray (曼·雷)"
      }
    ],
    "category": "art",
    "displayName": "Dadaism (达达主义)",
    "startYear": 1919,
    "chronologicalOrder": 13,
    "era": "达达与观念实验 (1919-1920)",
    "eraEn": "Dadaism"
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
            "titleZh": "记忆的永恒",
            "museum": "Museum of Modern Art (MoMA)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/79018"
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
            "titleZh": "伟大的手淫者",
            "museum": "Museo Nacional Centro de Arte Reina Sofía",
            "museumCity": "Madrid, Spain",
            "museumUrl": "https://www.museoreinasofia.es/en/collection/artwork/monument-visage-grand-masturbateur-visage-grand-masturbateur-monumento-rostro-gran"
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
            "titleZh": "圣安东尼的诱惑",
            "museum": "Royal Museums of Fine Arts of Belgium",
            "museumCity": "Brussels, Belgium",
            "museumUrl": "https://fine-arts-museum.be/en/collection/artwork/la-tentation-de-saint-antoine"
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
            "titleZh": "我与村庄",
            "museum": "Museum of Modern Art (MoMA)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/78984"
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
            "titleZh": "生日",
            "museum": "Museum of Modern Art (MoMA)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/79249"
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
            "titleZh": "罗密欧与朱丽叶",
            "museum": "Opéra Garnier (Ceiling Sketch) / Private Collection",
            "museumCity": "Paris, France",
            "museumUrl": "https://www.operadeparis.fr/en/magazine/the-chagall-ceiling"
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
            "titleZh": "形象的叛逆",
            "museum": "Los Angeles County Museum of Art (LACMA)",
            "museumCity": "Los Angeles, USA",
            "museumUrl": "https://collections.lacma.org/node/239578"
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
            "titleZh": "恋人",
            "museum": "Museum of Modern Art (MoMA)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/79933"
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
            "titleZh": "戈尔孔达",
            "museum": "The Menil Collection",
            "museumCity": "Houston, USA",
            "museumUrl": "https://www.menil.org/collection/objects/1980-043-golconda-golconde"
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
            "titleZh": "受威胁的凶手",
            "museum": "Museum of Modern Art (MoMA)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/79889"
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
            "titleZh": "禁止复制",
            "museum": "Museum Boijmans Van Beuningen",
            "museumCity": "Rotterdam, Netherlands",
            "museumUrl": "https://www.boijmans.nl/en/collection/artworks/4060/la-reproduction-interdite"
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
            "titleZh": "人子",
            "museum": "Private Collection",
            "museumCity": "New York / Brussels",
            "museumUrl": "https://en.wikipedia.org/wiki/The_Son_of_Man"
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
            "titleZh": "农场",
            "museum": "National Gallery of Art",
            "museumCity": "Washington, D.C., USA",
            "museumUrl": "https://www.nga.gov/collection/art-object-page.69342.html"
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
            "titleZh": "耕地",
            "museum": "Solomon R. Guggenheim Museum",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.guggenheim.org/artwork/2934"
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
            "titleZh": "母性",
            "museum": "National Galleries of Scotland",
            "museumCity": "Edinburgh, UK",
            "museumUrl": "https://www.nationalgalleries.org/art-and-artists/676/maternity"
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
            "titleZh": "绚丽翅膀的微笑",
            "museum": "Fundació Joan Miró / Private Collection",
            "museumCity": "Barcelona, Spain",
            "museumUrl": "https://www.fmirobcn.org/en/"
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
            "titleZh": "女人与鸟",
            "museum": "Parc de Joan Miró",
            "museumCity": "Barcelona, Spain",
            "museumUrl": "https://www.barcelona.cat/en/what-to-do-in-bcn/parks-and-gardens/joan-miro-park_92086011921.html"
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
            "titleZh": "行走的人",
            "museum": "Fondation Giacometti / Tate Modern / Albright-Knox",
            "museumCity": "Paris / London / Buffalo",
            "museumUrl": "https://www.fondation-giacometti.fr/en/database/artwork/3874/homme-qui-marche-i"
          }
        ],
        "displayName": "Alberto Giacometti (阿尔贝托·贾科梅蒂)"
      }
    ],
    "category": "art",
    "displayName": "Surrealism (超现实主义)",
    "startYear": 1920,
    "chronologicalOrder": 14,
    "era": "超现实主义 (1920-1930)",
    "eraEn": "Surrealism"
  },
  {
    "id": "rationalism-architecture",
    "category": "architecture",
    "name": "理性主义建筑",
    "englishName": "Rationalism Architecture",
    "years": "1920 - 1936 (1926 - 1958)",
    "startYear": 1926,
    "chronologicalOrder": 15,
    "bgClass": "rationalism-theme",
    "description": "理性主义建筑是20世纪20至30年代在意大利发展成熟的现代建筑潮流。维特鲁威在《建筑十书》中提出建筑是一门可以理性理解的科学；20世纪的理性主义进一步相信现实世界的复杂问题可通过理性逻辑化解。作为对历史主义的反思以及与新艺术运动、表现主义的对照，以米兰Gruppo 7为代表的建筑师在古典主义精神与工业化现代形式之间寻求平衡，并与国际风格深度共振。",
    "historicalContext": "1926年，由Luigi Figini、Guido Frette、Sebastiano Larco Silva、Gino Pollini、Carlo Enrico Rava、Giuseppe Terragni与Ubaldo Castagnoli七位青年建筑师在米兰成立Gruppo 7，发表宣言倡导理性主义，随后成立MIAR（意大利理性建筑运动）并创办《Quadrante》期刊，深刻影响了二战前后意大利现代建筑与米兰都市重建。",
    "keyFeatures": [
      "追求纯粹几何形体、网格秩序与逻辑功能划分",
      "在意大利古典建筑比例与现代工业材质（钢筋混凝土、玻璃砖）间寻求平衡",
      "摒弃历史主义繁复装饰，强调结构骨架与空间透明性",
      "格网立面（Grid Façade）、通长带形窗与底层架空",
      "探索建筑与抽象艺术、壁画（如Mario Radice）的一体化结合"
    ],
    "artists": [
      {
        "id": "giuseppe-terragni",
        "name": "朱塞佩·泰拉尼",
        "englishName": "Giuseppe Terragni",
        "years": "1904 - 1943",
        "avatar": "/images/artists/giuseppe-terragni.jpg",
        "bio": "意大利理性主义建筑运动的领军人物与先驱大师，Gruppo 7核心成员。他在理性主义名义下开创了意大利现代建筑的高峰，以纯粹的三维几何网格、透明性与空间逻辑著称，其代表作科莫法西斯宫（Casa del Fascio）被公认为20世纪现代主义建筑经典里程碑。",
        "artworks": [
          {
            "id": "casa-del-fascio",
            "title": "Casa del Fascio of Como (科莫法西斯宫 / 现普契尼之家)",
            "date": "1932 - 1936",
            "location": "科莫 (Como, Italy)",
            "image": "/images/artworks/casa-del-fascio.jpg",
            "notes": "意大利理性主义建筑的划时代杰作。泰拉尼通过完美的正方体比例（长33.2米、高16.6米，宽高比为严谨的2:1黄金分割）、多孔透空格网立面与内部中庭采光天顶，将古典中庭形式以现代混凝土骨架重构，内部由抽象派画家马里奥·拉迪斯（Mario Radice）绘制几何壁画。",
            "knowledgePoints": [
              "理性主义空间透明性与正方体几何模数法则的巅峰展现",
              "四个立面采用非对称但高度平衡的几何实虚对比格网",
              "大面积玻璃砖、博蒂奇诺大理石（Botticino）与钢框玻璃材质",
              "与抽象画家 Mario Radice 几何壁画的总体艺术融合"
            ],
            "titleEn": "Casa del Fascio of Como",
            "titleZh": "科莫法西斯宫",
            "museum": "Casa del Fascio (Palazzo Terragni)",
            "museumCity": "Como, Italy",
            "museumUrl": "https://www.lombardiabeniculturali.it/architetture/schede/3m080-00049/"
          }
        ]
      },
      {
        "id": "luigi-figini",
        "name": "路易吉·菲吉尼",
        "englishName": "Luigi Figini",
        "years": "1903 - 1984",
        "avatar": "/images/artists/luigi-figini.jpg",
        "bio": "意大利理性主义建筑代表人物，Gruppo 7发起人之一。他与吉诺·波利尼（Gino Pollini）长期合作组成 Figini & Pollini 建筑事务所，积极投身于住宅、工业规划（如伊夫雷亚的 Olivetti 工厂群）与宗教建筑（米兰贫民圣母堂 Madonna dei Poveri），为战后意大利工业现代设计奠定基石。",
        "artworks": [
          {
            "id": "villa-figini",
            "title": "Villa Figini (菲吉尼别墅)",
            "date": "1934",
            "location": "米兰记者村 (Villaggio dei Giornalisti, Milan)",
            "image": "/images/artworks/villa-figini.jpg",
            "notes": "菲吉尼为自己设计的先锋私人住宅。严格遵循勒·柯布西耶新建筑五点原则：底层纤细立柱架空（Pilotis）、条形水平窗、自由平面、自由立面与屋顶日光浴花园，是意大利第一座彻底体现纯粹主义与理性主义居住理念的独栋别墅。",
            "knowledgePoints": [
              "意大利首座实践柯布西耶'新建筑五点'的理性主义先锋住宅",
              "底层全部架空于细长混凝土立柱之上，与花园植被贯通",
              "水平长窗与悬挑露台构成的漂浮轻盈体量感"
            ],
            "titleEn": "Villa Figini",
            "titleZh": "菲吉尼别墅",
            "museum": "Villa Figini (Private Landmark)",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://www.lombardiabeniculturali.it/architetture/schede/3m080-00050/"
          }
        ]
      },
      {
        "id": "gio-ponti",
        "name": "吉奥·庞蒂",
        "englishName": "Giò Ponti",
        "years": "1891 - 1979",
        "avatar": "/images/artists/gio-ponti.jpg",
        "bio": "意大利建筑大师、工业设计师、家具大师、教育家与出版家，战后意大利设计与建筑复兴的教父级人物。1928年创办传奇设计杂志《Domus》并终身主导，1936至1961年在米兰理工大学建筑学院任教，1954年创立世界顶尖设计大奖金罗盘奖（Compasso d'Oro）。在长达60年职业生涯中建造了百余座建筑并设计了超轻椅（Superleggera）等传世名作。",
        "artworks": [
          {
            "id": "pirelli-tower",
            "title": "Pirelli Tower (倍耐力大厦 / 普雷利大楼)",
            "date": "1956 - 1958 (1960)",
            "location": "米兰中央车站前广场 (Piazza Duca d'Aosta, Milan)",
            "image": "/images/artworks/pirelli-tower.jpg",
            "notes": "米兰战后现代主义与结构理性主义的巅峰天际线象征。庞蒂与著名结构工程师皮埃尔·路易吉·奈尔维（Pier Luigi Nervi）合作，高127.1米，采用六角菱形六面体纤薄翼状收分造型，彻底摆脱传统方盒子摩天楼范式，展现出惊人的结构轻盈与动感优雅。",
            "knowledgePoints": [
              "米兰战后经济复兴与现代摩天楼标志性纪念碑",
              "庞蒂与工程巨匠 Nervi 联手打造的变截面预应力混凝土核心筒体系",
              "两端逐渐收窄成锐角的六边形菱形平面（Diamond Floor Plan）",
              "悬浮屋顶挑檐与通透玻璃幕墙带来的视觉失重感"
            ],
            "titleEn": "Pirelli Tower",
            "titleZh": "倍耐力大厦",
            "museum": "Palazzo Pirelli (Regione Lombardia)",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://www.consiglio.regione.lombardia.it/"
          }
        ]
      },
      {
        "id": "bbrp",
        "name": "BBPR 建筑事务所",
        "englishName": "BBPR (Banfi, Belgiojoso, Peressutti, Rogers)",
        "years": "1932 - 1970s",
        "avatar": "/images/artists/bbrp.jpg",
        "bio": "1932年由四位米兰理工大学毕业生 Gianluigi Banfi、Lodovico Barbiano di Belgiojoso、Enrico Peressutti 与 Ernesto Nathan Rogers 共同创立的著名先锋建筑工作室。他们参与MIAR并主导《Quadrante》与《Casabella》期刊，二战后探索历史语境与现代主义融合的新自由主义（Neo-Liberty）与情境理性主义。",
        "artworks": [
          {
            "id": "velasca-tower",
            "title": "Velasca Tower (维拉斯加塔 / 韦拉斯卡大楼)",
            "date": "1956 - 1958",
            "location": "米兰市中心 (Piazza Velasca, Milan)",
            "image": "/images/artworks/velasca-tower.jpg",
            "notes": "战后新自由主义与米兰历史文脉对话的争议性杰作。高达106米，下部为办公空间，上部住宅部分向外悬挑放大，通过外露的斜向混凝土支撑骨架致敬中世纪伦巴第砖石城堡与斯福尔扎城堡（Castello Sforzesco）的防御悬楼形制，成为现代与历史共存的经典范式。",
            "knowledgePoints": [
              "新自由主义（Neo-Liberty）与历史文脉主义代表作",
              "蘑菇形外挑高层悬臂结构与外露斜撑桁架力学体系",
              "与米兰大教堂中世纪哥特飞扶壁意象的跨时空隐喻",
              "下层紧凑办公与上层开敞居住的复合功能分区"
            ],
            "titleEn": "Velasca Tower",
            "titleZh": "维拉斯加塔",
            "museum": "Torre Velasca (Milan Landmark)",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://www.lombardiabeniculturali.it/architetture/schede/3m080-00051/"
          }
        ]
      }
    ],
    "era": "理性主义与国际式 (1926-1958)",
    "eraEn": "Rationalism"
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
            "titleZh": "少女浪漫连环画",
            "museum": "Roy Lichtenstein Foundation / Private Collection",
            "museumCity": "New York, USA",
            "museumUrl": "https://lichtensteinfoundation.org/"
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
            "titleZh": "看，米奇！",
            "museum": "National Gallery of Art",
            "museumCity": "Washington, D.C., USA",
            "museumUrl": "https://www.nga.gov/collection/art-object-page.71479.html"
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
            "titleZh": "坎贝尔罐头汤",
            "museum": "Museum of Modern Art (MoMA)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/79739"
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
            "titleZh": "枪击玛丽莲·梦露",
            "museum": "Private Collection (Sold at Christie’s 2022)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.christies.com/en/lot/lot-6367500"
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
            "titleZh": "著名的黄色大香蕉",
            "museum": "The Andy Warhol Museum",
            "museumCity": "Pittsburgh, USA",
            "museumUrl": "https://www.warhol.org/"
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
            "titleZh": "猫王埃尔维斯·普雷斯利",
            "museum": "Art Gallery of Ontario / MoMA",
            "museumCity": "Toronto / New York",
            "museumUrl": "https://www.moma.org/collection/works/79905"
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
            "titleZh": "绿色可口可乐瓶",
            "museum": "Whitney Museum of American Art",
            "museumCity": "New York, USA",
            "museumUrl": "https://whitney.org/collection/works/1531"
          }
        ],
        "displayName": "Andy Warhol (安迪·沃霍尔)"
      }
    ],
    "category": "art",
    "displayName": "Pop Art (波普艺术)",
    "startYear": 1950,
    "chronologicalOrder": 16,
    "era": "战后波普与消费文化 (1950-1977)",
    "eraEn": "Pop Art"
  },
  {
    "id": "neo-expressionism-architecture",
    "category": "architecture",
    "name": "新表现主义建筑",
    "englishName": "Neo-Expressionism Architecture",
    "years": "1950 - 1996",
    "startYear": 1950,
    "chronologicalOrder": 17,
    "bgClass": "neo-expressionism-theme",
    "description": "新表现主义建筑打破了二战后国际风格千篇一律的方正盒子框架，强调建筑的情感表达、雕塑性空间与有机自由曲面。建筑师通过先进的钢筋混凝土薄壳、悬挑与双曲抛物面技术，将建筑化作城市与大地中具有崇高诗意的巨型雕塑。",
    "historicalContext": "20世纪50年代起，伴随战后工业化混凝土浇筑技术的成熟以及拉美、欧洲对现代性反思，奥斯卡·尼迈耶等大师在巴西利亚新首都与世界各地开辟了极具抒情张力的有机表现主义新时代。",
    "keyFeatures": [
      "连续起伏的有机曲线与雕塑般的纪念碑体量",
      "将钢筋混凝土的可塑性与结构力学推向极限",
      "强调光影与水面反射构成的戏剧性空间意境",
      "拒绝死板的教条功能主义，注入浪漫主义与诗意灵性"
    ],
    "artists": [
      {
        "id": "oscar-niemeyer",
        "name": "奥斯卡·尼迈耶",
        "englishName": "Oscar Niemeyer",
        "years": "1907 - 2012",
        "avatar": "/images/artists/oscar-niemeyer.jpg",
        "bio": "巴西现代主义与新表现主义建筑巨匠，被誉为'混凝土的诗篇雕塑家'，1988年普利兹克建筑奖得主。他主导了巴西新首都巴西利亚的标志性建筑群规划设计，并与柯布西耶共同设计联合国纽约总部大楼。尼迈耶以赞美女性身体与祖国山川蜿蜒起伏的自由曲线著称，赋予混凝土前所未有的轻盈与流动美感。",
        "artworks": [
          {
            "id": "cathedral-of-brasilia",
            "title": "Cathedral of Brasília (巴西利亚大教堂)",
            "date": "1958 - 1970",
            "location": "巴西利亚 (Brasília, Brazil)",
            "image": "/images/artworks/cathedral-of-brasilia.jpg",
            "notes": "尼迈耶最负盛名的宗教建筑杰作。由16根重达90吨的抛物线形混凝土曲柱围合成向天空升腾的王冠形状，柱间嵌以玛丽安·佩雷蒂（Marianne Peretti）设计的巨幅蓝白绿色透光玻璃彩窗，信徒通过地下暗道进入豁然开朗、充满神圣天光的悬浮大厅。",
            "knowledgePoints": [
              "16根抛物线形双曲面混凝土立柱构成的王冠形向心结构",
              "地下暗门进入与穹顶直射自然天光形成强烈的受难与复活对比",
              "巴西利亚列入联合国教科文组织世界文化遗产的核心地标"
            ],
            "titleEn": "Cathedral of Brasília",
            "titleZh": "巴西利亚大教堂",
            "museum": "Catedral Metropolitana de Brasília",
            "museumCity": "Brasília, Brazil",
            "museumUrl": "https://catedral.org.br/"
          },
          {
            "id": "niteroi-contemporary-art-museum",
            "title": "Niterói Contemporary Art Museum (尼泰罗伊当代艺术博物馆 / MAC)",
            "date": "1996",
            "location": "里约热内卢尼泰罗伊 (Niterói, Rio de Janeiro, Brazil)",
            "image": "/images/artworks/niteroi-contemporary-art-museum.jpg",
            "notes": "矗立在瓜纳巴拉湾悬崖海景之上的飞碟状建筑奇观。高16米、直径50米的三层圆盘主体仅由中央一根直径9米的圆柱支撑并扎根于人工水池中，一条长98米的蜿蜒红色坡道引导访客盘旋升入全景环形海景展厅。",
            "knowledgePoints": [
              "单点中心柱支撑的巨型倒圆台悬挑薄壳结构奇迹",
              "盘旋曲折的亮红色悬空步道与周围蓝色海湾的戏剧性对比",
              "360度全景观景窗将里约热内卢糖面包山与大西洋尽收眼底"
            ],
            "titleEn": "Niterói Contemporary Art Museum",
            "titleZh": "尼泰罗伊当代艺术博物馆",
            "museum": "Museu de Arte Contemporânea de Niterói",
            "museumCity": "Niterói, Brazil",
            "museumUrl": "http://culturavaniteroi.com.br/macniteroi/"
          }
        ]
      }
    ],
    "era": "战后新表现与有机形态 (1950-1996)",
    "eraEn": "Neo-Expressionism"
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
            "titleZh": "秋天的节奏",
            "museum": "Metropolitan Museum of Art",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.metmuseum.org/art/collection/search/488978"
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
            "titleZh": "第一号：1950年第31号",
            "museum": "Museum of Modern Art (MoMA)",
            "museumCity": "New York, USA",
            "museumUrl": "https://www.moma.org/collection/works/78386"
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
            "titleZh": "空间概念",
            "museum": "Fondazione Lucio Fontana / Tate Modern",
            "museumCity": "Milan / London",
            "museumUrl": "https://fondazioneluciofontana.it/en/"
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
            "titleZh": "空间概念",
            "museum": "Centre Pompidou / Peggy Guggenheim Collection",
            "museumCity": "Paris / Venice",
            "museumUrl": "https://www.centrepompidou.fr/"
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
            "titleZh": "艺术家之粪",
            "museum": "Tate Modern / Centre Pompidou / Museo del Novecento",
            "museumCity": "London / Paris / Milan",
            "museumUrl": "https://www.tate.org.uk/art/artworks/manzoni-artists-shit-t07667"
          }
        ],
        "displayName": "Piero Manzoni (皮耶罗·曼佐尼)"
      }
    ],
    "category": "art",
    "displayName": "Contemporary Art (当代艺术)",
    "startYear": 1950,
    "chronologicalOrder": 18,
    "era": "战后当代艺术 (1950-至今)",
    "eraEn": "Contemporary Art"
  },
  {
    "id": "high-tech-architecture",
    "category": "architecture",
    "name": "高技派建筑",
    "englishName": "High-Tech Architecture",
    "years": "1970 - 2002",
    "startYear": 1970,
    "chronologicalOrder": 19,
    "bgClass": "high-tech-theme",
    "description": "高技派（结构表现主义）建筑兴起于20世纪70年代，倡导将工业技术、精密工程结构、设备管线与机械美学诚实地暴露在外立面。通过预制金属桁架、张拉索网、透光采光顶与灵动设备舱，创造具有高灵活性、透明度与时代科技感的开放公共空间。",
    "historicalContext": "在第三次科技革命与太空时代工业材料（轻质钢、钛合金、聚合物玻璃）飞跃背景下诞生，伦佐·皮亚诺、理查德·罗杰斯与诺曼·福斯特等先锋打破了传统建筑'围护包裹结构'的定势，开创了机器美学与生态技术的新时代。",
    "keyFeatures": [
      "建筑内部承重骨架、通风电梯与设备管网彻底外置裸露",
      "色彩编码系统：蓝色空调管、绿色水管、黄色电气与红色消防动线",
      "大跨度无柱开放空间，实现室内功能的高度弹性重构",
      "高精度工业预制构件与精细节点连接工艺"
    ],
    "artists": [
      {
        "id": "renzo-piano",
        "name": "伦佐·皮亚诺",
        "englishName": "Renzo Piano",
        "years": "1937 - ",
        "avatar": "/images/artists/renzo-piano.jpg",
        "bio": "意大利国宝级高技派与当代建筑大师，1998年普利兹克奖得主，意大利终身参议员。他善于将尖端机械工程技术、自然光线精细化漫射与当地地域文脉完美结合。代表作包括巴黎蓬皮杜中心、新喀里多尼亚吉巴欧文化中心、伦敦碎片大厦与罗马音乐公园礼堂。",
        "artworks": [
          {
            "id": "centre-pompidou",
            "title": "Centre Georges Pompidou (巴黎蓬皮杜艺术中心)",
            "date": "1971 - 1977",
            "location": "巴黎博堡区 (Paris, France)",
            "image": "/images/artworks/centre-pompidou.jpg",
            "notes": "高技派建筑里程碑与世界建筑史转折点。皮亚诺与理查德·罗杰斯（Richard Rogers）合作设计，将承重钢结构桁架（Gerberettes）与所有机电管线完全暴露在建筑外表，内部释放出跨度达48米、完全无立柱阻隔的超自由策展空间，外部红色玻璃自动扶梯管道斜跨整个立面。",
            "knowledgePoints": [
              "高技派（High-Tech）最具革命性的开山宣言之作",
              "外墙设备管线功能色彩编码体系（红/蓝/绿/黄）",
              "无柱大空间与自由模块化策展体系彻底颠覆传统博物馆格局",
              "铸钢格伯梁（Gerberette）精巧铰接节点力学体系"
            ],
            "titleEn": "Centre Georges Pompidou",
            "titleZh": "巴黎蓬皮杜艺术中心",
            "museum": "Centre Pompidou",
            "museumCity": "Paris, France",
            "museumUrl": "https://www.centrepompidou.fr/"
          },
          {
            "id": "tjibaou-cultural-centre",
            "title": "Jean-Marie Tjibaou Cultural Centre (吉巴欧文化中心)",
            "date": "1991 - 1998",
            "location": "努美阿 (Nouméa, New Caledonia)",
            "image": "/images/artworks/tjibaou-cultural-centre.jpg",
            "notes": "高科技与南太平洋美拉尼西亚传统卡纳克（Kanak）草屋建筑智慧的诗意融合。10座呈弧形排列的肋骨状木格栅壳体采用耐腐蚀的伊罗科木（Iroko）与双层通风立面，利用太平洋信风实现自然的被动式风压对流冷却。",
            "knowledgePoints": [
              "生态仿生与被动式风力对流冷却的高技术典范",
              "耐用木百叶结构随着海风与光线产生呼吸般的开合感",
              "对土著原住民历史记忆与岛屿自然生态的崇高致敬"
            ],
            "titleEn": "Jean-Marie Tjibaou Cultural Centre",
            "titleZh": "吉巴欧文化中心",
            "museum": "Centre Culturel Tjibaou",
            "museumCity": "Nouméa, New Caledonia",
            "museumUrl": "https://www.adck.nc/"
          },
          {
            "id": "auditorium-parco-della-musica",
            "title": "Auditorium Parco della Musica (罗马音乐公园礼堂)",
            "date": "1995 - 2002",
            "location": "罗马 (Rome, Italy)",
            "image": "/images/artworks/auditorium-parco-della-musica.jpg",
            "notes": "欧洲最大的多功能音乐文化复合体。由三座宛如巨型甲虫或共鸣木质乐器的弧形铅皮穹顶音乐厅环绕一座露天圆形剧场分布，内部墙面采用双曲面樱桃木声学反射板，创造出世界顶级的声学共鸣环境。",
            "knowledgePoints": [
              "三座独立甲壳状声学建筑体量环抱露天圆形广场",
              "外覆防腐风化铅皮与内部樱桃木箱体构成的精密乐器式构造",
              "建造期间发掘古罗马庄园遗址并完美整合为原址考古博物馆"
            ],
            "titleEn": "Auditorium Parco della Musica",
            "titleZh": "罗马音乐公园礼堂",
            "museum": "Auditorium Parco della Musica Ennio Morricone",
            "museumCity": "Rome, Italy",
            "museumUrl": "https://www.auditorium.com/"
          }
        ]
      }
    ],
    "era": "高技派与结构表现 (1970-2002)",
    "eraEn": "High-Tech"
  },
  {
    "id": "deconstructivism-architecture",
    "category": "architecture",
    "name": "解构主义建筑",
    "englishName": "Deconstructivism Architecture",
    "years": "1988 - 2003",
    "startYear": 1988,
    "chronologicalOrder": 20,
    "bgClass": "deconstructivism-theme",
    "description": "解构主义建筑受后结构主义哲学（如德里达解构论）启发，以1988年纽约现代艺术博物馆（MoMA）解构主义建筑展为标志走向世界。该流派打破传统欧几里得几何学的垂直与水平正交体系，通过非线性形态、体量扭曲、倾斜断裂与动态解聚，展现非凡的视觉张力与反常规空间体验。",
    "historicalContext": "伴随冷战结束、后现代哲学深化与计算机辅助三维设计（CATIA等数字化造型软件）的突破，建筑师彻底摆脱了直线直角的建造束缚，开启了有机金属流线与雕塑张力的数字化解构时代。",
    "keyFeatures": [
      "非线性、断裂倾斜与反传统透视的碎片化造型",
      "钛合金薄板、曲面玻璃与不锈钢等复合现代材质的大胆拼接",
      "计算机辅助数字化三维参数化与复杂双曲面制造",
      "颠覆传统重力感与平稳感，呈现戏剧性的动感与解构张力"
    ],
    "artists": [
      {
        "id": "frank-gehry",
        "name": "弗兰克·盖里",
        "englishName": "Frank Gehry",
        "years": "1929 - ",
        "avatar": "/images/artists/frank-gehry.jpg",
        "bio": "加拿大裔美国当代建筑大师，解构主义建筑最著名的代表人物，1989年普利兹克奖得主。他在2010年世界建筑调查中被评为当代最具影响力的建筑巨匠，《名利场》称其为'我们这个时代最重要的建筑师'。盖里善于将廉价日常材料与惊人的复杂三维雕塑曲面结构结合，以毕尔巴鄂古根海姆博物馆引发了著名的'毕尔巴鄂效应'。",
        "artworks": [
          {
            "id": "dancing-house",
            "title": "Dancing House (跳舞的房子 / 布拉格弗莱德与琴吉大楼)",
            "date": "1992 - 1996",
            "location": "布拉格伏尔塔瓦河畔 (Prague, Czech Republic)",
            "image": "/images/artworks/dancing-house.jpg",
            "notes": "盖里与克罗地亚裔捷克建筑师弗拉多·米卢尼奇（Vlado Milunić）合作设计。大楼由一对如舞者般依偎起舞的动态双塔构成：左侧玻璃扭曲塔象征女舞者琴吉，右侧混凝土起伏窗格塔象征男舞者弗莱德，成为布拉格历史老城与现代解构艺术碰撞的标志地标。",
            "knowledgePoints": [
              "解构主义动态双体雕塑隐喻（Fred and Ginger 华尔兹舞姿）",
              "波浪起伏的混凝土墙面与不对称窗洞构成的流动韵律",
              "与布拉格伏尔塔瓦河畔历史街区的新旧共生典范"
            ],
            "titleEn": "Dancing House",
            "titleZh": "跳舞的房子",
            "museum": "Tančící dům (Dancing House Gallery)",
            "museumCity": "Prague, Czech Republic",
            "museumUrl": "https://www.tancici-dum.cz/"
          },
          {
            "id": "guggenheim-bilbao",
            "title": "Guggenheim Museum Bilbao (毕尔巴鄂古根海姆博物馆)",
            "date": "1997",
            "location": "毕尔巴鄂 (Bilbao, Spain)",
            "image": "/images/artworks/guggenheim-bilbao.jpg",
            "notes": "20世纪建筑史上的旷世杰作与解构主义巅峰之作。整座建筑由33,000块厚度仅0.38毫米的极薄钛合金鱼鳞状曲面包裹，如同一艘停泊在内维翁河畔的金色巨舰，随着光线变换呈现梦幻般的光泽，以一己之力振兴了整个工业衰退城市的经济，创造了著名的'毕尔巴鄂效应'。",
            "knowledgePoints": [
              "利用航空级三维软件 CATIA 打造的完全自由双曲面数字建造壮举",
              "有机流动的极薄钛金属（Titanium）表面与石灰石、玻璃复合幕墙",
              "改变城市命运的'毕尔巴鄂效应'（Bilbao Effect）经济与文化范例"
            ],
            "titleEn": "Guggenheim Museum Bilbao",
            "titleZh": "毕尔巴鄂古根海姆博物馆",
            "museum": "Museo Guggenheim Bilbao",
            "museumCity": "Bilbao, Spain",
            "museumUrl": "https://www.guggenheim-bilbao.eus/"
          },
          {
            "id": "walt-disney-concert-hall",
            "title": "Walt Disney Concert Hall (洛杉矶华特·迪士尼音乐厅)",
            "date": "1999 - 2003",
            "location": "洛杉矶市中心 (Los Angeles, California, USA)",
            "image": "/images/artworks/walt-disney-concert-hall.jpg",
            "notes": "洛杉矶交响乐团主场，当代声学与解构造型的极致结合。外立面由巨大翻滚、起伏的不锈钢板如扬起的风帆般层层叠叠，内部采用花形温润道格拉斯冷杉木打造的'葡萄园式'环绕声学大厅，创造出极致纯净的交响乐声效。",
            "knowledgePoints": [
              "抛光与雾面不锈钢板打造的风帆状金属雕塑群落",
              "日本著名声学大师丰田泰久参与调试的'葡萄园式'无瑕声学内胆",
              "洛杉矶市中心文化复兴核心引擎"
            ],
            "titleEn": "Walt Disney Concert Hall",
            "titleZh": "华特·迪士尼音乐厅",
            "museum": "Music Center / Los Angeles Philharmonic",
            "museumCity": "Los Angeles, USA",
            "museumUrl": "https://www.laphil.com/about/our-venues/walt-disney-concert-hall"
          }
        ]
      }
    ],
    "era": "解构主义与数字先锋 (1988-2003)",
    "eraEn": "Deconstructivism"
  },
  {
    "id": "contemporary-architecture",
    "category": "architecture",
    "name": "当代建筑",
    "englishName": "Contemporary Architecture",
    "years": "1980 - 至今 (1984 - 2025)",
    "startYear": 1984,
    "chronologicalOrder": 21,
    "bgClass": "contemporary-arch-theme",
    "description": "当代建筑涵盖20世纪末至21世纪当下的前沿建筑探索，包括参数化主义（Parametricism）、仿生结构工程、历史创伤纪念碑建筑与绿色低碳可持续高层。建筑师利用前沿数字算法与复杂材料工程，探索建筑在都市重生、生态共存与文化象征层面的全新维度。",
    "historicalContext": "全球化进程、数字革命与超级都市扩张推动当代建筑跨越地域边界。丹尼尔·里伯斯金、诺曼·福斯特、圣地亚哥·卡拉特拉瓦与扎哈·哈迪德等全球大师在米兰、柏林、罗马、纽约与巴塞罗那等历史都市留下了极具视觉震撼力的世纪地标。",
    "keyFeatures": [
      "参数化曲面（Parametric Curves）与计算几何生成设计",
      "仿生骨骼结构工程与大跨度单塔斜拉桥梁体系",
      "创伤记忆空间与历史文脉的深层哲学解构",
      "透明绿色生态穹顶与可再生循环城市更新地标"
    ],
    "artists": [
      {
        "id": "daniel-libeskind",
        "name": "丹尼尔·里伯斯金",
        "englishName": "Daniel Libeskind",
        "years": "1946 - ",
        "avatar": "/images/artists/daniel-libeskind.jpg",
        "bio": "波兰裔美国当代建筑大师、艺术家与布景设计师，柏林犹太博物馆设计者与纽约世贸中心遗址重建总规划师。他以锐利的折线、倾斜裂隙与充满哲学张力的创伤记忆空间设计闻名，善于将历史苦难与未来希望转化为极具震撼力的空间诗学。",
        "artworks": [
          {
            "id": "jewish-museum-berlin",
            "title": "Jewish Museum Berlin (柏林犹太博物馆)",
            "date": "1999 - 2001",
            "location": "柏林 (Berlin, Germany)",
            "image": "/images/artworks/jewish-museum-berlin.jpg",
            "notes": "当代纪念性建筑最震撼的哲学典范。建筑平面呈曲折剧烈的闪电之字形（Zigzag），外覆锌钛合金板并被不规则的倾斜利刃状划痕窗洞切开；内部设置'地下三轴线'、贯穿全楼的'空白空间'（Void）与幽闭冰冷的大屠杀之塔（Holocaust Tower），将缺席与创伤直击人心。",
            "knowledgePoints": [
              "闪电之字形解构锌板立面与利刃切口状非对称采光裂隙",
              "贯穿整座建筑的五处贯通垂直'虚空'（Voids）象征历史的断裂",
              "由沙莱切特（Fallen Leaves）万片铸铁面孔构成的沉浸式记忆空间"
            ],
            "titleEn": "Jewish Museum Berlin",
            "titleZh": "柏林犹太博物馆",
            "museum": "Jüdisches Museum Berlin",
            "museumCity": "Berlin, Germany",
            "museumUrl": "https://www.jmberlin.de/"
          },
          {
            "id": "one-world-trade-center",
            "title": "One World Trade Center (世界贸易中心一号大楼 / 自由塔总体规划)",
            "date": "2002 - 2014",
            "location": "纽约曼哈顿下城 (New York City, USA)",
            "image": "/images/artworks/one-world-trade-center.jpg",
            "notes": "里伯斯金在2003年赢得世贸中心遗址重建总体规划（Master Plan: Memory Foundations）核心方案，高1776英尺（象征美国《独立宣言》发表年份1776年），八面八角形渐变倒角几何玻璃体向上收分，成为曼哈顿下城天际线上重生的不屈灯塔。",
            "knowledgePoints": [
              "里伯斯金世贸遗址总体规划（Memory Foundations）与'归零地'（Ground Zero）纪念水池",
              "建筑高度1776英尺（541.3米）象征历史独立与重生",
              "正方形基座渐变为八边形、再收束于顶部正方形的抗风倒角超高层工程"
            ],
            "titleEn": "One World Trade Center",
            "titleZh": "世界贸易中心一号大楼",
            "museum": "One World Observatory",
            "museumCity": "New York City, USA",
            "museumUrl": "https://www.oneworldobservatory.com/"
          }
        ]
      },
      {
        "id": "norman-foster",
        "name": "诺曼·福斯特",
        "englishName": "Norman Foster",
        "years": "1935 - ",
        "avatar": "/images/artists/norman-foster.jpg",
        "bio": "英国当代建筑泰斗、高科技建筑关键领军人物，1999年普利兹克奖得主与英国皇家建筑师学会金奖得主。他创立的 Foster + Partners 是全球顶尖建筑巨头。福斯特以将前沿生态可持续技术、透明结构与宏大历史建筑有机织补著称，代表作包括柏林国会大厦穹顶、伦敦小黄瓜（圣玛莉艾克斯30号）与大英博物馆大中庭。",
        "artworks": [
          {
            "id": "reichstag-dome",
            "title": "Reichstag Dome (柏林德国国会大厦玻璃穹顶)",
            "date": "1995 - 1999",
            "location": "柏林 (Berlin, Germany)",
            "image": "/images/artworks/reichstag-dome.jpg",
            "notes": "历史建筑与现代民主透明性结合的世界典范。福斯特在历经沧桑的19世纪历史石砌大厦顶部，架设了一座通体透明的高科技双曲面钢网玻璃穹顶。中央倒圆锥形镜面采光漏斗将阳光反射进下方的联邦议会大厅，公众可沿着双螺旋坡道盘旋上升俯瞰议员辩论与全城风光，生动诠释'人民凌驾于政客之上'的民主隐喻。",
            "knowledgePoints": [
              "双螺旋全景观光步道与中央倒锥形反光镜漏斗（Light Sculptor）",
              "被动式自然采光与热压通风生态节能系统",
              "公众视线俯瞰议会大厅的崇高现代民主政治象征"
            ],
            "titleEn": "Reichstag Dome",
            "titleZh": "柏林德国国会大厦玻璃穹顶",
            "museum": "Deutscher Bundestag (Reichstagsgebäude)",
            "museumCity": "Berlin, Germany",
            "museumUrl": "https://www.bundestag.de/besuche/kuppel-und-dachterrasse"
          }
        ]
      },
      {
        "id": "santiago-calatrava",
        "name": "圣地亚哥·卡拉特拉瓦",
        "englishName": "Santiago Calatrava",
        "years": "1951 - ",
        "avatar": "/images/artists/santiago-calatrava.jpg",
        "bio": "西班牙裔瑞士建筑大师、结构工程师与雕塑家。他以将人体骨骼、鸟类展翼与动植物仿生形态融入受力桥梁、火车站与大型公共场馆著称。卡拉特拉瓦将工程力学与纯白雕塑感推向神性境界，代表作包括巴塞罗那巴克德罗达桥、苏黎世施塔德霍芬火车站、瓦伦西亚艺术与科学城及纽约世贸交通枢纽（Oculus）。",
        "artworks": [
          {
            "id": "bac-de-roda-bridge",
            "title": "Bac de Roda Bridge (巴克·德·罗达桥 / 菲利佩二世大桥)",
            "date": "1984 - 1987",
            "location": "巴塞罗那 (Barcelona, Spain)",
            "image": "/images/artworks/bac-de-roda-bridge.jpg",
            "notes": "卡拉特拉瓦一举成名的国际代表作。大桥横跨两条被铁路割裂的街区，采用纯白色双重倾斜抛物线拱肋（Parabolic Arches），主拱与副拱向外倾斜28度形成如张开的双翼般的空间张拉索网，不仅承载车流，更为两侧行人开辟了雕塑般的开敞林荫步道。",
            "knowledgePoints": [
              "成对倾斜抛物线钢拱与悬索构成的三维自平衡空间力学体系",
              "缝合城市被铁轨割裂的两片街区的都市织补典范",
              "卡拉特拉瓦标志性骨骼感仿生纯白钢构美学的起点"
            ],
            "titleEn": "Bac de Roda Bridge",
            "titleZh": "巴克·德·罗达桥",
            "museum": "Pont de Bac de Roda (Public Landmark)",
            "museumCity": "Barcelona, Spain",
            "museumUrl": "https://www.barcelona.cat/"
          },
          {
            "id": "zurich-stadelhofen-station",
            "title": "Zurich Stadelhofen Railway Station (苏黎世施塔德霍芬火车站)",
            "date": "1983 - 1990",
            "location": "苏黎世市中心 (Zurich, Switzerland)",
            "image": "/images/artworks/zurich-stadelhofen-station.jpg",
            "notes": "现代交通建筑史上最具诗意的仿生杰作。车站依陡峭山坡地势而建，卡拉特拉瓦利用倾斜的预应力混凝土肋拱与外露的钢筋骨架支撑起上层人行绿化走廊，站台候车雨棚如肋骨与飞鸟翅膀般延展，光影穿透其间如行经巨大的史前生物胸腔。",
            "knowledgePoints": [
              "贴合自然陡坡地形的多层立体复合交通与绿化人行系统",
              "仿生肋骨架（Ribbed Framework）悬臂结构与活动遮阳格栅",
              "混凝土、钢构与玻璃精雕细琢的无缝工业手工质感"
            ],
            "titleEn": "Zurich Stadelhofen Railway Station",
            "titleZh": "苏黎世施塔德霍芬火车站",
            "museum": "Bahnhof Zürich Stadelhofen",
            "museumCity": "Zurich, Switzerland",
            "museumUrl": "https://www.sbb.ch/"
          }
        ]
      },
      {
        "id": "zaha-hadid",
        "name": "扎哈·哈迪德",
        "englishName": "Zaha Hadid",
        "years": "1950 - 2016",
        "avatar": "/images/artists/zaha-hadid.jpg",
        "bio": "伊拉克裔英国传奇女建筑师，参数化主义（Parametricism）巅峰代表，历史上首位女性普利兹克建筑奖得主（2004）。她早年受俄罗斯至上主义与构成主义深刻影响，将绘画抽象作为设计工具，随后利用计算流体力学与参数化算法，创造出前所未见、连绵无垠的流体曲面建筑宇宙。在米兰主导设计了CityLife住宅与哈迪德塔（Torre Hadid / Generali）。",
        "artworks": [
          {
            "id": "maxxi-rome",
            "title": "MAXXI (罗马国立二十一世纪艺术博物馆)",
            "date": "1998 - 2009 (2010)",
            "location": "罗马弗拉米尼奥区 (Rome, Italy)",
            "image": "/images/artworks/maxxi-rome.jpg",
            "notes": "哈迪德荣获英国皇家建筑师学会斯特林奖（Stirling Prize）的传世代表作。建筑由交织穿插的混凝土流线体量层叠构成，内部黑色悬浮钢楼梯与弯曲白墙引导参观者在连续起伏的多重空间长河中流淌，打破了传统静止房间的局限。",
            "knowledgePoints": [
              "荣获 RIBA Stirling Prize 斯特林最高荣誉建筑大奖",
              "连续浇筑的清水混凝土弯曲'流动墙体'（Flowing Concrete Ribbons）",
              "自由穿插的黑色发光悬挂楼梯与悬臂式出挑展厅"
            ],
            "titleEn": "MAXXI National Museum of 21st Century Arts",
            "titleZh": "罗马国立二十一世纪艺术博物馆",
            "museum": "Museo nazionale delle arti del XXI secolo (MAXXI)",
            "museumCity": "Rome, Italy",
            "museumUrl": "https://www.maxxi.art/"
          },
          {
            "id": "citylife-milan",
            "title": "CityLife Milan - Hadid Tower & Residences (米兰CityLife 哈迪德塔与流线公寓群)",
            "date": "2014 - 2020 (2025)",
            "location": "米兰三塔城 (CityLife, Milan, Italy)",
            "image": "/images/artworks/citylife-milan.jpg",
            "notes": "米兰世博会后最大的城市更新工程核心。哈迪德设计的忠利保险塔（Torre Generali / Lo Storto，高177米）随高度上升呈现优雅的螺旋扭转曲率；住宅区则由7座起伏层叠的流线型阳台公寓构成，将木材与明亮金属板融为一体，重塑了米兰现代都市天际线。",
            "knowledgePoints": [
              "44层垂直轴向自底向上平滑扭转（The Twisted Tower）参数化结构",
              "CityLife三塔汇聚之作（Isozaki 阿里安兹塔 / Hadid 忠利塔 / Libeskind 普华永道塔）",
              "流线型自然木质阳台与现代绿色环保建筑最高认证 LEED 白金级"
            ],
            "titleEn": "CityLife Milan - Hadid Tower & Residences",
            "titleZh": "米兰CityLife 哈迪德塔与流线公寓群",
            "museum": "CityLife Milano District (Piazza Tre Torri)",
            "museumCity": "Milan, Italy",
            "museumUrl": "https://www.city-life.it/"
          }
        ]
      }
    ],
    "era": "当代前沿建筑 (1984-2025)",
    "eraEn": "Contemporary Architecture"
  }
];

export const ARCHITECTURE_EXAM_QUESTIONS = [
  {
    id: "exam-greek-theatre",
    category: "architecture",
    question: "在古希腊与古罗马剧场形制对比中，依山而建、拥有超过半圆马蹄形观众席（Koilon/Cavea）与圆形乐池（Orchestra）的剧场属于：",
    options: ["希腊剧场 (Greek Theatre)", "罗马剧场 (Roman Theatre)", "伊特鲁里亚剧场 (Etruscan)", "凯尔特剧场 (Celtic)"],
    answer: "希腊剧场 (Greek Theatre)",
    explanation: "古希腊剧场通常依自然山坡地势而建，观众席超过180度半圆；而古罗马剧场是建立在连续混凝土拱券结构之上的独立半圆形建筑。"
  },
  {
    id: "exam-orders-match",
    category: "architecture",
    question: "古典建筑柱式从左至右依次为：无柱础厚重圆柱配简单柱头、带卷涡（Volute）柱头、带有莨苕叶（Acanthus）华丽花篮柱头，其对应柱式是：",
    options: [
      "A-多立克 (Doric), B-爱奥尼 (Ionic), C-科林斯 (Corinthian)",
      "A-多立克 (Doric), B-科林斯 (Corinthian), C-爱奥尼 (Ionic)",
      "A-塔斯干 (Tuscan), B-爱奥尼 (Ionic), C-米诺斯 (Minoan)",
      "A-爱奥尼 (Ionic), B-多立克 (Doric), C-复合柱式 (Composite)"
    ],
    answer: "A-多立克 (Doric), B-爱奥尼 (Ionic), C-科林斯 (Corinthian)",
    explanation: "古希腊三大经典柱式发展序列：朴实有力的多立克柱式 -> 优雅卷涡的爱奥尼柱式 -> 繁复莨苕叶花篮的科林斯柱式。"
  },
  {
    id: "exam-temple-peripteros",
    category: "architecture",
    question: "四周完全被单排独立连续列柱（Peristyle）环绕的古典神庙平面形制称为：",
    options: ["围柱式 (Peripteros)", "假围柱式 (Pseudoperipteros)", "前廊式 (Prostyle)", "双头前廊式 (Amphiprostyle)"],
    answer: "围柱式 (Peripteros)",
    explanation: "围柱式（Peripteros）是指神庙核心内殿（Cella）四周被单圈柱廊（Colonnade）环绕的典型希腊神庙平面（如帕特农神庙）。"
  },
  {
    id: "exam-latin-cross",
    category: "architecture",
    question: "在基督教大教堂平面形制中，纵向中殿（Longitudinal Arm）长于横向耳堂（Transverse Arm）的十字形平面被称为：",
    options: ["拉丁十字 (Latin Cross)", "希腊十字 (Greek Cross)", "陶形十字 (Tau Cross / T形)", "圣安德烈十字 (St. Andrew's Cross)"],
    answer: "拉丁十字 (Latin Cross)",
    explanation: "纵向长臂大于横向短臂的为拉丁十字（西欧大教堂最主流形制）；四臂等长对称的为希腊十字（拜占庭与文艺复兴集中式推崇）。"
  },
  {
    id: "exam-rocchio-shaft",
    category: "architecture",
    question: "在古典柱式建造技术中，构成石柱柱身（Shaft）的每一块独立圆柱形叠合石块在建筑术语中被称为：",
    options: ["柱鼓 (Rocchio / Rocchi)", "柱础 (Base)", "柱顶过梁 (Architrave)", "柱顶饰 (Cippo)"],
    answer: "柱鼓 (Rocchio / Rocchi)",
    explanation: "石柱柱身通常由数块圆柱形石块叠合而成，每块称为柱鼓（Rocchio），中间通过金属销钉与熔铅固定。"
  },
  {
    id: "exam-grotesque-domus-aurea",
    category: "architecture",
    question: "文艺复兴时期流行的建筑与室内装饰纹样'怪诞纹饰'（Grotesque / Grottesche）最初源自对哪处古罗马遗址地下彩绘的发掘：",
    options: ["尼禄金宫 (Domus Aurea)", "庞贝古城壁画 (Pompeian Fresco)", "埃特鲁斯坎墓穴 (Etruscan Tombs)", "罗马万神庙 (Pantheon)"],
    answer: "尼禄金宫 (Domus Aurea)",
    explanation: "文艺复兴学者在地底洞穴（Grotte）中发掘出古罗马尼禄皇帝金宫（Domus Aurea）轻盈奇幻的彩绘壁画，因而定名为 Grottesche。"
  },
  {
    id: "exam-flying-buttress",
    category: "architecture",
    question: "哥特式大教堂中，从外墙上部跨空延伸至独立厚重墩柱（Pier）上以传递拱顶外推力的倾斜拱券结构被称为：",
    options: ["飞扶壁 (Flying Buttress / Arc-boutant)", "暗楼盲拱 (Triforium)", "贴墙浅柱 (Lesene)", "塞利奥拱 (Serliana)"],
    answer: "飞扶壁 (Flying Buttress / Arc-boutant)",
    explanation: "飞扶壁（Flying Buttress）是哥特力学革命核心，它将高耸中殿肋拱顶产生的巨大侧向外推力跨空传导至外侧的巨型墩柱上，使外墙得以彻底开窗。"
  },
  {
    id: "exam-parma-baptistery",
    category: "architecture",
    question: "帕尔马洗礼堂（Baptistery of Parma）外立面最显著的建筑形式特征是：",
    options: [
      "四层连续平过梁式开敞凉廊 (A succession of architraved loggias)",
      "尖券盲拱体系 (Pointed blind arcades)",
      "全封闭无开口糙石外墙 (Rusticated blind walls)",
      "双塔哥特式门廊 (Twin tower portal)"
    ],
    answer: "四层连续平过梁式开敞凉廊 (A succession of architraved loggias)",
    explanation: "帕尔马洗礼堂由安特拉米建造，外立面八角形红大理石环绕着四层平过梁式开敞柱廊（Architraved Loggias），极具韵律感。"
  }
];

export const getQuizQuestions = (category = 'all') => {
  const questions = [];
  
  // 1. Add questions generated from artworks & architecture
  artData.forEach(movement => {
    if (category !== 'all' && movement.category !== category) return;
    movement.artists.forEach(artist => {
      artist.artworks.forEach(work => {
        if (work.knowledgePoints && work.knowledgePoints.length > 0) {
          questions.push({
            id: `${movement.id}-${artist.id}-${work.id}`,
            movementId: movement.id,
            movementName: movement.name,
            artistId: artist.id,
            artistName: artist.name,
            artworkId: work.id,
            artworkTitle: work.title,
            artworkImage: work.image,
            category: movement.category,
            question: `作品/地标《${work.titleZh || work.title}》属于哪位大师/学派的代表作？`,
            options: [
              artist.name,
              ...artData.flatMap(m => m.artists.filter(a => a.id !== artist.id).map(a => a.name)).slice(0, 3)
            ].sort(() => 0.5 - Math.random()),
            answer: artist.name,
            explanation: work.notes
          });
        }
      });
    });
  });

  // 2. Add authentic architectural exam questions if applicable
  if (category === 'all' || category === 'architecture') {
    ARCHITECTURE_EXAM_QUESTIONS.forEach(eq => {
      questions.push({
        id: eq.id,
        category: 'architecture',
        movementName: '建筑历史与构造考点',
        question: eq.question,
        options: eq.options,
        answer: eq.answer,
        explanation: eq.explanation
      });
    });
  }

  return questions.sort(() => 0.5 - Math.random()).slice(0, 10);
};
