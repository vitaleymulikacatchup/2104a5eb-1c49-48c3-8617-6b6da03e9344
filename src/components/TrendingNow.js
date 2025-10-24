import React from 'react';

const TrendingNow = () => {
  const trendingItems = [
    {
      id: 1,
      title: 'Monster',
      image: '/images/monster.jpg',
      rank: '1'
    },
    {
      id: 2,
      title: 'Dahmer',
      image: '/images/dahmer.jpg',
      rank: '2'
    },
    {
      id: 3,
      title: 'The Diplomat',
      image: '/images/diplomat.jpg',
      rank: '3'
    },
    {
      id: 4,
      title: 'The Diplomat',
      image: '/images/diplomat2.jpg',
      rank: '4'
    },
    {
      id: 5,
      title: 'Wednesday',
      image: '/images/wednesday.jpg',
      rank: '5'
    }
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Trending now</h2>
        
        <div className="flex gap-4 overflow-x-auto pb-4">
          {trendingItems.map((item) => (
            <div key={item.id} className="trending-card flex-shrink-0 relative">
              <div className="w-48 h-72 bg-gray-800 rounded-lg overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjI4OCIgdmlld0JveD0iMCAwIDE5MiAyODgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMjg4IiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9Ijk2IiB5PSIxNTAiIGZpbGw9IiM2NjY2NjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Tm8gSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
                  }}
                />
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="flex items-center justify-between">
                    <span className="text-6xl font-bold text-white opacity-80">{item.rank}</span>
                    <div className="w-6 h-6 bg-netflix-red rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs font-bold">N</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;