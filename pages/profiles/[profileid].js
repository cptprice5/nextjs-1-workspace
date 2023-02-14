import { useRouter } from 'next/router'

const ProfileComp = () => {
  const router = useRouter()
  const { profileid } = router.query
  return <p>Profile is: {profileid}</p>
}

export default ProfileComp