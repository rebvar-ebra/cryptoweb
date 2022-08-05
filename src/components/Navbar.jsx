import React,{useEffect,useState} from 'react';
import { Button,Menu,Typography,Avatar } from 'antd';
import{Link} from 'react-router-dom';
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined,} from '@ant-design/icons';
import icon from '../images/logo2.png'


const Navbar = () => {
  const [activeMenu,setActiveMenu] = useState(true);
  const [screenSize,setScreenSize] = useState(null);
  
  useEffect(()=>{
    const handelResize = ()=>setScreenSize(window.innerWidth);
    window.addEventListener('resize',handelResize);
    handelResize();
    return ()=>window.removeEventListener('resize',handelResize)

  },[])
  
  useEffect(()=>{
    if(screenSize < 768){
       setActiveMenu(false)
    } 
    else{
      setActiveMenu(true)
    } 

  },[screenSize])
  
  
  return (
    
    <div className='nav-contaier'>
        <div className='logo-container'>
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">

                <Link to="/"> Cryptomarket</Link>
            </Typography.Title>
            
        </div>
        <Button className="menu-control-container" onClick={()=> setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>
        {activeMenu && (
              <Menu theme='dark'>
              <Menu.Item key="Home" icon={<HomeOutlined /> }>
                <Link to="/"> Home</Link>
              </Menu.Item>
              <Menu.Item  key="CryptoCurrencies" icon={<FundOutlined /> }>
                <Link to="/cryptocurrencies"> CryptoCurrencies</Link>
              </Menu.Item>
              <Menu.Item  key="Exchanges3" icon={<MoneyCollectOutlined /> }>
                <Link to="/exchanges"> Exchanges</Link>
              </Menu.Item>
              <Menu.Item  key="News" icon={<BulbOutlined /> }>
                <Link to="/news"> News</Link>
              </Menu.Item>
            </Menu>

        )}
        

    </div>
  )
}

export default Navbar