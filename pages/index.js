import Link from 'next/link'

const Index = () => (
  <div className=" bg-black text-white/90 page">
    <h1 className='text-7xl font-bold text-center'>Hello, world!</h1>
    <Link href="/about">
      <a className="btn btn-light">About us</a>
    </Link>
  </div>
)

export default Index
