import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router'

const Login = () => {
  return (
    <section className='pt-[60px]'>
        <div className='grid grid-cols-[4fr_3fr] gap-10 items-center'>
            <div>
                <img className='w-full' src="/login-image.png" alt="image" />
            </div>
            <div className='px-[130px] py-20'>
                <form action="">
                  <h2 className='text-[36px] font-medium'>Log in to Exclusive</h2>
                  <p className='pt-[24px] pb-[48px]'>Enter your details below</p>

                  <div className='grid grid-cols-1 gap-10'>
                    <Input placeholder={"Email or Phone Number"} />
                    <Input placeholder={"Password"} />
                    <div className='grid grid-cols-2 gap-6'>
                      <Button TagName={"button"} type='submit'><Link to="/">Login</Link></Button>
                      <button type='button' className='text-[#DB4444] cursor-pointer'>Forget Password?</button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login
