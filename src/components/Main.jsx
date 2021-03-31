import React from "react";
// import axios from "axios";
import About from './About';
import Projects from './Projects';
import Links from './Links';
import Footer from "./Footer";

const Main = (props) => {
  // const [wpData, setWpdata] = React.useState([]);

  // React.useEffect(()=>{
  //     console.log('Heelo World')
  //     axios.get('http://134.209.114.110/wp-json/wp/v2/mySlug')
  //       .then(res => setWpdata(res.data))
  //       .catch(err => console.log(err))
  // }, [])
  // console.log('wpData=', wpData)

  return (
      
    <div>
      {/* Hello {props.name}
      {wpData.map((slug, i) => (
        <div key={i}>{slug.content.rendered.slice(1,-1)}</div>
      ))} */}
    <About />
    <Projects />
    <Links />
    <Footer />

    </div>
  );
};

export default Main;
