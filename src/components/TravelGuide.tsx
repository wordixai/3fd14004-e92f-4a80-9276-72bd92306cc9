import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, Backpack, Camera, AlertCircle, Heart, MapIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const TravelGuide = () => {
  const guides = [
    {
      icon: Backpack,
      title: '装备准备',
      color: 'text-primary',
      items: [
        {
          title: '保暖衣物',
          content: '羽绒服（厚度至少800蓬）、保暖内衣、抓绒衣、防风冲锋衣。多层穿搭原则，便于根据温度调节。',
          tips: ['选择防风防水外套', '准备可拆卸帽子', '带备用手套'],
        },
        {
          title: '鞋袜选择',
          content: '防滑雪地靴（-40°C耐寒）、厚羊毛袜、雪套。确保鞋子防水且有良好的保暖性能。',
          tips: ['选择高帮防滑鞋', '多准备几双厚袜', '考虑暖宝宝鞋垫'],
        },
        {
          title: '配件装备',
          content: '雷锋帽、围巾、手套、口罩、墨镜、暖宝宝。头部和手部保暖最为关键。',
          tips: ['护目镜防雪盲', '带备用暖宝宝', '防冻唇膏必备'],
        },
        {
          title: '电子设备',
          content: '相机（配备防寒套）、充电宝（保暖袋）、手机防水袋。低温下电池续航大幅下降。',
          tips: ['电池贴身保暖', '准备备用电池', '防水密封袋'],
        },
      ],
    },
    {
      icon: Heart,
      title: '健康保护',
      color: 'text-accent',
      items: [
        {
          title: '防寒保暖',
          content: '避免长时间暴露在严寒中，注意保护耳朵、鼻子、手指等易冻伤部位。',
          tips: ['每30分钟进室内暖和', '发现冻伤及时处理', '保持身体活动'],
        },
        {
          title: '皮肤护理',
          content: '低温干燥环境下，使用高保湿护肤品、防冻唇膏、防晒霜（雪地反射强烈）。',
          tips: ['SPF50+防晒', '保湿霜厚涂', '护手霜随身带'],
        },
        {
          title: '饮食调理',
          content: '多喝热水，补充高热量食物。适当摄入肉类、坚果等高能量食物。',
          tips: ['保温杯必备', '巧克力补充能量', '避免饮酒取暖'],
        },
      ],
    },
    {
      icon: Camera,
      title: '摄影技巧',
      color: 'text-primary',
      items: [
        {
          title: '器材保护',
          content: '相机保暖套、防潮箱、镜头布。从室外进入室内要用塑料袋密封，避免结露。',
          tips: ['备用电池贴身保暖', '硅胶干燥剂防潮', '镜头渐进适温'],
        },
        {
          title: '拍摄时机',
          content: '日出日落时分光线柔和，蓝调时刻拍摄冰雪景色最佳。雾凇需清晨拍摄。',
          tips: ['提前踩点选景', '使用三脚架', '准备偏振镜'],
        },
        {
          title: '构图要点',
          content: '利用前景增加层次感，红色元素（红灯笼、红围巾）与白雪形成对比。',
          tips: ['寻找色彩对比', '人物点缀画面', '捕捉动态瞬间'],
        },
      ],
    },
    {
      icon: AlertCircle,
      title: '安全注意',
      color: 'text-destructive',
      items: [
        {
          title: '交通安全',
          content: '冰雪路面湿滑，驾驶时保持车距，降低车速。使用雪地胎或防滑链。',
          tips: ['提前查路况', '避免急刹车', '保持安全车距'],
        },
        {
          title: '户外活动',
          content: '滑雪、冰上运动务必佩戴护具。跟随专业向导，不单独行动。',
          tips: ['购买保险', '遵守景区规定', '结伴而行'],
        },
        {
          title: '应急准备',
          content: '携带常用药品、急救包。记录当地救援电话和医院地址。',
          tips: ['准备感冒药', '防冻伤药膏', '保存紧急联系'],
        },
      ],
    },
    {
      icon: MapIcon,
      title: '行程规划',
      color: 'text-accent',
      items: [
        {
          title: '时间安排',
          content: '冬季日照时间短，合理安排行程。室外活动集中在10:00-15:00。',
          tips: ['预留机动时间', '避开春节高峰', '提前订房'],
        },
        {
          title: '景点选择',
          content: '根据体力和兴趣选择2-3个核心景点深度游，避免走马观花。',
          tips: ['查看天气预报', '错峰游览', '预约门票'],
        },
        {
          title: '住宿建议',
          content: '选择取暖设施完善的酒店，体验一晚特色雪屋或火炕。',
          tips: ['确认供暖情况', '靠近景区', '提前预订'],
        },
      ],
    },
    {
      icon: BookOpen,
      title: '文化体验',
      color: 'text-primary',
      items: [
        {
          title: '民俗活动',
          content: '参加冰灯节、雪雕节、冬捕节等传统活动，体验东北特色民俗文化。',
          tips: ['了解活动时间', '尊重当地习俗', '尝试参与互动'],
        },
        {
          title: '特色美食',
          content: '品尝铁锅炖、杀猪菜、冻梨、冻柿子、糖葫芦等东北特色美食。',
          tips: ['选择正规餐厅', '尝试地道做法', '注意饮食卫生'],
        },
        {
          title: '温泉体验',
          content: '长白山、汤旺河等地温泉资源丰富，冰火两重天的独特体验。',
          tips: ['注意温差变化', '控制浸泡时间', '及时补充水分'],
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">冰雪旅行完全指南</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          从装备准备到拍摄技巧，从安全须知到文化体验，为您的冰雪之旅提供全方位专业指导
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {guides.map((guide, index) => (
          <motion.div
            key={guide.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-muted ${guide.color}`}>
                    <guide.icon className="w-6 h-6" />
                  </div>
                  {guide.title}
                </CardTitle>
                <CardDescription>
                  专业建议，让旅行更安全舒适
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {guide.items.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-left">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            {item.content}
                          </p>
                          <div className="space-y-1">
                            {item.tips.map((tip, tipIdx) => (
                              <div key={tipIdx} className="flex items-start gap-2">
                                <Badge variant="outline" className="mt-0.5 shrink-0">
                                  贴士
                                </Badge>
                                <span className="text-sm">{tip}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};