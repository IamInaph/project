import Breadcrumb from '../components/UI/Breadcrumb';
import AboutSection from '../components/About/AboutSection';

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'About' },
        ]}
        title="About"
      />

      <AboutSection />
    </>
  );
}
