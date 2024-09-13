

const NavLink = () => {
  return (
    <nav>
    <ul>
      <li>
        <NavLink
          to="/"
          exact="true"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/FacultyAndStaff"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Faculty and Staff
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Academics"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Academics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/NewsAndUpdates"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          News and Updates
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Galleries"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Galleries
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ContactUs"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/RegistrationForm"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Registration Form
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/SamplePaper"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Sample Paper
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admissionProcess"
          className=
        >
          Admission Process
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/uniform"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Uniform
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admissions"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Admissions
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default NavLink