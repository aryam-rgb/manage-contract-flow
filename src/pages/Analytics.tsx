
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Download
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const monthlyData = [
    { month: 'Jan', contracts: 15, signed: 12, pending: 3 },
    { month: 'Feb', contracts: 22, signed: 18, pending: 4 },
    { month: 'Mar', contracts: 28, signed: 24, pending: 4 },
    { month: 'Apr', contracts: 35, signed: 30, pending: 5 },
    { month: 'May', contracts: 42, signed: 38, pending: 4 },
    { month: 'Jun', contracts: 38, signed: 35, pending: 3 },
  ];

  const contractTypes = [
    { name: 'Employment', value: 35, color: '#3b82f6' },
    { name: 'NDA', value: 25, color: '#10b981' },
    { name: 'Service', value: 20, color: '#f59e0b' },
    { name: 'License', value: 15, color: '#ef4444' },
    { name: 'Other', value: 5, color: '#6b7280' },
  ];

  const metrics = [
    {
      title: "Total Contracts",
      value: "247",
      change: "+12%",
      trend: "up",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Avg. Approval Time",
      value: "2.4 days",
      change: "-8%",
      trend: "down",
      icon: Clock,
      color: "text-yellow-600"
    },
    {
      title: "Success Rate",
      value: "94.2%",
      change: "+3%",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "At Risk",
      value: "8",
      change: "-2",
      trend: "down",
      icon: AlertTriangle,
      color: "text-red-600"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Track performance and contract metrics</p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
              <metric.icon className={`h-5 w-5 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="flex items-center mt-1">
                <TrendingUp className={`h-4 w-4 mr-1 ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`} />
                <span className={`text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change} from last month
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Contract Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Contract Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="contracts" fill="#3b82f6" name="Total Contracts" />
                <Bar dataKey="signed" fill="#10b981" name="Signed" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Contract Types Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Contract Types</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={contractTypes}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {contractTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Approval Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Approval Timeline Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="signed" 
                stroke="#10b981" 
                strokeWidth={3}
                name="Signed Contracts"
              />
              <Line 
                type="monotone" 
                dataKey="pending" 
                stroke="#f59e0b" 
                strokeWidth={3}
                name="Pending Approval"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Performance Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">247</div>
              <div className="text-gray-600">Total Contracts</div>
              <Badge className="mt-2 bg-blue-100 text-blue-800">This Year</Badge>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">94.2%</div>
              <div className="text-gray-600">Success Rate</div>
              <Badge className="mt-2 bg-green-100 text-green-800">Above Target</Badge>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600 mb-2">2.4</div>
              <div className="text-gray-600">Avg. Days to Sign</div>
              <Badge className="mt-2 bg-yellow-100 text-yellow-800">Improving</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
