import { policies } from '../assets/assets'; // ✅ Import from assetsdata
import Subscribe from './Subscribe';
// import type { Policy } from '../assets/assetsdata'; // Optional: for extra type safety

const PolicySection = () => {

  return (
    <div className=" py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Policy Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {policies.map((policy, index) => {
            const IconComponent = policy.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <IconComponent 
                      size={32} 
                      className={`${policy.color} group-hover:scale-110 transition-transform duration-300`} 
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900">
                  {policy.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {policy.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Newsletter Subscription */}
          <Subscribe/>
      </div>
    </div>
  );
};

export default PolicySection;