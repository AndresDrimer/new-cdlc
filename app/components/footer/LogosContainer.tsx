import Image from 'next/image'


function LogosContainer() {
  return (
<div className="flex items-center gap-10 my-4  h-full">
              <div className="w-36">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={1328}
                  height={1046}
                  sizes="100vw"
                />
              </div>
              <div className="w-36">
                <Image
                  src="/images/la-ciudad-posible.jpg"
                  alt="logo"
                  width={397}
                  height={250}
                  sizes="100vw"
                />
              </div>
            </div>
  )
}

export default LogosContainer