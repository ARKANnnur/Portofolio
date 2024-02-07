import Button from '../../ui/Button';
import Input from '../../ui/Input';

function ContactForm() {
  return (
    <div className="space-y-10 text-border-size-4">
      <h2 className="mt-12 text-border-size-4 text-border-white">Contact Form</h2>
      <div className="flex flex-wrap gap-5">
        <Input typeElement="input" type="text" placeholder="Name" />
        <Input typeElement="input" type="email" placeholder="Email" />
      </div>
      <Input
        typeElement="textArea"
        type="text"
        placeholder="Message"
        resize="resize w-full"
      />
      <Button custom="hover:text-border-size-4 hover:text-border-white">Send</Button>
    </div>
  );
}

export default ContactForm;
