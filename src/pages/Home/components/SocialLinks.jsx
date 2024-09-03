import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { LuMail } from 'react-icons/lu'
import { Tooltip } from 'react-tooltip'
import { motion } from 'framer-motion'
const SOCIAL_LINKS = [
  {
    icon: <LuMail className="text-xl sm:text-2xl md:text-3xl" />,
    url: 'mailto:jhaparitosh.542001@gmail.com',
    tooltip: 'Say hello! 😊',
  },
  {
    icon: <FiInstagram className="text-xl sm:text-2xl md:text-3xl" />,
    url: 'https://www.instagram.com/paaritoshhh/',
    tooltip: 'Its Good! 😁',
  },
  {
    icon: <FiGithub className="text-xl sm:text-2xl md:text-3xl" />,
    url: 'https://github.com/paritoshkrjha',
    tooltip: 'Its Better! 😆',
  },
  {
    icon: <FiLinkedin className="text-xl sm:text-2xl md:text-3xl" />,
    url: 'https://www.linkedin.com/in/paritoshkrjha',
    tooltip: 'Lets Goo!😍 ',
  },
]

function SocialLinks() {
  return (
    <>
      <motion.div className=" flex flex-col justify-center items-center">
        <motion.ul
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="flex gap-4"
        >
          {SOCIAL_LINKS.map((link, index) => (
            <motion.a
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              href={link.url}
              target="__blank"
              key={index}
              data-tooltip-id="my-tooltip"
              data-tooltip-content={link.tooltip}
              className=" hover:bg-[#212131]/60 hover:backdrop-blur-sm hover:rounded-xl text-gray-400 hover:text-white cursor-pointer rounded-lg dark:bg-ternary-dark  shadow-sm p-4 duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.ul>
      </motion.div>

      <Tooltip
        id="my-tooltip"
        place="bottom"
        style={{
          backgroundColor: '#212131',
          borderColor: '#ffdd35',
          borderRadius: '12',
          color: '#fff',
          fontSize: '15px',
          fontWeight: 'semibold',
        }}
        effect="shadow"
      />
    </>
  )
}

export default SocialLinks
