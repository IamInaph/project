import Breadcrumb from '../components/UI/Breadcrumb';
import ContactForm from '../components/Contact/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Contact' },
        ]}
        title="Contact"
      />

      <ContactForm />
    </>
  );
}
