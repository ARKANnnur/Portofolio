import ContactSosmed from '../features/contact/ContactSosmed';
import GuestBookForm from '../features/contact/GuestBookForm';

function Contact() {
  return (
    <div className="bg-secondary px-12 py-12 text-white" id='Contact'>
      <h1 className="text-center font-semibold text-[4rem]">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row">
        <GuestBookForm />
        <ContactSosmed />
      </div>
    </div>
  );
}

export default Contact;
