import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { Tooltip } from 'react-tooltip'
const SOCIAL_LINKS = [
  {
    id: 1,
    icon: <FiInstagram />,
    url: 'https://twitter.com/seekr_no_seekng?t=cR_qWDiwzoUZOlTxojt1nQ&s=09',
    tooltip: 'Its Good! 😁',
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: 'https://github.com/paritoshkrjha',
    tooltip: 'Its Better! 😆',
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: 'https://www.linkedin.com/in/paritoshkrjha',
    tooltip: 'Lets Goo!😍 ',
  },
]

function SocialLinks() {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center">
        <ul className="flex gap-4 sm:gap-8">
          {SOCIAL_LINKS.map((link) => (
            <>
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={link.tooltip}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            </>
          ))}
        </ul>
      </div>

      <Tooltip
        id="my-tooltip"
        place="bottom"
        style={{
          backgroundColor: '#f5f5f5',
          borderColor: '#ffdd35',
          borderRadius: '12',
          color: '#222',
          fontSize: '15px',
          fontWeight: 'semibold',
        }}
        effect="shadow"
      />
    </div>
  )
}

export default SocialLinks
