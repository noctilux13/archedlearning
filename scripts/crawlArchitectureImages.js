import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ARTWORKS_DIR = path.join(__dirname, '../public/images/artworks');
const ARTISTS_DIR = path.join(__dirname, '../public/images/artists');
const CACHE_DIR = path.join(__dirname, '../public/images/cache');
const DATA_DIR = path.join(__dirname, '../public/data');

[ARTWORKS_DIR, ARTISTS_DIR, CACHE_DIR, DATA_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

// Architecture Movements Data Definition
export const architectureMovements = [
  {
    id: "baroque-architecture",
    category: "architecture",
    name: "巴洛克建筑",
    englishName: "Baroque Architecture",
    years: "16世纪末 - 18世纪中叶 (1568 - 1750)",
    bgClass: "baroque-theme",
    description: "巴洛克建筑起源于16世纪晚期的罗马，强调集中式空间、强烈的雕塑形体感、动感的曲面平面与立面。通过光影剧场效果、壁画、雕塑与建筑的总体艺术（Gesamtkunstwerk / 视觉艺术的统一）以及奢华昂贵的大理石与金银灰泥材质，营造令人敬畏的宗教与皇权震撼力。",
    historicalContext: "在罗马天主教反宗教改革（Counter-Reformation）的背景下诞生，教会希望通过宏伟、生动且极具感官煽动力的建筑形式重新吸引信徒，重塑罗马作为世界天主教中心的荣光。",
    keyFeatures: [
      "集中式空间与椭圆/复合几何平面",
      "动态雕塑形体与波浪起伏曲面立面",
      "建筑、光线、雕塑与天顶画的'总体艺术统一'",
      "奢华昂贵材质：彩色大理石、镀金灰泥（Stucco）与透视天顶画",
      "塞利奥式三联拱窗（Serliana）与神龛壁龛（Aedicula）的华丽变奏"
    ],
    artists: [
      {
        id: "giacomo-barozzi-da-vignola",
        name: "贾科莫·巴罗齐·达·维尼奥拉",
        englishName: "Giacomo Barozzi da Vignola",
        years: "1507 - 1573",
        avatar: "/images/artists/giacomo-barozzi-da-vignola.jpg",
        bio: "16世纪最伟大的意大利矫饰主义与早期巴洛克过渡期建筑大师之一。他与帕拉迪奥、塞利奥并称为将文艺复兴古典法则传播至全欧的三大建筑导师。代表作包括 Caprarola 法尔内塞庄园与罗马耶稣会总堂。",
        artworks: [
          {
            id: "church-of-the-gesu",
            title: "Church of the Gesù / 罗马耶稣堂 (耶稣会总会教堂)",
            date: "1568 - 1584",
            location: "罗马 (Rome)",
            image: "/images/artworks/church-of-the-gesu.jpg",
            notes: "反宗教改革建筑的开山祖师之作。单中殿无侧廊设计，两侧分布小礼拜堂，视线直通祭坛与辉煌穹顶，成为全世界数千座耶稣会教堂的原型范式。",
            knowledgePoints: [
              "反宗教改革最具影响力的母体教堂范式",
              "拉丁十字平面结合集中式大穹顶",
              "由维尼奥拉设计主体，德拉·波尔塔完成宏伟双层立面与大涡卷",
              "巴洛克总体艺术天顶画《耶稣圣名之胜利》（巴奇恰绘）"
            ]
          },
          {
            id: "villa-giulia",
            title: "Villa Giulia / 茱莉亚别墅 (教宗朱利叶斯三世庄园)",
            date: "1551 - 1553",
            location: "罗马 (Rome)",
            image: "/images/artworks/villa-giulia.jpg",
            notes: "维尼奥拉与阿曼纳蒂、瓦萨里合作设计的教宗郊野度假庄园。半圆形柱廊庭院与下沉式水神殿（Nymphaeum）构成了精妙的视线与光影流动层级。",
            knowledgePoints: [
              "矫饰主义庄园建筑经典代表",
              "半圆形多立克/爱奥尼柱廊与视轴对称设计",
              "精巧的下沉式泉水神殿与石雕水景"
            ]
          }
        ]
      },
      {
        id: "giacomo-della-porta",
        name: "贾科莫·德拉·波尔塔",
        englishName: "Giacomo della Porta",
        years: "1532 - 1602",
        avatar: "/images/artists/giacomo-della-porta.jpg",
        bio: "意大利著名建筑师与雕塑家，曾任罗马人民建筑师（Architetto del Popolo Romano）。他师承米开朗基罗与维尼奥拉，以完成米开朗基罗的圣彼得大教堂穹顶以及耶稣堂立面而闻名于世。",
        artworks: [
          {
            id: "gesu-facade",
            title: "Façade of the Church of the Gesù / 耶稣堂立面",
            date: "1571 - 1584",
            location: "罗马 (Rome)",
            image: "/images/artworks/gesu-facade.jpg",
            notes: "德拉·波尔塔重构了维尼奥拉的原始方案，采用双层壁柱叠涩立面，上下层之间以优美巨大的侧翼涡卷（Volutes）顺滑过渡，奠定了巴洛克教堂立面的经典母题。",
            knowledgePoints: [
              "巴洛克立面经典涡卷构图原型",
              "中央开间壁柱密集与山花套叠增强纵向吸引力",
              "成为天主教世界反宗教改革教堂立面的标准样板"
            ]
          }
        ]
      },
      {
        id: "francesco-borromini",
        name: "弗朗切斯科·博罗米尼",
        englishName: "Francesco Borromini",
        years: "1599 - 1667",
        avatar: "/images/artists/francesco-borromini.jpg",
        bio: "罗马巴洛克建筑最富独创性与叛逆精神的天才大师。博罗米尼精通几何学与结构力学，彻底颠覆了古典直角与平整法则，创立了凹凸波浪起伏曲面、复杂星形/蜂巢多边形平面与光影雕塑建筑。",
        artworks: [
          {
            id: "san-carlo-quattro-fontane",
            title: "San Carlo alle Quattro Fontane / 四喷泉圣卡罗教堂 (圣卡利诺)",
            date: "1638 - 1646",
            location: "罗马 (Rome)",
            image: "/images/artworks/san-carlo-quattro-fontane.jpg",
            notes: "博罗米尼的开山与终极杰作。在极其狭小的街角地块上，运用波浪般凹凸起伏的立面，以及由十字形、八角形与六角形凹陷藻井组成的椭圆形蜂巢穹顶，创造出令人惊叹的流动空间。",
            knowledgePoints: [
              "巴洛克波浪形动感立面（Undulating Facade）终极典范",
              "几何学构图：两个等边三角形相交组成的椭圆平面",
              "利用透视递减藻井营造虚幻深邃的穹顶天光"
            ]
          },
          {
            id: "sant-ivo-alla-sapienza",
            title: "Sant'Ivo alla Sapienza / 圣依佛堂 (罗马智慧大学教堂)",
            date: "1642 - 1660",
            location: "罗马 (Rome)",
            image: "/images/artworks/sant-ivo-alla-sapienza.jpg",
            notes: "位于罗马智慧大学庭院尽端，平面为两个交错的正三角形构成的大卫星（Hexagram），顶部以独特的螺旋上升式通心粉状塔刹（Spiral Lantern）直插云霄。",
            knowledgePoints: [
              "六角星几何平面与凹凸相间花瓣状内部空间",
              "前无古人的螺旋形巴洛克塔尖（Spiral Spire）",
              "象征智慧与神圣理性的几何学神作"
            ]
          }
        ]
      },
      {
        id: "gian-lorenzo-bernini",
        name: "吉安·洛伦佐·贝尔尼尼",
        englishName: "Gian Lorenzo Bernini",
        years: "1598 - 1680",
        avatar: "/images/artists/gian-lorenzo-bernini.jpg",
        bio: "17世纪巴洛克艺术的绝对领袖，集雕塑家、建筑师、画家与城市规划师于一身。他被誉为米开朗基罗的继承者，将雕塑、绘画与建筑融汇为戏剧化'视觉艺术的统一'（Unity of the Visual Arts）。",
        artworks: [
          {
            id: "piazza-san-pietro",
            title: "Piazza San Pietro / 梵蒂冈圣伯多禄大广场",
            date: "1656 - 1667",
            location: "梵蒂冈 / 罗马 (Vatican, Rome)",
            image: "/images/artworks/piazza-san-pietro.jpg",
            notes: "教皇国最宏伟的都市门厅。由四排巨大的托斯卡纳柱廊构成椭圆形广场，顶部矗立140尊圣人雕像，象征天主教会向全世界信徒张开热情的母性双臂。",
            knowledgePoints: [
              "4排共284根托斯卡纳多立克式巨柱构成的半圆形柱廊",
              "栏杆上方矗立140尊大理石圣徒雕像",
              "梯形广场与椭圆形广场相连构成的光学透视校正",
              "象征教会'张开双臂拥抱全世界信徒'（Maternal Arms）"
            ]
          },
          {
            id: "sant-andrea-quirinale",
            title: "Sant'Andrea al Quirinale / 奎里纳尔圣安德肋堂",
            date: "1658 - 1670",
            location: "罗马 (Rome)",
            image: "/images/artworks/sant-andrea-quirinale.jpg",
            notes: "贝尔尼尼本人最钟爱的建筑杰作。采用短轴正对主入口的横向椭圆形平面，雕塑圣安德肋升天的雕像被金色天光环绕，戏剧性达到极致。",
            knowledgePoints: [
              "横向椭圆平面（入口正对短轴主祭坛）",
              "建筑、雕塑与隐蔽光源剧场化融合的经典案例",
              "被贝尔尼尼自评为'唯一带给自己真正愉悦的建筑'"
            ]
          },
          {
            id: "palazzo-montecitorio",
            title: "Palazzo Montecitorio / 蒙特奇托里奥宫",
            date: "1653 - 1694",
            location: "罗马 (Rome)",
            image: "/images/artworks/palazzo-montecitorio.jpg",
            notes: "贝尔尼尼受教宗英诺森十世委托设计的宏伟贵族宫殿，现为意大利众议院所在地。多边形折线立面与毛石粗琢基座表现出自然山体般的雄浑力量。",
            knowledgePoints: [
              "分段折线形立面顺应街道走向",
              "底层粗糙质感的毛石（Rustication）基座设计",
              "后由卡洛·丰塔纳完成钟楼与最终修饰"
            ]
          },
          {
            id: "st-peters-baldachin",
            title: "St. Peter's Baldachin / 圣彼得大教堂青铜华盖",
            date: "1624 - 1633",
            location: "梵蒂冈圣彼得大教堂 (St. Peter's Basilica)",
            image: "/images/artworks/st-peters-baldachin.jpg",
            notes: "立于圣彼得墓穴与主祭坛之上的巨型青铜华座，高近30米（约四层楼）。由4根巨大的所罗门螺旋扭纹柱支撑，是贝尔尼尼与博罗米尼早年合作的旷世巨构。",
            knowledgePoints: [
              "融铜自罗马万神殿门廊青铜构件",
              "巴洛克螺旋扭纹柱（Solomonic Columns）典范",
              "世界最大雕塑与建筑结合体之一，高29米"
            ]
          }
        ]
      },
      {
        id: "guarino-guarini",
        name: "瓜里诺·瓜里尼",
        englishName: "Guarino Guarini",
        years: "1624 - 1683",
        avatar: "/images/artists/guarino-guarini.jpg",
        bio: "皮埃蒙特巴洛克学派巅峰代表，泰亚蒂派修道士、杰出数学家与建筑理论家。他的石构建筑代表了巴洛克结构工程学的极限，其《民用建筑论》（Architettura Civile）深刻启发了南德与奥地利晚期巴洛克与洛可可建筑。",
        artworks: [
          {
            id: "palazzo-carignano",
            title: "Palazzo Carignano / 都灵卡里尼亚诺宫",
            date: "1679",
            location: "都灵 (Turin, Italy)",
            image: "/images/artworks/palazzo-carignano.jpg",
            notes: "全红砖砌筑的巴洛克宫殿典范。中央立面采用波浪形凹凸起伏曲线，将砖石材料的雕塑可塑性发挥到极致，意大利统一后曾作为第一个议会所在地。",
            knowledgePoints: [
              "凹凸波浪形红砖立面与椭圆中央大厅",
              "无需大理石贴面、仅凭裸砖雕花展现的精湛技艺",
              "意大利复兴运动首届议会会址"
            ]
          },
          {
            id: "chapel-holy-shroud",
            title: "Chapel of the Holy Shroud / 裹尸布礼拜堂 (圣裹尸布小堂)",
            date: "1668 - 1694",
            location: "都灵主教座堂 (Turin Cathedral)",
            image: "/images/artworks/chapel-holy-shroud.jpg",
            notes: "建筑史上最令人称奇的几何结构穹顶。瓜里尼运用相互叠涩错落的拱券层层交错向上收缩，构成了光芒万丈的六角星形透空穹顶。",
            knowledgePoints: [
              "分层叠涩拱券构成的悬空六角星形穹顶透光奇迹",
              "黑色大理石与上方白光倾泻构成的耶稣受难与复活神学隐喻",
              "巴洛克结构工程学与高等数学几何结合的最高成就"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "neoclassical-architecture",
    category: "architecture",
    name: "新古典主义建筑",
    englishName: "Neoclassical Architecture",
    years: "18世纪中叶 - 19世纪中叶 (1750 - 1850)",
    bgClass: "neoclassical-theme",
    description: "新古典主义建筑是对洛可可繁复装饰的反叛与对古希腊、古罗马理性秩序的崇高回归。以庞贝与赫库兰尼姆古城重见天日为契机，强调立方形、圆柱体、球体等纯粹几何体量，追求宏伟沉重、端庄严谨的纪念碑式秩序与古典柱式法则。",
    historicalContext: "伴随启蒙运动（Enlightenment）的理性光芒、法国大革命与拿破仑帝国崛起，新古典主义成为理性主义、公民美德与帝国威严的官方建筑语言。",
    keyFeatures: [
      "灵感源于古希腊神庙与古罗马万神殿/凯旋门",
      "纯粹几何体组合：立方体、圆柱体、球体、金字塔",
      "巨大沉重、严谨对称的纪念碑式体量感（Massive & Severe）",
      "标准的古典五柱式门廊与三角山花（Pediment）",
      "反对洛可可式琐碎浮华，推崇清醒冷静的理性秩序"
    ],
    artists: [
      {
        id: "filippo-juvarra",
        name: "菲利波·尤瓦拉",
        englishName: "Filippo Juvarra",
        years: "1678 - 1736",
        avatar: "/images/artists/filippo-juvarra.jpg",
        bio: "意大利晚期巴洛克向新古典主义过渡的核心大师，身兼建筑师、舞台美术师、雕刻师与金匠。在都灵与西西里创作了众多辉煌建筑，其作品具备古典清晰的轮廓与戏剧化的大气象。",
        artworks: [
          {
            id: "basilica-of-superga",
            title: "Basilica of Superga / 苏佩尔加大教堂",
            date: "1717 - 1731",
            location: "都灵苏佩尔加山顶 (Turin, Italy)",
            image: "/images/artworks/basilica-of-superga.jpg",
            notes: "矗立在都灵阿尔卑斯雪山背景前的壮丽圣殿。由高耸的万神殿式八柱门廊与巍峨的集中式圆顶结合，展现出晚期巴洛克走向清醒古典理性的转折典范。",
            knowledgePoints: [
              "古罗马万神殿式深进深立柱门廊",
              "集中式高耸圆顶与双侧对称钟楼",
              "萨伏依王室墓地所在地，雪山映衬下的地标杰作"
            ]
          }
        ]
      },
      {
        id: "luigi-vanvitelli",
        name: "路易吉·万维泰利",
        englishName: "Luigi Vanvitelli",
        years: "1700 - 1773",
        avatar: "/images/artists/luigi-vanvitelli.jpg",
        bio: "18世纪意大利最负盛名的建筑巨擘，以设计卡塞塔王宫名扬欧洲。他践行了一种严谨清醒的学院派晚期巴洛克风格，为意大利全面走向新古典主义铺平了道路。",
        artworks: [
          {
            id: "palace-of-caserta",
            title: "Royal Palace of Caserta / 卡塞塔王宫",
            date: "1752 - 1774",
            location: "卡塞塔 (Caserta, Italy)",
            image: "/images/artworks/palace-of-caserta.jpg",
            notes: "世界最大的前王家宫殿之一（被称为意大利的凡尔赛宫）。整座建筑长达247米，拥有1200间房间、4座对称内庭院以及延伸数公里的宏大中轴线御花园瀑布群。",
            knowledgePoints: [
              "长方形四合院大矩形平面，由十字通道划分为4个规整内院",
              "宏伟壮丽的中央八角形换向大厅与双向大理石皇家阶梯",
              "联合国教科文组织世界文化遗产，古典严谨轴线与壮阔园林"
            ]
          },
          {
            id: "palace-of-naples",
            title: "Royal Palace of Naples / 那不勒斯王宫",
            date: "1600 / 1753 修复",
            location: "那不勒斯保民广场 (Piazza del Plebiscito)",
            image: "/images/artworks/palace-of-naples.jpg",
            notes: "那不勒斯波旁王朝统治中心。万维泰利对其进行了关键的新古典主义修复与立面重构，赋予整座广场规整大气的古典韵律。",
            knowledgePoints: [
              "底层连续多立克拱廊与上层古典壁柱韵律",
              "那不勒斯城市核心政治与仪式中心"
            ]
          }
        ]
      },
      {
        id: "giuseppe-piermarini",
        name: "朱塞佩·皮尔马里尼",
        englishName: "Giuseppe Piermarini",
        years: "1734 - 1808",
        avatar: "/images/artists/giuseppe-piermarini.jpg",
        bio: "意大利新古典主义建筑领军大师，曾师从万维泰利，米兰布雷拉美术学院（Accademia di Brera）首任建筑学教授。他奠定了米兰作为欧洲新古典主义重镇的城市风貌。",
        artworks: [
          {
            id: "teatro-alla-scala",
            title: "Teatro alla Scala / 米兰斯卡拉大剧院",
            date: "1776 - 1778",
            location: "米兰 (Milan, Italy)",
            image: "/images/artworks/teatro-alla-scala.jpg",
            notes: "世界歌剧殿堂与声学奇迹。严谨对称的新古典主义三段式立面，底层为马车通行门廊，内部为典雅的马蹄形六层包厢大厅（2002-04年由瑞士建筑师马里奥·博塔 Mario Botta 争议性改造）。",
            knowledgePoints: [
              "新古典主义立面与多立克门廊通道",
              "马蹄形包厢声学剧场典范",
              "当代由建筑大师 Mario Botta 主持完成结构与舞台现代化扩建"
            ]
          },
          {
            id: "royal-palace-milan",
            title: "Royal Palace of Milan / 米兰王宫 (Palazzo Reale)",
            date: "1773 - 1778",
            location: "米兰大教堂广场旁 (Piazza del Duomo, Milan)",
            image: "/images/artworks/royal-palace-milan.jpg",
            notes: "米兰历代统治者核心宫邸。皮尔马里尼拆除了旧有部分建筑，构建了向大教堂广场开敞的新古典主义U形荣誉庭院与端庄立面。",
            knowledgePoints: [
              "U型向大教堂开敞的古典荣誉庭院（Cour d'Honneur）",
              "严整的爱奥尼/科林斯壁柱节奏与平屋顶檐口"
            ]
          }
        ]
      },
      {
        id: "claude-nicolas-ledoux",
        name: "克洛德·尼古拉·勒杜",
        englishName: "Claude Nicolas Ledoux",
        years: "1736 - 1806",
        avatar: "/images/artists/claude-nicolas-ledoux.jpg",
        bio: "法国新古典主义建筑的最早代表与激进乌托邦远见者。他主张用纯粹立方体、圆柱体等原始几何形体表达建筑的'能言性'（Architecture Parlante），其肖城理想城市（Ideal City of Chaux）规划影响深远。",
        artworks: [
          {
            id: "rotonde-de-la-villette",
            title: "La Rotonde de la Villette / 巴黎拉维莱特圆亭",
            date: "1788",
            location: "巴黎 (Paris, France)",
            image: "/images/artworks/rotonde-de-la-villette.jpg",
            notes: "巴黎旧城关税卡亭。以粗犷厚重的多立克希腊十字形基座托起巨大的中央纯圆柱体鼓座，体现出纯几何形体组合的巨大沉重感与公民威慑力。",
            knowledgePoints: [
              "纯粹几何形体（圆柱体 + 希腊十字基座）组合典范",
              "古希腊无底座多立克柱式的粗犷原始力量",
              "法国大革命前夕国家关税与城市防线地标"
            ]
          }
        ]
      },
      {
        id: "neoclassical-monuments-group",
        name: "欧美新古典主义纪念碑群",
        englishName: "Neoclassical Monuments Masters",
        years: "1790 - 1860",
        avatar: "/images/artists/neoclassical-monuments-group.jpg",
        bio: "新古典主义作为横扫欧美大陆的跨国风潮，在巴黎、华盛顿、米兰与慕尼黑等地诞生了代表国家主权、理性与民主理想的传世纪念碑。",
        artworks: [
          {
            id: "arc-de-triomphe",
            title: "Arc de Triomphe / 巴黎雄狮凯旋门",
            date: "1806 - 1836",
            location: "巴黎戴高乐星形广场 (Place Charles de Gaulle, Paris)",
            image: "/images/artworks/arc-de-triomphe.jpg",
            notes: "拿破仑为纪念奥斯特里茨战役胜利而下令建造。由沙尔格兰（Jean Chalgrin）设计，吸取罗马提图斯凯旋门灵感，高达50米，是世界最大、最宏伟的单一拱门纪念碑。",
            knowledgePoints: [
              "古罗马单一单跨凯旋门的宏大几何体量放大",
              "包含吕德著名浮雕《马赛曲 / 1792年志愿军出征》",
              "巴黎12条林荫大道汇聚的放射状几何轴线中心"
            ]
          },
          {
            id: "simplon-gate",
            title: "Arco della Pace (Simplon Gate) / 米兰和平门 (辛普朗门)",
            date: "1807 - 1838",
            location: "米兰森皮奥内公园 (Parco Sempione, Milan)",
            image: "/images/artworks/simplon-gate.jpg",
            notes: "意大利建筑师路易吉·卡尼奥拉（Luigi Cagnola）设计的古罗马三跨凯旋门杰作。正对连接米兰与巴黎的辛普朗古道终点，顶冠青铜和平六马战车。",
            knowledgePoints: [
              "由 Luigi Cagnola 设计的新古典主义三联拱凯旋门",
              "顶立青铜和平女神与六马战车（Sestiga della Pace）",
              "米兰拿破仑城市轴线'森皮奥内大道'的标志性门楼"
            ]
          },
          {
            id: "uva-rotunda",
            title: "University of Virginia Rotunda / 弗吉尼亚大学圆厅",
            date: "1817 - 1826",
            location: "美国夏洛茨维尔 (Charlottesville, Virginia, USA)",
            image: "/images/artworks/uva-rotunda.jpg",
            notes: "由美国《独立宣言》起草人兼建筑师托马斯·杰斐逊（Thomas Jefferson）设计。以古罗马万神殿1/2比例精准缩放，代表知识与理性照亮人类思想的学术殿堂。",
            knowledgePoints: [
              "托马斯·杰斐逊帕拉迪奥与新古典主义最高代表作",
              "古罗马万神殿半比例纯圆顶神庙缩影",
              "世界文化遗产，美国'学术村'规划核心"
            ]
          },
          {
            id: "white-house",
            title: "The White House / 美国白宫",
            date: "1792 - 1800",
            location: "华盛顿哥伦比亚特区 (Washington, D.C., USA)",
            image: "/images/artworks/white-house.jpg",
            notes: "爱尔兰建筑师詹姆斯·霍本（James Hoban）设计的美国总统府邸。灵感来自爱尔兰都柏林伦斯特府邸的帕拉迪奥新古典主义风范，端庄典雅。",
            knowledgePoints: [
              "由 James Hoban 赢取竞标设计",
              "弗吉尼亚阿奎亚砂岩砌筑，粉刷白色保护涂层",
              "爱奥尼双层门廊与对称庄重的国家元首府邸范本"
            ]
          },
          {
            id: "propylaea-munich",
            title: "Propylaea / 慕尼黑国王广场山门",
            date: "1854 - 1862",
            location: "慕尼黑国王广场 (Königsplatz, Munich, Germany)",
            image: "/images/artworks/propylaea-munich.jpg",
            notes: "由巴伐利亚宫廷建筑大师莱奥·冯·克伦策（Leo von Klenze）设计。纯正复刻雅典卫城山门（Propylaea），将多立克柱廊与两侧塔楼结合，使慕尼黑被誉为'伊萨尔河畔的雅典'。",
            knowledgePoints: [
              "Leo von Klenze 设计的纯正希腊复兴风格（Greek Revival）",
              "古希腊多立克神庙门廊结合双侧厚重塔楼",
              "为纪念巴伐利亚与希腊独立建交而立的城门纪念碑"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "industrial-architecture",
    category: "architecture",
    name: "工业革命铁构与玻璃建筑",
    englishName: "Industrial Revolution Architecture",
    years: "1851 - 1889",
    bgClass: "industrial-theme",
    description: "第一次工业革命催生了铸铁、熟铁、玻璃与钢材等全新工业建材的大规模量产。建筑彻底告别了厚重砖石劳作，迎来了预制装配式构件、超大跨度桁架空间与高耸铁塔，开启了建筑工程学的现代新纪元。",
    historicalContext: "大英帝国与欧洲工业化达到巅峰，1851年伦敦世博会与1889年巴黎世博会成为展示工业制造伟力、结构工程革命的全球舞台。",
    keyFeatures: [
      "铁与玻璃（Iron & Glass）的大规模结构化应用",
      "工厂标准化预制构件与现场模块化装配施工",
      "前所未有的超大无柱通透跨度与巨型展厅空间",
      "彻底摆脱传统砖石砌体自重束缚，追求轻盈通透与极致高度"
    ],
    artists: [
      {
        id: "joseph-paxton",
        name: "约瑟夫·帕克斯顿",
        englishName: "Joseph Paxton",
        years: "1803 - 1865",
        avatar: "/images/artists/joseph-paxton.jpg",
        bio: "英国著名园艺家与建筑工程创新大师。他将温室花房的铸铁与玻璃拼接原理创新性地应用于大型公共展馆，创造了划时代的水晶宫。",
        artworks: [
          {
            id: "crystal-palace",
            title: "The Crystal Palace / 伦敦水晶宫",
            date: "1851",
            location: "伦敦海德公园 (Hyde Park, London / 1851世博会)",
            image: "/images/artworks/crystal-palace.jpg",
            notes: "第一届万国工业博览会（1851 Great Exhibition）主展馆。长564米、占地超7万平方米，全部由预制铸铁肋拱与30万块标准平板玻璃在短短9个月内拼装完成，被视为现代建筑装配工业化的开端。",
            knowledgePoints: [
              "现代预制拼装建筑（Prefabrication）的始祖",
              "全玻璃与铁架结构，带来划时代的漫射采光与透明空间",
              "1851年首届伦敦世界博览会核心标志"
            ]
          }
        ]
      },
      {
        id: "gustave-eiffel",
        name: "居斯塔夫·埃菲尔",
        englishName: "Gustave Eiffel",
        years: "1832 - 1923",
        avatar: "/images/artists/gustave-eiffel.jpg",
        bio: "法国世界级桥梁与金属结构工程大师。以设计纽约自由女神像内部铁钢骨架、波尔多铁桥以及举世闻名的巴黎埃菲尔铁塔永载史册。",
        artworks: [
          {
            id: "eiffel-tower",
            title: "Eiffel Tower / 埃菲尔铁塔",
            date: "1887 - 1889",
            location: "巴黎战神广场 (Champ de Mars, Paris)",
            image: "/images/artworks/eiffel-tower.jpg",
            notes: "1889年巴黎世界博览会主入口拱门与法国大革命100周年纪念碑。高300米（在当时为世界最高人造建筑），由1.8万个锻铁构件与250万颗铆钉精密拼接而成，是金属结构美学的无上丰碑。",
            knowledgePoints: [
              "1889年巴黎世博会入口标志性构筑物",
              "世界第一座突破300米高度的纯锻铁格构结构（Puddle Iron）",
              "精密风洞计算与轻盈镂空桁架结构美学"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "art-nouveau-architecture",
    category: "architecture",
    name: "新艺术运动建筑",
    englishName: "Art Nouveau Architecture",
    years: "1890 - 1910",
    bgClass: "nouveau-theme",
    description: "新艺术运动（1890-1910）是一场横扫欧洲大陆的全面反学院派折衷主义风潮。在法国称 Art Nouveau，在英国称 Modern Style，在德国称 Jugendstil（青年风格），在奥地利称 Sezession（分离派），在意大利称 Stile Liberty 或 Stile Floreale（花卉风格）。以柔韧有力的植物生长线（鞭绳曲线 Whiplash line）与铸铁、马赛克、彩色玻璃的艺术化结合为灵魂。",
    historicalContext: "世纪之交的欧洲艺术家反抗千篇一律的工业机械冰冷感与历史复古主义，渴望以自然界的生机律动创造一种属于20世纪新时代的整体艺术生活方式。",
    keyFeatures: [
      "有机的曲线（Curved / Whiplash lines）与植物藤蔓、花卉图案（Floral motifs）",
      "新材料的装饰与结构合一：铸铁（Cast iron）、熟铁、透光玻璃与瓷砖",
      "打破传统盒子房间格局，创造流动贯通的自由空间与室内光井",
      "全方位'总体艺术'（Gesamtkunstwerk）：门窗、扶手、马赛克地坪、灯具一体化设计"
    ],
    artists: [
      {
        id: "victor-horta",
        name: "维克多·奥塔",
        englishName: "Victor Horta",
        years: "1861 - 1947",
        avatar: "/images/artists/victor-horta.jpg",
        bio: "比利时新艺术运动建筑领袖与奠基人。他首次将工业铸铁裸露于住宅室内，并用如同植物茎干般舒展蜿蜒的'鞭绳曲线'统领整个空间，被联合国列为世界文化遗产。",
        artworks: [
          {
            id: "hotel-tassel",
            title: "Hôtel Tassel / 塔塞尔公馆",
            date: "1893",
            location: "布鲁塞尔 (Brussels, Belgium)",
            image: "/images/artworks/hotel-tassel.jpg",
            notes: "公认的世界第一座完整的新艺术运动建筑。中庭中央那根纤细的铸铁立柱如树枝般在天花板上生出蔓藤状铁艺分叉，与地面马赛克波浪图案及彩色玻璃光线融为一体。",
            knowledgePoints: [
              "世界第一座成熟的新艺术运动住宅建筑（1893）",
              "标志性的铸铁楼梯扶手与天花'鞭绳曲线'（Whiplash Curves）",
              "彻底打破传统布鲁塞尔联排住宅阴暗格局，引入中央玻璃天顶采光"
            ]
          }
        ]
      },
      {
        id: "joseph-maria-olbrich",
        name: "约瑟夫·玛丽亚·奥尔布里希",
        englishName: "Joseph Maria Olbrich",
        years: "1867 - 1908",
        avatar: "/images/artists/joseph-maria-olbrich.jpg",
        bio: "奥地利维也纳分离派（Wiener Secession）联合创始人与核心建筑大师，师从奥托·瓦格纳。他为分离派艺术家设计了专属圣殿，是世纪之交中欧先锋艺术的领路人。",
        artworks: [
          {
            id: "secession-building",
            title: "Secession Building / 维也纳分离派展览馆",
            date: "1897 - 1898",
            location: "维也纳 (Vienna, Austria)",
            image: "/images/artworks/secession-building.jpg",
            notes: "维也纳分离派艺术运动的最高圣殿。纯净纯白的几何体量上方托举着一具由数千片镀金月桂树叶编织而成的镂空金球穹顶（被当地人亲切称为'金卷心菜'），门楣刻有名言'给每个时代以其艺术，给艺术以其自由'。",
            knowledgePoints: [
              "门楣名言：'Der Zeit ihre Kunst. Der Kunst ihre Freiheit'（给时代以艺术，给艺术以自由）",
              "由3000片镀金月桂叶构成的镂空金属球体圆顶（Golden Cabbage）",
              "馆内永久收藏古斯塔夫·克里姆特宏伟壁画《贝多芬饰带》"
            ]
          }
        ]
      },
      {
        id: "hector-guimard",
        name: "埃克托尔·吉马尔",
        englishName: "Hector Guimard",
        years: "1867 - 1942",
        avatar: "/images/artists/hector-guimard.jpg",
        bio: "法国新艺术运动最著名的大师，巴黎新艺术风格（Style Métro）的创造者。他将大自然的植物芽孢、昆虫翅膀形态通过模数化铸铁工艺工业化制造，让巴黎地铁成为流动的新艺术露天博物馆。",
        artworks: [
          {
            id: "paris-metro-entrances",
            title: "Paris Métro Entrances / 巴黎地铁站出入口 (Stazione metropolitana)",
            date: "1899 - 1904",
            location: "巴黎各主要地铁站 (Paris, France)",
            image: "/images/artworks/paris-metro-entrances.jpg",
            notes: "为1900年巴黎世博会配套地铁设计的出入口凉亭与栏杆。采用绿色青铜色铸铁造型，宛如从地下自然萌发的花茎与荷叶玻璃雨棚（龙虾尾状凉棚），成为巴黎城市最具浪漫诗意的永恒象征。",
            knowledgePoints: [
              "1900年巴黎世博会公共交通艺术设计的里程碑",
              "由模数化铸铁构件工业批量浇铸而成的植物形态（Edicules & Portiques）",
              "著名的独创'新艺术地铁字体'（Metropolitain Lettering）"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "expressionist-and-gaudi",
    category: "architecture",
    name: "表现主义建筑与高迪现代主义",
    englishName: "Expressionist Architecture & Catalan Modernisme",
    years: "1882 - 1930",
    bgClass: "expressionist-theme",
    description: "20世纪头几十年并驾齐驱的先锋建筑探索：在德国与中欧兴起表现主义建筑（Expressionist Architecture），以非晶体雕塑曲面、砖块表现主义（Brick Expressionism）与乌托邦水晶玻璃为特征；而在西班牙巴塞罗那，安东尼·高迪以无与伦比的自然仿生学、碎瓷拼贴（Trencadís）与悬链拱力学，开创了神级独特的加泰罗尼亚现代主义（Catalan Modernisme）。",
    historicalContext: "一战前后的动荡思潮促使建筑师打破传统功能主义的冰冷框架，追求极致的情感宣泄、神秘主义与从自然生物中汲取原初生命力的非凡构筑。",
    keyFeatures: [
      "充满雕塑感与动势的非对称曲面造型（Sculptural Plasticity）",
      "高迪的自然仿生学：双曲抛物面、螺旋柱、悬链线拱（Catenary Arches）",
      "废旧彩色陶瓷与碎玻璃拼贴工艺（Trencadís）",
      "表现主义的水晶玻璃狂想与动态光线折射（Glass Expressionism）"
    ],
    artists: [
      {
        id: "erich-mendelsohn",
        name: "埃里希·门德尔松",
        englishName: "Erich Mendelsohn",
        years: "1887 - 1953",
        avatar: "/images/artists/erich-mendelsohn.jpg",
        bio: "德国表现主义建筑大师与流体动态流线型建筑先驱。他将爱因斯坦的相对论物理概念融入建筑的流体雕塑中，创造了表现主义建筑最高丰碑爱因斯坦塔。",
        artworks: [
          {
            id: "einstein-tower",
            title: "Einstein Tower (Einsteinturm) / 爱因斯坦天文台",
            date: "1920 - 1921",
            location: "德国波茨坦 (Potsdam, Germany)",
            image: "/images/artworks/einstein-tower.jpg",
            notes: "为验证爱因斯坦相对论重力红移效应而建的太阳天文望远镜观测塔。如同一座从大地破土而出的流线型火山雕塑，圆润光滑的曲面消解了所有的传统折角，被爱因斯坦赞誉为'有机体（Organic）'。",
            knowledgePoints: [
              "表现主义有机流线型雕塑建筑巅峰杰作",
              "原设计为整体浇筑混凝土，实际由砖混抹灰精心塑形完成",
              "内部包含高精度的太阳望远镜与地下光学物理实验室"
            ]
          }
        ]
      },
      {
        id: "bruno-taut",
        name: "布鲁诺·陶特",
        englishName: "Bruno Taut",
        years: "1880 - 1938",
        avatar: "/images/artists/bruno-taut.jpg",
        bio: "德国表现主义先锋与'水晶链'（Glass Chain）乌托邦领袖。他坚信透明纯净的彩色玻璃能够净化人类心灵，开创了玻璃建筑新篇章。",
        artworks: [
          {
            id: "glass-pavilion",
            title: "Glass Pavilion (Glashaus) / 科隆玻璃展馆",
            date: "1914",
            location: "德国科隆德意志制造联盟展 (Cologne, Germany)",
            image: "/images/artworks/glass-pavilion.jpg",
            notes: "1914年科隆工业展上的水晶梦幻杰作。由菱形双层彩色玻璃构成的晶体多面体圆顶，下接混凝土圆柱基座与阶梯瀑布水池，底座环刻保罗·谢尔巴特的赞美诗。",
            knowledgePoints: [
              "表现主义'玻璃乌托邦'（Crystal/Glass Expressionism）宣言",
              "双层多面体彩色玻璃菱形网格圆顶（Prismatic Glass Dome）",
              "万花筒般的内部彩色光影阶梯与机械水幕"
            ]
          }
        ]
      },
      {
        id: "antoni-gaudi",
        name: "安东尼·高迪",
        englishName: "Antoni Gaudí",
        years: "1852 - 1926",
        avatar: "/images/artists/antoni-gaudi.jpg",
        bio: "西班牙建筑史上的神级天才，加泰罗尼亚现代主义的最伟大代表。高迪一生奉献给建筑、自然与上帝，他视大自然为最好的老师：'直线属于人类，曲线属于上帝'。开创了悬链线力学与废瓷拼贴（Trencadís）工艺，7项作品被列为联合国世界文化遗产。",
        artworks: [
          {
            id: "sagrada-familia",
            title: "Sagrada Família / 圣家族大教堂 (圣家堂)",
            date: "1882 - 至今在建",
            location: "西班牙巴塞罗那 (Barcelona, Spain)",
            image: "/images/artworks/sagrada-familia.jpg",
            notes: "人类建筑史上的不朽奇迹。拥有18座高耸入云的象征性尖塔，三大宏伟立面：东侧'诞生立面'（Nativity Facade，高迪亲手建造，充满自然万物雕刻）、西侧'受难立面'（Passion Facade，棱角峻峭）、南侧'荣耀立面'（Glory Facade）。内部立柱如同参天巨树与茂密森林，彩色玻璃洒下神圣天光。",
            knowledgePoints: [
              "世界唯一尚未完工就被列入世界文化遗产的旷世巨作",
              "三大立面：东面诞生立面（生机盎然）、西面受难立面（痛苦刚烈）、南面荣耀立面（永生）",
              "森林状分叉立柱（树状柱）与悬链线双曲抛物面结构",
              "高迪遗体安葬于圣家堂地下圣堂（Crypt）"
            ]
          },
          {
            id: "casa-mila",
            title: "Casa Milà (La Pedrera) / 米拉之家 (采石场)",
            date: "1906 - 1912",
            location: "西班牙巴塞罗那格拉西亚大道 (Passeig de Gràcia, Barcelona)",
            image: "/images/artworks/casa-mila.jpg",
            notes: "高迪设计的最后一座私人住宅。全建筑无一处承重墙，完全由钢柱与拱券支撑，外立面为起伏如波浪般的粗琢天然白石（被巴塞罗那市民称为采石场），屋顶矗立着如同中世纪戴盔武士的超现实主义烟囱群。",
            knowledgePoints: [
              "自由平面（Free Plan）先驱：全框架支撑，内部墙体可随意拆改",
              "波浪形起伏石材外立面与废铁扭曲锻造阳台栏杆",
              "魔幻屋顶露台：由武士头盔造型烟囱与排气道构成的雕塑花园"
            ]
          },
          {
            id: "casa-batllo",
            title: "Casa Batlló / 巴特罗之家 (骨之屋 / 龙脊之屋)",
            date: "1904 - 1906",
            location: "西班牙巴塞罗那格拉西亚大道 (Passeig de Gràcia, Barcelona)",
            image: "/images/artworks/casa-batllo.jpg",
            notes: "取材于圣乔治屠龙传说的魔幻童话住宅。屋顶是用彩色陶瓷瓦片铺就的巨龙背脊，阁楼如龙的胸骨，立面阳台如骷髅面具骨骼，墙面则是波光粼粼的莫奈睡莲色碎瓷拼贴（Trencadís）。",
            knowledgePoints: [
              "讲述圣乔治屠龙救公主的加泰罗尼亚英雄神话",
              "外墙运用 Trencadís 废旧彩色陶瓷与碎玻璃马赛克拼贴",
              "骨骼形态支撑柱与波浪曲面玻璃大窗，无一处生硬直角"
            ]
          }
        ]
      }
    ]
  }
];

// Curated search query maps for precise web image retrieval
const architectureQueries = {
  // Buildings
  "church-of-the-gesu": "Church of the Gesu Rome facade Vignola",
  "villa-giulia": "Villa Giulia Rome courtyard Vignola",
  "gesu-facade": "Church of the Gesu Rome Giacomo della Porta facade",
  "san-carlo-quattro-fontane": "San Carlo alle Quattro Fontane Rome Borromini facade",
  "sant-ivo-alla-sapienza": "Sant Ivo alla Sapienza Rome Borromini dome",
  "piazza-san-pietro": "Piazza San Pietro Vatican Bernini colonnade",
  "sant-andrea-quirinale": "Sant Andrea al Quirinale Rome Bernini facade",
  "palazzo-montecitorio": "Palazzo Montecitorio Rome Bernini facade",
  "st-peters-baldachin": "St Peters Baldachin Bernini St Peters Basilica",
  "palazzo-carignano": "Palazzo Carignano Turin Guarino Guarini facade",
  "chapel-holy-shroud": "Chapel of the Holy Shroud Turin Guarino Guarini dome",

  "basilica-of-superga": "Basilica of Superga Turin Filippo Juvarra",
  "palace-of-caserta": "Royal Palace of Caserta Luigi Vanvitelli aerial",
  "palace-of-naples": "Royal Palace of Naples facade Luigi Vanvitelli",
  "teatro-alla-scala": "Teatro alla Scala Milan facade Piermarini",
  "royal-palace-milan": "Royal Palace of Milan Palazzo Reale Piermarini",
  "rotonde-de-la-villette": "La Rotonde de la Villette Paris Ledoux",
  "arc-de-triomphe": "Arc de Triomphe Paris Chalgrin day",
  "simplon-gate": "Arco della Pace Milan Simplon Gate Luigi Cagnola",
  "uva-rotunda": "University of Virginia Rotunda Thomas Jefferson",
  "white-house": "The White House Washington DC south lawn James Hoban",
  "propylaea-munich": "Propylaea Munich Leo von Klenze Konigsplatz",

  "crystal-palace": "The Crystal Palace London 1851 Joseph Paxton Great Exhibition",
  "eiffel-tower": "Eiffel Tower Paris Gustave Eiffel 1889",

  "hotel-tassel": "Hotel Tassel Brussels Victor Horta staircase interior",
  "secession-building": "Secession Building Vienna Joseph Maria Olbrich golden dome",
  "paris-metro-entrances": "Paris Metro entrance Hector Guimard Art Nouveau",

  "einstein-tower": "Einstein Tower Potsdam Erich Mendelsohn Einsteinturm",
  "glass-pavilion": "Glass Pavilion Bruno Taut 1914 Cologne Werkbund",
  "sagrada-familia": "Sagrada Familia Barcelona Antoni Gaudi exterior",
  "casa-mila": "Casa Mila La Pedrera Barcelona Antoni Gaudi facade",
  "casa-batllo": "Casa Batllo Barcelona Antoni Gaudi facade"
};

const architectQueries = {
  "giacomo-barozzi-da-vignola": "Giacomo Barozzi da Vignola portrait architect",
  "giacomo-della-porta": "Giacomo della Porta portrait architect",
  "francesco-borromini": "Francesco Borromini portrait architect 1599",
  "gian-lorenzo-bernini": "Gian Lorenzo Bernini self portrait painter",
  "guarino-guarini": "Guarino Guarini portrait engraving architect",
  "filippo-juvarra": "Filippo Juvarra portrait architect",
  "luigi-vanvitelli": "Luigi Vanvitelli portrait Lodewijk van Wittel",
  "giuseppe-piermarini": "Giuseppe Piermarini portrait architect Brera",
  "claude-nicolas-ledoux": "Claude Nicolas Ledoux portrait architect",
  "neoclassical-monuments-group": "Arc de Triomphe Paris monument photo",
  "joseph-paxton": "Joseph Paxton portrait architect Crystal Palace",
  "gustave-eiffel": "Gustave Eiffel portrait photograph engineer",
  "victor-horta": "Victor Horta portrait architect Art Nouveau",
  "joseph-maria-olbrich": "Joseph Maria Olbrich portrait architect Vienna Secession",
  "hector-guimard": "Hector Guimard portrait architect Paris Metro",
  "erich-mendelsohn": "Erich Mendelsohn portrait architect Expressionism",
  "bruno-taut": "Bruno Taut portrait architect Glashaus",
  "antoni-gaudi": "Antoni Gaudi portrait photograph architect Barcelona"
};

async function downloadBuffer(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
        'Referer': 'https://www.google.com/'
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const ab = await res.arrayBuffer();
    const buf = Buffer.from(ab);
    if (buf.length < 2000) throw new Error(`Buffer too small: ${buf.length} bytes`);
    return buf;
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}

async function searchBingImages(query) {
  try {
    const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&form=HDRSC2`;
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    const html = await res.text();
    const matches = [...html.matchAll(/murl&quot;:&quot;(.*?)&quot;/g)];
    return matches.map(m => m[1]).filter(u => u && (u.startsWith('http://') || u.startsWith('https://')));
  } catch (e) {
    return [];
  }
}

async function searchWikipediaImage(query) {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=4&prop=pageimages&piprop=original|thumbnail&pithumbsize=1200&format=json`;
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    const data = await res.json();
    if (data?.query?.pages) {
      const pages = Object.values(data.query.pages).sort((a, b) => (a.index || 99) - (b.index || 99));
      const urls = [];
      for (const p of pages) {
        if (p.original?.source) urls.push(p.original.source);
        if (p.thumbnail?.source) urls.push(p.thumbnail.source);
      }
      return urls;
    }
  } catch (e) {}
  return [];
}

async function crawlAndSave(query, destPath, cachePath) {
  // 1. Wikipedia first
  const wikiUrls = await searchWikipediaImage(query);
  for (const url of wikiUrls) {
    try {
      const buf = await downloadBuffer(url);
      fs.writeFileSync(destPath, buf);
      if (cachePath) fs.writeFileSync(cachePath, buf);
      return { success: true, source: url };
    } catch (e) {}
  }

  // 2. Bing Images search
  const bingUrls = await searchBingImages(query);
  for (const url of bingUrls.slice(0, 5)) {
    try {
      const buf = await downloadBuffer(url);
      fs.writeFileSync(destPath, buf);
      if (cachePath) fs.writeFileSync(cachePath, buf);
      return { success: true, source: url };
    } catch (e) {}
  }

  return { success: false, source: null };
}

async function main() {
  console.log("=================================================");
  console.log(" 建筑史全量建筑地标与建筑师肖像网络抓取系统");
  console.log("=================================================\n");

  const cacheFile = path.join(DATA_DIR, 'artworksCache.json');
  let currentCache = {};
  if (fs.existsSync(cacheFile)) {
    try {
      currentCache = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
    } catch (e) {}
  }

  let architectCount = 0;
  let buildingCount = 0;

  // 1. 抓取建筑大师肖像
  console.log("[Phase 1/2] 正在抓取 18 位建筑大师肖像照片...");
  for (const movement of architectureMovements) {
    for (const architect of movement.artists) {
      const destPath = path.join(ARTISTS_DIR, `${architect.id}.jpg`);
      const query = architectQueries[architect.id] || `${architect.englishName || architect.name} architect portrait`;

      console.log(` -> 检索建筑师: ${architect.name} (${query})`);
      const res = await crawlAndSave(query, destPath);

      if (res.success) {
        console.log(`    ✓ 建筑师肖像已下载: ${architect.name}`);
        architectCount++;
      } else {
        console.log(`    ✗ 建筑师肖像抓取失败: ${architect.name}`);
      }
      await new Promise(r => setTimeout(r, 350));
    }
  }

  // 2. 抓取建筑作品
  console.log("\n[Phase 2/2] 正在抓取 31 座传世建筑地标高清照片...");
  for (const movement of architectureMovements) {
    for (const architect of movement.artists) {
      for (const building of architect.artworks) {
        const destPath = path.join(ARTWORKS_DIR, `${building.id}.jpg`);
        const cacheDest = path.join(CACHE_DIR, `${building.id}.jpg`);
        const query = architectureQueries[building.id] || `${building.title} ${architect.englishName || architect.name} architecture`;

        console.log(` -> 检索建筑地标: 《${building.title}》 [${building.id}]`);
        const res = await crawlAndSave(query, destPath, cacheDest);

        if (res.success) {
          console.log(`    ✓ 建筑地标已保存: 《${building.title}》`);
          buildingCount++;
        } else {
          console.log(`    ✗ 建筑地标抓取失败: 《${building.title}》`);
        }

        currentCache[building.id] = {
          id: building.id,
          artist: architect.englishName || architect.name,
          artistZh: architect.name,
          title: building.title,
          date: building.date,
          location: building.location,
          image_url: `/images/artworks/${building.id}.jpg`,
          source_url: res.source || `https://en.wikipedia.org/wiki/${encodeURIComponent(building.title)}`,
          status: res.success ? 'verified' : 'needs_review'
        };

        await new Promise(r => setTimeout(r, 350));
      }
    }
  }

  // Save merged cache
  fs.writeFileSync(cacheFile, JSON.stringify(currentCache, null, 2), 'utf-8');

  console.log("\n=================================================");
  console.log(`建筑史抓取任务全部完成！`);
  console.log(`- 建筑大师肖像: ${architectCount}/18 已下载`);
  console.log(`- 建筑地标照片: ${buildingCount}/31 已下载`);
  console.log(`- JSON 索引已更新: ${cacheFile}`);
  console.log("=================================================");
}

main();
