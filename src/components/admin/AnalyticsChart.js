import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
  
  function AnalyticsChart({ urls }) {
  
    const chartData = [...urls]
      .map(u => ({
        ...u,
        clickCount: Math.floor(u.clickCount || 0)
      }))
      .sort((a, b) => b.clickCount - a.clickCount)
      .slice(0, 5);
  
    return (
  
      <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl p-6 md:p-8 mb-8 overflow-hidden relative">
  
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-200 opacity-20 rounded-full blur-3xl"></div>
  
        {/* Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
  
          <div>
  
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
  
              📈 Platform Analytics
  
            </div>
  
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              Top Performing URLs
            </h2>
  
            <p className="text-gray-500 mt-2 text-sm">
              Most visited short links across the platform
            </p>
  
          </div>
  
          {/* Badge */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-3 rounded-2xl shadow-lg">
  
            <div className="text-xs opacity-80">
              Total URLs
            </div>
  
            <div className="text-2xl font-black">
              {urls.length}
            </div>
  
          </div>
  
        </div>
  
        {/* Chart */}
        <div className="relative z-10 w-full h-[320px]">
  
          <ResponsiveContainer width="100%" height="100%">
  
            <BarChart data={chartData}>
  
              <XAxis
                dataKey="shortCode"
                tick={{ fill: "#6b7280", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
  
              <YAxis
                tick={{ fill: "#6b7280", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
  
              <Tooltip />
  
              <Bar
                dataKey="clickCount"
                radius={[12, 12, 0, 0]}
              />
  
            </BarChart>
  
          </ResponsiveContainer>
  
        </div>
  
      </div>
    );
  }
  
  export default AnalyticsChart;