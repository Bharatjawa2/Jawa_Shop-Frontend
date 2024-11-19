import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa"; 
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition=React.forwardRef(function Transition(props,ref){
  return <Slide direction='up' ref={ref}{...props}/>
})

const CountryDropdown = () => {

  const[isOpenModel,setisOpenModel]=useState(false);
  const[selectedTab,setSelectedTab]=useState(null);

  const[countryList,setCountryList]=useState([]);

  const selected=(index,country)=>{
    setSelectedTab(index);
    setisOpenModel(false);
    context.setSelectedCountry(country)
  }

  useEffect(()=>{
    setCountryList(context.countryList);
  },[])

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
  
    if (keyword !== "") {
      const list = context.countryList.filter((item) => 
        item.country.toLowerCase().includes(keyword)
      );
      setCountryList(list);
    } else {
      setCountryList(context.countryList);
    }
  };
  

  const context=useContext(MyContext);

  return (
    <>
      <Button className='countrydrop' onClick={()=>setisOpenModel(true)}>
        <div className='info d-flex flex-column'>
          <span className='lable '>Your Location</span>
          <span className='name'>{context.selectedCountry!=="" ? context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+'...' : context.selectedCountry : 'Select Location' }</span>
        </div>
        <span className='ml-auto'><FaAngleDown/></span>
      </Button>
      <Dialog  open={isOpenModel} onClose={()=>setisOpenModel(false)} className='locationModel' TransitionComponent={Transition}>
        <h4 className='mb-0'>Choose your delivery location</h4>
        <p>Enter your address and we will specify the offer for your area</p>
        <Button className='cross' onClick={()=>setisOpenModel(false)}><MdClose/></Button>
        <div className='headerSearch w-100'>
          <input type='text' placeholder='Search your area...' onChange={filterList}/>
          <Button className=''><IoSearch/></Button>
        </div>

        <ul className='AreaList mt-3'>

          {
            countryList?.length!==0 && countryList?.map((item,index)=>{
              return(
                <li key={index}><Button onClick={()=>selected(index,item.country)}
                className={`${selectedTab===index ? 'active':''}`}
                >{item.country}</Button></li>
              )
            })
          }
         
        </ul>
      </Dialog>
    </>
  );
}

export default CountryDropdown;
