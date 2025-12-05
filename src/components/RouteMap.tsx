import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, Car, Train, Plane, Hotel, Utensils, Check } from 'lucide-react';
import { toast } from 'sonner';

interface RouteDay {
  day: number;
  title: string;
  destinations: string[];
  activities: string[];
  meals: { breakfast: string; lunch: string; dinner: string };
  accommodation: string;
  transportation: string;
  duration: string;
}

export const RouteMap = () => {
  const [selectedRoute, setSelectedRoute] = useState<string>('classic');

  const routes = {
    classic: {
      name: '经典冰雪之旅',
      duration: '7天6晚',
      difficulty: '轻松',
      price: '¥3,999起',
      description: '探访哈尔滨、雪乡、长白山三大经典冰雪目的地',
      highlights: ['冰雪大世界', '雪乡童话', '长白山天池', '温泉体验'],
      itinerary: [
        {
          day: 1,
          title: '抵达冰城哈尔滨',
          destinations: ['哈尔滨', '中央大街', '圣索菲亚教堂'],
          activities: ['接机入住', '中央大街漫步', '品尝马迭尔冰棍', '圣索菲亚教堂夜景'],
          meals: { breakfast: '自理', lunch: '东方饺子王', dinner: '老昌春饼' },
          accommodation: '哈尔滨市区四星酒店',
          transportation: '专车接机',
          duration: '4小时',
        },
        {
          day: 2,
          title: '哈尔滨冰雪世界',
          destinations: ['冰雪大世界', '太阳岛雪博会', '冰灯游园会'],
          activities: ['白天游太阳岛雪雕', '下午休息调整', '晚上畅游冰雪大世界', '观看冰灯秀'],
          meals: { breakfast: '酒店早餐', lunch: '张包铺', dinner: '景区内用餐' },
          accommodation: '哈尔滨市区四星酒店',
          transportation: '旅游大巴',
          duration: '全天',
        },
        {
          day: 3,
          title: '前往童话雪乡',
          destinations: ['雪乡风景区', '雪韵大街', '梦幻家园'],
          activities: ['乘车前往雪乡（5小时）', '雪韵大街观光', '拍摄雪蘑菇', '夜赏红灯笼'],
          meals: { breakfast: '酒店早餐', lunch: '途中农家菜', dinner: '雪乡特色火锅' },
          accommodation: '雪乡特色民居',
          transportation: '旅游大巴',
          duration: '全天',
        },
        {
          day: 4,
          title: '雪乡深度体验',
          destinations: ['雪乡', '羊草山', '雪谷穿越'],
          activities: ['清晨拍摄雪景', '马拉爬犁体验', '雪地摄影创作', '篝火晚会'],
          meals: { breakfast: '民居早餐', lunch: '农家菜', dinner: '东北杀猪菜' },
          accommodation: '雪乡特色民居',
          transportation: '景区内步行/马拉爬犁',
          duration: '全天',
        },
        {
          day: 5,
          title: '长白山天池',
          destinations: ['长白山北坡', '天池', '长白瀑布', '温泉'],
          activities: ['前往长白山（4小时）', '登山观天池', '瀑布观光', '地热温泉体验'],
          meals: { breakfast: '民居早餐', lunch: '山上简餐', dinner: '温泉酒店' },
          accommodation: '长白山温泉度假酒店',
          transportation: '旅游大巴+越野车',
          duration: '全天',
        },
        {
          day: 6,
          title: '长白山西坡+温泉',
          destinations: ['长白山西坡', '锦江大峡谷', '温泉部落'],
          activities: ['西坡天池另一面', '峡谷徒步', '温泉养生', '朝鲜族民俗'],
          meals: { breakfast: '酒店早餐', lunch: '景区餐厅', dinner: '朝鲜族料理' },
          accommodation: '长白山温泉度假酒店',
          transportation: '旅游大巴',
          duration: '全天',
        },
        {
          day: 7,
          title: '返程回家',
          destinations: ['长白山', '长春/哈尔滨'],
          activities: ['酒店早餐', '整理行李', '返程送机'],
          meals: { breakfast: '酒店早餐', lunch: '途中/机场', dinner: '自理' },
          accommodation: '温暖的家',
          transportation: '专车送机',
          duration: '半天',
        },
      ] as RouteDay[],
    },
    deep: {
      name: '深度冰雪探险',
      duration: '10天9晚',
      difficulty: '中等',
      price: '¥5,999起',
      description: '东北全境深度游，体验极致冰雪与民俗文化',
      highlights: ['漠河找北', '雾凇岛', '亚布力滑雪', '冰雪温泉'],
      itinerary: [
        {
          day: 1,
          title: '哈尔滨集合',
          destinations: ['哈尔滨'],
          activities: ['接机', '自由活动', '欢迎晚宴'],
          meals: { breakfast: '自理', lunch: '自理', dinner: '欢迎晚宴' },
          accommodation: '哈尔滨市区酒店',
          transportation: '接机服务',
          duration: '全天',
        },
        {
          day: 2,
          title: '哈尔滨市区游',
          destinations: ['中央大街', '冰雪大世界', '索菲亚教堂'],
          activities: ['市区观光', '冰雪大世界', '俄罗斯风情'],
          meals: { breakfast: '酒店', lunch: '东北菜', dinner: '俄式西餐' },
          accommodation: '哈尔滨市区酒店',
          transportation: '旅游大巴',
          duration: '全天',
        },
        {
          day: 3,
          title: '前往雾凇岛',
          destinations: ['吉林雾凇岛'],
          activities: ['乘车前往', '入住渔村', '等待雾凇'],
          meals: { breakfast: '酒店', lunch: '途中', dinner: '渔村特色' },
          accommodation: '雾凇岛渔村',
          transportation: '旅游大巴',
          duration: '全天',
        },
        {
          day: 4,
          title: '雾凇岛摄影',
          destinations: ['雾凇岛'],
          activities: ['清晨拍雾凇', '江边漫步', '民俗体验'],
          meals: { breakfast: '渔村', lunch: '农家菜', dinner: '江鱼宴' },
          accommodation: '雾凇岛渔村',
          transportation: '步行',
          duration: '全天',
        },
        {
          day: 5,
          title: '亚布力滑雪',
          destinations: ['亚布力滑雪场'],
          activities: ['滑雪培训', '雪道体验', '自由滑雪'],
          meals: { breakfast: '渔村', lunch: '雪场餐厅', dinner: '度假村' },
          accommodation: '亚布力滑雪度假村',
          transportation: '旅游大巴',
          duration: '全天',
        },
        {
          day: 6,
          title: '雪乡童话世界',
          destinations: ['雪乡'],
          activities: ['雪乡游览', '雪蘑菇拍摄', '红灯笼夜景'],
          meals: { breakfast: '度假村', lunch: '途中', dinner: '雪乡火锅' },
          accommodation: '雪乡民居',
          transportation: '旅游大巴',
          duration: '全天',
        },
        {
          day: 7,
          title: '长白山天池',
          destinations: ['长白山'],
          activities: ['登山观天池', '瀑布游览', '温泉体验'],
          meals: { breakfast: '民居', lunch: '山上', dinner: '温泉酒店' },
          accommodation: '长白山温泉酒店',
          transportation: '旅游大巴',
          duration: '全天',
        },
        {
          day: 8,
          title: '前往最北漠河',
          destinations: ['漠河'],
          activities: ['飞往漠河', '北极村', '找北之旅'],
          meals: { breakfast: '酒店', lunch: '机场', dinner: '东北菜' },
          accommodation: '漠河酒店',
          transportation: '飞机+大巴',
          duration: '全天',
        },
        {
          day: 9,
          title: '漠河极地体验',
          destinations: ['北极村', '最北邮局'],
          activities: ['极地探险', '找寻北极光', '冰上项目'],
          meals: { breakfast: '酒店', lunch: '农家菜', dinner: '特色火锅' },
          accommodation: '漠河酒店',
          transportation: '旅游车',
          duration: '全天',
        },
        {
          day: 10,
          title: '返程回家',
          destinations: ['漠河-哈尔滨'],
          activities: ['返程', '送机'],
          meals: { breakfast: '酒店', lunch: '途中', dinner: '自理' },
          accommodation: '温暖的家',
          transportation: '飞机',
          duration: '全天',
        },
      ] as RouteDay[],
    },
    luxury: {
      name: '奢华冰雪度假',
      duration: '5天4晚',
      difficulty: '舒适',
      price: '¥9,999起',
      description: '精选豪华酒店，私家团队服务，轻奢冰雪体验',
      highlights: ['五星酒店', '私家向导', '直升机观光', '米其林餐厅'],
      itinerary: [
        {
          day: 1,
          title: '尊贵抵达',
          destinations: ['哈尔滨'],
          activities: ['专车接机', '五星酒店', 'VIP欢迎礼遇'],
          meals: { breakfast: '自理', lunch: '自理', dinner: '米其林餐厅' },
          accommodation: '哈尔滨香格里拉',
          transportation: '豪华商务车',
          duration: '半天',
        },
        {
          day: 2,
          title: '冰雪大世界VIP',
          destinations: ['冰雪大世界'],
          activities: ['VIP专属通道', '私人摄影师', '无人机航拍'],
          meals: { breakfast: '酒店', lunch: '私房菜', dinner: '俄式大餐' },
          accommodation: '哈尔滨香格里拉',
          transportation: '专车服务',
          duration: '全天',
        },
        {
          day: 3,
          title: '直升机雪乡之旅',
          destinations: ['雪乡'],
          activities: ['直升机观光', '独栋别墅', '私人管家'],
          meals: { breakfast: '酒店', lunch: '空中餐食', dinner: '私厨料理' },
          accommodation: '雪乡豪华度假别墅',
          transportation: '直升机',
          duration: '全天',
        },
        {
          day: 4,
          title: '长白山奢华温泉',
          destinations: ['长白山'],
          activities: ['VIP登山', '私汤温泉', 'SPA护理'],
          meals: { breakfast: '别墅', lunch: '景区VIP', dinner: '温泉会席' },
          accommodation: '长白山柏悦酒店',
          transportation: '专车+越野',
          duration: '全天',
        },
        {
          day: 5,
          title: '完美返程',
          destinations: ['长白山-长春'],
          activities: ['睡到自然醒', '专车送机', 'VIP贵宾室'],
          meals: { breakfast: '酒店', lunch: '贵宾室', dinner: '自理' },
          accommodation: '温暖的家',
          transportation: '专车+头等舱',
          duration: '半天',
        },
      ] as RouteDay[],
    },
  };

  const currentRoute = routes[selectedRoute as keyof typeof routes];

  const handleBookRoute = () => {
    toast.success('行程已加入规划！', {
      description: `${currentRoute.name} - ${currentRoute.duration}`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">精选行程路线</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          专业团队设计的冰雪旅行线路，覆盖不同需求和预算
        </p>
      </div>

      <Tabs value={selectedRoute} onValueChange={setSelectedRoute} className="w-full">
        <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3">
          <TabsTrigger value="classic">经典路线</TabsTrigger>
          <TabsTrigger value="deep">深度探险</TabsTrigger>
          <TabsTrigger value="luxury">奢华度假</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedRoute} className="mt-8">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">{currentRoute.name}</CardTitle>
                  <CardDescription className="text-base">
                    {currentRoute.description}
                  </CardDescription>
                </div>
                <Badge className="text-lg px-4 py-2">{currentRoute.price}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">行程时长</div>
                    <div className="font-semibold">{currentRoute.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">难度等级</div>
                    <div className="font-semibold">{currentRoute.difficulty}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">核心景点</div>
                    <div className="font-semibold">{currentRoute.itinerary.length}个</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">行程亮点</h3>
                <div className="flex flex-wrap gap-2">
                  {currentRoute.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-sm">
                      <Check className="w-3 h-3 mr-1" />
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button onClick={handleBookRoute} size="lg" className="w-full">
                选择此行程
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">详细行程</h3>
            {currentRoute.itinerary.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                            D{day.day}
                          </div>
                          {index < currentRoute.itinerary.length - 1 && (
                            <div className="w-0.5 h-12 bg-border mt-2"></div>
                          )}
                        </div>
                        <div>
                          <CardTitle className="mb-2">{day.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {day.destinations.map((dest) => (
                              <Badge key={dest} variant="outline">
                                <MapPin className="w-3 h-3 mr-1" />
                                {dest}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">{day.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          活动安排
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {day.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                              <span>{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Utensils className="w-4 h-4 text-accent" />
                            餐饮安排
                          </h4>
                          <div className="space-y-1 text-sm">
                            <div>
                              <span className="text-muted-foreground">早餐：</span>
                              {day.meals.breakfast}
                            </div>
                            <div>
                              <span className="text-muted-foreground">午餐：</span>
                              {day.meals.lunch}
                            </div>
                            <div>
                              <span className="text-muted-foreground">晚餐：</span>
                              {day.meals.dinner}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Hotel className="w-4 h-4 text-primary" />
                            住宿与交通
                          </h4>
                          <div className="space-y-1 text-sm">
                            <div>
                              <span className="text-muted-foreground">住宿：</span>
                              {day.accommodation}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-muted-foreground">交通：</span>
                              {day.transportation.includes('飞机') && <Plane className="w-4 h-4" />}
                              {day.transportation.includes('火车') && <Train className="w-4 h-4" />}
                              {day.transportation.includes('车') && <Car className="w-4 h-4" />}
                              <span>{day.transportation}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="mt-8 bg-muted/50">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-4">费用说明</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">费用包含</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      全程住宿费用
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      行程内门票费用
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      全程用车及司机
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      专业导游服务
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      旅游意外保险
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">费用不含</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive shrink-0 mt-0.5">×</span>
                      往返大交通费用
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive shrink-0 mt-0.5">×</span>
                      行程外个人消费
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive shrink-0 mt-0.5">×</span>
                      单房差费用
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive shrink-0 mt-0.5">×</span>
                      行程外娱乐项目
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};