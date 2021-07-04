import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from '@chakra-ui/react'

import { useState } from 'react'

export const ResumeForm = ({ initialRef, onClose }) => {
  const toast = useToast()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    resumeFile: undefined,
  })

  const handleFileChange = (e) => {
    const resumeFile = e.target.files[0]
    setFormState({ ...formState, resumeFile })
  }

  const handleResumeFormSubmit = async (e) => {
    e.preventDefault()
    const { name, email, resumeFile } = formState

    if (name && email && resumeFile) {
      try {
        //TODO: ENTER BACKEND CODE HERE
        console.log('<enter backend code here>')

        toast({
          title: 'Congratulations',
          position: 'top-right',
          description: 'Resume successfully submitted!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        onClose()
      } catch (e) {
        toast({
          title: 'Error',
          position: 'top-right',
          description: e.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    } else {
      toast({
        title: 'Uh-Oh 😥',
        position: 'top-right',
        description: 'Please verify all fields are filled out.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <>
      <ModalHeader>Upload Resume Form</ModalHeader>
      <ModalCloseButton />
      <form onSubmit={handleResumeFormSubmit}>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input
              ref={initialRef}
              placeholder="First name"
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="yourname@email.com"
              type="email"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />
          </FormControl>
          <FormControl mt={4}>
            <Input
              variant="unstyled"
              type="file"
              name="filename"
              accept=".pdf"
              onChange={handleFileChange}
            />
            <FormHelperText>
              Click to upload a PDF of your resume
            </FormHelperText>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} type="submit">
            Send
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </form>
    </>
  )
}
