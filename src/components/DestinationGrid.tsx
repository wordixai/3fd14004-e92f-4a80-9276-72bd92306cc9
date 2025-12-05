import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Thermometer, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Destination {
  id: number;
  name: string;
  location: string;
  description: string;
  rating: number;
  temperature: string;
  bestSeason: string;
  image: string;
  highlights: string[];
  activities: string[];
}

const destinations: Destination[] = [
  {
    id: 1,
    name: '哈尔滨冰雪大世界',
    location: '黑龙江·哈尔滨',
    description: '世界最大的冰雪主题公园，汇集冰雕、雪雕艺术精华',
    rating: 4.9,
    temperature: '-15°C ~ -25°C',
    bestSeason: '12月-次年2月',
    image: 'https://images.unsplash.com/photo-1548445112-1f5f6e3c53e5?w=800&q=80',
    highlights: ['冰雕艺术', '夜景灯光秀', '冰上项目', '雪地娱乐'],
    activities: ['冰滑梯', '雪地摩托', '冰雪迷宫', '冰雪城堡'],
  },
  {
    id: 2,
    name: '长白山天池',
    location: '吉林·长白山',
    description: '中国最美火山湖，冬季白雪皑皑，宛如仙境',
    rating: 4.8,
    temperature: '-20°C ~ -30°C',
    bestSeason: '11月-次年3月',
    image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=800&q=80',
    highlights: ['火山天池', '雾凇奇观', '温泉度假', '原始森林'],
    activities: ['观天池', '泡温泉', '滑雪运动', '雪地徒步'],
  },
  {
    id: 3,
    name: '雪乡童话世界',
    location: '黑龙江·牡丹江',
    description: '中国雪量最大的地区，红灯笼点缀的雪屋宛如童话',
    rating: 4.7,
    temperature: '-15°C ~ -28°C',
    bestSeason: '12月-次年2月',
    image: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=800&q=80',
    highlights: ['雪屋民居', '红灯笼夜景', '雪蘑菇', '东北民俗'],
    activities: ['雪屋体验', '马拉爬犁', '雪地摄影', '篝火晚会'],
  },
  {
    id: 4,
    name: '亚布力滑雪场',
    location: '黑龙江·哈尔滨',
    description: '中国顶级滑雪胜地，专业雪道与度假设施完善',
    rating: 4.8,
    temperature: '-10°C ~ -20°C',
    bestSeason: '11月-次年4月',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
    highlights: ['专业雪道', '滑雪培训', '度假酒店', '雪地娱乐'],
    activities: ['高山滑雪', '单板滑雪', '雪地摩托', '缆车观光'],
  },
  {
    id: 5,
    name: '漠河北极村',
    location: '黑龙江·漠河',
    description: '中国最北端，寻找北极光的神秘之地',
    rating: 4.6,
    temperature: '-30°C ~ -40°C',
    bestSeason: '12月-次年2月',
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
    highlights: ['极地风光', '北极光', '最北邮局', '冰封江面'],
    activities: ['寻找北极光', '极地体验', '冰钓', '雪地越野'],
  },
  {
    id: 6,
    name: '吉林雾凇岛',
    location: '吉林·吉林市',
    description: '松花江畔的雾凇奇观，晶莹剔透的冰雪世界',
    rating: 4.7,
    temperature: '-15°C ~ -25°C',
    bestSeason: '12月-次年2月',
    image: 'https://images.unsplash.com/photo-1478358161113-b0e11994a36b?w=800&q=80',
    highlights: ['雾凇景观', '摄影天堂', '渔村风情', '江边风光'],
    activities: ['观雾凇', '摄影创作', '民俗体验', '江边漫步'],
  },
];

export const DestinationGrid = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {destinations.map((destination, index) => (
          <motion.div
            key={destination.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full" onClick={() => setSelectedDestination(destination)}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span>{destination.name}</span>
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {destination.location}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{destination.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{destination.temperature}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">{destination.bestSeason}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {destination.highlights.slice(0, 3).map((highlight) => (
                    <Badge key={highlight} variant="secondary">{highlight}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Dialog open={!!selectedDestination} onOpenChange={() => setSelectedDestination(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedDestination && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedDestination.name}</DialogTitle>
                <DialogDescription className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {selectedDestination.location}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div>
                  <h3 className="font-semibold mb-2">景点介绍</h3>
                  <p className="text-muted-foreground">{selectedDestination.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Thermometer className="w-5 h-5 text-primary" />
                      <span className="font-semibold">温度范围</span>
                    </div>
                    <p className="text-muted-foreground">{selectedDestination.temperature}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span className="font-semibold">最佳季节</span>
                    </div>
                    <p className="text-muted-foreground">{selectedDestination.bestSeason}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">景点亮点</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDestination.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary">{highlight}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">推荐活动</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedDestination.activities.map((activity) => (
                      <div key={activity} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  加入行程规划
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};