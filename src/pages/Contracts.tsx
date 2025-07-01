
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  FileText, 
  Clock, 
  CheckCircle, 
  Edit, 
  Eye,
  MoreHorizontal
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Contracts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const contracts = [
    { 
      id: 1, 
      name: "Employment Contract - Sarah Johnson", 
      status: "signed", 
      type: "Employment",
      parties: ["Initech Ltd", "Sarah Johnson"],
      created: "2024-01-10",
      expires: "2025-01-10",
      value: "$85,000"
    },
    { 
      id: 2, 
      name: "NDA - TechCorp Partnership", 
      status: "pending", 
      type: "NDA",
      parties: ["Initech Ltd", "TechCorp Ltd"],
      created: "2024-01-12",
      expires: "2027-01-12",
      value: "-"
    },
    { 
      id: 3, 
      name: "Service Agreement - Marketing Campaign", 
      status: "draft", 
      type: "Service",
      parties: ["Initech Ltd", "Creative Agency"],
      created: "2024-01-08",
      expires: "2024-06-08",
      value: "$25,000"
    },
    { 
      id: 4, 
      name: "Software License Agreement", 
      status: "pending", 
      type: "License",
      parties: ["Initech Ltd", "SoftwareCorp"],
      created: "2024-01-05",
      expires: "2025-01-05",
      value: "$12,000"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "signed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100"><CheckCircle className="h-3 w-3 mr-1" />Signed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100"><Edit className="h-3 w-3 mr-1" />Draft</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const filterContractsByStatus = (status: string) => {
    if (status === "all") return contracts;
    return contracts.filter(contract => contract.status === status);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contracts</h1>
          <p className="text-gray-600 mt-1">Manage and track all your contracts</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <FileText className="h-4 w-4 mr-2" />
          New Contract
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search contracts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contract Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Contracts</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="signed">Signed</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ContractList contracts={contracts} />
        </TabsContent>
        <TabsContent value="draft">
          <ContractList contracts={filterContractsByStatus("draft")} />
        </TabsContent>
        <TabsContent value="pending">
          <ContractList contracts={filterContractsByStatus("pending")} />
        </TabsContent>
        <TabsContent value="signed">
          <ContractList contracts={filterContractsByStatus("signed")} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ContractList = ({ contracts }: { contracts: any[] }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "signed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100"><CheckCircle className="h-3 w-3 mr-1" />Signed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100"><Edit className="h-3 w-3 mr-1" />Draft</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      {contracts.map((contract) => (
        <Card key={contract.id} className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-semibold text-gray-900">{contract.name}</h3>
                  {getStatusBadge(contract.status)}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Type:</span> {contract.type}
                  </div>
                  <div>
                    <span className="font-medium">Created:</span> {contract.created}
                  </div>
                  <div>
                    <span className="font-medium">Expires:</span> {contract.expires}
                  </div>
                  <div>
                    <span className="font-medium">Value:</span> {contract.value}
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-gray-600">
                    <span className="font-medium">Parties:</span> {contract.parties.join(", ")}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Download</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Contracts;
