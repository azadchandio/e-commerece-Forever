import { useState } from 'react';
import { policies } from '../assets/dummyData'; // ✅ Import from dummyData
// import type { Policy } from '../assets/dummyData'; // Optional: for extra type safety

const PolicySection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Here you would typically send the email to your backend
      console.log('Subscribed with email:', email);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 2000);
    }
  };

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
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Subscribe now & get 20% off
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email id"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              disabled={isSubscribed}
              className={`px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 ${
                isSubscribed 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-black hover:bg-gray-800 hover:transform hover:scale-105'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
            >
              {isSubscribed ? '✓ SUBSCRIBED' : 'SUBSCRIBE'}
            </button>
          </form>
          
          {isSubscribed && (
            <p className="mt-4 text-green-600 font-medium animate-fade-in">
              Thank you for subscribing! Check your email for the discount code.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PolicySection;