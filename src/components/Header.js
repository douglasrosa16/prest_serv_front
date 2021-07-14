import { Fragment, useContext, useEffect} from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { AuthContext } from '../Context/AuthContext';

const solutions = [
  {
    name: 'Dados',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Classificação',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Segurança', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integração',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  { name: 'Webinars', href: '#', icon: DesktopComputerIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const { user, signOut } = useContext(AuthContext); 
  
  useEffect(() => {
    console.log('hello')
  }, []);

  return (
    
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
          <div className="relative z-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
              <div>
                <a href="/" className="flex">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </a>
              </div>            
              <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                <Popover.Group as="nav" className="flex space-x-10">
                  <Popover>
                    {({ open }) => (
                      <>                        
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          )}
                        >
                          <a href="/">Home</a>
                          
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white"
                          >
                                                      
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  {user.permission==='provider' ?  <a href={"/services/"+user.id}  className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Meus serviços
                  </a>
                  : ''
                  }
                  <a href="/providers" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Prestadores de Serviços
                  </a>
                  <a href="/perfil" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Perfil
                  </a>
                  <Popover>
                    {({ open }) => (
                      <>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg"
                          >
                            <div className="absolute inset-0 flex">
                              <div className="bg-white w-1/2" />
                              <div className="bg-gray-50 w-1/2" />
                            </div>
                            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                              <nav className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                                <div>
                                  <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Company</h3>
                                  <ul className="mt-5 space-y-6">
                                    {company.map((item) => (
                                      <li key={item.name} className="flow-root">
                                        <a
                                          href={item.href}
                                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                        >
                                          <item.icon
                                            className="flex-shrink-0 h-6 w-6 text-gray-400"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-4">{item.name}</span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                    Resources
                                  </h3>
                                  <ul className="mt-5 space-y-6">
                                    {resources.map((item) => (
                                      <li key={item.name} className="flow-root">
                                        <a
                                          href={item.href}
                                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                        >
                                          <item.icon
                                            className="flex-shrink-0 h-6 w-6 text-gray-400"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-4">{item.name}</span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </nav>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>
                <div className="flex items-center md:ml-8">
                  <a href="#" onClick={signOut} className="text-base font-medium text-gray-500 hover:text-gray-900" style={{margin: 10}}>
                    Sair  
                  </a>
                  <a href="/login" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Login
                  </a>                  
                  <a
                    href="/pre-cadastro"
                    className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Cadastre-se
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 sm:pb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-8">
                    <nav>
                      <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                              <item.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                          </a>
                        ))}
                      </div>
                      <div className="mt-8 text-base">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          {' '}
                          View all products <span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-1 gap-4">
                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Pricing
                    </a>

                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Docs
                    </a>

                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Company
                    </a>

                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Resources
                    </a>

                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Blog
                    </a>

                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Contact Sales
                    </a>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{' '}
                      <a href="#" className="text-indigo-600 hover:text-indigo-500">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
)
}