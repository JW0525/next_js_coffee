import getData from "../lib/getData";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Loading} from "@/components/common/loading";
import axios from "axios";

const AdminPage = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const CheckLogin = () => {
    axios.get('api/isLogin')
      .then((res) => {
        if (res.status === 200 && res.data.name) {
          setIsLogin(true);
        } else {
          router.push('/login').then();
        }
      })
  }

  const LogOut = () => {
    axios.get('/api/logout')
      .then ((res) => {
        if (res.status === 200) {
          router.push('/')
        }
      })
  }

  useEffect(() => {
    CheckLogin();
  }, []);

  return (
    <>
      { <Loading /> }
    </>
  )
}


export default AdminPage;