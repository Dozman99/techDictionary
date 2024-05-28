import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import { HomePage,Bookmarks,ChangeWord,NewWord,RecentWords,SearchedWords,UpdatedWords } from './pages/userPage'
import { UserRequest,Account,Dashboard,LoginPage,Words} from './pages/adminPage'




const App = () => {
  return (
    <div>
     <Router>
     

     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/bookmarks" element={<Bookmarks/>} />
       <Route path="/changeWord" element={<ChangeWord />} />
       <Route path="/newWord" element={<NewWord />} />
       <Route path="/recentWords" element={<RecentWords />} />
       <Route path="/SearchedWords" element={<SearchedWords/>} />
       <Route path="/account" element={<Account />} />
       <Route path="/dashboard" element={<Dashboard/>} />
       <Route path="/loginPage" element={<LoginPage />} />
       <Route path="/userRequest" element={<UserRequest />} />
       <Route path="/Words" element={<Words />} />
       
     </Routes>

   </Router>
    </div>
  )
}

export default App
