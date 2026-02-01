import Breadcrumb from '../components/UI/Breadcrumb';
import BlogGrid from '../components/Blog/BlogGrid';

export default function BlogPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Blog' },
        ]}
        title="Blog"
      />

      <BlogGrid />
    </>
  );
}
