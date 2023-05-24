import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const PreviewPDF = dynamic(() => import("../components/Pdf/Preview"), {
  ssr: false,
});


export default function MyApp() {
  const [profile, setProfile] = useState({
    type: 'Profile',
    name: 'John Doe',
    profession: 'Junior Developer',
    profileImageURL: 'https://i.imgur.com/f6L6Y57.png',
    display: true,
    about: 'About...',
  });

  const [client, setClient] = useState(false);

  const handleChange = (name: string, value: string) => {
    setProfile({ ...profile, [name]: value })
  };

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
      }}
    >
      <div style={{ width: '50%' }}>
        <div>
          <label>Name</label>

          <input
            name='name'
            defaultValue={profile.name}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <div>
          <label>Profession</label>
          <input
            name='profession'
            defaultValue={profile.profession}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <div>
          <label>ImageURL</label>
          <input
            name='profileImageURL'
            defaultValue={profile.profileImageURL}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <div>
          <label>About</label>
          <input
            name='about'
            defaultValue={profile.about}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
      </div>
      <PreviewPDF profile={profile} />
    </div>
  )
}