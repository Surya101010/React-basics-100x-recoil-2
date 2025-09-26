import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './store/atoms/atom'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}
function MainApp(){
  const networkValue = useRecoilValue(networkAtom);
  const jobcount = useRecoilValue(jobsAtom);
  const Messagingcount = useRecoilValue(messagingAtom);
  const NotificationCount = useRecoilValue(notificationsAtom);
  return (
    <>
      <button>Home</button>

      <button>My Network ({networkValue >=100 ? "99+" : networkValue})</button>
      <button>Jobs ({jobcount})</button>
      <button>Messaging ({Messagingcount})</button>
      <button>Notifications ({NotificationCount})</button>
      
      <button >Me</button>
    </>
  )
}
export default App
