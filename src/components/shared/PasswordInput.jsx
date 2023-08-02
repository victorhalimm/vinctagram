import * as Form from '@radix-ui/react-form';

const PasswordInput = ({onPasswordInput, password}) => {
    const handlePasswordInput = (e) => {
        onPasswordInput(e.target.value)
    }

    return (
        <Form.FormField className='flex flex-col'>
            <Form.FormLabel className='text-white py-2'>Password</Form.FormLabel>
            <Form.Control asChild>
                <input type="password" value={password} onChange={handlePasswordInput} placeholder="Enter your password" className='placeholder-neutral-500 bg-neutral-900 text-neutral-200 w-2/3 py-2 px-3 rounded-lg border-0'/>
            </Form.Control>
        </Form.FormField>
    )
}

export default PasswordInput;