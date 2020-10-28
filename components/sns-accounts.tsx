import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { snsAccountList } from '../constants'

export type SnsAccountsProps = {
  className?: string
}

const SnsAccounts: React.FC<SnsAccountsProps> = ({ className }) => {
  return (
    <div className={className}>
      {snsAccountList.map(({ href, icon }, index) => (
        <a className="px-1 text-2xl" key={`sns-icon-${index}`} href={href}>
          <FontAwesomeIcon icon={icon} />
        </a>
      ))}
    </div>
  )
}

export default SnsAccounts
