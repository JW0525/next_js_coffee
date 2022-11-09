import navLinks from "../lib/navLinks";
import Link from "next/link";

const Navbar = () => {
  return (
      // <nav>
      //   {
      //     navLinks.map((link, index) => {
      //       return (
      //         <ul key={link.name}>
      //           <Link href={
      //             { pathname: link.path,
      //               query: {id: "2"}
      //             }}
      //           >
      //             <li>{link.name}</li>
      //           </Link>
      //         </ul>
      //       )
      //     })
      //   }
      // </nav>
    <div className='container'>
      <ul>
        <li>
          <a href='./'>Home</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;