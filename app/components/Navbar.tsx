// import Image from "next/image";
import Link from "next/link";
//
// export default function Navbar() {
//   return (
//     <nav className="realtive bg-white w-full mx-auto p-6 shadow-md">
//       <div className="flex items-center justify-between">
//         <div className="pl-12 pr-8 border border-gray-200">
//           <Image src="/logo.jpg" width="200" height="50" alt="logo"></Image>
//         </div>
//         {/*Menu Items*/}
//         <div className="hidden md:flex space-x-6 text-black">
//           <Link href="/hero" className="hover:text-[#785A28]">
//             Landing Page
//           </Link>
//           <Link href="/organizations" className="hover:text-[#785A28]">
//             organizations
//           </Link>
//           <Link href="#" className="hover:text-[#785A28]">
//             AAAAA
//           </Link>
//           <Link href="#" className="hover:text-[#785A28]">
//             AAAAA
//           </Link>
//         </div>
//         <div className="flex items-center justify-between gap-2">
//           <Link
//             className="hidden md:block h-12 w-24 p-2 border-[#785A28] border size-full hover:bg-[#F8B517] hover:border-[#F8B517] rounded-lg text-center text-black"
//             href="#"
//           >
//             Login
//           </Link>
//           <Link
//             className="hidden md:block h-12 w-28 p-2 bg-[#F8B517] border rounded-lg mr-2 text-center"
//             href="#"
//           >
//             SignUp
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Hero', href: '/hero', current: false },
  { name: 'Organizatons', href: '/organizations', current: false },
  { name: 'Know About', href: '/knowAbout', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
      <Disclosure as="nav" className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                    alt="Your Company"
                    src="/logo.jpg"
                    className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block items-center justify-center ">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                      <Link
                          key={item.name}
                          href={item.href}
                          aria-current={item.current ? 'page' : undefined}
                          className={classNames(
                              item.current ? ' text-black' : 'hover:text-[#785A28]',
                              'rounded-md px-3 py-2 text-sm font-medium',
                          )}
                      >
                        {item.name}
                      </Link>

                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                  type="button"
                  className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only"></span>
                <Link
                            className="hidden md:block h-12 w-28 p-2 bg-[#F8B517] border rounded-lg mr-2 text-center"
                            href="#"
                          >
                            SignUp
                          </Link>
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex focus:outline-none hover:bg-[#F8B517] hover:border-[#F8B517] hover:rounded-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <Link className="hidden md:block h-12 w-24 p-2 border-[#785A28] border size-full rounded-lg text-center text-black"  href="#">
                                Login
                    </Link>
                  </MenuButton>
                </div>

              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
                <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                        item.current ? 'text-black' :
                            'block rounded-md px-3 py-2 text-base font-medium',
                    )}
                >
                  {item.name}


                </DisclosureButton>

            ))}
          </div>
          <button
              type="button"
              className="relative rounded-full focus:outline-none pl-2"
          >
            <span className="absolute -inset-1.5"/>
            <span className="sr-only"></span>
            <Link
                className="block h-12 w-28 p-2 bg-[#F8B517] border rounded-lg mr-2 text-center"
                href="#"
            >
              SignUp
            </Link>
          </button>
          <div>
            <button
                className="relative flex focus:outline-none hover:bg-[#F8B517] hover:border-[#F8B517] hover:rounded-lg pl-2">
              <span className="absolute -inset-1.5"/>
              <span className="sr-only">Open user menu</span>
              <Link
                  className="block h-12 w-24 p-2 border-[#785A28] border size-full rounded-lg text-center text-black"
                  href="#">
                Login
              </Link>
            </button>
          </div>
        </DisclosurePanel>
      </Disclosure>
  )
}
