
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Clock, CheckCircle, AlertCircle, TrendingUp, Users } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Total Contracts", value: "247", icon: FileText, color: "bg-blue-500" },
    { title: "Pending Approval", value: "12", icon: Clock, color: "bg-yellow-500" },
    { title: "Signed This Month", value: "34", icon: CheckCircle, color: "bg-green-500" },
    { title: "Expiring Soon", value: "8", icon: AlertCircle, color: "bg-red-500" },
  ];

  const recentContracts = [
    { id: 1, name: "Employment Contract - John Doe", status: "pending", date: "2024-01-15", type: "Employment" },
    { id: 2, name: "NDA - TechCorp Ltd", status: "signed", date: "2024-01-14", type: "NDA" },
    { id: 3, name: "Service Agreement - ABC Inc", status: "draft", date: "2024-01-13", type: "Service" },
    { id: 4, name: "Partnership Agreement", status: "pending", date: "2024-01-12", type: "Partnership" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "signed":
        return <Badge className="bg-green-100 text-green-800">Signed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800">Draft</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your contracts.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <FileText className="h-4 w-4 mr-2" />
          Create New Contract
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Contracts */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Recent Contracts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentContracts.map((contract) => (
                <div key={contract.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{contract.name}</h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-gray-500">{contract.type}</span>
                      <span className="text-sm text-gray-500">{contract.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {getStatusBadge(contract.status)}
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="p-6 h-auto flex flex-col space-y-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <span>Create Contract</span>
            </Button>
            <Button variant="outline" className="p-6 h-auto flex flex-col space-y-2">
              <Users className="h-8 w-8 text-green-600" />
              <span>Manage Users</span>
            </Button>
            <Button variant="outline" className="p-6 h-auto flex flex-col space-y-2">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <span>View Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
