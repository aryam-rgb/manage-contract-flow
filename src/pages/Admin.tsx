
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Settings, 
  Shield, 
  Plus,
  Search,
  Edit,
  Trash2,
  MoreHorizontal
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Admin = () => {
  const users = [
    {
      id: 1,
      name: "Richard Hendricks",
      email: "richard@initech.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2024-01-15",
      contractsCreated: 45
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@initech.com",
      role: "Manager",
      status: "Active",
      lastLogin: "2024-01-14",
      contractsCreated: 23
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike@initech.com",
      role: "User",
      status: "Active",
      lastLogin: "2024-01-13",
      contractsCreated: 12
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@initech.com",
      role: "User",
      status: "Inactive",
      lastLogin: "2024-01-05",
      contractsCreated: 8
    }
  ];

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Admin":
        return <Badge className="bg-purple-100 text-purple-800">Admin</Badge>;
      case "Manager":
        return <Badge className="bg-blue-100 text-blue-800">Manager</Badge>;
      case "User":
        return <Badge className="bg-gray-100 text-gray-800">User</Badge>;
      default:
        return <Badge>{role}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "Inactive":
        return <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-gray-600 mt-1">Manage users, permissions, and system settings</p>
        </div>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="settings">System Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  User Management
                </CardTitle>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search users..." className="pl-10" />
                </div>
              </div>

              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{user.name}</h3>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-900">{user.contractsCreated}</div>
                        <div className="text-xs text-gray-500">Contracts</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-900">{user.lastLogin}</div>
                        <div className="text-xs text-gray-500">Last Login</div>
                      </div>
                      {getRoleBadge(user.role)}
                      {getStatusBadge(user.status)}
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit User
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Shield className="h-4 w-4 mr-2" />
                            Change Role
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Role Permissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {["Admin", "Manager", "User"].map((role) => (
                  <div key={role} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-3">{role} Permissions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        "Create Contracts",
                        "Edit Contracts", 
                        "Delete Contracts",
                        "Approve Contracts",
                        "Manage Users",
                        "View Analytics"
                      ].map((permission) => (
                        <label key={permission} className="flex items-center space-x-2">
                          <input 
                            type="checkbox" 
                            className="rounded border-gray-300"
                            defaultChecked={role === "Admin" || (role === "Manager" && permission !== "Manage Users")}
                          />
                          <span className="text-sm text-gray-700">{permission}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                System Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">General Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Auto-save drafts</label>
                      <p className="text-sm text-gray-500">Automatically save contract drafts every 30 seconds</p>
                    </div>
                    <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Email notifications</label>
                      <p className="text-sm text-gray-500">Send email notifications for contract updates</p>
                    </div>
                    <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Two-factor authentication</label>
                      <p className="text-sm text-gray-500">Require 2FA for all admin users</p>
                    </div>
                    <input type="checkbox" className="rounded border-gray-300" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Contract Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Default contract expiry</label>
                    <Input defaultValue="12 months" className="w-48" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Signature reminder interval</label>
                    <Input defaultValue="3 days" className="w-48" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
