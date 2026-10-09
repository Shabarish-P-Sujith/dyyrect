'use client';
import React from 'react';
import { ArrowUpRight, ArrowDownRight, MoreVertical, Star } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'Electronic', value: 55640, color: '#FFFFFF' },
  { name: 'Furniture', value: 11420, color: '#A1A1AA' },
  { name: 'Clothes', value: 1840, color: '#71717A' },
  { name: 'Shoes', value: 2120, color: '#3F3F46' },
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
        <button className="flex items-center gap-2 bg-[#121217] px-4 py-2 rounded-lg text-sm text-zinc-300 hover:text-white transition-colors border border-white/[0.08] cursor-pointer">
          Today
          <ArrowDownRight className="w-3 h-3 text-zinc-500" />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Net Revenue */}
        <div className="bg-[#101015] p-5 rounded-2xl border border-white/[0.08] relative overflow-hidden">
          <div className="text-zinc-400 text-sm font-medium mb-1">Net revenue</div>
          <div className="text-3xl font-bold text-white mb-2">$3,131,021</div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="flex items-center text-white font-medium">
              <ArrowUpRight className="w-3 h-3 text-zinc-300" />
              0.4%
            </span>
            <span className="text-zinc-500">vs last month</span>
          </div>
        </div>

        {/* ARR */}
        <div className="bg-[#101015] p-5 rounded-2xl border border-white/[0.08] relative overflow-hidden">
          <div className="text-zinc-400 text-sm font-medium mb-1">ARR</div>
          <div className="text-3xl font-bold text-white mb-2">$1,511,121</div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="flex items-center text-white font-medium">
              <ArrowUpRight className="w-3 h-3 text-zinc-300" />
              32%
            </span>
            <span className="text-zinc-500">vs last quarter</span>
          </div>
        </div>

        {/* Quarterly revenue goal */}
        <div className="bg-[#101015] p-5 rounded-2xl border border-white/[0.08] relative flex justify-between items-center">
          <div>
            <div className="text-zinc-400 text-sm font-medium mb-1">Quarterly revenue goal</div>
            <div className="text-3xl font-bold text-white mb-2">71%</div>
            <div className="text-xs text-zinc-500">Goal: $1,1M</div>
          </div>
          <div className="w-16 h-16 rounded-full border-[6px] border-white/15 relative">
            <div className="absolute inset-0 rounded-full border-[6px] border-white border-t-transparent border-r-transparent -rotate-45"></div>
          </div>
        </div>

        {/* New orders */}
        <div className="bg-[#101015] p-5 rounded-2xl border border-white/[0.08] relative overflow-hidden">
          <div className="text-zinc-400 text-sm font-medium mb-1">New orders</div>
          <div className="text-3xl font-bold text-white mb-2">18,221</div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="flex items-center text-white font-medium">
              <ArrowUpRight className="w-3 h-3 text-zinc-300" />
              11%
            </span>
            <span className="text-zinc-500">vs last quarter</span>
          </div>
        </div>
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Sales Overview */}
        <div className="lg:col-span-2 bg-[#101015] p-6 rounded-2xl border border-white/[0.08] relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Sales Overview</h3>
            <button className="text-zinc-500 hover:text-white cursor-pointer"><MoreVertical className="w-4 h-4" /></button>
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
                <span className="text-xs text-zinc-400">Weekly Visits</span>
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4 border-b border-white/[0.08] pb-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-lg border border-white/15">
                  $
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Number of Sales</div>
                  <div className="text-xl font-bold text-white">$71,020</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {data.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}}></div>
                      <span className="text-xs text-zinc-400">{item.name}</span>
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
            <div className="bg-[#101015] p-4 rounded-2xl border border-white/[0.08]">
              <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center mb-3 border border-white/10">
                <Star className="w-4 h-4" />
              </div>
              <div className="text-xs text-zinc-400 mb-1">New customers</div>
              <div className="text-xl font-bold text-white mb-1">862 <span className="text-zinc-500 text-xs ml-1 font-normal">-8%</span></div>
              <div className="text-xs text-zinc-500">Last Week</div>
            </div>
            <div className="bg-[#101015] p-4 rounded-2xl border border-white/[0.08]">
              <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center mb-3 border border-white/10">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="text-xs text-zinc-400 mb-1">Total profit</div>
              <div className="text-xl font-bold text-white mb-1">$25.6k <span className="text-white text-xs ml-1 font-semibold">+42%</span></div>
              <div className="text-xs text-zinc-500">Weekly Profit</div>
            </div>
          </div>
          
          <div className="bg-[#101015] p-5 rounded-2xl border border-white/[0.08] flex-1 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="text-sm font-semibold text-white mb-1">Total Profit:</div>
              <div className="text-xs text-zinc-400 mb-1 border-l-2 border-white pl-2">February, 2024</div>
              <div className="text-2xl font-bold text-white">$136,755.77</div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-24">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <Line type="monotone" dataKey="value" stroke="#FFFFFF" strokeWidth={2.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Customer List */}
        <div className="lg:col-span-2 bg-[#101015] p-6 rounded-2xl border border-white/[0.08]">
           <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Customer list</h3>
            <button className="text-zinc-500 hover:text-white cursor-pointer"><MoreVertical className="w-4 h-4" /></button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] text-xs text-zinc-500 uppercase">
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
                <tr key={i} className="border-b border-white/[0.08] last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <img src={c.img} alt="" className="w-10 h-10 rounded-full bg-zinc-800 grayscale contrast-125 border border-white/10" />
                      <div>
                        <div className="text-sm font-medium text-white">{c.name}</div>
                        <div className="text-xs text-zinc-500">{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-zinc-300">{c.deals}</td>
                  <td className="py-3 text-sm font-medium text-white text-right">{c.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Premium Plan Card */}
        <div className="bg-gradient-to-b from-[#18181f] via-[#101014] to-[#08080a] p-6 rounded-2xl border border-white/15 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4">
            <button className="text-zinc-500 hover:text-white cursor-pointer"><MoreVertical className="w-4 h-4" /></button>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-xs font-medium text-white mb-6">
            <Star className="w-3 h-3 fill-white" />
            Premium Plan
          </div>
          
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-5xl font-bold text-white tracking-tighter">$30</span>
            <span className="text-sm text-zinc-400 leading-tight">Per Month<br/>Per User</span>
          </div>
          
          <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
            Improve your workplace, view and analyze your profits and losses with real-time stream logs ✨
          </p>
          
          <div className="flex items-center gap-3">
            <button className="flex-1 bg-white text-black font-semibold py-3 rounded-xl hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.18)] cursor-pointer">
              Get Started
            </button>
            <button className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
              <Star className="w-5 h-5 fill-current" />
            </button>
          </div>

          {/* Decorative ambient lighting */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-[80px] opacity-10 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-[80px] opacity-5 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
