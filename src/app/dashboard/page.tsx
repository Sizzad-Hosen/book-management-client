// app/dashboard/page.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl text-orange-600 font-bold">1,234</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Products</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">567</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl text-green-600  font-bold">89</p>
        </CardContent>
      </Card>

      <div className="col-span-full">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Recent activity items would go here */}
              <p>No recent activity</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;