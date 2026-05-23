function StatsCards({ stats }) {

    const cards = [
  
      {
        title: "Total Users",
        value: stats.totalUsers || 0,
        icon: "👥",
        gradient: "from-indigo-500 to-purple-500",
        text: "text-white"
      },
  
      {
        title: "Total URLs",
        value: stats.totalUrls || 0,
        icon: "🔗",
        gradient: "from-pink-500 to-rose-500",
        text: "text-white"
      },
  
      {
        title: "Total Clicks",
        value: stats.totalClicks || 0,
        icon: "📊",
        gradient: "from-emerald-500 to-green-500",
        text: "text-white"
      }
  
    ];
  
    return (
  
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
  
        {cards.map((card, index) => (
  
          <div
            key={index}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${card.gradient} p-6 shadow-xl hover:scale-[1.02] transition-all duration-300`}
          >
  
            {/* Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
  
            {/* Content */}
            <div className="relative z-10 flex items-start justify-between">
  
              <div>
  
                <p className={`text-sm opacity-80 ${card.text}`}>
                  {card.title}
                </p>
  
                <h2 className={`text-4xl font-black mt-3 ${card.text}`}>
                  {card.value}
                </h2>
  
              </div>
  
              {/* Icon */}
              <div className="text-5xl opacity-80">
                {card.icon}
              </div>
  
            </div>
  
            {/* Bottom badge */}
            <div className="relative z-10 mt-6">
  
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white">
  
                Live Platform Metrics
  
              </div>
  
            </div>
  
          </div>
  
        ))}
  
      </div>
    );
  }
  
  export default StatsCards;