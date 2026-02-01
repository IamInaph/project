import { useParams, Navigate, Link } from 'react-router-dom';
import BlogPost from '../components/Blog/BlogPost';
import { blogPosts } from '../data/products';

export default function BlogDetailPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id, 10));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="container">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <Link to="/" className="stext-109 cl8 hov-cl1 trans-04">
            Home
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
          </Link>

          <Link to="/blog" className="stext-109 cl8 hov-cl1 trans-04">
            Blog
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
          </Link>

          <span className="stext-109 cl4">
            {post.title}
          </span>
        </div>
      </div>

      <BlogPost post={post} />
    </>
  );
}
