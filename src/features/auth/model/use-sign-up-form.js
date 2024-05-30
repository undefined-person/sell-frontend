import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'

import { useToast } from '../../../shared/hooks/use-toast'
import { signUp } from '../../../entities/auth/auth-api'
import { ROUTES } from '../../../shared/const/routes'

const signUpSchema = z.object({
  username: z.string().min(2, 'Must be at least 2 characters').max(50, 'Must contain at most 50 character(s)'),
  password: z.string().min(6, 'Must be at least 6 characters').max(50, 'Must contain at most 50 character(s)'),
})

export const useSignUpForm = () => {
  const { toast } = useToast()
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      navigate(ROUTES.HOME)
      toast({
        title: 'Success',
        description: 'Sign up successfully',
      })
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.response?.data?.message || 'Something went wrong',
      })
    },
  })

  const onSubmit = form.handleSubmit((data) => {
    signUpMutation.mutate(data)
  })

  return {
    form,
    onSubmit,
    isLoading: signUpMutation.isPending,
  }
}
