'use client';
import React from 'react';
import Link from 'next/link';
import { 
  Search, LayoutDashboard, ShoppingCart, BarChart2, Users, 
  MessageSquare, Star, Settings, HelpCircle,
  Moon, RotateCw, Globe,
  MoreVertical, Phone, Mail
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: string;
}

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#050507] text-white flex font-sans selection:bg-white selection:text-black">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 border-r border-white/[0.07] flex flex-col bg-[#0a0a0d]">
        {/* User Profile */}
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-white to-zinc-600 p-0.5">
            <div className="w-full h-full rounded-full bg-[#0e0e12] flex items-center justify-center overflow-hidden">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${role}`} alt="Avatar" className="w-full h-full object-cover grayscale contrast-125" />
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm capitalize text-white">{role} User</div>
            <div className="text-xs text-zinc-400 capitalize">{role} Account</div>
          </div>
        </div>

        {/* Search */}
        <div className="px-6 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-[#141419] rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/40 border border-white/[0.08] focus:border-white/40 transition-all text-zinc-200 placeholder:text-zinc-600"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded bg-[#0a0a0d] border border-white/10 text-[10px] text-zinc-500 font-mono">
              ⌘K
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6 scrollbar-hide">
          {/* Dashboards Section */}
          <div>
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-3 px-2">DASHBOARDS</div>
            <nav className="space-y-1">
              <Link href={`/${role}`} className="flex items-center justify-between px-3 py-2 rounded-lg bg-white text-black font-semibold transition-colors group shadow-[0_0_12px_rgba(255,255,255,0.12)]">
                <div className="flex items-center gap-3">
                  <LayoutDashboard className="w-4 h-4" />
                  <span className="text-sm">Overview</span>
                </div>
              </Link>
              <Link href={`/${role}/ecommerce`} className="flex items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-4 h-4" />
                  <span className="text-sm">eCommerce</span>
                </div>
              </Link>
              <Link href={`/${role}/analytics`} className="flex items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3">
                  <BarChart2 className="w-4 h-4" />
                  <span className="text-sm">Analytics</span>
                </div>
              </Link>
              <Link href={`/${role}/customers`} className="flex items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Customers</span>
                </div>
              </Link>
            </nav>
          </div>

          {/* Settings Section */}
          <div>
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-3 px-2">SETTINGS</div>
            <nav className="space-y-1">
              <Link href={`/${role}/messages`} className="flex items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm">Messages</span>
                </div>
              </Link>
              <Link href={`/${role}/reviews`} className="flex items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">Customer Reviews</span>
                </div>
              </Link>
              <Link href={`/${role}/settings`} className="flex items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3">
                  <Settings className="w-4 h-4" />
                  <span className="text-sm">Settings</span>
                </div>
              </Link>
              <Link href={`/${role}/help`} className="flex items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4" />
                  <span className="text-sm">Help Centre</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
        
        {/* Logo Bottom */}
        <div className="p-6">
          <div className="flex items-center justify-center gap-2 text-white font-bold tracking-widest text-lg opacity-80 hover:opacity-100 transition-opacity">
            <LayoutDashboard className="w-5 h-5" />
            DWISON
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#050507]">
        {/* Topbar */}
        <header className="h-16 border-b border-white/[0.07] flex items-center justify-between px-8 bg-[#0a0a0d]/80 backdrop-blur-sm z-10 sticky top-0">
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <LayoutDashboard className="w-4 h-4 text-zinc-500" />
            <Star className="w-4 h-4 text-zinc-500" />
            <span>Dashboards</span>
            <span className="text-zinc-600">/</span>
            <span className="text-white font-medium">Overview</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/[0.06] cursor-pointer">
              <Moon className="w-5 h-5" />
            </button>
            <button className="p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/[0.06] cursor-pointer">
              <RotateCw className="w-5 h-5" />
            </button>
            <button className="p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/[0.06] cursor-pointer">
              <Globe className="w-5 h-5" />
            </button>
            
            <button 
              onClick={async () => {
                await fetch('/api/auth/logout', { method: 'POST' });
                window.location.href = '/login';
              }}
              className="ml-4 px-4 py-1.5 text-xs font-semibold bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700/60 rounded-lg transition-colors cursor-pointer"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Dashboard Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>

      {/* RIGHT SIDEBAR (Notifications & Activities) */}
      <aside className="w-72 border-l border-white/[0.07] bg-[#0a0a0d] flex flex-col h-screen overflow-y-auto py-6">
        {/* Notifications */}
        <div className="px-6 mb-8">
          <h3 className="text-base font-semibold mb-5 text-white">Notifications</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm text-zinc-200">56 New users registered.</p>
                <p className="text-xs text-zinc-500">Just now</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 flex items-center justify-center shrink-0">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm text-zinc-200">132 Orders placed.</p>
                <p className="text-xs text-zinc-500">59 Minutes ago</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 flex items-center justify-center shrink-0">
                <BarChart2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm text-zinc-200">Funds have been withdrawn.</p>
                <p className="text-xs text-zinc-500">12 Hours ago</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm text-zinc-200">5 Unread messages.</p>
                <p className="text-xs text-zinc-500">Today, 11:59 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="px-6 mb-8">
          <h3 className="text-base font-semibold mb-5 text-white">Activities</h3>
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#0a0a0d] bg-gradient-to-br from-white to-zinc-400 shrink-0 z-10 shadow">
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pl-3">
                <p className="text-sm font-medium text-zinc-200">Changed the style.</p>
                <p className="text-xs text-zinc-500">Just now</p>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#0a0a0d] bg-gradient-to-br from-zinc-300 to-zinc-600 shrink-0 z-10 shadow">
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pl-3">
                <p className="text-sm font-medium text-zinc-200">177 New products added.</p>
                <p className="text-xs text-zinc-500">47 Minutes ago</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#0a0a0d] bg-gradient-to-br from-zinc-500 to-zinc-800 shrink-0 z-10 shadow">
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pl-3">
                <p className="text-sm font-medium text-zinc-200">11 Products have been archived.</p>
                <p className="text-xs text-zinc-500">1 Days ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contacts */}
        <div className="px-6 flex-1">
          <div className="flex items-center justify-between mb-5">
             <h3 className="text-base font-semibold text-white">Contacts of your managers</h3>
             <button className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
               <Search className="w-4 h-4" />
             </button>
          </div>
          <div className="space-y-2">
            {[
              {name: 'Daniel Craig', bg: 'bg-zinc-800'},
              {name: 'Kate Morrison', bg: 'bg-zinc-700'},
              {name: 'Nataniel Donowan', bg: 'bg-zinc-600', active: true},
              {name: 'Elisabeth Wayne', bg: 'bg-zinc-800'},
              {name: 'Felicia Raspet', bg: 'bg-zinc-700'},
            ].map((contact, i) => (
              <div key={i} className={`flex items-center justify-between p-2 rounded-xl cursor-pointer transition-all ${contact.active ? 'bg-white text-black font-medium shadow-[0_0_15px_rgba(255,255,255,0.15)]' : 'hover:bg-white/5 text-zinc-300'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${contact.active ? 'bg-zinc-900 text-white' : contact.bg + ' text-zinc-200'} flex items-center justify-center font-medium text-xs border ${contact.active ? 'border-zinc-300' : 'border-white/10'}`}>
                    {contact.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium">{contact.name}</span>
                </div>
                <div className="flex gap-2">
                  {contact.active ? (
                    <>
                      <Mail className="w-4 h-4 opacity-70 hover:opacity-100" />
                      <Phone className="w-4 h-4 opacity-70 hover:opacity-100" />
                    </>
                  ) : (
                    <MoreVertical className="w-4 h-4 text-zinc-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
