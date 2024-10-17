import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { MessageSquare, ChevronRight, ChevronLeft, Home, BarChart2, Users, ShoppingCart, FileText, Bell, Settings, Search, Facebook, Instagram, Youtube, Image, Calendar as CalendarIcon, PlusCircle, MapPin, Target, DollarSign, Users as UsersIcon, CheckCircle2 } from 'lucide-react'

const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 5500 },
  { name: 'Jun', sales: 6000 },
];

const ordersData = [
  { name: 'Jan', orders: 400 },
  { name: 'Feb', orders: 300 },
  { name: 'Mar', orders: 500 },
  { name: 'Apr', orders: 450 },
  { name: 'May', orders: 550 },
  { name: 'Jun', orders: 600 },
];

const MerchantDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [date, setDate] = useState(new Date())
  const [campaignStep, setCampaignStep] = useState(0);
  const [campaignData, setCampaignData] = useState({
    name: '',
    description: '',
    businessType: '',
    targetLocation: '',
    budget: 1000,
    startDate: new Date(),
    endDate: new Date(),
    goals: [],
  });
  const [isNewUser, setIsNewUser] = useState(true);
  const [completedTasks, setCompletedTasks] = useState([]);

  const sections = [
    { id: 'overview', name: 'Overview', icon: Home },
    { id: 'analytics', name: 'Analytics', icon: BarChart2 },
    { id: 'customers', name: 'Customers', icon: Users },
    { id: 'products', name: 'Products', icon: ShoppingCart },
    { id: 'orders', name: 'Orders', icon: FileText },
    { id: 'campaigns', name: 'Campaigns', icon: Bell },
    { id: 'integrations', name: 'Integrations', icon: Bell },
    { id: 'ad-creator', name: 'Ad Creator', icon: Image },
    { id: 'social-scheduler', name: 'Social Scheduler', icon: CalendarIcon },
  ];

  const onboardingTasks = [
    { id: 1, title: "Complete your business profile", description: "Add your business details to personalize your dashboard." },
    { id: 2, title: "Connect your first integration", description: "Set up Meta, Google, or WhatsApp integration to expand your reach." },
    { id: 3, title: "Create your first audience", description: "Define your target audience to improve ad effectiveness." },
    { id: 4, title: "Launch your first campaign", description: "Set up and start your first advertising campaign." },
    { id: 5, title: "Upload your product catalog", description: "Add your products to start selling online." },
    { id: 6, title: "Set up payment methods", description: "Configure payment options to process transactions." },
    { id: 7, title: "Create a social media post", description: "Schedule your first post to engage with your audience." },
  ];

  useEffect(() => {
    // In a real application, you'd check if the user is new from your backend or local storage
    const userHasCompletedOnboarding = localStorage.getItem('onboardingCompleted');
    setIsNewUser(!userHasCompletedOnboarding);
  }, []);

  const handleCampaignDataChange = (field, value) => {
    setCampaignData({ ...campaignData, [field]: value });
  };

  const completeTask = (taskId) => {
    setCompletedTasks([...completedTasks, taskId]);
  };

  const renderOnboardingTasks = () => {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to Your Business Dashboard!</CardTitle>
          <CardDescription>Complete these tasks to grow your business:</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <Progress value={(completedTasks.length / onboardingTasks.length) * 100} className="w-full" />
            {onboardingTasks.map((task) => (
              <div key={task.id} className="flex items-start space-x-4">
                <Checkbox
                  checked={completedTasks.includes(task.id)}
                  onCheckedChange={() => completeTask(task.id)}
                  className="mt-1"
                />
                <div>
                  <h3 className="font-semibold">{task.title}</h3>
                  <p className="text-sm text-gray-500">{task.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button 
            className="mt-6"
            onClick={() => {
              setIsNewUser(false);
              localStorage.setItem('onboardingCompleted', 'true');
            }}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    );
  };

  const renderContent = () => {
    if (isNewUser) {
      return renderOnboardingTasks();
    }

    switch (activeSection) {
      case 'overview':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="sales" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={ordersData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </>
        );
      case 'analytics':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detailed analytics and metrics would go here.</p>
            </CardContent>
          </Card>
        );
      case 'customers':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Customer Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Customer list and management tools would go here.</p>
            </CardContent>
          </Card>
        );
      case 'products':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Product Catalog</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Product listing and management interface would go here.</p>
            </CardContent>
          </Card>
        );
      case 'orders':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Order Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Order processing and tracking interface would go here.</p>
            </CardContent>
          </Card>
        );
      case 'campaigns':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Campaign Management</CardTitle>
              <CardDescription>Create and manage your advertising campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="active" className="w-full">
                <TabsList>
                  <TabsTrigger value="active">Active Campaigns</TabsTrigger>
                  <TabsTrigger value="create">Create Campaign</TabsTrigger>
                </TabsList>
                <TabsContent value="active">
                  <div className="space-y-4">
                    <p>Your active campaigns will be listed here.</p>
                    {/* You can add a list or grid of active campaigns here */}
                  </div>
                </TabsContent>
                <TabsContent value="create">
                  {renderCampaignCreator()}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        );
      case 'integrations':
        return (
          <Card>
            <CardHeader>
              <CardTitle>API Integrations</CardTitle>
              <CardDescription>Connect your accounts to enable advanced features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img src="/api/placeholder/30/30" alt="Meta logo" className="w-8 h-8" />
                    <div>
                      <h3 className="font-semibold">Meta Advertising API</h3>
                      <p className="text-sm text-gray-500">Connect to manage Facebook and Instagram ads</p>
                    </div>
                  </div>
                  <Button>Connect</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img src="/api/placeholder/30/30" alt="WhatsApp logo" className="w-8 h-8" />
                    <div>
                      <h3 className="font-semibold">WhatsApp Business API</h3>
                      <p className="text-sm text-gray-500">Enable WhatsApp messaging features</p>
                    </div>
                  </div>
                  <Button>Connect</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img src="/api/placeholder/30/30" alt="Google Ads logo" className="w-8 h-8" />
                    <div>
                      <h3 className="font-semibold">Google Ads API</h3>
                      <p className="text-sm text-gray-500">Manage your Google advertising campaigns</p>
                    </div>
                  </div>
                  <Button>Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case 'ad-creator':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Ad Image Generator</CardTitle>
              <CardDescription>Create compelling images for your advertisements</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="generate" className="w-full">
                <TabsList>
                  <TabsTrigger value="generate">Generate Image</TabsTrigger>
                  <TabsTrigger value="upload">Upload Image</TabsTrigger>
                </TabsList>
                <TabsContent value="generate">
                  <div className="space-y-4">
                    <Input placeholder="Describe the image you want to generate..." />
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Style</label>
                        <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                          <option>Photorealistic</option>
                          <option>Cartoon</option>
                          <option>Abstract</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Size</label>
                        <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                          <option>1080x1080 (Instagram)</option>
                          <option>1200x628 (Facebook)</option>
                          <option>1280x720 (YouTube)</option>
                        </select>
                      </div>
                    </div>
                    <Button className="w-full">Generate Image</Button>
                  </div>
                </TabsContent>
                <TabsContent value="upload">
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Input type="file" className="hidden" id="file-upload" />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <span className="mt-2 block text-sm font-medium text-gray-900">
                          Drop an image here or click to upload
                        </span>
                      </label>
                    </div>
                    <Button className="w-full">Upload Image</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        );
      case 'social-scheduler':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Social Media Scheduler</CardTitle>
              <CardDescription>Schedule posts for Facebook, YouTube, and Instagram</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Platform</label>
                    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                      <option>Facebook</option>
                      <option>Instagram</option>
                      <option>YouTube</option>
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Post Type</label>
                    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                      <option>Image</option>
                      <option>Video</option>
                      <option>Text</option>
                    </select>
                  </div>
                </div>
                <Input placeholder="Enter your post content..." />
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Input type="file" className="hidden" id="media-upload" />
                  <label htmlFor="media-upload" className="cursor-pointer">
                    <span className="mt-2 block text-sm font-medium text-gray-900">
                      Upload media (image or video)
                    </span>
                  </label>
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Schedule Date</label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Schedule Time</label>
                    <Input type="time" />
                  </div>
                </div>
                <Button className="w-full">Schedule Post</Button>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white h-full transition-all duration-300 ${sidebarExpanded ? 'w-64' : 'w-20'} flex flex-col shadow-md ${isNewUser ? 'hidden' : ''}`}>
        <div className="p-4 text-xl font-bold text-center text-blue-600">
          {sidebarExpanded ? 'Zvortex' : 'Z'}
        </div>
        <Separator />
        <Button 
          variant="ghost"
          className="absolute top-4 -right-3 bg-white border border-gray-200 rounded-full p-1 shadow-md"
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
        >
          {sidebarExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </Button>
        <nav className="flex-grow pt-4">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "secondary" : "ghost"}
              className={`w-full justify-start mb-1 ${activeSection === section.id ? 'bg-blue-100 text-blue-600' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <section.icon className="mr-2" size={20} />
              {sidebarExpanded && section.name}
            </Button>
          ))}
        </nav>
        <Separator />
        <Button variant="ghost" className="m-4" onClick={() => setActiveSection('settings')}>
          <Settings className="mr-2" size={20} />
          {sidebarExpanded && 'Settings'}
        </Button>
      </div>

      {/* Main content */}
      <div className="flex-grow flex flex-col">
        <header className={`bg-white p-4 shadow-sm flex justify-between items-center ${isNewUser ? 'hidden' : ''}`}>
          <div className="flex items-center space-x-4">
            <Input type="text" placeholder="Search..." className="w-64" />
            <Search className="text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">Pro Plan</Badge>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-grow p-6 overflow-auto">
          {!isNewUser && <h1 className="text-2xl font-bold mb-6">{sections.find(s => s.id === activeSection)?.name}</h1>}
          {renderContent()}
        </main>
      </div>

      {/* AI Bot Button */}
      <Button
        className="fixed bottom-4 right-4 rounded-full p-4 bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <MessageSquare size={24} />
      </Button>

      {/* AI Bot Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white border rounded-lg shadow-lg flex flex-col">
          <div className="p-4 border-b font-bold bg-blue-500 text-white rounded-t-lg">AI Assistant</div>
          <div className="flex-grow p-4 overflow-auto">
            {/* Chat messages would go here */}
          </div>
          <div className="p-4 border-t flex">
            <Input type="text" placeholder="Type your message..." className="flex-grow mr-2" />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white"><MessageSquare size={20} /></Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantDashboard;
