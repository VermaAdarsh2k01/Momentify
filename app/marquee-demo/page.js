"use client";

import Marquee from '../services/(components)/marquee';

export default function MarqueeDemo() {
  // Custom images array (you can replace with your own images)
  const customImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=120&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=120&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=120&fit=crop',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=200&h=120&fit=crop',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=200&h=120&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200&h=120&fit=crop',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Infinite Image Marquee Examples
        </h1>

        <div className="space-y-12">
          {/* Default Marquee */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Default Marquee (Left Direction, Medium Speed)
            </h2>
            <Marquee />
          </div>

          {/* Fast Marquee */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Fast Marquee (10s speed)
            </h2>
            <Marquee speed={10} />
          </div>

          {/* Slow Marquee */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Slow Marquee (40s speed)
            </h2>
            <Marquee speed={40} />
          </div>

          {/* Right Direction */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Right Direction Marquee
            </h2>
            <Marquee direction="right" speed={25} />
          </div>

          {/* Custom Images */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Custom Nature Images
            </h2>
            <Marquee 
              images={customImages} 
              speed={30}
              className="bg-green-50 border-green-200"
            />
          </div>

          {/* No Pause on Hover */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              No Pause on Hover
            </h2>
            <Marquee 
              pauseOnHover={false}
              speed={15}
              className="bg-blue-50 border-blue-200"
            />
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            How to Use the Marquee Component
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">Basic Usage:</h3>
              <pre className="bg-gray-100 p-4 rounded mt-2 overflow-x-auto">
{`import Marquee from './components/ui/marquee';

<Marquee />`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-lg">With Custom Props:</h3>
              <pre className="bg-gray-100 p-4 rounded mt-2 overflow-x-auto">
{`<Marquee 
  images={['/image1.jpg', '/image2.jpg']}
  speed={20}
  direction="right"
  pauseOnHover={true}
  className="custom-class"
/>`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Available Props:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><code>images</code>: Array of image URLs (optional, uses placeholder images if not provided)</li>
                <li><code>speed</code>: Animation duration in seconds (default: 20)</li>
                <li><code>direction</code>: "left" or "right" (default: "left")</li>
                <li><code>pauseOnHover</code>: Boolean to pause animation on hover (default: true)</li>
                <li><code>className</code>: Additional CSS classes for the container</li>
                <li><code>imageClassName</code>: Additional CSS classes for images</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}