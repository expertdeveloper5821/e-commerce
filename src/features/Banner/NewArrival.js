import { Link } from "react-router-dom" 

export default function NewArrival(){
  const commonClass="h-full w-full object-cover object-center";
  const imageClass="h-64 w-44 overflow-hidden rounded-lg"
return(
<section className='new arival'>
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-red-500 mb-32">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl" style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)' }}>
                  Winter styles are finally here
                </h1>
                <p className="mt-4 text-xl text-white" style={{ textShadow: '4px 5px 5px rgba(0, 0, 0, 0.5)' }}>
                  This year, our new Winter collection will shelter you from the harsh elements of a world that doesn't care
                  if you live or die.
                </p>
                <Link to="/"
  className="inline-block mx-auto mt-4 rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
>Shop Collection
</Link>
              </div>
              <div>
                <div className="mt-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                              alt="men"
                              className={commonClass}
                            />
                          </div>
                          <div className={imageClass}>
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                              alt="women"
                              className={commonClass}
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className={imageClass}>
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                              alt="shirt"
                              className={commonClass}
                            />
                          </div>
                          <div className={imageClass}>
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                              alt="img"
                              className={commonClass}
                            />
                          </div>
                          <div className={imageClass}>
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                              alt="hero"
                              className={commonClass}
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className={imageClass}>
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                              alt="imgg1"
                              className={commonClass}
                            />
                          </div>
                          <div className={imageClass}>
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                              alt="img3"
                              className={commonClass}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
)
};