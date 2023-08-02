import * as Form from '@radix-ui/react-form';

const EmailInput = ({email, onEmailInput}) => {
    
    const handleEmailInput = (e) => {
        onEmailInput(e.target.value)
    }

    return (
        <Form.FormField className='flex flex-col'>
            <Form.FormLabel className='text-white py-2'>Email</Form.FormLabel>
            <Form.Control asChild>
                <input value={email} onChange={handleEmailInput} type="email" placeholder="Enter your email" className='placeholder-neutral-500 bg-neutral-900 text-neutral-200 w-2/3 py-2 px-3 rounded-lg border-0'/>
            </Form.Control>
        </Form.FormField>
    )
}

export default EmailInput;