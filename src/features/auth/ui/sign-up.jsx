import { Link } from 'react-router-dom'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../shared/ui/form'
import { Input } from '../../../shared/ui/input'
import { Button } from '../../../shared/ui/button'
import { useSignUpForm } from '../model/use-sign-up-form'

export function SignUp() {
  const { form, onSubmit, isLoading } = useSignUpForm()

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-full max-w-lg space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          Sign up
        </Button>
        <p>
          Already have an account?{' '}
          <Link className="underline" to="/sign-in">
            Sign in
          </Link>
        </p>
      </form>
    </Form>
  )
}
