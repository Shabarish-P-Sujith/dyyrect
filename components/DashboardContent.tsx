'use client';
import React from 'react';
import { ArrowUpRight, ArrowDownRight, MoreVertical, Star } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Electronic', value: 55640, color: '#97F84F' },
  { name: 'Furniture', value: 11420, color: '#38A169' },
  { name: 'Clothes', value: 1840, color: '#718096' },
  { name: 'Shoes', value: 2120, color: '#A0AEC0' },
];

const lineData = [
  { name: 'Feb 1', value: 100000 },
  { name: 'Feb 5', value: 110000 },
  { name: 'Feb 10', value: 105000 },
  { name: 'Feb 15', value: 125000 },
  { name: 'Feb 20', value: 136755 },
];

export default function DashboardContent({ title = 'Overview' }: { title?: string }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <button className="flex items-center gap-2 bg-[#24272C] px-4 py-2 rounded-lg text-sm text-neutral-300 hover:text-white transition-colors border border-white/5">
          Today
          <ArrowDownRight className="w-3 h-3 text-neutral-500" />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Net Revenue */}
        <div className="bg-[#24272C] p-5 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="text-neutral-400 text-sm font-medium mb-1">Net revenue</div>
          <div className="text-3xl font-bold text-white mb-2">$3,131,021</div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="flex items-center text-[#97F84F]">
              <ArrowUpRight className="w-3 h-3" />
              0.4%
            </span>
            <span className="text-neutral-500">vs last month</span>
          </div>
        </div>

        {/* ARR */}
        <div className="bg-[#24272C] p-5 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="text-neutral-400 text-sm font-medium mb-1">ARR</div>
          <div className="text-3xl font-bold text-white mb-2">$1,511,121</div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="flex items-center text-[#97F84F]">
              <ArrowUpRight className="w-3 h-3" />
              32%
            </span>
            <span className="text-neutral-500">vs last quarter</span>
          </div>
        </div>

        {/* Quarterly revenue goal */}
        <div className="bg-[#24272C] p-5 rounded-2xl border border-white/5 relative flex justify-between items-center">
          <div>
            <div className="text-neutral-400 text-sm font-medium mb-1">Quarterly revenue goal</div>
            <div className="text-3xl font-bold text-white mb-2">71%</div>
            <div className="text-xs text-neutral-500">Goal: $1,1M</div>
          </div>
          <div className="w-16 h-16 rounded-full border-[6px] border-[#97F84F]/20 relative">
            <div className="absolute inset-0 rounded-full border-[6px] border-[#97F84F] border-t-transparent border-r-transparent -rotate-45"></div>
          </div>
        </div>

        {/* New orders */}
        <div className="bg-[#24272C] p-5 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="text-neutral-400 text-sm font-medium mb-1">New orders</div>
          <div className="text-3xl font-bold text-white mb-2">18,221</div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="flex items-center text-[#97F84F]">
              <ArrowUpRight className="w-3 h-3" />
              11%
            </span>
            <span className="text-neutral-500">vs last quarter</span>
          </div>
        </div>
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Sales Overview */}
        <div className="lg:col-span-2 bg-[#24272C] p-6 rounded-2xl border border-white/5 relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Sales Overview</h3>
            <button className="text-neutral-500 hover:text-white"><MoreVertical className="w-4 h-4" /></button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xl font-bold text-white">102k</span>
                <span className="text-xs text-neutral-400">Weekly Visits</span>
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                <div className="w-10 h-10 rounded bg-[#97F84F]/20 text-[#97F84F] flex items-center justify-center font-bold text-lg">
                  $
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Number of Sales</div>
                  <div className="text-xl font-bold text-white">$71,020</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {data.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}}></div>
                      <span className="text-xs text-neutral-400">{item.name}</span>
                    </div>
                    <div className="text-lg font-semibold text-white">${(item.value / 1000).toFixed(1)}k</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side widgets */}
        <div className="space-y-4 flex flex-col">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#24272C] p-4 rounded-2xl border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-[#97F84F]/20 text-[#97F84F] flex items-center justify-center mb-3">
                <Star className="w-4 h-4" />
              </div>
              <div className="text-xs text-neutral-400 mb-1">New customers</div>
              <div className="text-xl font-bold text-white mb-1">862 <span className="text-red-400 text-xs ml-1 font-normal">-8%</span></div>
              <div className="text-xs text-neutral-500">Last Week</div>
            </div>
            <div className="bg-[#24272C] p-4 rounded-2xl border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-[#97F84F]/20 text-[#97F84F] flex items-center justify-center mb-3">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="text-xs text-neutral-400 mb-1">Total profit</div>
              <div className="text-xl font-bold text-white mb-1">$25.6k <span className="text-[#97F84F] text-xs ml-1 font-normal">+42%</span></div>
              <div className="text-xs text-neutral-500">Weekly Profit</div>
            </div>
          </div>
          
          <div className="bg-[#24272C] p-5 rounded-2xl border border-white/5 flex-1 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="text-sm font-semibold text-white mb-1">Total Profit:</div>
              <div className="text-xs text-neutral-400 mb-1 border-l-2 border-[#97F84F] pl-2">February, 2024</div>
              <div className="text-2xl font-bold text-white">$136,755.77</div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-24">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <Line type="monotone" dataKey="value" stroke="#97F84F" strokeWidth={3} dot={false} fill="url(#colorUv)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            {/* faint grid background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Customer List */}
        <div className="lg:col-span-2 bg-[#24272C] p-6 rounded-2xl border border-white/5">
           <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Customer list</h3>
            <button className="text-neutral-500 hover:text-white"><MoreVertical className="w-4 h-4" /></button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-xs text-neutral-500 uppercase">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Deals</th>
                <th className="pb-3 font-medium text-right">Total Deal Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Danny Liu', email: 'danny@gmail.com', deals: '1,023', val: '$37,431', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=danny' },
                { name: 'Bella Deviant', email: 'bella@gmail.com', deals: '963', val: '$30,423', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bella' },
                { name: 'Darrell Steward', email: 'darrell@gmail.com', deals: '843', val: '$28,549', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=darrell' },
              ].map((c, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <img src={c.img} alt="" className="w-10 h-10 rounded-full bg-neutral-800" />
                      <div>
                        <div className="text-sm font-medium text-white">{c.name}</div>
                        <div className="text-xs text-neutral-500">{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-neutral-300">{c.deals}</td>
                  <td className="py-3 text-sm font-medium text-white text-right">{c.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Premium Plan Card */}
        <div className="bg-gradient-to-br from-[#1A3320] to-[#0D1A10] p-6 rounded-2xl border border-[#97F84F]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <button className="text-neutral-500 hover:text-white"><MoreVertical className="w-4 h-4" /></button>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-[#97F84F] mb-6">
            <Star className="w-3 h-3 fill-[#97F84F]" />
            Premium Plane
          </div>
          
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-5xl font-bold text-white tracking-tighter">$30</span>
            <span className="text-sm text-neutral-400 leading-tight">Per Month<br/>Per User</span>
          </div>
          
          <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
            Improve your workplace, view and analyze your profits and losses ✨
          </p>
          
          <div className="flex items-center gap-3">
            <button className="flex-1 bg-[#97F84F] text-black font-semibold py-3 rounded-xl hover:bg-[#86e043] transition-colors shadow-[0_0_15px_rgba(151,248,79,0.2)]">
              Get Started
            </button>
            <button className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <Star className="w-5 h-5 fill-current" />
            </button>
          </div>

          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#97F84F] rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#97F84F] rounded-full blur-[80px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}
