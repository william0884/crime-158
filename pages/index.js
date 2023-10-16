import dynamic from 'next/dynamic'

const OpenStreetMap = dynamic(() => import('../component/OpenStreetMap'), {
  ssr: false,
})

const index = () => {
  return (
    <>
      <h1 className='text-center'>Crime 158 S2 2023</h1>
      <OpenStreetMap />
    </>
  )
}

export default index