import { NavLink } from 'react-router-dom'

interface ContactsLinkProps {
  classes: string
  text?: string
}

const ContactsLink = ({ classes, text = 'Контакты' }: ContactsLinkProps) => {
  return (
    <NavLink
      to="/contacts"
      className={classes}
    >
      {text}
    </NavLink>
  )
}

export default ContactsLink
