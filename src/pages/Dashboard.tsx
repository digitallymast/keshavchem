
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BarChart3, Bell, Building, File, Package2, UserCircle, Users, Warehouse } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock user data - in a real app, this would come from authentication context
  const user = {
    firstName: "Alex",
    lastName: "Thompson",
    companyName: "ChemTech Industries",
    accountType: "business",
    role: "Procurement Manager"
  };

  return (
    <MainLayout>
      <div className="page-container">
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-keshav-900">
                Welcome, {user.firstName}!
              </h1>
              <p className="text-gray-600 mt-1">
                {user.role} at {user.companyName}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <Bell size={16} className="mr-2" />
                Notifications
              </Button>
              <Button size="sm" className="bg-keshav-600 hover:bg-keshav-700">
                <Package2 size={16} className="mr-2" />
                Add New Listing
              </Button>
            </div>
          </div>
        </header>
        
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Active Listings</CardDescription>
                  <CardTitle className="text-2xl">12</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-xs text-muted-foreground flex items-center">
                    <ArrowUpRight size={12} className="text-green-600 mr-1" />
                    <span className="text-green-600 font-medium">+2</span>
                    <span className="ml-1">since last month</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Inquiries</CardDescription>
                  <CardTitle className="text-2xl">24</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-xs text-muted-foreground flex items-center">
                    <ArrowUpRight size={12} className="text-green-600 mr-1" />
                    <span className="text-green-600 font-medium">+5</span>
                    <span className="ml-1">since last week</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Pending Orders</CardDescription>
                  <CardTitle className="text-2xl">3</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-xs text-muted-foreground">
                    <span>Needs your attention</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>New Messages</CardDescription>
                  <CardTitle className="text-2xl">7</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-xs text-muted-foreground">
                    <span>2 unread important</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Recent Activity and Suggested Matches */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-keshav-50 flex items-center justify-center flex-shrink-0">
                      <Package2 size={20} className="text-keshav-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">New inquiry for Sodium Hydroxide</p>
                      <p className="text-xs text-gray-500">From Chemical Processors Ltd • 20 minutes ago</p>
                      <div className="mt-2">
                        <Button variant="outline" size="sm">View Inquiry</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-keshav-50 flex items-center justify-center flex-shrink-0">
                      <Users size={20} className="text-keshav-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">New connection request</p>
                      <p className="text-xs text-gray-500">From ProChem Solutions • 2 hours ago</p>
                      <div className="mt-2 flex gap-2">
                        <Button size="sm" className="bg-keshav-600 hover:bg-keshav-700">Accept</Button>
                        <Button variant="outline" size="sm">Decline</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-keshav-50 flex items-center justify-center flex-shrink-0">
                      <File size={20} className="text-keshav-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Order #CH-1234 has been confirmed</p>
                      <p className="text-xs text-gray-500">Transaction completed • Yesterday</p>
                      <div className="mt-2">
                        <Badge variant="outline">Completed</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Suggested Matches */}
              <Card>
                <CardHeader>
                  <CardTitle>Suggested Matches</CardTitle>
                  <CardDescription>Based on your profile and activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-md p-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Building size={16} className="text-keshav-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">IndusChem Supplies</p>
                        <p className="text-xs text-gray-500">Chemical Distributor</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Matches your needs for industrial solvents and acids</p>
                    <Button variant="outline" size="sm" className="w-full">View Profile</Button>
                  </div>
                  
                  <div className="border rounded-md p-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Warehouse size={16} className="text-keshav-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">StoreTank Solutions</p>
                        <p className="text-xs text-gray-500">Storage Provider</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Has 5 storage tanks near your location</p>
                    <Button variant="outline" size="sm" className="w-full">View Profile</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Market Trends */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Market Trends</CardTitle>
                  <CardDescription>Recent price changes in key chemicals</CardDescription>
                </div>
                <Button variant="ghost" size="sm">
                  <BarChart3 size={16} className="mr-2" />
                  See All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-center text-sm text-gray-500 py-8">
                  <BarChart3 size={48} className="mx-auto mb-3 text-gray-300" />
                  <p>Market trend visualization will appear here</p>
                  <p className="text-xs mt-1">Connect your data sources to enable this feature</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="listings">
            <Card>
              <CardHeader>
                <CardTitle>My Listings</CardTitle>
                <CardDescription>Manage your chemical and storage listings</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Listings content would go here */}
                <div className="text-center text-sm text-gray-500 py-12">
                  <Package2 size={48} className="mx-auto mb-3 text-gray-300" />
                  <p>You haven't created any listings yet</p>
                  <Button className="mt-4 bg-keshav-600 hover:bg-keshav-700">
                    Create Your First Listing
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle>Transactions</CardTitle>
                <CardDescription>View and manage your orders and transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-sm text-gray-500 py-12">
                  <File size={48} className="mx-auto mb-3 text-gray-300" />
                  <p>No transactions yet</p>
                  <p className="text-xs mt-1">Your transaction history will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>Communicate with buyers, sellers, and partners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-sm text-gray-500 py-12">
                  <UserCircle size={48} className="mx-auto mb-3 text-gray-300" />
                  <p>No messages yet</p>
                  <p className="text-xs mt-1">When you connect with others, messages will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Track your performance and market insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-sm text-gray-500 py-12">
                  <BarChart3 size={48} className="mx-auto mb-3 text-gray-300" />
                  <p>Analytics dashboard is under development</p>
                  <p className="text-xs mt-1">This feature will be available soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
