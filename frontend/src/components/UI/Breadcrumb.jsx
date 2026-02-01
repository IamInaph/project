import { Link } from 'react-router-dom';

export default function Breadcrumb({ items, backgroundImage, title }) {
  const pageTitle = title || items[items.length - 1]?.label;

  return (
    <section
      className="bg-img1 txt-center p-lr-15 p-tb-92"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : 'url(/images/bg-01.jpg)',
      }}
    >
      <h2 className="ltext-105 cl0 txt-center">
        {pageTitle}
      </h2>
    </section>
  );
}
