import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/products';

export default function BlogGrid() {
  return (
    <section className="bg0 p-t-62 p-b-60">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9 p-b-80">
            <div className="p-r-45 p-r-0-lg">
              {blogPosts.map((post) => (
                <div key={post.id} className="p-b-63">
                  <Link to={`/blog/${post.id}`} className="hov-img0 how-pos5-parent">
                    <img src={post.image} alt="IMG-BLOG" />

                    <div className="flex-col-c-m size-123 bg9 how-pos5">
                      <span className="ltext-107 cl2 txt-center">
                        {post.day || '22'}
                      </span>

                      <span className="stext-109 cl3 txt-center">
                        {post.month || 'Jan 2018'}
                      </span>
                    </div>
                  </Link>

                  <div className="p-t-32">
                    <h4 className="p-b-15">
                      <Link to={`/blog/${post.id}`} className="ltext-108 cl2 hov-cl1 trans-04">
                        {post.title}
                      </Link>
                    </h4>

                    <p className="stext-117 cl6">
                      {post.excerpt}
                    </p>

                    <div className="flex-w flex-sb-m p-t-18">
                      <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                        <span>
                          <span className="cl4">By</span> {post.author || 'Admin'}
                          <span className="cl12 m-l-4 m-r-6">|</span>
                        </span>

                        <span>
                          {post.category}
                          <span className="cl12 m-l-4 m-r-6">|</span>
                        </span>

                        <span>
                          {post.comments || '8'} Comments
                        </span>
                      </span>

                      <Link to={`/blog/${post.id}`} className="stext-101 cl2 hov-cl1 trans-04 m-tb-10">
                        Continue Reading
                        <i className="fa fa-long-arrow-right m-l-9"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex-l-m flex-w w-full p-t-10 m-lr--7">
                <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1">
                  1
                </a>

                <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
                  2
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 p-b-80">
            <div className="side-menu">
              <div className="bor17 of-hidden pos-relative">
                <input className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55" type="text" name="search" placeholder="Search" />

                <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
                  <i className="zmdi zmdi-search"></i>
                </button>
              </div>

              <div className="p-t-55">
                <h4 className="mtext-112 cl2 p-b-33">
                  Categories
                </h4>

                <ul>
                  <li className="bor18">
                    <a href="#" className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                      Fashion
                    </a>
                  </li>

                  <li className="bor18">
                    <a href="#" className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                      Beauty
                    </a>
                  </li>

                  <li className="bor18">
                    <a href="#" className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                      Street Style
                    </a>
                  </li>

                  <li className="bor18">
                    <a href="#" className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                      Life Style
                    </a>
                  </li>

                  <li className="bor18">
                    <a href="#" className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                      DIY
                    </a>
                  </li>
                </ul>
              </div>

              <div className="p-t-65">
                <h4 className="mtext-112 cl2 p-b-33">
                  Featured Products
                </h4>

                <ul>
                  <li className="flex-w flex-t p-b-30">
                    <a href="#" className="wrao-pic-w size-214 hov-ovelay1 m-r-20">
                      <img src="/images/product-min-01.jpg" alt="PRODUCT" />
                    </a>

                    <div className="size-215 flex-col-t p-t-8">
                      <a href="#" className="stext-116 cl8 hov-cl1 trans-04">
                        White Shirt With Pleat Detail Back
                      </a>

                      <span className="stext-116 cl6 p-t-20">
                        $19.00
                      </span>
                    </div>
                  </li>

                  <li className="flex-w flex-t p-b-30">
                    <a href="#" className="wrao-pic-w size-214 hov-ovelay1 m-r-20">
                      <img src="/images/product-min-02.jpg" alt="PRODUCT" />
                    </a>

                    <div className="size-215 flex-col-t p-t-8">
                      <a href="#" className="stext-116 cl8 hov-cl1 trans-04">
                        Converse All Star Hi Black Canvas
                      </a>

                      <span className="stext-116 cl6 p-t-20">
                        $39.00
                      </span>
                    </div>
                  </li>

                  <li className="flex-w flex-t p-b-30">
                    <a href="#" className="wrao-pic-w size-214 hov-ovelay1 m-r-20">
                      <img src="/images/product-min-03.jpg" alt="PRODUCT" />
                    </a>

                    <div className="size-215 flex-col-t p-t-8">
                      <a href="#" className="stext-116 cl8 hov-cl1 trans-04">
                        Nixon Porter Leather Watch In Tan
                      </a>

                      <span className="stext-116 cl6 p-t-20">
                        $17.00
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-t-55">
                <h4 className="mtext-112 cl2 p-b-20">
                  Tags
                </h4>

                <div className="flex-w m-r--5">
                  <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Fashion
                  </a>

                  <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Lifestyle
                  </a>

                  <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Denim
                  </a>

                  <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Streetstyle
                  </a>

                  <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Crafts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
