import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'

import { useToast } from '../../../shared/hooks/use-toast'
import { signIn } from '../../../entities/auth/auth-api'
import { ROUTES } from '../../../shared/const/routes'

const signInSchema = z.object({
  username: z.string().min(2, 'Must be at least 2 characters').max(50, 'Must contain at most 50 character(s)'),
  password: z.string().min(6, 'Must be at least 6 characters').max(50, 'Must contain at most 50 character(s)'),
})

export const useSignInForm = () => {
  const { toast } = useToast()
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      navigate(ROUTES.HOME)
      toast({
        title: 'Success',
        description: 'Sign in successfully',
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
    signInMutation.mutate(data)
  })

  return {
    form,
    onSubmit,
    isLoading: signInMutation.isPending,
  }
}
