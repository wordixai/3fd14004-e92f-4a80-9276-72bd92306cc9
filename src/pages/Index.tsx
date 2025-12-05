import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Hero } from '@/components/Hero';
import { DestinationGrid } from '@/components/DestinationGrid';
import { TravelGuide } from '@/components/TravelGuide';
import { RouteMap } from '@/components/RouteMap';
import { Snowfall } from '@/components/Snowfall';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  const [activeTab, setActiveTab] = useState('explore');

  return (
    <div className="min-h-screen bg-gradient-to-b from-winter-sky to-background relative overflow-hidden">
      <Snowfall />

      <Hero />

      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="explore">探索景点</TabsTrigger>
            <TabsTrigger value="guide">路书指导</TabsTrigger>
            <TabsTrigger value="route">行程规划</TabsTrigger>
          </TabsList>

          <TabsContent value="explore" className="mt-0">
            <DestinationGrid />
          </TabsContent>

          <TabsContent value="guide" className="mt-0">
            <TravelGuide />
          </TabsContent>

          <TabsContent value="route" className="mt-0">
            <RouteMap />
          </TabsContent>
        </Tabs>
      </div>

      <Toaster />
    </div>
  );
};

export default Index;
