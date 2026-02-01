import { Link } from 'react-router-dom';

export default function BlogPost({ post }) {
  return (
    <article className="py-20">
      <div className="container max-w-[850px]">
        {/* Featured Image */}
        <div className="overflow-hidden mb-10">
          <img
            src={post.image}
            alt={post.title}
            className="w-full"
          />
        </div>

        {/* Meta */}
        <div className="stext-107 text-[#999] mb-4">
          {post.date} | {post.category} | By {post.author}
        </div>

        {/* Title */}
        <h1 className="ltext-103 text-[#333] mb-8">
          {post.title}
        </h1>

        {/* Content */}
        <div className="stext-102 text-[#666] leading-relaxed">
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed sodales lorem.
            Cras tempus molestie libero, quis molestie quam tincidunt non. Nulla facilisi.
            Pellentesque eleifend libero leo, at congue magna sollicitudin quis.
          </p>

          <p className="mb-6">
            Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus,
            sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-[#f7f7f7]">
            <p className="mtext-106 text-[#333] italic">
              "The details are not the details. They make the design."
            </p>
            <cite className="stext-104 text-[#999] block mt-2">- Charles Eames</cite>
          </blockquote>

          <p className="mb-6">
            Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet.
            Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum.
          </p>

          <p className="mb-6">
            Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed,
            sodales vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 py-8 border-t border-[#e6e6e6] mt-10">
          <span className="stext-101 text-[#333]">Tags:</span>
          {['Fashion', 'Lifestyle', 'Denim', 'Streetstyle'].map((tag) => (
            <Link
              key={tag}
              to="/blog"
              className="stext-107 text-[#666] px-3 py-1 border border-[#e6e6e6] hover:border-primary hover:text-primary trans-04"
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Share */}
        <div className="flex items-center gap-4 py-6 border-t border-[#e6e6e6]">
          <span className="stext-101 text-[#333]">Share:</span>
          <a href="#" className="text-[#666] hover:text-[#3b5998] trans-04 text-lg">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="text-[#666] hover:text-[#1da1f2] trans-04 text-lg">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" className="text-[#666] hover:text-[#c32aa3] trans-04 text-lg">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#" className="text-[#666] hover:text-[#bd081c] trans-04 text-lg">
            <i className="fa fa-pinterest"></i>
          </a>
        </div>

        {/* Comments */}
        <div className="pt-10">
          <h4 className="mtext-102 text-[#333] pb-6">Leave a Comment</h4>
          <form>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-[50px] px-4 border border-[#e6e6e6] stext-104 text-[#333] placeholder:text-[#999] focus:border-primary trans-04 outline-none"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-[50px] px-4 border border-[#e6e6e6] stext-104 text-[#333] placeholder:text-[#999] focus:border-primary trans-04 outline-none"
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                rows="6"
                placeholder="Comment..."
                className="w-full p-4 border border-[#e6e6e6] stext-104 text-[#333] placeholder:text-[#999] focus:border-primary trans-04 outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="flex-c-m stext-101 text-white size-116 bg-primary hov-btn1 trans-04"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </article>
  );
}
