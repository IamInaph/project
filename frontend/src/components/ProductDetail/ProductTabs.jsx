import { useState } from 'react';

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'info', label: 'Additional Information' },
    { id: 'reviews', label: `Reviews (${product.reviews || 0})` },
  ];

  return (
    <div className="bg-[#f7f7f7] py-20">
      <div className="container">
        {/* Tab Headers */}
        <div className="flex flex-wrap justify-center pb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`stext-101 text-[#333] px-6 py-2 mx-2 trans-04 border-b-2 ${
                activeTab === tab.id
                  ? 'border-[#333]'
                  : 'border-transparent hover:border-[#333]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-[700px] mx-auto">
          {activeTab === 'description' && (
            <div className="stext-102 text-[#666]">
              <p className="pb-4">
                {product.description || 'No description available.'}
              </p>
              <p>
                Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet.
                Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum.
                Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed,
                sodales vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus
                ex ac libero varius molestie. Aenean tempor sit amet orci nec iaculis. Cras sit amet nulla libero.
                Curabitur dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus
                augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor erat.
              </p>
            </div>
          )}

          {activeTab === 'info' && (
            <div className="stext-102 text-[#666]">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-[#e6e6e6]">
                    <td className="py-4 font-semibold w-[150px]">Weight</td>
                    <td className="py-4">0.79 kg</td>
                  </tr>
                  <tr className="border-b border-[#e6e6e6]">
                    <td className="py-4 font-semibold">Dimensions</td>
                    <td className="py-4">110 x 33 x 100 cm</td>
                  </tr>
                  <tr className="border-b border-[#e6e6e6]">
                    <td className="py-4 font-semibold">Materials</td>
                    <td className="py-4">60% cotton, 40% polyester</td>
                  </tr>
                  {product.colors && (
                    <tr className="border-b border-[#e6e6e6]">
                      <td className="py-4 font-semibold">Color</td>
                      <td className="py-4 flex gap-2 items-center">
                        {product.colors.map((color, i) => (
                          <span
                            key={i}
                            className="w-5 h-5 rounded-full border border-[#e6e6e6]"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </td>
                    </tr>
                  )}
                  {product.sizes && (
                    <tr>
                      <td className="py-4 font-semibold">Size</td>
                      <td className="py-4">{product.sizes.join(', ')}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              {product.reviews > 0 ? (
                <div className="stext-102 text-[#666]">
                  <div className="flex items-start pb-8 border-b border-[#e6e6e6] mb-8">
                    <img
                      src="/images/avatar-01.jpg"
                      alt="User"
                      className="w-14 h-14 rounded-full mr-4"
                    />
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="font-semibold text-[#333] mr-3">John Doe</span>
                        <div className="flex text-[#e4a15b]">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`zmdi ${i < product.rating ? 'zmdi-star' : 'zmdi-star-outline'} text-sm`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mb-2 text-sm text-[#999]">January 10, 2024</p>
                      <p>
                        Great product! The quality is excellent and it fits perfectly.
                        I would definitely recommend this to anyone looking for quality fashion items.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="stext-102 text-[#666] text-center">
                  No reviews yet. Be the first to review this product!
                </p>
              )}

              {/* Add Review Form */}
              <div className="pt-6">
                <h5 className="mtext-102 text-[#333] pb-4">Add a review</h5>
                <form>
                  <div className="flex items-center pb-4">
                    <span className="stext-102 text-[#666] mr-3">Your Rating:</span>
                    <div className="flex text-[#ccc]">
                      {[...Array(5)].map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          className="hover:text-[#e4a15b] trans-04"
                        >
                          <i className="zmdi zmdi-star text-lg mr-1"></i>
                        </button>
                      ))}
                    </div>
                  </div>
                  <textarea
                    rows="4"
                    placeholder="Your review"
                    className="w-full border border-[#e6e6e6] p-4 mb-4 resize-none stext-102 text-[#333] placeholder:text-[#999] focus:border-[#333] trans-04"
                  />
                  <button
                    type="submit"
                    className="flex-c-m stext-101 text-white size-101 bg-primary hov-btn1 trans-04"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
