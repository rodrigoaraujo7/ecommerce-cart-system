import { Title, SubTitle } from "../../components";

const Register = () => {
  return (
    <main className='font-inter flex justify-center items-center my-32 relative'>
      <div className="wrapper w-4/5 md:w-3/5">
        <Title>Build ~</Title>
        <hr className="w-full border-1 bg-gray-100 my-8 md:w-1/3" />
        <SubTitle>Create your <span className="text-primaryBlue">account</span>.</SubTitle>
      </div>
    </main>
  )
}

export default Register;