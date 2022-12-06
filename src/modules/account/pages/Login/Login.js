import { Button, Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { MainLayout } from '../../../../shared'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../../main/config/api'

const schema = yup
  .object({
    username: yup.string().required('Введите логин'),
    password: yup
      .string()
      .required('Введите пароль')
      .max(20, 'Не более 20 символов')
      .min(8, 'Не менее 8 символов'),
  })
  .required()

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (formData) => {
    const data = await api.login(formData)

    console.log(data)
  }

  const fetchRoles = async () => {
    const data = await api.getRoles()
    console.log(data)
  }

  return (
    <MainLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label={'Username'}
            error={Boolean(errors?.username)}
            helperText={errors?.username?.message}
            {...register('username')}
          />
          <TextField
            label={'Password'}
            type={'password'}
            error={Boolean(errors?.password)}
            helperText={errors?.password?.message}
            {...register('password')}
          />
          <Button type={'submit'} variant={'contained'} size={'large'}>
            Войти
          </Button>
        </Stack>
      </form>

      <Button onClick={fetchRoles}>Получить роли</Button>
    </MainLayout>
  )
}

export default Login
