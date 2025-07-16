import { InputField, TextAreaField, Button } from '@/components/atoms';
import { cn } from '@/utils/cn';

const ConsultationForm = () => (
  <div
    className={cn(
      'bg-gradient-to-t from-[#1a1a1a]/90 to-[#1a1a1a]/40',
      'border border-gray-800',
      'p-6',
      'rounded-[13px]',
      'shadow-md',
      'min-h-[31rem]',
      'text-[#ffff]',
    )}
  >
    <h3
      className={cn(
        'text-lg md:text-2xl lg:text-[2.25rem]',
        'font-semibold',
        'mb-4',
      )}
    >
      Get a Consultation.
    </h3>
    <form className={cn('flex', 'flex-col', 'gap-6', 'text-[#ffff]')}>
      <InputField
        id="name"
        name="name"
        label="Name"
        placeholder="@#$$$$$1234"
      />
      <InputField
        id="email"
        name="email"
        type="email"
        label="Email"
        placeholder="subashpoudel@gmail.com"
      />
      <TextAreaField
        id="message"
        name="message"
        label="Message"
        placeholder="Let us know your requirements..."
      />
      <div className={cn('flex', 'flex-col', 'lg:flex-row', 'gap-4', 'mt-2')}>
        <Button
          type="submit"
          variant="primary"
          className="flex-1  "
        >
          BOOK A CONSULTATION
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="flex-1 "
        >
          DOWNLOAD BROCHURE
        </Button>
      </div>
    </form>
  </div>
);

export default ConsultationForm;
