import BasicBox from '../../ui/BasicBox';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import GuestBook from './GuestBook';

function GuestBookForm() {
  return (
    <div className="contents-center mt-12 w-full md:w-1/2">
      <BasicBox
        custom="w-[30rem] h-screen px-5 py-8 flex flex-col gap-5"
        bg="#0B0F17"
      >
        <h2 className="text-lg font-semibold tracking-wide text-border-size-4 text-border-white">Guest Book</h2>
        <Input typeElement="textArea" placeholder="Message" resize="resize-y" />
        <Input typeElement="input" placeholder="Name" />
        <Button custom="mx-5 self-end hover:text-border-size-4 hover:text-border-white">Send</Button>
        <GuestBook />
      </BasicBox>
    </div>
  );
}

export default GuestBookForm;
