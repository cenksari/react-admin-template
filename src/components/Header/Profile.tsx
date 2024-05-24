import React from 'react'

interface IProps {
  name: string;
  picture: string;
}

const Profile = ({ name, picture }: IProps): React.JSX.Element => {
  return (
    <div className='header-user flex flex-1 flex-end'>
      <div className='flex flex-h-center flex-v-center'>
        <div className='flex'>
          <span className='material-symbols-outlined'>notifications</span>
        </div>
        <div className='user-photo cover' style={{ backgroundImage: `url('${picture}')` }} />
        <div className='flex flex-v-center pointer'>
          <strong>{name}</strong>
          <span className='material-symbols-outlined'>keyboard_arrow_down</span>
        </div>
      </div>
    </div>
  )
}

export default Profile;
