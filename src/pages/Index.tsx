import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, FileText, TrendingUp, AlertCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user, userRole } = useAuth();

  const sampleLogins = [
    {
      email: "admin@contractflow.com",
      password: "admin123",
      role: "Admin",
      description: "Full system access"
    },
    {
      email: "john.mwangi@kcbbank.com",
      password: "password123",
      role: "User",
      description: "Finance Dept - Procurement Unit"
    },
    {
      email: "sarah.wanjiku@kcbbank.com",
      password: "password123",
      role: "Reviewer",
      description: "Legal Dept - Review Unit"
    },
    {
      email: "peter.kiprotich@kcbbank.com",
      password: "password123",
      role: "Approval",
      description: "Legal Dept - Approval Unit"
    },
    {
      email: "mary.akinyi@kcbbank.com",
      password: "password123",
      role: "User",
      description: "HR Dept - Recruitment Unit"
    },
    {
      email: "david.kimani@kcbbank.com",
      password: "password123",
      role: "User",
      description: "IT Dept - Technology Unit"
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin':
        return 'bg-destructive/10 text-destructive';
      case 'Approval':
        return 'bg-primary/10 text-primary';
      case 'Reviewer':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <Building2 className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">KCB Bank</h1>
            <p className="text-lg text-primary font-medium">Contract Management System</p>
          </div>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Welcome to the KCB Bank Contract Management System. Streamline your contract workflows 
          with department-based approval processes and comprehensive tracking.
        </p>
      </div>

      {/* Current User Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Current Session
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{user?.email}</p>
              <p className="text-sm text-muted-foreground">
                Role: <Badge className={getRoleColor(userRole || 'User')}>{userRole}</Badge>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Contracts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">24</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent-foreground">7</div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">KES 125M</div>
            <p className="text-xs text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>
      </div>

      {/* Sample Login Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertCircle className="mr-2 h-5 w-5 text-primary" />
            Sample Login Credentials
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sampleLogins.map((login, index) => (
              <div key={index} className="p-4 rounded-lg border border-border bg-muted/20">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge className={getRoleColor(login.role)}>{login.role}</Badge>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{login.email}</p>
                    <p className="text-sm text-muted-foreground">Password: {login.password}</p>
                    <p className="text-xs text-muted-foreground mt-1">{login.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-accent/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Workflow:</strong> Users submit contracts → Reviewers evaluate → Approvers finalize
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
