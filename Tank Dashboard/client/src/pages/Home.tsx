import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  projectMilestones,
  userTargets,
  kpis,
  risks,
  financialProjection,
  revenueProjection,
  breakEvenAnalysis,
} from '@/lib/dashboardData';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { TrendingUp, AlertTriangle, Users, Target, Zap } from 'lucide-react';

/**
 * Tank Platform Interactive Dashboard
 * Design: Scandinavian Precision - Teal & Amber palette
 * Typography: Poppins (headers) + Inter (body)
 * Layout: 3-column responsive grid with sidebar navigation
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  const getRiskColor = (likelihood: string, impact: string) => {
    const score = (likelihood === 'High' ? 3 : likelihood === 'Medium' ? 2 : 1) +
                  (impact === 'High' ? 3 : impact === 'Medium' ? 2 : 1);
    if (score >= 5) return 'bg-red-50 border-red-200';
    if (score >= 3) return 'bg-amber-50 border-amber-200';
    return 'bg-green-50 border-green-200';
  };

  const getMilestoneIcon = (status: string) => {
    if (status === 'completed') return '✓';
    if (status === 'in-progress') return '◐';
    return '○';
  };

  const getMilestoneColor = (status: string) => {
    if (status === 'completed') return 'bg-teal-100 text-teal-700';
    if (status === 'in-progress') return 'bg-amber-100 text-amber-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-80 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-teal-900 mb-2">Tank Platform</h1>
          <p className="text-xl text-teal-800 max-w-2xl">
            Interactive Investment Platform Dashboard - Real-time metrics, milestones, and strategic insights
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="kpis">KPIs</TabsTrigger>
            <TabsTrigger value="risks">Risks</TabsTrigger>
            <TabsTrigger value="financials" className="hidden lg:inline-flex">Financials</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Key Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-teal-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                    <Users className="w-4 h-4 text-teal-600" />
                    Target Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-teal-700">5,000+</div>
                  <p className="text-xs text-gray-500 mt-1">By end of Year 1</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-teal-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                    <Target className="w-4 h-4 text-teal-600" />
                    Break-even
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-teal-700">Month 18</div>
                  <p className="text-xs text-gray-500 mt-1">Projected profitability</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-600" />
                    Funding Need
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-700">€500K</div>
                  <p className="text-xs text-gray-500 mt-1">Initial capital</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-teal-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-teal-600" />
                    Expansion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-teal-700">EU</div>
                  <p className="text-xs text-gray-500 mt-1">Q4 target market</p>
                </CardContent>
              </Card>
            </div>

            {/* User Growth & Financial Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Growth Projection</CardTitle>
                  <CardDescription>Quarterly user acquisition targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={financialProjection}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="quarters" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #D1D5DB',
                          borderRadius: '8px',
                        }}
                      />
                      <Bar dataKey="users" fill="#0D9488" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue vs Costs</CardTitle>
                  <CardDescription>Financial projection by quarter</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={financialProjection}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="quarters" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #D1D5DB',
                          borderRadius: '8px',
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#0D9488"
                        strokeWidth={2}
                        dot={{ fill: '#0D9488' }}
                      />
                      <Line
                        type="monotone"
                        dataKey="costs"
                        stroke="#F59E0B"
                        strokeWidth={2}
                        dot={{ fill: '#F59E0B' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* User Targets */}
            <Card>
              <CardHeader>
                <CardTitle>User Acquisition Targets</CardTitle>
                <CardDescription>Quarterly growth milestones and objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {userTargets.map((target, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-900">{target.tier}</h4>
                          <p className="text-sm text-gray-600">{target.months}</p>
                        </div>
                        <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                          {target.goal.toLocaleString()} users
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{target.description}</p>
                      <Progress
                        value={(idx + 1) * 25}
                        className="h-2 bg-gray-200"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Timeline</CardTitle>
                <CardDescription>12-month development roadmap with key milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectMilestones.map((milestone, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg border-2 transition-all ${getRiskColor(
                        milestone.status === 'completed' ? 'Low' : 'Medium',
                        'High'
                      )}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${getMilestoneColor(
                            milestone.status
                          )}`}
                        >
                          {getMilestoneIcon(milestone.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                            <Badge
                              variant="secondary"
                              className={
                                milestone.status === 'completed'
                                  ? 'bg-teal-100 text-teal-700'
                                  : milestone.status === 'in-progress'
                                    ? 'bg-amber-100 text-amber-700'
                                    : 'bg-gray-100 text-gray-700'
                              }
                            >
                              {milestone.status === 'completed'
                                ? 'Completed'
                                : milestone.status === 'in-progress'
                                  ? 'In Progress'
                                  : 'Upcoming'}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{milestone.description}</p>
                          <p className="text-xs font-semibold text-gray-500">
                            {milestone.quarter} • {milestone.month}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* KPIs Tab */}
          <TabsContent value="kpis" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['engagement', 'business', 'technical'].map((category) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                    {category} KPIs
                  </h3>
                  <div className="space-y-3">
                    {kpis
                      .filter((kpi) => kpi.category === category)
                      .map((kpi, idx) => (
                        <Card key={idx} className="hover:shadow-md transition-shadow">
                          <CardContent className="pt-4">
                            <h4 className="font-semibold text-sm text-gray-900 mb-1">
                              {kpi.name}
                            </h4>
                            <p className="text-xs text-gray-600 mb-3">{kpi.description}</p>
                            <div className="flex justify-between items-end">
                              <div>
                                <p className="text-2xl font-bold text-teal-700">{kpi.value}</p>
                                {kpi.target && (
                                  <p className="text-xs text-gray-500 mt-1">Target: {kpi.target}</p>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Risks Tab */}
          <TabsContent value="risks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Risk Analysis & Mitigation</CardTitle>
                <CardDescription>
                  Identified risks with likelihood, impact, and mitigation strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {risks.map((risk, idx) => {
                    const riskScore =
                      (risk.likelihood === 'High' ? 3 : risk.likelihood === 'Medium' ? 2 : 1) +
                      (risk.impact === 'High' ? 3 : risk.impact === 'Medium' ? 2 : 1);
                    const riskLevel =
                      riskScore >= 5 ? 'Critical' : riskScore >= 3 ? 'Medium' : 'Low';
                    const riskBgColor =
                      riskScore >= 5
                        ? 'bg-red-50 border-red-200'
                        : riskScore >= 3
                          ? 'bg-amber-50 border-amber-200'
                          : 'bg-green-50 border-green-200';

                    return (
                      <div key={idx} className={`p-4 rounded-lg border-2 ${riskBgColor}`}>
                        <div className="flex items-start gap-3 mb-3">
                          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{risk.name}</h4>
                            <div className="flex gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                Likelihood: {risk.likelihood}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Impact: {risk.impact}
                              </Badge>
                              <Badge
                                className={`text-xs ${
                                  riskLevel === 'Critical'
                                    ? 'bg-red-100 text-red-700'
                                    : riskLevel === 'Medium'
                                      ? 'bg-amber-100 text-amber-700'
                                      : 'bg-green-100 text-green-700'
                                }`}
                              >
                                {riskLevel}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white/50 p-3 rounded border border-current border-opacity-10">
                          <p className="text-sm font-semibold text-gray-700 mb-1">Mitigation:</p>
                          <p className="text-sm text-gray-600">{risk.mitigation}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financials Tab */}
          <TabsContent value="financials" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Break-even Analysis</CardTitle>
                  <CardDescription>Path to profitability</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <p className="text-sm text-gray-600 mb-1">Break-even Month</p>
                    <p className="text-3xl font-bold text-teal-700">
                      Month {breakEvenAnalysis.breakEvenMonth}
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-sm text-gray-600 mb-1">Break-even Users</p>
                    <p className="text-3xl font-bold text-amber-700">
                      {breakEvenAnalysis.breakEvenUsers.toLocaleString()}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Monthly Burn Rate</p>
                    <p className="text-3xl font-bold text-gray-700">
                      €{breakEvenAnalysis.monthlyBurn.toLocaleString()}
                    </p>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <p className="text-sm text-gray-600 mb-1">Target Funding</p>
                    <p className="text-3xl font-bold text-teal-700">
                      €{breakEvenAnalysis.targetFunding.toLocaleString()}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quarterly Revenue Projection</CardTitle>
                  <CardDescription>Expected revenue growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={revenueProjection}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: €${value}`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        <Cell fill="#0D9488" />
                        <Cell fill="#14B8A6" />
                        <Cell fill="#0F766E" />
                        <Cell fill="#134E4A" />
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #D1D5DB',
                          borderRadius: '8px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>Tank Platform Dashboard • Interactive Project Visualization</p>
          <p className="mt-2 text-xs text-gray-500">
            Data extracted from TankDokument.pdf • Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </footer>
    </div>
  );
}
